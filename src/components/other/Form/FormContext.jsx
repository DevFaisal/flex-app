import React, { createContext, useState, useContext } from 'react';
import { useForm } from 'react-hook-form';

// Create context
const FormContext = createContext();

// Provider component
export const FormProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Form methods
  const formMethods = useForm({
    defaultValues: {
      fullname: '',
      email: '',
      eighteenAndUK: null,
      employed: null,
      partialRepayments: null,
    },
  });

  // Step navigation
  const nextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 3));
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  return (
    <FormContext.Provider
      value={{
        currentStep,
        nextStep,
        prevStep,
        formMethods,
        submitStatus,
        isSubmitting,
        setSubmitStatus,
        setIsSubmitting,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

// Custom hook to use the form context
export const useFormContext = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
