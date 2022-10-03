import React, { useState } from "react";
import { Listbox } from "@headlessui/react";

const Destination = () => {
  const places = [
    { id: 1, name: "مكة المكرمة" },
    { id: 2, name: "جدة" },
    { id: 3, name: "المدينة المنورة" },
    { id: 4, name: "الطائف" },
    { id: 5, name: "الرياض" },
    { id: 6, name: "الدمام" },
  ];
  const [selectedPlace, setSelectedPlace] = useState({
    id: 0,
    name: "اختر وجهتك",
  });
  return (
    <Listbox value={selectedPlace} onChange={setSelectedPlace}>
      <div className="w-full h-full p-2">
       <div className="relative w-full h-full flex flex-col space-y-2 md:space-y-8">
       <div className="flex justify-end space-x-4 px-4">
          <p className=" text-sm text-darkTint">الوجهة</p>
          <i className={`icon-place_black_24dp1 text-sm text-primary`} />
        </div>
        <div className="flex justify-between ">
          <Listbox.Button>
            <i
              className={`icon-expand_more_black_24dp1 text-lg text-primary`}
            />
          </Listbox.Button>

          <div>
            <h1 className="px-4 text-md font-semibold text-secondary">
              {selectedPlace.name}
            </h1>
          </div>
        </div>
       </div>
      </div>
      <Listbox.Options>
        <ul className="w-full z-30 shadow absolute bg-tint md:w-80">
          <div className="flex-col divide-y-2 divide-basic ">
            {places.map((place) => (
              <Listbox.Option key={place.id} value={place}>
                <div className="hover:bg-basic">
                  <li className="p-2 px-6 text-end "> {place.name}</li>
                </div>
              </Listbox.Option>
            ))}
          </div>
        </ul>
      </Listbox.Options>
    </Listbox>
  );
};

export default Destination;
