import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [session, setSession] = useState(true);
  const router = useRouter();
  return (
    <nav className="fixed z-30 flex h-24 w-full items-center justify-between bg-tint md:px-12 md:shadow-lg ">
      {session ? (
        <Menu>
          <div className="hidden md:flex w-48 md:flex-col">
            <div className="mb-8 mt-10 w-24 items-center justify-between space-x-2 self-center md:flex">
              <Menu.Button>
                <i
                  className={`  icon-arrow_drop_down_black_24dp1 text-xl text-primary `}
                />
              </Menu.Button>
              <h1 className="text-center text-xs text-secondary ">محمد</h1>
              <i
                className={` icon-person_black_24dp1 border border-solid border-primary text-3xl text-secondary`}
              />
            </div>
            <Menu.Items>
              <div className="absolute flex w-48 flex-col items-center justify-center space-y-2 divide-y-2 divide-basic bg-tint p-4 shadow">
                <Menu.Item>
                  {({ active }) => (
                    <div className="w-full">
                      <Link
                        className={`${active && "bg-blue-500"}`}
                        href="/profile"
                      >
                        <h1 className="text-center">الملف الشخصي</h1>
                      </Link>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div className="w-full">
                      <Link
                        className={`${active && "bg-blue-500"}`}
                        href="/reservations"
                      >
                        <h1 className="text-center">حجوزاتي</h1>
                      </Link>
                    </div>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </div>
        </Menu>
      ) : (
        <>
          <div className="hidden justify-between space-x-14 md:flex">
            <button className="h-12 w-40 bg-primary text-xl font-bold leading-loose text-tint">
              <Link href="/signIn"> تسجيل الدخول</Link>
            </button>
          </div>
        </>
      )}

      <ul className="hidden h-20 items-center space-x-16 text-xl font-bold text-secondary md:flex">
        <li
          className={`flex h-24 items-center justify-center border-b-4 border-b-transparent hover:text-primary ${
            router.pathname === "/" ? "border-primary  text-primary" : ""
          } `}
        >
          <Link href="/contact">اتصل بنا</Link>
        </li>
        <li className="flex h-24 items-center justify-center border-b-transparent hover:text-primary active:border-b-4 active:border-primary  active:text-primary	">
          <Link href="/hotels">الفنادق</Link>
        </li>
        <li className="flex h-24 items-center justify-center border-b-transparent hover:text-primary active:border-b-4 active:border-b-primary  active:text-primary ">
          <Link href="/">حجز نقل</Link>
        </li>
        <li className="flex h-24 items-center justify-center border-primary border-b-transparent hover:text-primary active:border-b-4 active:text-primary">
          <Link href="/">حجز فندق</Link>
        </li>
      </ul>

      <button
        className="p-4 md:hidden"
        type="button"
        onClick={() => setShowMenu(true)}
      >
        <i
          className={`icon-menu_black_24dp1 cursor-pointer  text-3xl text-primary`}
        />
      </button>
      {showMenu ? (
        <>
          <div
            onClick={() => setShowMenu(false)}
            className="fixed inset-0 z-40 h-full w-full  bg-secondary opacity-50 md:hidden "
          ></div>
          <div className=" fixed inset-0 z-40 h-full w-3/4  bg-tint md:hidden ">
            <div className="flex flex-col space-y-4 divide-y-2 divide-basic py-8">
              <div className="px-8">
                <Link href="/signIn">
                  <button
                    type="button"
                    className="mb-4 h-12 w-full cursor-pointer bg-primary font-bold text-tint md:hidden"
                  >
                    تسجيل الدخول
                  </button>
                </Link>
                <Link href="/signUp">
                  <button
                    type="button"
                    className="h-12 w-full cursor-pointer bg-tint font-bold text-primary md:hidden"
                  >
                    انشاء حساب
                  </button>
                </Link>
              </div>
              <div className="py-8 md:hidden">
                <ul className="flex-col space-y-4 ">
                  <li
                    className={`flex h-12 w-full items-center justify-end border-r-4 px-8 text-xl font-semibold text-secondary hover:text-primary ${
                      router.pathname === "/"
                        ? "border-r-primary text-primary"
                        : "border-r-transparent"
                    } `}
                  >
                    <Link href="/">الصفحة الرئيسية</Link>
                  </li>
                  <li className="flex h-12 w-full items-center justify-end px-8 text-xl font-semibold text-secondary hover:text-primary active:border-r-4 active:border-r-primary active:bg-basic">
                    <Link href="/hotels">الفنادق</Link>
                  </li>

                  <li className="flex h-12 w-full items-center justify-end px-8 text-xl font-semibold text-secondary hover:text-primary active:border-r-4 active:border-r-primary active:bg-basic">
                    <Link href="/contact">اتصل بنا</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      ) : null}

      <div className="px-4">
        <Link href="/">
          <a>
            <div className="relative  h-16 w-32 md:h-20 md:w-40">
              <Image src="/images/logo.svg" layout="fill" alt="logo" />
            </div>
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
