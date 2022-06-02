/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { RequireUtils } from "../RequireUtils";

export class RequireUtils__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _factory: string,
    _mainModule: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RequireUtils> {
    return super.deploy(
      _factory,
      _mainModule,
      overrides || {}
    ) as Promise<RequireUtils>;
  }
  getDeployTransaction(
    _factory: string,
    _mainModule: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_factory, _mainModule, overrides || {});
  }
  attach(address: string): RequireUtils {
    return super.attach(address) as RequireUtils;
  }
  connect(signer: Signer): RequireUtils__factory {
    return super.connect(signer) as RequireUtils__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RequireUtils {
    return new Contract(address, _abi, signerOrProvider) as RequireUtils;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_mainModule",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_wallet",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "_imageHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_threshold",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_signers",
        type: "bytes",
      },
    ],
    name: "RequiredConfig",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_wallet",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_signer",
        type: "address",
      },
    ],
    name: "RequiredSigner",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "knownImageHashes",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "lastImageHashUpdate",
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
    ],
    name: "lastSignerUpdate",
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
    ],
    name: "lastWalletUpdate",
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
        name: "_wallet",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_threshold",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "weight",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "signer",
            type: "address",
          },
        ],
        internalType: "struct RequireUtils.Member[]",
        name: "_members",
        type: "tuple[]",
      },
      {
        internalType: "bool",
        name: "_index",
        type: "bool",
      },
    ],
    name: "publishConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_wallet",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_sizeMembers",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
      {
        internalType: "bool",
        name: "_index",
        type: "bool",
      },
    ],
    name: "publishInitialSigners",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_wallet",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
    ],
    name: "requireMinNonce",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_expiration",
        type: "uint256",
      },
    ],
    name: "requireNonExpired",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b50604051620022c3380380620022c38339810160408190526200003491620000b8565b6001600160a01b03821660a052604080516060810190915260288082526200229b6020830139816001600160a01b031660405160200162000077929190620000f0565b60408051601f19818403018152919052805160209091012060805250620001349050565b80516001600160a01b0381168114620000b357600080fd5b919050565b60008060408385031215620000cc57600080fd5b620000d7836200009b565b9150620000e7602084016200009b565b90509250929050565b6000835160005b81811015620001135760208187018101518583015201620000f7565b8181111562000123576000828501525b509190910191825250602001919050565b60805160a05161213362000168600039600081816103f50152610aa30152600081816104260152610ad401526121336000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80637ae996381161005b5780637ae99638146101075780637f29d53814610127578063b472f0a21461013a578063e717aba91461014d57600080fd5b80631551f0ab1461008d5780631cd05dc4146100bf57806344d466c2146100df5780637082503b146100f4575b600080fd5b6100ad61009b366004611bab565b60036020526000908152604090205481565b60405190815260200160405180910390f35b6100ad6100cd366004611bed565b60006020819052908152604090205481565b6100f26100ed366004611c1f565b61016d565b005b6100f2610102366004611cef565b61062a565b6100ad610115366004611bed565b60026020526000908152604090205481565b6100f2610135366004611bab565b610cd8565b6100f2610148366004611de7565b610d6a565b6100ad61015b366004611bed565b60016020526000908152604090205481565b8360005b8381101561021b578185858381811061018c5761018c611e11565b905060400201600001358686848181106101a8576101a8611e11565b90506040020160200160208101906101c09190611bed565b60408051602081019490945283019190915273ffffffffffffffffffffffffffffffffffffffff166060820152608001604051602081830303815290604052805190602001209150808061021390611e6f565b915050610171565b506040517f51605d80000000000000000000000000000000000000000000000000000000006020820152600090819073ffffffffffffffffffffffffffffffffffffffff891690602401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529082905261029d91611ed7565b6000604051808303816000865af19150503d80600081146102da576040519150601f19603f3d011682016040523d82523d6000602084013e6102df565b606091505b50915091508180156102f2575080516020145b156103a95760008180602001905181019061030d9190611ef3565b90508381146103a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f526571756972655574696c73237075626c697368436f6e6669673a20554e455860448201527f5045435445445f494d4147455f4841534800000000000000000000000000000060648201526084015b60405180910390fd5b50610552565b6040517fff0000000000000000000000000000000000000000000000000000000000000060208201527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000060601b166021820152603581018490527f0000000000000000000000000000000000000000000000000000000000000000605582015273ffffffffffffffffffffffffffffffffffffffff8916906075016040516020818303038152906040528051906020012060001c73ffffffffffffffffffffffffffffffffffffffff161461052357604080517f08c379a00000000000000000000000000000000000000000000000000000000081526020600482015260248101919091527f526571756972655574696c73237075626c697368436f6e6669673a20554e455860448201527f5045435445445f434f554e5445524641435455414c5f494d4147455f48415348606482015260840161039a565b83156105525773ffffffffffffffffffffffffffffffffffffffff881660009081526002602052604090208390555b828873ffffffffffffffffffffffffffffffffffffffff167fb502b7446ca079086188acf3abef47c2f464f2ee9a72fcdf05ffcb74dcc17cee89898960405160200161059f929190611f0c565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290526105d89291611fba565b60405180910390a383156106205773ffffffffffffffffffffffffffffffffffffffff8816600090815260016020908152604080832043908190558684526003909252909120555b5050505050505050565b60008061063684610ea6565b604080517f190100000000000000000000000000000000000000000000000000000000000060208083019190915246602283015260608c901b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016604283015260568083018c90528351808403909101815260769092019092528051910120919350915061ffff831660008767ffffffffffffffff8111156106da576106da611cc0565b60405190808252806020026020018201604052801561071f57816020015b60408051808201909152600080825260208201528152602001906001900390816106f85790505b50905060005b87518510156109c8576000808061073c8b89610f4b565b995060ff91821694501691507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8301610782576107798b89611009565b98509050610920565b826107b45760606107938c8a6110be565b995090506107a188826111ac565b91506107ae8f838d611643565b50610920565b60028303610898576107c68b89611009565b9850905060006107d68c8a6116d1565b995061ffff16905060606107eb8d8b8461177f565b9a5090506107fa8984836118ac565b610886576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4d6f64756c6541757468235f7369676e617475726556616c69646174696f6e3a60448201527f20494e56414c49445f5349474e41545552450000000000000000000000000000606482015260840161039a565b50506108938e828c611643565b610920565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603a60248201527f526571756972655574696c73237075626c697368496e697469616c5369676e6560448201527f72733a20494e56414c49445f5349474e41545552455f464c4147000000000000606482015260840161039a565b60405180604001604052808381526020018273ffffffffffffffffffffffffffffffffffffffff1681525085858151811061095d5761095d611e11565b6020026020010181905250838061097390611e6f565b60408051602081018a905290810185905273ffffffffffffffffffffffffffffffffffffffff841660608201529095506080019050604051602081830303815290604052805190602001209550505050610725565b888114610a57576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603960248201527f526571756972655574696c73237075626c697368496e697469616c5369676e6560448201527f72733a20494e56414c49445f4d454d424552535f434f554e5400000000000000606482015260840161039a565b6040517fff0000000000000000000000000000000000000000000000000000000000000060208201527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000060601b166021820152603581018490527f0000000000000000000000000000000000000000000000000000000000000000605582015273ffffffffffffffffffffffffffffffffffffffff8c16906075016040516020818303038152906040528051906020012060001c73ffffffffffffffffffffffffffffffffffffffff1614610bf5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152604860248201527f526571756972655574696c73237075626c697368496e697469616c5369676e6560448201527f72733a20554e45585045435445445f434f554e5445524641435455414c5f494d60648201527f4147455f48415348000000000000000000000000000000000000000000000000608482015260a40161039a565b828b73ffffffffffffffffffffffffffffffffffffffff167fb502b7446ca079086188acf3abef47c2f464f2ee9a72fcdf05ffcb74dcc17cee8885604051602001610c409190611fdb565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815290829052610c799291612040565b60405180910390a38615610ccb5773ffffffffffffffffffffffffffffffffffffffff8b1660008181526001602090815260408083204390819055878452600383528184205592825260029052208390555b5050505050505050505050565b804210610d67576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f526571756972655574696c7323726571756972654e6f6e457870697265643a2060448201527f4558504952454400000000000000000000000000000000000000000000000000606482015260840161039a565b50565b600080610d7683611acd565b6040517f8c3f556300000000000000000000000000000000000000000000000000000000815260048101839052919350915060009073ffffffffffffffffffffffffffffffffffffffff861690638c3f556390602401602060405180830381865afa158015610de9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e0d9190611ef3565b905081811015610e9f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f526571756972655574696c7323726571756972654d696e4e6f6e63653a204e4f60448201527f4e43455f42454c4f575f52455155495245440000000000000000000000000000606482015260840161039a565b5050505050565b6020810151815160f09190911c90600290811115610f46576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f4c696242797465732372656164466972737455696e7431363a204f55545f4f4660448201527f5f424f554e445300000000000000000000000000000000000000000000000000606482015260840161039a565b915091565b8082016020015160f881901c9060f01c60ff1660028301838111610f7157610f7161205d565b8451811115611002576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4c69624279746573237265616455696e743855696e74383a204f55545f4f465f60448201527f424f554e44530000000000000000000000000000000000000000000000000000606482015260840161039a565b9250925092565b8082016020015160601c601482018281116110265761102661205d565b83518111156110b7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f4c696242797465732372656164416464726573733a204f55545f4f465f424f5560448201527f4e44530000000000000000000000000000000000000000000000000000000000606482015260840161039a565b9250929050565b60408051604280825260808201909252606091600091906020820181803683370190505091508284016020018051602084015260208101516040840152602281015160428401525060428301905082811161111b5761111b61205d565b83518111156110b7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f4c696242797465732372656164427974657336363a204f55545f4f465f424f5560448201527f4e44530000000000000000000000000000000000000000000000000000000000606482015260840161039a565b6000815160421461123f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603a60248201527f5369676e617475726556616c696461746f72237265636f7665725369676e657260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840161039a565b60008260018451611250919061208c565b8151811061126057611260611e11565b602001015160f81c60f81b60f81c60ff16905060008360408151811061128857611288611e11565b016020015160f81c9050600061129e8582611af6565b905060006112ad866020611af6565b90507f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a081111561135f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603d60248201527f5369676e617475726556616c696461746f72237265636f7665725369676e657260448201527f3a20696e76616c6964207369676e6174757265202773272076616c7565000000606482015260840161039a565b8260ff16601b1415801561137757508260ff16601c14155b15611404576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603d60248201527f5369676e617475726556616c696461746f72237265636f7665725369676e657260448201527f3a20696e76616c6964207369676e6174757265202776272076616c7565000000606482015260840161039a565b600184036114715760408051600081526020810180835289905260ff851691810191909152606081018390526080810182905260019060a0015b6020604051602081039080840390855afa158015611460573d6000803e3d6000fd5b505050602060405103519450611596565b6002840361150e576040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101889052600190605c01604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181528282528051602091820120600084529083018083525260ff861690820152606081018490526080810183905260a00161143e565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603c60248201527f5369676e617475726556616c696461746f72237265636f7665725369676e657260448201527f3a20554e535550504f525445445f5349474e41545552455f5459504500000000606482015260840161039a565b73ffffffffffffffffffffffffffffffffffffffff8516611639576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f5369676e617475726556616c696461746f72237265636f7665725369676e657260448201527f3a20494e56414c49445f5349474e455200000000000000000000000000000000606482015260840161039a565b5050505092915050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f600ba597427f042bcd559a0d06fa1732cc104d6dd43cbe8845b5a0e804b2b39f60405160405180910390a380156116cc5773ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604090204390555b505050565b8082016020015160f01c600282018281116116ee576116ee61205d565b83518111156110b7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f4c69624279746573237265616455696e7431363a204f55545f4f465f424f554e60448201527f4453000000000000000000000000000000000000000000000000000000000000606482015260840161039a565b606060008267ffffffffffffffff81111561179c5761179c611cc0565b6040519080825280601f01601f1916602001820160405280156117c6576020820181803683370190505b509150838501602001600060205b858110156117ed579082015184820152602081016117d4565b84860160200180519390920151908501525250828201838110156118135761181361205d565b84518111156118a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f4c69624279746573237265616442797465733a204f55545f4f465f424f554e4460448201527f5300000000000000000000000000000000000000000000000000000000000000606482015260840161039a565b935093915050565b60008082600184516118be919061208c565b815181106118ce576118ce611e11565b016020015160f81c905060018114806118e75750600281145b1561192b578373ffffffffffffffffffffffffffffffffffffffff1661190d86856111ac565b73ffffffffffffffffffffffffffffffffffffffff16149150611ac5565b60038103611a3d5782517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff810184526040517f1626ba7e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff861690631626ba7e906119ae9089908890600401611fba565b602060405180830381865afa1580156119cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119ef91906120a3565b9084527fffffffff00000000000000000000000000000000000000000000000000000000167f1626ba7e00000000000000000000000000000000000000000000000000000000149150611ac5565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603f60248201527f5369676e617475726556616c696461746f7223697356616c69645369676e617460448201527f7572653a20554e535550504f525445445f5349474e41545552455f5459504500606482015260840161039a565b509392505050565b600080611ae860016c0100000000000000000000000061208c565b606084901c94931692915050565b6000611b038260206120e5565b83511015611b93576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603c60248201527f4c696242797465732372656164427974657333323a20475245415445525f4f5260448201527f5f455155414c5f544f5f33325f4c454e4754485f524551554952454400000000606482015260840161039a565b6000611ba08360206120e5565b909301519392505050565b600060208284031215611bbd57600080fd5b5035919050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611be857600080fd5b919050565b600060208284031215611bff57600080fd5b611c0882611bc4565b9392505050565b80358015158114611be857600080fd5b600080600080600060808688031215611c3757600080fd5b611c4086611bc4565b945060208601359350604086013567ffffffffffffffff80821115611c6457600080fd5b818801915088601f830112611c7857600080fd5b813581811115611c8757600080fd5b8960208260061b8501011115611c9c57600080fd5b602083019550809450505050611cb460608701611c0f565b90509295509295909350565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080600080600060a08688031215611d0757600080fd5b611d1086611bc4565b94506020860135935060408601359250606086013567ffffffffffffffff80821115611d3b57600080fd5b818801915088601f830112611d4f57600080fd5b813581811115611d6157611d61611cc0565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908382118183101715611da757611da7611cc0565b816040528281528b6020848701011115611dc057600080fd5b826020860160208301376000602084830101528096505050505050611cb460808701611c0f565b60008060408385031215611dfa57600080fd5b611e0383611bc4565b946020939093013593505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611ea057611ea0611e40565b5060010190565b60005b83811015611ec2578181015183820152602001611eaa565b83811115611ed1576000848401525b50505050565b60008251611ee9818460208701611ea7565b9190910192915050565b600060208284031215611f0557600080fd5b5051919050565b6020808252818101839052600090604080840186845b87811015611f63578135835273ffffffffffffffffffffffffffffffffffffffff611f4e868401611bc4565b16838601529183019190830190600101611f22565b5090979650505050505050565b60008151808452611f88816020860160208601611ea7565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b828152604060208201526000611fd36040830184611f70565b949350505050565b602080825282518282018190526000919060409081850190868401855b828110156120335781518051855286015173ffffffffffffffffffffffffffffffffffffffff16868501529284019290850190600101611ff8565b5091979650505050505050565b61ffff83168152604060208201526000611fd36040830184611f70565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b60008282101561209e5761209e611e40565b500390565b6000602082840312156120b557600080fd5b81517fffffffff0000000000000000000000000000000000000000000000000000000081168114611c0857600080fd5b600082198211156120f8576120f8611e40565b50019056fea26469706673582212204aead1440074b7b62e1e420043af74164162a930bca4af29f3abfaeeba7f60c164736f6c634300080e0033603a600e3d39601a805130553df3363d3d373d3d3d363d30545af43d82803e903d91601857fd5bf3";
