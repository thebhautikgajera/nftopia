import React from "react";
import { FaHeadphones, FaPaperPlane } from "react-icons/fa";

const Page_4 = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-[3vw] mb-[3vw]">
        <div className="w-[60vw] bg-gray-100 py-8 border border-gray-300 shadow-lg rounded-lg">
          <div className="container mx-auto px-[6vw] flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <FaHeadphones className="text-4xl text-green-500 mr-4" />
              <div>
                <p className="text-sm text-black/[0.6]">
                  Have A Question? Call Us 24/7
                </p>
                <p className="text-lg font-bold ">
                  (987) 547587587
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-600 transition duration-300 flex items-center">
                Subscribe
                <FaPaperPlane className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page_4;
