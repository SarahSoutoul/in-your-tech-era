'use client';

import { useState } from "react";
import { TbBubbleTextFilled } from "@/app/icons";
import { Button } from '@/src/components/ui/button';

type Reflection = {
    struggles: string;
    proudOf: string;
    submittedOn: string;
};

type FormProps = {
    reflections: Reflection[];
    setReflections: React.Dispatch<React.SetStateAction<Reflection[]>>;
};


export default function ReflectionSection({ reflections, setReflections }: FormProps) {
    const [newReflection, setNewReflection] = useState<Omit<Reflection, 'submittedOn'>>({
        struggles: '',
        proudOf: '',
    });

    const handleReflectionSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const reflectionWithDate: Reflection = {
            ...newReflection,
            submittedOn: new Date().toLocaleDateString()
        };

        setReflections(prev => [...prev, reflectionWithDate]);
        setNewReflection({ struggles: '', proudOf: '' });
        alert("Reflections submitted successfully!");
    };

    return (
        <div className="flex flex-col gap-6">
            <h3 className="text-xl font-semibold flex items-center gap-2">
                <TbBubbleTextFilled className='h-6 w-6 text-[#FF80B5] dark:text-purple-400' />
                This Week’s Reflections
            </h3>
            <form onSubmit={handleReflectionSubmit} className="space-y-2">
                <label className="block font-medium mb-1">What did I struggle with this week?</label>
                <textarea
                    value={newReflection.struggles}
                    onChange={(e) => setNewReflection({ ...newReflection, struggles: e.target.value })}
                    className="w-full border rounded-md p-2 mb-4"
                    placeholder="Be real with yourself..."
                />

                <label className="block font-medium mb-1">What am I proud of?</label>
                <textarea
                    value={newReflection.proudOf}
                    onChange={(e) => setNewReflection({ ...newReflection, proudOf: e.target.value })}
                    className="w-full border rounded-md p-2"
                    placeholder="Celebrate your wins!"
                />
                <Button
                    className="w-full py-2 bg-blue-500 text-white rounded-md"
                    variant="outline"
                >
                    Submit Reflections
                </Button>
            </form>
            <div>
                <ul className="space-y-3">
                    {reflections.map((reflection, index) => (
                        <li key={index} className="border p-4 rounded-md shadow-sm">
                        <p className="text-sm text-gray-500 mb-2">Submitted on: {reflection.submittedOn}</p>
                        <p className="mb-2"><strong>Struggled with:</strong> {reflection.struggles}</p>
                        <p><strong>Proud of:</strong> {reflection.proudOf}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}