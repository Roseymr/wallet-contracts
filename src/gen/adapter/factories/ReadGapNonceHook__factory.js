"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ReadGapNonceHook__factory = void 0;
var ethers_1 = require("ethers");
var ReadGapNonceHook__factory = /** @class */ (function (_super) {
    __extends(ReadGapNonceHook__factory, _super);
    function ReadGapNonceHook__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    ReadGapNonceHook__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    ReadGapNonceHook__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    ReadGapNonceHook__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    ReadGapNonceHook__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    ReadGapNonceHook__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return ReadGapNonceHook__factory;
}(ethers_1.ContractFactory));
exports.ReadGapNonceHook__factory = ReadGapNonceHook__factory;
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "_space",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_oldNonce",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_newNonce",
                type: "uint256"
            },
        ],
        name: "GapNonceChange",
        type: "event"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_space",
                type: "uint256"
            },
        ],
        name: "readGapNonce",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b5061012e806100206000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063cc63f2e214602d575b600080fd5b603c603836600460e0565b604e565b60405190815260200160405180910390f35b6000605782605d565b92915050565b600060577f2a37c7c3c3449f4795b05559a0f92a1730815bf20be16b02bbd6dbb8ae8532fe83600080838360405160200160a1929190918252602082015260400190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012054949350505050565b60006020828403121560f157600080fd5b503591905056fea26469706673582212203736e418cb1752d807c8df945bf47c4b79b79eebf2693d3518bcf2a02717e94464736f6c634300080e0033";
