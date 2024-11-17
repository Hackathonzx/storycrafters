"use client";

import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import styled from '@emotion/styled';

const LeaderboardCard = styled(Box)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border-radius: 16px;
  overflow: hidden;
`;

const LeaderboardPage = () => {
  const columns = [
    { field: 'rank', headerName: 'Rank', width: 90 },
    { field: 'player', headerName: 'Player', width: 200 },
    { field: 'score', headerName: 'Score', width: 130 },
    { field: 'achievements', headerName: 'Achievements', width: 200 },
    { field: 'chapter', headerName: 'Current Chapter', width: 150 },
  ];

  interface LeaderboardRow {
    id: number;  // Required by DataGrid
    rank: number;
    player: string;
    score: number;
    achievements: string;
    chapter: string;
  }

    const rows: LeaderboardRow[] = [
      { id: 1, rank: 1, player: "John Doe", score: 1000, achievements: "Story Master", chapter: "Chapter 5" },
      { id: 2, rank: 2, player: "Jane Smith", score: 950, achievements: "Quick Writer", chapter: "Chapter 4" },
      { id: 3, rank: 3, player: "Mike Johnson", score: 900, achievements: "Creative Mind", chapter: "Chapter 3" },
    ];

  return (      // Add dummy data or fetch from API

    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-purple-900 to-black p-8">
      <Container maxWidth="lg">
        <LeaderboardCard className="p-6">
          <Typography variant="h4" className="text-white mb-6">
            Global Rankings
          </Typography>
          <DataGrid
            rows={rows}
            columns={columns}
            className="bg-transparent text-white"
            autoHeight
          />
        </LeaderboardCard>
      </Container>
    </div>
  );
};

export default LeaderboardPage;
