'use client';

import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';

export default function Auth() {
  
  return (
    <>
        <SignedIn>
            <UserButton />
            <Link href="/dashboard" className="text-blue-500 dark:text-blue-300">Go to Dashboard</Link>
        </SignedIn>
        <SignedOut>
            <SignInButton />
            <SignUpButton />
        </SignedOut>  
    </> 
  );
}
