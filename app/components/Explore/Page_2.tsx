"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import NFTCard from "../ReusuableComponents/NFTCard";
import Bid_1 from "../assets/home/bid_1.png";
import Bid_2 from "../assets/home/bid_2.png";
import Bid_3 from "../assets/home/bid_3.png";
import Bid_User_1 from "../assets/home/bid_user_1.png";
import Bid_User_2 from "../assets/home/bid_user_2.png";
import Bid_User_3 from "../assets/home/bid_user_3.png";
import ArtworkIcon from "../assets/explore/creative_artwork.png";
import VideoIcon from "../assets/explore/videos.png";
import MusicIcon from "../assets/explore/music.png";
import GameIcon from "../assets/explore/games.png";
import SoftwareIcon from "../assets/explore/software.png";
import ArrowLeftIcon from "../assets/explore/arrow_left.png";
import ArrowRightIcon from "../assets/explore/arrow_right.png";

const categories = [
  { name: "Creative Artworks", icon: ArtworkIcon },
  { name: "Videos", icon: VideoIcon },
  { name: "Music", icon: MusicIcon },
  { name: "Games", icon: GameIcon },
  { name: "Software", icon: SoftwareIcon },
  { name: "Creative Artworks", icon: ArtworkIcon },
  { name: "Videos", icon: VideoIcon },
  { name: "Music", icon: MusicIcon },
  { name: "Games", icon: GameIcon },
  { name: "Software", icon: SoftwareIcon },
  { name: "Creative Artworks", icon: ArtworkIcon },
  { name: "Videos", icon: VideoIcon },
  { name: "Music", icon: MusicIcon },
  { name: "Games", icon: GameIcon },
  { name: "Software", icon: SoftwareIcon },
];

const nftData = [
  {
    imageSrc: Bid_1,
    userImageSrc: Bid_User_1,
    username: "JohnDoe",
    title: "Awesome NFT",
    currentBid: "83.46",
    category: "Creative Artworks"
  },
  {
    imageSrc: Bid_2,
    userImageSrc: Bid_User_2,
    username: "JohnDoe", 
    title: "startup concept",
    currentBid: "83.46",
    category: "Videos"
  },
  {
    imageSrc: Bid_3,
    userImageSrc: Bid_User_3,
    username: "JohnDoe",
    title: "easter santa clause",
    currentBid: "83.46", 
    category: "Music"
  },
  {
    imageSrc: Bid_1,
    userImageSrc: Bid_User_1,
    username: "JohnDoe",
    title: "Awesome NFT",
    currentBid: "83.46",
    category: "Games"
  },
  {
    imageSrc: Bid_2,
    userImageSrc: Bid_User_2,
    username: "JohnDoe",
    title: "startup concept", 
    currentBid: "83.46",
    category: "Software"
  },
  {
    imageSrc: Bid_3,
    userImageSrc: Bid_User_3,
    username: "JohnDoe",
    title: "easter santa clause",
    currentBid: "83.46",
    category: "Creative Artworks"
  },
  {
    imageSrc: Bid_1,
    userImageSrc: Bid_User_1,
    username: "JohnDoe",
    title: "Awesome NFT",
    currentBid: "83.46",
    category: "Videos"
  },
  {
    imageSrc: Bid_2,
    userImageSrc: Bid_User_2,
    username: "JohnDoe",
    title: "startup concept",
    currentBid: "83.46",
    category: "Music"
  },
  {
    imageSrc: Bid_3,
    userImageSrc: Bid_User_3,
    username: "JohnDoe",
    title: "easter santa clause",
    currentBid: "83.46",
    category: "Games"
  }
];

const Page_3 = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const filteredNFTs = selectedCategory !== null 
    ? nftData.filter(nft => nft.category === categories[selectedCategory].name)
    : nftData;

  return (
    <>
      <div className="w-full overflow-x-auto select-none">
        <div className="flex items-center justify-center space-x-8 py-8 px-4">
          <div 
            className="flex flex-row items-center space-x-4 w-auto h-auto rounded-lg [box-shadow:-1px_4px_8px_0px_rgba(0,_0,_0,_0.25)] p-4 cursor-pointer"
            onClick={() => scroll('left')}
          >
            <Image src={ArrowLeftIcon} alt="Scroll Left" width={30} height={30} />
          </div>
          <div ref={scrollContainerRef} className="flex overflow-x-auto space-x-8 scrollbar-hide">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`flex flex-row items-center space-x-4 w-auto h-auto rounded-lg [box-shadow:-1px_4px_8px_0px_rgba(0,_0,_0,_0.25)] p-4 flex-shrink-0 cursor-pointer ${
                  selectedCategory === index ? 'bg-blue-100' : ''
                }`}
                onClick={() => setSelectedCategory(index === selectedCategory ? null : index)}
              >
                <div className="flex items-center justify-center bg-gray-100">
                  <Image
                    src={category.icon}
                    alt={category.name}
                    width={30}
                    height={30}
                  />
                </div>
                <span className="text-sm font-medium">{category.name}</span>
              </div>
            ))}
          </div>
          <div 
            className="flex flex-row items-center space-x-4 w-auto h-auto rounded-lg [box-shadow:-1px_4px_8px_0px_rgba(0,_0,_0,_0.25)] p-4 cursor-pointer"
            onClick={() => scroll('right')}
          >
            <Image
              src={ArrowRightIcon}
              alt="Scroll Right"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-[2vw] mb-[4.5vw]">
        <div className="grid grid-cols-3 gap-[4vw] justify-center items-center">
          {filteredNFTs.map((nft, index) => (
            <NFTCard
              key={index}
              imageSrc={nft.imageSrc}
              userImageSrc={nft.userImageSrc}
              username={nft.username}
              title={nft.title}
              currentBid={nft.currentBid}
              category={nft.category}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Page_3;
