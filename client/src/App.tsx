import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import Quiz from "./Quiz";
import ScoreDisplay from "./ScoreDisplay";
import quizQuestions from "./quizQuestions";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [answer, setAnswer] = useState<boolean>();
  const [score, setScore] = useState<number>(0);
  const [losses, setLosses] = useState<number>(0);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Quiz
              answer={answer}
              setAnswer={setAnswer}
              score={score}
              setScore={setScore}
              losses={losses}
              setLosses={setLosses}
              questionText={quizQuestions.firstQuestion.questionText}
              questionImgSrc={quizQuestions.firstQuestion.questionImgSrc}
              questionImgAlt={quizQuestions.firstQuestion.questionImgAlt}
              firstOption={
                quizQuestions.firstQuestion.questionOptions.firstOption
              }
              secondOption={
                quizQuestions.firstQuestion.questionOptions.secondOption
              }
              thirdOption={
                quizQuestions.firstQuestion.questionOptions.thirdOption
              }
              fourthOption={
                quizQuestions.firstQuestion.questionOptions.fourthOption
              }
            />
          }
        ></Route>
        <Route
          path="/second-question"
          element={
            <Quiz
              answer={answer}
              setAnswer={setAnswer}
              score={score}
              setScore={setScore}
              losses={losses}
              setLosses={setLosses}
              questionText={quizQuestions.secondQuestion.questionText}
              questionImgSrc={quizQuestions.secondQuestion.questionImgSrc}
              questionImgAlt={quizQuestions.firstQuestion.questionImgAlt}
              firstOption={
                quizQuestions.secondQuestion.questionOptions.firstOption
              }
              secondOption={
                quizQuestions.secondQuestion.questionOptions.secondOption
              }
              thirdOption={
                quizQuestions.secondQuestion.questionOptions.thirdOption
              }
              fourthOption={
                quizQuestions.secondQuestion.questionOptions.fourthOption
              }
            />
          }
        ></Route>
        <Route
          path="/score"
          element={
            <ScoreDisplay
              answer={answer}
              setAnswer={setAnswer}
              score={score}
              setScore={setScore}
              losses={losses}
              setLosses={setLosses}
            />
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
