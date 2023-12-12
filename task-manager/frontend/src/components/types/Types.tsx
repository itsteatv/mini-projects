export interface Task {
  _id?: number | string;
  title: string;
  desc: string;
  completed: boolean | string;
}

export interface UseFetchTasksResult {
  isLoading: boolean;
  isError: boolean;
  task: Task[] | undefined;
}
