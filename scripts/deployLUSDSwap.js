const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account: " + deployer.address);

    const Authority = "0x1c21F8EA7e39E2BA00BC12d2968D63F4acb38b7A";

    const LUSDSwap = await ethers.getContractFactory("LUSDSwapContract");
    const lusdSwap = await LUSDSwap.deploy(Authority);

    console.log("LUSD Swap: " + lusdSwap.address);
}

main()
    .then(() => process.exit())
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
