/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import {
  Contract,
  ContractFactory,
  PayableOverrides,
} from "@ethersproject/contracts";

import type { CallReceiverMock } from "../CallReceiverMock";

export class CallReceiverMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: PayableOverrides): Promise<CallReceiverMock> {
    return super.deploy(overrides || {}) as Promise<CallReceiverMock>;
  }
  getDeployTransaction(overrides?: PayableOverrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CallReceiverMock {
    return super.attach(address) as CallReceiverMock;
  }
  connect(signer: Signer): CallReceiverMock__factory {
    return super.connect(signer) as CallReceiverMock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CallReceiverMock {
    return new Contract(address, _abi, signerOrProvider) as CallReceiverMock;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "lastValA",
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
    inputs: [],
    name: "lastValB",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_revertFlag",
        type: "bool",
      },
    ],
    name: "setRevertFlag",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_valA",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_valB",
        type: "bytes",
      },
    ],
    name: "testCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405261040a806100136000396000f3fe60806040526004361061003f5760003560e01c8063381ba14014610044578063ad387c8a14610072578063c0aec4d3146100e9578063ebd35e4714610110575b600080fd5b34801561005057600080fd5b506100706004803603602081101561006757600080fd5b5035151561019a565b005b6100706004803603604081101561008857600080fd5b813591908101906040810160208201356401000000008111156100aa57600080fd5b8201836020820111156100bc57600080fd5b803590602001918460018302840111640100000000831117156100de57600080fd5b5090925090506101cb565b3480156100f557600080fd5b506100fe61023e565b60408051918252519081900360200190f35b34801561011c57600080fd5b50610125610244565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561015f578181015183820152602001610147565b50505050905090810190601f16801561018c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b600280547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055565b60025460ff1615610227576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806103af6026913960400191505060405180910390fd5b6000839055610238600183836102ef565b50505050565b60005481565b60018054604080516020600284861615610100027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190941693909304601f810184900484028201840190925281815292918301828280156102e75780601f106102bc576101008083540402835291602001916102e7565b820191906000526020600020905b8154815290600101906020018083116102ca57829003601f168201915b505050505081565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826103255760008555610389565b82601f1061035c578280017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00823516178555610389565b82800160010185558215610389579182015b8281111561038957823582559160200191906001019061036e565b50610395929150610399565b5090565b5b80821115610395576000815560010161039a56fe43616c6c52656365697665724d6f636b237465737443616c6c3a205245564552545f464c4147a26469706673582212208db875d5f31779ad462faac45f6cee1f038bbcca24b57e18e8e616956420a38264736f6c63430007060033";