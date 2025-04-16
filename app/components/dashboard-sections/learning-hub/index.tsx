'use client'

export default function LearningHub() {
    return (
        <section className="shadow-lg rounded-lg p-6 bg-gray-100 dark:bg-[#424242] space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Your Personalized Learning Hub
            </h3>
            <div className="space-y-2">
                <p className="text-lg text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Your current roadmap:</span> <strong className="text-[#FF80B5] dark:text-purple-400">Frontend Focus – React & Projects</strong>
                </p>
            </div>
            <div>
                <a 
                    className="inline-block px-4 py-2 mt-4 text-white bg-[#FF80B5] dark:bg-purple-400 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:hover:bg-gray-400"
                    aria-label="View all resources in your learning hub"
                >
                    View All Resources
                </a>
            </div>
        </section>
    )
}
