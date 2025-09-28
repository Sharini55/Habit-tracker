import React, { useState, useEffect } from 'react';

function Reminders({ onClick, reminders: remindersProp, setReminders: setRemindersProp, fullPage }) {
    const [reminders, setReminders] = useState(() => {
        if (remindersProp) return remindersProp;
        try { return JSON.parse(localStorage.getItem('reminders')) || []; } catch { return []; }
    });

    const [text, setText] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    useEffect(() => {
        if (setRemindersProp) return;
        localStorage.setItem('reminders', JSON.stringify(reminders));
    }, [reminders, setRemindersProp]);

    useEffect(() => { if (remindersProp) setReminders(remindersProp); }, [remindersProp]);

    useEffect(() => {
        const timer = setInterval(() => {
            const now = Date.now();
            reminders.forEach(r => {
                if (!r.notified && r.when && new Date(r.when).getTime() <= now) {
                    alert(`Reminder: ${r.text}`);
                    r.notified = true;
                    setReminders([...reminders]);
                    if (setRemindersProp) setRemindersProp([...reminders]);
                }
            });
        }, 30000); // check every 30s
        return () => clearInterval(timer);
    }, [reminders, setRemindersProp]);

    const addReminder = () => {
        if (!text || !date || !time) return;
        const when = new Date(`${date}T${time}`);
        const newRem = { id: Date.now(), text, when: when.toISOString(), notified: false };
        const newList = [...reminders, newRem];
        setReminders(newList);
        setRemindersProp ? setRemindersProp(newList) : setReminders(newList);
        setText(''); setDate(''); setTime('');
    };

    const removeReminder = (id) => {
        const newList = reminders.filter(r => r.id !== id);
        setReminders(newList);
        setRemindersProp ? setRemindersProp(newList) : setReminders(newList);
    };

    if (!fullPage) {
        return (
            <div className="reminders">
                <h3 style={{ cursor: 'pointer' }} onClick={onClick}>Reminders</h3>
                <ul>
                    {reminders.slice(0,3).map(r => (
                        <li key={r.id}>{r.text}</li>
                    ))}
                </ul>
            </div>
        );
    }

    return (
        <div className="reminders">
            <h2>Reminders</h2>
            <div>
                <input placeholder="Reminder text" value={text} onChange={(e) => setText(e.target.value)} />
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
                <button onClick={addReminder}>Add</button>
            </div>
            <ul>
                {reminders.map(r => (
                    <li key={r.id} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                        <span>{r.text} {r.when ? ` — ${new Date(r.when).toLocaleString()}` : ''}</span>
                        <button onClick={() => removeReminder(r.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Reminders;