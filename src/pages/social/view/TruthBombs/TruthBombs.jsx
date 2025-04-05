import React from 'react';
import img from '../../../../assets/png/creditcard.png';
import { promoCards } from '../../constants/constants';
import { useTakeQuizStore } from '../../store/calculateStore';
import Marquee from 'react-fast-marquee';

const TruthBombs = () => {
  const { handleNextStepWithScroll } = useTakeQuizStore((state) => state);

  return (
    <section
      id="testimonials"
      className="relative pt-8 pb-10 bg-gradient-to-r from-[#0569E8] to-[#76D232] overflow-hidden z-20 flex flex-col justify-center items-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${img})` }}
      />

      <div className="flex flex-col justify-center items-center z-50">
        <h2 className="text-3xl md:text-4xl font-bold text-white relative z-50">
          Credit Card Truth Bombs
        </h2>
        <p className="text-sm md:text-xl mt-2 text-gray-300 relative z-50">
          Things the credit card industry doesn't want you to know.
        </p>
      </div>

      <Marquee pauseOnHover={true} loop={false}>
        <div className="relative z-10 mt-10 flex flex-nowrap gap-6 lg:pl-0 pr-5 py-5 md:py-10">
          {promoCards.map((promoCard, index) => (
            <PromoCard
              key={index}
              title={promoCard.title}
              onCtaClick={handleNextStepWithScroll}
              description={promoCard.description}
              icon={promoCard.icon}
            />
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default TruthBombs;

function PromoCard({
  icon,
  title,
  description,
  ctaText = 'Take the Quiz',
  onCtaClick = () => {},
  className = '',
}) {
  return (
    <div
      className={`bg-white flex-shrink-0 flex-col rounded-md h-auto w-[240px] md:w-[350px] md:h-[350px] flex items-start justify-start md:gap-6 pb-8 md:py-0  px-5 md:px-4 snap-start max-w-md ${className} shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-[1px] border-gray-200 md:even:mt-13`}
    >
      <div className="flex items-center justify-start 0 pt-0 md:pt-3">
        <div className="mr-2">
          <img src={icon} alt="icon" className="w-35 h-35" />
        </div>
        <div>
          <h3 className="font-bold text-base md:text-2xl text-black">{title}</h3>
        </div>
      </div>
      <div className="">
        <h4 className="text-sm md:text-base text-gray-800">{description}</h4>
      </div>
      {/* <button onClick={onCtaClick} className="flex items-center justify-center text-blue-500 font-medium ">
        <span className="mr-2 text-xl md:text-2xl border-2 border-gray-200 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-gray-50 transition-colors">
          +
        </span>
        {ctaText}
      </button> */}
    </div>
  );
}
