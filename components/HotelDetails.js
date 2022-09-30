import React from "react";
import Image from "next/image";
import Link from "next/link";

const HotelDetails = ({ hotel }) => {
  return (
    <div className="relative h-112 w-full  shadow-xl">
      <div className="relative h-1/3 w-full ">
        <Image
          src={`/images/${hotel.hotelSlug}.jpg`}
          alt={hotel.hotelName}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative flex h-2/3 w-full flex-col divide-y-2 bg-tint divide-basic p-4">
        <div className="flex h-3/6 w-full flex-col items-end space-y-2">
          <h1 className=" text-xl font-bold">{hotel.hotelName}</h1>
          <div className="flex flex-row space-x-1 ">
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
          <p className="text-darkTint">{hotel.hotelDescription}</p>
        </div>
        <div className="flex h-1/6 w-full flex-row items-center justify-end space-x-2 text-3xl text-secondary">
          <i className={`  icon-ac_unit_black_24dp1`} />
          <i className={`  icon-local_parking_black_24dp`} />
          <i className={`  icon-room_service_black_24dp1 `} />
          <i className={`  icon-shower_black_24dp `} />
          <i className={`  icon-wifi_black_24dp1 `} />
        </div>
        <div className="relative flex h-2/6 w-full flex-row items-center justify-around">
          <Link href="/bookingDetails">
            <div className=" mr-24 w-1/2 cursor-pointer bg-secondary px-12 py-4 text-center font-bold text-tint">
              احجز
            </div>
          </Link>
          <div className="flex w-1/2 flex-col items-end space-y-2">
            <div className="flex flex-row space-x-2">
              <h1 className="text-3xl font-bold text-primary">ريال</h1>
              <h1 className="text-3xl font-bold text-primary">
                {hotel.hotelPrice}
              </h1>
            </div>
            <p className="text-darkTint">لمدة 4 ليالى</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
