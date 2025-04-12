'use client';

import { BlogPost } from "@/app/components";
import { blogPosts } from '../../../data/blogData';

export default function BlogSection() {
  
  return (
    <section className="p-6">
      <h1 className='text-3xl font-bold my-5'>What I write</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((blog) => (
            <BlogPost key={blog.id} data={blog} />
          ))}
      </div>
    </section>
  );
}
