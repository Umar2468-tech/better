import React from 'react'

const page = () => {
  return (
    <div>
        <div className='bg-white h-[500px]'>
            <div className='h-[400px] border border-black'>
                <h1 className='text-3xl font-extrabold text-center justify-center mt-52'>About us</h1>
            </div>
        </div>
        <div className='bg-[#FCFDFF] mt-2 p-16 '>
            <div className='text-center'>
            <h1 className=' text-3xl font-semibold mb-8'> Meet the Team Behind <br />
              <span className='text-[#539FF9]'>Better Deals</span>
            </h1>
            <p>
            Better Deals was established in 1982 as a Ferrous and Non-Ferrous Metals indenting house; headquartered in Lahore. With the passage of time, we have diversified in Energy & Minerals and established liaison office in Karachi. We believe in customer satisfaction and quality assurance and for that we have dedicated inspection teams globally. Along with competitive sourcing, we also provide guidance in services such as banking, customs clearance, logistics and stevedoring. At Better Deals we pride ourselves in the ability to respond quickly and flexibly. We vigorously monitor market fluctuations, trends and news to base our recommendations on, and that is why our team is always one step ahead of the competition.
            </p>
            </div>
       
        <div className='border border-black h-[300px]  text-center text-5xl mt-5'>
               <h1>Video</h1>
        </div>
        <div className='grid grid-cols-2 p-20 gap-4 border border-black'>
            <div className='text-center p-14 shadow-xl rounded-lg hover:shadow-2xl'>
               <h1 className='text-3xl font-semibold mt-12'>Our Mission</h1>
                     <p>To be a global brand in commodity brokerage, built on core values of commitment, integrity and empathy towards the clients, allowing them to concentrate on their growth; leaving sales and procurement needs to us</p>
            </div>
            <div className='text-center p-16 shadow-xl rounded-lg hover:shadow-2xl'>
               <h1 className='text-3xl font-semibold mt-14'>Our Vision</h1>
                     <p>To empower our people to find purpose in their work and develop relationships that are life long and compassionate.</p>
            </div>
        </div>
        </div>
        <div className='bg-white'>
        <div className='bg-[#100536] text-white p-10 w-full'>
           <h1 className='text-3xl text-center font-semibold'>Governance</h1>
        </div>
        <div className='text-center p-16'>
          <button className='bg-[#2B18A5] rounded-xl text-white p-4'>Download Brochure</button>
        </div>
        </div>
    </div>
  )
}

export default page