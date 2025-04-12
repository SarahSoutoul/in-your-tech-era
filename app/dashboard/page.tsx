'use client';

import { useUser,useSession, useOrganization } from '@clerk/nextjs';
import { OrganizationSwitcher, UserButton, UserProfile } from '@clerk/nextjs';
import ThemeSwitcher from '../components/theme-switcher';
import Link from 'next/link';

export default function DashboardPage() {
  const { user } = useUser();
  const { session } = useSession();
  const { organization } = useOrganization();
  console.log(session, user)
  if (!user || !session) return null;

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <div className="flex items-center gap-4">
          <OrganizationSwitcher />
          <ThemeSwitcher />
          <UserButton />
          <Link href="/" className="text-blue-500 dark:text-blue-300">Go to Home</Link>
        </div>
      </header>
      <div className='flex justify-around'>
        <div className="grid grid-cols-1 gap-6 text-center">
          {/* User Info Card */}
          <div className="bg-white shadow-md rounded-lg p-6 dark:text-gray-900">
            <h2 className="text-xl font-bold mb-2">User Info</h2>
            <img src={user?.imageUrl} className="size-20 rounded-full mx-auto" alt="" />
            <p className='font-bold py-3'>{user?.fullName}</p>
            <div className='bg-[#FAFAFB] rounded-lg px-2.5 py-2.5 divide-y divide-[#EEEEF0]'>
              <div className='flex justify-between py-2'>
                <span className="font-bold">Email</span>
                <p>{user?.primaryEmailAddress?.emailAddress}</p>
              </div>
              <div className='flex justify-between py-2'>
                <span className="font-bold">User ID</span>
                <div className="relative group">
                  <p className="block w-32 truncate overflow-hidden whitespace-nowrap">{user?.id}</p>
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-gray-900 text-white text-xs px-2 py-1 rounded">
                    {user?.id}
                  </span>
                </div>
              </div>
              <div className='flex justify-between py-2'>
                <span className="font-bold">Session ID</span>
                <div className="relative group">
                  <p className="block w-32 truncate overflow-hidden whitespace-nowrap">{user?.id}</p>
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-gray-900 text-white text-xs px-2 py-1 rounded">
                    {session?.id}
                  </span>
                </div>
              </div>
              <div className='flex justify-between py-2'>
                <span className="font-bold">Status</span>
                <p> {session?.status}</p>
              </div>
              {/* <div className='flex justify-between py-2'>
                <span className="font-bold">Status</span>
                <p>{session.lastActiveAt}</p>
              </div>f */}
            </div>
          </div>

          {/* Organization Info Card */}
          {organization && (
            <div className="bg-white shadow-md rounded-lg p-6 dark:text-gray-900">
              <h2 className="text-xl font-bold mb-2">Organization</h2>
              <div className='bg-[#FAFAFB] rounded-lg px-2.5 py-2.5 divide-y divide-[#EEEEF0]'>
                <div className='flex justify-between py-2'>
                  <span className="font-bold">ID</span>
                  <div className="relative group">
                    <p className="block w-32 truncate overflow-hidden whitespace-nowrap">{user?.id}</p>
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-gray-900 text-white text-xs px-2 py-1 rounded">
                      {organization.id}
                    </span>
                  </div>
                </div>
                <div className='flex justify-between py-2'>
                  <span className="font-bold">Name</span>
                  <p>{organization.name}</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <UserProfile />
      </div>
    </main>
  );
}
