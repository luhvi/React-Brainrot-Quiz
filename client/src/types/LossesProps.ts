import { Dispatch } from "react";
import { SetStateAction } from "react";

export type LossesProps = {
  losses: number;
  setLosses: Dispatch<SetStateAction<number>>;
};
