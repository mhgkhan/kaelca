"use client"


import React,{useState} from 'react'
import Link from "next/link"
import { FaUser } from 'react-icons/fa'
import Logo from './Logo'

const Header = ({ }) => {

    const [openedDailog, setOpenedDailog] = useState(false);




    return (
        <header className="bg-blue-900 text-white dark:bg-slate-950 z-50 sticky top-1">
            <div className="container mx-auto flex items-end justify-between relative">
               
               {/* logo section  */}
               <Logo />

                {/* nav section  */}
                <div className='user-data flex items-end justify-center m-2 gap-3 cursor-pointer relative' onClick={()=>setOpenedDailog(!openedDailog)}>
                    <p className="md:text-2xl text-xl">Israfeel Khan</p>
                    <span className='md:text-4xl text-3xl'><FaUser /></span>
                    <div className={`absolute right-0 top-full z-50 bg-blue-900 dark:bg-slate-950 p-2 w-full transition-all duration-200 ${openedDailog?"h-[100px] opacity-100":"h-[0px] opacity-0 overflow-hidden"}`}>
                        <Link href="/profile" className="px-1 py-2 bg-gray-200 hover:bg-white text-black rounded-sm w-full block my-1">Profile</Link>
                        <Link href="/logout" className="px-1 py-2 bg-gray-200 hover:bg-white text-black rounded-sm w-full block my-1">Logout</Link>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header
