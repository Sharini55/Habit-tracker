import React from 'react';

const Calendar = () => {
    const handleButtonClick = (link) => {
        window.location.href = link;
    };

    return (
        <div className="calendar-container">
            <h1>Calendar</h1>
            <div className="button-container">
                <button onClick={() => handleButtonClick('#')}>Button 1</button>
                <button onClick={() => handleButtonClick('#')}>Button 2</button>
                <button onClick={() => handleButtonClick('#')}>Button 3</button>
                <button onClick={() => handleButtonClick('#')}>Button 4</button>
            </div>
        </div>
    );
};

export default Calendar;