import React from "react";
import Page_1 from "../../components/Pages/Arts/Page_1";
import Page_2 from "../../components/Pages/Arts/Page_2";
// import Page_3 from "../../components/Pages/Arts/Page_3";
import Footer from "../../components/ReusuableComponents/Footer";

const page = () => {
  return (
    <>
      <Page_1 />
      <Page_2 />
      {/* <Page_3 /> */}
      <Footer />
    </>
  );
};

export default page;
