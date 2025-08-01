import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='w-full dark:bg-slate-800  bg-gray-100 dark:text-gray-300 text-gray-700' >
            <div className="container mx-auto">
                <div className="footer flex flex-col items-center justify-center py-5">
                    <div className='logo mb-3'>
                        <a href="/" className="text-white text-2xl font-bold flex flex-col items-center">
                            <img src="/logo.jpg" alt="Khyber Afghan English Language & Computer Academy" className='w-[80px] h-[80px] rounded-full border-2 border-amber-400' />
                        </a>
                        <h3 className='text-lg font-semibold mt-2 text-center'>Khyber Afghan English Language & Computer Academy</h3>
                    </div>

                    <div className="links-1 my-5">
                        <ul className='flex items-center justify-center gap-5 text-xl'>
                            {[{ icon: <FaFacebook />, link: "" }, { icon: <FaTwitter />, link: "" }, { icon: <FaLinkedin />, link: "" }, { icon: <FaGithub />, link: "" }].map((ele, ind) => (
                                <li key={ind}>
                                    <a href={ele.link} className='text-blue-700 hover:text-blue-500 transition duration-300 ease-in-out font-bold  '>{ele.icon}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <p className='text-center text-sm font-semibold'>© {new Date().getFullYear()} Khyber Afghan English Language & Computer Academy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
