import React from 'react';

export default function HabitPage({ goBack }) {
  return (
    <div className="page">
      <button onClick={goBack}>Back</button>
      <h2>Habit Page</h2>
      <p>Full habit tracker page — editable habits live here.</p>
    </div>
  );
}

