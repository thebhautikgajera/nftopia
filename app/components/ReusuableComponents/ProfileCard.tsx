"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

interface ProfileCardProps {
  backgroundImage: StaticImageData;
  userImage: StaticImageData;
  name: string;
  username: string;
  creatorsCount: number;
  followersCount: number;
  followedCount: number;
  onFollowClick: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  backgroundImage,
  userImage,
  name,
  username,
  creatorsCount,
  followersCount: initialFollowersCount,
  followedCount,
  onFollowClick,
}) => {
  const [isFollowed, setIsFollowed] = useState(false);
  const [followersCount, setFollowersCount] = useState(initialFollowersCount);

  const handleFollowClick = () => {
    setIsFollowed(!isFollowed);
    if (!isFollowed) {
      setFollowersCount((prevCount) => prevCount + 1);
    } else {
      setFollowersCount((prevCount) => prevCount - 1);
    }
    onFollowClick();
  };

  return (
    <div className="h-auto w-auto">
      <div className="max-w-sm mx-auto bg-white [box-shadow:4px_4px_4px_0px_rgba(22,22,22,0.1)] overflow-hidden">
        <div className="w-full h-[242px] relative overflow-hidden">
          <Image
            src={backgroundImage}
            alt="background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="filter"
          />
          <div className="absolute inset-0  to-transparent"></div>
        </div>

        <div className="flex justify-center -mt-[5.5vw]">
          <Image
            src={userImage}
            alt={name}
            width={140}
            height={140}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>

        <div className="text-center p-6">
          <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
          <p className="text-sm text-blue-500 font-semibold mt-1">
            @{username}
          </p>

          <div className="mt-8 flex justify-center space-x-8">
            <div className="text-center">
              <p className="text-x text-gray-500 tracking-wide">Creators</p>
              <p className="text-l font-bold text-gray-700">
                {creatorsCount.toLocaleString()}
              </p>
            </div>
            <div className="text-center">
              <p className="text-x text-gray-500 tracking-wide">Followers</p>
              <p className="text-l font-bold text-gray-700">
                {followersCount.toLocaleString()}
              </p>
            </div>
            <div className="text-center">
              <p className="text-x text-gray-500 tracking-wide">Followed</p>
              <p className="text-l font-bold text-gray-700">
                {followedCount.toLocaleString()}
              </p>
            </div>
          </div>

          <button
            className="mt-8 bg-gradient-to-r from-[#1B63FF] to-[#21E7B7] hover:from-[#21E7B7] hover:to-[#1B63FF] transition duration-300 ease-in-out text-white px-12 py-2 font-semibold shadow-md w-[13vw]"
            onClick={handleFollowClick}
          >
            {isFollowed ? "Followed" : "+ Follow"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
