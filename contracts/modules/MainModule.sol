pragma solidity ^0.6.4;
pragma experimental ABIEncoderV2;

import "../utils/SignatureValidator.sol";
import "./commons/Implementation.sol";


/**
 * To do
 *   - Recovery
 *   - Force module only
 *   - private vs internal
 *   - Public vs External for main module
 */
contract MainModule is Implementation, SignatureValidator {
  mapping(bytes4 => address) public hooks;
  mapping(address => bool) public modules;

  /***********************************|
  |             Constants             |
  |__________________________________*/

  // Could be ENUM
  enum Action {
    Illegal,      // 0x00 Default value
    Delegate,     // Delegate call
    External,     // External call
    AddModule,    // Adding a module
    RemoveModule, // Removing a module
    AddHook,      // Adding a hook
    RemoveHook,   // Removing a hook
    UpdateImp,    // Replaces the main implementation
    NActionTypes  // Number of valid actions
  }

  // keccak256("placeholder-init-code-hash")
  bytes32 public constant INIT_CODE_HASH = 0xa4e481c95834a9f994a80cd4ecc88bdd3e78ff54100ecf2903aa9ef3eed54a91;

  // keccak256("placeholder-factory")[12:]
  address public constant FACTORY = address(0x52AA901CAD8AFf3Cf157715c19632F79D9B2d049);

  /***********************************|
  |             Variables             |
  |__________________________________*/

  uint256 public nonce = 0;

  /***********************************|
  |               Events              |
  |__________________________________*/

  event NonceChange(uint256 newNonce);

  event TxFailed(uint256 _index, bytes _reason);

  /***********************************|
  |              Structs              |
  |__________________________________*/

  struct Transaction {
    Action action;  // Action to use for the transaction
    bool optional;  // Ignored upon failure
    address target; // Address of the contract to call
    uint256 value;  // Amount of ETH to pass with the call
    bytes data;     // calldata to pass
  }

  /***********************************|
  |     Authentication Functions      |
  |__________________________________*/

  /**
   * @notice Verify if signer is default wallet owner
   * @param _data Bytes array the user hashed and signed
   * @param _signature Encoded signature
   *       (bytes32 r, bytes32 s, uint8 v, uint256 nonce, SignatureType sigType)
   */
  function _signatureValidation(bytes memory _data, bytes memory _signature)
    private
  {
    // Retrieve current nonce for this wallet
    uint256 current_nonce = nonce; // Lowest valid nonce for signer
    uint256 signed_nonce = uint256(_signature.readBytes32(65));  // Nonce passed in the signature object

    // Verify if nonce is valid
    require(
      (signed_nonce >= current_nonce) && (signed_nonce < (current_nonce + 100)),
      "MainModule#_auth: INVALID_NONCE"
    );

    // Update signature nonce
    nonce = signed_nonce + 1;
    emit NonceChange(signed_nonce + 1);

    // Retrieve the signer
    bytes32 tx_hash = keccak256(abi.encode(address(this), signed_nonce, _data));
    address signer = recoverSigner(tx_hash, _signature);

    // Verifier if wallet was created for signer
    address candidate = address(uint256(keccak256(abi.encodePacked(byte(0xff), FACTORY, bytes32(uint256(signer)), INIT_CODE_HASH))));
    require(candidate == address(this), "MainModule#_signatureValidation: INVALID_SIGNATURE");
  }

  /***********************************|
  |      Tx Execution Functions       |
  |__________________________________*/

  /**
   * @notice Allow wallet owner to execute an action
   * @param _txs       Transactions to process
   * @param _signature Encoded signature
   */
  function execute(Transaction[] memory _txs, bytes memory _signature)
    public
  {
    // Check if signature is valid and update nonce
    _signatureValidation(abi.encode(_txs), _signature);

    for (uint256 i = 0; i < _txs.length; i++) {
      // Execute every transaction
      _actionExecution(_txs[i], i);
    }
  }

  /**
   * @notice Logs a failed transaction, reverts if the transaction is not optional
   * @param _tx      Transaction that is reverting
   * @param _index   Index of transaction in batch
   * @param _reason  Revert message
   */
  function _revert(Transaction memory _tx, uint256 _index, string memory _reason) internal {
    // Encoded like a call to a `Error(string)` function, as defined
    // by the Solidity 0.6.0 documentation
    // Ref: https://solidity.readthedocs.io/en/v0.6.0/control-structures.html#id4
    _revertBytes(_tx, _index, abi.encodeWithSelector(0x08c379a0, _reason));
  }

  /**
   * @notice Logs a failed transaction, reverts if the transaction is not optional
   * @param _tx      Transaction that is reverting
   * @param _index   Index of transaction in batch
   * @param _reason  Encoded revert message
   */
  function _revertBytes(Transaction memory _tx, uint256 _index, bytes memory _reason) internal {
    if (_tx.optional) {
      emit TxFailed(_index, _reason);
    } else {
      assembly { revert(add(_reason, 0x20), mload(_reason)) }
    }
  }

  /**
   * @notice Allow wallet owner to execute an action
   * @param _tx     Transaction to process
   * @param _index  Index of transaction in batch
   */
  function _actionExecution(Transaction memory _tx, uint256 _index)
    internal
  {
    // Performs an external call
    if (_tx.action == Action.External) {
      // solium-disable-next-line security/no-call-value
      (bool success, bytes memory result) = _tx.target.call.value(_tx.value)(_tx.data);
      if (!success) _revertBytes(_tx, _index, result);

    // Delegates a call to a provided implementation
    } else if (_tx.action == Action.Delegate) {
      (bool success, bytes memory result) = _tx.target.delegatecall(_tx.data);
      if (!success) _revertBytes(_tx, _index, result);

    // Adds a new module to the wallet
    } else if (_tx.action == Action.AddModule) {
      if (!modules[_tx.target]) {
        modules[_tx.target] = true;
      } else {
        _revert(_tx, _index, "MainModule#_actionExecution: MODULE_ALREADY_REGISTERED");
      }

    // Adds a new module to the wallet
    } else if (_tx.action == Action.RemoveModule) {
      if (modules[_tx.target]) {
        modules[_tx.target] = false;
      } else {
        _revert(_tx, _index, "MainModule#_actionExecution: MODULE_NOT_REGISTERED");
      }

    // Adds a new hook to the wallet
    } else if (_tx.action == Action.AddHook) {
      bytes4 hook_signature = abi.decode(_tx.data, (bytes4));
      if (hooks[hook_signature] == address(0x0)) {
        hooks[hook_signature] = _tx.target;
      } else {
        _revert(_tx, _index, "MainModule#_actionExecution: HOOK_ALREADY_REGISTERED");
      }

    // Remove a hook from the wallet
    } else if (_tx.action == Action.RemoveHook) {
      bytes4 hook_signature = abi.decode(_tx.data, (bytes4));
      if (hooks[hook_signature] != address(0x0)){
        hooks[hook_signature] = _tx.target;
      } else {
        _revert(_tx, _index, "MainModule#_actionExecution: HOOK_NOT_REGISTERED");
      }

    // Update wallet implementation
    } else if (_tx.action == Action.UpdateImp) {
      address new_implementation = abi.decode(_tx.data, (address));
      if (new_implementation != address(0x0)) {
        _setImplementation(new_implementation);
      } else {
        _revert(_tx, _index, "MainModule#_actionExecution: INVALID_IMPLEMENTATION");
      }
    } else {
      _revert(_tx, _index, "MainModule#_actionExecution: INVALID_ACTION");
    }
  }

  /* solhint-disable */

  /**
   * @notice Allows the wallet to receive ETH
   */
  receive() external payable { }

  /* solhint-enable */
}
