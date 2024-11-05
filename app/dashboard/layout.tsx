/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Navbar from '../components/dashboard/navbar/Navbar'
import Footer from '../components/dashboard/footer/Footer'


const layout = ({children}:any) => {
  return (
    <div>
      
      <div>
        <Navbar/>
        <div className='bg-[#2B18A5]'>
        
        {children}
        <Footer/>

        </div>
      </div>
    </div>
  )
}

export default layout