import React, { useState } from "react";
import HeaderNote from "../../../../components/ui/HeaderNote";
import Button from "../../../../components/ui/Button";
import { MdDone } from "react-icons/md";

const TestCredit = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const StepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <Button
            type="secondary"
            label={"Take The Quiz ->"}
            onClick={handleNextStep}
          />
        );
      case 1:
        return <Quiz />;
      default:
        return null;
    }
  };

  return (
    <section className="py-20">
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
  const questions = [
    {
      question:
        "If you make a partial payment on your credit card, do you still pay interest on the full amount?",
      answers: [
        "No, only on the remaining balance",
        "Yes, on the full statement amount",
      ],
    },
    {
      question:
        "Do refunds count as payments for your minimum monthly payment?",
      answers: [
        "Yes, they reduce what you need to pay",
        "No, they don't count towards your minimum payment",
      ],
    },
    {
      question:
        "What percentage of your credit card balance is typically required as a minimum payment?",
      answers: ["1-3%", "5-10%", "15-20%"],
    },
    {
      question:
        "When you pay only the minimum on a £1,000 balance at 20% APR, approximately how long will it take to pay off?",
      answers: ["2-3 years", "5-7 years", "Over 10 years"],
    },
    {
      question: "Which of these is NOT a common credit card fee?",
      answers: ["Late payment fee", "Over-limit fee", "Early repayment fee"],
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  // Get the current question object
  const currentQuestion = questions[currentQuestionIndex];

  function handleNextQuestion() {
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
                {Math.round(
                  (currentQuestionIndex / (questions.length - 1)) * 100
                )}
                % Complete
              </p>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-blue-500 rounded-full transition-all duration-300"
                style={{
                  width: `${
                    (currentQuestionIndex / (questions.length - 1)) * 100
                  }%`,
                }}
              ></div>
            </div>
          </div>

          <div className="w-full">
            <h2 className="text-xl md:text-2xl font-bold text-center mb-8">
              {currentQuestion.question}
            </h2>

            <div className="w-full space-y-4">
              {currentQuestion.answers.map((answer, index) => (
                <button
                  key={index}
                  onClick={handleNextQuestion}
                  className="px-5 py-4 font-medium text-base rounded-lg bg-[#F2F4F8] w-full border border-[#DDE1E6] text-left hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {answer}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-10 px-4 flex flex-col justify-center items-center">
          <MdDone
            size={40}
            color="white"
            className="bg-green-300 m-4 rounded-full"
          />

          <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
          <p className="mb-6">
            There's a lot the credit card industry doesn't tell you. FlexCard is
            designed to be transparent and fair.
          </p>
          <div className="flex gap-4">
            <Button type="secondary" label={`Share Your Score ->`} />
            <Button type="outline" label={`Return to Facts`} />
          </div>
        </div>
      )}
    </div>
  );
}
