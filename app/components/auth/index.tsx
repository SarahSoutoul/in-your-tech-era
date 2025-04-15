'use client';

import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton, OrganizationSwitcher } from '@clerk/nextjs';
import { useUser } from '@clerk/nextjs';

export default function Auth() {
  const { user } = useUser();
  console.log("hola", user)
  return (
    <>
       <SignedIn>
           <h1 className="text-xs md:text-xl lg:text-3xl font-semibold sm:flex-2">Welcome <span className='text-[#FF80B5] dark:text-purple-400'>{user?.fullName}</span> 👋</h1>
            <div className="flex items-center gap-4">
                <OrganizationSwitcher />
                <UserButton />
            </div>
       </SignedIn>
       <SignedOut>
            <div className='md:flex-2 text-xs md:text-sm lg:text-2xl'>
                <p className="font-bold">
                    In your <span className="text-[#FF80B5] dark:text-purple-400">tech</span> era
                </p>
                <p className="font-semibold">Because every girl deserves her tech era</p>
            </div>
            <SignInButton>
                <button className="text-xs md:text-sm rounded-md px-1 py-1 md:px-4 md:py-2 bg-[#424242] text-white border border-transparent text-center transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 hover:text-white active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button">
                    Already a client? Sign in
                </button>
            </SignInButton>
            <SignUpButton />
        </SignedOut>    
    </> 
  );
}

