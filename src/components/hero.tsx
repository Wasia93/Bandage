import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Herosection = () => {
  return (
    <div className="relative w-full h-[716px]">
      {/* Background Image */}
      <Image 
        src="/hero.png.jpg" 
        alt="herosection" 
        height={747} 
        width={1440} 
        className="w-full object-cover" 
        priority // Adding priority to ensure this image loads faster
        layout="intrinsic" // Ensures image is responsive and maintains aspect ratio
      />
      
      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center sm:items-start p-8 sm:p-12">
        <div className="w-full sm:w-[599px] h-auto gap-[25px] text-center sm:text-left">
          <h5 className="font-montserrat font-bold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] tracking-[0.1px] text-white">
            SUMMER 2020
          </h5>
          <h1 className="font-montserrat font-bold text-[40px] sm:text-[58px] leading-[56px] sm:leading-[80px] tracking-[0.2px] text-white">
            NEW COLLECTION
          </h1>
          <h4 className="font-montserrat font-normal text-[16px] sm:text-[20px] leading-[24px] sm:leading-[30px] tracking-[0.2px] text-white w-full sm:w-[376px]">
            We know how large objects will act, 
            but things on a small scale.
          </h4>
          <Link href="/products">
            <button className="w-full sm:w-auto bg-[#2DC071] py-[12px] sm:px-[40px] px-[30px] rounded-[5px] gap-[10px] text-white font-montserrat">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Herosection;