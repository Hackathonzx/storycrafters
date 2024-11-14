// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract StoryNFT is ERC721, Ownable {
    uint256 public tokenCounter;
    mapping(uint256 => string) private _tokenURIs;

    constructor() ERC721("StoryCraftersNFT", "SCNFT") {
        tokenCounter = 0;
    }

    function mintNFT(address recipient, string memory tokenURI) public onlyOwner returns (uint256) {
        uint256 newItemId = tokenCounter;
        _safeMint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);
        tokenCounter++;
        return newItemId;
    }

    function _setTokenURI(uint256 tokenId, string memory tokenURI) internal {
        _tokenURIs[tokenId] = tokenURI;
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        return _tokenURIs[tokenId];
    }
}
