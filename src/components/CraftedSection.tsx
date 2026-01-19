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
    <div className='mt-20 pt-10 w-full px-10 mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4'>
      {/* one */}
      <div className='space-y-4  border px-3 h-64 py-2 rounded-md w-full lg:w-[90%] hover:shadow-2xl  hover:rounded-lg shadow '>
        <h1 className=' text-2xl  font-semibold flex flex-wrap text-[rgba(47,47,47,1)]'>Crafted with excellent  material.</h1>
        <p className='text-[rgba(106,106,106,1)] text-[13px]'>Donec mattis porta eros, aliquet <br /> finibus risus interdum at. Nulla <br /> vivethe
             as it was for us to know <br /> what was to be done.
        </p>
        <button className='border px-5 rounded-full text-white bg-[rgba(47,47,47,1)] py-1'> Explore</button>
      </div>

      {/* two */}
      <div className=' relative  h-64 w-[90%] transition duration-300 transform hover:scale-105 hover:rounded-md hover:shadow-2xl   flex items-center justify-center'>
        <div className=''>
            <img className='h-full object-contain' src="/Rectangle.png"/>
        </div>
        <div className='absolute -top-10 h-60'>
            <img   className='h-full' src={`${listProduct[0].image}`} alt="" />
        </div>

        <span onClick={()=>toggleCardIcon(listProduct[0].id)} className={` ${selectedCardIds.includes(listProduct[0].id)&& 'bg-amber-500'}    absolute bottom-0 text-2xl  w-7 h-7 flex items-center justify-center rounded-full bg-[rgba(47,47,47,1)]  text-white`}>+</span>
      </div>
      {/* three */}
      <div className=' relative h-64 w-[90%] transition duration-300 transform hover:scale-105  hover:rounded-md hover:shadow-2xl flex items-center justify-center  '>
        <div className='h-50'>
                  <img className='h-full object-contain' src={`${listProduct[1].image}`} alt='none'/>
        </div>
        <div className='absolute -bottom-3 lg-bottom-4  w-full'>
            <h1 className='text-[#8c8a8a] w-full text-center  text-md font-semibold'>Kruzo Chair</h1>
            <h1 className='text-[rgba(47,47,47,1)] w-full text-center text-md font-semibold'>$78.00</h1>
            <span onClick={()=>toggleCardIcon(listProduct[1].id)} className={` ${selectedCardIds.includes(listProduct[1].id)&& 'bg-amber-500'}   absolute bottom-0 text-2xl right-16 w-7 h-7 flex items-center justify-center rounded-full bg-[rgba(47,47,47,1)]  text-white`}>+</span>
        </div>
      </div>
      {/* four */}
      <div className=' relative h-64 w-[90%] flex transition duration-300 transform hover:scale-105  hover:rounded-md hover:shadow-2xl items-center  justify-center'>
        <div className='h-50'>
           <img className='object-contain h-full' src={`${listProduct[2].image}`} alt='none' />
        </div>
        <div className='absolute lg:-bottom-2.5  -bottom-14  w-full'>
            <h1 className='text-[#8c8a8a]  text-center text-md font-semibold'>Ergonomic Chair</h1>
            <h1 className='text-[rgba(47,47,47,1)] text-center text-md font-semibold'>$43.00</h1>
            <span onClick={()=>toggleCardIcon(listProduct[2].id)} className={` ${selectedCardIds.includes(listProduct[2].id) && 'bg-amber-500'}   absolute bottom-0 text-2xl right-16 w-7 h-7 flex items-center justify-center rounded-full bg-[rgba(47,47,47,1)]  text-white`}>+</span>
        </div>
      </div>
    </div>        
  )
}
          