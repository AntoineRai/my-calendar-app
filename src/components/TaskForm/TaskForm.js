import React, { useState } from 'react';
import './TaskForm.css';

const TaskForm = ({ addTask }) => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const notify = () => {
    Notification.requestPermission().then(function (result) {
      new Notification('Tache ajouté', {
        body: 'La tache ' + eventName + ' a été ajouté avec succès pour la date : ' + eventDate + ' !',
      })
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (eventName.trim() !== '' && eventDate.trim() !== '') {
      addTask(eventName, eventDate);
      setEventName('');
      setEventDate('');
      setIsFormValid(false);
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
        <button type="submit" disabled={!isFormValid} onClick={notify}>
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
