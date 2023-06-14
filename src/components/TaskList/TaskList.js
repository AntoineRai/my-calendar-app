import React from 'react';
import Task from '../Task/Task';

const TaskList = ({ tasks }) => {
    return (
        <div>
            {tasks.map((task, index) => (
                <div key={index}>
                    <Task eventName={task.eventName} eventDate={task.eventDate} />
                    {index !== tasks.length - 1 && <hr />} {/* Ajoute un trait de séparation entre les cartes */}
                </div>
            ))}
        </div>
    );
};

export default TaskList;
