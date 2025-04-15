'use client'

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Calendar() {
    const clientId = process.env.NEXT_PUBLIC_CALENDLY_CLIENT_ID!;
    const redirectUri = process.env.NEXT_PUBLIC_CALENDLY_REDIRECT_URI!;
    const oauthUrl = `https://auth.calendly.com/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}`;
    const [loading, setLoading] = useState(true);
    const [calendlyUser, setCalendlyUser] = useState<any>(null);
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        async function fetchCalendlyData() {
            setLoading(true);
            try {
                const res = await fetch('/api/calendly/profile');
                if (!res.ok) throw new Error('Not connected');
                const data = await res.json();

                setCalendlyUser(data.user);

                const upcomingEvents = data.events.filter((event: any) => {
                    const eventStartTime = new Date(event.start_time);
                    return eventStartTime > new Date();
                });
                setEvents(upcomingEvents || []);
            } catch (err) {
                setCalendlyUser(null);
            } finally {
                setLoading(false);
            }
        }

        fetchCalendlyData();
    }, []);

    const disconnectCalendly = async () => {
        await fetch('/api/calendly/disconnect', { method: 'POST' });
        setCalendlyUser(null);
    };
 
    if (loading) return <p>Loading...</p>;

    return (
        <div className="p-6 bg-gray-100 dark:bg-[#424242] rounded-2xl shadow-md space-y-6 max-w-2xl">
            {!calendlyUser ? (
                <a
                    href={oauthUrl}
                    className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                    Connect your Calendly
                </a>
            ) : (
            <div className="space-y-4">
                <p>
                Connected as <strong>{calendlyUser.name}</strong> ({calendlyUser.email})
                </p>
                {calendlyUser.avatar_url ? (
                    <Image
                        src={calendlyUser.avatar_url}
                        alt="Calendly avatar"
                        width={400}
                        height={300}
                        className="size-15 rounded-full"
                        priority
                    />
                ) : null} 
                <button
                    onClick={disconnectCalendly}
                    className="px-4 py-2 bg-red-500 text-white rounded"
                >
                    Disconnect Calendly
                </button>
                <a
                    href="https://calendly.com/soutoulsarah-uk/1-1-mentor-session"
                    className="text-blue-500 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Schedule a new session with me
                </a>
                <div className="mt-4">
                    <h3 className="text-md font-semibold mb-2">Upcoming Sessions</h3>
                        {events.length === 0 ? (
                                <p className="text-sm text-gray-600">No upcoming sessions found.</p>
                            ) : (
                                <ul className="space-y-4">
                                        {events.map((event: any) => (
                                            <li key={event.uri} className="p-3 border rounded-md bg-white shadow-sm text-gray-600">
                                                <p className="font-medium">{event.name}</p>
                                                <p className="text-sm text-gray-600">
                                                    {new Date(event.start_time).toLocaleString()} –{' '}
                                                    {new Date(event.end_time).toLocaleString()}
                                                </p>
                                                <div className="flex gap-2">
                                                    {event.location.join_url && (
                                                        <p className="text-sm text-blue-500">
                                                            <a
                                                                href={event.location.join_url}
                                                                className="underline"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                Join the session
                                                            </a>
                                                        </p>
                                                    )}
                                                </div>
                                         </li>
                                    ))}
                             </ul>
                        )}
                    </div> 
                </div>
            )}
      </div>  
    )
}

