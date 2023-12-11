import useEditTasks from "../hooks/useEditTasks";
import { Task } from "../types/Types";
import { useState, useEffect } from "react";

interface EditTasksModalProps {
  closeModal?: () => void;
  task?: Task | undefined;
}

export default function EditTasksModal({
  closeModal,
  task,
}: EditTasksModalProps) {
  console.log(task);

  const [title, setTitle] = useState<string | undefined>(task?.title || "");
  const [desc, setDesc] = useState<string | undefined>(task?.desc || "");
  const [completed, setCompleted] = useState<boolean | undefined>(
    task?.completed || false
  );

  const [isFormChanged, setIsFormChanged] = useState(false);

  const { editTask } = useEditTasks();

  useEffect(() => {
    setTitle(task?.title || "");
    setDesc(task?.desc || "");
    setCompleted(task?.completed || false);
    setIsFormChanged(false);
  }, [task]);

  const handleEditTask = function (event: FormEvent) {
    event.preventDefault();

    if (!task) {
      return;
    }

    const editedTask = {
      ...task,
      title,
      desc,
      completed,
    };

    editTask(editedTask);

    closeModal?.();
  };

  const handleInputChange = () => {
    setIsFormChanged(true);
  };

  return (
    <>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button
              onClick={closeModal}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          <form
            className="flex flex-col items-center"
            onSubmit={handleEditTask}
          >
            <h2 className="text-left font-bold font-Ubuntu">Edit Task</h2>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Type title here"
                className="input input-bordered w-full max-w-xs"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  handleInputChange();
                }}
                required
              />
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Type description here"
                className="input input-bordered w-full max-w-xs"
                value={desc}
                onChange={(e) => {
                  setDesc(e.target.value);
                  handleInputChange();
                }}
              />
            </div>
            <div className="form-control mt-4">
              <label className="label cursor-pointer">
                <span className="label-text">Completed ?</span>
                <input
                  type="checkbox"
                  className="checkbox ml-4"
                  checked={completed}
                  onChange={(e) => {
                    setCompleted(e.target.checked);
                    handleInputChange();
                  }}
                />
              </label>
            </div>
            <div className="flex gap-4 mt-4">
              <button
                type="submit"
                className="btn btn-success"
                disabled={!isFormChanged || !title.trim()}
              >
                Edit Task
              </button>
              <button className="btn btn-warning" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}
