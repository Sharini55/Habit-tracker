import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';

export default function TodoPage({ goBack }) {
  const [tasks, setTasks] = useState(() => {
    try { return JSON.parse(localStorage.getItem('tasks')) || []; } catch { return []; }
  });

  useEffect(() => { localStorage.setItem('tasks', JSON.stringify(tasks)); }, [tasks]);

  return (
    <div className="page">
      <button onClick={goBack}>Back</button>
      <h2>Todo Page</h2>
      <TodoList tasks={tasks} setTasks={setTasks} fullPage />
    </div>
  );
}

