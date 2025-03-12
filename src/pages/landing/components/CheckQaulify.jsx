import React, { useState } from "react";
import Select from "../../../components/ui/Select";
import HeaderNote from "../../../components/ui/HeaderNote";

const CheckQualify = () => {
  const steps = ["screening", "calculator", "result"];
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleSelectChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const StepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <CheckQualifyFormOne
            formData={formData}
            onChange={handleSelectChange}
          />
        );
      case 1:
        return (
          <div className="py-8 text-center">Calculator content goes here</div>
        );
      case 2:
        return <div className="py-8 text-center">Result content goes here</div>;
      default:
        return null;
    }
  };

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

  const isCurrentStepComplete = () => {
    if (currentStep === 0) {
      const requiredFields = [
        "creditCards",
        "paymentMethod",
        "isAdult",
        "impulseBuyer",
        "refundFrequency",
      ];
      return requiredFields.every((field) => formData[field]);
    }
    return true;
  };

  return (
    <section className="flex flex-col justify-center items-center p-6 md:p-10 max-w-5xl mx-auto">
      <HeaderNote
        title={"PAY FOR WHAT YOU OWE"}
        note={"Check If You Qualify"}
      />

      {/* Progress Bar */}
      <div className="w-full mb-8 md:mb-10 px-4">
        <div className="flex justify-between items-center relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center relative z-10"
            >
              <div
                className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-bold rounded-full transition-colors ${
                  currentStep >= index
                    ? "bg-secondary text-white"
                    : "bg-gray-200"
                }`}
              >
                {index + 1}
              </div>
              <span className="text-xs md:text-sm font-bold mt-2 uppercase">
                {step}
              </span>
            </div>
          ))}
          <div className="absolute top-5 md:top-6 md:left-6 md:max-w-[840px] w-full h-1.5 bg-gray-200 z-0"></div>
          <div
            className="absolute top-5 md:top-6 md:left-6 md:max-w-[840px] w-full h-1.5 bg-secondary z-0 transition-all duration-300"
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Form Content */}
      <div className="w-full px-4 md:px-20 mb-8 min-h-[300px] ">
        <StepContent />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between w-full px-4 md:px-20">
        {currentStep > 0 && (
          <button
            onClick={handlePreviousStep}
            className="px-5 py-2.5 rounded-lg font-medium text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            ← Back
          </button>
        )}
        <div
          className={
            currentStep === 0 ? "w-full flex justify-center" : "ml-auto"
          }
        >
          <button
            onClick={handleNextStep}
            disabled={
              !isCurrentStepComplete() || currentStep === steps.length - 1
            }
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              !isCurrentStepComplete() || currentStep === steps.length - 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-secondary text-white hover:bg-opacity-90"
            }`}
          >
            {currentStep === steps.length - 1 ? "Finish" : "Next →"}
          </button>
        </div>
      </div>
    </section>
  );
};

const CheckQualifyFormOne = ({ formData, onChange }) => {
  const selectOptions = [
    {
      id: "creditCards",
      label: "How many credit cards do you currently hold?",
      options: [
        { value: "0", label: "None" },
        { value: "1-2", label: "1-2" },
        { value: "3-5", label: "3-5" },
        { value: "5+", label: "More than 5" },
      ],
    },
    {
      id: "paymentMethod",
      label: "How do you usually pay your credit card balance?",
      options: [
        { value: "full", label: "In full each month" },
        { value: "min", label: "Minimum payment" },
        { value: "partial", label: "Partial payment" },
        { value: "carry", label: "Carry a balance" },
      ],
    },
    {
      id: "isAdult",
      label: "Are you 18+ years old?",
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
      ],
    },
    {
      id: "impulseBuyer",
      label: "Do you consider yourself an impulse buyer?",
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
        { value: "sometimes", label: "Sometimes" },
      ],
    },
    {
      id: "refundFrequency",
      label: "How often do you request refunds?",
      options: [
        { value: "never", label: "Never" },
        { value: "rarely", label: "Rarely" },
        { value: "sometimes", label: "Sometimes" },
        { value: "often", label: "Often" },
      ],
    },
  ];

  return (
    <div className="py-6 space-y-6">
      {selectOptions.map((option) => (
        <Select
          key={option.id}
          label={option.label}
          options={option.options}
          value={formData[option.id] || ""}
          onChange={(value) => onChange(option.id, value)}
          required={true}
          placeholder="Select an option"
          className="mb-6"
        />
      ))}
    </div>
  );
};

export default CheckQualify;
