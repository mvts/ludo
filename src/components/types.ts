export type PlayerColor = "green" | "blue" | "red" | "yellow";

export type Player = {
  name: string;
  color: PlayerColor;
  positions: PlayerPositions;
};

export type PlayerPositions = [number, number, number, number];

export type FieldType = "start" | "path" | "finish" | "blank";

export type BoardField = {
  id?: number;
  type: FieldType;
  color?: PlayerColor;
};
