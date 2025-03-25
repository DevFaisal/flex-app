import React from "react";
import Container from "../../../components/view/Container";
import Form from "../../../components/other/Form/Form";

const JoinWaitlist = () => {
  const info = [
    "So we built FlexCard.app—a card that truly charges interest only on what you owe.",
    "We reward healthy repayment behavior: If you consistently pay more than the minimum, we reduce your interest rate over time.",
    "We are in beta stage and looking to disrupt unfair lending. Why pay full interest when you've made partial payments?",
  ];

  return (
    <section className="py-12 md:py-20">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-16">
          {/* Left side - Benefits */}
          <div className="w-full lg:w-2/5 flex flex-col gap-8 md:gap-10">
            {info.map((item, index) => (
              <div className="flex gap-4 items-start md:items-center" key={index}>
                <div className="w-15 h-15 min-w-15 flex items-center justify-center font-bold rounded-full bg-secondary text-white flex-shrink-0 mt-1 md:mt-0">
                  {index + 1}
                </div>
                <p className="text-base md:text-lg text-gray-600">{item}</p>
              </div>
            ))}
          </div>

          {/* Right side - Form */}
          <RightSideForm />
        </div>
      </Container>
    </section>
  );
};

export default JoinWaitlist;

function RightSideForm() {
  return (
    <div className="w-full lg:w-1/2 flex flex-col gap-6 bg-white p-2 md:p-4">
      <Form />
    </div>
  );
}
