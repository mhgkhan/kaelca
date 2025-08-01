"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import { FiAlignRight } from "react-icons/fi";
import {GrClose} from "react-icons/gr"; 

import Link from 'next/link';

const Navbar = () => {


    const [openedNav, setOpenNav] = useState(false);


    return (
        <header className="w-full dark:bg-slate-800 bg-white  shadow-md">
            <div className="container mx-auto">
                <div className="header flex md:flex-row flex-col items-center justify-between py-2 px-1">
                    <div className="logo-area flex items-center justify-between gap-5 md:w-auto w-full">
                        <div className="logo">
                            <a href="/" className="text-white text-2xl font-bold">
                                <Image src={"/logo.jpg"} alt="Khyber Afghan English Language & Computer Academy" width={100} height={100} className='w-[80px] h-[80px] rounded-full border-2 border-amber-400' />
                            </a>
                        </div>
                        <div className="sidebarButton md:hidden">
                            <button className="cursor-pointer hover:bg-white rounded-md border-2 border-amber-500 font-bold text-lg dark:text-black text-white p-2 bg-amber-400 hover:text-black transition duration-300 ease-in-out">
                                Login
                            </button>
                        </div>
                        <div className="sidebarButton md:hidden">
                            <button onClick={() => setOpenNav(!openedNav)} className="cursor-pointer hover:bg-white rounded-md border-2 border-amber-500 font-bold text-3xl dark:text-black text-white p-2 bg-amber-400 hover:text-black transition duration-300 ease-in-out">
                                {openedNav ? <GrClose /> : <FiAlignRight />}
                            </button>
                        </div>
                    </div>

                    <nav className={`md:h-auto transition-all duration-300 h-0 overflow-hidden md:mt-0 ${openedNav? "mt-5 h-[200px]":"h-0"} md:w-auto w-full`}>
                        <ul className="flex md:flex-row flex-col items-center md:justify-center justify-start md:w-auto w-full ">
                            {
                                Array.from(["Home", "About", "Courses", "Contact"]).map((ele, ind) => <li key={ind} className="mx-2 md:my-auto my-2 w-full">
                                    <Link href={ele.toLowerCase() == "home" ? "/" : "/" + ele.toLowerCase()} className='md:w-auto w-full md:text-center text-left dark:text-white  text-blue-700 hover:text-blue-500 transition duration-300 ease-in-out md:text-lg font-bold p-2 '>{ele}</Link>
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
