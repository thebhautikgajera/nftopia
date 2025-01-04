"use client";

import React from "react";
import dynamic from "next/dynamic";

const Page_1 = dynamic(() => import("../../components/Pages/Register/Page_1"), {
  ssr: false
});
const Page_2 = dynamic(() => import("../../components/Pages/Register/Page_2"), {
  ssr: false
});
const Footer = dynamic(() => import("../../components/ReusuableComponents/Footer"), {
  ssr: false
});

const Page = () => {
  return (
    <>
      <Page_1 />
      <Page_2 />
      <Footer />
    </>
  );
};

export default Page;
