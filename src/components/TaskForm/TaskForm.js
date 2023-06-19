import React, { useState } from 'react';
import './TaskForm.css';

const { ipcRenderer } = window.require('electron');

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
      setIsFormValid(false);
      showNotification(eventName, eventDate);
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

  const showNotification = (eventName, eventDate) => {
    ipcRenderer.invoke('showNotification', eventName, eventDate);
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
