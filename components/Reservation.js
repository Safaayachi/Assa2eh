import React from "react";
import { Listbox } from "@headlessui/react";
import { useState } from "react";
import Link from "next/link";

const Reservation = () => {
  const options = [
    { id: 1, name: "option1" },
    { id: 2, name: "option2" },
    { id: 3, name: "option3" },
    { id: 4, name: "option4" },
  ];
  const userReservations = [
    {
      id: 1,
      hotel: "فندق الصفوة البرج الاول",
      resDate: "30 يوليو 2021",
      arrivalDate: "30 يوليو 2021",
      price: "1680.00",
      resState: "تم التأكيد",
    },
    {
      id: 2,
      hotel: "فندق الصفوة البرج الاول",
      resDate: "30 يوليو 2021",
      arrivalDate: "30 يوليو 2021",
      price: "1680.00",
      resState: "ألغيت",
    },
    {
      id: 3,
      hotel: "فندق الصفوة البرج الاول",
      resDate: "30 يوليو 2021",
      arrivalDate: "30 يوليو 2021",
      price: "1680.00",
      resState: "تم التأكيد",
    },
    {
      id: 4,
      hotel: "فندق الصفوة البرج الاول",
      resDate: "30 يوليو 2021",
      arrivalDate: "30 يوليو 2021",
      price: "1680.00",
      resState: "فشل",
    },

    {
      id: 5,
      hotel: "فندق الصفوة البرج الاول",
      resDate: "30 يوليو 2021",
      arrivalDate: "30 يوليو 2021",
      price: "1680.00",
      resState: "تم التأكيد",
    },
    {
      id: 6,
      hotel: "فندق الصفوة البرج الاول",
      resDate: "30 يوليو 2021",
      arrivalDate: "30 يوليو 2021",
      price: "1680.00",
      resState: "تم التأكيد",
    },
    {
      id: 7,
      hotel: "فندق الصفوة البرج الاول",
      resDate: "30 يوليو 2021",
      arrivalDate: "30 يوليو 2021",
      price: "1680.00",
      resState: "ألغيت",
    },
    {
      id: 8,
      hotel: "فندق الصفوة البرج الاول",
      resDate: "30 يوليو 2021",
      arrivalDate: "30 يوليو 2021",
      price: "1680.00",
      resState: "فشل",
    },
    {
      id: 9,
      hotel: "فندق الصفوة البرج الاول",
      resDate: "30 يوليو 2021",
      arrivalDate: "30 يوليو 2021",
      price: "1680.00",
      resState: "تم التأكيد",
    },
  ];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  return (
    <div className="hidden h-full w-full flex-col bg-tint p-28 md:flex">
      <div className="relative flex h-full w-full flex-col space-y-6 p-2 px-12">
        <form className="flex h-24 w-full flex-row items-center justify-between bg-tint px-4 shadow-lg">
          <button
            type="submit"
            className="w-36 bg-secondary p-2 text-tint md:w-28"
          >
            <h1 className="text-lg">بحث</h1>
          </button>

          <div className="flex w-2/3 flex-row items-center justify-center space-x-8">
            <Listbox value={selectedOption} onChange={setSelectedOption}>
              <div className="relative flex w-56 flex-col space-y-12 md:w-1/6">
                <div className=" flex justify-between  border border-solid border-primary p-1 ">
                  <Listbox.Button>
                    <i
                      className={`icon-expand_more_black_24dp1 text-2xl font-bold text-secondary`}
                    />
                  </Listbox.Button>

                  <div>
                    <h1 className=" text-md text-secondary">
                      {selectedOption.name}
                    </h1>
                  </div>
                </div>
                <Listbox.Options>
                  <ul className="absolute w-full bg-tint shadow ">
                    <div className="flex-col divide-y-2 divide-basic ">
                      {options.map((option) => (
                        <Listbox.Option key={option.id} value={option}>
                          <div className="hover:bg-basic">
                            <li className="p-2 px-6 text-end ">
                              {" "}
                              {option.name}
                            </li>
                          </div>
                        </Listbox.Option>
                      ))}
                    </div>
                  </ul>
                </Listbox.Options>
              </div>
            </Listbox>
            <Listbox value={selectedOption} onChange={setSelectedOption}>
              <div className="relative flex w-56 flex-col space-y-12 md:w-1/6">
                <div className=" flex justify-between  border border-solid border-primary p-1 ">
                  <Listbox.Button>
                    <i
                      className={`icon-expand_more_black_24dp1 text-2xl font-bold text-secondary`}
                    />
                  </Listbox.Button>

                  <div>
                    <h1 className=" text-md text-secondary">
                      {selectedOption.name}
                    </h1>
                  </div>
                </div>
                <Listbox.Options>
                  <ul className="absolute w-full bg-tint shadow ">
                    <div className="flex-col divide-y-2 divide-basic ">
                      {options.map((option) => (
                        <Listbox.Option key={option.id} value={option}>
                          <div className="hover:bg-basic">
                            <li className="p-2 px-6 text-end ">
                              {" "}
                              {option.name}
                            </li>
                          </div>
                        </Listbox.Option>
                      ))}
                    </div>
                  </ul>
                </Listbox.Options>
              </div>
            </Listbox>
            <Listbox value={selectedOption} onChange={setSelectedOption}>
              <div className="relative flex w-56 flex-col space-y-12 md:w-1/6">
                <div className=" flex justify-between  border border-solid border-primary p-1 ">
                  <Listbox.Button>
                    <i
                      className={`icon-expand_more_black_24dp1 text-2xl font-bold text-secondary`}
                    />
                  </Listbox.Button>

                  <div>
                    <h1 className=" text-md text-secondary">
                      {selectedOption.name}
                    </h1>
                  </div>
                </div>
                <Listbox.Options>
                  <ul className="absolute w-full bg-tint shadow ">
                    <div className="flex-col divide-y-2 divide-basic ">
                      {options.map((option) => (
                        <Listbox.Option key={option.id} value={option}>
                          <div className="hover:bg-basic">
                            <li className="p-2 px-6 text-end ">
                              {" "}
                              {option.name}
                            </li>
                          </div>
                        </Listbox.Option>
                      ))}
                    </div>
                  </ul>
                </Listbox.Options>
              </div>
            </Listbox>
            <div className="flex flex-row justify-end space-x-4 border border-solid border-primary px-2 ">
              <input
                type="text"
                className="w-full p-2 text-end md:w-2/6"
                placeholder="بحث"
              ></input>
              <i
                className={`icon-search_black_24dp1 py-1 text-2xl text-secondary`}
              />
            </div>
          </div>
          <h1 className="p-4 text-xl font-bold text-secondary">حجوزاتي</h1>
        </form>
        <div className="h-full w-full bg-tint shadow-lg">
          <ul className="flex flex-col divide-y-2 ">
            <li className="bg-basic px-12 py-4 ">
              <div className="flex w-full flex-row justify-between text-sm font-bold text-primary">
                <h1 className="w-40  text-end">حالةالحجز</h1>
                <h1 className="w-40 text-end">السعر</h1>
                <h1 className="w-40 text-end">تاريخ الوصول</h1>
                <h1 className="w-40 text-end">تم الحجز في</h1>
                <h1 className="w-40 text-end">فندق</h1>
              </div>
            </li>
            {userReservations.map((userReservation) => (
              <li className="px-12 py-4 " key={userReservation.id}>
                <div className="flex w-full flex-row justify-between text-sm font-semibold text-secondary">
                  {userReservation.resState == "تم التأكيد" ? (
                    <Link href="/hotelInfo">
                      <div className="flex w-40 cursor-pointer items-center justify-end">
                        <p className="w-20 bg-success p-2 text-center text-tint">
                          {userReservation.resState}
                        </p>
                      </div>
                    </Link>
                  ) : userReservation.resState == "ألغيت" ? (
                    <Link href="/hotelInfo">
                      <div className="flex w-40 cursor-pointer items-center justify-end">
                        <p className="w-20 bg-danger p-2 text-center text-tint">
                          {userReservation.resState}
                        </p>
                      </div>
                    </Link>
                  ) : (
                    <Link href="/hotelInfo">
                      <div className="flex w-40 cursor-pointer items-center justify-end">
                        <p className="w-20 bg-warning p-2 text-center text-tint">
                          {userReservation.resState}
                        </p>
                      </div>
                    </Link>
                  )}
                  <p className="w-40 py-2 text-end">{userReservation.price}</p>
                  <p className="w-40 py-2 text-end">
                    {userReservation.arrivalDate}
                  </p>
                  <p className="w-40 py-2 text-end">
                    {userReservation.resDate}
                  </p>
                  <p className="w-40 py-2 text-end">{userReservation.hotel}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
