import React, { useState, useEffect } from 'react';
import './App.css';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';

const { ipcRenderer } = window.require('electron');

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    ipcRenderer.invoke('getStoreValue', 'tasks').then((result) => {
      if (result !== undefined && result !== null) {
        setTasks(result);
      }
    });
  }, []);

  const addTask = (eventName, eventDate) => {
    const newTask = { eventName, eventDate };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    ipcRenderer.invoke('setStoreValue', 'tasks', updatedTasks);
  };

  const editTask = (index, updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
    ipcRenderer.invoke('setStoreValue', 'tasks', updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    ipcRenderer.invoke('setStoreValue', 'tasks', updatedTasks);
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
};

export default App;
