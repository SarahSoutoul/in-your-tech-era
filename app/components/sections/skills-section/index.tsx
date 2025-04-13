'use client'

import { Skill } from '@/app/components'
import { skillsData } from '../../../data/skillsData'

export default function SkillsSection() {
  console.log(skillsData)
  return (
    <section className="flex-1 flex flex-col p-6 min-h-full">
      <h1 className="text-3xl font-bold my-5">What I Teach</h1>
      <div className="p-10 bg-gray-100 dark:bg-[#424242] shadow-md rounded-lg dark:text-white">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {skillsData.map((skill) => (
            <Skill key={skill.id} data={skill} />
          ))}
        </div>

        <p className="text-center text-lg mt-6">
          Ready to level up?
          <a
            href="https://lnkd.in/drWEg6Z5"
            className="text-[#FF80B5] dark:text-purple-400 font-semibold hover:underline"
          >
            {' '}
            Let’s work together!
          </a>
        </p>
      </div>
    </section>
  )
}
