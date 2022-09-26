import React from "react";
import SignUpForm from "../components/SignUpForm";
import Socials from "../components/Socials";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Link from "next/link";

const signUp = () => {
  return (
    <section className="flex h-full w-full flex-col md:absolute md:h-screen ">
      <NavBar />
      <div className=" flex h-full w-full pb-16 pt-32 flex-col-reverse md:flex-row md:p-12 md:pt-36 ">
        <div className=" h-full w-full px-8  md:h-full md:w-1/2 md:p-24">
          <div className="md:w-3/2 flex h-full w-full flex-col items-end space-y-8  md:pl-36 md:pr-6">
            <h1 className="text-md font-bold">أو استخدم إحدى هذه الخيارات </h1>
            <Socials />
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
        <div className="flex h-full w-full flex-col space-y-4 mb-16  md:h-full md:w-1/2 md:p-12">
          <h1 className="w-full px-16 text-end text-2xl font-bold md:w-2/3">
            انشاء حساب
          </h1>
          <div className="h-full w-full  px-8 md:w-2/3  md:px-12">
            <SignUpForm />
          </div>
        </div>
      </div>

      <div className="hidden w-full md:flex">
        <Footer className="hidden w-full md:flex" />
      </div>
    </section>
  );
};

export default signUp;
