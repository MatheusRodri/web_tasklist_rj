import { useState } from "react";
import "./AddTask.scss";
import CustomInput from "./CustomInput";


const AddTask = ()=>{

    const [task,setTask] = useState("");

    const onChange = (e) => {
        setTask(e.target.value);
    }

    return(
        <div className="add-task-container">
            <CustomInput label={"Adicionar nova tarefa..."} value={task} onChange={onChange}/>
        </div>
    )
}

export default AddTask;