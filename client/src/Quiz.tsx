import { AnswerProps } from "./types/AnswerProps";
import { ScoreProps } from "./types/ScoreProps";
import { LossesProps } from "./types/LossesProps";
import { QuizQuestionsProps } from "./types/QuizQuestionProps";
import { useNavigate } from "react-router-dom";

type QuizProps = AnswerProps & ScoreProps & LossesProps & QuizQuestionsProps;

const Quiz = ({
  setAnswer,
  setScore,
  setLosses,
  questionText,
  questionImgSrc,
  questionImgAlt,
  firstOption,
  secondOption,
  thirdOption,
  fourthOption,
}: QuizProps) => {
  const navigate = useNavigate();
  const redirectPage = (answer: boolean) => {
    if (answer) {
      setScore((prevScore) => prevScore + 1);
    } else {
      setLosses((prevLosses) => prevLosses + 1);
    }
    setAnswer(answer);
    navigate("/score");
  };

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="mb-5 text-2xl font-medium">{questionText}</h1>
      <img
        className="mb-10 w-80 rounded-lg shadow-2xl"
        src={questionImgSrc}
        alt={questionImgAlt}
      />
      <div className="grid h-80 w-80 grid-cols-1 gap-4 text-sm text-white md:h-40 md:w-140 md:grid-cols-2">
        <button
          className="cursor-pointer rounded-full bg-gray-800 shadow-2xl transition-colors duration-300 ease-in-out hover:bg-gray-700"
          onClick={() => redirectPage(firstOption.isCorrect)}
        >
          {firstOption.text}
        </button>
        <button
          className="cursor-pointer rounded-full bg-gray-800 shadow-2xl transition-colors duration-300 ease-in-out hover:bg-gray-700"
          onClick={() => redirectPage(secondOption.isCorrect)}
        >
          {secondOption.text}
        </button>
        <button
          className="cursor-pointer rounded-full bg-gray-800 shadow-2xl transition-colors duration-300 ease-in-out hover:bg-gray-700"
          onClick={() => redirectPage(thirdOption.isCorrect)}
        >
          {thirdOption.text}
        </button>
        <button
          className="cursor-pointer rounded-full bg-gray-800 shadow-2xl transition-colors duration-300 ease-in-out hover:bg-gray-700"
          onClick={() => redirectPage(fourthOption.isCorrect)}
        >
          {fourthOption.text}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
