import React from "react";
import Image, { StaticImageData } from "next/image";
import Activity from "../assets/home/activity_vector.png";

interface NFTImageProps {
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
}

const NFTImage: React.FC<NFTImageProps> = ({ src, alt, width, height }) => (
  <div className="flex items-center justify-center mt-[1.5vw]">
    <Image src={src} alt={alt} width={width} height={height} />
  </div>
);

interface UserInfoProps {
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
  username: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ src, alt, width, height, username }) => (
  <div className="flex gap-[.5vw] mt-[1vw] items-center">
    <Image src={src} alt={alt} width={width} height={height} />
    <h3 className="">{username}</h3>
  </div>
);

interface NFTDetailsProps {
  title: string;
  currentBid: string;
  category: string;
}

const NFTDetails: React.FC<NFTDetailsProps> = ({ title, currentBid, category }) => (
  <>
    <h3 className="capitalize mt-[1vw] text-[1.2vw] font-bold text-black">
      {title}
    </h3>
    <p className="text-sm text-gray-500 mt-[.2vw]">{category}</p>
    <h3 className="capitalize mt-[.4vw] text-black/[0.51] font-bold">
      Current bids
    </h3>
    <div className="flex items-center justify-between mt-[.2vw]">
      <h3 className="capitalize font-bold text-[#1B63FF]">{currentBid} ETH</h3>
      <div className="flex items-center justify-between gap-[.5vw]">
        <Image src={Activity} alt="Activity" width={12} height={9.43} />
        <h3 className="capitalize">Activity</h3>
      </div>
    </div>
  </>
);

const BidButton: React.FC = () => (
  <button className="px-[4.437vw] mt-[1vw] capitalize text-[1vw] text-center font-['MSr'] font-bold py-3 text-white bg-gradient-to-r from-[#1B63FF] to-[#21E7B7] hover:from-[#21E7B7] hover:to-[#1B63FF] transition duration-300 ease-in-out">
    place bid
  </button>
);

interface NFTCardProps {
  imageSrc: StaticImageData;
  userImageSrc: StaticImageData;
  username: string;
  title: string;
  currentBid: string;
  category: string;
}

const NFTCard: React.FC<NFTCardProps> = ({ imageSrc, userImageSrc, username, title, currentBid, category }) => {
  return (
    <div className="h-[31vw] w-[17vw] [box-shadow:4px_4px_4px_0px_rgba(22,22,22,0.1)] rounded-lg">
      <div className="px-[1.7vw] ">
        <NFTImage src={imageSrc} alt="NFT Image" width={239} height={249} />
        <UserInfo
          src={userImageSrc}
          alt="User Image"
          width={31}
          height={31}
          username={username}
        />
        <NFTDetails title={title} currentBid={currentBid} category={category} />
        <BidButton />
      </div>
    </div>
  );
};

export default NFTCard;
