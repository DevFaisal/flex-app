import React from 'react';
import useCalculateStore from '../../../store/calculateStore';
import debtImage from '../../../../../assets/svg/debt.svg';
import Button from '../../../../../components/ui/Button';

const Calculator = ({ handleNextStep }) => {
  const form = useCalculateStore((state) => state.form);

  // Calculate values based on form data
  const balance = parseFloat(form?.balance || 0);
  const minimumPercent = parseFloat(form?.minimum || 0) / 100;
  const apr = parseFloat(form?.apr || 0) / 100;
  const additionalSpending = parseFloat(form?.spending || 0);

  // Simple calculation for display purposes
  const totalInterest = Math.round(balance * apr);
  const monthsToPayOff = Math.round(balance / (balance * minimumPercent));
  const flexCardSavings = Math.round(totalInterest * 0.4); // 40% savings example
  const flexCardMonthly = Math.round((balance + additionalSpending) / 12);

  return (
    <section className="flex flex-col md:flex-row justify-between items-start gap-10">
      <div className="w-full md:w-1/2">
        <h2 className="text-xl font-bold pt-3">Your Current Situation</h2>
        <p className="mb-4 text-gray-600">Based on your credit card details</p>
        <div className="flex flex-col gap-4 w-full">
          <InfoCard title="Total Interest Paid" value={`$${totalInterest.toLocaleString()}`} />
          <InfoCard title="Months to Pay Off" value={`${monthsToPayOff} Months`} />
          <InfoCard
            title="FlexCard Potential Savings"
            value={`$${flexCardSavings.toLocaleString()}`}
            highlight={true}
          />
          <InfoCard
            title="Est. Monthly Payment with FlexCard"
            value={`$${flexCardMonthly.toLocaleString()}`}
          />
        </div>
        <p className="mt-4 text-gray-700  p-4 rounded-lg ">
          <strong>Recommendation:</strong> Based on your credit card usage, you could save
          significantly with FlexCard by only paying interest on what you actually owe.
        </p>
        {/* <button
          onClick={handlePreviousStep}
          className="mt-6 px-5 py-2.5 rounded-lg font-medium text-gray-700 border border-gray-300 hover:bg-gray-50 transition-colors"
        >
          ← Back to Details
        </button> */}
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-start justify-center md:space-y-4  md:p-6 rounded-lg">
        <img
          src={debtImage}
          alt="Debt visualization"
          className="max-w-full h-auto hidden md:flex"
        />
        <h2 className="text-xl hidden md:flex font-bold">Did you know?</h2>
        <p className="hidden md:flex text-gray-700">
          When you make partial repayments on your credit card, you're still being charged interest
          on the full amount from your last statement. With FlexCard, you only pay interest on what
          you actually owe, not on the money you've already paid back.
        </p>
        <Button
          onClick={() => handleNextStep()}
          type="secondary"
          label={`Continue to Pre-Qualification →`}
          className="w-full md:w-auto md:mt-4"
        />
      </div>
    </section>
  );
};

export default Calculator;

function InfoCard({ title, value, highlight = false }) {
  return (
    <div
      className={`flex flex-col justify-between items-start py-3 px-4 rounded-xl w-full ${
        highlight ? 'bg-blue-50 border border-blue-100' : 'bg-[#F2F4F8]'
      }`}
    >
      <h3 className="text-gray-600 font-medium">{title}</h3>
      <h2
        className={`text-3xl md:text-4xl font-extrabold ${
          highlight ? 'text-blue-600' : 'text-secondary'
        }`}
      >
        {value}
      </h2>
    </div>
  );
}
