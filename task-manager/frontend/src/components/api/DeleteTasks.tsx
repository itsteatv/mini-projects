import { Task } from "../types/Types";
import { url } from "../utils/Url";

export default async function DeleteTasks(task: Task): Promise<Task> {
  const response = await fetch(`${url}/api/tasks/${task._id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete task");
  }

  console.log(response);

  const data = response.json();
  console.log(data);
  return data;
}
