import { useState } from "preact/hooks";
import { PlayerColor, PlayerPositions } from "../types";

export const usePlayerPositions = () => {
  const [redPlayerPositions, setRedPlayerPositions] = useState<PlayerPositions>([65, 66, 67, 68]);
  const [bluePlayerPositions, setBluePlayerPositions] = useState<PlayerPositions>([69, 70, 71, 72]);
  const [greenPlayerPositions, setGreenPlayerPositions] = useState<PlayerPositions>([
    61, 62, 63, 64,
  ]);
  const [yellowPlayerPositions, setYellowPlayerPositions] = useState<PlayerPositions>([
    57, 58, 59, 60,
  ]);

  const setPlayerPositions = (
    player: PlayerColor,
    positions: [number, number, number, number]
  ) => {
    if (player === "red") {
      setRedPlayerPositions(positions);
    } else if (player === "blue") {
      setBluePlayerPositions(positions);
    } else if (player === "green") {
      setGreenPlayerPositions(positions);
    } else if (player === "yellow") {
      setYellowPlayerPositions(positions);
    }
  };

  const playerPositions = {
    red: redPlayerPositions,
    green: greenPlayerPositions,
    blue: bluePlayerPositions,
    yellow: yellowPlayerPositions,
  };

  return {
    setPlayerPositions,
    playerPositions,
  };
};
