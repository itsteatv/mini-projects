import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import Spinner from "../ui/Spinner";

function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const { isPending, login } = useLogin();
  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    validateForm(newEmail, password);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validateForm(email, newPassword);
  };

  const validateForm = (newEmail: string, newPassword: string) => {
    setIsFormValid(newEmail.trim() !== "" && newPassword.trim() !== "");
  };

  const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isFormValid) {
      login({ email, password });

      console.log({ email, password });

      setEmail("");
      setPassword("");
      setIsFormValid(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleLoginSubmit}
        className="min-h-screen flex flex-col gap-4 items-center justify-center"
      >
        <h1 className="text-3xl font-bold font-IBM">Login</h1>
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
          New Here?
          <div
            className="italic cursor-pointer hover:text-gray-400 duration-300"
            onClick={() => navigate("/register")}
          >
            Create an Account!
          </div>
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded-full whitespace-nowrap bg-violet-500 hover:bg-violet-600 focus:bg-violet-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-violet-300 disabled:bg-violet-300 disabled:shadow-none"
          disabled={!isFormValid}
        >
          {isPending ? (
            <>
              Logging in <Spinner spinnerType="loading" size="xs" />
            </>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </>
  );
}

export default LoginForm;
