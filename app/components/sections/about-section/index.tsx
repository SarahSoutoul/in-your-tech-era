'use client'

export default function AboutSection() {
  return (
    <section className="flex-1 flex flex-col p-6 min-h-full">
      <h1 className="text-3xl font-bold my-5">About me</h1>
      <div className="p-10 bg-gray-100 dark:bg-[#424242] shadow-md rounded-lg dark:white text-lg">
        <p className="mb-4">
          I didn’t start in tech — I studied journalism. But a class called <em>Coding for Storytelling</em> changed
          everything, and I fell in love with programming. With no traditional tech background, it was tough at first,
          but with a lot of support and determination, I eventually landed my first software engineering job.
        </p>

        <p className="mb-4">
          Now, as a <span className="font-bold">Software Engineering Trainer & Tech Mentor</span>, I’m passionate about
          making tech education accessible and empowering the next generation of tech superstars. With over five years
          of experience in both software engineering and tech education, I help aspiring developers — especially women —
          break into tech. I don’t just teach code — I teach problem-solving, career prep, confidence building, and
          everything in between. My goal is to empower you to see what’s possible, just like someone once did for me.
        </p>

        <p className="mb-4">
          If you're looking to level up your coding skills or break into tech,{' '}
          <a
            href="https://calendly.com/soutoulsarah-uk/1-1-mentor-session"
            className="text-[#FF80B5] dark:text-purple-400 font-semibold hover:underline"
          >
            {' '}
            let’s connect!
          </a>
        </p>
      </div>
    </section>
  )
}
