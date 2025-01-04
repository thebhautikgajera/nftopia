import React from "react";
import Page_1 from "../components/Home/Page_1";
import Page_2 from "../components/Home/Page_2";
import Page_3 from "../components/Home/Page_3";
import Page_4 from "../components/Home/Page_4";
import Page_5 from "../components/Home/Page_5";
import Page_6 from "../components/Home/Page_6";    
import Footer from "../components/ReusuableComponents/Footer";

const page = () => {
  return (
    <>
      <Page_1 />
      <Page_2 />
      <Page_3 />
      <Page_4 />
      <Page_5 />
      <Page_6 />
      <Footer />
    </>
  );
};

export default page;
