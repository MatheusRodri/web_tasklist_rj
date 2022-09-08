const TaskItem = ({task})=>{
    console.log(task);
    return(
        <>
            <h1>{task.description}</h1>
        </>
    )
}

export default TaskItem; 