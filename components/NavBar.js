import React from "react";
import { Popover } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import signUp from "../pages/signIn";

const NavBar = () => {
  return (
    <nav className="fixed z-50 flex h-24 w-full items-center justify-between bg-tint px-16 md:shadow-lg ">
      <div className="hidden justify-between space-x-14 md:flex">
        <button className="h-12 w-40 bg-primary text-xl font-bold leading-loose text-tint">
          <Link href="/signIn"> تسجيل الدخول</Link>
        </button>
      </div>

      <ul className="hidden h-20 items-center space-x-16 text-xl font-bold text-secondary md:flex">
        <li className="border-b-transparent flex h-24 items-center justify-center hover:text-primary active:border-b-4 active:border-primary  active:text-primary ">
          <Link href="/">اتصل بنا</Link>
        </li>
        <li className="border-b-transparent flex h-24 items-center justify-center hover:text-primary active:border-b-4 active:border-primary  active:text-primary	">
          <Link href="/">الفنادق</Link>
        </li>
        <li className="border-b-transparent flex h-24 items-center justify-center hover:text-primary active:border-b-4 active:border-b-primary  active:text-primary ">
          <Link href="/">حجز نقل</Link>
        </li>
        <li className="border-b-transparent flex h-24 items-center justify-center border-primary hover:text-primary active:border-b-4 active:text-primary">
          <Link href="/">حجز فندق</Link>
        </li>
      </ul>

      <Popover className="md:hidden">
        {({ open }) => (
          <>
            <Popover.Button>
              <i
                className={`icon-menu_black_24dp1 text-3xl  text-primary ${
                  open ? "hidden" : "block"
                }`}
              />
            </Popover.Button>

            <Popover.Panel className=" absolute h-full w-64 bg-tint "></Popover.Panel>
          </>
        )}
      </Popover>
      <div>
        <Link href="/">
          <a>
            <div className="relative h-16 w-32 md:h-20 md:w-40">
              <Image src="/images/logo.svg" layout="fill" alt="logo" />
            </div>
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
