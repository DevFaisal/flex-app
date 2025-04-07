import React, { useState } from 'react';
import { questions } from '../../../constants/constants';
import Button from '../../../../../../components/ui/Button';
import { motion } from 'motion/react';
import { useTakeQuizStore } from '../store/quizStore';

function Session({ setIsCompleted, score, setScore }) {
  const { storeQnAinDB } = useTakeQuizStore((state) => state);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  //   const { resetQuiz } = useTakeQuizStore((state) => state);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [showExplaination, setShowExplaination] = useState(false);
  const currentQuestion = questions[currentQuestionIndex];

  const [questionResults, setQuestionResults] = useState({});

  const handleAnswerClick = (selectedAnswer) => {
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    setSelectedAnswer(selectedAnswer);
    setIsAnswerCorrect(isCorrect);
    setShowExplaination(true);

    // Store the result for this question
    setQuestionResults((prev) => ({
      ...prev,
      [currentQuestionIndex + 1]: isCorrect,
    }));

    if (isCorrect) {
      setScore(score + 1);
    }
  };
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsAnswerCorrect(null);
      setShowExplaination(false);
    } else {
      storeQnAinDB(questionResults);
      setIsCompleted(true);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 p-4 w-full">
      {/* Progress indicator */}
      <div className="flex flex-col mb-6 justify-between items-center w-full">
        <div className="flex justify-between w-full mb-2">
          <p className="text-sm font-bold text-gray-700">
            Question {currentQuestionIndex + 1} of {questions.length}
          </p>
          <p className="text-sm font-bold text-blue-600">
            Score: {score}/{questions.length}
          </p>
        </div>
        <div className="w-full h-1.5 bg-gray-200 rounded-full">
          <div
            className="h-1.5 bg-blue-600 rounded-full transition-all duration-300"
            style={{
              width: `${(currentQuestionIndex / (questions.length - 1)) * 100}%`,
            }}
          ></div>
        </div>
      </div>

      {/* Question and answers - Clean layout */}
      <div className="w-full bg-white p-6">
        <h4 className="font-bold text-center mb-8">{currentQuestion.question}</h4>

        <div className="w-full flex flex-col space-y-4 mx-auto">
          {currentQuestion.answers.map((answer, index) => (
            <button
              disabled={isAnswerCorrect !== null}
              type="button"
              key={index}
              onClick={() => handleAnswerClick(answer)}
              className={`px-5 py-4 rounded-lg w-full border text-left transition-colors focus:outline-none focus:ring-0 ${
                selectedAnswer === answer
                  ? isAnswerCorrect
                    ? 'bg-green-100 border-green-500'
                    : 'bg-red-100 border-red-500'
                  : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
              } ${
                answer === currentQuestion.correctAnswer && showExplaination && !isAnswerCorrect
                  ? 'border-green-500 ring-1 ring-green-500'
                  : ''
              }`}
            >
              <h6 className="font-semibold">{answer}</h6>
            </button>
          ))}
        </div>

        {/* Explanation fades in */}
        {showExplaination && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            key={currentQuestionIndex}
            id="explanation"
            className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg animate-fade-in"
          >
            <p className="font-medium text-gray-800">
              <span className="font-bold">
                {isAnswerCorrect ? (
                  <span className="text-green-600">Correct</span>
                ) : (
                  'Correct answer:'
                )}
              </span>{' '}
              {currentQuestion.correctAnswer}
            </p>
            <p
              dangerouslySetInnerHTML={{ __html: currentQuestion.explaination }}
              className="mt-2 text-gray-700"
            />
          </motion.div>
        )}

        {/* Continue button appears after answering */}
        {/* {isAnswerCorrect !== null && ( */}
        <div className="flex justify-center mt-6 animate-fade-in">
          <Button
            type="secondary"
            cursor={isAnswerCorrect == null ? 'not-allowed' : 'pointer'}
            disabled={isAnswerCorrect == null}
            label={currentQuestionIndex < questions.length - 1 ? 'Continue' : 'Complete Quiz'}
            className="w-full sm:w-auto text-sm md:text-base"
            onClick={handleNextQuestion}
          />
        </div>
        {/* )} */}
      </div>
    </div>
  );
}

export default Session;
