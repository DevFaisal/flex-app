import React, { useState, useEffect } from "react";
import HeaderNote from "../../../../components/ui/HeaderNote";
import Input from "../../../../components/ui/Input";
import Button from "../../../../components/ui/Button";

const CreditCardCalculator = () => {
  const [balance, setBalance] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [progress, setProgress] = useState(50);

  const [monthlyRepayment, setMonthlyRepayment] = useState(0);
  const [monthlyInterestCharged, setMonthlyInterestCharged] = useState(0);
  const [monthlySavings, setMonthlySavings] = useState(0);

  const steps = [10, 25, 50, 75, 100];

  const calculateCreditCardFinances = () => {
    // Convert inputs to numbers
    const cardBalance = parseFloat(balance) || 0;
    const aprRate = parseFloat(interestRate) || 0;

    // Monthly interest rate (APR / 12)
    const monthlyRate = aprRate / 100 / 12;

    // Minimum payment percentage
    const minPaymentPercent = progress / 100;

    // Calculate monthly repayment
    const minMonthlyRepayment = Math.max(
      cardBalance * minPaymentPercent,
      10 // Minimum payment of £10
    );

    // Calculate monthly interest
    const monthlyInterest = cardBalance * monthlyRate;

    // Calculate potential savings
    const typicalFullInterest = monthlyInterest;
    const potentialSavings = typicalFullInterest - minMonthlyRepayment * 0.5;

    // Update state
    setMonthlyRepayment(minMonthlyRepayment.toFixed(2));
    setMonthlyInterestCharged(monthlyInterest.toFixed(2));
    setMonthlySavings(Math.max(potentialSavings, 0).toFixed(2));
  };

  useEffect(() => {
    calculateCreditCardFinances();
  }, [balance, interestRate, progress]);

  const handleSliderChange = (step) => {
    setProgress(step);
  };

  return (
    <section
      id="calculator"
      className=" relative flex flex-col justify-center items-center p-4 md:p-15 max-w-5xl mx-auto"
    >
      <HeaderNote
        note={"Credit Card Calculator"}
        desc={`Discover how much interest you're really paying and how FlexCard can help you save.`}
      />

      <div className="p-4 md:p-6 border-[0.5px] border-gray-400 rounded-2xl bg-white z-[10] w-full max-w-xl">
        {/* Inputs - Stacked on mobile, side-by-side on larger screens */}
        <div className="flex flex-col md:flex-row gap-3 mb-4">
          <div className="w-full md:w-1/2">
            <label htmlFor="" className="text-sm mb-2 block text-gray-500">
              Spending
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">£</span>
              <input
                value={balance}
                onChange={(e) => setBalance(e.target.value)}
                type="number"
                className="w-full bg-[#F2F4F8] pl-7 pr-3 py-2 rounded-md outline-none appearance-none shadow-[0px_2px_0px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <label htmlFor="" className="text-sm mb-2 block">
              Credit Limit
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">£</span>
              <input
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                type="number"
                className="w-full bg-[#F2F4F8] pl-7 pr-3 py-2 rounded-md outline-none appearance-none shadow-[0px_2px_0px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
              />
            </div>
          </div>
        </div>

        {/* Slider Section */}
        <div className="mb-15 w-full bg-white">
          <div className="flex flex-wrap items-center justify-between text-gray-600 mb-2">
            <h2 className="flex items-center gap-1 w-full mb-2">
              Min Payment
              <span className="relative group ml-1">
                <span className="w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center text-xs cursor-pointer">
                  ?
                </span>
              </span>
            </h2>

            <div className="flex justify-between w-full">
              {steps.map((step) => (
                <span key={step} className="text-xs">
                  {step}%
                </span>
              ))}
            </div>
          </div>

          {/* Slider Track */}
          <div className="relative w-full h-2 mt-2">
            <div className="absolute py-2.5 w-full h-full bg-gray-300 rounded-full"></div>
            <div
              className="absolute py-2.5 h-full bg-gradient-to-r from-[#096CE3] to-[#0A55B0] rounded-full"
              style={{ width: `${progress}%` }}
            ></div>

            <div className="relative flex justify-between items-center w-full h-full">
              {steps.map((step) => (
                <button
                  key={step}
                  onClick={() => handleSliderChange(step)}
                  className={`
                    w-3 h-3 -top-[-3.5px] rounded-full border-2 border-white shadow-md 
                    ${progress >= step ? "bg-white" : "bg-gray-300"}
                    absolute
                  `}
                  style={{
                    left: `${step}%`,
                    transform: "translateX(-50%)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <span className="block p-[0.5px] mb-15 bg-gray-300 my-6"></span>

        {/* Financial Insights - Stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <InputView symbol={"£"} title={"Monthly Repayments"} amount={monthlyRepayment} />
          <InputView symbol={"%"} title={"Interest Rate (APR %)"} amount={interestRate || 0} />
          <InputView symbol={"£"} title={"Monthly Interest Charged"} amount={monthlyInterestCharged} />
        </div>

        {/* Savings Section */}
        <div className="mt-6">
          <h2 className="text-sm py-2 text-[#21272A]">Monthly interest saved</h2>
          <div className="flex flex-col md:flex-row justify-between items-center bg-secondary p-3 rounded-xl">
            <h2 className="text-3xl font-bold text-white mb-3 md:mb-0">
              <span>£</span>
              {monthlySavings}
            </h2>
            <Button type="white" label={"Find out who"} />
          </div>
          <p className="text-sm py-2 text-[#7B838B]">
            <strong>Note:</strong> This calculator is a guide only and illustrates how "Pay For What You Owe" interest
            works.
          </p>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute w-full h-2/3 top-50 bg-gradient-to-r from-[#0569E8] to-[#76D232] blur-3xl opacity-15"></div>
    </section>
  );
};

export default CreditCardCalculator;

function InputView({ title, symbol, amount }) {
  return (
    <div>
      <div>
        <h2 className="text-sm py-2 text-[#21272A] text-nowrap">{title}</h2>
        <h2 className="bg-[#E4EFFC] px-4 py-3 rounded-xl text-xl font-bold">
          <span className="text-secondary">{symbol}</span>
          {amount}
        </h2>
      </div>
    </div>
  );
}
