import Image from "next/image";
import React from "react";
import Category_1 from "../assets/home/category_1.png";
import Category_2 from "../assets/home/category_2.png";
import Category_3 from "../assets/home/category_3.png";
import Category_4 from "../assets/home/category_4.png";
import Category_5 from "../assets/home/category_5.png";
import Category_6 from "../assets/home/category_6.png";

const Page_3 = () => {
  return (
    <>
      <div className="h-auto w-full" id="bgPage3Home">
        <div className=" flex justify-center items-center ">
          <div className="grid grid-cols-3 gap-[3vw]">
            <div className="flex flex-col justify-center items-center">
              <Image
                src={Category_1}
                className="mt-[5vw] object-cover object-center rounded-lg"
                alt="Category_1"
                width={329}
                height={244}
              />
              <h1 className="text-white mt-[2vw] text-[1.5vw] ">3D Artwork</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image
                src={Category_2}
                className="mt-[5vw] object-cover object-center rounded-lg"
                alt="Category_1"
                width={329}
                height={244}
              />
              <h1 className="text-white mt-[2vw] text-[1.5vw] ">Video & Music</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image
                src={Category_3}
                className="mt-[5vw] object-cover object-center rounded-lg"
                alt="Category_1"
                width={329}
                height={244}
              />
              <h1 className="text-white mt-[2vw] text-[1.5vw] capitalize">trading elements</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image
                src={Category_4}
                className="mt-[3vw] object-cover object-center rounded-lg"
                alt="Category_1"
                width={329}
                height={244}
              />
              <h1 className="text-white mt-[2vw] mb-[3vw] text-[1.5vw] capitalize">photography</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image
                src={Category_5}
                className="mt-[3vw] object-cover object-center rounded-lg"
                alt="Category_1"
                width={329}
                height={244}
              />
              <h1 className="text-white mt-[2vw] mb-[3vw] text-[1.5vw] capitalize">historical books</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image
                src={Category_6}
                className="mt-[3vw] object-cover object-center rounded-lg"
                alt="Category_1"
                width={329}
                height={244}
              />
              <h1 className="text-white mt-[2vw] mb-[3vw] text-[1.5vw] capitalize">games & software</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page_3;
