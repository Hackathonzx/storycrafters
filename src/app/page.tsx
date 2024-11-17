"use client";

import Image from "next/image";
import Button from "@/components/Button";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import "@/styles/globals.css";
import Footer from "@/components/Footer";
import { useWallet } from "@/hooks/useAuthContext";
import styled from '@emotion/styled';
import { Card, CardContent, Typography, Container } from '@mui/material';

const NavigationCard = styled(Card)`
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.2);
  }
`;

const FeatureCard = styled(Card)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 24px;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
  }
`;

const SpotlightCard = styled(Card)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.02);
  }
`;

export default function Home() {
  const [currentSpotlight, setCurrentSpotlight] = useState(0);
  const [theme, setTheme] = useState("light");
  const spotlightItems = [
    { title: "Guild Accomplishment 1", image: "/images/spotlight1.jpg" },
    { title: "Leaderboard Topper", image: "/images/spotlight2.jpg" },
    { title: "Trending Marketplace Item", image: "/images/spotlight3.jpg" },
  ];

  const { connectWallet, account } = useWallet();
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpotlight((prev) => (prev + 1) % spotlightItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    document.body.className = theme;
  };

  const AnimatedBackground = () => (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-blue-900 to-black animate-gradient-x">
        <div className="absolute inset-0 opacity-50">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `twinkle ${Math.random() * 3 + 2}s infinite`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen ${theme}`}>
      <AnimatedBackground />
      
      <header className="header sticky top-0 z-50 backdrop-blur-md bg-opacity-70 bg-gray-900 text-white">
        <Container className="flex justify-between items-center py-4">
          <Button
            className="connect-wallet glassmorphism hover:scale-105 transition-all"
            onClick={connectWallet}
          >
            {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : "Connect Wallet"}
          </Button>
          <Button className="theme-switcher glassmorphism" onClick={toggleTheme}>
            {theme === "light" ? "🌙" : "☀️"}
          </Button>
        </Container>
      </header>

      <main className="relative">
        <section className="hero-section min-h-screen flex items-center justify-center">
          <Container>
            <Typography
              variant="h1"
              className="text-6xl md:text-8xl font-bold text-center text-white mb-12 animate-fade-in"
            >
              Taiko Multiverse
            </Typography>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <NavigationCard onClick={() => router.push('/story')}>
                <CardContent className="text-center p-6">
                  <Typography variant="h5" className="text-white mb-4">
                    🎯 Story Mode
                  </Typography>
                  <Typography className="text-gray-300">
                    Begin your adventure in the multiverse
                  </Typography>
                </CardContent>
              </NavigationCard>

              <NavigationCard onClick={() => router.push('/marketplace')}>
                <CardContent className="text-center p-6">
                  <Typography variant="h5" className="text-white mb-4">
                    🏪 Marketplace
                  </Typography>
                  <Typography className="text-gray-300">
                    Trade unique NFTs and items
                  </Typography>
                </CardContent>
              </NavigationCard>

              <NavigationCard onClick={() => router.push('/leaderboard')}>
                <CardContent className="text-center p-6">
                  <Typography variant="h5" className="text-white mb-4">
                    🏆 Leaderboard
                  </Typography>
                  <Typography className="text-gray-300">
                    Compete with other players
                  </Typography>
                </CardContent>
              </NavigationCard>
            </div>
          </Container>
        </section>

        <section className="gameplay-overview relative py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-blue-900/20" />
          <Container maxWidth="lg">
            <Typography
              variant="h2"
              className={`text-4xl font-bold text-center mb-12 ${
                theme === 'dark' ? 'text-white' : 'text-gray-800'
              }`}
            >
              Gameplay Features
            </Typography>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🎮",
                  title: "Interactive Story",
                  description: "Shape the narrative through your choices"
                },
                {
                  icon: "⚔️",
                  title: "NFT Characters",
                  description: "Unique characters with special abilities"
                },
                {
                  icon: "🏰",
                  title: "Guild System",
                  description: "Form alliances and conquer together"
                }
              ].map((feature, index) => (
                <FeatureCard key={index} className="transform hover:scale-105 transition-all">
                  <CardContent>
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <Typography
                      variant="h5"
                      className={`font-bold mb-2 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-800'
                      }`}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      className={`${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </FeatureCard>
              ))}
            </div>
          </Container>
        </section>

        <section className="community-spotlight relative py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-purple-900/20" />
          <Container maxWidth="lg">
            <Typography
              variant="h2"
              className={`text-4xl font-bold text-center mb-12 ${
                theme === 'dark' ? 'text-white' : 'text-gray-800'
              }`}
            >
              Community Highlights
            </Typography>
            <div className="grid md:grid-cols-3 gap-8">
              {spotlightItems.map((item, index) => (
                <SpotlightCard
                  key={index}
                  className={`spotlight-item ${
                    index === currentSpotlight ? 'scale-105' : 'scale-100'
                  } transition-all duration-500`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardContent>
                    <Typography
                      variant="h6"
                      className={`font-bold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-800'
                      }`}
                    >
                      {item.title}
                    </Typography>
                  </CardContent>
                </SpotlightCard>
              ))}
            </div>
          </Container>
        </section>

        <section className="call-to-action py-20">
          <Container className="text-center">
            <div className="space-y-4">
              {!account && (
                <Button className="cta-button glassmorphism hover:scale-105 transition-all" 
                  onClick={connectWallet}>
                  Start Your Journey
                </Button>
              )}
              <Button className="cta-button glassmorphism hover:scale-105 transition-all" 
                onClick={() => router.push('/story')}>
                Continue Adventure
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
