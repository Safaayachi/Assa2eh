import React from "react";
import Link from "next/link";
import Image from "next/image";
import Socials from "./Socials";
import signUp from "../pages/signUp";

const SignInForm = () => {
  return (
    <div className="h-full w-full bg-tint p-4 md:my-52 md:h-152 md:w-1/5 md:p-4 md:py-12 ">
      <div className="flex-col justify-center space-y-3">
        <div className="mt-1 mb-6 flex w-full space-x-32">
          <Link href="/">
            <i
              className={`icon-clear_black_24dp hidden text-2xl leading-3 text-secondary md:flex	`}
            />
          </Link>
          <h1 className="w-full px-4 text-right text-2xl font-bold text-secondary">
            تسجيل الدخول
          </h1>
        </div>

        <form className="flex-col space-y-4">
          <div className="relative flex items-center justify-end">
            <input
              type="email"
              name="email"
              placeholder="البريد الالكتروني"
              className="h-8 w-full border border-shade py-5 px-8 text-end"
            />
            <i
              className={`icon-email_black_24dp-3 text-md absolute px-2 leading-3 text-darkTint `}
            />
          </div>
          <div className="relative flex items-center justify-end">
            <input
              type="password"
              name="email"
              placeholder="كلمة المرور"
              className="relative h-8 w-full border border-shade py-5 px-8 text-end"
            />
            <i
              className={`icon-lock_black_24dp1 text-md absolute px-2 leading-3 text-darkTint  `}
            />
          </div>
          <div className="flex w-full justify-center space-x-24">
            <Link href="/">
              <p className="text-xs font-bold text-secondary">
                هل نسيت كلمة المرور؟
              </p>
            </Link>
            <Link href="/signUp">
              <p className="text-xs font-bold text-secondary">
                انشاء حساب الأن
              </p>
            </Link>
          </div>
          <button
            className="h-10 w-full bg-primary text-center text-sm font-semibold text-tint"
            type="submit "
          >
            {" "}
            تسجيل الدخول
          </button>
        </form>
      </div>
      <div className="flex justify-center p-4">
        <p className="text-xs font-semibold text-darkTint">أو تسجيل الدخول ب</p>
      </div>
      <Socials />
      <div className="w-full">
        <p className="mt-4 text-center text-xs font-bold">
          تسجيلك الدخول يعني موافقتك على{" "}
          <span className="text-primary">
            <Link href="/">شروط الاستخدام</Link>
          </span>{" "}
          و{" "}
          <span className="text-primary">
            <Link href="/">سياسة الخصوصية </Link>
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
