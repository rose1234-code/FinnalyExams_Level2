import React from 'react'

export default function Nordic() {
  return (
    <div
      className=" w-full mt-20 lg:mt-40 px-5 sm:px-10 lg:px-24 flex flex-col lg:flex-row gap-12 items-center justify-between">
      {/* CARD */}
      {[1, 2, 3].map((item) => (
        <div key={item} className="flex w-full lg:w-1/3 items-center gap-5">
          {/* IMAGE */}
          <div className="relative flex-shrink-0 transition duration-300 hover:scale-115 hover:shadow-2xl">
            <img className="h-44 sm:h-52 object-contain" src="/Rectangle.png" alt=""/>

            <div className="absolute  -top-6 left-1/2 -translate-x-1/2">
              <img
                className="h-32 object-contain"
                src={
                  item === 1
                    ? "/chair1.png"
                    : item === 2
                    ? "/tof.png"
                    : "/chair3.png"
                }
                alt=""
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="space-y-3">
            <h1 className="text-xl dark:text-black sm:text-2xl font-bold">
              Nordic Chair
            </h1>
            <p className="text-sm text-[rgba(106,106,106,1)]">
              Donec mattis porta eros, aliquet finibus risus in.
            </p>
            <p className="text-sm text-[rgba(106,106,106,1)] underline cursor-pointer">
              Read more
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
