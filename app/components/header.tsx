import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { cn } from '@/lib/utils'
import { Cinzel } from "next/font/google";


const cinzel = Cinzel({
  subsets: ["latin"], // You can specify the subset you need
  weight: ["400", "700"], // Specify the weights you're going to use
});

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-300 bg-opacity-50 rounded-b-2xl shadow-md z-50">
    <div className="container mx-4 my-2 flex justify-between items-center min-w-full pr-[50px]">
      <div
        className={cn(
          `flex flex-row items-center tracking-widest ${cinzel.className}`
        )}
      >
        <Link href='/'>
        <Image
          src="/crLogoWeb.png"
          alt="Crossroads logo"
          width="75"
          height="75"
          className="transform transition duration-300 hover:scale-110"
        />
        </Link>
        <h1 className="hidden md:block text-3xl font-bold mx-2">CRFC</h1>
      </div>
      <nav className='justify-end'>
        <ul className="flex space-x-4">
          <Link href="/" className='hover:bg-neutral-300 p-1 rounded'>Home</Link>
          <Link href="/about" className='hover:bg-neutral-300 p-1 rounded'>About</Link>
          <Link href="/contact" className='hover:bg-neutral-300 p-1 rounded'>Contact</Link>
          <Link href="/impactpage" className='hover:bg-neutral-300 p-1 rounded'>Impact</Link>
          <Link href="/help" className='hover:bg-neutral-300 p-1 rounded'>Reach Out</Link>
        </ul>
      </nav>
    </div>
  </header>
  )
}

export default Header