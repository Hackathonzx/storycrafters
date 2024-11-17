"use client";

import React from 'react';
import { Container, Typography, Box, Chip } from '@mui/material';
import styled from '@emotion/styled';
import Image from 'next/image';

const ItemCard = styled(Box)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
    
    .item-image {
      transform: scale(1.1);
    }
  }
`;

const MarketplacePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-black">
      <Container maxWidth="lg" className="py-8">
        {/* Categories */}
        <Box className="flex gap-4 mb-8 overflow-x-auto pb-4">
          {['All', 'Weapons', 'Armor', 'Spells', 'Companions'].map((category) => (
            <Chip
              key={category}
              label={category}
              className="glassmorphism text-white hover:scale-105 transition-all"
              clickable
            />
          ))}
        </Box>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add marketplace items here */}
          {Array.from({ length: 6 }).map((_, i) => (
            <ItemCard key={i} className="relative group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={`/images/item${i + 1}.jpg`}
                  layout="fill"
                  objectFit="cover"
                  className="item-image transition-transform duration-300"
                  alt={`Item ${i + 1}`}
                />
              </div>
              <Box className="p-4">
                <Typography variant="h6" className="text-white">
                  Legendary Item {i + 1}
                </Typography>
                <Typography className="text-gray-300">
                  Power Level: {Math.floor(Math.random() * 100)}
                </Typography>
                <Chip
                  label={`${(Math.random() * 10).toFixed(2)} ETH`}
                  className="mt-2 glassmorphism"
                />
              </Box>
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Chip label="Buy Now" className="glassmorphism" clickable />
              </div>
            </ItemCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default MarketplacePage;
