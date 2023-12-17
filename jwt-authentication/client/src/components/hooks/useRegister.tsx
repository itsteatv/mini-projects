import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { RegisterAPI } from "../api/RegisterAPI";
import { RegisterData } from "../utils/types";
import { useNavigate } from "react-router-dom";

export function useRegister() {
  const navigate = useNavigate();

  const { isPending, mutate } = useMutation({
    mutationFn: ({ email, password }: RegisterData) =>
      RegisterAPI({ email, password }),

    onSuccess: () => {
      toast.success("Success! Your account has been registered.");

      navigate("/login");
    },

    onError: () => {
      toast.error("Registration failed.");
    },
  });

  return { isPending, mutate };
}
