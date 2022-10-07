//  const tasks = [

 import App from "../App"

// /singular task component
 import Task from './Task' 
        
//           {
//             "id": 1,
//             "text": "test",
//             "other": "no-show",
//             "day": "monday",
//             "reminder": true
//           },
//           {
//             "text": "Test4",
//             "day": "Wednesday",
//             "reminder": false,
//             "id": 3
//           },
//           {
//             "text": "Task6",
//             "day": "Thursday",
//             "reminder": true,
//             "id": 4
//           }
    
      
//  ]

// instead use a hook^^^^^
//takeout put in app.js
// import { useState} from 'react'


const Tasks = ({tasks}) => {
    // call this piece of state 'tasks', func to update the state, setTasks
    // task.push()- no state is imutable , cannot directly change
    // recreate and send it down, one way data
    
    // move to App.js
    // const [tasks, setTasks] = useState([
    //     {
    //         "id": 1,
    //         "text": "test",
    //         "other": "no-show",
    //         "day": "monday",
    //         "reminder": true
    //       },
    //       {
    //         "text": "Test4",
    //         "day": "Wednesday",
    //         "reminder": false,
    //         "id": 3
    //       },
    //       {
    //         "text": "Task6",
    //         "day": "Thursday",
    //         "reminder": true,
    //         "id": 4
    //       },
    //     ])
  return (
    <>
    {/* to show up go into app.js, import task at top */}
    {/* list */}
    {/* .map looping through */}
       {tasks.map((task) => (
        // parent of list is h3
    
    //    <h3 key={task.id}>{task.text}</h3>
    // because of task.js take this out out ^^^
    
    // pass in each as a prop
    // outputting a component & passing the task in as a prop
    <Task key={task.id} task={task} />
       ))}
    </>
  )
}

export default Tasks