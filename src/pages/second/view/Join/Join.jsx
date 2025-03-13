import React from "react";
import Button from "../../../../components/ui/Button";

const Join = () => {
  return (
    <section className="py-8 md:py-12 lg:py-20 px-4 sm:px-6 md:px-10">
      <div className="bg-gradient-to-r h-full from-[#0569E8] to-[#76D232] p-6 sm:p-10 md:p-16 lg:p-20 rounded-xl md:rounded-2xl lg:rounded-3xl">
        <div className="flex flex-col gap-4 md:gap-7 justify-center items-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white text-center">
            Join the #PayForWhatYouOwe Challenge
          </h1>
          <p className="text-white text-center text-sm md:text-base w-full md:max-w-3xl lg:max-w-5xl">
            Share on social media and get an extra £10 cashback bonus when your
            card arrives.
          </p>
          <Button
            type="white"
            label="Share now ->"
            className="w-full sm:w-auto px-4 sm:px-6 md:px-8"
          />
          <p className="text-white text-center text-sm md:text-base w-full md:max-w-3xl lg:max-w-5xl">
            We'll verify your social share when you receive your card to apply
            the bonus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Join;
