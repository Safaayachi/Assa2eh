import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const RoomCard = () => {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="h-320 relative w-full px-14">
      <div className="relative h-full w-full flex-col divide-y-2 divide-shade shadow-xl ">
        <div className="relative h-1/4 w-full ">
          <div className="relative h-3/4 w-full ">
            <Image
              src="/images/hotel3.jpg"
              alt="hero-cover"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex h-1/4 w-full items-center justify-end px-4">
            <h1 className="text-2xl font-bold">جناح صغير</h1>
          </div>
        </div>
        <div className="relative h-1/4 w-full">
          <div className="flex h-1/2 w-full flex-col items-end space-y-4 py-6 px-4">
            <div className="flex flex-row  space-x-4">
              <h1 className="text-xl font-semibold text-secondary">
                غرفة بدون وجبة{" "}
              </h1>
              <i className={` icon-bed text-xl  text-primary`} />
            </div>
            <div className="flex flex-row  space-x-4">
              <h1 className="text-xl font-semibold text-secondary">
                مطلة على المدينة
              </h1>
              <i className={`  icon-balcony text-xl  text-primary`} />
            </div>
            <p className="text-darkTint">من 30-12-2021 الى 03-01-2022</p>
          </div>
          <div className="relative flex h-1/2 w-full flex-col items-end justify-around px-4">
            <div className="flex w-1/2 flex-col items-end space-y-2">
              <div className="flex flex-row space-x-2">
                <h1 className="text-3xl font-bold text-primary">ريال</h1>
                <h1 className="text-3xl font-bold text-primary">400</h1>
              </div>
              <p className="text-darkTint">لمدة 4 ليالى</p>
            </div>
            <Link href="/bookingDetails">
              <div className="w-full cursor-pointer bg-secondary px-12 py-4 text-center font-bold text-tint">
                احجز
              </div>
            </Link>
          </div>
        </div>
        <div className="relative h-1/4 w-full">
          <div className="flex h-1/2 w-full flex-col items-end space-y-4 py-6 px-4">
            <div className="flex flex-row  space-x-4">
              <h1 className="text-xl font-semibold text-secondary">
                غرفة بدون وجبة{" "}
              </h1>
              <i className={` icon-bed text-xl  text-primary`} />
            </div>
            <div className="flex flex-row  space-x-4">
              <h1 className="text-xl font-semibold text-secondary">
                مطلة على المدينة
              </h1>
              <i className={`  icon-balcony text-xl  text-primary`} />
            </div>
            <p className="text-darkTint">من 30-12-2021 الى 03-01-2022</p>
          </div>
          <div className="relative flex h-1/2 w-full flex-col items-end justify-around px-4">
            <div className="flex w-1/2 flex-col items-end space-y-2">
              <div className="flex flex-row space-x-2">
                <h1 className="text-3xl font-bold text-primary">ريال</h1>
                <h1 className="text-3xl font-bold text-primary">400</h1>
              </div>
              <p className="text-darkTint">لمدة 4 ليالى</p>
            </div>

            <div className="flex-rox relative flex h-14 w-full space-x-4   text-center font-bold text-tint">
              <button
                className="curser-pointer flex h-full w-1/5 items-center justify-center bg-secondary text-2xl text-tint"
                onClick={() => setQuantity(quantity - 1)}
              >
                <i className={`   icon-remove_black_24dp1 `} />
              </button>
              <div className="flex h-full w-3/5 items-center justify-center border-2 border-solid border-secondary bg-shade text-2xl text-secondary">
                {quantity}
              </div>
              <button
                className="flex h-full w-1/5 cursor-pointer items-center justify-center bg-secondary text-2xl text-tint"
                onClick={() => setQuantity(quantity + 1)}
              >
                <i className={`   icon-add_black_24dp1 `} />
              </button>
            </div>
          </div>
        </div>
        <div className="relative h-1/4 w-full">
          <div className="flex h-1/2 w-full flex-col items-end space-y-4 py-6 px-4">
            <div className="flex flex-row  space-x-4">
              <h1 className="text-xl font-semibold text-secondary">
                غرفة بدون وجبة{" "}
              </h1>
              <i className={` icon-bed text-xl  text-primary`} />
            </div>
            <div className="flex flex-row  space-x-4">
              <h1 className="text-xl font-semibold text-secondary">
                مطلة على المدينة
              </h1>
              <i className={`  icon-balcony text-xl  text-primary`} />
            </div>
            <p className="text-darkTint">من 30-12-2021 الى 03-01-2022</p>
          </div>
          <div className="relative flex h-1/2 w-full flex-col items-end justify-around px-4">
            <div className="flex w-1/2 flex-col items-end space-y-2">
              <div className="flex flex-row space-x-2">
                <h1 className="text-3xl font-bold text-primary">ريال</h1>
                <h1 className="text-3xl font-bold text-primary">400</h1>
              </div>
              <p className="text-darkTint">لمدة 4 ليالى</p>
            </div>
            <Link href="/bookingDetails">
              <div className="w-full cursor-pointer bg-secondary px-12 py-4 text-center font-bold text-tint">
                احجز
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
