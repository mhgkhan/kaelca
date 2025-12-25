"use client"


import React, { useState } from 'react'
import Link from "next/link"
import { FaUser } from 'react-icons/fa'
import Logo from './Logo'
import { submitForm } from '@/utils/UsableFunctions'

const Header = ({ authorized, name, email }) => {

    const [openedDailog, setOpenedDailog] = useState(false);



    const lotoutUser = async () => {
        try {
            const logoutUser = await submitForm("/api/auth/admin/logout", "DELETE", { 'content-type': 'application/json' }, null);
            if (logoutUser.success) {
                location.href = "/"
            }
            else {
                return;
            }
        } catch (error) {
            return;
        }
    }




    return (
        <header className="bg-blue-900 text-white dark:bg-slate-950 z-50 sticky top-0">
            <div className="container mx-auto flex items-end justify-between relative">

                {/* logo section  */}
                <Logo />

                {/* nav section  */}
                {
                    authorized ? <div className='user-data flex items-end justify-center m-2 gap-3 cursor-pointer relative' onClick={() => setOpenedDailog(!openedDailog)}>
                        <p className="md:text-2xl text-xl">{name}</p>
                        <span className='md:text-4xl text-3xl'><FaUser /></span>
                        <div className={`absolute right-0 top-full z-50 bg-blue-900 dark:bg-slate-950 p-2 w-full transition-all duration-200 ${openedDailog ? "h-[100px] opacity-100" : "h-[0px] opacity-0 overflow-hidden"}`}>
                            <Link href="/profile" className="px-1 py-2 bg-gray-200 hover:bg-white text-black rounded-sm w-full block my-1">Profile</Link>
                            <button onClick={lotoutUser} className="cursor-pointer px-1 py-2 bg-red-600 hover:bg-red-400 text-white rounded-sm w-full block my-1">Logout</button>
                        </div>
                    </div> : <Link href="/" className="px-2 py-1 bg-blue-600 text-white font-bold rounded-md text-xl my-2">Login</Link>
                }

            </div>
        </header>
    )
}

export default Header
