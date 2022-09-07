import React from "react";
import Image from "next/image";

const MailBox = () => {
  return (
    <div className="relative h-72 w-full md:h-96">
      <Image
        src="/images/footerCover.jpg"
        alt="hero-cover"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute w-full h-72 bg-secondary opacity-60 md:w-1/2 md:h-96"></div>

      <div className="absolute p-14  flex-col justify-center items-center  space-y-8 md:py-24 md:px-36">
        <div>
          <h1 className="text-2xl text-tint font-bold text-center">
            اشترك فى قائمتنا البريدية
          </h1>
          <h2 className="text-lg text-tint text-center ">
            افضل العروض فقط تصل إلى بريدك الالكتروني
          </h2>
        </div>
        <div>
          <form className="flex space-x-2 justify-center">
            <button
              className="h-12 w-1/3 bg-tint font-bold md:h-16"
              type="submit"
            >
              اشترك
            </button>
            <input
              className="bg-transparent border h-12 w-3/4 border-tint text-center p-2 focus:outline-none md:w-96 md:h-16"
              type="email"
              name="mailbox"
              placeholder="البريد الالكتروني"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MailBox;
