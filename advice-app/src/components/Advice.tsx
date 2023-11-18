import { useAdvice } from "../hooks/useAdvice";

function Dice() {
  const { isLoading, advice, error } = useAdvice();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <div>Random advice: {advice?.advice}</div>;
}

export default Dice;
