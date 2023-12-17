import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";
import Spinner from "./Spinner";

function RegisterForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { isPending, mutate } = useRegister();
  const navigate = useNavigate();

  console.log(email, password);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRegisterSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    mutate({ email, password });
  };

  return (
    <>
      <form
        onSubmit={handleRegisterSubmit}
        className="min-h-screen flex flex-col gap-4 items-center justify-center"
      >
        <h1 className="text-3xl font-bold font-IBM">Register</h1>
        <input
          type="text"
          placeholder="Your email here"
          className="input input-bordered w-full max-w-xs"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="Your password here"
          className="input input-bordered w-full max-w-xs"
          value={password}
          onChange={handlePasswordChange}
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
        <button
          type="submit"
          className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded-full whitespace-nowrap bg-violet-500 hover:bg-violet-600 focus:bg-violet-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-violet-300 disabled:bg-violet-300 disabled:shadow-none"
        >
          {isPending ? (
            <span>
              Registering <Spinner />
            </span>
          ) : (
            <span>Register</span>
          )}
        </button>
      </form>
    </>
  );
}

export default RegisterForm;
