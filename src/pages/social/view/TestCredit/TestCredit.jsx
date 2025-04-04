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
<<<<<<< HEAD
        return <Button type="secondary" label={"Take The Quiz ->"} onClick={() => handleNextStep()} />;
=======
        return (
          <Button
            type="secondary"
            className="text-sm md:text-ms"
            label={"Take The Quiz ->"}
            onClick={() => handleNextStep()}
          />
        );
>>>>>>> testing
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
<<<<<<< HEAD
=======
  const { resetQuiz } = useTakeQuizStore((state) => state);
>>>>>>> testing

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

<<<<<<< HEAD
=======
  function handleLearnMore() {
    window.scrollTo({
      top: document.getElementById("calculator").offsetTop,
      behavior: "smooth",
    });
  }

>>>>>>> testing
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
<<<<<<< HEAD
            <h2 className="text-xl md:text-2xl font-bold text-center mb-8">{currentQuestion.question}</h2>
=======
            <h5 className="text-xl md:text-2xl font-bold text-center mb-5 md:mb-8">{currentQuestion.question}</h5>
>>>>>>> testing

            <div className="w-full space-y-4">
              {currentQuestion.answers.map((answer, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(answer)}
<<<<<<< HEAD
                  className="px-5 py-4 font-medium text-base rounded-lg bg-[#F2F4F8] w-full border border-[#DDE1E6] text-left hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <span className="text-sm md:text-base">{answer}</span>
=======
                  className="px-3 py-2 md:px-5 md:py-4 rounded-lg bg-[#F2F4F8] w-full border border-[#DDE1E6] text-left hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <h6 className="">
                    <span className="font-bold">{answer.split("(")[0]}</span>
                    <span className="">{"(" + answer.split("(")[1]}</span>
                  </h6>
>>>>>>> testing
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
<<<<<<< HEAD
        <div className="text-center py-10 px-4 flex flex-col justify-center items-center gap-4">
          <span className="flex justify-center items-center bg-[#76D232]/50 p-4 rounded-full">
            <MdOutlineDone size={90} className="text-white" />
          </span>

          <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
=======
        <div className="text-center py-8 px-4 flex flex-col justify-center items-center gap-2">
          <span className="flex justify-center items-center bg-[#76D232]/50 p-4 rounded-full">
            <MdOutlineDone className="text-white text-3xl lg:text-7xl" />
          </span>

          <h2 className="text-2xl font-bold mb-2">Quiz Completed!</h2>
>>>>>>> testing
          <p className="text-xl font-bold text-blue-600 mb-4">
            Your Score: {score}/{questions.length}
          </p>
          <p className="mb-6">
            There's a lot the credit card industry doesn't tell you. FlexCard is designed to be transparent and fair.
          </p>
          <div className="flex gap-4">
<<<<<<< HEAD
            <Button type="secondary" label={`Share Your Score ->`} />
            <Button type="black" label={`Return to Facts`} />
=======
            <Button
              type="secondary"
              label="Learn More"
              className="w-full sm:w-auto text-xs"
              onClick={() => handleLearnMore()}
            />
            <Button
              type="black"
              label={`Return to Facts`}
              className="w-full sm:w-auto text-xs"
              onClick={() => resetQuiz()}
            />
>>>>>>> testing
          </div>
        </div>
      )}
    </div>
  );
}
