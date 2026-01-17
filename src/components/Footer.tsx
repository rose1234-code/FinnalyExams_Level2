import React from 'react'
import { FaTelegramPlane, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"
import { BiSolidMessageSquareDetail } from "react-icons/bi"
import { CiLinkedin } from "react-icons/ci"

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-black w-full px-5 sm:px-10 lg:px-40 py-14">

      {/* NEWSLETTER */}
      <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
        <div className="space-y-5 ml-10 lg:ml-0">
          <h1 className="flex items-center gap-2 text-xl sm:text-2xl ">
            <BiSolidMessageSquareDetail className="text-gray-500" size={24} />
            Subscribe to Newsletter
          </h1>

          <form className="flex flex-col sm:flex-row gap-3">
            <input
              className="border dark:bg-gray-500 rounded-md px-4 py-2 outline-none w-full sm:w-auto"
              type="text"
              placeholder="Enter your name"
            />
            <input
              className="border dark:bg-gray-500 rounded-md px-4 py-2 outline-none w-full sm:w-auto"
              type="email"
              placeholder="Enter your e-mail"
            />
            <button className="bg-[rgba(53,115,110,1)] px-4 py-2 rounded-md flex justify-center">
              <FaTelegramPlane size={22} className="text-white" />
            </button>
          </form>
        </div>

        {/* IMAGE (desktop only) */}
        <div className="hidden lg:block absolute right-0 -top-20 w-[400px]">
          <img src="/sofa.png" alt="" className="w-full object-contain" />
        </div>
      </div>

      {/* LINKS */}
      <div className="mt-24">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">Furni..</h1>

        <div className="grid grid-cols-3 dark:text-white sm:grid-cols-4 lg:grid-cols-5 gap-8 text-[rgba(106,106,106,1)] text-sm">
          <p>
            Donec mattis porta eros, aliquet finibus risus interdum at.
            Nulla vivethe as it was for us to know what was to be done.
          </p>

          <div className="space-y-3">
            <p>About us</p>
            <p>Services</p>
            <p>Blog</p>
            <p>Contact us</p>
          </div>

          <div className="space-y-3">
            <p>Support</p>
            <p>Knowledge base</p>
            <p>Live chat</p>
          </div>

          <div className="space-y-3">
            <p>Jobs</p>
            <p>Our team</p>
            <p>Leadership</p>
            <p>Privacy Policy</p>
          </div>

          <div className="space-y-3">
            <p>Nordic Chair</p>
            <p>Kruzo Aero</p>
            <p>Ergonomic</p>
          </div>
        </div>
      </div>

      {/* SOCIAL */}
      <div className="flex justify-center lg:justify-start gap-4 mt-12">
        {[FaFacebookF, FaInstagram, FaTwitter, CiLinkedin].map((Icon, i) => (
          <button key={i} className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition">
            <Icon color='black' />
          </button>
        ))}
      </div>

      {/* COPYRIGHT */}
      <div className="mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[rgba(106,106,106,1)]">
        <p className="text-center sm:text-left">
          Copyright 2022 degraft87@gmail.com. All Rights Reserved.
        </p>

        <div className="flex gap-6">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>

    </footer>
  )
}
