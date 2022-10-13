// SPDX-License-Identifier: Apache-2.0
pragma solidity 0.8.17;
pragma experimental ABIEncoderV2;

import "../utils/SignatureValidator.sol";

import "./commons/Implementation.sol";
import "./commons/ModuleAuthFixed.sol";
import "./commons/ModuleHooks.sol";
import "./commons/ModuleCalls.sol";
import "./commons/ModuleUpdate.sol";
import "./commons/ModuleCreator.sol";
import "./commons/ModuleExtraAuth.sol";
import "./commons/ModuleStaticAuth.sol";
import "./commons/ModuleEIP4337.sol";

import "../interfaces/receivers/IERC1155Receiver.sol";
import "../interfaces/receivers/IERC721Receiver.sol";

import "../interfaces/IERC1271Wallet.sol";


/**
 * @notice Contains the core functionality arcadeum wallets will inherit.
 * @dev If using a new main module, developpers must ensure that all inherited
 *      contracts by the mainmodule don't conflict and are accounted for to be
 *      supported by the supportsInterface method.
 */
contract MainModule is
  ModuleEIP4337,
  ModuleAuthFixed,
  ModuleExtraAuth,
  ModuleStaticAuth,
  ModuleCalls,
  ModuleHooks,
  ModuleCreator
{
  constructor(
    address _factory,
    address _mainModuleUpgradable,
    address _eip4337Entrypoint
  ) ModuleAuthFixed(
    _factory,
    _mainModuleUpgradable
  ) ModuleEIP4337(
    _eip4337Entrypoint
  ) { }

  function isSelfAuth() internal override(
    ModuleSelfAuth,
    ModuleEIP4337
  ) view returns (bool) {
    return super.isSelfAuth();
  }

  function _isValidImage(
    bytes32 _imageHash
  ) internal override(
    IModuleAuth,
    ModuleAuthFixed,
    ModuleExtraAuth
  ) view returns (bool) {
    return super._isValidImage(_imageHash);
  }

  function _signatureValidation(
    bytes32 _digest,
    bytes calldata _signature
  ) internal view override(
    IModuleAuth,
    ModuleAuth,
    ModuleStaticAuth
  ) returns (bool, bytes32) {
    return super._signatureValidation(_digest, _signature);
  }

  /**
   * @notice Query if a contract implements an interface
   * @param _interfaceID The interface identifier, as specified in ERC-165
   * @return `true` if the contract implements `_interfaceID`
   */
  function supportsInterface(
    bytes4 _interfaceID
  ) public override(
    ModuleAuth,
    ModuleAuthFixed,
    ModuleCalls,
    ModuleHooks,
    ModuleCreator
  ) pure returns (bool) {
    return super.supportsInterface(_interfaceID);
  }
}
