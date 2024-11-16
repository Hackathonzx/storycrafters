const hre = require("hardhat");

async function main() {
  // Deploy StoryNFT contract
  const StoryNFT = await hre.ethers.getContractFactory("StoryNFT");
  const storyNFT = await StoryNFT.deploy();
  await storyNFT.waitForDeployment();
  console.log("StoryNFT deployed to:", await storyNFT.getAddress());

  // Deploy Voting contract
  const Voting = await hre.ethers.getContractFactory("Voting");
  const voting = await Voting.deploy();
  await voting.waitForDeployment();
  console.log("Voting deployed to:", await voting.getAddress());

  // Deploy GuildSystem contract
  const GuildSystem = await hre.ethers.getContractFactory("GuildSystem");
  const guildSystem = await GuildSystem.deploy();
  await guildSystem.waitForDeployment();
  console.log("GuildSystem deployed to:", await guildSystem.getAddress());

  // Deploy NFTMarketplace contract
  const NFTMarketplace = await hre.ethers.getContractFactory("NFTMarketplace");
  const nftMarketplace = await NFTMarketplace.deploy("0x2Fad953E1F524e6590EdF50BDA6FCB391Dd4Fd96");
  await nftMarketplace.waitForDeployment();
  console.log("NFTMarketplace deployed to:", await nftMarketplace.getAddress());
}

// Execute deployment script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
