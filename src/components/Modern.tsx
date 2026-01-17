import React from 'react'
import { CircleDot } from 'lucide-react';

export default function Modern() {
  return (
    <div className=' w-full border px-3 lg:px-40 pt-20 lg:pt-30  flex  justify-between items-center'>

        {/* first section */}
        <div className='relative hidden lg:flex'>
            <img className='relative z-50' src="mask.png" alt="" width={'100%'} />

            <div className='absolute -top-14 -left-16'>
                <img className='object-contain' src="dotv.png" alt="" width={'100%'} />
            </div>
            <div className='absolute top-0 -right-50'>
                <img className='object-contain' src="led.png" alt="" width={'100%'} />
            </div>
             <div className='absolute z-70 top-52 -right-50'>
                <img className='object-contain' src="group.png" alt="" width={'100%'} />
            </div>
        </div>
 

        {/* second section */}
        <div className='space-y-10 '>
            <h1 className='text-4xl dark:text-black font-semibold lg:text-initial text-center'>We help you make <br /> Modern Interior Design</h1>
            <p className='text-md text-[#7a817f] line-clamp-2'>Donec mattis porta eros, aliquet finibus risus interdum at.
                 Nulla <br /> vivethe as it was for us to know what was to be done.
                  the this is a <br /> long  post for the text.`This small text has
                 to be place here, since <br />  this is a place holder. You can also chane it.
            </p>
            <div className='grid grid-cols-1 lg:grid-cols-2 text-[#868c8a] gap-x-10 gap-y-3  flex-1'>
                <p className='flex text-sm lg:text-md items-center gap-1'><CircleDot />Donec mattis porta eros,let aliquet finibus ri</p>
                <p className='flex text-sm lg:text-md items-center gap-1'><CircleDot />Donec mattis porta eros,let aliquet finibus ri</p>
                <p className='flex text-sm lg:text-md items-center gap-1'><CircleDot />Donec mattis porta eros,let aliquet finibus ri</p>
                <p className='flex text-sm lg:text-md items-center gap-1'><CircleDot />Donec mattis porta eros,let aliquet finibus ri</p>
            </div>
            <button className='text-white bg-black text-xl rounded-full px-5 py-2'>Explore</button>
        </div>
    </div>
  )
}
