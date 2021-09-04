import React, { useState } from "react";

import './components/Tasks';
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler Livros',
      completed: true,
    }
  ]); //Atualiza a tarefa 

  return (
    <> 
      <div className="container">
        <AddTask />
        <Tasks tasks={tasks} />
      </div>
    </>
  );

   
  
};

export default App;