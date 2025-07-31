import React from 'react'
import Image from 'next/image'
import { FiAlignRight } from "react-icons/fi";

const Navbar = () => {
    return (
        <header className="w-full bg-blue-700">
            <div className="container mx-auto">
                <div className="header flex items-center justify-between py-2 px-1">
                    <div className="logo-area flex items-center justify-between gap-5">
                        <div className="logo">
                            <a href="/" className="text-white text-2xl font-bold">
                            <Image src={"/logo.jpg"} alt="Khyber Afghan English Language & Computer Academy" width={100} height={100} className='w-[80px] h-[80px] rounded-full border-2 border-blue-400' />
                            </a>
                        </div>
                        <div className="sidebarButton">
                            <button className="bg-white rounded-md font-bold text-xl text-black p-2 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">    
                                <FiAlignRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
