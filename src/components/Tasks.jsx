import axios from "axios";
import { useEffect, useState } from "react";
import "./Tasks.scss";


function Tasks() {
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
        <div className="tasks-container">
            <h2>Minhas tarefas</h2>

            <div className="last-tasks">
                <h3>Ultimas tarefas</h3>
                <div className="list-tasks">

                {tasks.filter(task => task.isCompleted === false).map(lastTask =><p>{lastTask.description}</p>)}
                </div>
            </div>

            <div className="completed-tasks">
                <h3>Tarefas concluidas</h3>
            <div className="list-tasks">
            {tasks.filter(task => task.isCompleted === true).map(completedTask =><p>{completedTask.description}</p>)}
            </div>
            </div>
        </div>
     );
}

export default Tasks;