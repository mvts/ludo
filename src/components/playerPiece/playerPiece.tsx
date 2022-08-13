import { h } from "preact";
import { PlayerColor } from "../types";
import style from "./style.css";

export const PlayerPiece = ({ color }: { color: PlayerColor }) => (
  <div class={`${color} ${style.player}`}></div>
);
