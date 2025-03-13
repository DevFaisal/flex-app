import React from "react";

const ProgressBar = ({ steps, currentStep, className = "" }) => {
  // Helper function to determine the color based on step status
  const getStepColor = (currentStep, index) => {
    if (index < currentStep) {
      return "bg-green-500"; // Completed step
    } else if (index === currentStep) {
      return "bg-blue-500"; // Current step
    } else {
      return "bg-gray-300"; // Future step
    }
  };

  // Calculate progress percentage
  const progressPercentage = (currentStep / (steps.length - 1)) * 100;

  return (
    <div className={`w-full px-4 ${className}`}>
      <div className="flex justify-between items-center relative">
        {/* Step circles and labels */}
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center relative z-10">
            <div
              className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center 
                        font-bold rounded-full transition-colors text-white ${getStepColor(
                          currentStep,
                          index
                        )}`}
            >
              {index + 1}
            </div>
            <span className="text-xs md:text-sm font-bold mt-2 uppercase text-center">
              {step}
            </span>
          </div>
        ))}

        {/* Background track */}
        <div
          className="absolute top-5 md:top-6 left-4 right-0 h-1.5 bg-gray-200 z-0"
          style={{
            width: `calc(93% - ${steps.length > 1 ? 24 : 0}px)`,
            margin: "0 auto",
          }}
        ></div>

        {/* Progress fill */}
        <div
          className={`absolute top-5 md:top-6 left-4 h-1.5 z-0 transition-all duration-300 ${getStepColor(
            currentStep,
            0
          )}`}
          style={{
            width: `${progressPercentage}%`,
            maxWidth: `calc(94% - ${steps.length > 1 ? 24 : 0}px)`,
            margin: "0 auto",
            transform: "translateX(12px)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
