import React from 'react';
import { FormProvider } from './FormContext';
import { useFormContext } from './FormContext';
import FormOne from './FormOne';
import FormTwo from './FormTwo';
import Success from './Success';

const FormContent = () => {
  const { currentStep } = useFormContext();

  const steps = [
    { number: 1, component: <FormOne /> },
    { number: 2, component: <FormTwo /> },
    { number: 3, component: <Success /> },
  ];

  return steps.find((step) => step.number === currentStep)?.component;
};

const Form = () => {
  return (
    <FormProvider>
      <FormContent />
    </FormProvider>
  );
};

export default Form;
