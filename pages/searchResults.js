import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Search from "../components/Search";
import ShowSearch from "../components/ShowSearch";
import Link from "next/link";
import FilterButton from "../components/FilterButton";

const searchResults = () => {
  return (
    <div className="absolute flex h-full w-full flex-col">
      <NavBar />
      <ShowSearch />
      <section className="h-full w-full ">
        <div className="flex w-full flex-row justify-center space-x-4 px-2 pt-6">
          <FilterButton/>
          <Link href="/filter">
            <div className="flex cursor-pointer flex-row border border-solid border-black py-2 px-16">
              <h1 className="text-2xl font-bold">الفلتر</h1>
              <i
                className={` icon-filter_alt_black_24dp1   text-3xl text-black`}
              />
            </div>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default searchResults;
