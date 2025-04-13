'use client';

interface ServiceData {
    id: number;
    name: string;
    price: string;
    features: string[];
}

export default function ServiceBox({ data }: { data: ServiceData }) {
  return (
    <div className="p-6 bg-gray-100 dark:bg-[#424242] shadow-md rounded-lg max-w-sm lg:max-w-md">
      <label className="inline-block bg-gradient-to-br from-[#FFB5A7] via-[#FF80B5] to-[#A3D8FF] dark:from-[#FFCB70] dark:via-[#C751C0] dark:to-[#4158D0] text-xs text-[#383838] font-semibold px-3 py-1 rounded-full mb-4">
        {data.name}
      </label>
      <blockquote className="relative pl-6 border-l-4 border-gray-500 dark:border-purple-400 text-xl italic mb-4">
        <ul className="m-4 list-disc text-base font-thin">
            {data.features.map((feature, index) => (
                <li key={index}>{feature}</li>
            ))}
        </ul>

        <footer className="text-sm text-gray-500 dark:text-purple-400">
            – {data.price}
        </footer>
      </blockquote>
    </div>
  );
}
