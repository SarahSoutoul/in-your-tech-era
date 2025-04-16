'use client';

type Task = {
    id: number;
    text: string;
    completed: boolean;
};

type FormProps = {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

import { useState } from 'react';
import { Button } from '@/src/components/ui/button';
import { FaCheckCircle } from "@/app/icons";

export default function TaskSection({ tasks, setTasks }: FormProps) {
    const [newTask, setNewTask] = useState('');

    const handleAddTask = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTask.trim()) return;
    
        const newTaskObj = {
          id: tasks.length + 1,
          text: newTask.trim(),
          completed: false,
        };
    
        setTasks(prev => [...prev, newTaskObj]);
        setNewTask('');
    };

    const toggleTask = (id: number) => {
        setTasks(tasks.map(task =>
          task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };
    
    
    return (
        <div className='flex flex-col gap-6'>
            <h3 className="text-xl font-semibold flex items-center gap-2">
                <FaCheckCircle className='h-6 w-6 text-[#FF80B5] dark:text-purple-400' />
                This week’s tasks
            </h3>
            <form onSubmit={handleAddTask} className="flex gap-6">
                <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Add a new task"
                className="w-full p-2 border rounded"
                />
                <Button
                className="p-4 w-20 h-10"
                variant="outline"
                
                >
                    Add Task
                </Button>
            </form>
            <div>
                <ul className="space-y-3">
                    {tasks.map(task => (
                        <li key={task.id} className="flex items-center">
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTask(task.id)}
                            className="w-4 h-4 mr-3 ml-1 accent-zinc-300"
                        />
                        <span className={task.completed ? 'line-through text-gray-500' : ''}>
                            {task.text}
                        </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
