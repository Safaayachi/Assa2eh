import React from "react";
import Image from "next/image";

const HotelCard = () => {
  return (
    <div className="relative h-80 w-60  shadow-lg m-4">
      <div className="relative h-2/3 w-full ">
        <Image
          src="/images/landingPageCover.jpg"
          alt="hero-cover"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default HotelCard;
