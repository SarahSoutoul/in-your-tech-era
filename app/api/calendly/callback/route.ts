import { NextResponse } from 'next/server';
import axios from 'axios';
import { auth, clerkClient } from '@clerk/nextjs/server';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get('code');

  const { userId } = await auth();
  const client = await clerkClient();

  if (!userId || !code) {
    return NextResponse.redirect('/error');
  }

  try {
    const tokenRes = await axios.post('https://auth.calendly.com/oauth/token', {
      grant_type: 'authorization_code',
      code,
      client_id: process.env.NEXT_PUBLIC_CALENDLY_CLIENT_ID,
      client_secret: process.env.CALENDLY_CLIENT_SECRET,
      redirect_uri: process.env.NEXT_PUBLIC_CALENDLY_REDIRECT_URI,
    });

    const accessToken = tokenRes.data.access_token;

    await client.users.updateUserMetadata(userId, {
      publicMetadata: {
        calendlyAccessToken: accessToken,
      },
    });

    return NextResponse.redirect(new URL('/dashboard', req.url));
  } catch (error) {
    console.error('OAuth Error:', error);
    return NextResponse.redirect(new URL('/error', req.url));
  }
}
