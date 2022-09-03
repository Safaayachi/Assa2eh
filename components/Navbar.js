import { Popover } from "@headlessui/react";
import IcomoonReact from "icomoon-react";
import iconSet from "../public/selection.json";
import { iconList } from "icomoon-react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className=" flex h-28 w-full px-16 shadow-lg justify-between items-center">
      <div className="hidden flex justify-between space-x-14 md:flex">
        <button className="w-52 h-16 bg-gold text-white text-3xl font-medium leading-loose">
          تسجيل الدخول
        </button>
      </div>
      <ul className=" hidden md:flex space-x-16">
        <li className="list-none">
          <Link href="/">
            <a className="active:text-gold active:border-b-4 border-gold inline-block text-3xl font-medium text-navyBlue hover:text-gold leading-loose">
              اتصل بنا
            </a>
          </Link>
        </li>
        <li className="list-none">
          <Link href="/">
            <a className="active:text-gold active:border-b-4 border-gold inline-block text-3xl font-medium text-navyBlue hover:text-gold leading-loose">
              الفنادق
            </a>
          </Link>
        </li>
        <li className="list-none">
          <Link href="/">
            <a className="active:text-gold active:border-b-4 border-gold inline-block text-3xl font-medium text-navyBlue hover:text-gold leading-loose">
              حجز نقل
            </a>
          </Link>
        </li>
        <li className="list-none">
          <Link href="/">
            <a className="active:text-gold active:border-b-4 border-gold inline-block text-3xl font-medium leading-loose	 text-navyBlue hover:text-gold">
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
                  <div className="flex-row self-center  ">
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

      <Link href="/">
        <a>
        <Image src="/../public/images/logo.svg" height={30} width={30} alt="logo"/>
        </a>
      </Link>
    </div>
  );
};
export default Navbar;
