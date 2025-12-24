import React from 'react'
import Link from "next/link"
import Image from "next/image"



const Logo = () => {
    return (
        <Link href="/" className='Logo flex md:flex-row flex-col  items-end justify-center cursor-pointer'>
            <Image src="/logo.jpg" alt="KAELACA LOGO" width={80} height={80} className='rounded-full m-1' />
            <p className='text-2xl underline  p-1 md:block hidden'>KAELACA</p>
        </Link>
    )
}

export default Logo
