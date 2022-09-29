import React from "react";
import Image from "next/image";

const HotelGallery = () => {
  return (
    <div className="relative h-184 w-full shadow-xl">
      <div className="relative h-2/5 w-full ">
        <Image
          src="/images/hotel3.jpg"
          alt="hero-cover"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative h-3/5 w-full px-8 pb-4 pt-8">
        <div className="flex h-1/6 w-full items-center justify-end  px-6">
          <h1 className="text-2xl font-bold text-secondary">وصف الفندق</h1>
        </div>

        <div className="h-4/6 w-full p-4 px-6">
          <p className="text-2xl text-end text-secondary">
            يقع فندق بارك إن باي راديسون مكة النسيم في مجمع الراجحي في حي النسيم
            بمدينة مكة المكرمة وعلى بعد 20 متر من جامع الراجحي، كما يمكن للضيوف
            الاستمتاع بالمطعم الموجود في الموقع، ويوفر هذا الفندق خدمة نقل
            مجانية ذهابًا وإيابًا إلى المسجد الحرام.
          </p>
        </div>
        <div className="h-1/6 flex justify-center items-center w-full">
          <h1 className="text-xl text-primary font-semibold underline cursor-pointer">عرض المزيد</h1>
        </div>
      </div>
    </div>
  );
};

export default HotelGallery;
