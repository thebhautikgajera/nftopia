"use client";

import React, { useState, useEffect } from "react";
import ProfileCard from "../ReusuableComponents/ProfileCard";
import BG_1 from "../assets/creator/bg_1.png";
import BG_2 from "../assets/creator/bg_2.png";
import BG_3 from "../assets/creator/bg_3.png";
import BG_4 from "../assets/creator/bg_4.png";
import BG_5 from "../assets/creator/bg_5.png";
import BG_6 from "../assets/creator/bg_6.png";
import BG_7 from "../assets/creator/bg_7.png";
import BG_8 from "../assets/creator/bg_8.png";
import BG_9 from "../assets/creator/bg_9.png";
import BG_10 from "../assets/creator/bg_10.png";
import BG_11 from "../assets/creator/bg_11.png";
import BG_12 from "../assets/creator/bg_12.png";
import User_1 from "../assets/creator/user_1.png";
import User_2 from "../assets/creator/user_2.png";
import User_3 from "../assets/creator/user_3.png";
import User_4 from "../assets/creator/user_4.png";
import User_5 from "../assets/creator/user_5.png";
import User_6 from "../assets/creator/user_6.png";
import User_7 from "../assets/creator/user_7.png";
import User_8 from "../assets/creator/user_8.png";
import User_9 from "../assets/creator/user_9.png";

const Page_2 = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <div className="flex justify-center items-center mt-[4vw] mb-[6vw]">
        <div className="grid grid-cols-3 gap-[4vw]">
          <ProfileCard
            backgroundImage={BG_1}
            userImage={User_1}
            name="Stive Machman"
            username="stive.lio"
            creatorsCount={820}
            followersCount={879632}
            followedCount={87775}
            onFollowClick={() => {}}
          />
          <ProfileCard
            backgroundImage={BG_2}
            userImage={User_2}
            name="Jobanico Mina"
            username="stive.lio"
            creatorsCount={820}
            followersCount={879632}
            followedCount={87775}
            onFollowClick={() => {}}
          />
          <ProfileCard
            backgroundImage={BG_3}
            userImage={User_3}
            name="Walter Russell"
            username="stive.lio"
            creatorsCount={820}
            followersCount={879632}
            followedCount={87775}
            onFollowClick={() => {}}
          />
          <ProfileCard
            backgroundImage={BG_4}
            userImage={User_4}
            name="Mary Callahan"
            username="stive.lio"
            creatorsCount={820}
            followersCount={879632}
            followedCount={87775}
            onFollowClick={() => {}}
          />
          <ProfileCard
            backgroundImage={BG_5}
            userImage={User_5}
            name="John Schreffler"
            username="stive.lio"
            creatorsCount={820}
            followersCount={879632}
            followedCount={87775}
            onFollowClick={() => {}}
          />
          <ProfileCard
            backgroundImage={BG_6}
            userImage={User_6}
            name="Kenny Chess"
            username="stive.lio"
            creatorsCount={820}
            followersCount={879632}
            followedCount={87775}
            onFollowClick={() => {}}
          />
          <ProfileCard
            backgroundImage={BG_7}
            userImage={User_7}
            name="Jeffrey Hayes"
            username="stive.lio"
            creatorsCount={820}
            followersCount={879632}
            followedCount={87775}
            onFollowClick={() => {}}
          />
          <ProfileCard
            backgroundImage={BG_8}
            userImage={User_8}
            name="Patricia Stephens"
            username="stive.lio"
            creatorsCount={820}
            followersCount={879632}
            followedCount={87775}
            onFollowClick={() => {}}
          />
          <ProfileCard
            backgroundImage={BG_9}
            userImage={User_9}
            name="Carol G. Johnson"
            username="stive.lio"
            creatorsCount={820}
            followersCount={879632}
            followedCount={87775}
            onFollowClick={() => {}}
          />
          <ProfileCard
            backgroundImage={BG_10}
            userImage={User_7}
            name="Jeffrey Hayes"
            username="stive.lio"
            creatorsCount={820}
            followersCount={879632}
            followedCount={87775}
            onFollowClick={() => {}}
          />
          <ProfileCard
            backgroundImage={BG_11}
            userImage={User_8}
            name="Patricia Stephens"
            username="stive.lio"
            creatorsCount={820}
            followersCount={879632}
            followedCount={87775}
            onFollowClick={() => {}}
          />
          <ProfileCard
            backgroundImage={BG_12}
            userImage={User_9}
            name="Carol G. Johnson"
            username="stive.lio"
            creatorsCount={820}
            followersCount={879632}
            followedCount={87775}
            onFollowClick={() => {}}
          />
        </div>
      </div>
    </>
  );
};

export default Page_2;
