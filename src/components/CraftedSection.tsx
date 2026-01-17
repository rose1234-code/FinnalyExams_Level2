'use client'

import { useStoreCard } from '@/store/card.store'
import React from 'react'

export default function CraftedSection() {

  const listProduct=[
    {
      id:1,
      image:'chair1.png'
    },
    {
      id:2,
      image:'tof.png'
    },
    {
      id:3,
      image:"chair3.png"
    }
  ]
  const {toggleCardIcon,selectedCardIds}=useStoreCard()
  return (
    <div className='mt-20 pt-10 w-full px-2  lg:px-34 grid grid-cols-1 lg:grid-cols-4'>
      {/* one */}
      <div className='space-y-5 px-4 py-3 lg:space-y-10 w-full lg:w-[90%] hover:shadow-2xl hover:bg-gray-200 hover:py-2 hover:px-5 hover:rounded-lg shadow '>
        <h1 className=' text-3xl lg:text-4xl font-semibold flex flex-wrap text-[rgba(47,47,47,1)]'>Crafted with excellent  material.</h1>
        <p className='text-[rgba(106,106,106,1)]'>Donec mattis porta eros, aliquet <br /> finibus risus interdum at. Nulla <br /> vivethe
             as it was for us to know <br /> what was to be done.
        </p>
        <button className='border px-6 rounded-full text-white bg-[rgba(47,47,47,1)] py-2'> Explore</button>
      </div>

      {/* two */}
      <div className=' relative w-[90%] transition duration-300 transform hover:scale-105 hover:rounded-md hover:shadow-2xl ml-6 lg:ml-0 mt-20 lg:mt-0 flex items-center justify-center'>
        <img src="/Rectangle.png"/>

        <div className='absolute -top-10'>
            <img   src={`${listProduct[0].image}`} alt="" />
        </div>

        <span onClick={()=>toggleCardIcon(listProduct[0].id)} className={` ${selectedCardIds.includes(listProduct[0].id)&& 'bg-amber-500'}    absolute bottom-0 text-3xl  p-2 w-10 h-10 flex items-center justify-center rounded-full bg-[rgba(47,47,47,1)]  text-white bg`}>+</span>
      </div>
      {/* three */}
      <div className=' relative w-[90%] transition duration-300 transform hover:scale-105 hover:bg-gray-200 hover:rounded-md hover:shadow-2xl flex mt-10 lg:mt-0 ml-6 lg:ml-0 items-center justify-center  '>
        <img src={`${listProduct[1].image}`} alt='none'/>
        <div className='absolute -bottom-4 lg-bottom-4  w-full'>
            <h1 className='text-[#8c8a8a] w-full text-center  text-md font-semibold'>Kruzo Chair</h1>
            <h1 className='text-[rgba(47,47,47,1)] w-full text-center text-xl font-semibold'>$78.00</h1>
            <span onClick={()=>toggleCardIcon(listProduct[1].id)} className={` ${selectedCardIds.includes(listProduct[1].id)&& 'bg-amber-500'}   absolute bottom-0 text-3xl right-20  w-9 h-9 flex items-center justify-center rounded-full bg-[rgba(47,47,47,1)]  text-white`}>+</span>
        </div>
      </div>
      {/* four */}
      <div className=' relative w-[90%] flex transition duration-300 transform hover:scale-105 hover:bg-gray-200 hover:rounded-md hover:shadow-2xl items-center mt-24 lg:mt-0 justify-center'>
        <img src={`${listProduct[2].image}`} alt='none' />
        <div className='absolute lg:bottom-0  -bottom-14  w-full'>
            <h1 className='text-[#8c8a8a]  text-center text-md font-semibold'>Ergonomic Chair</h1>
            <h1 className='text-[rgba(47,47,47,1)] text-center text-xl font-semibold'>$43.00</h1>
            <span onClick={()=>toggleCardIcon(listProduct[2].id)} className={` ${selectedCardIds.includes(listProduct[2].id) && 'bg-amber-500'}   absolute bottom-0 text-3xl right-20  w-9 h-9 flex items-center justify-center rounded-full bg-[rgba(47,47,47,1)]  text-white`}>+</span>
        </div>
      </div>
    </div>        
  )
}
          