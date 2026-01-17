import React from 'react'
import Head from '@/components/Head'
import CraftedSection from '@/components/CraftedSection'
import Choose from '@/components/Choose'
import Modern from '@/components/Modern'
import Nordic from '@/components/Nordic'
import Testimonial from '@/components/Testimonial'
import Blog from '@/components/Blog'
import Footer from '@/components/Footer'

export default function page() {
  return (
    <div className=''>
      <div className='bg-gray-100'>
        <Head/>
        <CraftedSection/>
        <Choose/>
        <Modern/>
        <Nordic/>
        <Testimonial/>
        <Blog/>
      </div>
      <Footer/>
    </div>
  )
}
