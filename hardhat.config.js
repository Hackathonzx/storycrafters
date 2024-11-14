require("@nomicfoundation/hardhat-ethers");
require('@nomicfoundation/hardhat-toolbox');
require("dotenv").config();

const { RPC_URL, PRIVATE_KEY } = process.env

module.exports = {
  solidity: "0.8.0",
  networks: {
    WorldChainSepoliaTestnet: {
      url: process.env.AVALANCHE_URL,
      chainId: 167009,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};