import { useFetchTasks } from "../hooks/useFetchTasks";

function TaskList() {
  const { isLoading, tasks } = useFetchTasks();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>Task:</h1>
      {tasks?.map((task) => (
        <div className="text-black flex flex-col" key={task._id}>
          <p>TITLE: {task.title}</p>
          <p>DESC: {task.desc}</p>
          <p>STATUS: {task.completed.toString()}</p>
        </div>
      ))}
    </>
  );
}

export default TaskList;
