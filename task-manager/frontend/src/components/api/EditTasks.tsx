import { Task } from "../types/Types";
import { url } from "../utils/Url";

export default async function EditTasks(task: Task): Promise<Task> {
  const response = await fetch(`${url}/api/tasks/${task._id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PATCH",
    body: JSON.stringify(task),
  });

  if (!response.ok) {
    throw new Error("Failed to edit task");
  }

  console.log(response);

  const data = await response.json();
  console.log(data);
  return data;
}
