import React, { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (eventName, eventDate) => {
    const newTask = { eventName, eventDate };
    setTasks([...tasks, newTask]);
  };

  const editTask = (index, updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TaskForm addTask={addTask} />
      <div className="TaskListContainer">
        <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
      </div>
    </div>
  );
}

export default App;
