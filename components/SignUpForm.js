import React from "react";
import Link from "next/link";
import Image from "next/image";

const SignUpForm = () => {
  return (
    <div className=" bg-tint w-full h-full p-4 md:w-1/4 md:h-124 md:m-48 md:p-4">
      <div className="flex-col justify-center space-y-3">
        <div className="flex space-x-32 mt-1 w-full mb-6">
          <Link href="/">
            <i
              className={`icon-clear_black_24dp hidden text-secondary text-2xl leading-3 md:flex	`}
            />
          </Link>
          <h1 className="font-bold text-2xl text-secondary w-full">
            تسجيل الدخول
          </h1>
        </div>

        <form className="flex-col space-y-4">
          <div className="relative flex justify-end items-center">
            <input
              type="email"
              name="email"
              placeholder="البريد الالكتروني"
              className="w-full h-8 text-end py-5 px-8 border border-shade"
            />
            <i
              className={`icon-email_black_24dp-3 text-darkTint text-md leading-3 absolute px-2 `}
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
          <div className="flex w-full space-x-24">
            <p className="text-xs font-bold text-secondary">
              هل نسيت كلمة المرور؟
            </p>
            <p className="text-xs font-bold text-secondary">انشاء حساب الأن</p>
          </div>
          <button
            className="w-full h-10 bg-primary text-center text-tint text-sm font-semibold"
            type="submit "
          >
            {" "}
            تسجيل الدخول
          </button>
        </form>
      </div>
      <div className="flex justify-center p-4">
        <p className="text-xs text-darkTint font-semibold">أو تسجيل الدخول ب</p>
      </div>
      <div className="flex justify-center items-center w-full h-10 border space-x-2">
        <div className="relative h-6 w-6">
          <Link href="/">
            <Image
              src="/images/google.svg"
              layout="fill"
              objectFit="cover"
              alt="google-signup"
            />
          </Link>
        </div>
        <p className="text-xs font-bold">Google</p>
      </div>
      <div className="flex space-x-4 mt-4">
        <div className="flex justify-center items-center w-1/2 h-10 border space-x-2">
          <div className="relative h-6 w-5">
            <Link href="/">
              <Image
                src="/images/apple.svg"
                layout="fill"
                objectFit="cover"
                alt="apple-signup"
              />
            </Link>
          </div>
          <p className="text-xs font-bold  text-center">Apple</p>
        </div>
        <div className="flex justify-center items-center w-1/2 h-10 border space-x-2">
          <div className="relative h-6 w-6">
            <Link href="/">
              <Image
                src="/images/facebook-icon.svg"
                layout="fill"
                objectFit="cover"
                alt="facebook-signup"
              />
            </Link>
          </div>
          <p className="text-xs font-bold">Facebook</p>
        </div>
      </div>
      <div className="w-full">
        <p className="text-xs font-bold text-center mt-4">
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

export default SignUpForm;
