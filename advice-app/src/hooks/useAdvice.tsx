import { useQuery, useQueryClient } from "@tanstack/react-query";

interface Advice {
  id: number;
  advice: string;
}

const fetchAdvice = async (): Promise<Advice> => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  console.log(data);
  return data.slip;
};

export function useAdvice() {
  const queryClient = useQueryClient();

  const {
    isLoading,
    data: advice,
    error,
  } = useQuery({
    queryKey: ["advice"],
    queryFn: fetchAdvice,
  });

  const refetch = () => {
    queryClient.invalidateQueries({
      queryKey: ["advice"],
    });
  };

  return { isLoading, advice, error, refetch };
}
