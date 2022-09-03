import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='flex-row md:flex w-full h-4/5'>
        <div className='w-full h-1/2 text-center md:w-1/2 md:h-full '>
        <h1 className='text-5xl inline-block text-navyBlue font-bold md:hidden'><span className='text-gold  '>الاختلاف</span> نخدمكم<br/> باحتراف </h1>
        </div>
        <div className='w-full h-1/2 flex-row  md:w-1/2  md:h-full  bg-paleGray lg:text-8xl md:text-6xl  text-center'>
           
           <h1 className='hidden  md:inline-block md:text-navyBlue md:font-bold '><span className='text-gold  '>الاختلاف</span> نخدمكم<br/> باحتراف </h1>
           
           
           
        </div>
        
    </div>
  )
}

export default Header