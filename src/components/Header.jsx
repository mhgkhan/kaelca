"use client"


import React,{useState} from 'react'
import Image from "next/image"
import Link from "next/link"
import { FaUser } from 'react-icons/fa'

const Header = ({ }) => {

    const [openedDailog, setOpenedDailog] = useState(false);




    return (
        <header className="bg-blue-900 text-white dark:bg-slate-950 relative">
            <div className="container mx-auto flex items-end justify-between relative">
               
               {/* logo section  */}
                <div className='Logo flex md:flex-row flex-col  items-end justify-center cursor-pointer'>
                    <Image src="/logo.jpg" alt="KAELACA LOGO" width={80} height={80} className='rounded-full m-1' />
                    <p className='text-2xl underline  p-1 md:block hidden'>KAELACA</p>
                </div>

                {/* nav section  */}
                <div className='user-data flex items-end justify-center m-2 gap-3 cursor-pointer relative' onClick={()=>setOpenedDailog(!openedDailog)}>
                    <p className="text-2xl">Israfeel Khan</p>
                    <span className='text-4xl'><FaUser /></span>
                    <div className={`absolute right-0 top-full bg-blue-900 dark:bg-slate-950 p-2 w-full transition-all duration-200 ${openedDailog?"h-[100px] opacity-100":"h-[0px] opacity-0 overflow-hidden"}`}>
                        <Link href="/profile" className="px-1 py-2 bg-gray-200 hover:bg-white text-black rounded-sm w-full block my-1">Profile</Link>
                        <Link href="/logout" className="px-1 py-2 bg-gray-200 hover:bg-white text-black rounded-sm w-full block my-1">Logout</Link>
                    </div>
                </div>
                
            </div>
        </header>
    )
}

export default Header
