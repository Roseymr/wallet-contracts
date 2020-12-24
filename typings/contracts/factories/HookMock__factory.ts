/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { HookMock } from "../HookMock";

export class HookMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<HookMock> {
    return super.deploy(overrides || {}) as Promise<HookMock>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): HookMock {
    return super.attach(address) as HookMock;
  }
  connect(signer: Signer): HookMock__factory {
    return super.connect(signer) as HookMock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HookMock {
    return new Contract(address, _abi, signerOrProvider) as HookMock;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_num",
        type: "uint256",
      },
    ],
    name: "onHookMockCall",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b5060958061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063b68fe6cf14602d575b600080fd5b604760048036036020811015604157600080fd5b50356059565b60408051918252519081900360200190f35b6002029056fea26469706673582212206f5c160773b693b9db657913a13a894a3f98df566f31f52a440537f493f34d2064736f6c63430007060033";