// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "@openzeppelin/contracts/access/Ownable.sol";

contract GuildSystem is Ownable {
    struct Guild {
        uint256 id;
        string name;
        uint256 points;
    }

    mapping(address => uint256) public playerGuild;
    Guild[] public guilds;

    event GuildCreated(uint256 id, string name);
    event JoinedGuild(address player, uint256 guildId);

    function createGuild(string memory name) public onlyOwner {
        guilds.push(Guild(guilds.length, name, 0));
        emit GuildCreated(guilds.length - 1, name);
    }

    function joinGuild(uint256 guildId) public {
        require(guildId < guilds.length, "Invalid guild ID.");
        playerGuild[msg.sender] = guildId;
        emit JoinedGuild(msg.sender, guildId);
    }

    function addPointsToGuild(uint256 guildId, uint256 points) public onlyOwner {
        guilds[guildId].points += points;
    }

    function getGuild(uint256 guildId) public view returns (Guild memory) {
        return guilds[guildId];
    }
}
