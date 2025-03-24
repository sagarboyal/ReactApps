import { useEffect, useState } from "react";
import "./App.css"

function App () {
    const [tasks, setTasks] = useState([]);
    const[error, setError] = useState(null);
    const[text, setText] = useState('');

    useEffect(() => {
        if (text.trim().length > 0) 
            setError('');
    }, [text]);

    const handleChange = (e) => {
        const {checked} = e.target;
        const task = tasks.find(task => task.id === parseInt(e.target.id));
        task.done = checked;
        setTasks([...tasks]);
      };

    const handleUpdateTask = (e) => {
        e.preventDefault();
        const taskName = e.target.name.value;
        if (!text.trim()) {
            setError("Task name is required");
            return;
        }
        setError(null);
        const task = {
            id: tasks.length + 1,
            name: text,
            done: true
        }
        setTasks([...tasks, task]);
        setText('');    
    };
    return (
      <div className="App">
        <header className="App-header">
            <h1>Todo List</h1>
        </header>
        <div>
            <form onSubmit={(e) => handleUpdateTask(e)}>
                <input type="text" name="name" 
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new task" />
                <button type="submit">Add</button>
            </form>
            {error && <p>{error}</p>}
            <div className="App-body">
            {tasks.map((task, index) => {
                return(
                    <div key={index} className="task">
                        <input type="checkbox" checked={task.body}
                        onChange={handleChange}/>
                        <span>{task.id}. </span>
                        <span>{task.name} </span>
                        
                    </div>
                );
            })}
            </div>
        </div>
      </div>
    )
  };
  
export default App;