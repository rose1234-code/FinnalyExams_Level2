import React from 'react'

export default function Blog() {
  return (
    <div className='w-full px-4 lg:px-38 pb-50'>
        <div className='flex items-center justify-between my-10'>
            <h1 className='text-3xl'>Recent Blog</h1>
            <p className='lg underline'>View All Posts</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  items-center justify-between'>
            {/* one */}
            <div>
                <img className='transition duration-300 transform hover:scale-105 hover:shadow-xl' src="/b1.png" alt="" />
                <p className='text-xl mt-2 lg:mt-6 text-[rgba(47,47,47,1)]'>First Time Home Owner Ideas</p>
                <p className='text-sm dark:text-black'>by <span className='font-bold'>Nana Ama</span> on <span className='font-bold'>Nov 18th, 2022</span></p>
            </div>
            {/* two */}
             <div>
                <img className='transition duration-300 transform hover:scale-105 hover:shadow-xl' src="/b2.png" alt="" />
                <p className='text-xl mt-1 lg:mt-6 text-[rgba(47,47,47,1)]'>First Time Home Owner Ideas</p>
                <p className='text-sm dark:text-black'>by <span className='font-bold'>Nana Ama</span> on <span className='font-bold'>Nov 18th, 2022</span></p>
            </div>
            {/* three */}
             <div>
                <img className='transition duration-300 transform hover:scale-105 hover:shadow-xl' src="/b3.png" alt="" />
                <p className='text-xl mt-2 lg:mt-6 text-[rgba(47,47,47,1)]'>First Time Home Owner Ideas</p>
                <p className='text-sm dark:text-black'>by <span className='font-bold'>Nana Ama</span> on <span className='font-bold'>Nov 18th, 2022</span></p>
            </div>
            {/* four */}
            <div>
                <img className='transition duration-300 transform hover:scale-105 hover:shadow-xl' src="/b1.png" alt="" />
                <p className='text-xl mt-2 lg:mt-6 text-[rgba(47,47,47,1)]'>First Time Home Owner Ideas</p>
                <p className='text-sm dark:text-black'>by <span className='font-bold'>Nana Ama</span> on <span className='font-bold'>Nov 18th, 2022</span></p>
            </div>
        </div>
    </div>
  )
}
