import React from "react";
import image from "../../../../assets/png/image.png";
import { MdDone } from "react-icons/md";
import Form from "../../../../components/other/Form/Form";

const JoinTheFlex = () => {
  const features = [
    {
      icon: "/cash.svg",
      title: "Pay For What You Owe",
      description: `Save interest when you make partial repayments. <br /> Only pay for what you actually owe – not your full statement.`,
    },
    {
      icon: "/percent.svg",
      title: "Representative 25% APR (Variable)",
      description: "We cap your interest rate at 25%. No sneaky jumps. <br /> Subject to credit status.",
    },
    {
      icon: "/cashback.svg",
      title: "1% Cashback on All Purchases (12 Months)",
      description: "Earn 1% cashback on every purchase – up to £15/month, <br /> for your first year.*",
    },
    {
      icon: "/credit-limit.svg",
      title: "Up to £1,200 Credit Limit*",
      description: "Credit subject to status",
    },
    {
      icon: "/metal-card.svg",
      title: "Free Metal Card",
      description: "The first 1,500 customers get our premium metal card – on us.*",
    },
  ];

  return (
    <section className="relative py-10 md:py-20 flex flex-col xl:flex-row gap-10 bg-gray-900 xl:h-[85vh]">
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <img className="w-full h-full object-cover opacity-40" src={image} alt="Background" />
      </div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col xl:flex-row md:gap-10 items-center">
        <div className="flex-1 flex flex-col gap-6 bg-opacity-80 p-6">
          <h1 className="self-stretch font-bold text-white text-[42px] leading-[46.2px] [font-family:'Manrope',Helvetica]">
            Join the FlexCard <br />
            Revolution
          </h1>
          <p className="self-stretch font-medium text-lg tracking-[1.00px] text-white leading-normal [font-family:'Manrope',Helvetica]">
            Be among the first to get your hands on a credit card that's <br />
            designed to be fair and transparent.
          </p>
          <div className="flex flex-1 flex-col items-start gap-5 mt-4 ">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 text-white">
                <img src={feature.icon} alt={feature.title} className="w-15 h-15" />
                <div className="flex flex-col gap-1">
                  <span className="font-extrabold text-2xl tracking-[0.36px]">{feature.title}</span>
                  <span
                    dangerouslySetInnerHTML={{ __html: feature.description }}
                    className="text-base tracking-[0.16px] font-normal"
                  />
                </div>
              </div>
            ))}
          </div>
          {/* <div className="flex flex-col gap-4 md:gap-8">
            {Info.map((item, index) => (
              <div key={index} className="flex justify-start items-center gap-2 md:gap-4">
                <p className="ring-3 flex rounded-full p-1 w-fit ring-white">
                  <MdDone className="text-[#76D232] md:text-2xl" />
                </p>
                <h1 className="text-white text-sm md:text-base" dangerouslySetInnerHTML={{ __html: item }} />
              </div>
            ))}
          </div> */}
        </div>

        <div className="flex-1 relative max-w-xl h-full mx-auto bg-amber-300 rounded-lg">
          <div className="absolute translate-y-6 border-2 border-dashed border-white bg-opacity-80 rounded-lg -translate-x-5 h-full w-full -z-10" />
          <div className="flex-1 p-8 flex-col justify-center items-center gap-6 bg-opacity-80 bg-white rounded-lg z-10 h-full w-full">
            <Form />
          </div>
        </div>

        <div className="absolute -top-[12%] right-[40%] h-full">
          <svg width="81" height="364" viewBox="0 0 81 364" fill="none" xmlns="http://www.w3.org/2000/svg">
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
