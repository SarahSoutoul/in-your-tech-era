'use client'

import {
  HeroSection,
  AboutSection,
  SkillsSection,
  BlogSection,
  TestimonialSection,
  ServicesSection,
} from '@/app/components'

export default function Home() {
  return (
    <main className="m-8">
      <HeroSection />
      <div className="flex flex-col lg:flex-row gap-6">
        <AboutSection />
        <SkillsSection />
      </div>
      <ServicesSection />
      <BlogSection />
      <TestimonialSection />
    </main>
  )
}
