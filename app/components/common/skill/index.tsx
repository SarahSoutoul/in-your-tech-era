'use client'

interface SkillData {
  id: number
  icon: string
  title: string
  description: string
}

export default function Skill({ data }: { data: SkillData }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-4xl">{data.icon}</span>
      <p className="text-lg font-semibold mt-2">{data.title}</p>
      <p className="text-sm text-gray-800 dark:text-gray-300">{data.description}</p>
    </div>
  )
}
