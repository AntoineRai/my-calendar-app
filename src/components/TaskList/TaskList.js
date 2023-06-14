import React from 'react';
import Task from '../Task/Task';
import './TaskList.css';

const TaskList = ({ tasks, editTask, deleteTask }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>Aucune tâche pour le moment</p>
      ) : (
        tasks.map((task, index) => (
          <div key={index} className='TaskContainer'>
            <Task
              eventName={task.eventName}
              eventDate={task.eventDate}
              onEdit={(updatedTask) => editTask(index, updatedTask)}
              onDelete={() => deleteTask(index)}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
