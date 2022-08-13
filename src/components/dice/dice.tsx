import { h } from "preact";

export const Dice = () => {
  console.log("");
  const throwDice = () => {
    console.log(Math.floor(Math.random() * 7));
  };

  return (
    <div>
      <button onClick={throwDice}>Throw dice</button>
    </div>
  );
};
