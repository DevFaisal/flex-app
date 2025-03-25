import React from "react";
import { Controller } from "react-hook-form";
import { useFormContext } from "./FormContext";
import Button from "../../ui/Button";
import { api } from "../../../utils/api";
import { getSource } from "../../../utils/getSource";
import { getChannel } from "../../../utils/getChannel";

const FormTwo = () => {
  const { formMethods, nextStep, setIsSubmitting, submitStatus, setSubmitStatus } = useFormContext();
  const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = formMethods;

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    const ContactObject = {
      properties: {
        firstname: formMethods.watch("fullname").split(" ")[0] || "",
        lastname: formMethods.watch("fullname").split(" ").slice(1).join(" ") || "",
        email: formMethods.watch("email"),
        eighteen_and_uk_resident: formMethods.watch("eighteenAndUK"),
        employed: formMethods.watch("employed"),
        partial_repayments: formMethods.watch("partialRepayments"),
        traffic_source: getSource() || "",
        channel: (await getChannel()) || "",
      },
    };

    try {
      await api.post("create-contact", {
        ContactObject,
        Auth: String(accessToken),
      });

      setSubmitStatus({
        type: "success",
        message: "Joined successfully!",
      });

      reset();
      nextStep();
    } catch (error) {
      console.error("Error Occurred:", error.response?.data || error.message);
      setSubmitStatus({
        type: "error",
        message: error.response?.data?.message || "An error occurred while creating the contact",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">Pre-Qualification Questions</h2>

      <div className="flex flex-col gap-4 mt-2">
        <div>
          <label className="block mb-2">Are you 18 older and a UK resident?</label>
          <Controller
            name="eighteenAndUK"
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field }) => (
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input {...field} type="radio" value="yes" checked={field.value === "yes"} className="mr-2" />
                  Yes
                </label>
                <label className="flex items-center">
                  <input {...field} type="radio" value="no" checked={field.value === "no"} className="mr-2" />
                  No
                </label>
              </div>
            )}
          />
          {errors.eighteenAndUK && <p className="text-red-500 text-sm mt-1">{errors.eighteenAndUK.message}</p>}
        </div>

        <div>
          <label className="block mb-2">Are you currently employed?</label>
          <Controller
            name="employed"
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field }) => (
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input {...field} type="radio" value="yes" checked={field.value === "yes"} className="mr-2" />
                  Yes
                </label>
                <label className="flex items-center">
                  <input {...field} type="radio" value="no" checked={field.value === "no"} className="mr-2" />
                  No
                </label>
              </div>
            )}
          />
          {errors.employed && <p className="text-red-500 text-sm mt-1">{errors.employed.message}</p>}
        </div>

        <div>
          <label className="block mb-2">Do you usually make partial repayments on your credit card(s)?</label>
          <Controller
            name="partialRepayments"
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field }) => (
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input {...field} type="radio" value="yes" checked={field.value === "yes"} className="mr-2" />
                  Yes
                </label>
                <label className="flex items-center">
                  <input {...field} type="radio" value="no" checked={field.value === "no"} className="mr-2" />
                  No
                </label>
              </div>
            )}
          />
          {errors.partialRepayments && <p className="text-red-500 text-sm mt-1">{errors.partialRepayments.message}</p>}
        </div>
      </div>

      <p className="text-sm text-gray-600 mt-2">
        FlexCard is preparing to enter the FCA Sandbox for regulatory approval. All sign-ups are for early access and
        product testing purposes. Credit issuance is subject to FCA approval and final licensing.
      </p>

      <div className="flex justify-center mt-4">
        <Button type="secondary" onClick={handleSubmit(onSubmit)} label="Join the Waitlist" className="px-8" />
      </div>
      {submitStatus?.type == "error" && (
        <h1 className="px-3 py-2 w-full overflow-x-scroll  bg-red-100 rounded-xl">{submitStatus?.message}</h1>
      )}
    </div>
  );
};

export default FormTwo;
