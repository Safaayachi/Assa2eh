import React from "react";
import { Popover } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "./NavBar";
const Header = () => {
  return (
    <header className="flex-row">
      <NavBar/>
      <section className="flex flex-col md:flex-row w-full h-152  ">
        <div className=" relative h-1/2 w-full md:w-1/2 md:h-full mg-0">
          <Image src="/images/landingPageCover.jpg" alt="hero-cover" layout="fill"  objectFit="cover"/>
          
        </div>
        <div className="h-1/2 w-full md:w-1/2 md:h-full bg-basic ">
          <div className="hidden md:flex md:flex-col md:pr-28 md:pt-40 md:pl-2">
          <h1 className="  text-secondary font-bold  md:text-7xl text-end  "><span className="text-primary">الاختلاف</span> نخدمكم </h1>
          <h1 className="text-secondary font-bold md:text-7xl text-end ">باحتراف</h1>
          </div>
        
        </div>
      </section>
    
      </header>
  );
};

export default Header;
