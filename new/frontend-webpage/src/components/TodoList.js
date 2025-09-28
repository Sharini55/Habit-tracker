import React, { useState, useEffect } from 'react';

function TodoList({ onClick, tasks: tasksProp, setTasks: setTasksProp, fullPage }) {
  const [tasks, setTasks] = useState(() => {
    if (tasksProp) return tasksProp;
    try { return JSON.parse(localStorage.getItem('tasks')) || []; } catch { return []; }
  });
  const [taskText, setTaskText] = useState('');

  useEffect(() => {
    if (setTasksProp) return; // parent controls persistence
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks, setTasksProp]);

  useEffect(() => { if (tasksProp) setTasks(tasksProp); }, [tasksProp]);

  const addTask = () => {
    if (!taskText) return;
    const newTasks = [...tasks, { text: taskText, completed: false }];
    setTasks(newTasks);
    setTasksProp ? setTasksProp(newTasks) : setTasks(newTasks);
    setTaskText('');
  };

  const toggleTask = (i) => {
    const newTasks = tasks.map((t, idx) => idx === i ? { ...t, completed: !t.completed } : t);
    setTasks(newTasks);
    setTasksProp ? setTasksProp(newTasks) : setTasks(newTasks);
  };

  const removeTask = (i) => {
    const newTasks = tasks.filter((_, idx) => idx !== i);
    setTasks(newTasks);
    setTasksProp ? setTasksProp(newTasks) : setTasks(newTasks);
  };

  if (!fullPage) {
    return (
      <div className="todo">
        <h3 style={{ cursor: 'pointer' }} onClick={onClick}>To Do</h3>
        <ul>
          {tasks.slice(0,3).map((t, i) => (
            <li key={i} style={{ textDecoration: t.completed ? 'line-through' : 'none' }}>{t.text}</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="todo">
      <h2>To Do</h2>
      <div>
        <input value={taskText} onChange={(e) => setTaskText(e.target.value)} placeholder="Add new task" />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((t, i) => (
          <li key={i} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <input type="checkbox" checked={t.completed} onChange={() => toggleTask(i)} />
            <span style={{ textDecoration: t.completed ? 'line-through' : 'none' }}>{t.text}</span>
            <button onClick={() => removeTask(i)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
