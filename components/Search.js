import React from "react";
import Link from "next/link";
import Destination from "./Destination";

const Search = () => {
  return (
    <div className="relative flex h-full w-full  flex-col  px-4 md:flex-row-reverse md:px-0 md:divide-x-2 divide-y-2 md:divide-y-0">
      <div className="relative h-1/4 w-full md:h-full md:w-3/6 flex justify-center items-center p-2 ">
          <div className="relative w-full h-full">
          <Destination/>
          </div>
      </div>
      <div className="md:w-3/8 relative flex h-1/4 w-full flex-row md:h-full ">
        <div className="relative h-full w-1/2  md:w-2/5">
          <div className="relative flex h-full w-full flex-col p-2 ">
            <div className="relative flex h-1/2 w-full justify-start ">
              <div className="flex  items-center justify-start space-x-6 ">
                <i
                  className={`icon-calendar_today_black_24dp1 text-sm text-primary`}
                />
                <p className="text-xs font-semibold text-darkTint">
                  تاريخ المغادرة{" "}
                </p>
              </div>
            </div>
            <div className="flex h-1/2 w-full items-center justify-start">
              <h1 className="text-lg font-bold text-secondary">
                أغسطس 03, 2021
              </h1>
            </div>
          </div>
        </div>
        <div className="hidden relative h-full md:flex md:justify-center md:items-end   md:w-1/5">
          <div className="flex h-1/2 justify-center items-center">
          <i
            className={` icon-arrow_back_black_24dp1 text-xl text-primary`}
          />
          </div>
        </div>
        <div className="h-full w-1/2  md:w-2/5">
          <div className="relative flex h-full w-full flex-col p-2 ">
            <div className="relative flex h-1/2 w-full justify-end ">
              <div className="flex  items-center justify-start space-x-6 ">
                <p className="text-xs font-semibold text-darkTint">
                  تاريخ الوصول{" "}
                </p>
                <i
                  className={`icon-calendar_today_black_24dp1 text-sm text-primary`}
                />
              </div>
            </div>
            <div className="flex h-1/2 w-full items-center justify-end">
              <h1 className="text-lg font-bold text-secondary">
                أغسطس 03, 2021
              </h1>
            </div>
          </div>
        </div>
      </div>
      
      <div className="md:w-2/8 relative flex h-2/4 w-full flex-col  divide-y-2 md:h-full md:flex-row-reverse">
        <div className="relative h-1/2 w-full  py-4 px-2 md:h-full md:w-3/4">
          <div className="relative flex h-full w-full flex-col  ">
            <div className="flex h-1/3 w-full justify-end space-x-2">
              <h1 className="text-sm text-darkTint">البرموكود</h1>
              <i className={` icon-uniE901 text-sm text-primary`} />
            </div>
            <input
              type="text"
              placeholder="...البرموكود"
              className="h-full w-full px-2 text-end text-lg text-shade"
            />
          </div>
        </div>
        <div className="relative h-1/2 w-full py-4 px-2 md:h-full md:w-1/4">
          <Link href="/searchResults">
            <div className="flex h-full w-full cursor-pointer items-center justify-center space-x-2 bg-primary text-tint">
              <h1 className="text-4xl font-bold md:hidden">بحث</h1>
              <i
                className={`icon-search_black_24dp1 cursor-pointer text-4xl`}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Search;
