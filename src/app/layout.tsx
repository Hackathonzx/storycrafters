import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css"; // Ensure the global styles are imported

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Storycrafters",
  description: "Taiko multiverse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <audio className="soundscape" src="/sounds/background.mp3" autoPlay loop />
        {children}
      </body>
    </html>
  );
}
