import { useState } from 'react';
import FinalScore from './FinalScore';
import Session from './Session';

function Quiz() {
  const [isCompleted, setIsCompleted] = useState(false);
  const [score, setScore] = useState(0);
  return (
    <div className="w-full max-w-3xl mx-auto">
      {!isCompleted ? (
        <Session setIsCompleted={setIsCompleted} score={score} setScore={setScore} />
      ) : (
        <FinalScore score={score} />
      )}
    </div>
  );
}

export default Quiz;
