import React from 'react'

const Aboutus = () => {
  return (
    <div>
      <div className="mb-4 w-full ">
        <div className="bg-white bg-opacity-20 backdrop-blur-lg h-[600px] bg-gradient-to-br from-[#9665df92] via-[#9081fe70] to-[#6e69fd81] w-full shadow-lg  p-8 relative top-4">
          <h1 className="text-center text-[36px] text-white mb-4 absolute top-4 left-1/2 transform -translate-x-1/2 font-[600] ">
            About Us
          </h1>
          <div className="grid grid-cols-2 h-[400px] w-[1100px] mx-auto border-white border mt-16 bg-white bg-gradient-to-br from-[#906AE7] to-[#8178FF] bg-opacity-20 backdrop-blur-lg rounded-md">
            <div className="flex items-center gap-4 ml-5 text-white p-4">
              <img src="/baba.jpg" alt="Founder" className="h-[120px] rounded-lg object-cover" />
              <p className="text-sm leading-relaxed">
                Better Deals was established in Lahore, 1982 by Nadeem Ahmed Siddiqi, Chairman of the Board. The company has built its reputation around bedrock principles on trust, reliability, transparency, and convenience. During the past four decades, Better Deals has grown to become the largest indenting, commodity & metal brokerage firm, having almost 35% share of the total imports of metal and steel in Pakistan.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <video src="/video.mp4" controls className="h-[250px] w-[500px] object-cover rounded-md" />
              <button className="bg-[#002444] px-5 py-2 text-white rounded-md mt-4 text-[16px] border-[#F3958F] border-2 font-[700]">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>



  )
}

export default Aboutus