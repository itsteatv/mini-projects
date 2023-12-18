import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";
import Spinner from "./Spinner";

function RegisterForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const { isPending, register } = useRegister();
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
    const isEmailValid = /^(.+)@(gmail\.com|outlook\.com|yahoo\.com)$/.test(
      newEmail
    );
    const isPasswordValid = newPassword.length >= 6;

    setIsFormValid(isEmailValid && isPasswordValid);
  };

  const handleRegisterSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    if (isFormValid) {
      register({ email, password });

      setEmail("");
      setPassword("");
      setIsFormValid(false);
    }
  };

  const getEmailMessage = () => {
    if (!email.trim()) {
      return "";
    }

    const domain = email.split("@")[1];
    if (/(gmail\.com|outlook\.com|yahoo\.com)$/.test(domain)) {
      return `Valid domain: ${domain}`;
    } else {
      return "Invalid domain. Use gmail.com, outlook.com, or yahoo.com.";
    }
  };

  const getPasswordMessage = () => {
    if (!password.trim()) {
      return "";
    }

    return password.length >= 6
      ? "Valid password: 6 characters or more"
      : "Invalid password. Use 6 characters or more.";
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
        {email && <div className="domain-message">{getEmailMessage()}</div>}
        <input
          type="password"
          placeholder="Your password here"
          className="input input-bordered w-full max-w-xs"
          value={password}
          onChange={handlePasswordChange}
        />
        {password && (
          <div className="password-message">{getPasswordMessage()}</div>
        )}
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
          disabled={!isFormValid}
        >
          {isPending ? (
            <>
              Registering <Spinner />
            </>
          ) : (
            "Register"
          )}
        </button>
      </form>
    </>
  );
}

export default RegisterForm;
