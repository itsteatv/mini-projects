import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { FormsData } from "../utils/types";
import { LoginAPI } from "../api/LoginAPI";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";

export function useLogin() {
  const navigate = useNavigate();
  const { user } = useUser();

  const { isPending, mutate: login } = useMutation({
    mutationFn: ({ email, password }: FormsData) =>
      LoginAPI({ email, password }),

    onSuccess: (data) => {
      toast.success("Success! You are logged in.");

      const token = data.token;

      if (token) {
        localStorage.setItem("token", token);
        user(token);
        navigate("/welcome");
      }

      console.log(data);
    },

    onError: (data) => {
      console.log(data);
      toast.error(data.message);
    },
  });

  return { isPending, login };
}
