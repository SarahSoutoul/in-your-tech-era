'use client';

import ServiceBox from '../../common/service-box';
import { services } from '../../../data/serviceData';

export default function ServicesSection() {
  
  return (
    <section className="p-6" id="what-i-offer">
      <h1 className='text-3xl font-bold my-5'>What I offer</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
            <ServiceBox key={service.id} data={service} />
        ))}
      </div>
    </section>
  );
}
