import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HotelGallery from "../components/HotelGallery";
import Search from "../components/Search";
import RoomCard from "../components/RoomCard";
import Link from "next/link";

const bookingDetails = () => {
  return (
    <div className="h-full w-full">
      <div className=" flex h-full w-full flex-col">
        <div className="absolute inset-0 z-30 ">
          <NavBar />
          <div className="mt-28 h-44 w-full bg-tint px-12 py-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              <h1 className="text-end text-2xl font-black">
                فندق الصفوة البرج الاول{" "}
              </h1>
              <div className="flex flex-row justify-end space-x-1 ">
                <i
                  className={` icon-star
          cursor-pointer  text-2xl text-primary`}
                />
                <i
                  className={` icon-star
          cursor-pointer  text-2xl text-primary`}
                />
                <i
                  className={` icon-star
          cursor-pointer  text-2xl text-primary`}
                />
                <i
                  className={` icon-star
          cursor-pointer  text-2xl text-primary`}
                />
                <i
                  className={` icon-star
          cursor-pointer  text-2xl text-primary`}
                />
              </div>
              <p className="text-end text-lg text-darkTint">
                وقف الملك عبدالعزيز, ابراج, مكة
              </p>
            </div>
          </div>
          <div className="relative  flex  w-full flex-col space-y-12 bg-basic">
            <HotelGallery />
            <Search />
            <RoomCard />
            <RoomCard />
            <div className="flex h-184 w-full flex-col items-end space-y-12 bg-tint p-16 shadow-xl  ">
              <h1 className="text-2xl font-bold text-secondary">
                الخدمات و المرافق
              </h1>
              <div className="flex flex-col items-end space-y-4">
                <h1 className="text-end text-xl font-bold text-secondary">
                  المرافق
                </h1>
                <div className="flex flex-row justify-end space-x-32">
                  <div className="flex flex-col items-end space-y-2">
                    <div className="flex flex-row space-x-2">
                      <h1 className="text-lg font-semibold">تكييف هواء</h1>
                      <i
                        className={`  icon-check_circle_black_24dp  text-2xl text-primary`}
                      />
                    </div>
                    <div className="flex flex-row space-x-2">
                      <h1 className="text-lg font-semibold"> انترنت</h1>
                      <i
                        className={`  icon-check_circle_black_24dp  text-2xl text-primary`}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <div className="flex flex-row space-x-2">
                      <h1 className="text-lg font-semibold">متجر</h1>
                      <i
                        className={`  icon-check_circle_black_24dp  text-2xl text-primary`}
                      />
                    </div>
                    <div className="flex flex-row space-x-2">
                      <h1 className="text-lg font-semibold">مقهى</h1>
                      <i
                        className={`  icon-check_circle_black_24dp  text-2xl text-primary`}
                      />
                    </div>
                  </div>
                </div>
                <h1 className="cursor-pointer text-lg text-primary underline">
                  عرض المزيد
                </h1>
              </div>
              <div className="flex flex-col items-end space-y-4">
                <h1 className="text-end text-xl font-bold text-secondary">
                  الخدمات{" "}
                </h1>
                <div className="flex flex-row justify-end space-x-16">
                  <div className="flex flex-col items-end space-y-2">
                    <div className="flex flex-row space-x-2">
                      <h1 className="text-lg font-semibold">مركز أعمال</h1>
                      <i
                        className={`  icon-check_circle_black_24dp  text-2xl text-primary`}
                      />
                    </div>
                    <div className="flex flex-row space-x-2">
                      <h1 className="text-lg font-semibold">موقف سيارات</h1>
                      <i
                        className={`  icon-check_circle_black_24dp  text-2xl text-primary`}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <div className="flex flex-row space-x-2">
                      <h1 className="text-lg font-semibold">قاعة المؤتمرات</h1>
                      <i
                        className={`  icon-check_circle_black_24dp  text-2xl text-primary`}
                      />
                    </div>
                    <div className="flex flex-row space-x-2">
                      <h1 className="text-lg font-semibold">حجرة اجتماعات</h1>
                      <i
                        className={`  icon-check_circle_black_24dp  text-2xl text-primary`}
                      />
                    </div>
                  </div>
                </div>
                <h1 className="cursor-pointer text-lg text-primary underline">
                  عرض المزيد
                </h1>
              </div>
              <div className="flex flex-col items-end space-y-4">
                <h1 className="text-end text-xl font-bold text-secondary">
                  الانشطة
                </h1>
                <div className="flex flex-row justify-end space-x-24">
                  <div className="flex flex-col items-end space-y-2">
                    <div className="flex flex-row space-x-2">
                      <h1 className="text-lg font-semibold">
                        مركز للياقة البدنية
                      </h1>
                      <i
                        className={`  icon-check_circle_black_24dp  text-2xl text-primary`}
                      />
                    </div>
                    <div className="flex flex-row space-x-2">
                      <h1 className="text-end text-lg font-semibold">
                        محل هدايا
                      </h1>
                      <i
                        className={`  icon-check_circle_black_24dp  text-2xl text-primary`}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <div className="flex flex-row space-x-2 ">
                      <h1 className="text-end text-lg font-semibold">
                        حمام سباحة
                      </h1>
                      <i
                        className={`  icon-check_circle_black_24dp  text-2xl text-primary`}
                      />
                    </div>
                    <div className="flex flex-row space-x-2">
                      <h1 className="text-lg font-semibold ">سبا</h1>
                      <i
                        className={`  icon-check_circle_black_24dp  text-2xl text-primary`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Footer />
          </div>
        </div>
        <div className="fixed z-40 flex h-32 w-full bottom-0  flex-row items-center justify-around bg-tint md:hidden">
          <Link href="/bookingConfirmation">
            <div className=" w-52 cursor-pointer bg-secondary  py-6 text-center text-3xl font-bold text-tint">
              احجز
            </div>
          </Link>
          <div className="flex w-1/2 flex-col items-end space-y-2">
            <p className="text-lg font-bold text-secondary">اجمالي السعر</p>
            <div className="flex flex-row space-x-2">
              <h1 className="text-3xl font-bold text-primary">ريال</h1>
              <h1 className="text-3xl font-bold text-primary">1200</h1>
            </div>
            <p className="text-darkTint">شامل الضرائب و الرسوم</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default bookingDetails;
