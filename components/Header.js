import React from "react";
import { Popover } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex-row">
      <nav className=" flex justify-between items-center w-full px-16 md:shadow-lg h-24 ">
        <div className="hidden justify-between space-x-14 md:flex">
          <button className="w-40 h-12 bg-primary text-tint text-xl font-bold leading-loose">
            تسجيل الدخول
          </button>
        </div>

        <ul className="hidden md:flex items-center space-x-16 h-20 text-xl font-bold text-secondary">
          <li className="flex h-24 border-b-transparent items-center justify-center active:text-primary active:border-b-4 active:border-primary  hover:text-primary ">
            <Link href="/">اتصل بنا</Link>
          </li>
          <li className="flex h-24 border-b-transparent items-center justify-center active:text-primary active:border-b-4 active:border-primary  hover:text-primary	">
            <Link href="/">الفنادق</Link>
          </li>
          <li className="flex h-24 border-b-transparent items-center justify-center active:text-primary active:border-b-4 active:border-b-primary  hover:text-primary ">
            <Link href="/">حجز نقل</Link>
          </li>
          <li className="flex h-24 border-b-transparent items-center justify-center active:text-primary active:border-b-4 border-primary hover:text-primary">
            <Link href="/">حجز فندق</Link>
          </li>
        </ul>

        <Popover className="md:hidden">
          {({ open }) => (
            <>
              <Popover.Button>
                <i
                  className={`icon-menu_black_24dp1 text-primary  text-4xl ${
                    open ? "hidden" : "block"
                  }`}
                />
              </Popover.Button>

              <Popover.Panel className=" absolute bg-tint w-64 h-full "></Popover.Panel>
            </>
          )}
        </Popover>
        <div>
          <Link href="/">
            <a>
              <div className="relative w-40 h-20">
                <Image src="/images/logo.svg" layout="fill" alt="logo" />
              </div>
            </a>
          </Link>
        </div>
      </nav>
      <section className="flex flex-col md:flex-row w-full h-152  ">
        <div className=" relative h-1/2 w-full md:w-1/2 md:h-full mg-0">
          <Image src="/images/landingPageCover.jpg" height={512} width={600} alt="hero-cover" layout="fill"  objectFit="cover"/>
          
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
