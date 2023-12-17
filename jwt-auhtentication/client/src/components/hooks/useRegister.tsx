import { useMutation, useQueryClient } from "@tanstack/react-query";
import { RegisterAPI } from "../api/RegisterAPI";
import toast from "react-hot-toast";

export function useRegister() {
  const { isPending, mutate } = useMutation({
    mutationFn: ({ email, password }) => RegisterAPI({ email, password }),

    onSuccess: (data) => {
      toast.success("Success! Your account has been registered."),
        console.log(data);
    },

    onError: (data) => {
      toast.error("Registration failed.");
      console.log(data);
    },
  });

  return { isPending, mutate };
}
