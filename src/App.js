import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import {useState} from "react";



function App() {

  const [tasks, setTasks] = useState(
    [
        {
        id: 1,
        text: "Doctor Apointment",
        start: "1:30pm",
        finish: "1:30pm",
        done: false,
         },
    
        {
        id: 2,
        text: "Meeting at School",
        start: "12:30pm",
        finish: "12:30pm",
        done: true,
         },
    
        {
        id: 3,
        text: "Food Shoping",
         start:  "2:30pm",
        finish:  "2:30pm",
        done: false,
         },


   ]
);

  // Task deleting logic
  const deleteTask =  (id) => {

    setTasks(tasks.filter((task) => task.id !== id));

  };

  // Task Done logic
  const toggleReminder =  (id) => {

    setTasks(tasks.map((task) => {

     return  task.id === id ? {...task, done: !task.done} : task;

    }));

  };


 
// Returning JSX
  return (
    <div className="main_wrapper wrapper">

       <div className = "main">
        <Header index = {1} ></Header>
        <AddTask></AddTask>
        {tasks.length > 0 ? (<Tasks tasks = {tasks} deleteTask = {deleteTask} toggleReminder = {toggleReminder}> </Tasks>) : (<h4 style = {{color:"red"}}>No Task to show</h4> )} 
       
       </div>
    </div>
  );
}

export default App;
 

