import React from 'react'
import { CircleDot } from 'lucide-react';

export default function Modern() {
  return (
    <div className=' w-full px-3 lg:px-20 pt-20 lg:pt-30  flex  justify-between items-center'>

        {/* first section */}
        <div className='relative hidden lg:flex'>

            <div className=' w-70'>
                <img className='relative z-50 object-contain w-full' src="mask.png" alt="" width={'100%'} />
            </div>

            <div className='absolute w-40 -top-10 -left-16'>
                <img className='object-contain w-full' src="dotv.png" alt="" width={'100%'} />
            </div>
            <div className='absolute top-0 -right-32 w-30'>
                <img className='object-contain w-full' src="led.png" alt="" width={'100%'} />
            </div>
             <div className='absolute z-70 top-34 w-44 -right-24'>
                <img className='object-contain w-full' src="group.png" alt="" width={'100%'} />
            </div>
        </div>
 

        {/* second section */}
        <div className='space-y-6'>
            <h1 className='text-3xl dark:text-black font-semibold  text-center'>We help you make <br /> Modern Interior Design</h1>
            <p className='text-sm text-[#7a817f] line-clamp-2'>Donec mattis porta eros, aliquet finibus risus interdum at.
                 Nulla <br /> vivethe as it was for us to know what was to be done.
                  the this is a <br /> long  post for the text.`This small text has
                 to be place here, since <br />  this is a place holder. You can also chane it.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 text-[#868c8a] gap-x-10 gap-y-3  flex-1'>
                <p className='flex text-sm lg:text-md items-center gap-1'><CircleDot />Donec mattis porta eros,let aliquet finibus ri</p>
                <p className='flex text-sm lg:text-md items-center gap-1'><CircleDot />Donec mattis porta eros,let aliquet finibus ri</p>
                <p className='flex text-sm lg:text-md items-center gap-1'><CircleDot />Donec mattis porta eros,let aliquet finibus ri</p>
                <p className='flex text-sm lg:text-md items-center gap-1'><CircleDot />Donec mattis porta eros,let aliquet finibus ri</p>
            </div>
            <button className='text-white bg-black text-lg rounded-full px-3 py-1'>Explore</button>
        </div>
    </div>
  )
}
