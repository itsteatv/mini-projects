import { useAdvice } from "../hooks/useAdvice";
import dividerMobile from "../assets/images/pattern-divider-mobile.svg";
import dividerDesktop from "../assets/images/pattern-divider-desktop.svg";
import Dice from "./Dice";
import Advice from "./Advice";
import Spinner from "./Spinner";
import { useState } from "react";

function AdviceContent() {
  const { isLoading, advice, error, refetch } = useAdvice();
  const [diceId, setDiceId] = useState<number>(0);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const generateRandomId = () => {
    const newRandomId = Math.floor(Math.random() * 1000);
    setDiceId(newRandomId);
    refetch();
  };

  return (
    <>
      <div className="grid h-screen w-screen place-items-center bg-blue-dark font-manrope">
        <article className="relative w-[20em] rounded-lg bg-blue-darkGrayish p-6	text-center md:w-[28em]">
          <Advice id={advice?.id} advice={advice?.advice} />
          <div className="mb-6">
            <img
              className="mx-auto md:hidden"
              src={dividerMobile}
              alt="divider pattern"
            />
            <img
              className="mx-auto hidden md:block"
              src={dividerDesktop}
              alt="divider pattern"
            />
          </div>
          <Dice diceId={diceId} generateRandomId={generateRandomId} />
        </article>
      </div>
    </>
  );
}

export default AdviceContent;
