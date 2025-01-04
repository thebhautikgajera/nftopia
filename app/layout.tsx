import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NFT Marketplace | Buy, Sell & Collect Digital Art",
  description: "Discover unique digital art, collect rare NFTs, and join a thriving community of creators and collectors. Buy, sell and trade digital assets securely on our NFT marketplace.",
  keywords: "NFT, digital art, blockchain, cryptocurrency, collectibles, marketplace, digital assets, crypto art",
  authors: [{ name: "Bhautik Gajera" }],
  creator: "Bhautik Gajera",
  publisher: "NFT Marketplace",
  openGraph: {
    title: "NFT Marketplace | Buy, Sell & Collect Digital Art",
    description: "Discover unique digital art, collect rare NFTs, and join a thriving community of creators and collectors.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NFT Marketplace | Buy, Sell & Collect Digital Art",
    description: "Discover unique digital art, collect rare NFTs, and join a thriving community of creators and collectors.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
