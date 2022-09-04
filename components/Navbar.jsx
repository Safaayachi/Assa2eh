import { Popover } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className=" flex justify-between items-center w-full px-16 md:shadow-lg h-16 ">
      <div className="hidden justify-between space-x-14 md:flex">
        <button className="w-40 h-12 bg-gold text-white text-xl font-bold leading-loose">
          تسجيل الدخول
        </button>
      </div>
      
        <ul className="hidden md:flex items-center space-x-16 h-16 text-xl font-bold text-navyBlue">
          <li className="flex h-16 border-b-transparent items-center justify-center active:text-gold active:border-b-4 active:border-gold  hover:text-gold ">
            <Link href="/">اتصل بنا</Link>
          </li>
          <li className="flex h-16 border-b-transparent items-center justify-center active:text-gold active:border-b-4 active:border-gold  hover:text-gold 	">
            <Link href="/">الفنادق</Link>
          </li>
          <li className="flex h-16 border-b-transparent items-center justify-center active:text-gold active:border-b-4 active:border-b-gold  hover:text-gold ">
            <Link href="/">حجز نقل</Link>
          </li>
          <li className="flex h-16 border-b-transparent items-center justify-center active:text-gold active:border-b-4 border-gold  hover:text-gold ">
            <Link href="/">حجز فندق</Link>
          </li>
        </ul>
      

      <Popover className="md:hidden">
        {({ open }) => (
          <>
            <Popover.Button>
              <i
                className={`icon-menu_black_24dp1 text-red-500 ${
                  open ? "hidden" : "block"
                }`}
              />
            </Popover.Button>

            <Popover.Panel className=" absolute bg-white w-64 h-full "></Popover.Panel>
          </>
        )}
      </Popover>
      <div>
        <Link href="/">
          <a>
            <div className="relative w-28 h-12">
              <Image
                src="/images/logo.svg"
                layout="fill"
                objectFit="cover"
                alt="dhfhskj"
              />
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
