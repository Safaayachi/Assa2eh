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
    },{
      id: 1,
      hotelName: "فندق شيراتون مكة جبل الكعبة",
      hotelDescription: "وقف الملك عبد العزيز مكة المكرمة",
      hotelSlug: "hotel3",
      hotelStars: 5,
      hotelPrice: 1680,
    },
    {
      id: 1,
      hotelName: "فندق شيراتون مكة جبل الكعبة",
      hotelDescription: "وقف الملك عبد العزيز مكة المكرمة",
      hotelSlug: "hotel3",
      hotelStars: 5,
      hotelPrice: 1680,
    },
    {
      id: 1,
      hotelName: "فندق شيراتون مكة جبل الكعبة",
      hotelDescription: "وقف الملك عبد العزيز مكة المكرمة",
      hotelSlug: "hotel3",
      hotelStars: 5,
      hotelPrice: 1680,
    },
    {
      id: 1,
      hotelName: "فندق شيراتون مكة جبل الكعبة",
      hotelDescription: "وقف الملك عبد العزيز مكة المكرمة",
      hotelSlug: "hotel3",
      hotelStars: 5,
      hotelPrice: 1680,
    },
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
    <div className=" flex h-full w-full flex-col">
      <NavBar />
      <ShowSearch />
      <section className="relative flex h-full w-full flex-col items-center space-y-4 px-20 md:px-0 md:pt-20 py-16">
        <div className="flex h-full w-full flex-col space-y-6 md:hidden">
          <div className="flex w-full flex-row justify-center space-x-4 pt-6  md:hidden">
            <FilterButton />
            <Link href="/filter">
              <div className="flex h-full w-full cursor-pointer justify-center border border-solid border-black py-2">
                <div className="flex flex-row ">
                  <h1 className="text-2xl font-bold ">الفلتر</h1>
                  <i
                    className={` icon-filter_alt_black_24dp1   text-3xl text-black`}
                  />
                </div>
              </div>
            </Link>
          </div>
          
        </div>
        <div className="hidden h-24 w-full justify-center bg-tint md:flex">
          
        </div>
        <div className="relative h-full w-full md:flex-row md:flex">
          <div className="h-full w-full md:bg-shade md:p-12 ">
            <div className="relative h-full w-full md:flex md:flex-col">
              <div className="hidden h-20 w-full bg-amber-300 md:flex">
                
              </div>
              <div className="h-full w-full grid grid-cols-1 2xl:grid-cols-3 lg:grid-cols-2 gap-10">
              {hotels.map((hotel) => (
              <HotelDetails hotel={hotel} key={hotel.id} />
            ))} 
              </div>
            </div>
          </div>
          <div className="h-full w-2/6 bg-tint"></div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default searchResults;
