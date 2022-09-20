import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const contact = () => {
  return (
    <section className="">
      <NavBar />
      <div className="flex h-full w-full flex-col md:flex-row pt-20 md:h-208">
        <div className="h-112 w-full bg-tint">
          <iframe className="w-full h-112" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12939.492122698986!2d10.585889550000001!3d35.827590799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8b3a0237010f%3A0x4418fc1f1a3cb73f!2sPolytechnique%20Sousse!5e0!3m2!1sar!2stn!4v1663583094761!5m2!1sar!2stn"></iframe>
        </div>
        <div className="flex h-112 w-full items-center justify-end bg-basic p-4 px-12">
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
