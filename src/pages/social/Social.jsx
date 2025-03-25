import React from "react";
import HeroSection from "./view/HeroSection/HeroSection";
import CreditCardCal from "./view/CreditCarCal/CreditCardCalc";
import TruthBombs from "./view/TruthBombs/TruthBombs";
import TestCredit from "./view/TestCredit/TestCredit";
import JoinTheFlex from "./view/JoinTheFlex/JoinTheFlex";
import Join from "./view/Join/Join";
import Feedback from "./view/Feedback/Feedback";
import CreditCardCalculator from "./view/CreditCardCalculator/CreditCardCalculator";
import FAQ from "./view/FAQ/FAQ";
import HubSpotForm from "../../components/HubSpotForm";

const Social = () => {
  return (
    <main>
      <HeroSection />
      {/* <CreditCardCal /> */}
      <CreditCardCalculator />
      <TruthBombs />
      <TestCredit />
      {/* <HubSpotForm /> */}
      <JoinTheFlex />
      <Feedback />
      <FAQ />
      <Join />
    </main>
  );
};

export default Social;
