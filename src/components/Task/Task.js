import React, { useState } from 'react';
import './Task.css';

const Task = ({ eventName, eventDate, onEdit, onDelete }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedEventName, setEditedEventName] = useState(eventName);
  const [editedEventDate, setEditedEventDate] = useState(eventDate);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    const updatedTask = {
      eventName: editedEventName,
      eventDate: editedEventDate,
    };
    onEdit(updatedTask);

    setEditMode(false);
  };

  const handleCancel = () => {
    setEditedEventName(eventName);
    setEditedEventDate(eventDate);
    setEditMode(false);
  };

  const handleDelete = () => {
    onDelete();
  };

  return (
    <div className='Task'>
      {editMode ? (
        <div>
        <div className="Task-formField">
          <label>Nom de l'événement:</label>
          <input
            type="text"
            value={editedEventName}
            onChange={(e) => setEditedEventName(e.target.value)}
          />
        </div>
        <div className="Task-formField">
          <label>Date:</label>
          <input
            type="date"
            value={editedEventDate}
            onChange={(e) => setEditedEventDate(e.target.value)}
          />
        </div>
        <div className="Task-editButtons">
          <button className="Task-saveButton" onClick={handleSave}>Sauvegarder</button>
          <button className="Task-cancelButton" onClick={handleCancel}>Annuler</button>
        </div>
      </div>
      ) : (
        <div>
          <h3>{eventName}</h3>
          <p>{eventDate}</p>
          <div className='Task-buttons'>
            <button onClick={handleEdit}>Editer</button>
            <button onClick={handleDelete}>Supprimer</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Task;
