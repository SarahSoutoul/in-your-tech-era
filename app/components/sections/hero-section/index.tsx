'use client';

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  
  return (
    <section className="m-5 p-10 bg-gradient-to-br from-[#FFB5A7] via-[#FF80B5] to-[#A3D8FF] dark:from-[#FFCB70] dark:via-[#C751C0] dark:to-[#4158D0] p-6 shadow-md rounded-lg dark:text-gray-900 flex gap-10">
      <div className="w-2xl">
        <hgroup>
          <h1 className='text-5xl font-bold my-5'>Sarah Soutoul</h1>
          <h1 className="text-xl font-bold my-5">I am a <span className="typed-[educator|coder|writer] typed-caret"></span></h1>
          <h2 className='my-5'>Empowering women to break into and thrive in tech, I mentor aspiring developers, help them build confidence, navigate their unique journeys, and succeed in the ever-evolving tech landscape</h2>
        </hgroup>
        <div className="buttons my-5 text-xs sm:text-sm flex">
          <Link href="https://calendly.com/soutoulsarah-uk/1-1-mentor-session">
            <button className="rounded-md bg-[#424242] p-2 md:px-4 border border-transparent text-center text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                Book an intro session
            </button>
          </Link>
          <Link href="#what-i-offer">
            <button className="rounded-md bg-white p-2 md:px-4 border border-transparent text-center text-slate-800 transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 hover:text-white active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button">
              Learn more
            </button>
          </Link>
        </div>
        <div className="sm:flex text-xs sm:text-sm gap-1">
            <p>Already working with me?</p><Link href="/sign-in" className="font-semibold hover:underline">Log in to your dashboard</Link>
        </div>
      </div>
      <Image
        src='/profile.jpg'
        alt="Profile image"
        width={400}
        height={300}
        className="hidden lg:block size-100 rounded-xl"
        priority
     />
	</section>
  );
}
