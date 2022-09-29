import React from "react";
import Image from "next/image";
import Link from "next/link";

const BookingHotelCard = () => {
  return (
    <div className="relative h-112 w-full bg-tint  shadow-xl">
      <div className="relative h-2/5 w-full ">
        <Image
          src={`/images/hotel3.jpg`}
          alt="hotel3"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative flex h-3/5 w-full flex-col divide-y-2 divide-basic p-4">
        <div className="flex h-3/6 w-full flex-col items-end space-y-2">
          <h1 className=" text-2xl font-bold">فندق لصفوة البرج الاول</h1>
          <div className="flex flex-row space-x-1 ">
            <i
              className={` icon-star
          cursor-pointer  text-2xl text-primary`}
            />
            <i
              className={` icon-star
          cursor-pointer  text-2xl text-primary`}
            />
            <i
              className={` icon-star
          cursor-pointer  text-2xl text-primary`}
            />
            <i
              className={` icon-star
          cursor-pointer  text-2xl text-primary`}
            />
            <i
              className={` icon-star
          cursor-pointer  text-2xl text-primary`}
            />
          </div>
          <p className="text-darkTint text-lg">
            وقف الملك عبد العزيز , ابراج البيت, مكة
          </p>
        </div>

        <div className="relative flex h-2/6 w-full flex-col items-end space-y-4">
          <h1 className="mt-6 text-secondary text-2xl font-bold">جناح صغير</h1>
          <div className="relative flex w-full flex-row items-center space-x-4">
            <div className="flex w-1/2 flex-row space-x-2 justify-start items-center">
              <h1 className="text-xl font-semibold text-secondary">
                مطلة على المدينة
              </h1>
              <i className={`  icon-balcony text-xl  text-primary`} />
            </div>
            <div className="flex w-1/2 flex-row space-x-2 justify-end">
              <h1 className="text-xl font-semibold text-secondary">
                غرفة بدون وجبة{" "}
              </h1>
              <i className={` icon-bed text-xl  text-primary`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingHotelCard;
