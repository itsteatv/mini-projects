import { useFetchTasks } from "../hooks/useFetchTasks";
import { Spinner } from "./Spinner";
import { CgCheckO, CgCloseO } from "react-icons/cg";
import { CgTrashEmpty, CgPen } from "react-icons/cg";
import Dropdown from "./Dropdown";
import useDeleteTasks from "../hooks/useDeleteTasks";

function TaskList() {
  const { isLoading, task } = useFetchTasks();
  const { deleteTask } = useDeleteTasks();

  if (isLoading) {
    return <Spinner />;
  }

  const showAdditionalIcons = task?.length > 0;

  return (
    <div className="flex items-center min-h-screen font-Ubuntu">
      <div className="mx-auto my-10 max-w-lg rounded-xl bg-white p-8 shadow shadow-slate-300">
        <div className="flex flex-row items-center gap-10">
          <div>
            <h1 className="text-black text-3xl font-medium">Tasks list</h1>
          </div>
          <div className="relative">
            <input
              id="id-01"
              type="text"
              name="id-01"
              placeholder="your name"
              className="peer relative h-10 w-full rounded border bg-white border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-slate-200 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />
            <label
              htmlFor="id-01"
              className="absolute -top-2 left-2 z-[1] cursor-text px-2 text-xs transition-all before:absolute before:left-0 before:top-0 before:z-[-1] before:block before:h-full before:w-full text-black before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-black peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
            >
              {" "}
              Search for task{" "}
            </label>
          </div>
        </div>
        {showAdditionalIcons ? (
          <div className="flex items-center justify-between mt-4 ">
            <p className="text-black text-center">
              Hello, here are your latest tasks
            </p>
            <Dropdown />
          </div>
        ) : (
          <div className="flex items-center justify-between mt-4 ">
            <p className="text-black text-left">Hello, add new task</p>
            <Dropdown />
          </div>
        )}
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
                <CgPen className="cursor-pointer text-black" />
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
                <div className="text-black">{task.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
