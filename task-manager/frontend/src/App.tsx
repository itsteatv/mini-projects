import { useState, useEffect } from "react";

function App() {
  interface Task {
    _id: number;
    title: string;
    desc: string;
    completed: boolean;
  }

  const [tasks, setTasks] = useState<Task[]>([]);
  console.log(tasks);

  const url = "http://localhost:5000";

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await fetch(`${url}/api/tasks`);
        console.log(response);

        const data: Task[] = await response.json();
        console.log(data);
        setTasks(data);
      } catch (error) {
        console.error("Error fetching data:" + error);
      }
    };

    fetchTask();
  }, []);

  return (
    <>
      <h1>Task:</h1>
      {tasks.map((task) => (
        <div className="text-black flex flex-col" key={task._id}>
          <p>TITLE: {task.title}</p>
          <p>DESC: {task.desc}</p>
          <p>STATUS: {task.completed.toString()}</p>
        </div>
      ))}
    </>
  );
}

export default App;
