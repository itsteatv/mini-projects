import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddTask } from "../api/AddTasks";
import toast from "react-hot-toast";
import { Task } from "../types/Types";

export default function useAddTasks() {
  const queryClient = useQueryClient();

  const { mutate: addTask } = useMutation<Task, Error, Task, unknown>({
    mutationFn: (newTask) => AddTask(newTask),

    onSuccess: (data) => {
      toast.success("New task successfully added"),
        queryClient.invalidateQueries({
          queryKey: ["task"],
        });

      console.log(data);
    },

    onError: () => {
      toast.error("New task Could not be added");
    },
  });

  return { addTask };
}
