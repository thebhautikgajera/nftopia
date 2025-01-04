"use client"

import React, { useState } from "react";
import NFTCard from "../../ReusuableComponents/NFTCard";
import Bid_1 from "../../assets/home/bid_1.png";
import Bid_2 from "../../assets/home/bid_2.png";
import Bid_3 from "../../assets/home/bid_3.png";
import Bid_User_1 from "../../assets/home/bid_user_1.png";
import Bid_User_2 from "../../assets/home/bid_user_2.png";
import Bid_User_3 from "../../assets/home/bid_user_3.png";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../../../components/ui/pagination";

const Page_2 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9;

  const nftCards = [
    { imageSrc: Bid_1, userImageSrc: Bid_User_1, username: "johnson", title: "startup concept", currentBid: "83.46" },
    { imageSrc: Bid_2, userImageSrc: Bid_User_2, username: "johnson", title: "ornament illustration", currentBid: "83.46" },
    { imageSrc: Bid_3, userImageSrc: Bid_User_3, username: "johnson", title: "easter santa clause", currentBid: "83.46" },
    { imageSrc: Bid_1, userImageSrc: Bid_User_1, username: "johnson", title: "startup concept", currentBid: "83.46" },
    { imageSrc: Bid_2, userImageSrc: Bid_User_2, username: "johnson", title: "ornament illustration", currentBid: "83.46" },
    { imageSrc: Bid_3, userImageSrc: Bid_User_3, username: "johnson", title: "easter santa clause", currentBid: "83.46" },
    { imageSrc: Bid_1, userImageSrc: Bid_User_1, username: "johnson", title: "startup concept", currentBid: "83.46" },
    { imageSrc: Bid_2, userImageSrc: Bid_User_2, username: "johnson", title: "ornament illustration", currentBid: "83.46" },
    { imageSrc: Bid_3, userImageSrc: Bid_User_3, username: "johnson", title: "easter santa clause", currentBid: "83.46" },
    { imageSrc: Bid_1, userImageSrc: Bid_User_1, username: "johnson", title: "startup concept", currentBid: "83.46" },
    { imageSrc: Bid_2, userImageSrc: Bid_User_2, username: "johnson", title: "ornament illustration", currentBid: "83.46" },
    { imageSrc: Bid_3, userImageSrc: Bid_User_3, username: "johnson", title: "easter santa clause", currentBid: "83.46" },
    { imageSrc: Bid_1, userImageSrc: Bid_User_1, username: "johnson", title: "startup concept", currentBid: "83.46" },
    { imageSrc: Bid_2, userImageSrc: Bid_User_2, username: "johnson", title: "ornament illustration", currentBid: "83.46" },
    { imageSrc: Bid_3, userImageSrc: Bid_User_3, username: "johnson", title: "easter santa clause", currentBid: "83.46" },
    { imageSrc: Bid_1, userImageSrc: Bid_User_1, username: "johnson", title: "startup concept", currentBid: "83.46" },
    { imageSrc: Bid_2, userImageSrc: Bid_User_2, username: "johnson", title: "ornament illustration", currentBid: "83.46" },
    { imageSrc: Bid_3, userImageSrc: Bid_User_3, username: "johnson", title: "easter santa clause", currentBid: "83" },
    { imageSrc: Bid_1, userImageSrc: Bid_User_1, username: "johnson", title: "startup concept", currentBid: "83.46" },
    { imageSrc: Bid_2, userImageSrc: Bid_User_2, username: "johnson", title: "ornament illustration", currentBid: "83.46" },
    { imageSrc: Bid_3, userImageSrc: Bid_User_3, username: "johnson", title: "easter santa clause", currentBid: "83.46" },
    { imageSrc: Bid_1, userImageSrc: Bid_User_1, username: "johnson", title: "startup concept", currentBid: "83.46" },
    { imageSrc: Bid_2, userImageSrc: Bid_User_2, username: "johnson", title: "ornament illustration", currentBid: "83.46" },
    { imageSrc: Bid_3, userImageSrc: Bid_User_3, username: "johnson", title: "easter santa clause", currentBid: "83.46" },
    { imageSrc: Bid_1, userImageSrc: Bid_User_1, username: "johnson", title: "startup concept", currentBid: "83.46" },
    { imageSrc: Bid_2, userImageSrc: Bid_User_2, username: "johnson", title: "ornament illustration", currentBid: "83.46" },
    { imageSrc: Bid_3, userImageSrc: Bid_User_3, username: "johnson", title: "easter santa clause", currentBid: "83.46" },
    { imageSrc: Bid_1, userImageSrc: Bid_User_1, username: "johnson", title: "startup concept", currentBid: "83.46" },
    { imageSrc: Bid_2, userImageSrc: Bid_User_2, username: "johnson", title: "ornament illustration", currentBid: "83.46" },
    { imageSrc: Bid_3, userImageSrc: Bid_User_3, username: "johnson", title: "easter santa clause", currentBid: "83.46" },
    { imageSrc: Bid_1, userImageSrc: Bid_User_1, username: "johnson", title: "startup concept", currentBid: "83.46" },
    { imageSrc: Bid_2, userImageSrc: Bid_User_2, username: "johnson", title: "ornament illustration", currentBid: "83.46" },
    { imageSrc: Bid_3, userImageSrc: Bid_User_3, username: "johnson", title: "easter santa clause", currentBid: "83.46" },
    { imageSrc: Bid_1, userImageSrc: Bid_User_1, username: "johnson", title: "startup concept", currentBid: "83.46" },
    { imageSrc: Bid_2, userImageSrc: Bid_User_2, username: "johnson", title: "ornament illustration", currentBid: "83.46" },
    { imageSrc: Bid_3, userImageSrc: Bid_User_3, username: "johnson", title: "easter santa clause", currentBid: "83" },
  ];

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = nftCards.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="flex flex-col items-center mt-[5vw] mb-[4.5vw]">
        <div className="grid grid-cols-3 gap-[4vw] justify-center items-center">
          {currentCards.map((card, index) => (
            <NFTCard
              key={index}
              imageSrc={card.imageSrc}
              userImageSrc={card.userImageSrc}
              username={card.username}
              title={card.title}
              currentBid={card.currentBid}
            />
          ))}
        </div>
        <div className="mt-12 w-full flex">
          <div className="ml-auto mr-[20.415vw]">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => paginate(currentPage - 1)}
                    className={`bg-black/[0.12] font-bold text-black ${currentPage === 1 ? "pointer-events-none text-black font-bold" : " font-bold text-gray-500"}`}
                  />
                </PaginationItem>
                {Array.from({ length: Math.min(5, Math.ceil(nftCards.length / cardsPerPage)) }, (_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink 
                      onClick={() => paginate(i + 1)}
                      isActive={currentPage === i + 1}
                      className={currentPage === i + 1 ? "bg-[#1B63FF] text-white font-bold" : "bg-black/[0.12] font-bold text-black"}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                {Math.ceil(nftCards.length / cardsPerPage) > 5 && (
                  <PaginationItem>
                    <PaginationEllipsis className="bg-gray-100" />
                  </PaginationItem>
                )}
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => paginate(currentPage + 1)}
                    className={`bg-black/[0.12] font-bold text-black ${currentPage === Math.ceil(nftCards.length / cardsPerPage) ? "pointer-events-none text-black font-bold" : "font-bold text-gray-500"}`}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page_2;
