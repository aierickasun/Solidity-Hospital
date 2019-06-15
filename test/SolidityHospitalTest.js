// Tests written with the Mocha testing framework and the Chai assertion library.
// These tests will simulate client-side interaction with smart contracts.
var SolidityHospital = artifacts.require("./SolidityHospital.sol");

// we write our tests w/in callback of the contract function.
// the callback provides an "accounts" variable that represents all
//  the accounts on our blockchain.

contract("SolidityHospital", function(accounts) {
    var SolidityHospitalInstance;

    it("initializes with two candidates", function() {
        return SolidityHospital.deployed().then(function(instance) {
          return instance.candidatesCount();
        }).then(function(count) {
          assert.equal(count, 2);
        });
      });

});