import React from "react";
import Image from "next/image";

const HotelCard = () => {
  return (
    <div className="relative m-4 h-80  w-60 shadow-lg">
      <div className="relative h-2/3 w-full ">
        <Image
          src="/images/hotel.jpg"
          alt="hero-cover"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex h-1/3 w-full flex-col items-end ">
        <h1 className="px-4 pt-4 text-lg font-bold text-secondary">
          فندق ماريوت مكة
        </h1>
        <div className="flex flex-row px-4 space-x-1">
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
        <p className="px-4 pt-2 text-xs text-darkTint">
          وقف الملك عبد العزيز مكة المكرمة
        </p>
      </div>
    </div>
  );
};

export default HotelCard;
