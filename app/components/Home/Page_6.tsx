import Image, { StaticImageData } from "next/image";
import React from "react";
import Artwork1 from "../assets/home/artwork_1.png";
import Artwork2 from "../assets/home/artwork_2.png";
import Artwork3 from "../assets/home/artwork_3.png";

interface ReusableArtworkComponentProps {
  imageSrc: StaticImageData;
  title: string;
  description: string;
  imageWidth: number;
  imageHeight: number;
}

const ReusableArtworkComponent: React.FC<ReusableArtworkComponentProps> = ({
  imageSrc,
  title,
  description,
  imageWidth,
  imageHeight,
}) => {
  return (
    <div className=" px-[1.5vw] flex flex-col items-center [box-shadow:5px_8px_29px_0px_rgba(27,26,26,0.25)] rounded-xl">
      <Image
        src={imageSrc}
        alt={title}
        width={imageWidth}
        height={imageHeight}
        className="mb-4 pt-[2.5vw]"   
      />
      <h1 className="font-bold mt-[1.5vw] text-xl mb-2">{title}</h1>
      <p className="text-center capitalize mt-[1.5vw] pb-[2.5vw] text-[1.1vw] text-black/[0.53]">
        {description}
      </p>
    </div>
  );
};

const Page_6 = () => {
  return (
    <>
      <h1 className="font-bold capitalize mt-[10vw] mb-[2vw] text-[1.7vw] text-center">
        Explore Artworks
      </h1>
      <div className="grid grid-cols-3 px-[13vw] mb-[6vw] gap-8">
        <ReusableArtworkComponent
          imageSrc={Artwork1}
          title="Connect your wallet"
          description={`NFTs are the latest and greatest\napplication of blockchain\ntechnology, and marketplace has\nbecome the platform for NFT.`}
          imageWidth={220}
          imageHeight={167}
        />
        <ReusableArtworkComponent
          imageSrc={Artwork2}
          title="Create Collection"
          description={`NFTs are the latest and greatest\napplication of blockchain\ntechnology, and marketplace has\nbecome the platform for NFT.`}
          imageWidth={220}
          imageHeight={167}
        />
        <ReusableArtworkComponent
          imageSrc={Artwork3}
          title="List them to sale"
          description={`NFTs are the latest and greatest\napplication of blockchain\ntechnology, and marketplace has\nbecome the platform for NFT.`}
          imageWidth={220}
          imageHeight={167}
        />
      </div>
    </>
  );
};

export default Page_6;
