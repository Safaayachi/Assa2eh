import React from "react";
import Link from "next/link";

const SignUpForm = () => {
  return (
    <div className=" w-full h-full flex-col px-4 space-y-4 justify-center items-center">
      <form className="flex-col space-y-6 justify-center items-center">
        <div className="relative flex justify-end items-center">
          <input
            type="text"
            name="email"
            placeholder="الاسم الاول"
            className="w-full h-8 text-end py-5 px-8 relative border border-shade"
          />
          <i
            className={`icon-person_black_24dp2 text-darkTint text-md leading-3 absolute px-2  `}
          />
        </div>
        <div className="relative flex justify-end items-center">
          <input
            type="text"
            name="email"
            placeholder="اسم العائلة"
            className="w-full h-8 text-end py-5 px-8 relative border border-shade"
          />
          <i
            className={`icon-person_black_24dp2 text-darkTint text-md leading-3 absolute px-2  `}
          />
        </div>
        <div className="relative flex justify-end items-center">
          <input
            type="email"
            name="email"
            placeholder="البريد الالكتروني"
            className="w-full h-8 text-end py-5 px-8 relative border border-shade"
          />
          <i
            className={`icon-email_black_24dp-3 text-darkTint text-md leading-3 absolute px-2  `}
          />
        </div>
        <div className="relative flex justify-end items-center">
          <input
            type="password"
            name="email"
            placeholder="كلمة المرور"
            className="w-full h-8 text-end py-5 px-8 relative border border-shade"
          />
          <i
            className={`icon-lock_black_24dp1 text-darkTint text-md leading-3 absolute px-2  `}
          />
        </div>
        <div className="relative flex justify-end items-center">
          <input
            type="password"
            name="email"
            placeholder="تأكيد كلمة المرور"
            className="w-full h-8 text-end py-5 px-8 relative border border-shade"
          />
          <i
            className={`icon-lock_black_24dp1 text-darkTint text-md leading-3 absolute px-2  `}
          />
        </div>
        <button
          className="w-full h-10 bg-primary text-center text-tint text-sm font-semibold"
          type="submit "
        >
          
          تسجيل
        </button>
      </form>
      <p className="text-xs font-bold text-end px-2 text-secondary">عضو فعلا ؟ <span className="text-primary"><Link href="/">انشاء حساب</Link></span></p>
    </div>
  );
};

export default SignUpForm;
