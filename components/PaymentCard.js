import React, { useState } from "react";
import Link from "next/link";

const PaymentCard = () => {
  const [paymentConfirmation, setPaymentConfirmation] = useState(false);
  return (
    <div className="flex h-140 w-full flex-col space-y-8 bg-white p-8 px-8 shadow-lg ">
      <h1 className="text-end text-2xl font-bold text-secondary">تحويل بنكي</h1>
      <div className="relative flex h-full w-full flex-col space-y-6">
        <div className="relative flex h-4/6 w-full flex-col space-y-2">
          <p className="text-end font-bold text-darkTint">
            اخترالبنك الذى يناسبك وسنرسل اليك التفاصيل فى ايميل
          </p>
          <ul className="flex flex-col  divide-y-2 divide-basic">
            <li className="flex flex-row items-center justify-end space-x-4 py-4">
              <label className="text-xl font-extrabold text-secondary">
                مصرف الراجحي
              </label>
              <input
                type="radio"
                value=""
                className="h-6 w-6 border-primary bg-primary text-primary focus:ring-primary  "
              />
            </li>
            <li className="flex flex-row items-center justify-end space-x-4 py-4">
              <label className="text-xl font-extrabold text-secondary">
                بنك ساب
              </label>
              <input
                type="radio"
                value=""
                className="h-6 w-6 border-primary bg-primary text-primary focus:ring-primary  "
              />
            </li>
            <li className="flex flex-row items-center justify-end space-x-4 py-4">
              <label className="text-xl font-extrabold text-secondary">
                بنك الجزيرة
              </label>
              <input
                type="radio"
                value=""
                className="h-6 w-6 border-primary bg-primary text-primary focus:ring-primary  "
              />
            </li>
          </ul>
        </div>
        <div className="relative flex h-2/6  w-full flex-col space-y-6">
          <button
            className="flex h-1/2 w-full cursor-pointer items-center justify-center bg-secondary"
            onClick={() => setPaymentConfirmation(true)}
          >
            <h1 className="text-xl font-bold text-tint">التالي</h1>
          </button>
          <Link href="/bookingDetails">
            <div className="flex h-1/2 w-full cursor-pointer items-center justify-center border border-solid border-secondary">
              <h1 className="text-xl font-bold text-secondary">راجع حجزك</h1>
            </div>
          </Link>
        </div>
      </div>
      {paymentConfirmation ? (
        <div className="fixed inset-0 z-40  h-full w-full">
          <div className="fixed inset-0 z-40 flex h-full w-full flex-col items-center justify-center ">
            <div
              className="fixed inset-0 z-40 h-full w-full bg-secondary opacity-50 md:hidden "
              onClick={() => setPaymentConfirmation(false)}
            ></div>
            <div className="fixed z-40 flex h-112 w-5/6 flex-col space-y-6 bg-tint p-4">
              <div className="flex flex-row items-center justify-start">
                <i
                  className={` icon-clear_black_24dp cursor-pointer text-4xl  text-secondary `}
                  onClick={() => setPaymentConfirmation(false)}
                />
              </div>
              <div className="flex flex-col items-center space-y-8">
                <i
                  className={`  icon-check_circle_outline_black_24dp1   text-9xl text-success`}
                />
                <div className="flex flex-col items-center space-y-2">
                  <p className="text-3xl font-semibold text-secondary">
                    لقد تم تأكيد حجز الفندق بنجاح
                  </p>
                  <p className="text-3xl font-semibold text-secondary">
                    شكرا لك على الحجز
                  </p>
                </div>
              </div>
              <Link href="/">
                <div className="flex h-20 w-full cursor-pointer items-center justify-center border border-solid bg-secondary">
                  <h1 className="text-xl font-bold text-tint">تم </h1>
                </div>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default PaymentCard;
