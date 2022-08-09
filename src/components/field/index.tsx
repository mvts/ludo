import { h } from "preact";
import { PlayerColor } from "../player";
import style from "./style.css";

export type FieldType = "start" | "path" | "finish" | "blank";

type FieldProps = {
  type: FieldType;
  color?: PlayerColor;
};

export const Field = (props: FieldProps) => {
  const { type, color = "neutral" } = props;

  return (
    <div
      class={
        type != "blank"
          ? `${style.field} ${color}`
          : `${style.field} ${style.noborder}`
      }
    ></div>
  );
};
