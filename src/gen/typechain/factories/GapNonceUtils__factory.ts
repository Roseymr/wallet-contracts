/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { GapNonceUtils } from "../GapNonceUtils";

export class GapNonceUtils__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GapNonceUtils> {
    return super.deploy(overrides || {}) as Promise<GapNonceUtils>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GapNonceUtils {
    return super.attach(address) as GapNonceUtils;
  }
  connect(signer: Signer): GapNonceUtils__factory {
    return super.connect(signer) as GapNonceUtils__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GapNonceUtils {
    return new Contract(address, _abi, signerOrProvider) as GapNonceUtils;
  }
}

const _abi = [
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
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea264697066735822122070cdbbacd805e0aedd2024c99e57e5dc354e565975c8d3654c0b61b569daafd764736f6c63430007060033";