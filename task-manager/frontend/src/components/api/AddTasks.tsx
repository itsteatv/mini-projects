import { Task } from "../types/Types";
import { url } from "../utils/Url";

export const AddTask = async (task: Task): Promise<Task> => {
  console.log(task);

  const response = await fetch(`${url}/api/tasks/`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(task),
  });

  console.log(response);

  const data = response.json();
  console.log(data);
  return data;
};
