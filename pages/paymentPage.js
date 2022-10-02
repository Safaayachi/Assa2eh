import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import PaymentCard from "../components/PaymentCard";

const paymentPage = () => {
  return (
    <div className=" flex h-full w-full flex-col bg-shade">
      <NavBar />
      <div className=" relative flex h-full w-full flex-col space-y-12 px-12 pt-36 md:py-56 p-12 md:space-y-0 md:flex-row md:px-36">
        
        <div className="h-full w-full  p-6 md:w-2/5">
        <div className="flex h-72 w-full flex-col space-y-6 bg-white  px-8 shadow-lg  ">
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
        
        <div className="h-full w-full  p-6 md:w-3/5">
        <PaymentCard />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default paymentPage;
