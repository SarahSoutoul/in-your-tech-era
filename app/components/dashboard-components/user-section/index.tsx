'use client';
import { useUser, useSession } from '@clerk/nextjs';


export default function UserInfo() {
  const { user } = useUser();
  const { session } = useSession();

  if (!user || !session) return null;

  return (
    <section className="bg-gray-100 dark:bg-[#424242] shadow-md rounded-lg p-6 dark:text-gray-900">
        <div className='text-center dark:text-white'>
            <h2 className="text-xl font-bold mb-2">User Info</h2>
            <img src={user?.imageUrl} className="size-20 rounded-full mx-auto" alt="" />
            <p className='font-bold py-3'>{user?.fullName}</p>
        </div>
        <div className='bg-[#FAFAFB] rounded-lg px-2.5 py-2.5 divide-y divide-[#EEEEF0]'>
        <div className='flex justify-between py-2'>
            <span className="font-bold">Email</span>
            <div className="relative group">
                <p className="block w-32 truncate overflow-hidden whitespace-nowrap">{user?.primaryEmailAddress?.emailAddress}</p>
                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-gray-900 text-white text-xs px-2 py-1 rounded">
                    {user?.primaryEmailAddress?.emailAddress}
                </span>
            </div>
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
                <p className="block w-32 truncate overflow-hidden whitespace-nowrap">{session?.id}</p>
                <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-gray-900 text-white text-xs px-2 py-1 rounded">
                    {session?.id}
                </span>
            </div>
        </div>
        <div className='flex justify-between py-2'>
            <span className="font-bold">Status</span>
            <p> {session?.status}</p>
        </div>
        </div>
    </section>
  );
}


