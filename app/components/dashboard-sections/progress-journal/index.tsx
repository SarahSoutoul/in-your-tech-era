'use client';

import { useState, useEffect } from 'react';
import { GiProgression } from "@/app/icons";
import { TaskSection, ReflectionSection} from '@/app/components/dashboard-components';
import { useUser } from '@clerk/nextjs';

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
  const { user } = useUser();
  const userId = user?.id;

  const [tasks, setTasks] = useState<Task[]>([]);
  const [reflections, setReflections] = useState<Reflection[]>([]);

  useEffect(() => {
    if (userId) {
      const saved = localStorage.getItem(`progressJournal-${userId}`);
      if (saved) {
        const parsed = JSON.parse(saved);
        setTasks(parsed.tasks || []);
        setReflections(parsed.reflections || []);
      }
    }
  }, [userId]);

  useEffect(() => {
    if (userId) {
      localStorage.setItem(
        `progressJournal-${userId}`,
        JSON.stringify({ tasks, reflections })
      );
    }
  }, [tasks, reflections, userId]);

  return (
    <div className="p-6 bg-gray-100 dark:bg-[#424242] rounded-2xl shadow-md space-y-6">
      <h2 className="text-3xl font-bold flex items-center gap-2">
        <GiProgression className='h-6 w-6 text-[#FF80B5] dark:text-purple-400' />
        Your Progress Journal
      </h2>
      <TaskSection tasks={tasks} setTasks={setTasks} />
      <ReflectionSection reflections={reflections} setReflections={setReflections} />
    </div>
  );
}
