import { Task } from "../types/Types";
import { useState } from "react";
import { v4 as uuidV4 } from "uuid";
interface ModalProps {
  closeModal: () => void;
  addTask: (newTask: Task) => void;
}

export default function Modal({ closeModal, addTask }: ModalProps) {
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);

  const handleAddTask = () => {
    const newTask: Task = {
      _id: uuidV4(),
      title,
      desc,
      completed,
    };

    addTask(newTask);
    closeModal();
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
          <form className="flex flex-col items-center">
            <h2 className="text-left font-bold font-Ubuntu">Add Task</h2>
            <div className="mt-4">
              <input
                type="text"
                value={title}
                placeholder="Type title here"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <input
                type="text"
                value={desc}
                placeholder="Type description here"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <div className="form-control mt-4">
              <label className="label cursor-pointer">
                <span className="label-text">Completed ?</span>
                <input
                  checked={completed}
                  onChange={(e) => setCompleted(e.target.checked)}
                  type="checkbox"
                  className="checkbox ml-4"
                />
              </label>
            </div>
            <div className="flex gap-4 mt-4">
              <button className="btn btn-success" onClick={handleAddTask}>
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
