import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Image from "next/image";

const hotelInfo = () => {
  return (
    <div className="absolute flex h-full w-full flex-col">
      <NavBar />
      <div className=" bg-basic pt-32 pb-24">
        <div className="relative flex h-full w-full flex-col space-y-6 px-36">
          <div className=" w-full bg-white p-6 text-end shadow-lg">
            <h1 className="text-xl font-bold text-secondary">
              فندق الصفوة البرج الاول
            </h1>
          </div>
          <div className="relative flex h-full w-full flex-row space-x-6 ">
            <div className="h-full w-1/3 ">
              <div className="flex h-72 w-full flex-col space-y-6 bg-white p-4 px-8 shadow-lg ">
                <h1 className="text-end text-xl font-bold text-secondary">
                  السعر
                </h1>
                <div className="flex flex-col space-y-4 divide-y-2">
                  <div className="flex flex-row justify-between py-2">
                    <div className="flex flex-row space-x-1">
                      <p className="font-bold">ريال</p>
                      <p className="font-bold">1428.00</p>
                    </div>
                    <p className="text-darkTint">غرف*4ليالي </p>
                  </div>
                  <div className="flex flex-row justify-between py-2">
                    <div className="flex flex-row space-x-1">
                      <p className="font-bold">ريال</p>
                      <p className="font-bold">252.00</p>
                    </div>
                    <p className="text-darkTint">ضريبة القيمة المضافة</p>
                  </div>
                  <div className="flex flex-row justify-between py-8">
                  <div className="flex flex-row space-x-1">
                      <p className="font-bold text-2xl text-primary">ريال</p>
                      <p className="font-bold text-2xl text-primary">1680.00</p>
                    </div>
                    <p className="text-2xl font-bold text-secondary">المجموع</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex h-full w-2/3 flex-col space-y-6 ">
              <div className="relative flex h-40 w-full flex-row bg-white shadow-lg">
                <div className="flex w-2/3 flex-col items-end space-y-2 p-4">
                  <div className="flex flex-row">
                    <div className="flex flex-row space-x-1 px-4">
                      <i
                        className={` icon-star
          cursor-pointer  text-lg text-primary`}
                      />
                      <i
                        className={` icon-star
          cursor-pointer  text-lg text-primary`}
                      />
                      <i
                        className={` icon-star
          cursor-pointer  text-lg text-primary`}
                      />
                      <i
                        className={` icon-star
          cursor-pointer  text-lg text-primary`}
                      />
                      <i
                        className={` icon-star
          cursor-pointer  text-lg text-primary`}
                      />
                    </div>
                    <h1 className="text-lg font-bold text-secondary">
                      {" "}
                      فندق الصفوة البرج الاول
                    </h1>
                  </div>
                  <div>
                    <p className="text-sm text-darkTint">
                      وقف الملك عبد لعزيز, ابراج البيت مكة
                    </p>
                  </div>
                  <h2 className="text-md font-bold">جناح صغير</h2>
                  <div className="flex flex-row justify-end space-x-4">
                    <div className="flex flex-row space-x-1">
                      <p className="text-sm">مطلة على المدينة</p>
                      <i className={` icon-balcony text-sm  text-primary`} />
                    </div>
                    <div className="flex flex-row space-x-1">
                      <p className="text-sm">غرفة بدون وجبة</p>
                      <i className={` icon-bed text-sm text-primary`} />
                    </div>
                  </div>
                </div>
                <div className="relative w-1/3">
                  <Image
                    src="/images/hotel3.jpg"
                    alt="hotel"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="flex h-60 w-full flex-col  space-y-4 bg-white p-2 shadow-lg ">
                <h1 className="p-2 text-end text-lg font-bold">
                  {" "}
                  معلومات الحجز
                </h1>
                <div className="flex flex-row justify-between px-2 pl-24">
                  <div className="flex flex-col space-y-4">
                    <div className="flex flex-col items-end space-y-2">
                      <p className="text-md text-end font-bold text-secondary">
                        تم الحجز في
                      </p>
                      <p className="text-secondary">يوليو 30,2021</p>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <p className="text-md text-end font-bold text-secondary">
                        عدد الليالي{" "}
                      </p>
                      <p className="text-secondary">10</p>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <div className="flex flex-col items-end space-y-2">
                      <p className="text-md text-end font-bold text-secondary">
                        حالة الحجز
                      </p>
                      <p className="w-12 bg-success py-1 text-center text-xs text-tint">
                        تم التأكيد
                      </p>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <p className="text-md text-end font-bold text-secondary">
                        تاريخ المغادرة
                      </p>
                      <p className="text-secondary">يوليو 30,2021</p>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <div className="flex flex-col items-end space-y-2">
                      <p className="text-md text-end font-bold text-secondary">
                        <span>BRN</span> رقم{" "}
                      </p>
                      <p className="text-secondary">H463747QLM</p>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <p className="text-md text-end font-bold text-secondary">
                        تاريخ الوصول
                      </p>
                      <p className="text-secondary">يوليو 30,2021</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex h-60 w-full flex-col space-x-4 bg-white shadow-lg ">
                <h1 className="p-2 text-end text-lg font-bold">
                  {" "}
                  معلومات الحجز
                </h1>
                <div className="flex flex-row justify-end space-x-60 px-2 pl-24">
                  <div className="flex flex-col space-y-4">
                    <div className="flex flex-col items-end space-y-2">
                      <p className="text-md text-end font-bold text-secondary">
                        اسم العائلة{" "}
                      </p>
                      <p className="text-secondary">اسم العائلة</p>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <p className="text-md text-end font-bold text-secondary">
                        الهاتف{" "}
                      </p>
                      <p className="text-secondary">الهاتف</p>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <div className="flex flex-col items-end space-y-2">
                      <p className="text-md text-end font-bold text-secondary">
                        الاسم الاول{" "}
                      </p>
                      <p className=" text-secondary">الاسم الاول </p>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <p className="text-md text-end font-bold text-secondary">
                        بريدك الالكتروني{" "}
                      </p>
                      <p className="text-secondary">بريدك الالكتروني</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-24 w-full bg-white p-4 shadow-lg">
                <div className="flex flex-col items-end space-y-2">
                  <p className="text-md text-end font-bold text-secondary">
                    طلبات خاصة (اختيارى)
                  </p>
                  <p className="text-secondary">طلبات خاصة </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default hotelInfo;
