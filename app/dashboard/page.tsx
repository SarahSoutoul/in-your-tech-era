'use client';

import { UserInfo, OrganisationInfo } from '@/app/components';
import { ProgressJournal, Calendar, LearningHub } from '@/app/components/dashboard-sections';

export default function DashboardPage() {
  return (
    <section>
      <main className="m-10">
        <p className='font-semibold text-2xl pb-6'>Your mentorship starts here</p>
        <section className='flex flex-col md:flex-row justify-between gap-10'>
          <section className='flex flex-col gap-6 flex-2'>
            <Calendar />
            <ProgressJournal />
            <LearningHub />
          </section>
          <div className='flex flex-col gap-6 flex-1'>
            <UserInfo />
            <OrganisationInfo />
          </div>  
        </section>
      </main>
    </section>
  );
}
