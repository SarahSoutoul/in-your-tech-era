'use client';

import { useState, useEffect } from 'react';
import { GiProgression } from "@/app/icons";
import { TaskSection, ReflectionSection} from '@/app/components/dashboard-components';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface Reflection {
  struggles: string;
  proudOf: string;
  submittedOn: string;
}

export default function ProgressJournal() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [reflections, setReflections] = useState<Reflection[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('progressJournal');
    if (saved) {
      const parsed = JSON.parse(saved);
      setTasks((prev) => parsed.tasks || prev);
      setReflections((prev) => parsed.reflections || prev);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(
        'progressJournal',
        JSON.stringify({ tasks, reflections })
      );
    }
  }, [tasks, reflections, isLoaded]);

  return (
    <div className="p-6 bg-gray-100 dark:bg-[#424242] rounded-2xl shadow-md space-y-6 max-w-2xl">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <GiProgression className='h-6 w-6 text-[#FF80B5] dark:text-purple-400' />
        Your Progress Journal
      </h2>
      <TaskSection tasks={tasks} setTasks={setTasks} />
      <ReflectionSection reflections={reflections} setReflections={setReflections} />
    </div>
  );
}
