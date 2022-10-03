import React from "react";
import Image from "next/image";

const HotelCard = ({hotel}) => {
  return (
    <div className="relative h-112 w-full min-w-max md:w-92 shadow-lg bg-tint cursor-pointer">
      <div className="relative h-2/3 w-full ">
        <Image
          src={`/images/${hotel.hotelSlug}.jpg`}
          alt={hotel.hotelName}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex h-1/3 w-full flex-col items-end ">
        <h1 className="px-4 pt-4 text-lg font-bold text-secondary">
          {hotel.hotelName}
        </h1>
        <div className="flex flex-row space-x-1 px-4">
          <i
            className={` icon-star
          cursor-pointer  text-lg text-primary`}
          />
          <i
            className={` icon-star
          cursor-pointer  text-lg text-primary`}
          />
          <i
            className={` icon-star
          cursor-pointer  text-lg text-primary`}
          />
          <i
            className={` icon-star
          cursor-pointer  text-lg text-primary`}
          />
          <i
            className={` icon-star
          cursor-pointer  text-lg text-primary`}
          />
        </div>
        <p className="px-4 pt-2 text-xs text-darkTint">{hotel.hotelDescription}</p>
      </div>
    </div>
  );
};

export default HotelCard;
