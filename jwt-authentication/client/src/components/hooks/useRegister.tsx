import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { RegisterAPI } from "../api/RegisterAPI";
import { FormsData } from "../utils/types";
import { useNavigate } from "react-router-dom";

export function useRegister() {
  const navigate = useNavigate();

  const { isPending, mutate: register } = useMutation({
    mutationFn: ({ email, password }: FormsData) =>
      RegisterAPI({ email, password }),

    onSuccess: (data) => {
      toast.success("Success! Your account has been registered.");

      console.log(data);
      navigate("/login");
    },

    onError: (data) => {
      console.log(data);
      toast.error(data.message);
    },
  });

  return { isPending, register };
}
