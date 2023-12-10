import { useQuery } from "@tanstack/react-query";
import { FetchTasks } from "../api/FetchTasks";
import { Task, UseFetchTasksResult } from "../types/Types";

export function useFetchTasks(): UseFetchTasksResult {
  const { isLoading, data: task } = useQuery<Task[]>({
    queryKey: ["task"],
    queryFn: FetchTasks,
  });

  return { isLoading, task };
}
