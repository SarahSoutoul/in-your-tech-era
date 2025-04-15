import { auth, clerkClient } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function POST() {
  const { userId } = await auth();
  const client = await clerkClient()
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  await client.users.updateUserMetadata(userId, {
    publicMetadata: {
      calendlyAccessToken: null,
    },
  });

  return NextResponse.json({ success: true });
}
