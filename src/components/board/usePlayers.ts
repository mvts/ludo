import { useState } from "preact/hooks";
import { Player } from "../types";

export const usePlayers = () => {
  const [players, setPlayers] = useState<Player[]>([
    { name: "Player", color: "green", positions: [57, 58, 59, 60] },
    { name: "Computer 1", color: "blue", positions: [61, 62, 63, 64] },
    { name: "Computer 2", color: "red", positions: [65, 66, 67, 68] },
    { name: "Computer 3", color: "yellow", positions: [69, 70, 71, 72] },
  ]);

  // TODO: change player color, name functions, etc.

  const movePlayerPiece = (player: Player, from: number, to: number) => {
    player.positions.splice(
      player.positions.findIndex((p) => p === from),
      1,
      to
    );

    setPlayers([...players.filter((p) => p.name !== player.name), player]);
  };

  return { players, movePlayerPiece };
};
