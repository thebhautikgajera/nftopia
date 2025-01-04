import Image from "next/image";
import React from "react";
import Metamask from "../assets/home/metamask.png";
import Binance from "../assets/home/binance.png";
import Formatic from "../assets/home/formatic.png";
import Autherum from "../assets/home/autherum.png";
import Coinbase from "../assets/home/coinbase.png";
import NFTCard from "../ReusuableComponents/NFTCard";
import Bid_1 from "../assets/home/bid_1.png";
import Bid_2 from "../assets/home/bid_2.png";
import Bid_3 from "../assets/home/bid_3.png";
import Bid_User_1 from "../assets/home/bid_user_1.png";
import Bid_User_2 from "../assets/home/bid_user_2.png";
import Bid_User_3 from "../assets/home/bid_user_3.png";

const Page_2 = () => {
  return (
    <>
      <div className="h-auto">
        <h1 className="font-bold mt-[8vw] text-[1.7vw] text-center">
          Set Your Wallet
        </h1>
        <h3 className="text-[1.2vw] text-center capitalize text-[rgba(0,_0,_0,_0.46)]">
          Here are a few reasons why you should choose Oction
        </h3>
        <div className="flex items-center justify-center gap-[3vw] mt-[3vw]">
          <div className="h-[11vw] w-[11vw] p-[2vw] flex flex-col items-center justify-center [box-shadow:4px_4px_15px_0px_rgba(0,0,0,0.25)] rounded-lg">
            <Image src={Metamask} alt="Metamask" width={90} height={80.37} />
            <h4 className="text-center mt-[1.5vw]">Meta Mask</h4>
          </div>
          <div className="h-[11vw] w-[11vw] p-[2vw] flex flex-col items-center justify-center [box-shadow:4px_4px_15px_0px_rgba(0,0,0,0.4)] rounded-lg">
            <Image src={Binance} alt="Metamask" width={87} height={87} />
            <h4 className="text-center mt-[1.5vw]">Binance</h4>
          </div>
          <div className="h-[11vw] w-[11vw] p-[2vw] flex flex-col items-center justify-center [box-shadow:4px_4px_15px_0px_rgba(0,0,0,0.4)] rounded-lg">
            <Image src={Formatic} alt="Metamask" width={72} height={66} />
            <h4 className="text-center mt-[1.5vw]">Formatic</h4>
          </div>
          <div className="h-[11vw] w-[11vw] p-[2vw] flex flex-col items-center justify-center [box-shadow:4px_4px_15px_0px_rgba(0,0,0,0.4)] rounded-lg">
            <Image src={Autherum} alt="Metamask" width={82} height={82} />
            <h4 className="text-center mt-[1.5vw]">Autherum</h4>
          </div>
          <div className="h-[11vw] w-[11vw] p-[2vw] flex flex-col items-center justify-center [box-shadow:4px_4px_15px_0px_rgba(0,0,0,0.4)] rounded-lg">
            <Image src={Coinbase} alt="Metamask" width={75} height={75} />
            <h4 className="text-center mt-[1.5vw]">Coinbase</h4>
          </div>
        </div>
        <h1 className="font-bold mt-[8vw] text-[1.7vw] text-center">
          Live Bids
        </h1>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-3 gap-[3vw] mt-[2vw]">
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
        <h1 className="font-bold capitalize mt-[10vw] mb-[2vw] text-[1.7vw] text-center">
          browse by category
        </h1>
      </div>
    </>
  );
};

export default Page_2;
