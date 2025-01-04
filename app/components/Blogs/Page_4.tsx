import React from "react";
import Image from "next/image";
import computerSetup from "../../components/assets/blogs/lastBlog.png";

const Page_4 = () => {
  return (
    <>
      <div className="w-full px-[9vw] flex justify-center">
        <div className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold mb-4">
                The Best AI Art Generator Tools for Elevating Your NFT Game
              </h2>
              <p className="text-gray-700 mb-6">
                Whether or not you are aware of it, supply chain processes affect you. Learn how NFTs can ease the supply chain pain points and improve the industry. Whether or not you are aware of it, supply chain processes affect you. Learn how NFTs can ease the supply chain pain points and improve the industry. Whether or not you are aware of it, supply chain processes affect you. Learn how NFTs can ease the supply chain pain points and improve supply chain processes affect you. Learn how NFTs can ease the supply chain pain points and improve the industry.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src={computerSetup}
                alt="High-tech computer setup for AI art generation"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page_4;
