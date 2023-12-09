import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Task } from "../types/Types";
import EditTasks from "../api/EditTasks";

export default function useEditTasks() {
  const queryClient = useQueryClient();

  const { mutate: editTask } = useMutation<Task, Error, Task, unknown>({
    mutationFn: (newTask) => EditTasks(newTask),

    onSuccess: (data) => {
      toast.success("Task successfully edited"),
        queryClient.invalidateQueries({
          queryKey: ["task"],
        });

      console.log(data);
    },

    onError: () => {
      toast.error("Task could not be edited");
    },
  });

  return { editTask };
}
