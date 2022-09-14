import React from "react";
import Image from "next/image";
import Link from "next/link";

const Socials = () => {
  return (
    <div>
      <Link href="/">
        <div className="flex h-10 w-full cursor-pointer items-center justify-center space-x-2 border">
          <div className="relative h-6 w-6 ">
            <Image
              src="/images/google.svg"
              layout="fill"
              objectFit="cover"
              alt="google-signup"
            />
          </div>
          <p className="text-xs font-bold">Google</p>
        </div>
      </Link>
      <div className="mt-4 flex space-x-4">
        <Link href="/">
          <div className="flex h-10 w-1/2 cursor-pointer items-center justify-center space-x-2 border">
            <div className="relative h-6 w-5">
              <Image
                src="/images/apple.svg"
                layout="fill"
                objectFit="cover"
                alt="apple-signup"
              />
            </div>

            <p className="text-center text-xs  font-bold">Apple</p>
          </div>
        </Link>
        <Link href="/">
          <div className="flex h-10 w-1/2 cursor-pointer items-center justify-center space-x-2 border">
            <div className="relative h-6 w-6">
              <Image
                src="/images/facebook-icon.svg"
                layout="fill"
                objectFit="cover"
                alt="facebook-signup"
              />
            </div>
            <p className="text-xs font-bold">Facebook</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Socials;
