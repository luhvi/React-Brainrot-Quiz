import { Dispatch } from "react";
import { SetStateAction } from "react";

export type ScoreProps = {
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
};
