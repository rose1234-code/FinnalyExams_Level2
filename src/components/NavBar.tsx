'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { User,ShoppingCart } from 'lucide-react';
import { RxHamburgerMenu } from "react-icons/rx";
import { ModeToggle } from './ModeToggle';
import { useStoreCard } from '@/store/card.store';

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

export default function NavBar() {

  const {selectedCardIds}=useStoreCard()

   const [scrolled,setScrolled]=useState(false)

    useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50)
  }

  window.addEventListener("scroll", handleScroll)

  return () => {
    window.removeEventListener("scroll", handleScroll)
  }
}, [])
  return (
    <div className={` ${scrolled? ' w-[96%] md:w-[60%] left-3 lg:left-80 h-[80 px] md:h-[67px] rounded-full':'w-full'} dark:bg-black flex transition duration-300 fixed left-0 px-2 lg:px-5 z-100 backdrop-blur-4xl bg-[#578f7c] text-black items-center justify-between  `}>
        {/* first part */}
      <div className='flex items-center gap-1  '>
        <h1 className='text-4xl font-semibold text-white'>Furni</h1>
        <span className='text-gray-400 text-4xl rounded-full'>.</span>
      </div>

      {/* second part */}
      <div className='hidden lg:flex items-center gap-16  '>
        {/* one */}
        <div>
            <ul className='flex items-center text-[#e8e5e5] text-xl gap-10'>

                <li className='bg-white text-gray-500  hover:border px-2 py-1 rounded-md'>
                   <Link href="/">Home</Link> 
                </li>
                <li className='hover:border px-2 py-1 rounded-md'>
                   <Link href="#">About us</Link> 
                </li>
                <li className='hover:border px-2 py-1 rounded-md'>
                   <Link href="#">Services</Link> 
                </li>
                <li className='hover:border px-2 py-1 rounded-md'>
                   <Link href="#">Contact us</Link> 
                </li>
               
            </ul>
        </div>
        {/* two */}
        <Link href="/card" className='flex items-center gap-7 relative'>
            <User color='white' size={35}/>
            <ShoppingCart color='white' size={35} />
            <span className='absolute bg-[#EF4444] p-2 flex-1 text-xl right-14  -top-6 flex items-center justify-center w-7 h-7 text-white rounded-full'>{selectedCardIds.length}</span>
            <div>
              <ModeToggle/>
            </div>
        </Link>

        {/* button of connexion */}
        {/* Auth buttons - Desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-4 py-1.5 rounded-full border border-white text-white hover:bg-white hover:text-black transition">
                Sign in
              </button>
            </SignInButton>
          
            <SignUpButton mode="modal">
              <button className="px-4 py-1.5 rounded-full bg-amber-600 text-white hover:bg-amber-700 transition">
                Sign up
              </button>
            </SignUpButton>
          </SignedOut>
          
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>


      </div>
      {/* visible on mobile */}
      <div className='lg:hidden flex items-center gap-6'>
        <RxHamburgerMenu color='white'  size={30} />
        <span className='absolute bg-[#EF4444] p-2 flex-1 text-xl right-1  -top-5 flex items-center justify-center w-7 h-7 text-white rounded-full'>{selectedCardIds.length}</span>
        <Link href="/card">
          <ShoppingCart color='white' size={35} />
        </Link>
      </div>
      
    </div>
  )
}
