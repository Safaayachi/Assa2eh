import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const contact = () => {
  return (
    <section className="">
      <NavBar />
      <div className="h-full w-full flex-col md:flex">
        <div className="h-112 w-full bg-tint"></div>
        <div className="h-112 w-full flex justify-end items-center bg-basic p-4 px-12">
          <div className="flex-col space-y-12">
            <div className="flex-col space-y-4">
              <h1 className="text-end text-4xl font-bold text-secondary">
                اتصل بنا
              </h1>
              <p className="text-end text-secondary ">
                أتحتاج الى مساعدة ؟ نحن هنا من أجلك
              </p>
            </div>
            <div className="flex-col space-y-6">
              <div className="flex justify-end space-x-4">
                <p className="text-xl font-semibold text-darkTint">العنوان </p>
                <i
                  className={`icon-place_black_24dp1   text-3xl text-primary`}
                />
              </div>
              <div className="flex justify-end space-x-4">
                <p className="text-xl font-semibold text-darkTint">
                  Booking@Saudia.com
                </p>
                <i
                  className={`icon-email_black_24dp-3   text-3xl text-primary`}
                />
              </div>
              <div className="flex justify-end space-x-4">
                <p className="text-xl font-semibold text-darkTint">
                  123 123 4567 890
                </p>
                <i className={`icon-call_black_24dp2  text-3xl text-primary`} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default contact;
