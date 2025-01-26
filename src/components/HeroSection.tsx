'use client'
import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
// import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className='h-auto sm:h-[45rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
        <Spotlight
        className="sm:-top-40 top-10 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <div className='p-4 relative z-10 w-full text-center'>
            <h1 className='sm:mt-20 mt-24 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500'>Master the art of music</h1>
            <p className='sm:mt-4 mt-7 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nostrum debitis sed nihil sint nobis repudiandae voluptatibus praesentium illo fugit!</p>
            <div className='mt-20'>
                <Link href={"/courses"}> <button
        // borderRadius="1.75rem"
        className="bg-white dark:bg-black/10 text-black border-2 px-4 py-3 rounded-2xl hover:border-3 hover:border-sky-300 dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Explore courses
      </button></Link>
            </div>
        </div>
    </div>
  )
}

export default HeroSection