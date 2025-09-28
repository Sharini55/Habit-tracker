import React from 'react';
import './Header.css'; // Assuming you have a CSS file for styling

const Header = () => {
    return (
        <header>
            <h1>Sparky</h1>
            <nav>
                <ul>
                    <li><a href="#calendar">Calendar</a></li>
                    <li><a href="#pets">Pets</a></li>
                    <li><a href="#todo">Todo List</a></li>
                    <li><a href="#reminders">Reminders</a></li>
                    <li><a href="#habits">Habit Tracker</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;