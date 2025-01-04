"use client";

import React, { useState, useEffect } from "react";
import Play from "../assets/home/play.png";
import Character from "../assets/home/character_01.png";
import Image from "next/image";
import Navbar from "../ReusuableComponents/Navbar";

const Page_1 = () => {
  const [artworkCount, setArtworkCount] = useState(0);
  const [creatorCount, setCreatorCount] = useState(0);

  useEffect(() => {
    const artworkDuration = 1500;
    const creatorDuration = 1500;
    const artworkTarget = 21;
    const creatorTarget = 6;
    
    let artworkStartTime: number | null = null;
    let creatorStartTime: number | null = null;

    const animateArtwork = (timestamp: number) => {
      if (!artworkStartTime) artworkStartTime = timestamp;
      const progress = timestamp - artworkStartTime;
      
      const percentage = Math.min(progress / artworkDuration, 1);
      setArtworkCount(Math.floor(artworkTarget * percentage));

      if (progress < artworkDuration) {
        requestAnimationFrame(animateArtwork);
      }
    };

    const animateCreator = (timestamp: number) => {
      if (!creatorStartTime) creatorStartTime = timestamp;
      const progress = timestamp - creatorStartTime;
      
      const percentage = Math.min(progress / creatorDuration, 1);
      setCreatorCount(Math.floor(creatorTarget * percentage));

      if (progress < creatorDuration) {
        requestAnimationFrame(animateCreator);
      }
    };

    requestAnimationFrame(animateArtwork);
    requestAnimationFrame(animateCreator);
  }, []);

  return (
    <>
      <div className="h-screen" id="bgPage1Home">
        <Navbar />
        <div className="flex ">
          <div className="px-[12vw]">
            <h1 className="text-white mt-[6vw] leading-normal text-[3.55vw] font-['MSr'] font-bold [text-shadow:3.5px_3.5px_rgba(0,_0,_0,_0.40)]">
              Discover Digital Artworks <br /> & Collect{" "}
              <span className="text-[#21E7B7]"> Best NFTs</span>
            </h1>
            <h3 className="text-white/[0.71] text-[1.2vw] capitalize mt-4">
              There is eno ugh digital artworks available online to help you{" "}
              <br /> put together crypto currency website.
            </h3>
            <div className="flex space-x-4 mt-8">
              <button className="px-8 font-['PoppinsR'] py-3 text-white bg-gradient-to-r from-[#1B63FF] to-[#21E7B7] hover:from-[#21E7B7] hover:to-[#1B63FF] transition duration-300 ease-in-out">
                Explore Now
              </button>
              <button className="px-8 py-3 rounded-lg text-white transition duration-300 ease-in-out">
                <div className="flex items-center space-x-2">
                  <Image src={Play} alt="Play Video" width={29} height={29} />
                  <span className="font-['PoppinsR']">Watch Video</span>
                </div>
              </button>
            </div>
            <div className="flex items-center space-x-4 mt-11">
              <div className="text-white font-['PoppinsR'] font-bold mr-[3vw]">
                <span className="text-[2vw]">{artworkCount}k+</span>
                <br />{" "}
                <span className="text-white/[0.71]">Digital Artworks</span>
              </div>
              <div className="text-white font-['PoppinsR'] font-bold">
                <span className="text-[2vw]">{creatorCount}k+</span>
                <br /> <span className="text-white/[0.71]">Unique Creator</span>
              </div>
            </div>
          </div>
          <div className="">
            <Image src={Character} alt="NFT" width={335.49} height={650.05} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page_1;
