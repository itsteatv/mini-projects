import { useQuery } from "@tanstack/react-query";
import { FetchTasks } from "../api/FetchTasks";

export async function useFetchTasks(): Promise<Task> {
  const { isLoading, data: task } = useQuery({
    queryKey: ["task"],
    queryFn: FetchTasks,
  });

  return { isLoading, task };
}
