'use client'

import Link from 'next/link'

interface BlogData {
  id: number
  title: string
  description: string
  link: string
}

export default function BlogPost({ data }: { data: BlogData }) {
  return (
    <div className="p-6 bg-gray-100 dark:bg-[#424242] shadow-md rounded-lg">
      <label className="inline-block bg-gradient-to-br from-[#FFB5A7] via-[#FF80B5] to-[#A3D8FF] dark:from-[#FFCB70] dark:via-[#C751C0] dark:to-[#4158D0] text-xs text-[#383838] font-semibold px-3 py-1 rounded-full">
        Blog
      </label>
      <div>
        <h1 className="text-xl font-bold my-5">{data.title}</h1>
        <h1 className="text-sm font-medium my-5">{data.description}</h1>
      </div>
      <Link href={data.link} className="text-[#FF80B5] dark:text-purple-400">
        Read article
      </Link>
    </div>
  )
}
