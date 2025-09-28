/* import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Calendar from './components/Calendar';
import PetCard from './components/PetCard';
import TodoList from './components/TodoList';
import HabitTracker from './components/HabitTracker';
import TodoPage from './components/TodoPage';
import HabitPage from './components/HabitPage';
import './styles/App.css';



function App() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState(() => {
    try { return JSON.parse(localStorage.getItem('tasks')) || []; } catch { return []; }
  });
  //const [reminders, setReminders] = useState(() => {
   // try { return JSON.parse(localStorage.getItem('reminders')) || []; } catch { return []; }
  //});

  useEffect(() => { localStorage.setItem('tasks', JSON.stringify(tasks)); }, [tasks]);
  //useEffect(() => { localStorage.setItem('reminders', JSON.stringify(reminders)); }, [reminders]);

  const samplePet = {
    image: 'https://place-puppy.com/300x300',
    name: 'Sparky',
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <div className="app-layout">
            <main className="main-content">
              <div style={{cursor:'pointer'}} onClick={() => navigate('/calendar')}>
                <Calendar />
              </div>
              <PetCard pet={samplePet} />
              <div style={{display:'flex', gap:12}}>
                <div style={{flex:1, cursor:'pointer'}} onClick={() => navigate('/todos')}>
                  <TodoList onClick={() => navigate('/todos')} tasks={tasks} setTasks={setTasks} />
                </div>
                <div style={{flex:1, cursor:'pointer'}} onClick={() => navigate('/reminders')}>
                  <Reminders onClick={() => navigate('/reminders')} reminders={reminders} setReminders={setReminders} />
                </div>
              </div>
              <div style={{cursor:'pointer'}} onClick={() => navigate('/habits')}>
                <HabitTracker onClick={() => navigate('/habits')} />
              </div>
            </main>
          </div>
        } />

        <Route path="/todos" element={<TodoPage goBack={() => navigate('/')} />} />
        <Route path="/reminders" element={<RemindersPage goBack={() => navigate('/')} />} />
        <Route path="/habits" element={<HabitPage goBack={() => navigate('/')} />} />
      </Routes>
    </div>
  );
}

export default App;
 */