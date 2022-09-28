import React from "react";
import FilterOptions from "../components/FilterOptions";
import Link from "next/link";

const filter = () => {
  return (
    <div className="absolute flex h-full w-full flex-col">
      <div className="relative  w-full h-32 px-12">
        <div className="w-full h-full border-b border-solid flex flex-row items-center space-x-32">
        <Link href="/searchResults"><i className={` icon-clear_black_24dp text-4xl cursor-pointer  text-primary  `} /></Link>
        <h1 className="text-3xl font-semibold">الفلتر</h1>
        </div>
      </div>
      <FilterOptions/>
      <div className="relative w-full h-32 drop-shadow-2xl  bg-tint py-4 px-16">
        <div className="w-full h-full bg-secondary p-2 flex justify-center items-center">
            <h1 className="text-2xl text-tint font-lg ">أضهر نتيجة</h1>
        </div>
      </div>
    </div>
  );
};

export default filter;
