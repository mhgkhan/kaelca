import React from 'react'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white dark:bg-slate-950 relative">
        <div className="container mx-auto flex flex-col gap-5 items-center justify-center p-4">
            <Logo />
            <p className="text-center">&copy; {new Date().getFullYear()} KHYBER AGHAN ENGLISH LANGUAGE AND COMPUTER ACADEMY. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
