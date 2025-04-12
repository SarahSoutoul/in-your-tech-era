'use client';

interface TestimonialData {
    id: number;
    testimonial: string;
    name: string;
}

export default function TestimonialBox({ data }: { data: TestimonialData }) {
  return (
    <div className="p-6 bg-gray-100 dark:bg-[#424242] shadow-md rounded-lg">
      <label className="inline-block bg-gradient-to-br from-[#FFCB70] via-[#C751C0] to-[#4158D0] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
        Blog
      </label>
      <blockquote className="relative pl-6 border-l-4 border-gray-500 dark:border-purple-400 text-xl italic text-gray-800 dark:text-white mb-4">
        <p className="mb-4">{data.testimonial}</p>
        <footer className="text-sm text-gray-500 dark:text-purple-400">
          – {data.name}
        </footer>
      </blockquote>
    </div>
  );
}
