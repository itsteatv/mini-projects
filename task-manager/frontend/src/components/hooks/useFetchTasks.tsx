import { useQuery } from "@tanstack/react-query";
import { FetchTasks } from "../api/FetchTasks";
import { Task, UseFetchTasksResult } from "../types/Types";

export function useFetchTasks(): UseFetchTasksResult {
  const {
    isError,
    isLoading,
    data: task,
  } = useQuery<Task[]>({
    queryKey: ["task"],
    queryFn: FetchTasks,
  });

  return { isError, isLoading, task };
}
