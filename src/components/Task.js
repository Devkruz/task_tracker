import React from 'react';
import {FaTimes} from "react-icons/fa";


function Task({task, deleteTask,toggleReminder}) {
    return (
        
            <div className = { task.done ? "task reminder" : "task"} onDoubleClick = {() => toggleReminder(task.id)}>
            <h3> {task.text}   <FaTimes style = {{color: "red"}} onClick = {() => deleteTask(task.id)} /> </h3> 
            <p> <span>{task.start}</span> <strong style = {{fontWeight: "500"}}>To</strong>  <span>{task.finish}</span> </p>
            </div>
         
    )
}

export default Task
 