"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import NFTCard from "../../ReusuableComponents/NFTCard";
import CollectionCard from "../../ReusuableComponents/CollectionCard";
import BidCard from "../../ReusuableComponents/BidCard";
import Bid_1 from "../../assets/home/bid_1.png";
import Bid_2 from "../../assets/home/bid_2.png";
import Bid_3 from "../../assets/home/bid_3.png";
import Bid_User_1 from "../../assets/home/bid_user_1.png";
import Bid_User_2 from "../../assets/home/bid_user_2.png";
import Bid_User_3 from "../../assets/home/bid_user_3.png";
import Bid_List_1 from "../../assets/pages/Bid_1_User.png";
import Bid_List_2 from "../../assets/pages/Bid_2_User.png";
import Bid_List_3 from "../../assets/pages/Bid_3_User.png";
import Bid_List_4 from "../../assets/pages/Bid_4_User.png";
import Bid_Art_1 from "../../assets/pages/Bid_Image_1_1.png";
import Bid_Art_2 from "../../assets/pages/Bid_Image_2_1.png";
import Collection_1 from "../../assets/pages/collection_1.png";
import Collection_2 from "../../assets/pages/collection_2.png";
import Collection_3 from "../../assets/pages/collection_3.png";
import Collection_4 from "../../assets/pages/collection_4.png";
import Collection_5 from "../../assets/pages/collection_5.png";
import Collection_6 from "../../assets/pages/collection_6.png";

const Page_4 = () => {
  const pathname = usePathname();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const menuItems = [
    { name: "Created", count: 16 },
    { name: "Collection", count: 95 },
    { name: "Featured Item", count: 16 },
    { name: "Total Sold", count: 16 },
    { name: "Total Bids", count: 16 },
  ];
  const [activeMenu, setActiveMenu] = useState(0); // Default to the first menu item

  useEffect(() => {
    // Set active menu based on the current URL path
    const currentItemIndex = menuItems.findIndex(
      (item) => item.name.toLowerCase() === pathname.split("/").pop()
    );
    if (currentItemIndex !== -1) {
      setActiveMenu(currentItemIndex);
    }
  }, [pathname, menuItems]);

  const toggleMenu = (index: number) => {
    setActiveMenu(index);
  };

  const renderNFTCards = () => {
    return (
      <>
        <div className="grid grid-cols-3 flex-col items-center gap-8">
          <NFTCard
            imageSrc={Bid_1}
            userImageSrc={Bid_User_1}
            username="JohnDoe"
            title="startup concept"
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
            title="startup concept"
            currentBid="83.46"
          />
          <NFTCard
            imageSrc={Bid_1}
            userImageSrc={Bid_User_1}
            username="JohnDoe"
            title="startup concept"
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
            title="startup concept"
            currentBid="83.46"
          />
        </div>
      </>
    );
  };

  const renderCollectionCards = () => {
    return (
      <>
        <div className="grid grid-cols-3 flex-col items-center gap-8">
          <CollectionCard
            imageSrc={Collection_1}
            title="flat landscapes"
            collectionCount={10}
          />
          <CollectionCard
            imageSrc={Collection_2}
            title="Creative Artwork"
            collectionCount={15}
          />
          <CollectionCard
            imageSrc={Collection_3}
            title="Digital Painting"
            collectionCount={20}
          />
          <CollectionCard
            imageSrc={Collection_4}
            title="Abstract Art"
            collectionCount={10}
          />
          <CollectionCard
            imageSrc={Collection_5}
            title="Digital Product"
            collectionCount={15}
          />
          <CollectionCard
            imageSrc={Collection_6}
            title="Colorful Design"
            collectionCount={20}
          />
        </div>
      </>
    );
  };

  const renderFeaturedItems = () => {
    return (
      <>
        <div className="grid grid-cols-3 flex-col items-center gap-8">
          <NFTCard
            imageSrc={Bid_1}
            userImageSrc={Bid_User_1}
            username="FeaturedUser1"
            title="Featured NFT 1"
            currentBid="100.00"
          />
          <NFTCard
            imageSrc={Bid_2}
            userImageSrc={Bid_User_2}
            username="FeaturedUser2"
            title="Featured NFT 2"
            currentBid="150.00"
          />
          <NFTCard
            imageSrc={Bid_3}
            userImageSrc={Bid_User_3}
            username="FeaturedUser3"
            title="Featured NFT 3"
            currentBid="200.00"
          />
          <NFTCard
            imageSrc={Bid_1}
            userImageSrc={Bid_User_1}
            username="FeaturedUser1"
            title="Featured NFT 1"
            currentBid="100.00"
          />
          <NFTCard
            imageSrc={Bid_2}
            userImageSrc={Bid_User_2}
            username="FeaturedUser2"
            title="Featured NFT 2"
            currentBid="150.00"
          />
          <NFTCard
            imageSrc={Bid_3}
            userImageSrc={Bid_User_3}
            username="FeaturedUser3"
            title="Featured NFT 3"
            currentBid="200.00"
          />
        </div>
      </>
    );
  };

  const renderTotalSold = () => {
    return (
      <>
        <div className="grid grid-cols-3 flex-col items-center gap-8">
          <NFTCard
            imageSrc={Bid_1}
            userImageSrc={Bid_User_1}
            username="SoldUser1"
            title="Sold NFT 1"
            currentBid="500.00"
          />
          <NFTCard
            imageSrc={Bid_2}
            userImageSrc={Bid_User_2}
            username="SoldUser2"
            title="Sold NFT 2"
            currentBid="750.00"
          />
          <NFTCard
            imageSrc={Bid_3}
            userImageSrc={Bid_User_3}
            username="SoldUser3"
            title="Sold NFT 3"
            currentBid="1000.00"
          />
          <NFTCard
            imageSrc={Bid_1}
            userImageSrc={Bid_User_1}
            username="FeaturedUser1"
            title="Featured NFT 1"
            currentBid="100.00"
          />
          <NFTCard
            imageSrc={Bid_2}
            userImageSrc={Bid_User_2}
            username="FeaturedUser2"
            title="Featured NFT 2"
            currentBid="150.00"
          />
          <NFTCard
            imageSrc={Bid_3}
            userImageSrc={Bid_User_3}
            username="FeaturedUser3"
            title="Featured NFT 3"
            currentBid="200.00"
          />
          
        </div>
      </>
    );
  };

  const renderTotalBids = () => {
    return (
      <>
        <div className="flex flex-col items-center space-y-4">
          <BidCard
            profilePic={Bid_List_1}
            name="Bid Item 1"
            username="BidUser1"
            date="2023-06-01"
            time="14:30"
            image1={Bid_Art_1}
            image2={Bid_Art_2}
            status="Active"
            amountETH={0.5}
            amountUSD={120.0}
          />
          <BidCard
            profilePic={Bid_List_2}
            name="Bid Item 2"
            username="BidUser2"
            date="2023-06-02"
            time="10:15"
            image1={Bid_Art_1}
            image2={Bid_Art_2}
            status="Active"
            amountETH={0.75}
            amountUSD={180.0}
          />
          <BidCard
            profilePic={Bid_List_3}
            name="Bid Item 3"
            username="BidUser3"
            date="2023-06-03"
            time="16:45"
            image1={Bid_Art_1}
            image2={Bid_Art_2}
            status="Active"
            amountETH={1.0}
            amountUSD={250.0}
          />
          <BidCard
            profilePic={Bid_List_4}
            name="Bid Item 4"
            username="BidUser4"
            date="2023-06-04"
            time="12:20"
            image1={Bid_Art_1}
            image2={Bid_Art_2}
            status="Active"
            amountETH={0.8}
            amountUSD={200.0}
          />
        </div>
      </>
    );
  };

  return (
    <>
      <div className="mt-[18vw]">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 min-h-auto mb-[3vw] py-12">
          <div className="container mx-auto px-4">
            {/* Menu buttons */}
            <div className="mb-8 flex justify-center flex-wrap gap-4">
              {menuItems.map((item, index) => (
                <motion.button
                  key={index}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                    activeMenu === index
                      ? "bg-blue-500 text-white shadow-lg scale-105"
                      : "bg-white text-blue-700 hover:bg-blue-100 hover:scale-105"
                  }`}
                  onClick={() => toggleMenu(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{item.name}</span>
                  <span className="text-xl">{item.count}</span>
                </motion.button>
              ))}
            </div>

            {/* Content area */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMenu}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex justify-center items-center"
              >
                {activeMenu === 0 ? (
                  renderNFTCards()
                ) : activeMenu === 1 ? (
                  renderCollectionCards()
                ) : activeMenu === 2 ? (
                  renderFeaturedItems()
                ) : activeMenu === 3 ? (
                  renderTotalSold()
                ) : activeMenu === 4 ? (
                  renderTotalBids()
                ) : (
                  <div className="text-center text-gray-500">
                    Content for {menuItems[activeMenu].name} goes here.
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page_4;
