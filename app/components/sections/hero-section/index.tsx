'use client';

export default function HeroSection() {
  
  return (
    <section className="m-5 p-10 bg-gradient-to-br from-[#FFB5A7] via-[#FF80B5] to-[#A3D8FF] dark:from-[#FFCB70] dark:via-[#C751C0] dark:to-[#4158D0] p-6  shadow-md rounded-lg dark:text-gray-900">
      <hgroup className="text-[#383838]">
			  <h1 className='text-5xl font-bold my-5'>Sarah Soutoul</h1>
        <h1 className="text-xl font-bold my-5">I am a <span className="typed-[educator|coder|writer] typed-caret"></span></h1>
        <h2 className='my-5'>Bridging the gap between tech ansd education, I mentor and empower aspiring developers to navigate their tech journeys with confidence</h2>
		  </hgroup>
      <div className="buttons my-5">
        <button className="rounded-md bg-[#424242] py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
          Book a session
        </button>
        <button className="rounded-md bg-white py-2 px-4 border border-transparent text-center text-sm text-slate-800 transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 hover:text-white active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button">
          Learn more
        </button>
      </div>
	</section>
  );
}
