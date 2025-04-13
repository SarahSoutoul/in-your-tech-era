'use client';

import { useState, useEffect } from 'react';

export default function ProgressJournal() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Completed my first coding interview practice', done: false },
    { id: 2, text: 'Updated my GitHub portfolio', done: false },
  ]);

  const [reflections, setReflections] = useState({
    struggles: '',
    proudOf: '',
  });

  // Optional: save to localStorage for now
  useEffect(() => {
    const saved = localStorage.getItem('progressJournal');
    if (saved) {
      const parsed = JSON.parse(saved);
      setTasks((prev) => parsed.tasks || prev);
      setReflections((prev) => parsed.reflections || prev);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'progressJournal',
      JSON.stringify({ tasks, reflections })
    );
  }, [tasks, reflections]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  return (
    <div className="p-6 bg-gray-100 dark:bg-[#424242] rounded-2xl shadow-md space-y-6 max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-bold">📝 Your Progress Journal</h2>
      
      <div>
        <h3 className="text-xl font-semibold mb-2">✅ This Week’s Tasks</h3>
        <ul className="space-y-3">
          {tasks.map(task => (
            <li key={task.id} className="flex items-center">
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(task.id)}
                className="w-4 h-4 mr-3"
              />
              <span className={task.done ? 'line-through text-gray-500' : ''}>
                {task.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">💬 Reflection Prompts</h3>

        <label className="block font-medium mb-1">What did I struggle with this week?</label>
        <textarea
          value={reflections.struggles}
          onChange={(e) => setReflections({ ...reflections, struggles: e.target.value })}
          className="w-full border rounded-md p-2 mb-4"
          placeholder="Be real with yourself..."
        />

        <label className="block font-medium mb-1">What am I proud of?</label>
        <textarea
          value={reflections.proudOf}
          onChange={(e) => setReflections({ ...reflections, proudOf: e.target.value })}
          className="w-full border rounded-md p-2"
          placeholder="Celebrate your wins!"
        />
      </div>
    </div>
  );
}
