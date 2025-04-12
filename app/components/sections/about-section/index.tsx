'use client';

export default function AboutSection() {
  return (
    <section className="flex-1 flex flex-col p-6 min-h-full">
        <h1 className='text-3xl font-bold my-5'>About me</h1>
        <div className="p-10 bg-gray-100 dark:bg-[#424242] shadow-md rounded-lg dark:white">
            <p className="text-lg mb-4">
            I'm a <span className="font-bold">Software Engineering Trainer & Curriculum Developer</span> with a passion for making tech education accessible. With a background in software engineering and over three years in media publishing, I help aspiring developers build their skills and confidence.
            </p>

            <p className="text-lg mb-4">
                I teach <span className="font-bold">Node.js, React, JavaScript, Python</span>, and more—focusing not just on code but on problem-solving, UX, and agile thinking. My goal? To empower the next generation of developers, especially women in tech.
            </p>

            <p className="text-lg">
                Looking to level up your coding skills or prep for technical interviews?  
                <a href="https://lnkd.in/drWEg6Z5" className="text-purple-400 font-semibold hover:underline"> Let’s connect!</a>
            </p>
        </div>
	</section>
  );
}
