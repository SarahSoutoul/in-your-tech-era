'use client';

export default function Footer() {
    return (
      <footer className="bg-[rgba(255,255,255,0.7)] dark:bg-[rgba(66,66,66,0.7)] py-8 mt-10 border-t-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold">Sarah Soutoul</h3>
              <p className="text-sm mt-1">Empowering the next generation of developers</p>
            </div>
  
            <div className="flex space-x-6">
              <a href="https://calendly.com/soutoulsarah-uk/1-1-mentor-session" target="_blank" className="hover:text-white transition">Book a Session</a>
            </div>
          </div>
  
          <div className="mt-8 text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Sarah Soutoul. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
  