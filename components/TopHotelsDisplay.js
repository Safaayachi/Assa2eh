import React from "react";
import HotelCard from "./HotelCard";
import Link from "next/link";
import { Tab } from "@headlessui/react";

const Search = () => {
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
    <div className="relative flex h-full w-full flex-col p-16 md:p-32">
      <div className="relative flex h-full w-full flex-col space-y-10 ">
        <div className="flex h-24 w-full justify-end">
          <h1 className="text-4xl font-bold">الفنادق المميزة</h1>
        </div>
        <Tab.Group>
          <div className="relative flex h-full w-full flex-col space-y-10">
            <div className="relative h-24 w-full ">
              <Tab.List className="relative flex h-24  flex-row justify-end space-x-28 md:space-x-12  border-b-4 ">
                {places.map((place) => (
                  <Tab key={place.id} id={place.id}>
                    <h1 className=" h-24 border-b-4 border-transparent text-lg font-semibold text-darkTint hover:text-secondary  active:border-primary">
                      {place.placeName}
                    </h1>
                  </Tab>
                ))}
              </Tab.List>
            </div>
            <Tab.Panels>
              <Tab.Panel>
                <div className="relative flex h-full w-full flex-row space-x-10 overflow-x-auto md:grid md:gap-10 md:space-x-0 lg:grid-cols-3 xl:grid-cols-4 md:pb-24 md:pt-0 md:px-0 p-20">
                  {hotels.map((hotel) => (
                    <div key={hotel.id} className="md:w-78 w-full">
                      <HotelCard hotel={hotel} key={hotel.id} />
                    </div>
                  ))}
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="relative flex h-full w-full flex-row space-x-10 overflow-x-scroll md:grid md:gap-10 md:space-x-0 lg:grid-cols-3 xl:grid-cols-4">
                  {hotels.map((hotel) => (
                    <div key={hotel.id} className="md:w-78 w-full">
                      <HotelCard hotel={hotel} key={hotel.id} />
                    </div>
                  ))}
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="relative flex h-full w-full flex-row space-x-10 overflow-x-scroll md:grid md:gap-10 md:space-x-0 lg:grid-cols-3 xl:grid-cols-4">
                  {hotels.map((hotel) => (
                    <div key={hotel.id} className="md:w-78 w-full">
                      <HotelCard hotel={hotel} key={hotel.id} />
                    </div>
                  ))}
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="relative flex h-full w-full flex-row space-x-10 overflow-x-scroll md:grid md:gap-10 md:space-x-0 lg:grid-cols-3 xl:grid-cols-4">
                  {hotels.map((hotel) => (
                    <div key={hotel.id} className="md:w-78 w-full">
                      <HotelCard hotel={hotel} key={hotel.id} />
                    </div>
                  ))}
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="relative flex h-full w-full flex-row space-x-10 overflow-x-scroll md:grid md:gap-10 md:space-x-0 lg:grid-cols-3 xl:grid-cols-4">
                  {hotels.map((hotel) => (
                    <div key={hotel.id} className="md:w-78 w-full">
                      <HotelCard hotel={hotel} key={hotel.id} />
                    </div>
                  ))}
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="relative flex h-full w-full flex-row space-x-10 overflow-x-scroll md:grid md:gap-10 md:space-x-0 lg:grid-cols-3 xl:grid-cols-4">
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

        <div className="relative flex h-28  w-full flex-row items-center justify-center py-4 md:justify-start">
          <Link href="/hotels">
            <div className="flex h-full w-full cursor-pointer items-center justify-center border border-secondary md:w-60">
              <h1 className="text-2xl font-bold text-secondary">كل الفنادق</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Search;
