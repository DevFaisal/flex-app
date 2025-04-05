import React from 'react';
import HeaderNote from '../../../../components/ui/HeaderNote';
import Button from '../../../../components/ui/Button';
import { useTakeQuizStore } from '../../store/calculateStore';
import Quiz from './Quiz';

const TestCredit = () => {
  const { handleNextStep, currentStep } = useTakeQuizStore((state) => state);

  const StepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <Button
            type="secondary"
            className="text-sm md:text-ms"
            label={'Start Quiz'}
            onClick={() => {
              handleNextStep();
              window.scrollTo({
                top: document.getElementById('quiz').offsetTop,
                behavior: 'smooth',
              });
            }}
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
