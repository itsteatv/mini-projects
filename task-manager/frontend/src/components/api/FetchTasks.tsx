import toast from "react-hot-toast";
import { Task } from "../types/Types";
import { url } from "../utils/Url";

export const FetchTasks = async () => {
  const response = await fetch(`${url}/api/tasks`);
  const data: Task[] = await response.json();

  if (!response.ok) {
    toast.error("Failed to fetch tasks");
    throw new Error("Failed to fetch tasks");
  }

  console.log(data);
  return data;
};
