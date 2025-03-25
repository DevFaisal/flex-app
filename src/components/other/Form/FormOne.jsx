import React from "react";
import { Controller } from "react-hook-form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { useFormContext } from "./FormContext";

const FormOne = () => {
  const { formMethods, nextStep } = useFormContext();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = formMethods;

  const handleNext = handleSubmit((data) => {
    // Optional: Add validation logic here if needed
    nextStep();
  });

  return (
    <div className="flex flex-col gap-6 bg-white">
      <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left">
        Join the Waitlist & Get a Free Card Today!
      </h2>

      <div className="flex flex-col gap-4 mt-2">
        <div>
          <Controller
            name="fullname"
            control={control}
            rules={{ required: "Name is required" }}
            render={({ field }) => <Input label="Name" placeholder="Your Name" {...field} />}
          />
          {errors.fullname && <p className="text-red-500 text-sm mt-1">{errors.fullname.message}</p>}
        </div>

        <div>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => <Input label="Email" type="email" placeholder="you@example.com" {...field} />}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <p className="text-sm text-gray-600 mt-2">
        FlexCard is preparing to enter the FCA Sandbox for regulatory approval. All sign-ups are for early access and
        product testing purposes. Credit issuance is subject to FCA approval and final licensing.
      </p>

      <Button type="secondary" onClick={handleNext} label="Next" className="w-full md:w-auto px-8 mt-4" />
    </div>
  );
};

export default FormOne;
