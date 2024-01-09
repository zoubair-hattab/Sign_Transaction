// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Counter {
    uint public counter;
    event Increment(uint256 counter, address sender);

    function increment(uint256 _counter) external {
        counter += _counter;
        emit Increment(_counter, msg.sender);
    }
}
