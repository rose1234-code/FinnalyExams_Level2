import React from 'react'

export default function MainSection() {
  return (
    <section className="w-full relative pt-6 flex flex-col md:flex-row items-center">

      {/* Left */}
      <div className="w-full md:w-1/2 lg:[30%] space-y-5 md:space-y-7 pt-14 md:pt-24">
        <h1 className="text-2xl lg:text-4xl leading-tight text-white">
          Modern Interior <br /> Design Studio
        </h1>

        <div className="flex items-center gap-4">
          <button className="px-5  py-1.5 rounded-full bg-yellow-500 text-black">
            Shop now
          </button>
          <button className="px-5 py-1.5 rounded-full border text-white">
            Explore
          </button>
        </div>
      </div>

      {/* Right */}
      <div className="w-full md:w-1/2 relative z-50 mt-14 md:mt-0">
        <img
          className="w-full max-w-md mx-auto md:max-w-full object-contain"
          src="/main.png"
          alt="Main illustration"
        />
      </div>

      {/* Decorative dots */}
      <div className="hidden md:block absolute  -right-5 -top-3">
        <img src="/Dotted.png" alt="" />
      </div>

    </section>
  )
}
