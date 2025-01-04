import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { FaShare } from 'react-icons/fa';

interface CollectionCardProps {
  imageSrc: StaticImageData;
  title: string;
  collectionCount: number;
}

const CollectionCard: React.FC<CollectionCardProps> = ({ imageSrc, title, collectionCount }) => {
  return (
    <div className="max-w-[255px] rounded-lg overflow-hidden shadow-lg">
      <div className="relative h-[259px] w-[255px]">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4 capitalize">{title}</h2>
        <div className="flex justify-between items-center">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
            {collectionCount} items
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center">
            <FaShare className="mr-2" /> Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;