import React from "react";
import { Popover } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import signUp from "../pages/signUp";

const NavBar = () => {
  return (
    <nav className=" flex justify-between items-center w-full px-16 md:shadow-lg h-24 ">
      <div className="hidden justify-between space-x-14 md:flex">
        <button className="w-40 h-12 bg-primary text-tint text-xl font-bold leading-loose">
          <Link href="/signUp"> تسجيل الدخول</Link>
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
                className={`icon-menu_black_24dp1 text-primary  text-3xl ${
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
            <div className="relative w-32 h-16 md:w-40 md:h-20">
              <Image src="/images/logo.svg" layout="fill" alt="logo" />
            </div>
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
