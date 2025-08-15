const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contract with account:", deployer.address);
  console.log("Account balance:", (await ethers.provider.getBalance(deployer.address)).toString());

  // Get the contract factory
  const FtsoPriceConverter = await ethers.getContractFactory("FTSO_Price_Converter");

  // Deploy the contract
  const contract = await FtsoPriceConverter.deploy();
  await contract.waitForDeployment();
    // Log the contract address
  const address = await contract.getAddress();

  console.log("FTSO_Price_Converter deployed to:", address);
    // Interact: Call getFlrUsdPrice
   const [price, decimals, timestamp] = await contract.getFlrUsdPrice();
    // Log the price in USD
  console.log(
    `FLR/USD Price: ${ethers.formatUnits(price, decimals)} USD`
  );
  // Log the decimals and timestamp
  console.log(`Decimals: ${decimals}, Timestamp: ${timestamp}`);

  // Interact: Call getFlrUsdPriceWei
  const [priceWei, timestampWei] = await contract.getFlrUsdPriceWei();
    // Log the price in Wei
  console.log(`FLR/USD Price in Wei: ${priceWei.toString()} (Timestamp: ${timestampWei})`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
