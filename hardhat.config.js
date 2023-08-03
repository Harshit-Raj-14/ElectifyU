require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

const { PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    "mantle-testnet": {
      url: "https://rpc.testnet.mantle.xyz/",
      accounts: [`0x${PRIVATE_KEY}`],
    }
  }
};