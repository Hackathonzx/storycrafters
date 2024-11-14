// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Voting is Ownable {
    struct Proposal {
        uint256 id;
        string description;
        uint256 voteCount;
    }

    Proposal[] public proposals;
    mapping(address => bool) public hasVoted;

    event ProposalCreated(uint256 id, string description);
    event Voted(uint256 proposalId, address voter);

    function createProposal(string memory description) public onlyOwner {
        proposals.push(Proposal(proposals.length, description, 0));
        emit ProposalCreated(proposals.length - 1, description);
    }

    function vote(uint256 proposalId) public {
        require(!hasVoted[msg.sender], "Already voted.");
        require(proposalId < proposals.length, "Invalid proposal ID.");

        proposals[proposalId].voteCount += 1;
        hasVoted[msg.sender] = true;

        emit Voted(proposalId, msg.sender);
    }

    function getProposal(uint256 proposalId) public view returns (Proposal memory) {
        return proposals[proposalId];
    }
}
