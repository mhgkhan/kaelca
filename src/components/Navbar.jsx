import React from 'react'
import Image from 'next/image'
import { FiAlignRight } from "react-icons/fi";
import Link from 'next/link';

const Navbar = () => {
    return (
        <header className="w-full dark:bg-slate-800 bg-white  shadow-md">
            <div className="container mx-auto">
                <div className="header flex items-center justify-between py-2 px-1">
                    <div className="logo-area flex items-center justify-between gap-5 md:w-auto w-full">
                        <div className="logo">
                            <a href="/" className="text-white text-2xl font-bold">
                                <Image src={"/logo.jpg"} alt="Khyber Afghan English Language & Computer Academy" width={100} height={100} className='w-[80px] h-[80px] rounded-full border-2 border-blue-400' />
                            </a>
                        </div>
                        <div className="sidebarButton md:hidden">
                            <button className="cursor-pointer bg-white rounded-md font-bold text-3xl text-black p-2 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">
                                <FiAlignRight />
                            </button>
                        </div>
                    </div>

                    <nav>
                        <ul className="flex items-center justify-center gap-2">
                            {
                                Array.from(["Home", "About", "Courses", "Contact"]).map((ele, ind) => <li className="mx-2">
                                    <Link href={ele.toLowerCase() == "home" ? "/" : "/" + ele.toLowerCase()} className='dark:text-white  text-blue-700 hover:text-blue-500 transition duration-300 ease-in-out text-lg font-bold p-2 '>{ele}</Link>
                                </li>)
                            }


                        </ul>
                    </nav>


                </div>
            </div>
        </header>
    )
}

export default Navbar
