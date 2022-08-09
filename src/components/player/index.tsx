import { h } from "preact";
import style from "./style.css";

export type PlayerColor = "green" | "blue" | "red" | "yellow";

const Player = ({ color }: { color: PlayerColor }) => (
  <div class={`${color} ${style.player}`}></div>
);

export default Player;
