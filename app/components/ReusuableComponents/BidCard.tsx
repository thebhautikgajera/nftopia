import React from "react";
import Image, { StaticImageData } from "next/image";
// import { FaCheckCircle } from "react-icons/fa";

interface BidCardProps {
  profilePic: StaticImageData;
  name: string;
  username: string;
  date: string;
  time: string;
  image1: StaticImageData;
  image2: StaticImageData;
  status: string;
  amountETH: number;
  amountUSD: number;
}

const BidCard: React.FC<BidCardProps> = ({
  profilePic,
  name,
  username,
  date,
  time,
  image1,
  image2,
  status,
  amountETH,
  amountUSD,
}) => {
  return (
    <>
    <div className="flex items-center justify-between p-6 bg-white shadow rounded-lg w-full max-w-8xl">
      {/* Profile Info */}
      <div className="flex items-center flex-grow">
        <Image
          src={profilePic}
          alt="Profile"
          width={125.14}
          height={125.14}
        />
        <div className="ml-10 mr-10">
          <div className="flex items-center">
            <h2 className="font-semibold text-2xl text-gray-900">{name}</h2>
            {/* <FaCheckCircle className="text-blue-500 ml-3" size={24} /> */}
          </div>
          <p className="text-lg text-gray-500">@{username}</p>
          <p className="text-base text-gray-400">{date} | {time}</p>
        </div>
      </div>

      {/* Images and Status */}
      <div className="flex items-center space-x-20">
        <div className="flex space-x-6">
          <Image
            src={image1}
            alt="Art 1"
            width={80}
            height={80}
            className="rounded-lg"
          />
          <Image
            src={image2}
            alt="Art 2"
            width={80}
            height={80}
            className="rounded-lg"
          />
        </div>

        <div className="text-right mr-20 ml-20">
          <p className="text-lg text-green-500">
            Status: <span className="font-semibold">{status}</span>
          </p>
          <p className="text-3xl font-semibold">{amountETH.toFixed(2)} ETH</p>
          <p className="text-base text-gray-500">{amountUSD.toFixed(2)} USD</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default BidCard;
