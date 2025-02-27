import {v4 as uuidv4} from 'uuid';

import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import Title from './components/Title';
import { useEffect, useState } from "react"


function App() {
  
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // useEffect(function() {
  //   const fetchTasks = async function(){
  //     const response =  await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10',{
  //       method:'GET'
  //     });
  //     const data = await response.json();
  //     setTasks(data)
  //   }
  //   fetchTasks();
    
  // },[])

  function onTaskSubmit(title, description){
    if(title.replace(/\s/g, '').length == '' || description.replace(/\s/g, '').length == '') return
    const newTask = {
      id: uuidv4(), 
      title,
      description,
      isCompleted: false,
    }
    setTasks([...tasks, newTask])
  }

  
  

  function deleteTask(taskId){
    const newTask = tasks.filter((task) => {
      return task.id != taskId
    })
    setTasks(newTask)
  }

  function onTaskClick(taskId){
    const newTask = tasks.map((task) => {
      if(task.id == taskId){
        return{...task, isCompleted: !task.isCompleted}
      }
      return task
    })
    setTasks(newTask);
  }

  return(
    <div className="w-screen h-screen bg-slate-600 flex justify-center p-6">
      <div className="w-[500px]  space-y-4">
        <Title>Gerenciador de tarefas</Title>
        <AddTask onTaskSubmit={onTaskSubmit}/>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} deleteTask={deleteTask}/>
      </div>
    </div>
  )
}

export default App
