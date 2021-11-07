import {useState} from 'react';


function AddTask({onAdd}) {
     const [text, setText] = useState('');
     const [start, setStart] = useState('');
     const [finish, setFinish] = useState('');
     const [done, setDone] = useState(false);

     const submitTask = () => {
        if(!text){
            alert("Pls add a task");
            return
      }
      else{
          onAdd({text, start, finish, done})
       }
     }

    return (
        <form className = "add-task-form">
            <label>
                Task
                <br/>
                <input className = "input task-input" type = "text" 
                placeholder = "Add Task" value = {text}  onChange = {(e) => {
                    setText(e.target.value)
                }}/>
            </label>

            <label className =" time-input-label">

                <br/>
                  Time
                <br/>

                <div className="time-input_wrapper">

                    <input 
                    className = "input time-input" type = "time" 
                    placeholder = "Start" value = {start}  
                    onChange = {(e) => {
                    setStart(e.target.value)}}/> 
                    To  
                    <input
                    className = "input time-input" type = "time" 
                    placeholder = "Finish" value = {finish} 
                    onChange = {(e) => {
                    setFinish(e.target.value)}}/>

               </div>
            </label>

            <label>
                <br/>
                Done ?
                <input className = "reminder-input" type = "checkbox" 
                value = {done} 
                checked = {done}
                onChange = {(e) => {
                setDone(e.currentTarget.checked); console.log(e.currentTarget.checked)}}
                />
            </label>

            <input className = "save-btn" type="submit" value="Save Task" onClick = {(e) => {
                       e.preventDefault();
                        submitTask();
                        setFinish("");
                        setStart("");
                        setDone(false);
                        setText("")
                        
            }} />
        </form>
    )
}

export default AddTask
