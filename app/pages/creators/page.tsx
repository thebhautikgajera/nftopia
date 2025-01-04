import React from 'react'
import Page_1 from '../../components/Pages/Creators/Page_1'
import Page_2 from '../../components/Pages/Creators/Page_2'
// import Page_3 from '../../components/Pages/Creators/Page_3'
import Page_4 from '../../components/Pages/Creators/Page_4'
import Footer from '../../components/ReusuableComponents/Footer'

const page = () => {
  return (
    <>
      <Page_1 />
      <Page_2 />
      {/* <Page_3 /> */}
      <Page_4 />
      <Footer />
    </>
  );
};

export default page