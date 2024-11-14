// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTMarketplace is Ownable {
    struct Listing {
        uint256 price;
        address owner;
    }

    mapping(uint256 => Listing) public listings;
    IERC721 public nftContract;

    event NFTListed(uint256 tokenId, uint256 price, address owner);
    event NFTPurchased(uint256 tokenId, address buyer);

    constructor(address nftAddress) {
        nftContract = IERC721(nftAddress);
    }

    function listNFT(uint256 tokenId, uint256 price) public {
        require(nftContract.ownerOf(tokenId) == msg.sender, "Not the owner.");
        listings[tokenId] = Listing(price, msg.sender);
        emit NFTListed(tokenId, price, msg.sender);
    }

    function purchaseNFT(uint256 tokenId) public payable {
        Listing memory listing = listings[tokenId];
        require(msg.value == listing.price, "Incorrect price.");
        
        address seller = listing.owner;
        nftContract.transferFrom(seller, msg.sender, tokenId);
        payable(seller).transfer(msg.value);

        delete listings[tokenId];
        emit NFTPurchased(tokenId, msg.sender);
    }
}
