import { h } from "preact";
import { PlayerPiece } from "../playerPiece/playerPiece";
import { FieldType, Player, PlayerColor } from "../types";
import style from "./style.css";

type FieldProps = {
  id?: number;
  type: FieldType;
  color?: PlayerColor;
  players?: Player[];
};

export const Field = (props: FieldProps) => {
  const { type, color = "neutral", id, players } = props;

  const playerOnField = id && players?.find((p) => p.positions.includes(id));

  return (
    <div
      class={
        type != "blank"
          ? `${style.field} ${color}`
          : `${style.field} ${style.noborder}`
      }
    >
      {id}
      {playerOnField && <PlayerPiece color={playerOnField.color} />}
    </div>
  );
};
