'use client';

import { useEffect } from "react";
import { HeroSection, AboutSection, SkillsSection, BlogSection, TestimonialSection, ServicesSection } from "@/app/components";
import { useUser } from "@clerk/nextjs";

export default function Home() {
  const {user, isLoaded } = useUser()

  useEffect(() => {
    if (isLoaded && !user) {
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith("progressJournal")) {
          localStorage.removeItem(key);
        }
      });
    }
  }, [isLoaded, user]);

  return (
    <main className="m-8">
        <HeroSection/>
        <div className="flex flex-col lg:flex-row gap-6">
          <AboutSection />
          <SkillsSection />
        </div>
        <ServicesSection />
        <BlogSection />
        <TestimonialSection />
    </main>
  );
}
