var BentoToken = artifacts.require("BentoToken");
var BentoChef = artifacts.require("BentoChef");
var BentoMaker = artifacts.require("BentoMaker");
var Bentolock = artifacts.require("Bentolock");
var BentoRestaurant = artifacts.require("BentoRestaurant");
var BentoBar = artifacts.require("BentoBar");
var UniMigrator = artifacts.require("UniMigrator");

module.exports = function(deployer) {
    // deployer.deploy(BentoToken);
    deployer.deploy(BentoChef, '0xE90b13eCA5Bb4fa0e5Ed3e54A85220058aeA80B5', '0x1E812D8f4eae7131527A88d040fA56A16CE5a868', '100000000000000000000', 11055000, 11155000);
    // deployer.deploy(BentoBar, '0xE90b13eCA5Bb4fa0e5Ed3e54A85220058aeA80B5');
//    deployer.deploy(BentoRestaurant, '0xE90b13eCA5Bb4fa0e5Ed3e54A85220058aeA80B5', "999894645034566400");
//    deployer.deploy(Bentolock, '0x1c4862Dd1c4CE7cD98Fa293a64a14d4F3B2b2717', 259200 )
};

// MainNet:
// BentoToken : 0xE90b13eCA5Bb4fa0e5Ed3e54A85220058aeA80B5
// BentoChef: 0x1D456A3C71e969987F4463Da63f527f04AD83297
// BentoBar: 0x48B6244378929133E9507Ad0D93B99Cdbb68C987
// BentoLock: 0xa0989f65247Ea4554fd88568D1aEd3e566e8D211

// BentoChef: 0x555E574F5590Cd41be366002A5d7F91590E25dCe - client

// 1000 : 1000000000000000000000
// 100  : 100000000000000000000
/* Ropsten */
// 100000000000000000000000000
// 100000000
// devadr 0x627542b1C27A435c634E934FB4d6B49f377d726a
// UniswapV2Factor: 0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f
// WETH: 0x0a180a76e4466bf68a7f86fb029bed3cccfaaac5

// BentoToken: 0xaf24f3886e85ffc5049df24fc9f7b957d650d778
// BentoChef: 0x4D5627CdfC3e12B9d37E36cA34B730cE64c6D59c, 0x653ad48395a5b268219F2D040B8B4eA04e04b50a
// BentoMaker: 0xEBFc6af9e89228E4Ed36Cfb98A4C6e92047854ec
// Bentolock: 0xE90b13eCA5Bb4fa0e5Ed3e54A85220058aeA80B5
// BentoRestaurant: 0x555E574F5590Cd41be366002A5d7F91590E25dCe
// BentoBar: 0x1D456A3C71e969987F4463Da63f527f04AD83297
// UniMigrator: 

// V2 Ropsten
// BentoToken : 0x253F5A244aa8eDEcf5F0D5e4d2AAe9A1a48F31d8
// BentoChef: 0x25a3D71079F2DC26ea561166269ED5098847D441
// BentoBar: 0x5006EcDfF7e0b31F5fbea0069398CAd5bD83FEAF
