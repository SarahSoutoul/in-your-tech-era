'use client';

import { useUser, useOrganization } from '@clerk/nextjs';
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs';
import ThemeSwitcher from '../components/theme-switcher';

export default function DashboardPage() {
  const { user } = useUser();
  const { organization } = useOrganization();

  return (
    <main className="p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <header className="flex justify-between items-center">
        <ThemeSwitcher />
        <UserButton />
      </header>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Name: {user?.fullName}</p>
      <p>Email: {user?.primaryEmailAddress?.emailAddress}</p>
      <p>Session ID: {user?.id}</p>
      {organization && (
        <>
          <h2 className="text-xl font-bold">Organization</h2>
          <p>ID: {organization.id}</p>
          <p>Name: {organization.name}</p>
        </>
      )}
      <OrganizationSwitcher />
    </main>
  );
}