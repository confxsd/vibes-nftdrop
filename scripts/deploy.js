const hre = require("hardhat");
const BASE_URI = "ipfs://assets";
const TOKEN_NAME = "VIBES NFT";
const TOKEN_SYMBOL = "VIBE";
const PRICE = "500000000000000000" // 0.5 AVAX - use whatever price you want, but the denomiation is in WEI

async function main() {
  try {
    const Contract = await hre.ethers.getContractFactory("AvalancheNFTDrop");
    const contract = await Contract.deploy(BASE_URI, PRICE, TOKEN_NAME, TOKEN_SYMBOL);
  
    await contract.deployed();
  
    console.log(`contract deployed at ${contract.address}`); 
  } catch (error) {
    console.log(error);
  }  
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });