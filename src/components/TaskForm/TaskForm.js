import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (eventName.trim() !== '' && eventDate.trim() !== '') {
            addTask(eventName, eventDate);
            setEventName('');
            setEventDate('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nom de l'événement"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
            />
            <input
                type="date"
                placeholder="Date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
            />
            <button type="submit">Ajouter</button>
        </form>
    );
};

export default TaskForm;
