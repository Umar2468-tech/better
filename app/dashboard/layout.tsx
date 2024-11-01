import React from 'react'
import Navbar from '../components/dashboard/navbar/Navbar'
import Footer from '../components/dashboard/footer/Footer'
import Aboutus from '../components/dashboard/aboutus/Aboutus'

const layout = ({children}:any) => {
  return (
    <div>
      
      <div>
        <Navbar/>
        {children}
        <Aboutus/>
        <Footer/>
      </div>
    </div>
  )
}

export default layout