import React from "react";
import Link from "next/link";
import BookingHotelCard from "../components/BookingHotelCard";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const bookingConfirmation = () => {
  return (
    <div className="relative flex h-full w-full flex-col  bg-shade">
      <NavBar />
      <div className="flex h-full w-full flex-col p-12  md:p-20 md:flex-row">
        <div className="hidden p-20 md:flex md:h-full md:w-2/5 pt-36">
          <div className="hidden h-72 w-full flex-col space-y-6 bg-white p-4 px-8 shadow-lg md:flex ">
            <h1 className="text-end text-2xl font-bold text-secondary">
              معلومات الحجز
            </h1>
            <div className="flex flex-col space-y-4 divide-y-2">
              <div className="flex flex-row justify-between py-2">
                <div className="flex flex-row space-x-1">
                  <p className="text-xl font-bold">ريال</p>
                  <p className="text-xl font-bold">1428.00</p>
                </div>
                <p className="text-lg text-darkTint">غرف*4ليالي </p>
              </div>
              <div className="flex flex-row justify-between py-2">
                <div className="flex flex-row space-x-1">
                  <p className="text-xl font-bold">ريال</p>
                  <p className="text-xl font-bold">252.00</p>
                </div>
                <p className="text-lg text-darkTint">ضريبة القيمة المضافة</p>
              </div>
              <div className="flex flex-row justify-between py-8">
                <div className="flex flex-row space-x-1">
                  <p className="text-4xl font-bold text-primary">ريال</p>
                  <p className="text-4xl font-bold text-primary">1680.00</p>
                </div>
                <p className="text-3xl font-semibold text-secondary">المجموع</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-full w-full flex-col space-y-12 px-12 pt-36 md:w-3/5">
          <BookingHotelCard />
          <div className="flex h-72 w-full flex-col space-y-6 bg-white p-4 px-8 shadow-lg md:hidden ">
            <h1 className="text-end text-2xl font-bold text-secondary">
              معلومات الحجز
            </h1>
            <div className="flex flex-col space-y-4 divide-y-2">
              <div className="flex flex-row justify-between py-2">
                <div className="flex flex-row space-x-1">
                  <p className="text-xl font-bold">ريال</p>
                  <p className="text-xl font-bold">1428.00</p>
                </div>
                <p className="text-lg text-darkTint">غرف*4ليالي </p>
              </div>
              <div className="flex flex-row justify-between py-2">
                <div className="flex flex-row space-x-1">
                  <p className="text-xl font-bold">ريال</p>
                  <p className="text-xl font-bold">252.00</p>
                </div>
                <p className="text-lg text-darkTint">ضريبة القيمة المضافة</p>
              </div>
              <div className="flex flex-row justify-between py-8">
                <div className="flex flex-row space-x-1">
                  <p className="text-4xl font-bold text-primary">ريال</p>
                  <p className="text-4xl font-bold text-primary">1680.00</p>
                </div>
                <p className="text-3xl font-semibold text-secondary">المجموع</p>
              </div>
            </div>
          </div>
          <div className="flex h-112 w-full flex-col space-y-8 bg-white p-8 px-8 shadow-lg ">
            <h1 className="text-end text-2xl font-bold text-secondary">
              بيانات الضيف{" "}
            </h1>
            <div className="relative flex h-full w-full flex-col space-y-4">
              <input
                className="h-1/4 w-full border p-4 text-end "
                type="text"
                placeholder="الاسم الاول"
              ></input>
              <input
                className="h-1/4 w-full border p-4 text-end "
                type="text"
                placeholder="اسم العائلة"
              ></input>
              <input
                className="h-1/4 w-full border p-4 text-end "
                type="text"
                placeholder="بريدك الإلكتروني"
              ></input>
              <input
                className="h-1/4 w-full border p-4 text-end "
                type="text"
                placeholder="الهاتف"
              ></input>
            </div>
          </div>
          <div className="flex h-152 w-full flex-col space-y-8 bg-white p-8 px-8 shadow-lg ">
            <h1 className="text-end text-2xl font-bold text-secondary">
              بيانات الضيف{" "}
            </h1>
            <div className="relative flex h-full w-full flex-col space-y-6">
              <div className="relative flex h-4/6 w-full flex-col space-y-2">
                <textarea
                  className=" h-4/5 w-full border text-end"
                  placeholder="الرجاء كتابة طلباتك باللغة الانجليزية"
                ></textarea>
                <div className="h-1/5 w-full text-end">
                  <p className="text-sm font-bold text-danger">
                    لا يمكن ضمان ضمان الطلبات الخاصة - لكن سنبذل قصارى جهدنا
                    لتلبية احتياجتك
                  </p>
                </div>
              </div>
              <div className="relative flex h-2/6  w-full flex-col space-y-6">
                <Link href="/paymentPage">
                  <div className="flex h-1/2 w-full cursor-pointer items-center justify-center bg-secondary">
                    <h1 className="text-xl font-bold text-tint">انتقل للدفع</h1>
                  </div>
                </Link>
                <Link href="/bookingDetails">
                  <div className="flex h-1/2 w-full cursor-pointer items-center justify-center border border-solid border-secondary">
                    <h1 className="text-xl font-bold text-secondary">
                      راجع حجزك
                    </h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default bookingConfirmation;
