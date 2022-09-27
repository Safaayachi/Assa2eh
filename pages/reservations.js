import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Listbox } from "@headlessui/react";
const options = [
  { id: 1, name: "option1" },
  { id: 2, name: "option2" },
  { id: 3, name: "option3" },
  { id: 4, name: "option4" },
];

const reservations = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  return (
    <div className="absolute flex h-full w-full flex-col">
      <NavBar />
      <div className="hidden h-full w-full flex-col bg-basic p-28 md:flex">
        <div className="relative flex h-full w-full flex-col space-y-6 p-2 px-12">
          <form className="flex h-24 w-full flex-row items-center justify-between bg-tint px-4 shadow-lg">
            <button
              type="submit"
              className="w-36 bg-secondary p-4 text-tint md:w-28"
            >
              <h1 className="text-lg">بحث</h1>
            </button>

            <div className="w-2/3 flex flex-row justify-center space-x-8">
              <Listbox value={selectedOption} onChange={setSelectedOption}>
                <div className="md:w-1/6 relative flex w-56 flex-col space-y-12">
                  <div className=" flex justify-between  border border-solid border-primary p-3 ">
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
                <div className="md:w-1/6 relative flex w-56 flex-col space-y-12">
                  <div className=" flex justify-between  border border-solid border-primary p-3 ">
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
                <div className="md:w-1/6 relative flex w-56 flex-col space-y-12">
                  <div className=" flex justify-between  border border-solid border-primary p-3 ">
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
              <div className="flex flex-row space-x-4 border border-solid border-primary p-2">
                <input
                  type="text"
                  className="md:w-2/6 w-72 p-2 text-end"
                  placeholder="بحث"
                ></input>
                <i
                  className={`icon-search_black_24dp1 text-2xl text-secondary`}
                />
              </div>
            </div>
            <h1 className="p-4 text-xl font-bold text-secondary">حجوزاتي</h1>
          </form>
          <div className="h-full w-full bg-tint shadow-lg"></div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default reservations;
