const SolidityHospital = artifacts.require("SolidityHospital");

module.exports = function(deployer) {
  deployer.deploy(SolidityHospital);
};
