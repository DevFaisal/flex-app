import React, { useEffect, useState } from 'react';
import InputView from './InputView';
import { MdQuestionMark } from 'react-icons/md';
import Tooltip from '../../../../../../components/ui/Tooltip';
import Button from '../../../../../../components/ui/Button';

const Card = () => {
  const [balance, setBalance] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [progress, setProgress] = useState(50);
  const [apr, setApr] = useState(25);

  const [monthlyRepayment, setMonthlyRepayment] = useState(0);
  const [monthlyInterestCharged, setMonthlyInterestCharged] = useState(0);
  const [monthlySavings, setMonthlySavings] = useState(0);

  const steps = [10, 25, 50, 75, 100];

  const calculateCreditCardFinances = () => {
    // Convert inputs to numbers with safe defaults
    const cardBalance = Math.max(parseFloat(balance) || 0, 0); // Ensure non-negative
    const aprRate = Math.max(parseFloat(apr) || 25, 0); // Ensure non-negative, default 25%
    const progressRate = Math.min(Math.max(parseFloat(progress) || 0, 0), 100); // Ensure 0-100%

    // Compute repayment, ensuring it does not exceed balance
    const repayment = Math.min((progressRate / 100) * cardBalance, cardBalance);
    const monthlyRate = aprRate / 100 / 12;

    // Ensure interest calculations stay within valid limits
    const remainingBalance = Math.max(cardBalance - repayment, 0);
    const monthlyInterest = remainingBalance * monthlyRate;

    // Ensure interest saved is valid
    const totalPossibleInterest = cardBalance * monthlyRate;
    const monthlyInterestSaved = Math.max(totalPossibleInterest - monthlyInterest, 0);

    // Set computed values
    setMonthlyRepayment(repayment.toFixed(2));
    setMonthlyInterestCharged(monthlyInterest.toFixed(2));
    setMonthlySavings(monthlyInterestSaved.toFixed(2));
  };

  useEffect(() => {
    calculateCreditCardFinances();
  }, [balance, interestRate, progress]);

  const handleSliderChange = (step) => {
    setProgress(step);
  };

  return (
    <div className="p-3 md:p-5 px-5 md:px-6 border-[#C1C7CD] border-[3.5px] border-dashed rounded-3xl bg-white z-[9999] w-full max-w-xl">
      {/* Inputs - Stacked on mobile, side-by-side on larger screens */}
      <div className="flex flex-col md:flex-row gap-3 mb-4">
        <LabelledInput
          label={'Spending'}
          value={balance}
          setValue={setBalance}
          symbol={'£'}
          type={'number'}
        />
        <LabelledInput
          label={'Credit Limit'}
          value={interestRate}
          setValue={setInterestRate}
          symbol={'£'}
          type={'number'}
        />
      </div>

      {/* Slider Section */}
      <div className="mb:5 md:mb-15 w-full bg-white">
        <div className="flex flex-wrap items-center justify-between text-gray-600 mb-2">
          <h6 className="flex items-center gap-1 w-full mb-2">
            Min Payment
            <Tooltip
              Icon={<MdQuestionMark size={12} />}
              text={'This is the minimum payment you need to make to avoid late fees.'}
            />
          </h6>

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
          <div className="absolute py-2 md:py-2.5 w-full h-full bg-gray-300 rounded-full"></div>
          <div
            className="absolute py-2 md:py-2.5 h-full bg-gradient-to-r from-[#096CE3] to-[#0A55B0] rounded-full ease-linear duration-400"
            style={{ width: `${progress}%` }}
          ></div>

          <div className="relative flex justify-between items-center w-full h-full">
            {steps.map((step) => (
              <button
                key={step}
                onClick={() => handleSliderChange(step)}
                className={`
                    w-[10px] h-[10px] md:w-[12px] md:h-[12px] -top-[-3.5px] rounded-full border-2 border-white shadow-md 
                    ${progress >= step ? 'bg-white' : 'bg-gray-300'}
                    absolute
                  `}
                style={{
                  left: `${step}%`,
                  transform: 'translateX(-210%)',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <span className="block p-[0.5px] mb-4 md:mb-5 bg-gray-300"></span>

      {/* Financial Insights - Stacked on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-2">
        <InputView symbol={'£'} title={'Monthly Repayments'} amount={monthlyRepayment} />
        <InputView
          symbol={'%'}
          title={'Interest Rate (APR %)'}
          amount={apr || 0}
          tooltipText={`This is the interest rate you're charged on your credit card. It's usually expressed as an annual percentage rate (APR).`}
        />
        <InputView
          symbol={'£'}
          title={'Monthly Interest Charged'}
          amount={monthlyInterestCharged}
        />
      </div>

      {/* Savings Section */}
      <div className="mt-4 md:mt-6">
        <h6 className="py-2 text-[#21272A]">Monthly interest saved</h6>
        <div className="flex flex-col md:flex-row justify-between items-center bg-secondary p-3 rounded-xl">
          <h2 className="text-xl md:text-3xl font-bold text-white truncate">
            £{parseFloat(monthlySavings).toFixed(2).toLocaleString('en-GB')}
          </h2>
          <Button type="white" className="text-xs md:text-sm" label={'Find Out More'} />
        </div>
        <p className="pt-4 text-xs md:text-sm text-[#7B838B]">
          <strong>Note:</strong> This calculator is a guide only and illustrates how "Pay For What
          You Owe" interest works.
        </p>
      </div>
    </div>
  );
};

export default Card;

function LabelledInput({ label, value, setValue, symbol, type }) {
  return (
    <div className="w-full md:w-1/2">
      <label htmlFor="" className="text-xs md:text-sm mb-0.5 block text-gray-500">
        {label}
      </label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-md md:text-xl">
          {symbol}
        </span>
        <input
          keyboardType="numeric"
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type={type}
          className="w-full text-md md:text-xl font-semibold bg-[#F2F4F8] pl-7 pr-3 py-1.5 md:py-2  rounded-md outline-none appearance-none shadow-[0px_2px_0px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        />
      </div>
    </div>
  );
}
