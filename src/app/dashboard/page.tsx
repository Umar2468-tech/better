import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { TfiYoutube } from 'react-icons/tfi';
import Aboutus from '../components/dashboard/aboutus/Aboutus';
import Products from '../components/dashboard/products/Products';
import Acomplish from '../components/dashboard/acomplish/Acomplish';
import Deals from '../components/dashboard/deals/Deals';

const Page = () => {
  return (
    <div>
      <div className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[650px] w-full pt-20 sm:pt-16 md:pt-0">
          <div className="flex flex-col justify-center p-6 md:p-12 relative">
            <div className="p-4 md:p-8 leading-7 md:leading-9">
              <h1 className="text-[28px] md:text-[38px] text-black font-semibold">
                Pakistan's leading
              </h1>
              <h1 className="text-[28px] md:text-[38px] text-[#635BFF] font-medium">
                Commodity Brokerage
              </h1>
              <h1 className="text-[28px] md:text-[38px] text-black font-semibold mb-4 md:mb-6">
                House!
              </h1>
              <p className="text-[14px] md:text-[16px] leading-relaxed mb-4">
                Established in 1982 as a Ferrous and Non-Ferrous Metals indenting house, Better Deals has diversified into Coal, Grains, and Minerals. We connect Sellers from 60 different countries to over 300 customers in Pakistan for imports and from Pakistan to the world for exports.
              </p>
              <div className="flex gap-3 md:gap-4 mt-4 md:mt-6">
                <div className="w-8 md:w-10 h-8 md:h-10 flex items-center justify-center rounded-full bg-white hover:bg-[#A1BFFF] duration-300 cursor-pointer">
                  <FaFacebookF className="text-[12px] md:text-[14px]" />
                </div>
                <div className="w-8 md:w-10 h-8 md:h-10 flex items-center justify-center rounded-full bg-white hover:bg-[#0077B5] duration-300 cursor-pointer">
                  <a href="https://www.linkedin.com/in/muhammad-umar-630083257/" target='_blank'>
                    <FaLinkedinIn className="text-[12px] md:text-[14px]" />
                  </a>
                </div>
                <div className="w-8 md:w-10 h-8 md:h-10 flex items-center justify-center rounded-full bg-white hover:bg-[#FA3535] duration-300 cursor-pointer">
                  <a href="https://www.youtube.com/@jigsawgaming8677" target='_blank'>
                    <TfiYoutube className="text-[12px] md:text-[14px]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-8 md:mt-0">
            <img src="/image2.png" alt="Commodity Brokerage" className="h-[250px] md:h-[400px]" />
          </div>
        </div>
      </div>
      <div>
        {/* start components */}
        <Aboutus />
        <Products />
        <Acomplish />
        <Deals />
        {/* end components files */}
      </div>
    </div>

  );
}

export default Page;
