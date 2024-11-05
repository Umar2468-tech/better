/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Accomplishments = () => {
  return (
    <div>
        <div className='text-center bg-white p-10'>
        <h1 className='text-[36px] font-semibold'>Our Accomplishments!</h1>
        <p>Our global suppliers network of commodities is developed for our customers. By focusing on delivering best-in-class service to our customers, we <br /> are always available to help you with your particular needs and offer you a one-stop solution for your commodity brokerage.</p>
        
        <div className='grid grid-cols-4 text-center p-10'>
            <div className='font-semibold'>
                <h1 className='text-[40px] '>$ 650 M+</h1>
                <p className='text-[16px]'>worth of goods moved yearly</p>
            </div>
            <div className='font-semibold'>
                <h1 className='text-[40px] '>300 +</h1>
                <p className='text-[16px]'>Satisfied Customer Base worldwide</p>
            </div>
            <div className='font-semibold'>
                <h1 className='text-[40px] '>60 +</h1>
                <p className='text-[16px]'>countries connecting to Pakistan</p>
            </div>
            <div className='font-semibold'>
                <h1 className='text-[40px] '>1.5 M+</h1>
                <p className='text-[16px]'>mt of material sourced annually</p>
            </div>
        </div>
        <h1 className='text-[26px] font-semibold'>We are member of</h1>
        <div className='grid grid-cols-4 p-10 items-center ml-24'>
              <img src="/image3.png" alt="" className='h-44' />
              <img src="/image4.png" alt="" className='h-44' />
              <img src="/image5.png" alt="" className='h-20 mt-auto' />
              <img src="/image6.png" alt="" className='h-44' />
        </div>
        </div>

    </div>
  )
}

export default Accomplishments