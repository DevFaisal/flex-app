import React from 'react';
import Button from '../../../components/ui/Button';

const Join = () => {
  return (
    <section className="py-8 md:py-12 lg:py-20 px-4 sm:px-6 md:px-10">
      <div className="bg-gradient-to-r h-full from-[#0569E8] to-[#76D232] p-6 sm:p-10 md:p-16 lg:p-20 rounded-xl md:rounded-2xl lg:rounded-3xl">
        <div className="flex flex-col gap-4 md:gap-7 justify-center items-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white text-center">
            Join the Waitlist & Get a Free Card Today!
          </h1>
          <p className="text-white text-center text-sm md:text-base w-full md:max-w-3xl lg:max-w-5xl">
            FlexCard is preparing to enter the FCA Sandbox for regulatory approval. All sign-ups are
            for early access and product testing purposes. Credit issuance is subject to FCA
            approval and final licensing
          </p>
          <Button
            type="secondary"
            label="Join the waitlist"
            className="w-full sm:w-auto px-4 sm:px-6 md:px-8"
          />
        </div>
      </div>
    </section>
  );
};

export default Join;
