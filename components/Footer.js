import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex-col">
      <div className="relative h-72 w-full md:h-96">
        <Image
          src="/images/footerCover.jpg"
          alt="hero-cover"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute w-full h-72 bg-secondary opacity-60 md:w-1/2 md:h-96"></div>
        
          <div className="absolute p-14  flex-col justify-center items-center  space-y-8 md:py-24 md:px-36">
              <div>
                <h1 className="text-2xl text-tint font-bold text-center">
                  اشترك فى قائمتنا البريدية
                </h1>
                <h2 className="text-lg text-tint text-center ">
                  افضل العروض فقط تصل إلى بريدك الالكتروني
                </h2>
              </div>
              <div>
                <form className="flex space-x-2 justify-center">
                  <button className="h-12 w-1/3 bg-tint font-bold md:h-16" type="submit">
                    اشترك
                  </button>
                  <input
                    className="bg-transparent border h-12 w-3/4 border-tint text-center p-2 focus:outline-none md:w-96 md:h-16"
                    type="email"
                    name="mailbox"
                    placeholder="البريد الالكتروني"
                  />
                </form>
              </div>
          </div>
      </div>
      <div className="h-56 bg-secondary md:h-48">
        <div className=" container mx-auto divide-y-2 divide-primary md-px-8 space-y-4">
          <div className="flex-col ">
            <div className="flex justify-between items-center py-4 ">
              <div>
                <ul className="flex  text-tint space-x-3 m-4">
                  <li>
                    <Link href="/">
                      <a>
                        <div className="relative w-8 h-8 ">
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
                        <div className="relative w-8 h-8 ">
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
                        <div className="relative w-8 h-8 ">
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
                        <div className="relative w-8 h-8 ">
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
              <div className=" md:flex md:space-x-6 text-tint md:justify-center md:items-center">
                <div className="hidden md:flex space-x-6">
                  <ul className=" md:flex space-x-6">
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
                  <ul className=" md:flex space-x-6 ">
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
            </div>
            <div className="flex-col justify-center md:hidden space-y-4">
              <div className="flex space-x-6 text-tint items-center justify-center">
                <Link href="/">المدونة</Link>
                <Link href="/">ضمان الخدمة</Link>
                <Link href="/">حول</Link>
              </div>
              <div className="flex space-x-6 text-tint items-center justify-center">
                <Link href="/">اتصل بنا</Link>
                <Link href="/">سياسة الخصوصية</Link>
                <Link href="/"> الشروط و الاحكام</Link>
              </div>
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
