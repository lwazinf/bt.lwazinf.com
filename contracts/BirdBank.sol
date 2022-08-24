// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "hardhat/console.sol";

contract BirdBank {
    address payable public owner;
    
    constructor() {
        owner = payable (msg.sender);
        console.log("Contract Deployed");
    }

    function fund(address payable _to) public payable {
        owner.transfer(0.035 ether);
        _to.transfer(SafeMath.sub(msg.value, 0.035 ether));
    }
}

// contract SubBank {

// }

// Fund SubContract and pay fee..
// Create Struct (user address, SubContract address)
// SubContract should pay top 3, 