import useDeleteTasks from "../hooks/useDeleteTasks";
import { Task } from "../types/Types";

interface DeleteTaskNotificationProps {
  task: Task;
  onCancel: () => void;
  onClose: () => void;
}
export default function DeleteTaskNotification({
  task,
  onCancel,
}: DeleteTaskNotificationProps) {
  const { deleteTask } = useDeleteTasks();

  return (
    <div role="alert" className="alert alert-error">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-current shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>Are you sure you want to delete this task?</span>
      <div className="flex gap-1">
        <button className="btn btn-sm text-white" onClick={onCancel}>
          Cancel
        </button>
        <button
          className="btn btn-sm bg-red-500 border-transparent hover:bg-red-600 hover:border-transparent text-white"
          onClick={() => {
            deleteTask(task);
            onCancel();
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
