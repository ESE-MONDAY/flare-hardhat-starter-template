require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY ?? "";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  settings: {
    evmVersion: "london",
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  networks: {
    coston2: {
      url: "https://coston2-api.flare.network/ext/C/rpc",
      chainId: 114,
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : []
    }
  }
};
