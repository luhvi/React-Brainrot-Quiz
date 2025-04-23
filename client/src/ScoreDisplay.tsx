import { AnswerProps } from "./types/AnswerProps";
import { ScoreProps } from "./types/ScoreProps";
import { LossesProps } from "./types/LossesProps";
import { useNavigate } from "react-router-dom";

type ScoreDisplayProps = AnswerProps & ScoreProps & LossesProps;

const ScoreDisplay = ({ answer, score, losses }: ScoreDisplayProps) => {
  const navigate = useNavigate();

  const redirectPage = () => {
    if (score + losses === 1) {
      navigate("/second-question");
    } else if (score + losses === 2) {
      navigate("/third-question");
    } else if (score + losses === 3) {
      navigate("/fourth-question");
    } else if (score + losses === 4) {
      navigate("/fifth-question");
    }
  };

  const scoreText = () => {
    if (score <= 2) {
      return "You're honestly a disgrace to Italy...";
    } else if (score <= 4) {
      return "You're quite knowledgeable...";
    } else if (score === 5) {
      return "You're very sigma!";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center text-center">
      {score + losses < 5 ? (
        <>
          <h1 className="text-xl font-semibold">
            You guessed {answer ? "correctly" : "incorrectly"}!
          </h1>
          <h2 className="font-medium">Score: {score}</h2>
          <button
            className="mt-3 mb-1 cursor-pointer rounded-full bg-gray-800 px-8 py-4 text-white shadow-2xl"
            onClick={redirectPage}
          >
            Next Question
          </button>
        </>
      ) : null}
      {score + losses === 5 ? (
        <>
          <h1 className="text-xl font-semibold">
            You finished the Italian Brainrot Quiz with a score of {score}!
            <br />
            {scoreText()}
          </h1>
        </>
      ) : null}
    </div>
  );
};

export default ScoreDisplay;
