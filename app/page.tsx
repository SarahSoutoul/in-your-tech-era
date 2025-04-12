import { Auth, ThemeSwitcher, HeroSection, AboutSection, SkillsSection, BlogSection, TestimonialSection } from "./components";

export default function Home() {
  
  return (
   <div>
      <header className="w-full px-5 bg-[rgba(255,255,255,0.7)] dark:bg-[rgba(66,66,66,0.7)] flex justify-between items-center gap-4 h-16 sticky top-0 z-5">
        <div>
          <a className="font-bold text-2xl">
            Sarah Soutoul
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Auth /> 
          <ThemeSwitcher />
        </div>
      </header>
      <main className="m-8 p-8">
        <HeroSection/>
        <div className="flex flex-col lg:flex-row gap-6">
          <AboutSection />
          <SkillsSection />
        </div>
        <BlogSection />
        <TestimonialSection />
      </main>
   </div>
  );
}
