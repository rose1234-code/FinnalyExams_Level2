import React from 'react'
import { Truck, ShoppingBag, Shell, RefreshCw } from 'lucide-react'

export default function Choose() {
  return (
    <section className="px-6 md:px-20 mt-20 md:mt-40 flex flex-col md:flex-row gap-12">

      {/* Left */}
      <div className="w-full md:w-1/2 space-y-6">

        <h1 className="text-3xl md:text-4xl font-semibold text-[rgba(47,47,47,1)]">
          Why Choose Us
        </h1>

        <p className="text-[rgba(106,106,106,1)] leading-6 max-w-md">
          Donec mattis porta eros, aliquet finibus risus interdum at.
          Nulla vivethe as it was for us to know what was to be done.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">

          {/* Item */}
          <div className="relative space-y-4">
            <div className="w-8 h-8 absolute -top-1 left-2 rounded-full bg-[rgba(10,108,101,0.1)]"></div>
            <Truck color='black' size={32} className="relative" />
            <p className="font-semibold text-lg text-[rgba(47,47,47,1)]">
              Fast & Free Shipping
            </p>
            <p className="text-sm leading-6 text-[rgba(106,106,106,1)]">
              Donec mattis porta eros, aliquet finibus risus interdum at.
            </p>
          </div>

          <div className="relative space-y-4">
            <div className="w-8 h-8 absolute -top-1 left-2 rounded-full bg-[rgba(11,103,95,0.1)]"></div>
            <ShoppingBag  color='black' size={32} className="relative" />
            <p className="font-semibold text-lg text-[rgba(47,47,47,1)]">
              Easy Shopping
            </p>
            <p className="text-sm leading-6 text-[rgba(106,106,106,1)]">
              Donec mattis porta eros, aliquet finibus risus interdum at.
            </p>
          </div>

          <div className="relative space-y-4">
            <div className="w-8 h-8 absolute -top-1 left-2 rounded-full bg-[rgba(10,116,107,0.1)]"></div>
            <Shell color='black' size={32} className="relative" />
            <p className="font-semibold text-lg text-[rgba(47,47,47,1)]">
              Premium Quality
            </p>
            <p className="text-sm leading-6 text-[rgba(106,106,106,1)]">
              Donec mattis porta eros, aliquet finibus risus interdum at.
            </p>
          </div>

          <div className="relative space-y-4">
            <div className="w-8 h-8 absolute -top-1 left-2 rounded-full bg-[rgba(8,104,96,0.1)]"></div>
            <RefreshCw color='black' size={32} className="relative" />
            <p className="font-semibold text-lg text-[rgba(47,47,47,1)]">
              Free Returns
            </p>
            <p className="text-sm leading-6 text-[rgba(106,106,106,1)]">
              Donec mattis porta eros, aliquet finibus risus interdum at.
            </p>
          </div>

        </div>
      </div>

      {/* Right (Image) */}
      <div className="w-full md:w-1/2 -mt-16 transition transform duration-300 hover:scale-110 md:mt-0 relative">
        <img
          className="w-full max-w-md mx-auto rounded-lg relative  z-50 object-cover"
          src="/case.png"
          alt="Why choose us"
        />

        {/* Decoration */}
        <div className="hidden md:block absolute -left-12 -top-10">
          <img src="/Dot.png" alt="" />
        </div>
      </div>

    </section>
  )
}
