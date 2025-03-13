import React from "react";
import HeaderNote from "../../../../components/ui/HeaderNote";
import img from "../../../../assets/svg/scaterline.svg";
import { ImCog } from "react-icons/im";

const TruthBombs = () => {
  const promoCards = [
    {
      title: "Free Metal Card for first 5,000 users",
      description: "Sign up now to claim your exclusive metal card.",
      icon: <ImCog className="text-5xl text-blue-500" />,
    },
    {
      title: "Get 20% Cashback",
      description: "Earn 20% cashback on your first transaction.",
      icon: <ImCog className="text-5xl text-green-500" />,
    },
    {
      title: "Exclusive VIP Access",
      description: "Unlock VIP lounges at airports worldwide.",
      icon: <ImCog className="text-5xl text-purple-500" />,
    },
    {
      title: "Zero Annual Fees",
      description: "Enjoy a lifetime free card with no annual charges.",
      icon: <ImCog className="text-5xl text-red-500" />,
    },
    {
      title: "Double Reward Points",
      description: "Earn 2x points on every purchase for the first 3 months.",
      icon: <ImCog className="text-5xl text-yellow-500" />,
    },
    {
      title: "Refer & Earn",
      description: "Invite friends and get $50 cashback for each referral.",
      icon: <ImCog className="text-5xl text-teal-500" />,
    },
    {
      title: "Low Interest Rates",
      description:
        "Enjoy the lowest interest rates on your credit card balance.",
      icon: <ImCog className="text-5xl text-indigo-500" />,
    },
  ];
  return (
    <section className="py-20 bg-[#F2F4F8] relative h-[80vh] min-h-[80vh] overflow-hidden">
      <HeaderNote
        note={"Credit Card Truth Bombs"}
        desc={`Things the credit card industry doesn't want you to know.`}
      />
      <img
        className="absolute -top-5 right-0 h-full -z-0"
        src={img}
        alt="Background pattern"
      />
      <div className="relative z-10 mt-10 flex flex-nowrap overflow-x-auto gap-6 pb-8 px-4 md:px-8 snap-x">
        {promoCards.map((promoCard, index) => (
          <PromoCard
            key={index}
            title={promoCard.title}
            description={promoCard.description}
            icon={promoCard.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default TruthBombs;

function PromoCard({
  icon,
  title,
  description,
  ctaText = "Take the Quiz",
  onCtaClick = () => {},
  className = "",
}) {
  return (
    <div
      className={`bg-white flex-shrink-0 flex-col rounded-md even:h-[400px] odd:h-[420px]  w-[360px] flex items-start justify-between py-15 px-8 snap-start max-w-md ${className} shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-[1px] border-gray-200`}
    >
      <div className="flex items-start mb-4">
        <div className="mr-4">{icon}</div>
        <div>
          <h2 className="text-2xl font-bold mb-1 text-black">{title}</h2>
        </div>
      </div>
      <p className="text-gray-800 text-xl mb-6">{description}</p>
      <button
        onClick={onCtaClick}
        className="flex items-center justify-center text-blue-500 font-medium "
      >
        <span className="mr-2 text-2xl border border-gray-200 rounded-full py-2 px-6 hover:bg-gray-50 transition-colors">
          +
        </span>
        {ctaText}
      </button>
    </div>
  );
}
