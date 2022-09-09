import React from "react";
import Link from "next/link";
import Image from "next/image";
import signIn from "../pages/signIn";

const Footer = () => {
  return (
    <footer className="h-56 bg-secondary md:h-48">
      <div className=" md-px-8 container mx-auto space-y-4 divide-y-2 divide-primary">
        <div className="flex-col ">
          <div className="flex items-center justify-between py-4 ">
            <div>
              <ul className="m-4  flex space-x-3 text-tint">
                <li>
                  <Link href="/">
                    <a>
                      <div className="relative h-8 w-8 ">
                        <Image
                          src="/images/facebook.svg"
                          layout="fill"
                          objectFit="cover"
                          alt="facebook"
                        />
                      </div>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <div className="relative h-8 w-8 ">
                        <Image
                          src="/images/twitter.svg"
                          layout="fill"
                          objectFit="cover"
                          alt="twitter"
                        />
                      </div>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <div className="relative h-8 w-8 ">
                        <Image
                          src="/images/instagram.svg"
                          layout="fill"
                          objectFit="cover"
                          alt="instagram"
                        />
                      </div>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <div className="relative h-8 w-8 ">
                        <Image
                          src="/images/Youtube.svg"
                          layout="fill"
                          objectFit="cover"
                          alt="youtube"
                        />
                      </div>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className=" text-tint md:flex md:items-center md:justify-center md:space-x-6">
              <div className="hidden space-x-6 md:flex">
                <ul className=" space-x-6 md:flex">
                  <li>
                    <Link href="/">اتصل بنا</Link>
                  </li>
                  <li>
                    <Link href="/">سياسة الخصوصية</Link>
                  </li>
                  <li>
                    <Link href="/"> الشروط و الاحكام</Link>
                  </li>
                </ul>
                <ul className=" space-x-6 md:flex ">
                  <Link href="/">المدونة</Link>
                  <Link href="/">ضمان الخدمة</Link>
                  <Link href="/">حول</Link>
                </ul>
              </div>

              <div>
                <Link href="/">
                  <a>
                    <div className="relative h-16 w-40">
                      <Image
                        src="/images/logoMobile.svg"
                        layout="fill"
                        alt="logo"
                      />
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-col justify-center space-y-4 md:hidden">
            <div className="flex items-center justify-center space-x-6 text-tint">
              <Link href="/">المدونة</Link>
              <Link href="/">ضمان الخدمة</Link>
              <Link href="/signIn">حول</Link>
            </div>
            <div className="flex items-center justify-center space-x-6 text-tint">
              <Link href="/">اتصل بنا</Link>
              <Link href="/">سياسة الخصوصية</Link>
              <Link href="/"> الشروط و الاحكام</Link>
            </div>
          </div>
        </div>
        <div className="py-2 text-center text-tint">
          <h3>booking saudi &copy; 2021</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
