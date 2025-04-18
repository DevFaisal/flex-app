import React, { useEffect } from 'react';
import { Controller } from 'react-hook-form';
import { useFormContext } from './FormContext';
import Button from '../../ui/Button';
import { getSource } from '../../../utils/getSource';
import { getChannel } from '../../../utils/getChannel';
import toast from 'react-hot-toast';
import lambdaService from '../../../services/lamda';

const FormTwo = () => {
  const { formMethods, nextStep, setIsSubmitting, setSubmitStatus, isSubmitting } =
    useFormContext();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = formMethods;



  const onSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    //Hubspot data format

    // const ContactObject = {
    //   properties: {
    //     firstname: formMethods.watch('fullname').split(' ')[0] || '',
    //     lastname: formMethods.watch('fullname').split(' ').slice(1).join(' ') || '',
    //     email: formMethods.watch('email'),
    //     eighteen_and_uk_resident: formMethods.watch('eighteenAndUK'),
    //     employed: formMethods.watch('employed'),
    //     partial_repayments: formMethods.watch('partialRepayments'),
    //     traffic_source: getSource() || '',
    //     channel: (await getChannel()) || '',
    //     qna: '',
    //   },
    // };

    //Zoho data format
    
    const ContactObject = {
      data: [
        {
          First_Name: formMethods.watch('fullname').split(' ')[0] || '',
          Last_Name: formMethods.watch('fullname').split(' ').slice(1).join(' ') || 'N/A',
          Email: formMethods.watch('email'),
          Eighteen_And_UK_Resident: formMethods.watch('eighteenAndUK'),
          Employed: formMethods.watch('employed'),
          Partial_Repayments: formMethods.watch('partialRepayments'),
          Traffic: getSource() || '',
          Channel: (await getChannel()) || 'none',
        },
      ],
    };
console.log('ContactObject', ContactObject);
    try {
      await lambdaService.createZohoAccount(ContactObject);

      setSubmitStatus({
        type: 'success',
        message: 'Joined successfully!',
      });

      reset();
      nextStep();
    } catch (error) {
    
      let parsedError = {};
      try {
        parsedError = typeof error.message === 'string' ? JSON.parse(error.message) : error;
      } catch (e) {
        console.warn('Failed to parse error.message as JSON:', error.message);
      }
    
      const message = parsedError.message || 'An error occurred while creating the contact';
      const nestedError = parsedError.error || {};
      const isDuplicateError = nestedError.code === 'DUPLICATE_DATA';
    
    
      toast.error(
        isDuplicateError
          ? 'Email already exists'
          : nestedError.message || message || 'An error occurred while creating the contact'
      );
    
      setSubmitStatus({
        type: 'error',
        message: isDuplicateError
          ? 'The email you entered is already registered.'
          : nestedError.message || message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-3 px-4 py-0">
      <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">
        Pre-Qualification Questions
      </h2>

      <div className="flex flex-col gap-4 mt-2">
        <div>
          <h5 className="block mb-2">Are you 18 older and a UK resident?</h5>
          <Controller
            name="eighteenAndUK"
            control={control}
            rules={{ required: 'This field is required' }}
            render={({ field }) => (
              <div className="flex md:flex-col gap-4">
                <h5 className="flex items-center">
                  <input
                    {...field}
                    type="radio"
                    value="yes"
                    checked={field.value === 'yes'}
                    className="w-4 h-4 mr-2 accent-secondary cursor-pointer border-2 border-secondary"
                  />
                  Yes
                </h5>
                <h5 className="flex items-center">
                  <input
                    {...field}
                    type="radio"
                    value="no"
                    checked={field.value === 'no'}
                    className="w-4 h-4 mr-2 accent-secondary cursor-pointer border-2 border-secondary"
                  />
                  No
                </h5>
              </div>
            )}
          />
          {errors.eighteenAndUK && (
            <p className="text-red-500 text-sm mt-1">{errors.eighteenAndUK.message}</p>
          )}
        </div>

        <div>
          <h5 className="block mb-2">Are you currently employed?</h5>
          <Controller
            name="employed"
            control={control}
            rules={{ required: 'This field is required' }}
            render={({ field }) => (
              <div className="flex md:flex-col gap-4">
                <h5 className="flex items-center">
                  <input
                    {...field}
                    type="radio"
                    value="yes"
                    checked={field.value === 'yes'}
                    className="w-4 h-4 mr-2 accent-secondary cursor-pointer border-2 border-secondary"
                  />
                  Yes
                </h5>
                <h5 className="flex items-center">
                  <input
                    {...field}
                    type="radio"
                    value="no"
                    checked={field.value === 'no'}
                    className="w-4 h-4 mr-2 accent-secondary cursor-pointer border-2 border-secondary"
                  />
                  No
                </h5>
              </div>
            )}
          />
          {errors.employed && (
            <p className="text-red-500 text-sm mt-1">{errors.employed.message}</p>
          )}
        </div>

        <div>
          <h5 className="block mb-2">
            Do you usually make partial repayments on your credit card(s)?
          </h5>
          <Controller
            name="partialRepayments"
            control={control}
            rules={{ required: 'This field is required' }}
            render={({ field }) => (
              <div className="flex md:flex-col gap-4">
                <h5 className="flex items-center">
                  <input
                    {...field}
                    type="radio"
                    value="yes"
                    checked={field.value === 'yes'}
                    className="w-4 h-4 mr-2 accent-secondary cursor-pointer border-2 border-secondary"
                  />
                  Yes
                </h5>
                <h5 className="flex items-center">
                  <input
                    {...field}
                    type="radio"
                    value="no"
                    checked={field.value === 'no'}
                    className="w-4 h-4 mr-2 accent-secondary cursor-pointer border-2 border-secondary"
                  />
                  No
                </h5>
              </div>
            )}
          />
          {errors.partialRepayments && (
            <p className="text-red-500 text-sm mt-1">{errors.partialRepayments.message}</p>
          )}
        </div>
      </div>

      <p className=" text-gray-600 mt-2">
        By joining the waitlist, you agree to receive updates about FlexCard. We respect your
        privacy and will never share your information.
      </p>

      <div className="flex justify-center mt-4">
        <Button
          type="secondary"
          disabled={isSubmitting}
          onClick={handleSubmit(onSubmit)}
          label={isSubmitting ? 'Joining...' : 'Join the Waitlist'}
          className="px-8"
        />
      </div>
    </div>
  );
};

export default FormTwo;
