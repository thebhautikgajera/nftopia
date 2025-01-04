"use client"

import React from 'react'
import Navbar from "../../ReusuableComponents/Navbar";

const Page_1 = () => {
  return (
    <>
    <div className="h-[25vw] w-full bg-[#131927]">
        <Navbar />
        <div className="pl-[8vw] bg-[#131927] flex flex-col justify-center items-start h-[15vw]">
          <h1 className="text-white text-6xl font-bold capitalize">Login</h1>
        </div>
      </div>
    </>
  )
}

export default Page_1