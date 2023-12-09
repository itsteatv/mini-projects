import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import DeleteTasks from "../api/DeleteTasks";
import { Task } from "../types/Types";

export default function useDeleteTasks() {
  const queryClient = useQueryClient();

  const { mutate: deleteTask } = useMutation<Task, Error, Task, unknown>({
    mutationFn: (newTask) => DeleteTasks(newTask),

    onSuccess: (data) => {
      toast.success("Task successfully deleted"),
        queryClient.invalidateQueries({
          queryKey: ["task"],
        });

      console.log(data);
    },

    onError: () => {
      toast.error("Task could not be deleted");
    },
  });

  return { deleteTask };
}
