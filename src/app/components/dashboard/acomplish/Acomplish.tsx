"use client"
import { clear } from 'console'
import React, { useEffect, useState } from 'react'

const Acomplish = () => {
  const [worth, setWorth] = useState(0);
  const [customer, setCustomer] = useState(0);
  const [countries, setCountries] = useState(0);
  const [material, setMaterial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWorth((prev) => (prev < 650 ? prev + 1 : prev));
      setCustomer((prev) => (prev < 300 ? prev + 1 : prev));
      setCountries((prev) => (prev < 60 ? prev + 1 : prev));
      setMaterial((prev) => (prev < 1.5 ? prev + 0.01 : prev));
    }, 10);
    return () => clearInterval(interval);
  }, []);


  return (
    <div>
      <div className="bg-white w-full">
        <div className="bg-[#f9f1fcbe] h-auto w-full">
          <div className="text-center mx-auto p-6 md:p-12 max-w-[90%] sm:max-w-[80%]">
            <h1 className="text-[22px] sm:text-[32px] md:text-[36px] font-semibold">
              Our Accomplishments!
            </h1>
            <p className="text-[14px] sm:text-[16px] mt-3">
              Our global suppliers network of commodities is developed for our customers. By focusing on delivering best-in-class service to our customers, we are always available to help you with your particular needs and offer you a one-stop solution for your commodity brokerage.
            </p>
          </div>
        </div>
        <div className="mt-5 px-4 md:px-0">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-2 border-black rounded-xl shadow-lg shadow-black p-4">
            <div className="border-2 border-black flex flex-col items-center justify-center p-4">
              <h1 className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold text-black">
                ${worth}M+
              </h1>
              <p className="text-[14px] sm:text-[16px] font-semibold text-center">
                worth of goods moved yearly
              </p>
            </div>
            <div className="border-2 border-black flex flex-col items-center justify-center p-4">
              <h1 className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold text-black">
                {customer}+
              </h1>
              <p className="text-[14px] sm:text-[16px] font-semibold text-center">
                Satisfied Customer Base worldwide
              </p>
            </div>
            <div className="border-2 border-black flex flex-col items-center justify-center p-4">
              <h1 className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold text-black">
                {countries}+
              </h1>
              <p className="text-[14px] sm:text-[16px] font-semibold text-center">
                countries connecting to Pakistan
              </p>
            </div>
            <div className="border-2 border-black flex flex-col items-center justify-center p-4">
              <h1 className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold text-black">
                {material.toFixed(1)}M+
              </h1>
              <p className="text-[14px] sm:text-[16px] font-semibold text-center">
                mt of material sourced annually
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mx-auto mt-8 px-4">
          <h1 className="text-[22px] sm:text-[24px] md:text-[26px] font-semibold">
            We are members of
          </h1>
          <div className="flex items-center justify-center border-2 border-black h-auto mt-4 bg-gradient-to-t from-[#EFF3FE] to-white py-4">
            <div className="flex flex-wrap items-center justify-center space-x-4">
              <img src="/PCJCCI.png" alt="PCJCCI" className="h-[80px] w-[80px] sm:h-[120px] sm:w-[120px] md:h-[150px] md:w-[150px] object-contain border-2 border-black" />
              <img src="/FPCCI.png" alt="FPCCI" className="h-[80px] w-[80px] sm:h-[120px] sm:w-[120px] md:h-[150px] md:w-[150px] object-contain border-2 border-black" />
              <img src="/Bureau.png" alt="Bureau" className="h-[80px] w-[80px] sm:h-[120px] sm:w-[120px] md:h-[150px] md:w-[150px] object-contain border-2 border-black" />
              <img src="/image3.png" alt="Member Logo" className="h-[80px] w-[80px] sm:h-[120px] sm:w-[120px] md:h-[150px] md:w-[150px] object-contain border-2 border-black" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Acomplish