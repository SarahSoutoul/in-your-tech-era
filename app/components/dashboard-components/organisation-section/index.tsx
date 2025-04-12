'use client';
import { useOrganization } from '@clerk/nextjs';


export default function OrganisationInfo() {
  const { organization } = useOrganization();

  if (!organization) return null;

  return (
    <section>
        {organization && (
            <div className="bg-gray-100 dark:bg-[#424242] shadow-md rounded-lg p-6 dark:text-gray-900">
            <h2 className="text-xl font-bold mb-2 text-center dark:text-white">Organization Info</h2>
            <div className='bg-[#FAFAFB] rounded-lg px-2.5 py-2.5 divide-y divide-[#EEEEF0]'>
                <div className='flex justify-between py-2'>
                    <span className="font-bold">Org ID</span>
                    <div className="relative group">
                        <p className="block w-32 truncate overflow-hidden whitespace-nowrap">{organization?.id}</p>
                        <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-gray-900 text-white text-xs px-2 py-1 rounded">
                            {organization?.id}
                        </span>
                    </div>
                </div>
                <div className='flex justify-between py-2'>
                    <span className="font-bold">Org name</span>
                    <p>{organization.name}</p>
                </div>
            </div>
            </div>
        )}
    </section>
  );
}
