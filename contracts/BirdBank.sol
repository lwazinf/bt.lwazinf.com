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
        } else {
            console.log("Spots not taken..");
        }
    }

}

// // // // // // // // // // // // // // // // // // // // // // // // 
// // // // // // // // // // // // // // // // // // // // // // // // 

contract BirdBank {
    address payable public owner;
    mapping(string => SubBank) public subBanks;
    
    constructor() {
        owner = payable (msg.sender);
    }

    function createContract(string memory _uuid) public payable {
        owner.transfer(0.035 ether);
        SubBank subBank = (new SubBank){value: SafeMath.sub(msg.value, 0.035 ether)}();
        subBanks[_uuid] = subBank;
    }

    function getAddress(string memory _uuid) public view returns(SubBank){
        SubBank subBank = SubBank(address(subBanks[_uuid]));
        return subBank;
    }

    function getTotalBalance(string memory _uuid) public view returns(uint256){
        SubBank subBank = SubBank(address(subBanks[_uuid]));
        return subBank.totalBalance();
    }

    function payOut(string memory _uuid) public{
        SubBank subBank = SubBank(address(subBanks[_uuid]));
        subBank.payOut();
    }

    function addAddresses(string memory _uuid, address payable address0, address payable address1, address payable address2) public{
        SubBank subBank = SubBank(address(subBanks[_uuid]));
        subBank.addTop3([address0, address1, address2]);
    }

}

