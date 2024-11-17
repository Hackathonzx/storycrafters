"use client";

import { useState } from 'react';
import { Container, Typography, LinearProgress, Box, Fade } from '@mui/material';
import styled  from '@emotion/styled';
import Image from 'next/image';

const StoryCard = styled(Box)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border-radius: 16px;
  padding: 24px;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const StoryPage = () => {
  const [currentChapter] = useState(0);
  const [progress] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [playerStats] = useState({
    reputation: 75,
    influence: 60,
    artifacts: 3,
  });

  const chapters = [
    {
      title: "The Awakening",
      content: "You find yourself in the midst of the Taiko Multiverse...",
      choices: [
        { text: "Explore the mysterious portal", outcome: "reputation" },
        { text: "Seek out local inhabitants", outcome: "influence" },
      ],
      background: "/images/chapter1-bg.jpg",
    },
    // Add more chapters...
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-black">
      <Container maxWidth="lg" className="py-8">
        {/* Player Stats HUD */}
        <Box className="stats-hud fixed top-4 right-4 z-50 glassmorphism p-4 rounded-lg">
          <Typography variant="h6" className="text-white mb-2">Player Stats</Typography>
          <Box className="grid grid-cols-1 gap-2">
            {Object.entries(playerStats).map(([stat, value]) => (
              <Box key={stat} className="flex items-center gap-2">
                <Typography className="text-gray-300 capitalize">{stat}</Typography>
                <LinearProgress
                  variant="determinate"
                  value={value}
                  className="w-32"
                  color="secondary"
                />
              </Box>
            ))}
          </Box>
        </Box>

        {/* Main Story Content */}
        <Fade in={true}>
          <StoryCard className="my-8">
            <Box className="relative h-64 -mx-6 -mt-6 mb-6">
              <Image
                src={chapters[currentChapter].background}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
                alt="Chapter background"
              />
            </Box>
            <Typography variant="h3" className="text-white mb-6">
              Chapter {currentChapter + 1}: {chapters[currentChapter].title}
            </Typography>
            <Typography className="text-gray-300 mb-8 text-lg leading-relaxed">
              {chapters[currentChapter].content}
            </Typography>
            
            <Box className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {chapters[currentChapter].choices.map((choice, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedChoice(index)}
                  className={`
                    p-4 rounded-lg transition-all duration-300
                    ${selectedChoice === index 
                      ? 'bg-purple-600 scale-105' 
                      : 'bg-gray-800 hover:bg-gray-700'
                    }
                    text-white text-left
                  `}
                >
                  <Typography variant="h6">{choice.text}</Typography>
                  <Typography variant="body2" className="text-gray-300">
                    Affects: {choice.outcome}
                  </Typography>
                </button>
              ))}
            </Box>
          </StoryCard>
        </Fade>

        {/* Progress Indicator */}
        <Box className="fixed bottom-0 left-0 w-full h-1 bg-gray-800">
          <Box
            className="h-full bg-purple-600"
            style={{ width: `${progress}%` }}
          />
        </Box>
      </Container>
    </div>
  );
};

export default StoryPage;
