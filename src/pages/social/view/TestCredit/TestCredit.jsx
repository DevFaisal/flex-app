import React, { useState } from "react";
import HeaderNote from "../../../../components/ui/HeaderNote";
import Button from "../../../../components/ui/Button";
import { MdOutlineDone } from "react-icons/md";
import { questions } from "../../constants/constants";
import { useTakeQuizStore } from "../../store/calculateStore";

const TestCredit = () => {
  const { handleNextStep, currentStep } = useTakeQuizStore((state) => state);

  const StepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <Button
            type="secondary"
            className="text-sm md:text-ms"
            label={"Take The Quiz ->"}
            onClick={() => handleNextStep()}
          />
        );
      case 1:
        return <Quiz />;
      default:
        return null;
    }
  };

  return (
    <section id="quiz" className="py-20">
      <HeaderNote
        note={`Test Your Credit Card Knowledge`}
        desc={`Take our quick 5-question quiz to see how much you really know about credit cards.`}
      />
      <div className="flex justify-center items-center flex-col">
        <StepContent />
      </div>
    </section>
  );
};

export default TestCredit;

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const { resetQuiz } = useTakeQuizStore((state) => state);

  // Get the current question object
  const currentQuestion = questions[currentQuestionIndex];

  // Correct answers for each question (index corresponds to questions array)

  function handleAnswerClick(selectedAnswer) {
    // Check if answer is correct and update score
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsCompleted(true);
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      {!isCompleted ? (
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
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${(currentQuestionIndex / (questions.length - 1)) * 100}%`,
                }}
              ></div>
            </div>
          </div>

          <div className="w-full">
            <h5 className="text-xl md:text-2xl font-bold text-center mb-8">{currentQuestion.question}</h5>

            <div className="w-full space-y-4">
              {currentQuestion.answers.map((answer, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(answer)}
                  className="px-5 py-4 rounded-lg bg-[#F2F4F8] w-full text-nowrap border border-[#DDE1E6] text-left hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <h6 className="">{answer}</h6>
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-10 px-4 flex flex-col justify-center items-center gap-4">
          <span className="flex justify-center items-center bg-[#76D232]/50 p-4 rounded-full">
            <MdOutlineDone size={90} className="text-white" />
          </span>

          <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
          <p className="text-xl font-bold text-blue-600 mb-4">
            Your Score: {score}/{questions.length}
          </p>
          <p className="mb-6">
            There's a lot the credit card industry doesn't tell you. FlexCard is designed to be transparent and fair.
          </p>
          <div className="flex gap-4">
            <Button type="secondary" label={`Share Your Score ->`} />
            <Button type="black" label={`Return to Facts`} onClick={() => resetQuiz()} />
          </div>
        </div>
      )}
    </div>
  );
}
