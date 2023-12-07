export interface Task {
  _id: number;
  title: string;
  desc: string;
  completed: boolean;
}

export interface UseFetchTasksResult {
  isLoading: boolean;
  tasks: Task[] | undefined;
}
