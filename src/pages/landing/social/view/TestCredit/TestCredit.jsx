import React from 'react';
import HeaderNote from '../../../../../components/ui/HeaderNote';
import { useTakeQuizStore } from './store/quizStore';
import Init from './components/Init';
import Quiz from './components/Quiz';

const TestCredit = () => {
  const { currentStep } = useTakeQuizStore((state) => state);

  const StepContent = () => {
    switch (currentStep) {
      case 0:
        return <Init />;
      case 1:
        return <Quiz />;
      default:
        return null;
    }
  };

  return (
    <section id="quiz" className="py-20">
      {currentStep === 0 && (
        <HeaderNote
          note={`Take the 60-second quiz`}
          desc={`What your credit card hasn’t told you.`}
        />
      )}
      <div className="flex justify-center items-center flex-col">
        <StepContent />
      </div>
    </section>
  );
};

export default TestCredit;
