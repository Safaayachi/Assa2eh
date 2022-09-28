import React, { useState } from "react";

const FilterButton = () => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  return (
    <>
      <button
        className="flex cursor-pointer flex-row border border-solid border-black py-2 px-4"
        onClick={() => setShowFilterModal(true)}
      >
        <i
          className={`icon-arrow_drop_down_black_24dp1   text-3xl text-black`}
        />
        <h1 className="text-2xl font-bold">تصنيف بحسب</h1>
      </button>
      {showFilterModal ? (
        <div className="fixed inset-0 z-40 mt-2 h-full w-full">
          <div className="fixed inset-0 z-40 flex h-full w-full flex-col items-end justify-end">
            <div
              className="fixed inset-0 z-40 h-full w-full bg-secondary opacity-50 md:hidden "
              onClick={() => setShowFilterModal(false)}
            ></div>
            <div className="fixed z-40 flex h-96 w-full flex-col bg-tint">
              <div className="relative  flex h-96 w-full flex-col px-12">
                <div className="flex h-1/3 w-full flex-row items-center space-x-32 border-b border-solid">
                  <i
                    className={` icon-clear_black_24dp cursor-pointer text-4xl  text-primary  `}
                    onClick={() => setShowFilterModal(false)}
                  />
                  <h1 className="text-3xl font-semibold">تصنيف بحسب</h1>
                </div>
                <ul className="relative flex h-2/3  w-full flex-col items-end space-y-6 py-6">
                  <li className="flex h-1/3 w-full cursor-pointer items-center justify-end px-2 hover:bg-basic">
                    <h1
                      className="text-2xl font-bold text-secondary hover:text-primary  "
                      onClick={() => setShowFilterModal(false)}
                    >
                      الاقل سعرا
                    </h1>
                  </li>
                  <li className="flex h-1/3  w-full cursor-pointer items-center justify-end px-2 hover:bg-basic">
                    <h1
                      className="text-2xl font-bold text-secondary hover:text-primary "
                      onClick={() => setShowFilterModal(false)}
                    >
                      الاكثر سعرا
                    </h1>
                  </li>
                  <li className="flex h-1/3  w-full cursor-pointer items-center justify-end px-2 hover:bg-basic">
                    <h1
                      className="text-2xl font-bold text-secondary hover:text-primary "
                      onClick={() => setShowFilterModal(false)}
                    >
                      الاعلى تصنيفا
                    </h1>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default FilterButton;
