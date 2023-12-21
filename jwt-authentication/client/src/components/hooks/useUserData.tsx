import { useQuery, useQueryClient } from "@tanstack/react-query";
import { UserAPI } from "../api/UserAPI";
import { useNavigate } from "react-router-dom";

export function useUserData() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    isLoading,
    error,
    data: userData,
  } = useQuery({
    queryKey: ["user-data"],
    queryFn: () => UserAPI(localStorage.getItem("token")),
  });

  const refetch = () => {
    queryClient.invalidateQueries({
      queryKey: ["user-data"],
    });
    navigate("/login");
  };

  return { isLoading, error, userData, refetch };
}
