import { Popover } from "@headlessui/react";
import IcomoonReact from "icomoon-react";
import iconSet from "../public/selection.json";
import { iconList } from "icomoon-react";
import Image from "next/image";
import Logo from "../public/images/logo.svg";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className=" flex justify-between items-center w-full px-16 md:shadow-lg  ">
      <div className="hidden flex justify-between space-x-14 md:flex">
        <button className="w-40 h-12 bg-gold text-white text-xl font-bold leading-loose">
          تسجيل الدخول
        </button>
      </div>
      <ul className=" hidden md:flex space-x-14 self-end ">
        <li className="flex list-none h-16 ">
          <Link href="/">
            <a className="active:text-gold active:border-b-4 border-gold  text-xl font-bold text-navyBlue hover:text-gold leading-loose">
              اتصل بنا
            </a>
          </Link>
        </li>
        <li className="flex list-none ">
          <Link href="/">
            <a className="active:text-gold active:border-b-4 border-gold  text-xl font-bold text-navyBlue hover:text-gold leading-loose">
              الفنادق
            </a>
          </Link>
        </li>
        <li className="flex list-none">
          <Link href="/">
            <a className="active:text-gold active:border-b-4 border-gold  text-xl font-bold text-navyBlue hover:text-gold leading-loose">
              حجز نقل
            </a>
          </Link>
        </li>
        <li className="flex list-none">
          <Link href="/">
            <a className="active:text-gold active:border-b-4 border-gold  text-xl font-bold leading-loose	 text-navyBlue hover:text-gold">
              حجز فندق
            </a>
          </Link>
        </li>
      </ul>
      <Popover className="md:hidden">
        {({ open }) => (
          <>
            <Popover.Button>
              <IcomoonReact
                iconSet={iconSet}
                color="#b38e55"
                size={30}
                icon="menu_black_24dp1"
                className={`${open ? "invisible" : ""}`}
              />
            </Popover.Button>

            <Popover.Panel className=" absolute bg-white w-64 h-full ">
              
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div>
        <Link href="/">
          <a>
            <Logo className="text-8xl " />
          </a>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
