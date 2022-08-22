// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract BirdBank {
    address payable public owner;
    
    constructor() {
        owner = payable (msg.sender);
    }

    // receive() external payable {

    // }

    function fund(uint _amount) external payable {
        owner.transfer(SafeMath.mul(_amount, SafeMath.div(10, 100)));
    }

    function withdraw(uint _amount) external {
        owner.transfer(SafeMath.mul(_amount, SafeMath.div(10, 100)));
    }

    function getBal() external view returns (uint) {
        return address(this).balance;
    }

}