"use client";

import React from "react";
import dynamic from "next/dynamic";

const Page_1 = dynamic(() => import("../components/Contact/Page_1"), {
  ssr: false
});
const Page_2 = dynamic(() => import("../components/Contact/Page_2"), {
  ssr: false
});
const Page_3 = dynamic(() => import("../components/Contact/Page_3"), {
  ssr: false
});
const Page_4 = dynamic(() => import("../components/Contact/Page_4"), {
  ssr: false
});
const Footer = dynamic(() => import("../components/ReusuableComponents/Footer"), {
  ssr: false
});

const Page = () => {
  return (
    <>
      <Page_1 />
      <Page_2 />
      <Page_3 />
      <Page_4 />
      <Footer />
    </>
  );
};

export default Page;
