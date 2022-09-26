import React from "react";
import Image from "next/image";
import Destination from "./Destination";
import Link from "next/link";
const Header = () => {
  return (
    <header className="relative flex-row">
      <section className="relative  flex h-208 w-full flex-col md:flex-row ">
        <div className=" mg-0 relative h-1/2 w-full md:h-full md:w-1/2">
          <Image
            src="/images/landingPageCover.jpg"
            alt="hero-cover"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="h-1/2 w-full bg-basic md:h-full md:w-1/2 ">
          <div className="hidden md:flex md:flex-col md:pr-28 md:pt-40 md:pl-2">
            <h1 className="  text-end font-bold  text-secondary md:text-7xl  ">
              <span className="text-primary">الاختلاف</span> نخدمكم{" "}
            </h1>
            <h1 className="text-end font-bold text-secondary md:text-7xl ">
              باحتراف
            </h1>
          </div>
        </div>
        <div className="absolute h-152 w-full  p-32 px-12 md:pt-64">
          <div className="h-full w-full flex-col space-y-14">
            <div className=" h-24">
              <div className="flex-col space-y-4 md:hidden ">
                <h1 className="  text-center text-4xl  font-black text-secondary  ">
                  <span className="text-primary">الاختلاف</span> نخدمكم{" "}
                </h1>
                <h1 className=" text-center text-4xl font-black text-secondary ">
                  باحتراف
                </h1>
              </div>
            </div>
            <div className="relative flex flex-col space-y-4 divide-y-2 divide-solid divide-shade bg-tint p-4 shadow md:flex-row-reverse md:space-x-8 md:divide-x-2">
              <div>
                <Destination />
              </div>
              <div className="relative flex w-full space-x-2 p-4 md:w-80">
                <div className="flex w-1/2 justify-start space-x-2 ">
                  <i
                    className={`icon-calendar_today_black_24dp1 text-sm text-primary`}
                  />
                  <p className="text-xs font-semibold text-darkTint">
                    تاريخ الوصول{" "}
                  </p>
                </div>
                <div className="flex w-1/2 justify-end space-x-2">
                  <p className="text-xs font-semibold text-darkTint">
                    تاريخ الوصول{" "}
                  </p>
                  <i
                    className={`icon-calendar_today_black_24dp1 text-sm text-primary`}
                  />
                </div>
              </div>
              <div className="flex-col space-y-4 ">
                <div className="flex justify-end space-x-2">
                  <h1 className="text-sm text-darkTint">البرموكود</h1>
                  <i className={` icon-uniE901 text-sm text-primary`} />
                </div>
                <div className="">
                  <input
                    type="text"
                    placeholder="...البرموكود"
                    className="w-full text-end text-lg text-shade "
                  />
                </div>
              </div>
              <div className="p-4">
                <Link href="/searchResults">
                  <div className="flex h-14  w-full items-center justify-center space-x-2 bg-primary text-tint   md:w-14">
                    <h1 className="text-2xl font-bold md:hidden">بحث</h1>
                    <i
                      className={`icon-search_black_24dp1 cursor-pointer  text-3xl `}
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
