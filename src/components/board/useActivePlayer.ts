import { useState } from "preact/hooks";
import { Player } from "../types";
import { usePlayers } from "./usePlayers";

export const useActivePlayer = () => {
  const { players } = usePlayers();
  const [activePlayer, setActivePlayer] = useState<Player>(players[0]);

  const goToNextPlayer = () => {
    const currentActivePlayerIndex = players.findIndex(
      (p) => p === activePlayer
    );
    let newActivePlayer = players[0];

    if (players.length >= currentActivePlayerIndex) {
      newActivePlayer = players[currentActivePlayerIndex + 1];
    }
    setActivePlayer(newActivePlayer);
  };

  return { activePlayer, goToNextPlayer };
};
