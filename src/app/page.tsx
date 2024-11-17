"use client";

import Image from "next/image";
import Button from "@/components/Button";
import { useState, useEffect } from "react";
import "@/styles/globals.css"; // Ensure the global styles are imported


export default function Home() {
  const [currentSpotlight, setCurrentSpotlight] = useState(0);
  const [theme, setTheme] = useState("light");
  const spotlightItems = [
    { title: "Guild Accomplishment 1", image: "/images/spotlight1.jpg" },
    { title: "Leaderboard Topper", image: "/images/spotlight2.jpg" },
    { title: "Trending Marketplace Item", image: "/images/spotlight3.jpg" },
  ];

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
      <header className="header">
        <Button className="connect-wallet" onClick={() => {}}>Connect Wallet</Button>
        <Button className="theme-switcher" onClick={toggleTheme}>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </Button>
      </header>
      <section className="hero-section">
        <div className="hero-background">
          <Image
            src="/images/hero.jpg"
            alt="Taiko Multiverse"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h1 className="hero-title">Welcome to the Taiko Multiverse Adventure</h1>
      </section>
      <section className="gameplay-overview">
        <h2>Gameplay Overview</h2>
        <div className="features">
          <div className="feature">
            <Image src="/icons/community.svg" alt="Community" width={50} height={50} />
            <p>Community-driven story choices</p>
          </div>
          <div className="feature">
            <Image src="/icons/nft.svg" alt="NFT" width={50} height={50} />
            <p>NFT-based characters</p>
          </div>
          <div className="feature">
            <Image src="/icons/guild.svg" alt="Guild" width={50} height={50} />
            <p>Guilds and more</p>
          </div>
        </div>
      </section>
      <section className="community-spotlight">
        <h2>Community Spotlight</h2>
        <div className="spotlight-carousel">
          {spotlightItems.map((item, index) => (
            <div
              key={index}
              className={`spotlight-item ${index === currentSpotlight ? "active" : ""}`}
            >
              <Image src={item.image} alt={item.title} width={300} height={200} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="call-to-action">
        <Button className="cta-button" onClick={() => {}}>Connect Wallet</Button>
        <Button className="cta-button" onClick={() => {}}>Explore the Story</Button>
        <Button className="cta-button" onClick={() => {}}>Join the Community</Button>
      </section>
    </div>
  );
}
