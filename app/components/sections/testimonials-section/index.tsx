'use client';

import TestimonialBox from '../../common/testimonial-box';
import { testimonials } from '../../../data/testimonialsData';

export default function TestimonialSection() {
  
  return (
    <section className="p-6">
      <h1 className='text-3xl font-bold my-5'>What people say about me</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {testimonials.map((testimonial) => (
            <TestimonialBox key={testimonial.id} data={testimonial} />
        ))}
      </div>
    </section>
  );
}
