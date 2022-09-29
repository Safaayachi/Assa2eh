import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PaymentButton from "../components/PaymentButton";

const paymentPage = () => {
  return (
    <div className="relative flex h-full w-full flex-col bg-shade">
      <NavBar />
      <div className="flex h-full w-full flex-col space-y-12 px-12 pt-36">
        <div className="flex h-72 w-full flex-col space-y-6 bg-white p-4 px-8 shadow-lg ">
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

        <div className="flex h-140 w-full flex-col space-y-8 bg-white p-8 px-8 shadow-lg ">
          <h1 className="text-end text-2xl font-bold text-secondary">
            تحويل بنكي
          </h1>
          <div className="relative flex h-full w-full flex-col space-y-6">
            <div className="relative flex h-4/6 w-full flex-col space-y-2">
              <p className="text-end text-darkTint font-bold">اخترالبنك الذى يناسبك وسنرسل اليك التفاصيل فى ايميل</p>
              <ul className="flex flex-col  divide-y-2 divide-basic">
                <li className="py-4 flex flex-row space-x-4 items-center justify-end">
                  <label className="text-secondary text-xl font-extrabold">مصرف الراجحي</label>
                  <input
                    type="radio"
                    value=""
                    className="h-6 w-6 border-primary bg-primary text-primary focus:ring-primary  "
                  />
                </li>
                <li className="py-4 flex flex-row space-x-4 items-center justify-end"><label className="text-secondary text-xl font-extrabold">بنك ساب</label>
                  <input
                    type="radio"
                    value=""
                    className="h-6 w-6 border-primary bg-primary text-primary focus:ring-primary  "
                  /></li>
                <li className="py-4 flex flex-row space-x-4 items-center justify-end"><label className="text-secondary text-xl font-extrabold">بنك الجزيرة</label>
                  <input
                    type="radio"
                    value=""
                    className="h-6 w-6 border-primary bg-primary text-primary focus:ring-primary  "
                  /></li>
              </ul>
            </div>
            <div className="relative flex h-2/6  w-full flex-col space-y-6">
              <PaymentButton/>
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
        <div></div>
      </div>
      <Footer />
    </div>
  );
};

export default paymentPage;
