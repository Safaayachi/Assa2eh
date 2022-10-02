import React from "react";
import Image from "next/image";
import Search from "./Search";

const HeroSection = () => {
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
            <div className="relative md:flex w-full md:flex-row md:justify-center">
              <Search/>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default HeroSection;
