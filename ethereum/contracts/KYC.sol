 // SPDX-License-Identifier: MIT   
pragma solidity ^0.6.0;

contract KYC{
    
    struct Investor{
        address investorAddress;
        string firstName;
        string lastName;
        string email;
    }
    
    Investor [] public investorsArray;
    mapping(uint=> Investor) public investors;
    
    address owner;
    
    constructor() public {
        owner = msg.sender;
    }
    
    function addInvestor(address _address, string memory _fName, string memory _lName, string memory _email) public {
        uint length = investorsArray.length;
        uint index = length + 1;
        Investor memory newInvestor = Investor({
           investorAddress : _address,
           firstName : _fName,
           lastName : _lName,
           email :_email
        });
        
        investorsArray.push(newInvestor);
        investors[index] = newInvestor;
    }
    function getInvestor (address _investorsAddress) public view returns (string memory){
        for(uint i = 0; i < investorsArray.length; i++){
            if(investorsArray[i].investorAddress == _investorsAddress){
                return(investorsArray[i].firstName);
            }
        }
    //   return(investorsArray[0].firstName);
    }
}