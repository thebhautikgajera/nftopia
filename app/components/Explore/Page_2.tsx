"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
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

const Page_2 = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200; // Adjust this value to control scroll distance
      const currentScroll = scrollContainerRef.current.scrollLeft;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
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
              onClick={() => setSelectedCategory(index)}
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
  );
};

export default Page_2;
