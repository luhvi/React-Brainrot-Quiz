import { Dispatch } from "react";
import { SetStateAction } from "react";

export type AnswerProps = {
  answer: boolean | undefined;
  setAnswer: Dispatch<SetStateAction<boolean | undefined>>;
};
