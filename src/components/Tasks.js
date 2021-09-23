import React from 'react';
import Task from "./Task";






function Tasks({tasks, deleteTask, toggleReminder}) {
    
    return (
        <div className = "tasks_wrapper wrapper">
           <div className =  "tasks">
           {tasks.map((task, index) =>   <Task key = {task.id} task = {task} deleteTask = {deleteTask} toggleReminder = {toggleReminder}></Task>)}
           </div>      
        </div>
    )
}

export default Tasks
