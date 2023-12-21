import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { UserAPI } from "../api/UserAPI";

export function useUser() {
  const { isPending, mutate: user } = useMutation({
    mutationFn: (token: string | null) => UserAPI(token),

    onSuccess: (data) => {
      console.log(data);
    },

    onError: (data) => {
      console.log(data);
      toast.error(data.message);
    },
  });

  return { isPending, user };
}
