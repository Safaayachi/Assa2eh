import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="bg-secondary h-30">
        <div className="container mx-auto divide-y-2 divide-primary">
          <div className="flex justify-between items-center py-4 px-6">
            <div>
              <ul className="flex  text-tint space-x-3">
                <li>
                  <Link href="/">
                    <a>
                      <div className="relative w-8 h-8">
                        <Image
                          src="/images/facebook.svg"
                          layout="fill"
                          objectFit="cover"
                          alt="logo"
                        />
                      </div>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <div className="relative w-8 h-8">
                        <Image
                          src="/images/twitter.svg"
                          layout="fill"
                          objectFit="cover"
                          alt="logo"
                        />
                      </div>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <div className="relative w-8 h-8">
                        <Image
                          src="/images/instagram.svg"
                          layout="fill"
                          objectFit="cover"
                          alt="logo"
                        />
                      </div>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <div className="relative w-8 h-8">
                        <Image
                          src="/images/Youtube.svg"
                          layout="fill"
                          objectFit="cover"
                          alt="logo"
                        />
                      </div>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex space-x-6 text-tint">
              <ul className="flex space-x-6">
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
              <ul className="flex space-x-6 ">
                <Link href="/">المدونة</Link>
                <Link href="/">ضمان الخدمة</Link>
                <Link href="/">حول</Link>
              </ul>
            </div>
            <div>
              <Link href="/">
                <a>
                  <div className="relative w-40 h-16">
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
          <div className="text-center text-tint py-2">
            <h3>booking saudi &copy; 2021</h3>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;