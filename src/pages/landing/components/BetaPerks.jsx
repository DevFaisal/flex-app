import React from "react";
import Container from "../../../components/view/Container";
import HeaderNote from "../../../components/ui/HeaderNote";
import cashbackimg from "../../../assets/icons/cashback.svg";
import metacard from "../../../assets/icons/metacard.svg";
import creditlimit from "../../../assets/icons/creditlimit.svg";
import cappedcard from "../../../assets/icons/cappedintrest.svg";
import chartimage from "../../../assets/ui/chart.svg";

const BetaPerks = () => {
  const perks = [
    {
      icon: cashbackimg,
      title: "1% Cashback for Early Adopters",
    },
    {
      icon: metacard,
      title: "Free Metal Card for first 5,000 users",
    },
    {
      icon: creditlimit,
      title: "Up to £1,200 credit limit",
    },
    {
      icon: cappedcard,
      title: "Capped interest at 25% APR",
    },
  ];

  return (
    <section className="bg-[#F2F4F8] py-8 md:py-12 lg:py-16">
      <Container>
        <HeaderNote
          title={"pay for what you owe"}
          note={"Exclusive Beta Perks"}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {perks.map((perk, index) => (
            <div
              key={index}
              className="flex flex-col items-center py-4 md:py-6"
            >
              <img src={perk.icon} alt="" className="h-20 md:h-25" />
              <p className="text-md md:text-lg text-center pt-2 font-bold text-[#1D1D1D] w-full md:w-2/3">
                {perk.title}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center py-10 md:py-16 lg:py-20">
          <p className="text-[#1D1D1D] text-xl md:text-2xl text-left w-full lg:w-1/2 mt-4 font-semibold leading-7 md:leading-8 mb-8 lg:mb-0">
            We tested, listened, and built FlexCard. Over 2,500 people were
            surveyed— 2/3 said they didn't understand how credit card interest
            works, 50% assumed interest is charged only on the remaining
            balance, and 80% didn't know that transactions outside statement
            cycles lead to interest charges.
          </p>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img src={chartimage} alt="" className="max-w-full h-auto" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BetaPerks;
