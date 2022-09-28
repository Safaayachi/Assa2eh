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
      hotelSlug: "hotel2",
      hotelStars: 5,
    },
    {
      id: 3,
      hotelName: "فندق سويس اوتيل المقام مكة",
      hotelDescription: "وقف الملك عبد العزيز مكة المكرمة",
      hotelSlug: "hotel3",
      hotelStars: 5,
    },
    {
      id: 2,
      hotelName: "فندق ماريوت مكة جبل عمر",
      hotelDescription: "وقف الملك عبد العزيز مكة المكرمة",
      hotelSlug: "hotel2",
      hotelStars: 5,
    },
    {
      id: 4,
      hotelName: "فندق المروة ريحان روتانا مكة",
      hotelDescription: "وقف الملك عبد العزيز مكة المكرمة",
      hotelSlug: "hotel",
      hotelStars: 5,
    },
    {
      id: 5,
      hotelName: "فندق شيراتون مكة جبل الكعبة",
      hotelDescription: "وقف الملك عبد العزيز مكة المكرمة",
      hotelSlug: "hotel5",
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
      hotelSlug: "hotel2",
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
    <div className="flex flex-col">
      <div className="flex justify-end px-24">
        <h1 className="text-4xl font-bold">الفنادق المميزة</h1>
      </div>
      <Tab.Group>
        <Tab.List className="border-bold flex flex-row justify-end space-x-12 overflow-x-auto border-b-4 p-6">
          {places.map((place) => (
            <Tab key={place.id} id={place.id}>
              <h1 className="flex h-10 text-lg font-semibold text-darkTint  hover:text-secondary">
                {place.placeName}
              </h1>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel className="h-full w-full p-4">
            <div className="flex flex-row space-x-4 overflow-x-auto">
              {hotels.map((hotel) => (
                <HotelCard hotel={hotel} key={hotel.id} />
              ))}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Search;
