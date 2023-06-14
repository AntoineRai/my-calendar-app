import React, { useState } from 'react';
import './TaskForm.css';

const TaskForm = ({ addTask }) => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (eventName.trim() !== '' && eventDate.trim() !== '') {
      addTask(eventName, eventDate);
      setEventName('');
      setEventDate('');
    }
  };

  const handleEventNameChange = (e) => {
    setEventName(e.target.value);
    validateForm();
  };

  const handleEventDateChange = (e) => {
    setEventDate(e.target.value);
    validateForm();
  };

  const validateForm = () => {
    setIsFormValid(eventName.trim() !== '' && eventDate.trim() !== '');
  };

  return (
    <div className="TaskForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom de l'événement"
          value={eventName}
          onChange={handleEventNameChange}
        />
        <input
          type="date"
          placeholder="Date"
          value={eventDate}
          onChange={handleEventDateChange}
        />
        <button type="submit" disabled={!isFormValid}>
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
