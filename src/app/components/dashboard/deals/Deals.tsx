"use client"
import React, { useState } from 'react'

const Deals = () => {
    const [dropdown, setDropdown] = useState(false)
    return (
        <div>
            <div className='bg-[#F2F2F2] h-[400px] w-full border-2 border-black'>
                <div className='text-center mt-3'>
                    <h1 className='text-[37px] font-[600]'>
                        What makes Better Deals Different?
                    </h1>
                    <p className='text-[18px] font-[400]'>
                        Better Deals have 4 professional qualities that makes it standout among others
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Deals