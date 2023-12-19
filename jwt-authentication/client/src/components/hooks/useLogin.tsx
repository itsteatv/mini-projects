import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { FormsData } from "../utils/types";
import { LoginAPI } from "../api/LoginAPI";

export function useLogin() {
  const { isPending, mutate: login } = useMutation({
    mutationFn: ({ email, password }: FormsData) =>
      LoginAPI({ email, password }),

    onSuccess: (data) => {
      toast.success("Success! You are logged in.");

      const token = data.token;
      localStorage.setItem("token", token);

      console.log(data);
    },

    onError: (data) => {
      console.log(data);
      toast.error(data.message);
    },
  });

  return { isPending, login };
}
