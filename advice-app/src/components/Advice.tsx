import { useAdvice } from "../hooks/useAdvice";

function Dice() {
  const { isLoading, advice } = useAdvice();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>Random advice: {advice?.advice}</div>;
}

export default Dice;
