import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';

function App() {
  const [tasks, setTasks] = useState([
    { eventName: 'Anniversaire de Pierre', eventDate: '2000-01-11' },
  ]);

  const addTask = (eventName, eventDate) => {
    const newTask = { eventName, eventDate };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
