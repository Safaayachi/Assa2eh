import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Socials = () => {
  return (
    <div>
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
    </div>
  )
}

export default Socials