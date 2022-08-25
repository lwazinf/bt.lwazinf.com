// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "hardhat/console.sol";

// // // // // // // // // // // // // // // // // // // // // // // // 
// // // // // // // // // // // // // // // // // // // // // // // // 

contract SubBank {
    address payable public owner;
    uint256 public totalBalance;
    address payable [] top3;
    
    constructor() payable {
        owner = payable (msg.sender);
        totalBalance = address(this).balance;
        console.log("Contract Deployed");
    }

    function getBalance() public view returns(uint){
        return address(this).balance;
    }

    function addTop3(address payable[3] memory _addresses) public {
        for (uint i=0; i < 3; i++) {
        top3.push(payable(_addresses[i]));
        }
    }

    function payOut() public {
        if (address(this).balance > 0 && top3.length == 3){
            for (uint i=0; i < 3; i++) {
                top3[i].transfer(SafeMath.div(totalBalance, 3));
            }
        }
    }

}

// // // // // // // // // // // // // // // // // // // // // // // // 
// // // // // // // // // // // // // // // // // // // // // // // // 

contract BirdBank {
    address payable public owner;
    SubBank[] public subBanks;
    
    constructor() {
        owner = payable (msg.sender);
    }

    function createContract() public payable {
        owner.transfer(0.035 ether);
        SubBank subBank = (new SubBank){value: SafeMath.sub(msg.value, 0.035 ether)}();
        subBanks.push(subBank);
    }

    function getCurrentBalance(uint256 contractIndex) public view returns(uint256){
        SubBank subBank = SubBank(address(subBanks[contractIndex]));
        return subBank.getBalance();
    }

    function getTotalBalance(uint256 contractIndex) public view returns(uint256){
        SubBank subBank = SubBank(address(subBanks[contractIndex]));
        return subBank.totalBalance();
    }

    function getSubBanks() public view returns(uint) {
        return subBanks.length;
    }

    function payOut(uint256 contractIndex) public{
        SubBank subBank = SubBank(address(subBanks[contractIndex]));
        subBank.payOut();
    }

    function addAddresses(uint256 contractIndex, address payable address0, address payable address1, address payable address2) public{
        SubBank subBank = SubBank(address(subBanks[contractIndex]));
        subBank.addTop3([address0, address1, address2]);
    }

}

