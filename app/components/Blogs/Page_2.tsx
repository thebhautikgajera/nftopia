import React from 'react'
import Image from 'next/image'
import blogHighlighted_1 from "../../components/assets/blogs/blogHighlighted_1.png"
import blogHighlighted_2 from "../../components/assets/blogs/blogHighlighted_2.png"
import blogHighlighted_3 from "../../components/assets/blogs/blogHighlighted_3.png"
import blogHighlighted_4 from "../../components/assets/blogs/blogHighlighted_4.png"

const Page_2 = () => {
  const articles = [
    {
      title: "How to Buy and Sell NFTs in 2023",
      date: "December 10, 2022",
      description: "Whether or not you are aware of it, supply chain processes affect you. Learn how NFTs can ease the supply chain pain points and improve the industry.",
      image: blogHighlighted_1
    },
    {
      title: "The Future of Gaming: Blockchain and NFTs",
      date: "January 15, 2023",
      description: "Whether or not you are aware of it, supply chain processes affect you. Learn how NFTs can ease the supply chain pain points and improve the industry.",
      image: blogHighlighted_2
    },
    {
      title: "Decentralized Finance: A Beginner's Guide",
      date: "February 5, 2023",
      description: "Whether or not you are aware of it, supply chain processes affect you. Learn how NFTs can ease the supply chain pain points and improve the industry.",
      image: blogHighlighted_3
    },
    {
      title: "The Rise of Virtual Real Estate in the Metaverse",
      date: "March 20, 2023",
      description: "Whether or not you are aware of it, supply chain processes affect you. Learn how NFTs can ease the supply chain pain points and improve the industry.",
      image: blogHighlighted_4
    }
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Today Highlights</h2>
        <div className="grid grid-cols-1 pt-[3vw] md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-white px-[5vw] rounded-lg overflow-hidden flex">
              <div className="w-[200px] h-[200px] flex-shrink-0">
                <Image src={article.image} alt={article.title} width={200} height={200} className="w-full h-full object-cover" />
              </div>
              <div className="px-6 flex-grow">
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{article.date}</p>
                <p className="text-gray-700">{article.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page_2