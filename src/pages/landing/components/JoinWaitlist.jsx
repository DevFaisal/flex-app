import React from "react";
import Container from "../../../components/view/Container";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";

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
              <div
                className="flex gap-4 items-start md:items-center"
                key={index}
              >
                <div className="w-15 h-15 min-w-15 flex items-center justify-center font-bold rounded-full bg-secondary text-white flex-shrink-0 mt-1 md:mt-0">
                  {index + 1}
                </div>
                <p className="text-base md:text-lg text-gray-600">{item}</p>
              </div>
            ))}
          </div>

          {/* Right side - Form */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 bg-white p-6 md:p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">
              Join the Waitlist & Get a Free Card Today!
            </h2>

            <div className="flex flex-col gap-4 mt-2">
              <Input label="Name" placeholder="Your Name" required={true} />
              <Input
                label="Email"
                type="email"
                placeholder="you@example.com"
                required={true}
              />
            </div>

            <p className="text-sm text-gray-600 mt-2">
              FlexCard is preparing to enter the FCA Sandbox for regulatory
              approval. All sign-ups are for early access and product testing
              purposes. Credit issuance is subject to FCA approval and final
              licensing.
            </p>

            <div className="self-center  mt-4">
              <Button
                type="secondary"
                label="Join the waitlist"
                className="w-full md:w-auto px-8"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default JoinWaitlist;
