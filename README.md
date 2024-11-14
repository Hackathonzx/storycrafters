# StoryCrafters: Taiko Multiverse Adventure

# Table of Contents
1. Project Overview
2. Features
3. Integration of Taiko OG NFT Collections
4. Smart Contracts
5. Architecture
6. Getting Started
7. Deployment
8. Testing
9. Usage
10. Contributing
11. License

# 1. Project Overview
StoryCrafters: Taiko Multiverse Adventure is an interactive, blockchain-based role-playing game (RPG) that merges NFT-based storytelling with community-driven gameplay. Players make choices that shape the story and unlock new paths in an evolving narrative. The project leverages the Taiko blockchain for community-driven decision-making, NFT-based character/item management, and decentralized guild-based gameplay.

**Track:** Play Hard
**Objective:** Engage players in a community-driven, decentralized storytelling RPG built on Taiko.
**Goal:** Combine blockchain mechanics with RPG gameplay, allowing players to participate actively in shaping the story through NFT ownership, guild challenges, and a dynamic voting system.

# 2. Features
- Community-Driven Story Choices: Players influence the storyline by voting on key decisions, recorded immutably on the Taiko blockchain.
- NFT-Based Characters and Items: Players collect unique NFTs representing characters, items, and artifacts that affect story progression and gameplay.
- Guild System with Competitions and Collaborations: Players can join guilds and participate in guild challenges, fostering teamwork or rivalry.
- Dynamic Leaderboards and Achievements: Track individual and guild accomplishments, with rewards and badges for performance and participation.
- On-Chain Minigames: Complete in-game quests, puzzles, and battles with outcomes recorded on-chain.
- In-Game NFT Marketplace: A decentralized marketplace for trading NFTs representing in-game assets, enhancing engagement and item rarity.

# 3. Integration of Taiko OG NFT Collections
This project integrates Taiko’s official NFT collections—Taikoons, Taikonauts, and Trailblazers Badges—to foster greater engagement and enhance the gameplay experience. Players can use these exclusive NFTs within the game to:

- Unlock Special Abilities or Roles: Each NFT type offers unique in-game advantages, enhancing the strategic and storytelling aspects.
- Gain Guild Recognition: Members holding these OG NFTs receive exclusive guild benefits, such as early access to missions, enhanced voting power, or rewards in community challenges.
- Boost Marketplace Visibility: Players holding Taiko OG NFTs are featured in the marketplace, making their assets more visible and fostering an interactive community economy.

# 4. Smart Contracts

The project includes four key smart contracts, each supporting a specific part of the game:

1. StoryNFT.sol: Manages minting and ownership of story-related NFTs (characters, items).
2. Voting.sol: Facilitates on-chain voting to determine narrative progression based on player choices.
3. GuildSystem.sol: Implements the guild mechanics, including guild creation, membership management, and tracking guild achievements.
4. NFTMarketplace.sol: Manages listing, buying, and selling of NFTs within the game’s ecosystem.

# 5. Architecture
- Frontend: Game interface for player interaction, story visualization, and minigames.
- Backend: Handles game logic, communicates with Taiko smart contracts for recording actions, and manages user authentication.
- Smart Contracts: Deployed on the Taiko blockchain, providing NFT minting, voting, guild management, and marketplace functions.
- Database: Stores player and guild stats, inventory, and achievements, synchronized with on-chain data.

# 6. Getting Started
**Prerequisites**
- Node.js v14+ and npm
- Hardhat: Ethereum development environment
- MetaMask: Wallet for interacting with the Taiko blockchain

**Installation**
- Clone the repository:

git clone https://github.com/Hackathonzx/storycrafters.git

cd storycrafters

**Install dependencies:**
- npm install

# 7. Deployment
Set up environment variables in a .env file:

PRIVATE_KEY=<Your_Wallet_Private_Key>

TAOKO_RPC_URL=<Your_Taiko_RPC_URL>

**Compile contracts:**
- npx hardhat compile
- Deploy contracts:

npx hardhat run ignition/modules/deploy.js --network TaikoHeklaL2

Here is the deployed contract addresses: 

# 8. Testing
Run the following command to execute the test suite:

npx hardhat test
Tests are located in the test/ directory and verify functionality for all key contracts:

- GuildSystem: Guild creation, joining, and retrieving guild details.
- NFTMarketplace: NFT listing, buying, and ownership transfer.
- StoryNFT: NFT minting, token URI validation.
- Voting: Poll creation, voting, and vote tallying.

# 9. Usage
- Story Choices: Players can vote on critical story choices using the Voting contract. Each vote influences story progression, and choices are permanently recorded on-chain.

- NFT Collection: Use the StoryNFT contract to mint and collect NFTs that represent characters, items, and artifacts in the game.

- Guild Interaction: The GuildSystem contract allows players to join guilds, participate in missions, and achieve rewards, fostering teamwork and competition.

- NFT Marketplace: List, buy, or trade NFTs through the NFTMarketplace contract. Items acquired or crafted within the game can be traded with other players.

- Leaderboard and Achievements: Leaderboards and achievements track individual and guild progress, rewarding top performers with exclusive NFTs or badges.

# 10. Contributing
We welcome contributions from the community! To get involved:

1. Fork the repository and create your feature branch (git checkout -b feature/YourFeature).
2. Make changes and commit (git commit -m 'Add YourFeature').
3. Push to the branch (git push origin feature/YourFeature).
4. Open a pull request, and the team will review your submission.

**Code Style**
- Solidity: Use best practices for gas efficiency and readability.
- JavaScript: Follow ES6+ standards, and ensure clarity and modularity.

# 11. License
This project is licensed under the MIT License. See LICENSE file for details.

**Contact**
For questions, suggestions, or collaboration inquiries, please open an issue on the GitHub repository.

