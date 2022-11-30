require("@nomicfoundation/hardhat-toolbox");

const fs= require("fs")
const privateKey= fs.readFileSync(".secret").toString()
const projectID = "4a4e2eeb3d2c414ca8c0e2e6be8bdbdd"
 
module.exports = {
  networks:{
    hardhat:{
      chainid: 1337 
    },
    mumbai:{
      url: `https://polygon-mumbai.infura.io/v3/${projectID}`,
      accounts:  [privateKey]
    },
    mainnet:{
      url: `https://polygon-mainnet.infura.io/v3/${projectID}`,
      accounts: [privateKey]
    }
  },
  solidity: "0.8.17", 
};
