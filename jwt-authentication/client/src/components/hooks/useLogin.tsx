import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { FormsData } from "../utils/types";
// import { useNavigate } from "react-router-dom";
import { LoginAPI } from "../api/LoginAPI";

export function useLogin() {
  //   const navigate = useNavigate();

  const { isPending, mutate: login } = useMutation({
    mutationFn: ({ email, password }: FormsData) =>
      LoginAPI({ email, password }),

    onSuccess: (data) => {
      toast.success("Success! You are logged in.");

      console.log(data);

      //   navigate("/welcome");
    },

    onError: (data) => {
      console.log(data);
      toast.error(data.message);
    },
  });

  return { isPending, login };
}
