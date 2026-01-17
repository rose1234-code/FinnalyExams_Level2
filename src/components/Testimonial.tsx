import React from 'react'
import { ChevronLeft,ChevronRight } from 'lucide-react';

export default function Testimonial() {
  return (
    <div className='mt-40 w-full px-34 h-100 space-y-12 pb-20 hidden lg:block'>
        {/* title */}
      <h1 className='text-center font-bold text-4xl text-[rgba(47,47,47,1)]'>Testimonials </h1>
      {/* carousel text */}
      <div className='flex items-center justify-between'>
        <button className='p-2 rounded-full dark:bg-white border'><ChevronLeft color='black'  size={30}/></button>
        <p className='text-[rgba(47,47,47,1)] text-md font-bold'>‘’Donec nibh magna, interdum quis massa sed, rhoncus laoreet quam. 
            Mauris accumsan <br /> felis fermentum euismod egestas. Mauris ante 
            augue, cursus sit amet arcu a, maximus <br /> suscipit nibh. 
            Integer vel nibh tellus. Pellentesque in risus non dui venenatis sollicitudin <br />
             sed vitae diam. Fusce tincidunt nisl mi, at molestie odio accumsan non. Pellentesque ma’’
        </p>
        <button className='p-2 bg-[rgba(56,93,80,1)] rounded-full border'><ChevronRight color='white' size={30} /></button>
      </div>
      {/* carousel picture */}
      <div className='flex flex-col items-center justify-center'>
        <div className='w-20 h-20 rounded-full'>
            <img className='object-contain' src="/girl.png" alt=""  width={'100%'}/>
        </div>
        <p className='text-[#565454] text-xl'>Michelle Anna</p>
        <p className='text-[#979595] text-md font-normal'>CEO, Co-Founder, XYZ Inc.</p>
      </div>
    </div>
  )
}
