import React from 'react';
import Button from '../../../../../components/ui/Button';
import useCurrentEnroll from '../../../../../hooks/useCurrentEnroll';

const Join = () => {
  const number = useCurrentEnroll();
  return (
    <section className="py-6 sm:py-8 md:py-12 lg:py-20 px-3 sm:px-6 md:px-10 ">
      <div className="bg-gradient-to-r from-[#0569E8] to-[#76D232] p-4 sm:p-8 md:p-12 lg:p-16 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl shadow-lg">
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 lg:gap-8 justify-center items-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white text-center leading-tight">
            Join the #PayForWhatYouOwe Challenge
          </h1>
          <p className="text-white text-center text-sm sm:text-base md:text-lg lg:text-xl w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl">
            Join <strong>{number}</strong> people who are switching to fairer credit.
          </p>
          <Button
            type="white"
            label="Share now ->"
            className="w-full sm:w-auto text-sm sm:text-base px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 transition-all duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Join;
