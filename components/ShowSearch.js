import React from "react";
import { useState } from "react";
import Search from "./Search";

const ShowSearch = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <section className="md:hidden relative mt-24 flex h-20 w-full flex-col z-20">
      <button
        className="h-20 w-full cursor-pointer bg-primary px-12 shadow-lg"
        onClick={() => setShowSearch(true)}
      >
        <div className="flex flex-row justify-end space-x-6">
          <div className="flex flex-col items-end text-tint">
            <h1 className="text-lg font-bold">مكة المكرمة</h1>
            <p className="font-semibold">يوليو 30, اغسطس03</p>
          </div>
          <i className={` icon-search_black_24dp1 text-5xl  text-tint  `} />
        </div>
      </button>
      {showSearch ? 
      <div className="h-full w-full fixed inset-0 z-40 mt-2">
        <div className="fixed inset-0 z-40 h-full w-full  md:hidden " onClick={()=>setShowSearch(false)}></div>
        <Search/>
      </div> 
      : null}
    </section>
  );
};

export default ShowSearch;
