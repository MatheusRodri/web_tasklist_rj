import axios from "axios";
import { useEffect, useState } from "react";
import TaskItem from "./components/TaskItem";

function App() {
  const [tasks,setTasks] = useState([]);

  const fetchTasks = async () =>{
    try{
     const {data} = await axios.get("https://fsc-task-manager-backend.herokuapp.com/tasks");
      setTasks(data);
      //console.log(data);
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    fetchTasks(); 
  },[])

  return (
    <>
     {tasks.map(task=>(
      <TaskItem key={task.id} task={task}/>
      ))}
    </>
  );
}

export default App;
