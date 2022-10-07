//before return
// const name= 'Brad'
// const x = true

//in div 
// <h2>hello {name}</h2>
//<h2>Hello {x ? 'Yes' : 'No'}</h2>
import { useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'



// from Tasks.js

const App = () => {
  const [tasks, setTasks] = useState([
    {
        "id": 1,
        "text": "test",
        "other": "no-show",
        "day": "monday",
        "reminder": true
      },
      {
        "text": "Test4",
        "day": "Wednesday",
        "reminder": false,
        "id": 3
      },
      {
        "text": "Task6",
        "day": "Thursday",
        "reminder": true,
        "id": 4
      },
    ])
  return (
    //only on div
    <div className="container">
      {/* <h1>Hello</h1>
      <h2>hello too</h2> */}
      {/* Number boolean put in curly braces, title={1} */}
      
      <Header />
      {/* take our task and pass them into our task components as a prop */}
      <Tasks tasks={tasks} />
    </div>
  //   <>
  //      <h1>Hello</h1>
  //   </>
  )
}

export default App;
