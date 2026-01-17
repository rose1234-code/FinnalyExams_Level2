import React from 'react'
import NavBar from './NavBar'
import MainSection from './MainSection'

export default function Head() {
  return (
    <div className='h-155 pt-10 px-2 dark:bg-black  lg:px-30 w-full bg-[#578f7c] text-white'>
      <NavBar/>
      <MainSection/>
    </div>
  )
}
