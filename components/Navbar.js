import { Popover } from "@headlessui/react";
import IcomoonReact from "icomoon-react";
import iconSet from "../public/selection.json";
import { iconList } from "icomoon-react";

import Image from "next/image";
import Link from "next/link";

const data = [
  {
    name: "الصفحة الرئيسية",
    link: "/",
  },
  {
    name: "الفنادق",
    link: "/",
  },
  {
    name: "اتصل بنا",
    link: "/",
  },
];

export const Navbar = () => {
  return (
    <div className="p-6 px-8 " >
      <div className="flex items-center justify-between h-22 ">
        
        <Popover className="lg:hidden">
          {({ open }) => (
            <>
              <Popover.Button className="">
                <IcomoonReact
                  iconSet={iconSet}
                  color="#b38e55"
                  size={30}
                  icon="menu_black_24dp1"
                  className={`${open ? "invisible" : ""}`}
                />
              </Popover.Button>

              <Popover.Panel className="border absolute bg-white w-64 h-full ">
                <div className="container divide-y-2 divide-paleGray divide-solid ">
                  <div className="flex-row self-center border ">
                    <button className=" w-52 h-12 bg-gold text-white text-lg font-bold  ">
                      {" "}
                      تسجيل الدخول{" "}
                    </button>
                    <button className=" w-52 h-12 text-gold bg-white text-lg font-bold ">
                      إنشاء حساب{" "}
                    </button>
                  </div>
                  <div className="flex-row ">
                    {data.map((item, i) => (
                      <div key={i}>
                        <a
                          href="{item.link}"
                          className="text-bold text-navyBlue hover:text-gold	"
                        >
                          {item.name}{" "}
                        </a>
                      </div>
                    ))}
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
