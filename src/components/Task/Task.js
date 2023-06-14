import React from 'react';

const Task = ({ eventName, eventDate }) => {
  return (
    <div>
      <h3>{eventName}</h3>
      <p>{eventDate}</p>
    </div>
  );
};

export default Task;
