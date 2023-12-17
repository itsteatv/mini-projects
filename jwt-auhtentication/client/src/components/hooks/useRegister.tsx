import { useMutation } from "@tanstack/react-query";
import { RegisterAPI } from "../api/RegisterAPI";
import toast from "react-hot-toast";
import { RegisterData } from "../utils/types";

export function useRegister() {
  const { isPending, mutate } = useMutation({
    mutationFn: ({ email, password }: RegisterData) =>
      RegisterAPI({ email, password }),

    onSuccess: () => {
      toast.success("Success! Your account has been registered.");
    },

    onError: () => {
      toast.error("Registration failed.");
    },
  });

  return { isPending, mutate };
}
