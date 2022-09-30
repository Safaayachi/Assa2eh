import React from "react";
import Link from "next/link";
import Destination from "./Destination";

const Search = () => {
  return (
    <div className="relative flex flex-col space-y-4 divide-y-2 divide-solid divide-shade bg-tint p-4 shadow md:h-28           md:flex-row-reverse md:space-x-8 md:divide-x-2 md:divide-y-0 ">
      <div>
        <Destination />
      </div>
      <div className="relative flex w-full space-x-2 p-4 md:w-80">
        <div className="flex w-1/2 justify-start space-x-2 ">
          <i
            className={`icon-calendar_today_black_24dp1 text-sm text-primary`}
          />
          <p className="text-xs font-semibold text-darkTint">تاريخ الوصول </p>
        </div>
        <div className="flex w-1/2 justify-end space-x-2">
          <p className="text-xs font-semibold text-darkTint">تاريخ الوصول </p>
          <i
            className={`icon-calendar_today_black_24dp1 text-sm text-primary`}
          />
        </div>
      </div>
      <div className="flex-col space-y-4 ">
        <div className="flex justify-end space-x-2">
          <h1 className="text-sm text-darkTint">البرموكود</h1>
          <i className={` icon-uniE901 text-sm text-primary`} />
        </div>
        <div className="">
          <input
            type="text"
            placeholder="...البرموكود"
            className="w-full text-end text-lg text-shade "
          />
        </div>
      </div>
      <div className="p-4">
        <Link href="/searchResults">
          <div className="flex h-14 cursor-pointer w-full items-center justify-center space-x-2 bg-primary text-tint   md:w-14">
            <h1 className="text-2xl font-bold md:hidden">بحث</h1>
            <i
              className={`icon-search_black_24dp1 cursor-pointer  text-3xl `}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Search;
