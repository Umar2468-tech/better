import React from 'react'
import Navbar from "../components/dashboard/navbar/Navbar";

const layout = ({ children }: any) => {
  return (
    <div>
      <div className='bg-[#0C125E]'>
      <Navbar />
        {children}
      </div>
    </div>
  )
}

export default layout