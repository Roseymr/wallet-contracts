/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MainModule, MainModuleInterface } from "../MainModule";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_space",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_provided",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_current",
        type: "uint256",
      },
    ],
    name: "BadGapNonce",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_space",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_provided",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_current",
        type: "uint256",
      },
    ],
    name: "BadNonce",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_space",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
    ],
    name: "ExpectedEmptyNonce",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_signature",
        type: "bytes4",
      },
    ],
    name: "HookAlreadyExists",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_signature",
        type: "bytes4",
      },
    ],
    name: "HookDoesNotExist",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_implementation",
        type: "address",
      },
    ],
    name: "InvalidImplementation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "InvalidNestedSignature",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_type",
        type: "uint256",
      },
    ],
    name: "InvalidNonceType",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "_s",
        type: "bytes32",
      },
    ],
    name: "InvalidSValue",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "InvalidSignature",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_flag",
        type: "uint256",
      },
    ],
    name: "InvalidSignatureFlag",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "InvalidSignatureLength",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_type",
        type: "uint256",
      },
    ],
    name: "InvalidSignatureType",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_v",
        type: "uint256",
      },
    ],
    name: "InvalidVValue",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_requested",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_available",
        type: "uint256",
      },
    ],
    name: "NotEnoughGas",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "_self",
        type: "address",
      },
    ],
    name: "OnlySelfAuth",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "ReadFirstUint8OutOfBounds",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "SignerIsAddress0",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_type",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_recoverMode",
        type: "bool",
      },
    ],
    name: "UnsupportedSignatureType",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_contract",
        type: "address",
      },
    ],
    name: "CreatedContract",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_space",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_oldNonce",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_newNonce",
        type: "uint256",
      },
    ],
    name: "GapNonceChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "ImplementationUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "NoNonceUsed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_space",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_newNonce",
        type: "uint256",
      },
    ],
    name: "NonceChange",
    type: "event",
  },
  {
    anonymous: true,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "_tx",
        type: "bytes32",
      },
    ],
    name: "TxExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "_tx",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_reason",
        type: "bytes",
      },
    ],
    name: "TxFailed",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "FACTORY",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "INIT_CODE_HASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_signature",
        type: "bytes4",
      },
      {
        internalType: "address",
        name: "_implementation",
        type: "address",
      },
    ],
    name: "addHook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_code",
        type: "bytes",
      },
    ],
    name: "createContract",
    outputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "delegateCall",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "revertOnError",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "gasLimit",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct IModuleCalls.Transaction[]",
        name: "_txs",
        type: "tuple[]",
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signatures",
        type: "bytes",
      },
    ],
    name: "isValidSignature",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_signatures",
        type: "bytes",
      },
    ],
    name: "isValidSignature",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nonce",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_space",
        type: "uint256",
      },
    ],
    name: "readGapNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_signature",
        type: "bytes4",
      },
    ],
    name: "readHook",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_space",
        type: "uint256",
      },
    ],
    name: "readNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_signature",
        type: "bytes4",
      },
    ],
    name: "removeHook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "delegateCall",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "revertOnError",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "gasLimit",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct IModuleCalls.Transaction[]",
        name: "_txs",
        type: "tuple[]",
      },
    ],
    name: "selfExecute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_interfaceID",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_implementation",
        type: "address",
      },
    ],
    name: "updateImplementation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b5060405162002a4c38038062002a4c833981016040819052620000349162000094565b80600060405180606001604052806028815260200162002a24602891396040516200006591903090602001620000c6565b60408051601f198184030181529190528051602090910120608052506001600160a01b031660a052506200010a565b600060208284031215620000a757600080fd5b81516001600160a01b0381168114620000bf57600080fd5b9392505050565b6000835160005b81811015620000e95760208187018101518583015201620000cd565b81811115620000f9576000828501525b509190910191825250602001919050565b60805160a0516128e66200013e600039600081816103ac0152610ea301526000818161036a0152610ed401526128e66000f3fe60806040526004361061012d5760003560e01c806361c2926c116100a5578063affed0e011610074578063bc197c8111610059578063bc197c8114610496578063cc63f2e2146104de578063f23a6e61146104fe57610134565b8063affed0e014610461578063b93ea7ad1461047657610134565b806361c2926c146103ee5780637a9a16281461040e5780638c3f55631461042e57806390042baf1461044e57610134565b80631a9b2337116100fc578063257671f5116100e1578063257671f5146103585780632dd310001461039a5780634fcf3eca146103ce57610134565b80631a9b2337146102f357806320c13b0b1461033857610134565b806301ffc9a714610208578063025b22bc1461023d578063150b7a021461025d5780631626ba7e146102d357610134565b3661013457005b60006101636000357fffffffff0000000000000000000000000000000000000000000000000000000016610544565b905073ffffffffffffffffffffffffffffffffffffffff811615610206576000808273ffffffffffffffffffffffffffffffffffffffff166000366040516101ac929190611dc6565b600060405180830381855af49150503d80600081146101e7576040519150601f19603f3d011682016040523d82523d6000602084013e6101ec565b606091505b5091509150816101fe57805160208201fd5b805160208201f35b005b34801561021457600080fd5b50610228610223366004611e04565b610598565b60405190151581526020015b60405180910390f35b34801561024957600080fd5b50610206610258366004611e4a565b6105a3565b34801561026957600080fd5b506102a2610278366004611eae565b7f150b7a020000000000000000000000000000000000000000000000000000000095945050505050565b6040517fffffffff000000000000000000000000000000000000000000000000000000009091168152602001610234565b3480156102df57600080fd5b506102a26102ee366004611f1d565b6106a3565b3480156102ff57600080fd5b5061031361030e366004611e04565b6106ec565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610234565b34801561034457600080fd5b506102a2610353366004611f69565b6106f7565b34801561036457600080fd5b5061038c7f000000000000000000000000000000000000000000000000000000000000000081565b604051908152602001610234565b3480156103a657600080fd5b506103137f000000000000000000000000000000000000000000000000000000000000000081565b3480156103da57600080fd5b506102066103e9366004611e04565b610758565b3480156103fa57600080fd5b50610206610409366004612257565b61088a565b34801561041a57600080fd5b5061020661042936600461228c565b6109a0565b34801561043a57600080fd5b5061038c6104493660046122e3565b610a32565b61031361045c3660046122fc565b610a5e565b34801561046d57600080fd5b5061038c610afa565b34801561048257600080fd5b50610206610491366004612331565b610b0b565b3480156104a257600080fd5b506102a26104b13660046123ab565b7fbc197c810000000000000000000000000000000000000000000000000000000098975050505050505050565b3480156104ea57600080fd5b5061038c6104f93660046122e3565b610c50565b34801561050a57600080fd5b506102a2610519366004612466565b7ff23a6e61000000000000000000000000000000000000000000000000000000009695505050505050565b60006105927fbe27a319efc8734e89e26ba4bc95f5c788584163b959f03fa04e2d7ab4b9a1207fffffffff000000000000000000000000000000000000000000000000000000008416610c78565b92915050565b600061059282610cd6565b3330146105e9576040517fe12588940000000000000000000000000000000000000000000000000000000081523360048201523060248201526044015b60405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81163b61064f576040517f0c76093700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff821660048201526024016105e0565b610657813055565b60405173ffffffffffffffffffffffffffffffffffffffff821681527f310ba5f1d2ed074b51e2eccd052a47ae9ab7c6b800d1fca3db3999d6a592ca039060200160405180910390a150565b6000806106b1858585610d32565b50905080156106e357507f1626ba7e0000000000000000000000000000000000000000000000000000000090506106e5565b505b9392505050565b600061059282610544565b60008061071c868660405161070d929190611dc6565b60405180910390208585610d32565b509050801561074e57507f20c13b0b000000000000000000000000000000000000000000000000000000009050610750565b505b949350505050565b333014610799576040517fe12588940000000000000000000000000000000000000000000000000000000081523360048201523060248201526044016105e0565b60006107a482610544565b73ffffffffffffffffffffffffffffffffffffffff1603610815576040517f1c3812cc0000000000000000000000000000000000000000000000000000000081527fffffffff00000000000000000000000000000000000000000000000000000000821660048201526024016105e0565b604080517fbe27a319efc8734e89e26ba4bc95f5c788584163b959f03fa04e2d7ab4b9a1206020808301919091527fffffffff00000000000000000000000000000000000000000000000000000000841682840152825180830384018152606090920190925280519101206000905550565b50565b3330146108cb576040517fe12588940000000000000000000000000000000000000000000000000000000081523360048201523060248201526044016105e0565b6000610990826040516020016108e19190612601565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815282825280516020918201207f1901000000000000000000000000000000000000000000000000000000000000848301524660228501523060601b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000166042850152605680850191909152825180850390910181526076909301909152815191012090565b905061099c8183610f62565b5050565b6109a983611141565b6000806109df85876040516020016109c2929190612648565b604051602081830303815290604052805190602001208585610d32565b9150915081610a20578084846040517f8f4a234f0000000000000000000000000000000000000000000000000000000081526004016105e0939291906126aa565b610a2a8187610f62565b505050505050565b60006105927f8d0bf1fd623d628c741362c1289948e57b3e2905218c676d3e69abee36d6ae2e83610c78565b6000333014610aa1576040517fe12588940000000000000000000000000000000000000000000000000000000081523360048201523060248201526044016105e0565b81516020830134f060405173ffffffffffffffffffffffffffffffffffffffff821681529091507fa506ad4e7f05eceba62a023c3219e5bd98a615f4fa87e2afb08a2da5cf62bf0c9060200160405180910390a1919050565b6000610b066000610a32565b905090565b333014610b4c576040517fe12588940000000000000000000000000000000000000000000000000000000081523360048201523060248201526044016105e0565b6000610b5783610544565b73ffffffffffffffffffffffffffffffffffffffff1614610bc8576040517f5b4d6d6a0000000000000000000000000000000000000000000000000000000081527fffffffff00000000000000000000000000000000000000000000000000000000831660048201526024016105e0565b604080517fbe27a319efc8734e89e26ba4bc95f5c788584163b959f03fa04e2d7ab4b9a1206020808301919091527fffffffff000000000000000000000000000000000000000000000000000000008516828401528251808303840181526060909201909252805191012073ffffffffffffffffffffffffffffffffffffffff821690555050565b60006105927f2a37c7c3c3449f4795b05559a0f92a1730815bf20be16b02bbd6dbb8ae8532fe835b6000808383604051602001610c97929190918252602082015260400190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012054949350505050565b60007f6ffbd451000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831601610d2957506001919050565b610592826113c9565b600080600080610d42868661150a565b90925090504660ff8316610d595760009150610daf565b60018360ff160315610daf5760028360ff1603610d7857506000610daf565b6040517fbff01fa700000000000000000000000000000000000000000000000000000000815260ff841660048201526024016105e0565b604080517f1901000000000000000000000000000000000000000000000000000000000000602080830191909152602282018490523060601b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016604283015260568083018c905283518084039091018152607690920190925280519101209350506000806000610e42868a8a87611557565b925092509250808210158015610f535750610f53836040517fff0000000000000000000000000000000000000000000000000000000000000060208201527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000060601b166021820152603581018290527f000000000000000000000000000000000000000000000000000000000000000060558201526000903090607501604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012073ffffffffffffffffffffffffffffffffffffffff161492915050565b96505050505050935093915050565b60005b815181101561113c576000828281518110610f8257610f826126cd565b602002602001015190506000606082604001515a1015610fdd5782604001515a6040517f9fa72982000000000000000000000000000000000000000000000000000000008152600481019290925260248201526044016105e0565b82511561107557826060015173ffffffffffffffffffffffffffffffffffffffff168360400151600014611015578360400151611017565b5a5b8460a0015160405161102991906126fc565b6000604051808303818686f4925050503d8060008114611065576040519150601f19603f3d011682016040523d82523d6000602084013e61106a565b606091505b50909250905061110a565b826060015173ffffffffffffffffffffffffffffffffffffffff16836080015184604001516000146110ab5784604001516110ad565b5a5b908560a001516040516110c091906126fc565b600060405180830381858888f193505050503d80600081146110fe576040519150601f19603f3d011682016040523d82523d6000602084013e611103565b606091505b5090925090505b81156111265760405186815260200160405180910390a0611131565b611131838783611733565b505050600101610f65565b505050565b600080600061114f84611783565b919450925090508161124557600061116684610a32565b90508181146111b2576040517f9b6514f40000000000000000000000000000000000000000000000000000000081526004810185905260248101839052604481018290526064016105e0565b604080517f8d0bf1fd623d628c741362c1289948e57b3e2905218c676d3e69abee36d6ae2e60208083019190915281830187905282518083038401815260609092019092528051910120600183019081905560408051868152602081018390527f1f180c27086c7a39ea2a7b25239d1ab92348f07ca7bb59d1438fcf527568f881910160405180910390a1505050505050565b6001820361133657600061125884610c50565b90508082116112a4576040517fcf9c69b80000000000000000000000000000000000000000000000000000000081526004810185905260248101839052604481018290526064016105e0565b604080517f2a37c7c3c3449f4795b05559a0f92a1730815bf20be16b02bbd6dbb8ae8532fe60208083019190915281830187905282518083038401815260608301808552815191909201208590558690526080810183905260a0810184905290517fd9aa9f0269d7ebe0e495362c56c21163d40a52f13ad524fb0e844ff41811f0529181900360c00190a15050505050565b600282036113bb578215158061134b57508015155b1561138c576040517f333fc10200000000000000000000000000000000000000000000000000000000815260048101849052602481018290526044016105e0565b6040517fffcdc510cc982d77c612ebe049ca925f66c6effb232c431c01fd0e79f6dad4f590600090a150505050565b6113c3612718565b50505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167fec6aba5000000000000000000000000000000000000000000000000000000000148061145c57507fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000145b806114a857507fffffffff0000000000000000000000000000000000000000000000000000000082167f150b7a0200000000000000000000000000000000000000000000000000000000145b806114f457507fffffffff0000000000000000000000000000000000000000000000000000000082167fc0ee0b8a00000000000000000000000000000000000000000000000000000000145b1561150157506001919050565b610592826117e3565b60008082810361154a5783836040517f322952a30000000000000000000000000000000000000000000000000000000081526004016105e0929190612747565b5050503560f81c90600190565b8281013560f01c600081600284015b8581101561172857600281019087013560f881901c9060f01c60ff1660007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83016115bc5750601483019289013560601c6116d8565b826115f25760008460420190506115e48c8c8c889085926115df9392919061275b565b61183f565b9683019690945090506116d8565b600283036116a357838a013560601c601485019450905060008a85013560f01c600286018161ffff1691508096508192505050600081860190506116488d848e8e8a9086926116439392919061275b565b611b02565b611696578c838d8d899085926116609392919061275b565b6040517f9a9462320000000000000000000000000000000000000000000000000000000081526004016105e09493929190612785565b9683019694506116d89050565b6040517fb2505f7c000000000000000000000000000000000000000000000000000000008152600481018490526024016105e0565b604080516020810189905290810183905273ffffffffffffffffffffffffffffffffffffffff82166060820152608001604051602081830303815290604052805190602001209650505050611566565b509450945094915050565b82602001511561174557805160208201fd5b7f3dbd1590ea96dd3253a91f24e64e3a502e1225d602a5731357bc12643070ccd782826040516117769291906127c5565b60405180910390a1505050565b606081901c605882901c60ff166affffffffffffffffffffff831660028211156117dc576040517ff5587439000000000000000000000000000000000000000000000000000000008152600481018390526024016105e0565b9193909250565b60007ffda4dd44000000000000000000000000000000000000000000000000000000007fffffffff0000000000000000000000000000000000000000000000000000000083160161183657506001919050565b61059282611ca6565b60006042821461187f5782826040517f2ee17a3d0000000000000000000000000000000000000000000000000000000081526004016105e0929190612747565b600061189861188f6001856127de565b85013560f81c90565b60ff169050604084013560f81c843560208601357f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a081111561190c578686826040517fad4aac760000000000000000000000000000000000000000000000000000000081526004016105e09392919061281c565b8260ff16601b1415801561192457508260ff16601c14155b15611961578686846040517fe578897e0000000000000000000000000000000000000000000000000000000081526004016105e093929190612840565b600184036119ce576040805160008152602081018083528a905260ff851691810191909152606081018390526080810182905260019060a0015b6020604051602081039080840390855afa1580156119bd573d6000803e3d6000fd5b505050602060405103519450611aa6565b60028403611a6b576040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101899052600190605c01604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181528282528051602091820120600084529083018083525260ff861690820152606081018490526080810183905260a00161199b565b86868560016040517f9dfba8520000000000000000000000000000000000000000000000000000000081526004016105e09493929190612867565b73ffffffffffffffffffffffffffffffffffffffff8516611af75786866040517f6c1719d20000000000000000000000000000000000000000000000000000000081526004016105e0929190612747565b505050509392505050565b6000808383611b126001826127de565b818110611b2157611b216126cd565b919091013560f81c9150506001811480611b3b5750600281145b15611b80578473ffffffffffffffffffffffffffffffffffffffff16611b6287868661183f565b73ffffffffffffffffffffffffffffffffffffffff1614915061074e565b60038103611c6b5773ffffffffffffffffffffffffffffffffffffffff8516631626ba7e8786600087611bb46001826127de565b92611bc19392919061275b565b6040518463ffffffff1660e01b8152600401611bdf939291906126aa565b602060405180830381865afa158015611bfc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c209190612893565b7fffffffff00000000000000000000000000000000000000000000000000000000167f1626ba7e0000000000000000000000000000000000000000000000000000000014915061074e565b83838260006040517f9dfba8520000000000000000000000000000000000000000000000000000000081526004016105e09493929190612867565b60007f0b050cdb000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831601611cf957506001919050565b6105928260007fffffffff0000000000000000000000000000000000000000000000000000000082161580611d6f57507fffffffff0000000000000000000000000000000000000000000000000000000082167f36e7817500000000000000000000000000000000000000000000000000000000145b15611d7c57506001919050565b7f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831614610592565b8183823760009101908152919050565b7fffffffff000000000000000000000000000000000000000000000000000000008116811461088757600080fd5b600060208284031215611e1657600080fd5b81356106e581611dd6565b803573ffffffffffffffffffffffffffffffffffffffff81168114611e4557600080fd5b919050565b600060208284031215611e5c57600080fd5b6106e582611e21565b60008083601f840112611e7757600080fd5b50813567ffffffffffffffff811115611e8f57600080fd5b602083019150836020828501011115611ea757600080fd5b9250929050565b600080600080600060808688031215611ec657600080fd5b611ecf86611e21565b9450611edd60208701611e21565b935060408601359250606086013567ffffffffffffffff811115611f0057600080fd5b611f0c88828901611e65565b969995985093965092949392505050565b600080600060408486031215611f3257600080fd5b83359250602084013567ffffffffffffffff811115611f5057600080fd5b611f5c86828701611e65565b9497909650939450505050565b60008060008060408587031215611f7f57600080fd5b843567ffffffffffffffff80821115611f9757600080fd5b611fa388838901611e65565b90965094506020870135915080821115611fbc57600080fd5b50611fc987828801611e65565b95989497509550505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160c0810167ffffffffffffffff8111828210171561202757612027611fd5565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561207457612074611fd5565b604052919050565b80358015158114611e4557600080fd5b600082601f83011261209d57600080fd5b813567ffffffffffffffff8111156120b7576120b7611fd5565b6120e860207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8401160161202d565b8181528460208386010111156120fd57600080fd5b816020850160208301376000918101602001919091529392505050565b600082601f83011261212b57600080fd5b8135602067ffffffffffffffff8083111561214857612148611fd5565b8260051b61215783820161202d565b938452858101830193838101908886111561217157600080fd5b84880192505b8583101561224b5782358481111561218f5760008081fd5b880160c0818b037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0018113156121c55760008081fd5b6121cd612004565b6121d888840161207c565b815260406121e781850161207c565b898301526060808501358284015260809150612204828601611e21565b9083015260a0848101358284015292840135928884111561222757600091508182fd5b6122358e8b8688010161208c565b9083015250845250509184019190840190612177565b98975050505050505050565b60006020828403121561226957600080fd5b813567ffffffffffffffff81111561228057600080fd5b6107508482850161211a565b600080600080606085870312156122a257600080fd5b843567ffffffffffffffff808211156122ba57600080fd5b6122c68883890161211a565b9550602087013594506040870135915080821115611fbc57600080fd5b6000602082840312156122f557600080fd5b5035919050565b60006020828403121561230e57600080fd5b813567ffffffffffffffff81111561232557600080fd5b6107508482850161208c565b6000806040838503121561234457600080fd5b823561234f81611dd6565b915061235d60208401611e21565b90509250929050565b60008083601f84011261237857600080fd5b50813567ffffffffffffffff81111561239057600080fd5b6020830191508360208260051b8501011115611ea757600080fd5b60008060008060008060008060a0898b0312156123c757600080fd5b6123d089611e21565b97506123de60208a01611e21565b9650604089013567ffffffffffffffff808211156123fb57600080fd5b6124078c838d01612366565b909850965060608b013591508082111561242057600080fd5b61242c8c838d01612366565b909650945060808b013591508082111561244557600080fd5b506124528b828c01611e65565b999c989b5096995094979396929594505050565b60008060008060008060a0878903121561247f57600080fd5b61248887611e21565b955061249660208801611e21565b94506040870135935060608701359250608087013567ffffffffffffffff8111156124c057600080fd5b6124cc89828a01611e65565b979a9699509497509295939492505050565b60005b838110156124f95781810151838201526020016124e1565b838111156113c35750506000910152565b600081518084526125228160208601602086016124de565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600081518084526020808501808196508360051b8101915082860160005b858110156125f45782840389528151805115158552858101511515868601526040808201519086015260608082015173ffffffffffffffffffffffffffffffffffffffff16908601526080808201519086015260a09081015160c0918601829052906125e08187018361250a565b9a87019a9550505090840190600101612572565b5091979650505050505050565b60408152600560408201527f73656c663a00000000000000000000000000000000000000000000000000000060608201526080602082015260006106e56080830184612554565b8281526040602082015260006107506040830184612554565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b8381526040602082015260006126c4604083018486612661565b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000825161270e8184602087016124de565b9190910192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b602081526000610750602083018486612661565b6000808585111561276b57600080fd5b8386111561277857600080fd5b5050820193919092039150565b84815273ffffffffffffffffffffffffffffffffffffffff841660208201526060604082015260006127bb606083018486612661565b9695505050505050565b828152604060208201526000610750604083018461250a565b600082821015612817577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500390565b604081526000612830604083018587612661565b9050826020830152949350505050565b604081526000612854604083018587612661565b905060ff83166020830152949350505050565b60608152600061287b606083018688612661565b60208301949094525090151560409091015292915050565b6000602082840312156128a557600080fd5b81516106e581611dd656fea2646970667358221220bd35692b07969092f7e37e1fa6c05035e32d432bc4f0bcb85a1e37b59da46bae64736f6c634300080e0033603a600e3d39601a805130553df3363d3d373d3d3d363d30545af43d82803e903d91601857fd5bf3";

export class MainModule__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _factory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MainModule> {
    return super.deploy(_factory, overrides || {}) as Promise<MainModule>;
  }
  getDeployTransaction(
    _factory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_factory, overrides || {});
  }
  attach(address: string): MainModule {
    return super.attach(address) as MainModule;
  }
  connect(signer: Signer): MainModule__factory {
    return super.connect(signer) as MainModule__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MainModuleInterface {
    return new utils.Interface(_abi) as MainModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MainModule {
    return new Contract(address, _abi, signerOrProvider) as MainModule;
  }
}
