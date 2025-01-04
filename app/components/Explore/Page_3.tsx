import React from "react";
import NFTCard from "../ReusuableComponents/NFTCard";
import Bid_1 from "../assets/home/bid_1.png";
import Bid_2 from "../assets/home/bid_2.png";
import Bid_3 from "../assets/home/bid_3.png";
import Bid_User_1 from "../assets/home/bid_user_1.png";
import Bid_User_2 from "../assets/home/bid_user_2.png";
import Bid_User_3 from "../assets/home/bid_user_3.png";

const Page_3 = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-[2vw] mb-[4.5vw]">
        <div className="grid grid-cols-3 gap-[4vw] justify-center items-center">
          <NFTCard
            imageSrc={Bid_1}
            userImageSrc={Bid_User_1}
            username="JohnDoe"
            title="Awesome NFT"
            currentBid="83.46"
          />
          <NFTCard
            imageSrc={Bid_2}
            userImageSrc={Bid_User_2}
            username="JohnDoe"
            title="startup concept"
            currentBid="83.46"
          />
          <NFTCard
            imageSrc={Bid_3}
            userImageSrc={Bid_User_3}
            username="JohnDoe"
            title="easter santa clause"
            currentBid="83.46"
          />
          <NFTCard
            imageSrc={Bid_1}
            userImageSrc={Bid_User_1}
            username="JohnDoe"
            title="Awesome NFT"
            currentBid="83.46"
          />
          <NFTCard
            imageSrc={Bid_2}
            userImageSrc={Bid_User_2}
            username="JohnDoe"
            title="startup concept"
            currentBid="83.46"
          />
          <NFTCard
            imageSrc={Bid_3}
            userImageSrc={Bid_User_3}
            username="JohnDoe"
            title="easter santa clause"
            currentBid="83.46"
          />
          <NFTCard
            imageSrc={Bid_1}
            userImageSrc={Bid_User_1}
            username="JohnDoe"
            title="Awesome NFT"
            currentBid="83.46"
          />
          <NFTCard
            imageSrc={Bid_2}
            userImageSrc={Bid_User_2}
            username="JohnDoe"
            title="startup concept"
            currentBid="83.46"
          />
          <NFTCard
            imageSrc={Bid_3}
            userImageSrc={Bid_User_3}
            username="JohnDoe"
            title="easter santa clause"
            currentBid="83.46"
          />
        </div>
      </div>
    </>
  );
};

export default Page_3;
