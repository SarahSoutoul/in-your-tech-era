import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import ThemeSwitcher from './components/theme-switcher';
import Link from 'next/link';

export default function Home() {
  return (
   <div>
      <header className="flex justify-end items-center p-4 gap-4 h-16">
        <SignedIn>
            <UserButton />
            <Link href="/dashboard" className="text-blue-500 dark:text-blue-300">Go to Dashboard</Link>
        </SignedIn>
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>     
        <ThemeSwitcher />
      </header>
    </div>
  );
}
