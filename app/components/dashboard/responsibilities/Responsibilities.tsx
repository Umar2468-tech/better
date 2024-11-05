/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Responsibilities = () => {
  return (
    <div>
        <div className='bg-[#F7F7F9] p-10'>
            <div className='bg-[#09081C] p-10 rounded-md text-white'>
                <div className='text-center'>
                <h1 className='text-4xl font-semibold'>Our Social Responsibilities</h1>
                <p>We, at Better Deals, aim not only to be a leading brokerage firm of pakistan but also to give our best <br /> to impact the community positively.</p>
                </div>
                <div className='grid grid-cols-3  gap-10 mt-14'>
                   <div>
                    <img src="/image7.jpg" alt="" className='rounded-md mb-10' />
                    <p>Education is the basic right of every child. Better Deals is doing its little part by educating more than 250 children in the outskirts of Lahore under the umbrella of “Noor School”.</p>
                   </div>
                   <div>
                   <img src="/image8.jpg" alt="" className='rounded-md mb-10' />
                   <p>Cancer is the second leading cause of death after heart disease in Pakistan.Therefore, we have collaborated with “Cancer Care Hospital and Research Centre” to provide free of cost comprehensive cancer treatment to all patients</p>
                   </div>
                   <div>
                   <img src="/image9.jpg" alt="" className='rounded-md mb-10' />
                   <p>We have banned plastic bags in workplace and minimize excessive printing of paper. We have successfully eliminated plastic bags from our surrounding and aim to reduce paper usage by ninety percent before 2020.</p>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Responsibilities