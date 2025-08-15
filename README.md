
# Flare Hardhat Starter Template

A minimal **Hardhat** project for deploying and interacting with smart contracts on the **Flare Network**.  
This template includes a sample **FTSO Price Converter** contract that fetches real-time FLR prices from the Flare Time Series Oracle (FTSO).


## Features
- Hardhat setup with Ethers.js
- Example contract: `FTSO_Price_Converter`
- Script to deploy contracts on Flare
- Script to fetch **FLR/USD** prices from the FTSO
- Ready for Flare testnet (`Coston2`) or mainnet deployment



## Prerequisites
Make sure you have:
- [Node.js](https://nodejs.org/) (v16 or later)
- [Yarn](https://yarnpkg.com/) or `npm`
- A funded Flare wallet (testnet or mainnet)
- [Metamask](https://metamask.io/) configured for Flare



## Installation
Clone this repository and install dependencies:
```bash
git clone https://github.com/yourusername/flare-hardhat-starter.git
cd flare-hardhat-starter
npm install
````



## Configuration

Edit **`hardhat.config.js`** to set your:

* Network (e.g., Coston2 testnet or Flare mainnet)
* RPC URL
* Private key

Example:

```js
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
```



## Deployment

To deploy the `FTSO_Price_Converter` contract:

```bash
npx hardhat run scripts/deploy.js --network coston2
```

Example output:

```
Deploying contract with account: 0xYourAddress
Account balance: 1000000000000000000
FTSO_Price_Converter deployed to: 0xContractAddress
```



## 📡 Fetching FLR Price

We have a script that reads the latest **FLR/USD** price from the deployed contract.

Run:

```bash
npx hardhat run scripts/getPrice.js --network coston2
```

Example output:

```
Latest FLR price: 0.02984 USD
```



## Project Structure

```
flare-hardhat-starter/
│── contracts/              # Solidity contracts
│   └── FTSO_Price_Converter.sol
│── scripts/                # Deployment & interaction scripts
│   ├── deploy.js
│   └── getPrice.js
│── hardhat.config.js       # Hardhat config
│── package.json
│── README.md
```



##  License

MIT License. Free to use, modify, and share.



## Resources

* [Flare Docs](https://docs.flare.network/)
* [FTSO Overview](https://docs.flare.network/tech/ftso/)
* [Hardhat Documentation](https://hardhat.org/docs)




