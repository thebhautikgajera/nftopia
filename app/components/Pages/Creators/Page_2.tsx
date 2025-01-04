"use client";

import React from "react";
import Image from "next/image";
import ProfilePic from "../../../components/assets/pages/profilePic.png";
import VerifiedMark from "../../../components/assets/pages/verifiedMark.png";
import {
  FaMapMarkerAlt,
  FaLink,
  FaCalendarAlt,
  FaPaperPlane,
} from "react-icons/fa";

const Page_2 = () => {
  return (
    <>
      <div className="absolute top-[23vw] left-0 w-full h-full">
        <div className="flex justify-center items-center min-h-screen bg-transparent">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-6xl w-full">
            <div className="flex">
              <div className="mr-8">
                <Image
                  src={ProfilePic}
                  alt="Stive Machman"
                  width={267}
                  height={275}
                  className="rounded-lg"
                />
              </div>
              <div className="flex-1">
                <div className="mb-4">
                  <h2 className="text-4xl font-bold flex items-center">
                    Stive Machman
                    <Image
                      src={VerifiedMark}
                      alt="Verified"
                      width={24}
                      height={24}
                      className="ml-2"
                    />
                  </h2>
                  <p className="text-blue-500 flex items-center text-2xl">
                    @Stive.Lio
                  </p>
                </div>
                <p className="text-gray-600 mb-6 text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
                <div className="text-gray-500 mb-6 text-xl grid grid-cols-1 gap-4">
                  <div className="flex justify-between gap-1">
                    <p className="flex items-center">
                      <FaMapMarkerAlt className="mr-3 text-2xl" />
                      Bran Street, New York, USA
                    </p>
                    <p className="flex items-center">
                      <FaLink className="mr-3 text-2xl" />
                      <a
                        href="https://bit.ly/Yte89K6"
                        className="text-blue-500 hover:underline"
                      >
                        Bit.Ly/Yte89K6
                      </a>
                    </p>
                    <p className="flex items-center">
                      <FaCalendarAlt className="mr-3 text-2xl" />
                      Joined in March 2010
                    </p>
                  </div>
                </div>
                <button className=" capitalize text-white px-16 py-4 bg-gradient-to-r from-[#1B63FF] to-[#21E7B7] hover:from-[#21E7B7] hover:to-[#1B63FF] transition duration-300 ease-in-out flex items-center">
                  message to
                  <FaPaperPlane className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page_2;
