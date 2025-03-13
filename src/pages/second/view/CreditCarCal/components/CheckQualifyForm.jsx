import React from "react";
import { useState } from "react";
import Input from "../../../../../components/ui/Input";
import useCalculateStore from "../../../store/calculateStore";

const CheckQualifyForm = ({ handleNextStep, currentStep }) => {
  const [formData, setFormData] = useState({
    balance: "",
    minimum: "",
    apr: "",
    spending: "",
  });

  const [errors, setErrors] = useState({
    balance: "",
    minimum: "",
    apr: "",
    spending: "",
  });

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Validate balance (must be a number > 0)
    if (
      !formData.balance ||
      isNaN(formData.balance) ||
      parseFloat(formData.balance) <= 0
    ) {
      newErrors.balance = "Please enter a valid balance";
      isValid = false;
    }

    // Validate minimum (must be a number between 1-100)
    if (
      !formData.minimum ||
      isNaN(formData.minimum) ||
      parseFloat(formData.minimum) <= 0 ||
      parseFloat(formData.minimum) > 100
    ) {
      newErrors.minimum = "Please enter a percentage between 1-100";
      isValid = false;
    }

    // Validate APR (must be a number > 0)
    if (!formData.apr || isNaN(formData.apr) || parseFloat(formData.apr) <= 0) {
      newErrors.apr = "Please enter a valid interest rate";
      isValid = false;
    }

    // Validate spending (must be a number >= 0)
    if (
      formData.spending === "" ||
      isNaN(formData.spending) ||
      parseFloat(formData.spending) < 0
    ) {
      newErrors.spending = "Please enter a valid amount";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  function handleSubmitCalculate() {
    if (validateForm()) {
      useCalculateStore.setState({ form: formData });
      handleNextStep();
    }
  }

  const selectOptions = [
    {
      id: "balance",
      label: "Current Statement Balance",
      placeholder: "$ 1000",
      type: "number",
      prefix: "$",
    },
    {
      id: "minimum",
      label: "Minimum Repayment Percentage",
      placeholder: "3",
      type: "number",
      prefix: "%",
    },
    {
      id: "apr",
      label: "Interest Rate (APR)",
      placeholder: "21.9",
      type: "number",
      prefix: "%",
    },
    {
      id: "spending",
      label: "Additional Monthly Spending",
      placeholder: "0",
      type: "number",
      prefix: "$",
    },
  ];

  return (
    <div className="py-6 space-y-6 max-w-lg mx-auto">
      {selectOptions.map((option) => (
        <div key={option.id} className="space-y-1">
          <Input
            label={option.label}
            placeholder={option.placeholder}
            type={option.type}
            onChange={(e) => {
              const value = e.target.value.replace(/[^0-9.]/g, "");
              setFormData({ ...formData, [option.id]: value });
              // Clear error when user types
              if (errors[option.id]) {
                setErrors({ ...errors, [option.id]: "" });
              }
            }}
            value={formData[option.id]}
          />
          {errors[option.id] && (
            <p className="text-red-500 text-sm">{errors[option.id]}</p>
          )}
        </div>
      ))}

      <article className="text-md space-y-2 text-gray-600 w-full bg-blue-50 p-4 rounded-lg border border-blue-100">
        <p>
          <strong>APR:</strong> Annual Percentage Rate - the yearly interest
          rate charged on your credit card balance.
        </p>
        <p>
          <strong>Minimum Repayment:</strong> The smallest amount you must pay
          monthly on your credit card.
        </p>
      </article>

      <div className="pt-4">
        <button
          onClick={handleSubmitCalculate}
          className="w-full px-6 py-3 rounded-lg font-semibold transition-colors bg-secondary text-white hover:bg-opacity-90"
        >
          Calculate Savings →
        </button>
      </div>
    </div>
  );
};

export default CheckQualifyForm;
