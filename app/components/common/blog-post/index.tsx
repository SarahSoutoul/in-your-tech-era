'use client';

import Link from "next/link";

interface BlogData {
  id: number;
  title: string;
  description: string;
  link: string;
}

export default function BlogPost({ data }: { data: BlogData }) {  
  return (
    <div className="p-6 bg-gray-100 dark:bg-[#424242] shadow-md rounded-lg">
        <label className="inline-block bg-gradient-to-br from-[#FFCB70] via-[#C751C0] to-[#4158D0] text-white text-xs font-semibold px-3 py-1 rounded-full">
         Blog
        </label>
        <div className="text-gray-800 dark:text-white">
          <h1 className='text-xl font-bold my-5'>{data.title}</h1>
          <h1 className='text-sm font-medium my-5'>{data.description}</h1>
        </div>
        <Link href={data.link} className="text-purple-400">Read article</Link>
	  </div>
  );
}
