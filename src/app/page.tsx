"use client";

import Image from "next/image";
import Button from "@/components/Button";
import { useState, useEffect } from "react";
import "@/styles/globals.css"; // Ensure the global styles are imported
import Footer from "@/components/Footer";
import { useAuth } from "@/hooks/useAuthContext";

export default function Home() {
  const [currentSpotlight, setCurrentSpotlight] = useState(0);
  const [theme, setTheme] = useState("light");
  const spotlightItems = [
    { title: "Guild Accomplishment 1", image: "/images/spotlight1.jpg" },
    { title: "Leaderboard Topper", image: "/images/spotlight2.jpg" },
    { title: "Trending Marketplace Item", image: "/images/spotlight3.jpg" },
  ];

  const { connectWallet, account } = useAuth();

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

  return (
    <div className={`landing-page ${theme}`}>
      <header className="header flex justify-between items-center p-4 bg-gray-900 text-white">
        <Button className="connect-wallet" onClick={connectWallet}>
          {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : "Connect Wallet"}
        </Button>
        <Button className="theme-switcher" onClick={toggleTheme}>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </Button>
      </header>
      <section className="hero-section relative h-screen">
        <div className="hero-background absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Taiko Multiverse"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h1 className="hero-title text-white text-4xl md:text-6xl font-bold absolute bottom-10 left-10">
          Welcome to the Taiko Multiverse Adventure
        </h1>
      </section>
      <section className="gameplay-overview py-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6">Gameplay Overview</h2>
        <div className="features flex flex-wrap justify-center gap-6">
          <div className="feature text-center">
            <Image src="/icons/community.svg" alt="Community" width={50} height={50} />
            <p>Community-driven story choices</p>
          </div>
          <div className="feature text-center">
            <Image src="/icons/nft.svg" alt="NFT" width={50} height={50} />
            <p>NFT-based characters</p>
          </div>
          <div className="feature text-center">
            <Image src="/icons/guild.svg" alt="Guild" width={50} height={50} />
            <p>Guilds and more</p>
          </div>
        </div>
      </section>
      <section className="community-spotlight py-10 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">Community Spotlight</h2>
        <div className="spotlight-carousel flex overflow-x-auto snap-x">
          {spotlightItems.map((item, index) => (
            <div
              key={index}
              className={`spotlight-item snap-center p-4 ${index === currentSpotlight ? "active" : ""}`}
            >
              <Image src={item.image} alt={item.title} width={300} height={200} />
              <p className="text-center">{item.title}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="call-to-action py-10 bg-gray-100 flex flex-col items-center gap-4">
        <Button className="cta-button" onClick={connectWallet}>Connect Wallet</Button>
        <Button className="cta-button" onClick={() => {}}>Explore the Story</Button>
        <Button className="cta-button" onClick={() => {}}>Join the Community</Button>
      </section>
      <Footer />
    </div>
  );
}
