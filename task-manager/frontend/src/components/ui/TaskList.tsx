import { useFetchTasks } from "../hooks/useFetchTasks";
import { Spinner } from "./Spinner";
import { CgCheckO, CgCloseO } from "react-icons/cg";
import { CgTrashEmpty, CgPen } from "react-icons/cg";
import { useState, useEffect } from "react";
import { Task } from "../types/Types";
import Dropdown from "./Dropdown";
import useDeleteTasks from "../hooks/useDeleteTasks";
import EditTasksModal from "./EditTasksModal";
import ReactMarkdown from "react-markdown";
import ErrorFallback from "./ErrorFallback";

function TaskList() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const { isLoading, task } = useFetchTasks();
  const { deleteTask } = useDeleteTasks();

  useEffect(() => {
    const modalElement = document.getElementById("my_modal_4");

    if (isEditModalOpen && modalElement) {
      modalElement.showModal();
    }
  }, [isEditModalOpen]);

  const closeModal = () => {
    setIsEditModalOpen(false);
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (!task?.length) {
    return <ErrorFallback />;
  }

  const showAdditionalIcons = task?.length > 0;

  return (
    <div className="flex items-center min-h-screen font-Kanit >=445px:mx-4">
      <div className="mx-auto my-10 rounded-xl w-full max-w-[46rem] >=768px:max-w-[35rem] >=600px:max-w-[27rem] bg-white p-8 shadow shadow-slate-300">
        <div className="flex flex-row >=445px:flex-col items-center gap-10 >=445px:gap-0">
          <div>
            <h1 className="text-black text-3xl font-medium">Tasks list</h1>
          </div>
          <div className="relative">
            {/* <input
              id="id-01"
              type="text"
              name="id-01"
              placeholder="Search for task"
              className="input input-bordered w-full max-w-xs bg-white mt-4"
            /> */}
          </div>
        </div>
        <div className="flex items-center justify-between mt-4 >=445px:gap-4">
          <p className="text-black text-center">
            {showAdditionalIcons
              ? "Hello, here are your latest tasks"
              : "Hello, add new task"}
          </p>
          <Dropdown />
        </div>
        {task?.map((task) => (
          <div id="tasks" className="my-5" key={task._id}>
            <div
              id="task"
              className="flex flex-row-reverse items-center justify-between border-b border-l-4 border-slate-200 border-l-transparent bg-gradient-to-r from-transparent to-transparent px-2 py-3 transition duration-150 ease-linear hover:from-slate-100"
            >
              <div className="flex gap-2">
                <CgTrashEmpty
                  onClick={() => deleteTask(task)}
                  className="cursor-pointer text-black"
                />
                <CgPen
                  onClick={() => {
                    setIsEditModalOpen(true);
                    setEditingTask(task);
                  }}
                  className="cursor-pointer text-black"
                />
                {isEditModalOpen && editingTask && (
                  <EditTasksModal task={editingTask} closeModal={closeModal} />
                )}
              </div>
              <div className="flex items-center justify-between space-x-2">
                {task?.completed === false ? (
                  <div className="flex gap-2 text-red-600">
                    <CgCloseO />
                  </div>
                ) : (
                  <div className="flex gap-2 text-green-700">
                    <CgCheckO />
                  </div>
                )}
                <div>
                  <div className="text-black">{task.title}</div>
                  <ReactMarkdown className={"ml-1 text-[0.75rem] italic"}>
                    {task.desc}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
