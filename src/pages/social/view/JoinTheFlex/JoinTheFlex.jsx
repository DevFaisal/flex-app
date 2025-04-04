import React from 'react';
import image from '../../../../assets/png/image.png';
import { motion } from 'motion/react';
import Form from '../../../../components/other/Form/Form';

const JoinTheFlex = () => {
  const features = [
    {
      icon: '/cash.svg',
      title: 'Pay For What You Owe',
      description: `Save interest when you make partial repayments. <br /> Only pay for what you actually owe – not your full statement.`,
    },
    {
      icon: '/percent.svg',
      title: 'Representative 25% APR (Variable)',
      description:
        'We cap your interest rate at 25%. No sneaky jumps. <br /> Subject to credit status.',
    },
    {
      icon: '/cashback.svg',
      title: '1% Cashback on All Purchases (12 Months)',
      description:
        'Earn 1% cashback on every purchase – up to £15/month, <br /> for your first year.*',
    },
    {
      icon: '/credit-limit.svg',
      title: 'Up to £1,200 Credit Limit*',
      description: 'Credit subject to status',
    },
    {
      icon: '/metal-card.svg',
      title: 'Free Metal Card',
      description: 'The first 1,500 customers get our premium metal card – on us.*',
    },
  ];

  // bg-gray-900

  return (
    <section
      id="join"
      className="relative py-10 md:py-19 flex flex-col xl:flex-row gap-10 bg-opacity-80"
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <div className="absolute h-full w-full bg-black/40" />
        <img className="w-full h-full object-cover" src={image} alt="Background" />
      </div>

      <div className="relative mx-w-5xl lg:max-w-[1500px] mx-auto z-10 w-full flex flex-col px-5 md:px-8 lg:flex-row md:gap-10 items-center gap-10">
        <div className="flex-1 flex flex-col gap-6 bg-opacity-80 w-full px-5 md:px-8">
          <div className="w-full">
            <h1 className="subtitle self-stretch font-bold text-white leading-tight [font-family:'Manrope',Helvetica]">
              Join the FlexCard <br />
              Revolution
            </h1>
            <p className="pt-2 self-stretch font-medium text-lg tracking-[1.00px] text-white leading-normal [font-family:'Manrope',Helvetica]">
              Be among the first to get your hands on a credit card that's <br />
              designed to be fair and transparent.
            </p>
          </div>
          <div className="flex flex-1 flex-col items-start gap-4 md:gap-7 mt-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 text-white">
                <img src={feature.icon} alt={feature.title} className="w-9 h-9 md:w-13 md:h-13" />
                <div className="flex flex-col gap-1">
                  <h4 className="font-extrabold tracking-[0.36px]">{feature.title}</h4>
                  <p
                    dangerouslySetInnerHTML={{ __html: feature.description }}
                    className="text-sm md:text-base text-gray-300 tracking-[0.16px] font-normal"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 relative w-full md:max-w-xl mx-auto rounded-lg">
          <div className="hidden xl:block absolute translate-y-6 border-[3.5px] border-dashed border-white bg-opacity-50 rounded-lg -translate-x-5 h-full w-full -z-10" />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0, ease: 'easeInOut', stiffness: 100 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white p-4 justify-center items-center bg-opacity-80 rounded-lg z-10 mx-4 md:h-[600px] md:px-7"
          >
            <Form />
          </motion.div>
        </div>

        <div className="hidden xl:block absolute -top-[13%] xl:right-[42.5%]  z-[-10]">
          <svg
            width="81"
            height="364"
            viewBox="0 0 81 364"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 -293L2 90.5L2 283C2 326.63 37.3695 362 81 362V362"
              stroke="white"
              stroke-width="3"
              stroke-dasharray="6 6"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default JoinTheFlex;
