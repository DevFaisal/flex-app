import React from "react";
import img from "../../../../assets/png/creditcard.png";
import { ImCog } from "react-icons/im";

const TruthBombs = () => {
  const promoCards = [
    {
      title: `Partial Payments?
Still Paying Full
Interest`,
      description: `Paying more than the minimum but less than the full balance? Traditional credit cards still charge you interest on the full statement amount.`,
      icon: <ImCog className="text-5xl text-blue-500" />,
    },
    {
      title: `Refunds Aren’t Payments`,
      description: `Returned an item? You might think it reduces what you owe… but if it’s after your statement cycle, you’ll still pay interest.`,
      icon: <ImCog className="text-5xl text-green-500" />,
    },
    {
      title: `Rewards Are 
Designed for 
Banks, Not You`,
      description: `That cashback and rewards program? It’s built to make you spend more—not to help you save.`,
      icon: <ImCog className="text-5xl text-purple-500" />,
    },
    {
      title: `70% of People 
Want a Credit 
Card That’s Fair`,
      description: `We asked 2,500+ people what they wanted—70% said they wanted to “Pay for What You Owe.” So, we built Flex.`,
      icon: <ImCog className="text-5xl text-red-500" />,
    },
  ];
  return (
    <section className="relative py-20 bg-gradient-to-r from-[#0569E8] to-[#76D232] md:h-[80vh] min-h-[80vh] overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${img})` }} />

      <div className="flex flex-col justify-center items-center z-50">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Credit Card Truth Bombs</h2>
        <p className="text-sm md:text-xl mt-2 text-gray-300">
          Things the credit card industry doesn't want you to know.
        </p>
      </div>
      <div className="relative z-10 mt-10 flex flex-nowrap overflow-x-auto gap-6 pb-8 px-4 md:px-8 snap-x">
        {promoCards.map((promoCard, index) => (
          <PromoCard key={index} title={promoCard.title} description={promoCard.description} icon={promoCard.icon} />
        ))}
      </div>
    </section>
  );
};

export default TruthBombs;

function PromoCard({ icon, title, description, ctaText = "Take the Quiz", onCtaClick = () => {}, className = "" }) {
  return (
    <div
      className={`bg-white flex-shrink-0 flex-col rounded-md md:even:h-[400px] md:odd:h-[420px]  w-[360px] flex items-start justify-between py-15 px-8 snap-start max-w-md ${className} shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-[1px] border-gray-200`}
    >
      <div className="flex items-start mb-4">
        <div className="mr-4">{icon}</div>
        <div>
          <h2 className="text-2xl font-bold mb-1 text-black">{title}</h2>
        </div>
      </div>
      <p className="text-gray-800 text-xl mb-6">{description}</p>
      <button onClick={onCtaClick} className="flex items-center justify-center text-blue-500 font-medium ">
        <span className="mr-2 text-2xl border border-gray-200 rounded-full py-2 px-6 hover:bg-gray-50 transition-colors">
          +
        </span>
        {ctaText}
      </button>
    </div>
  );
}
