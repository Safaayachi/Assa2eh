import React from "react";
import { Popover } from "@headlessui/react";
import Image from "next/image";
import NavBar from "./NavBar";
const Header = () => {
  return (
    <header className="flex-row">
      <NavBar />
      <section className="flex h-152 w-full flex-col md:flex-row  ">
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
      </section>
    </header>
  );
};

export default Header;
