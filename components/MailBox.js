import React from "react";
import Image from "next/image";

const MailBox = () => {
  return (
    <div className="relative h-72 w-full md:h-96 flex justify-center items-center md:justify-end ">
      <Image
        src="/images/footerCover.jpg"
        alt="hero-cover"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute h-72 w-full bg-secondary opacity-60 md:h-96 md:w-1/2"></div>

      <div className="absolute flex-col  items-center justify-center space-y-8  p-14 md:py-24 md:px-36">
        <div>
          <h1 className="text-center text-2xl font-bold text-tint">
            اشترك فى قائمتنا البريدية
          </h1>
          <h2 className="text-center text-lg text-tint ">
            افضل العروض فقط تصل إلى بريدك الالكتروني
          </h2>
        </div>
        <div>
          <form className="flex justify-center space-x-2">
            <button
              className="h-12 w-1/3 bg-tint font-bold md:h-16"
              type="submit"
            >
              اشترك
            </button>
            <input
              className="bg-transparent h-12 w-3/4 border border-tint p-2 text-center focus:outline-none md:h-16 md:w-96"
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
