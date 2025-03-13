import React, { useState } from "react";
import HeaderNote from "../../../../components/ui/HeaderNote";
import ProgressBar from "../../../../components/ui/Progressbar";
import CheckQualifyForm from "./components/CheckQualifyForm";
import Calculator from "./components/Calculator";
import Qualify from "./components/Qualify";

const CreditCardCalc = () => {
  const steps = ["card details", "calculate", "qualify"];
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const StepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <CheckQualifyForm
            handleNextStep={handleNextStep}
            currentStep={currentStep}
          />
        );
      case 1:
        return (
          <Calculator
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        );
      case 2:
        return <Qualify />;
      default:
        return null;
    }
  };

  return (
    <section className="flex flex-col justify-center items-center p-6 md:p-10 max-w-5xl mx-auto">
      <HeaderNote
        title={""}
        note={"Credit Card Calculator"}
        desc={`Discover how much interest you're really paying and how FlexCard can help you save.`}
      />
      <ProgressBar
        steps={steps}
        currentStep={currentStep}
        className="w-full mb-8 md:mb-10 px-4"
      />
      <div className="w-full px-4 md:px-10 mb-8 min-h-[400px] h-[800px]">
        <StepContent />
      </div>
    </section>
  );
};

export default CreditCardCalc;
