import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const list = [
        {
            id:1,
            text : "Home"
        },
        {
            id:2,
            text : "Product"
        },
        {
            id:3,
            text : <Link href="/dashboard/aboutus">Aboutus</Link>
        },
        {
            id:4,
            text : "CSR"
        },
        {
            id:5,
            text : "Contact"
        },
        {
            id:6,
            text : "Careers"
        },

    ]
  return (
    <div className="fixed w-full top-0 z-50">
    <div className="bg-white bg-opacity-40 backdrop-blur-md ">
        <div className="max-w-screen-2xl mx-auto  flex items-center justify-between px-6 py-4">
            <img src="/image.png" alt="Logo" className="h-10" />

            <div>
                <ul className="flex items-center gap-7">
                    {list.map((item) => (
                        <li key={item.id} className="text-black text-[14px] font-[600] hover:text-gray-800 transition duration-200">
                            {item.text}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex items-center gap-4">
                <button className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-200">
                    Search
                </button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200 animate-bounce">
                    Get a Quote
                </button>
            </div>
        </div>
    </div>
</div>

  )
}

export default Navbar