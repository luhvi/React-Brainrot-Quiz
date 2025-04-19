export type QuizQuestionsProps = {
  questionText: string;
  questionImgSrc: string;
  questionImgAlt: string;
  firstOption: {
    text: string;
    isCorrect: boolean;
  };
  secondOption: {
    text: string;
    isCorrect: boolean;
  };
  thirdOption: {
    text: string;
    isCorrect: boolean;
  };
  fourthOption: {
    text: string;
    isCorrect: boolean;
  };
};
