export interface Task {
  _id: number | string;
  title: string;
  desc: string;
  completed: boolean;
}

export interface UseFetchTasksResult {
  isLoading: boolean;
  task: Task[] | undefined;
}