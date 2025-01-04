"use client";

import React from "react";
import Navbar from "../ReusuableComponents/Navbar";

const Page_1 = () => {
  return (
    <>
      <div className="h-screen" id="bgPage1PageBlogs">
        <Navbar />
        <div className="pl-[8vw] flex flex-col justify-center items-start h-[calc(100vh-120px)]">
          <h1 className="text-white text-6xl font-bold">Blogs</h1>
        </div>
      </div>
    </>
  );
};

export default Page_1;
