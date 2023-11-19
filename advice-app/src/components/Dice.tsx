interface DiceProps {
  generateRandomId: () => void;
  diceId?: number;
}

import dice from "../assets/images/icon-dice.svg";

function Dice({ generateRandomId }: DiceProps) {
  return (
    <>
      <div
        className="absolute -bottom-6 left-2/4 grid h-12 w-12 -translate-x-1/2	cursor-pointer place-items-center rounded-full bg-neon duration-200 hover:shadow-[0px_0px_30px_4px_hsl(150,100%,66%)]"
        onClick={generateRandomId}
      >
        <img src={dice} alt="dice" />
      </div>
    </>
  );
}

export default Dice;
