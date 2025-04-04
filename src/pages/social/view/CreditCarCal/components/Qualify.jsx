import React from 'react';
import Select from '../../../../../components/ui/Select';
import Button from '../../../../../components/ui/Button';

const Qualify = () => {
  const selectOptions = [
    {
      label: 'How much do you spend on your credit card monthly?',
      options: [
        { value: '0-250', label: '$0 - $250' },
        { value: '250-500', label: '$250 - $500' },
        { value: '500-1000', label: '$500 - $1000' },
        { value: '1000+', label: 'More than $1000' },
      ],
    },
    {
      label: 'What is your average transaction size?',
      options: [
        { value: '0-25', label: '$0 - $25' },
        { value: '25-50', label: '$25 - $50' },
        { value: '50-100', label: '$50 - $100' },
        { value: '100+', label: 'More than $100' },
      ],
    },
    {
      label: 'How much of your balance do you typically pay each month?',
      options: [
        { value: '0-25', label: '0% - 25%' },
        { value: '25-50', label: '25% - 50%' },
        { value: '50-75', label: '50% - 75%' },
        { value: '75-100', label: '75% - 100%' },
      ],
    },
    {
      label: 'How many credit cards do you currently have?',
      options: [
        { value: '0', label: 'None' },
        { value: '1', label: '1' },
        { value: '2-3', label: '2-3' },
        { value: '4+', label: 'More than 4' },
      ],
    },
    {
      label: 'How do you typically pay your credit card bill?',
      options: [
        { value: 'full', label: 'In full each month' },
        { value: 'partial', label: 'Partial payment' },
        { value: 'min', label: 'Minimum payment' },
        { value: 'carry', label: 'Carry a balance' },
      ],
    },
    {
      label: 'Do you request refunds frequently?',
      options: [
        { value: 'never', label: 'Never' },
        { value: 'rarely', label: 'Rarely' },
        { value: 'sometimes', label: 'Sometimes' },
        { value: 'often', label: 'Often' },
      ],
    },
    {
      label: 'Would you consider yourself an impulse buyer?',
      options: [
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
        { value: 'sometimes', label: 'Sometimes' },
      ],
    },
  ];

  return (
    <section className="max-w-2xl mx-auto p-3">
      <h1 className="text-xl font-bold">Pre-Qualification Questions</h1>
      <p>Help us understand your credit card usage to better tailor FlexCard to your needs.</p>
      <div className="space-y-4 mt-6">
        {selectOptions.map((option, index) => (
          <Select label={option.label} options={option.options} key={index} className="mb-4" />
        ))}
        <Button type="secondary" label={`Join the Waitlist`} className="w-full mt-7" />
      </div>
    </section>
  );
};

export default Qualify;
