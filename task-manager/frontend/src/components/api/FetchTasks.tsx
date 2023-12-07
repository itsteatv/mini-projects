import { Task } from "../types/Types";

export const FetchTasks = async () => {
  const url = "http://localhost:5000";

  const response = await fetch(`${url}/api/tasks`);
  const data: Task[] = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }

  console.log(data);
  return data;
};
