import React from 'react'
import Carousel from '../carousel/Carousel'

const Aboutus = () => {
  return (
    <div>
      <div className="bg-white bg-opacity-20 backdrop-blur-lg h-auto bg-gradient-to-br from-[#9665df92] via-[#9081fe70] to-[#6e69fd81] w-full shadow-lg  p-8 relative top-4">
        <h1 className="text-center text-[28px] md:text-[36px] text-white mb-4 absolute top-4 left-1/2 transform -translate-x-1/2 font-[600] ">
          About Us
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 h-auto max-w-[1200px] mx-auto border border-white mt-16 bg-gradient-to-br from-[#906AE7] to-[#8178FF] bg-opacity-20 backdrop-blur-lg rounded-md">
          <div className="flex flex-col md:flex-row items-center gap-4 p-4 text-white">
            <img src="/baba.jpg" alt="Founder" className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] rounded-lg object-cover ml-0 md:ml-4" />
            <p className="text-xs sm:text-sm md:text-base leading-relaxed">
              Better Deals was established in Lahore, 1982 by Nadeem Ahmed Siddiqi, Chairman of the Board. The company has built its reputation around bedrock principles on trust, reliability, transparency, and convenience. During the past four decades, Better Deals has grown to become the largest indenting, commodity & metal brokerage firm, having almost 35% share of the total imports of metal and steel in Pakistan.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 p-4">
            <video src="/video.mp4" controls className="w-full sm:w-[80%] md:w-[500px] h-auto object-cover rounded-md" />
            <button className="bg-[#002444] px-4 sm:px-5 py-2 text-white rounded-md mt-4 text-sm sm:text-base border-[#F3958F] border-2 font-bold">
              Learn More
            </button>
          </div>
        </div>

      </div>
    </div>



  )
}

export default Aboutus