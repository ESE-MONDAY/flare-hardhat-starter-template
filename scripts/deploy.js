const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const Greeter = await hre.ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, Flare!");
   
 

    await greeter.waitForDeployment();
    console.log("Greeter deployed to:", await greeter.getAddress());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

