import React from 'react';

const HabitTracker = () => {
    const habits = [
        { name: 'Exercise', href: '#' },
        { name: 'Read', href: '#' },
        { name: 'Meditate', href: '#' },
        { name: 'Drink Water', href: '#' },
        { name: 'Sleep Early', href: '#' },
    ];

    return (
        <div className="habit-tracker">
            <h2>Habit Tracker</h2>
            <ul>
                {habits.map((habit, index) => (
                    <li key={index}>
                        <a href={habit.href} className="habit-button">
                            {habit.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HabitTracker;