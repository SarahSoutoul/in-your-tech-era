'use client'

import { UserInfo, OrganisationInfo, ProgressJournal } from '@/app/components'

export default function DashboardPage() {
  return (
    <section>
      <main className="m-8">
        <p className="font-semibold text-xl pb-6">Your mentorship starts here</p>
        <section className="flex justify-between gap-10">
          <section className="flex flex-col gap-6 flex-2">
            <section className="bg-gray-100 dark:bg-[#424242] shadow-md rounded-lg p-6">
              <h3>Your Next Session</h3>
              <p>📅 Tuesday, April 16th @ 2:00 PM</p>
              <a href="https://calendly.com/reschedule-link">Reschedule on Calendly</a>
            </section>
            <ProgressJournal />
            <section className="shadow-md rounded-lg p-6 bg-gray-100 dark:bg-[#424242]">
              <h3>Your Personalized Learning Hub</h3>
              <p>
                🧭 Your current roadmap: <strong>"Frontend Focus – React & Projects"</strong>
              </p>
              <a href="/resources" className="link">
                View All Resources
              </a>
            </section>
          </section>
          <div className="flex flex-col gap-6 flex-1">
            <UserInfo />
            <OrganisationInfo />
            {/* <UserProfile /> */}
          </div>
        </section>
      </main>
    </section>
  )
}
