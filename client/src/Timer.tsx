import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ScoreProps } from "./types/ScoreProps";
import { LossesProps } from "./types/LossesProps";

type TimerProps = ScoreProps & LossesProps;

const Timer = ({ score, losses, setLosses }: TimerProps) => {
  const [time, setTime] = useState<number>(10);
  const navigate = useNavigate();
  const location = useLocation();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setTime(10);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (time === 0) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setLosses((prevLosses) => prevLosses + 1);
    }
  }, [setLosses, time]);

  useEffect(() => {
    const total = score + losses;
    console.log(total);
    if (time === 0) {
      if (total === 1) {
        navigate("/second-question");
      } else if (total === 2) {
        navigate("/third-question");
      } else if (total === 3) {
        navigate("/fourth-question");
      } else if (total === 4) {
        navigate("/fifth-question");
      } else if (total === 5) {
        navigate("/score");
      }
    }
  }, [score, losses, time, navigate]);

  return (
    <div className="mt-4 flex h-20 w-20 items-center justify-center rounded-full bg-gray-900 text-center shadow-2xl">
      <h1 className="text-2xl font-semibold text-white">{time}</h1>
    </div>
  );
};

export default Timer;
