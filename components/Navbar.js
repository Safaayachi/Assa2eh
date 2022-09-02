import { Popover } from "@headlessui/react";
import IcomoonReact from "icomoon-react";
import iconSet from "../public/selection.json";
import { iconList } from "icomoon-react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="p-6  md:shadow-lg">
      <div className="flex items-center justify-between h-22 ">
        <div className="hidden flex justify-between space-x-14 md:flex">
          <button className="  w-40 h-12 bg-gold text-white text-lg font-bold   ">
            {" "}
            تسجيل الدخول{" "}
          </button>
        </div>
        <div className="hidden space-x-10 md:flex ">
          <Link href="/">
            <a className="text-lg font-bold text-navyBlue hover:text-gold	">
              اتصل بنا
            </a>
          </Link>
          <Link href="/">
            <a className="text-lg font-bold text-navyBlue hover:text-gold	">
              الفنادق
            </a>
          </Link>
          <Link href="/">
            <a className="text-lg font-bold text-navyBlue hover:text-gold	">
              حجز نقل
            </a>
          </Link>
          <Link href="/">
            <a className="text-lg font-bold text-navyBlue hover:text-gold	">
              حجز فندق
            </a>
          </Link>
        </div>
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
            <Image
              src="/../public/images/logo.png"
              alt="logo"
              width={120.555}
              height={42}
            />
          </a>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
