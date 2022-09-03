import { Popover } from "@headlessui/react";
import IcomoonReact from "icomoon-react";
import iconSet from "../public/selection.json";
import { iconList } from "icomoon-react";
import Image from "next/image";
import Logo from "../public/images/logo.svg";
import Link from "next/link";

export const Navbar = () => {
  return (
    
      <div className=" flex justify-between items-center w-full px-16 md:shadow-lg h-18">
        <div className="hidden flex justify-between space-x-14 md:flex">
          <button className="w-40 h-12 bg-gold text-white text-xl font-medium leading-loose">
            تسجيل الدخول
          </button>
        </div>
        <ul className=" hidden md:flex space-x-14 self-end">
          <li className="list-none">
            <Link href="/">
              <a className="active:text-gold active:border-b-4 border-gold inline-block text-2xl font-medium text-navyBlue hover:text-gold leading-loose">
                اتصل بنا
              </a>
            </Link>
          </li>
          <li className="list-none ">
            <Link href="/">
              <a className="active:text-gold active:border-b-4 border-gold inline-block text-2xl font-medium text-navyBlue hover:text-gold leading-loose">
                الفنادق
              </a>
            </Link>
          </li>
          <li className="list-none">
            <Link href="/">
              <a className="active:text-gold active:border-b-4 border-gold inline-block text-2xl font-medium text-navyBlue hover:text-gold leading-loose">
                حجز نقل
              </a>
            </Link>
          </li>
          <li className="list-none">
            <Link href="/">
              <a className="active:text-gold active:border-b-4 border-gold inline-block text-2xl font-medium leading-loose	 text-navyBlue hover:text-gold">
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
                <div className="container divide-y-2 divide-paleGray divide-solid ">
                  <div className="flex-row self-center ">
                    <button className=" w-52 h-12 bg-gold text-white text-lg font-bold  ">
                      {" "}
                      تسجيل الدخول{" "}
                    </button>
                    <button className=" w-52 h-12 text-gold bg-white text-lg font-bold ">
                      إنشاء حساب{" "}
                    </button>
                  </div>
                  <div className="flex-row ">
                    <div>
                      <Link href="/">
                        <a className="text-lg font-bold text-navyBlue hover:text-gold	">
                          الصفحة الرئيسية
                        </a>
                      </Link>
                    </div>
                    <div>
                      <Link href="/">
                        <a className="text-lg font-bold text-navyBlue hover:text-gold	">
                          الفنادق
                        </a>
                      </Link>
                    </div>
                    <div>
                      <Link href="/">
                        <a className="text-lg font-bold text-navyBlue hover:text-gold	">
                          اتصل بنا
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </>
          )}
        </Popover>
        <div >
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
