import Link from "next/link";
import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#414141] h-[400px] mt-2">
        <div className="grid grid-cols-4 p-10 gap-6">
          <div className="text-white">
            <h1 className="mb-4 text-[20px] font-sans font-bold">About Us</h1>
            <p>
            Better Deals connects Pakistan with 60-plus countries by acting as an intermediary between buyers and sellers, neutrally observing the best interests of both parties.
            </p>
            <div className="flex gap-4 mt-6 ">
                <div className="w-10 h-10 flex items-center justify-center rounded-full  hover:bg-[#A1BFFF] duration-300 cursor-pointer">
                  <FaFacebookF className=" text-[20px] " />
                </div>
                <div className="w-10 h-10 flex items-center justify-center rounded-full  hover:bg-[#0077B5] duration-300 cursor-pointer">
                  <a href="https://www.linkedin.com/in/muhammad-umar-630083257/" target='_blank'>
                    <FaLinkedinIn className="  text-[20px]" />
                  </a>
                </div>
                <div className="w-10 h-10 flex items-center justify-center rounded-full  hover:bg-[#FA3535] duration-300 cursor-pointer">
                  <a href="
                https://www.youtube.com/@jigsawgaming8677" target='_blank'>
                    <TfiYoutube className="  text-[20px] " />
                  </a>
                </div>
              </div>
          </div>
          <div>
            <h1  className="mb-4 text-white text-[20px] font-sans font-bold">Contact</h1>
              <div className="flex text-white gap-2">
                <h1 className="text-[17px] font-sans-serif font-semibold">Phone #:</h1>
                     <p> +92 42 33203325</p>
              </div>
              <div className="flex text-white gap-2">
                <h1 className="text-[17px] font-sans font-semibold">Email:</h1>
                     <Link href="/">info@betterdeals.bz</Link>
              </div>
          </div>
          <div className="text-white">
            <h1  className="mb-4  text-[20px] font-sans font-bold">Locations</h1>
            <p>Head Office: 286 Shadman 1, off Jail Rd, Lahore, Pakistan 54000 <br /></p>
            <p><br />Karachi: Roshan trade center, Room# 503, Plot#13, 5th Floor, S# 35-p/1, Shaheed Milat Road, Bahadurabad, Karachi, Sindh, Pakistan 07482</p>
          </div>
          <div className="text-white">
            <h1  className="mb-16  text-[20px] font-sans font-bold">Subscribe to our Newsletter</h1>
          
           <input type="text" placeholder="Name" className="mb-3 p-1 pl-3 rounded-sm text-gray-500 outline-none" />
           <input type="text" placeholder="Email"  className="mb-3 p-1 pl-3 rounded-sm text-gray-500 outline-none"/>
           <br />
           <button className="mb-10 p-2 rounded-sm bg-blue-600 hover:bg-blue-700">Subscribe</button>
          <p className="text-[12px] ml-2">Better Deals, PK – Copyright © 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
