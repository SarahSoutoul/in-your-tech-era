'use client'

import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton, OrganizationSwitcher } from '@clerk/nextjs'
import { useUser } from '@clerk/nextjs'

export default function Auth() {
  const { user } = useUser()

  return (
    <>
      <SignedIn>
        <h1 className="text-3xl font-semibold flex-2">
          Welcome <span className="text-[#FF80B5] dark:text-purple-400">{user?.fullName}</span> 👋
        </h1>
        <div className="flex items-center gap-4">
          <OrganizationSwitcher />
          <UserButton />
        </div>
      </SignedIn>
      <SignedOut>
        <div className="flex-2">
          <a className="font-bold text-2xl">
            In your <span className="text-[#FF80B5] dark:text-purple-400">tech</span> era
          </a>
          <p className="font-semibold">Because every girl deserves her tech era</p>
        </div>
        <SignInButton>
          <button
            className="rounded-md py-2 px-4 bg-[#424242] text-white border border-transparent text-center text-sm transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 hover:text-white active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
            type="button"
          >
            Already a client? Sign in
          </button>
        </SignInButton>
        <SignUpButton />
      </SignedOut>
    </>
  )
}
