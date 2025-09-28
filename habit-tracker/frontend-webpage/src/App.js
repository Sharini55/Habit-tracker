import React from 'react';
import Header from './components/Header';
import Calendar from './components/Calendar';
import PetCard from './components/PetCard';
import TodoList from './components/TodoList';
import Reminders from './components/Reminders';
import HabitTracker from './components/HabitTracker';
import './styles/App.css';

function App() {
    const samplePet = {
        image: 'https://place-puppy.com/300x300',
        name: 'Buddy',
        breed: 'Mixed Breed'
    };
    return (
        <div className="App">
            <Header />
            <div className="content">
                <Calendar />
                <PetCard pet={samplePet} />
                <TodoList />
                <Reminders />
                <HabitTracker />
            </div>
        </div>
    );
}

export default App;