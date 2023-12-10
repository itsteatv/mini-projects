import { FormEvent, useState } from "react";
import useAddTasks from "../hooks/useAddTasks";

interface AddTasksModalProps {
  closeModal?: () => void;
}

export default function AddTasksModal({ closeModal }: AddTasksModalProps) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [completed, setCompleted] = useState(false);

  const { addTask } = useAddTasks();

  const handleAddTask = function (event: FormEvent) {
    event.preventDefault();

    const newTask = {
      title: title,
      desc: desc,
      completed: completed,
    };

    addTask(newTask);

    closeModal?.();
  };

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button
              onClick={closeModal}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          <form className="flex flex-col items-center" onSubmit={handleAddTask}>
            <h2 className="text-left font-bold font-Ubuntu">Add Task</h2>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Type title here"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Type description here"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <div className="form-control mt-4">
              <label className="label cursor-pointer">
                <span className="label-text">Completed ?</span>
                <input
                  type="checkbox"
                  className="checkbox ml-4"
                  onChange={(e) => setCompleted(e.target.checked)}
                />
              </label>
            </div>
            <div className="flex gap-4 mt-4">
              <button type="submit" className="btn btn-success">
                Add Task
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
