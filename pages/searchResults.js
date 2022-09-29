import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Search from "../components/Search";
import ShowSearch from "../components/ShowSearch";
import Link from "next/link";
import FilterButton from "../components/FilterButton";
import HotelDetails from "../components/HotelDetails";

const searchResults = () => {
  const hotels = [
    {
      id: 1,
      hotelName: "فندق شيراتون مكة جبل الكعبة",
      hotelDescription: "وقف الملك عبد العزيز مكة المكرمة",
      hotelSlug: "hotel3",
      hotelStars: 5,
      hotelPrice: 1680,
    },
  ];
  return (
    <div className="absolute flex h-full w-full flex-col">
      <NavBar />
      <ShowSearch />
      <section className="relative flex h-full w-full flex-col items-center space-y-4 px-20">
        <div className="flex h-full w-full flex-col space-y-6">
          <div className="flex w-full flex-row justify-center space-x-4  pt-6">
            <FilterButton />
            <Link href="/filter">
              <div className="flex h-full w-full cursor-pointer border border-solid border-black py-2 justify-center">
                <div className="flex flex-row ">
                  <h1 className="text-2xl font-bold ">الفلتر</h1>
                  <i
                    className={` icon-filter_alt_black_24dp1   text-3xl text-black`}
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className="relative w-full">
            {hotels.map((hotel) => (
              <HotelDetails hotel={hotel} key={hotel.id} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default searchResults;
