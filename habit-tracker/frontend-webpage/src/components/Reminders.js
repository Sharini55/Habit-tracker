import React from 'react';

const Reminders = () => {
    const reminders = [
        { id: 1, text: 'Doctor appointment at 3 PM', href: '#' },
        { id: 2, text: 'Meeting with team at 10 AM', href: '#' },
        { id: 3, text: 'Grocery shopping', href: '#' },
        { id: 4, text: 'Call mom', href: '#' },
    ];

    return (
        <div>
            <h2>Reminders</h2>
            <ul>
                {reminders.map(reminder => (
                    <li key={reminder.id}>
                        <a href={reminder.href}>{reminder.text}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Reminders;