import { useState } from "react";
import ReactSelect from "react-select/creatable";

export function NoteForm() {
  interface NoteFormState {
    [key: string]: string;
  }

  const [state, setState] = useState<NoteFormState>({
    "id-01": "",
  });

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  return (
    <div className=">=640px:mx-4 <=400px:max-w-[20rem] mx-auto">
      <div className="relative my-6">
        <input
          id="id-01"
          type="text"
          name="id-01"
          placeholder="Your name"
          value={state["id-01"]}
          className="peer relative h-10 w-full rounded border border-customGray px-4 text-sm text-customDark placeholder-customDark outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-blue-600 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
          onChange={handleChange}
        />
        <label
          htmlFor="id-01"
          className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-customDark transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-blue-600 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
        >
          Your name
        </label>
      </div>
      {/*  */}
      <div className="relative my-6">
        <textarea
          id="id-01"
          type="text"
          name="id-01"
          placeholder="Write your message"
          rows={3}
          className="peer relative w-full rounded border border-customGray px-4 py-2 text-sm text-customDark placeholder-customDark outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-blue-600 focus:outline-none invalid:focus:border-blue-600 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
        ></textarea>
        <label
          for="id-01"
          className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-blue-600 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
        >
          Write your message
        </label>
      </div>
      {/*  */}
      <ReactSelect isMulti />
    </div>
  );
}
