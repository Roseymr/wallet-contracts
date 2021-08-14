"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
exports.__esModule = true;
exports.ModuleIgnoreAuthUpgradable__factory = void 0;
var ethers_1 = require("ethers");
var ModuleIgnoreAuthUpgradable__factory = /** @class */ (function () {
    function ModuleIgnoreAuthUpgradable__factory() {
    }
    ModuleIgnoreAuthUpgradable__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return ModuleIgnoreAuthUpgradable__factory;
}());
exports.ModuleIgnoreAuthUpgradable__factory = ModuleIgnoreAuthUpgradable__factory;
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes32",
                name: "newImageHash",
                type: "bytes32"
            },
        ],
        name: "ImageHashUpdated",
        type: "event"
    },
    {
        inputs: [],
        name: "imageHash",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_hash",
                type: "bytes32"
            },
            {
                internalType: "bytes",
                name: "_signatures",
                type: "bytes"
            },
        ],
        name: "isValidSignature",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes"
            },
            {
                internalType: "bytes",
                name: "_signatures",
                type: "bytes"
            },
        ],
        name: "isValidSignature",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "_interfaceID",
                type: "bytes4"
            },
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            },
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_imageHash",
                type: "bytes32"
            },
        ],
        name: "updateImageHash",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
];