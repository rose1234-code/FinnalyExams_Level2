import React from 'react'

export default function MainSection() {
  return (
    <section className="w-full relative flex flex-col md:flex-row items-center">

      {/* Left */}
      <div className="w-full md:w-1/2 lg:[30%] space-y-6 md:space-y-10 pt-14 md:pt-24">
        <h1 className="text-4xl md:text-3xl lg:text-6xl leading-tight text-white">
          Modern Interior <br /> Design Studio
        </h1>

        <div className="flex items-center gap-4">
          <button className="px-6 py-2 rounded-full bg-yellow-500 text-black">
            Shop now
          </button>
          <button className="px-6 py-2 rounded-full border text-white">
            Explore
          </button>
        </div>
      </div>

      {/* Right */}
      <div className="w-full md:w-1/2 relative z-50 mt-10 md:mt-0">
        <img
          className="w-full max-w-md mx-auto md:max-w-full object-contain"
          src="/main.png"
          alt="Main illustration"
        />
      </div>

      {/* Decorative dots */}
      <div className="hidden md:block absolute  -right-5 top-10">
        <img src="/Dotted.png" alt="" />
      </div>

    </section>
  )
}
