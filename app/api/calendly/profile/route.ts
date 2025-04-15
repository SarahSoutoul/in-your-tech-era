import { auth, clerkClient } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  const { userId } = await auth();
  const client = await clerkClient();

  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const user = await client.users.getUser(userId);
  const token = user.publicMetadata?.calendlyAccessToken as string;

  if (!token) return NextResponse.json({ error: 'Not connected to Calendly' }, { status: 401 });

  try {
    const res = await axios.get('https://api.calendly.com/users/me', {
      headers: { Authorization: `Bearer ${token}` },
    });

    const calendlyUser = res.data.resource;
    
    const eventsRes = await axios.get(
        `https://api.calendly.com/scheduled_events?user=${calendlyUser.uri}&status=active&sort=start_time:asc`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
  
      const events = eventsRes.data.collection;
  
      return NextResponse.json({
        user: calendlyUser,
        events,
      });
  } catch (error) {
    console.error('Calendly fetch error', error);
    return NextResponse.json({ error: 'Failed to fetch Calendly profile' }, { status: 500 });
  }
}
