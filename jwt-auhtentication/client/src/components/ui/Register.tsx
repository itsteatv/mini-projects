import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const navigate = useNavigate();

  return (
    <>
      <form className="min-h-screen flex flex-col gap-4 items-center justify-center">
        <h1 className="text-3xl font-bold font-IBM">Register</h1>
        <input
          type="text"
          placeholder="Your email here"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="password"
          placeholder="Your password here"
          className="input input-bordered w-full max-w-xs"
        />
        <div className="font-IBM flex gap-1">
          Already have an account ?
          <div
            className="italic cursor-pointer hover:text-gray-400 duration-300"
            onClick={() => navigate("/login")}
          >
            Login here
          </div>
        </div>
        <button type="submit" className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded-full whitespace-nowrap bg-violet-500 hover:bg-violet-600 focus:bg-violet-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-violet-300 disabled:bg-violet-300 disabled:shadow-none">
          <span>Register</span>
        </button>
      </form>
    </>
  );
}

export default RegisterForm;
