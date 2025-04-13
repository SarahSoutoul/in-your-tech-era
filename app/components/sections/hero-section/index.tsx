'use client';

export default function HeroSection() {
  
  return (
    <section className="m-5 p-10 bg-gradient-to-br from-[#FFB5A7] via-[#FF80B5] to-[#A3D8FF] dark:from-[#FFCB70] dark:via-[#C751C0] dark:to-[#4158D0] p-6 shadow-md rounded-lg dark:text-gray-900">
      <hgroup>
			  <h1 className='text-5xl font-bold my-5'>Sarah Soutoul</h1>
        <h1 className="text-xl font-bold my-5">I am a <span className="typed-[educator|coder|writer] typed-caret"></span></h1>
        <h2 className='my-5'>Empowering women to break into and thrive in tech, I mentor aspiring developers, help them build confidence, navigate their unique journeys, and succeed in the ever-evolving tech landscape</h2>
      </hgroup>
      <div className="buttons my-5">
        <a href="https://calendly.com/soutoulsarah-uk/1-1-mentor-session">
          <button className="rounded-md bg-[#424242] py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
              Book an intro session
          </button>
        </a>
        <a href="#what-i-offer">
          <button className="rounded-md bg-white py-2 px-4 border border-transparent text-center text-sm text-slate-800 transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 hover:text-white active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button">
            Learn more
          </button>
        </a>
      </div>
      <div className="flex gap-1">
          <p>Already working with me?</p><a href="/sign-in" className="font-semibold hover:underline">Log in to your dashboard</a>
        </div>
	</section>
  );
}
