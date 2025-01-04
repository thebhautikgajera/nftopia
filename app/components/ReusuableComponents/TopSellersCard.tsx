import React from 'react'
import Image, { StaticImageData } from 'next/image';
import Verified_mark from '../assets/home/verified_mark.png';

const TopSellersCard = ({
    creator,
    username,
    nftCount,
    imgSrc
}: {
    creator: string;
    username: string;
    nftCount: string;
    imgSrc: StaticImageData;
  }) => {
    return (
      <>
        <div className="flex justify-start items-center">
          <Image src={imgSrc} width={66} height={66} alt="Creator" />
          <div className="flex flex-col justify-start items-start px-[2vw]">
            <div className="flex justify-center items-center gap-[.6vw]">
              <b className="text-[1.2vw] capitalize font-bold">{creator}</b>
              <Image src={Verified_mark} width={17} height={17} alt="" />
            </div>
            <p className="text-[1vw] text-[#1D7BEA]">@{username}</p>
            <p className="text-[1vw] text-black/[0.2] font-bold capitalize mt-[.3vw]">
              {nftCount} created
            </p>
          </div>
        </div>
      </>
    );
  };

export default TopSellersCard