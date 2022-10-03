import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HotelCard from "../components/HotelCard";
import Link from "next/link";
import { Tab } from "@headlessui/react";

const hotels = () => {
  const hotels = [
    {
      id: 1,
      hotelName: "فندق شيراتون مكة جبل الكعبة",
      hotelDescription: "وقف الملك عبد العزيز مكة المكرمة",
      hotelSlug: "hotel",
      hotelStars: 5,
    },
    {
      id: 2,
      hotelName: "فندق ماريوت مكة جبل عمر",
      hotelDescription: "وقف الملك عبد العزيز مكة المكرمة",
      hotelSlug: "hotel3",
      hotelStars: 5,
    },
    {
      id: 3,
      hotelName: "فندق سويس اوتيل المقام مكة",
      hotelDescription: "وقف الملك عبد العزيز مكة المكرمة",
      hotelSlug: "hotel5",
      hotelStars: 5,
    },
    {
      id: 2,
      hotelName: "فندق ماريوت مكة جبل عمر",
      hotelDescription: "وقف الملك عبد العزيز مكة المكرمة",
      hotelSlug: "hotel",
      hotelStars: 5,
    },
    {
      id: 4,
      hotelName: "فندق المروة ريحان روتانا مكة",
      hotelDescription: "وقف الملك عبد العزيز مكة المكرمة",
      hotelSlug: "hotel5",
      hotelStars: 5,
    },
    {
      id: 5,
      hotelName: "فندق شيراتون مكة جبل الكعبة",
      hotelDescription: "وقف الملك عبد العزيز مكة المكرمة",
      hotelSlug: "hotel3",
      hotelStars: 5,
    },
    {
      id: 1,
      hotelName: "فندق شيراتون مكة جبل الكعبة",
      hotelDescription: "وقف الملك عبد العزيز مكة المكرمة",
      hotelSlug: "hotel",
      hotelStars: 5,
    },
    {
      id: 2,
      hotelName: "فندق ماريوت مكة جبل عمر",
      hotelDescription: "وقف الملك عبد العزيز مكة المكرمة",
      hotelSlug: "hotel5",
      hotelStars: 5,
    },
  ];
  const places = [
    { id: 1, placeName: "الدمام" },
    { id: 2, placeName: "الرياض" },
    { id: 2, placeName: "الطائف" },
    { id: 4, placeName: " المدينة المنورة" },
    { id: 5, placeName: "جدة" },
    { id: 6, placeName: "مكة المكرمة" },
  ];
  return (
    <div className=" flex h-full w-full flex-col">
      <NavBar />

      <div className="relative flex h-full w-full flex-col p-20 py-32 md:p-32">
        <div className="relative flex h-full w-full flex-col space-y-10 ">
          <div className="flex h-24 w-full justify-end ">
            <h1 className="text-4xl font-bold">الفنادق المميزة</h1>
          </div>
          <Tab.Group>
            <div className="relative flex h-full w-full flex-col space-y-10">
              <div className="h-24 w-full ">
                <Tab.List className="border-bold flex flex-row justify-end space-x-12 overflow-x-auto border-b-4 p-6">
                  {places.map((place) => (
                    <Tab key={place.id} id={place.id}>
                      <h1 className="flex h-10 text-lg font-semibold text-darkTint  hover:text-secondary">
                        {place.placeName}
                      </h1>
                    </Tab>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels>
                <Tab.Panel>
                  <div className="relative grid h-full w-full grid-cols-1 gap-10 md:p-0 lg:grid-cols-3  xl:grid-cols-4">
                    {hotels.map((hotel) => (
                      <div key={hotel.id} className="md:w-78 w-full">
                        <HotelCard hotel={hotel} key={hotel.id} />
                      </div>
                    ))}
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </div>
          </Tab.Group>

          <div className="relative flex h-24 w-full flex-row items-center justify-center">
            <div className="relative flex h-full w-80 space-x-20 flex-row  py-6">
              <div className="bg-secondary h-full w-1/3 flex justify-center items-center cursor-pointer">
              <i className={` icon-chevron_left_black_24dp1 text-3xl   text-tint  `} />
              </div>
              <div className="border-secondary border border-solid h-full w-1/3"></div>
              <div className="bg-secondary h-full w-1/3 flex justify-center items-center cursor-pointer">
              <i className={`  icon-chevron_right_black_24dp text-3xl   text-tint  `} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default hotels;
