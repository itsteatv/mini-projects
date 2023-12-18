import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { RegisterAPI } from "../api/RegisterAPI";
import { RegisterData } from "../utils/types";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  //   const navigate = useNavigate();

  const { isPending, mutate } = useMutation({
    mutationFn: ({ email, password }: RegisterData) =>
      RegisterAPI({ email, password }),

    onSuccess: () => {
      toast.success("Success! You are logged in.");

      //   navigate("/welcome");
    },

    onError: () => {
      toast.error("login failed.");
    },
  });

  return { isPending, mutate };
}
