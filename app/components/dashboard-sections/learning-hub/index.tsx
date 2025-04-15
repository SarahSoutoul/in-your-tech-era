'use client'

import Link from "next/link"

export default function LearningHub() {
    return (
        <section className="shadow-md rounded-lg p-6 bg-gray-100 dark:bg-[#424242]">
            <h3>Your Personalized Learning Hub</h3>
            <p>🧭 Your current roadmap: <strong>Frontend Focus – React & Projects</strong></p>
            <Link href="/resources" className="link">View All Resources</Link>
         </section>
    )
}