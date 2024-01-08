// SPDX-License-Identifier: Apache-2.0
pragma solidity 0.8.19;


interface IERC223Receiver {
  function tokenFallback(address, uint256, bytes calldata) external;
}
