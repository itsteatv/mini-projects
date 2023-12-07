interface Task {
  _id: number;
  title: string;
  desc: string;
  completed: boolean;
}

export const FetchTasks = async (): Promise<Task> => {
  const url = "http://localhost:5000";

  const response = await fetch(`${url}/api/tasks`);
  const data = await response.json();
  console.log(data);
  return data;
};