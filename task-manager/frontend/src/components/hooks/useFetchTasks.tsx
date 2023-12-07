import { useQuery } from "@tanstack/react-query";
import { FetchTasks } from "../api/FetchTasks";
import { Task, UseFetchTasksResult } from "../types/Types";

export function useFetchTasks(): UseFetchTasksResult {
  const { isLoading, data: tasks } = useQuery<Task[]>({
    queryKey: ["task"],
    queryFn: FetchTasks,
  });

  console.log(tasks);

  return { isLoading, tasks };
}
