// components/dashboard/Products.tsx
import React from 'react';
import Carousel from '../carousel/Carousel';

const Products = () => {
    return (
        <div className="mt-8 md:mt-12 text-center flex flex-col items-center">
            <h1 className="text-[28px] sm:text-[32px] md:text-[38px] font-bold text-[#E67CC0]">
                Products we deal in
            </h1>
            <p className="text-white mt-4 text-[14px] sm:text-[16px] md:text-[18px] max-w-[90%] sm:max-w-[80%] md:max-w-[70%] mx-auto leading-relaxed">
                Better Deals was established in 1982 as a Ferrous and Non-Ferrous Metals indenting house; With the passage of time, we have diversified in Energy, Minerals, and general commodities.
            </p>
            <div className="mt-8 md:mt-10 w-full">
                <Carousel />
            </div>
            <div className="flex justify-center mb-8 md:mb-10 mt-5">
                <button className="bg-[#002444] px-4 sm:px-5 py-2 text-white rounded-md text-[14px] sm:text-[16px] border-[#F3958F] border-2 font-bold hover:bg-[#F3958F] transition duration-300">
                    Explore More
                </button>
            </div>
        </div>

    );
};

export default Products;
