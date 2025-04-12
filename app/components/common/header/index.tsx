'use client';

import { Auth, ThemeSwitcher } from "../../../components";

export default function Header() {
  return (
    <header className="w-full px-5 bg-[rgba(255,255,255,0.7)] dark:bg-[rgba(66,66,66,0.7)] flex justify-between items-center gap-4 h-16 sticky top-0 z-5">   
        <Auth /> 
        <ThemeSwitcher />
    </header>
  );
}
