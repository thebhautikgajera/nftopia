import React from "react";

// Importing assets
import Top_creator_1 from "../assets/home/creator_1.png";
import Top_creator_2 from "../assets/home/creator_2.png";
import Top_creator_3 from "../assets/home/creator_3.png";
import Top_creator_4 from "../assets/home/creator_4.png";
import Top_creator_5 from "../assets/home/creator_5.png";
import Top_creator_6 from "../assets/home/creator_6.png";
import Top_seller_1 from "../assets/home/seller_1.png";
import Top_seller_2 from "../assets/home/seller_2.png";
import Top_seller_3 from "../assets/home/seller_3.png";
import Top_seller_4 from "../assets/home/seller_4.png";
import Top_seller_5 from "../assets/home/seller_5.png";
import Top_seller_6 from "../assets/home/seller_6.png";
import TopCreatorsCard from "../ReusuableComponents/TopCreatorsCard";
import TopSellersCard from "../ReusuableComponents/TopSellersCard";


const Page_4 = () => {
  return (
    <>
      <div className="h-auto pb-[10vw] w-full flex justify-center">
        <div className="grid grid-cols-2 justify-center gap-[3vw]">
          <div className="flex flex-col justify-start items-start">
            <h1 className="text-[2vw] capitalize my-[5vw] font-bold">
              Top Creators
            </h1>
            <div className="grid grid-cols-2 justify-start items-center gap-[1vw]">
              {/* Using ProfileCard component */}
              <TopCreatorsCard
                creator="Stive Machman"
                username="smachman"
                nftCount="820"
                imgSrc={Top_creator_1}
              />

              {/* Repeat for other creators */}
              <TopCreatorsCard
                creator="jobanico mino"
                username="jmino"
                nftCount="820"
                imgSrc={Top_creator_2}
              />
              <TopCreatorsCard
                creator="walter russel"
                username="wrussel"
                nftCount="820"
                imgSrc={Top_creator_3}
              />
              <TopCreatorsCard
                creator="maeey colahin"
                username="mcolahin"
                nftCount="820"
                imgSrc={Top_creator_4}
              />
              <TopCreatorsCard
                creator="john sheffler"
                username="jsheffler"
                nftCount="820"
                imgSrc={Top_creator_5}
              />
              <TopCreatorsCard
                creator="kenny chess"
                username="kchess"
                nftCount="820"
                imgSrc={Top_creator_6}
              />
            </div>
          </div>
          <div className="flex flex-col justify-start items-start">
            <h1 className="text-[2vw] capitalize my-[5vw] font-bold">
              Top Sellers
            </h1>
            <div className="grid grid-cols-2 justify-start items-center gap-[1vw]">
              {/* Using ProfileCard component */}
              <TopSellersCard
                creator="jeffery hayes"
                username="jhayes"
                nftCount="820"
                imgSrc={Top_seller_1}
              />

              {/* Repeat for other creators */}
              <TopSellersCard
                creator="jobanico mino"
                username="jmino"
                nftCount="820"
                imgSrc={Top_seller_2}
              />
              <TopSellersCard
                creator="marry callhen"
                username="mcallhen"
                nftCount="820"
                imgSrc={Top_seller_3}
              />
              <TopSellersCard
                creator="marry colaahen"
                username="mcolaahen"
                nftCount="820"
                imgSrc={Top_seller_4}
              />
              <TopSellersCard
                creator="walter russel"
                username="wrussel"
                nftCount="820"
                imgSrc={Top_seller_5}
              />
              <TopSellersCard
                creator="stive machman"
                username="smachman"
                nftCount="820"
                imgSrc={Top_seller_6}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page_4;
