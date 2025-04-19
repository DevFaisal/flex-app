import React, { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import { useFormContext } from './FormContext';
import emailService from '../../../services/validateEmail';
import { FaCircleNotch } from 'react-icons/fa';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import { MdError } from 'react-icons/md';
import lambdaService from '../../../services/lamda';

const FormOne = () => {
  const { formMethods, nextStep } = useFormContext();
  const [validEmail, setValidEmail] = useState(false);
  const [wrongEmail, setWrongEmail] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = formMethods;

  const email = formMethods.watch('email');

  useEffect(() => {
    if (!email) {
      setLoading(false);
      setValidEmail(false);
      setWrongEmail(false);
      return;
    }

    const isValidEmail = emailService.validateEmailPattern(email);

    if (isValidEmail.success) {
      setLoading(true);
      setValidEmail(false);
      setWrongEmail(false);

      const timer = setTimeout(() => {
        lambdaService.validateEmail(email)
          .then((response) => {
            setLoading(false);
            if (response && response.status === 'valid') {
              setValidEmail(true);
              setWrongEmail(false);
            } else {
              setValidEmail(false);
              setWrongEmail(true);
            }
          })
          .catch((error) => {
            console.error('Email validation error:', error);
            setLoading(false);
            setValidEmail(false);
            setWrongEmail(true);
          });
      }, 500);

      return () => clearTimeout(timer);
    } else {
      setLoading(false);
      setValidEmail(false);
      setWrongEmail(false);
    }
  }, [email]);

  const handleNext = handleSubmit(() => {
    nextStep();
  });

  return (
    <div className="flex flex-col gap-6 h-full justify-evenly">
      <div>
        <h1 className="font-bold text-center md:text-left text-2xl md:text-4xl tracking-wide">
          Join the Waitlist
        </h1>
        <h4 className="mt-3 text-center md:text-left">
          Be the first to get your FlexCard when we launch.
        </h4>
      </div>

      <div className="flex flex-col gap-4 mt-2 px-3 md:px-5">
        <div>
          <Controller
            name="fullname"
            control={control}
            rules={{ required: 'Name is required' }}
            render={({ field }) => (
              <Input label="Full Name" placeholder="Your full Name" {...field} />
            )}
          />
          {errors.fullname && (
            <p className="text-red-500 text-sm mt-1">{errors.fullname.message}</p>
          )}
        </div>

        <div>
          <Controller
            name="email"
            control={control}
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            }}
            render={({ field }) => (
              <div className="relative overflow-hidden py-2">
                <Input label="Email" type="email" placeholder="youremail@example.com" {...field} />
                <span className="absolute right-2 bottom-5 text-gray-400">
                  {loading ? (
                    <FaCircleNotch size={25} className="animate-spin" />
                  ) : validEmail ? (
                    <IoCheckmarkDoneCircle size={25} className="text-green-600" />
                  ) : wrongEmail ? (
                    <MdError size={25} className="text-red-600" />
                  ) : (
                    <MdError size={25} className="text-gray-300" />
                  )}
                </span>
              </div>
            )}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          {wrongEmail && !errors.email && (
            <p className="text-red-500 text-sm mt-1">This email address appears to be invalid</p>
          )}
        </div>
      </div>

      <div className="flex justify-center">
        <Button
          disabled={!validEmail}
          type="secondary"
          onClick={handleNext}
          label="Next"
          className="px-8 py-3 mt-4 text-sm md:text-md"
          endIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          }
        />
      </div>
    </div>
  );
};

export default FormOne;
