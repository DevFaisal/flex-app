import React, { lazy } from "react";
const HeroSection = lazy(() => import("./view/HeroSection/HeroSection"));
const TruthBombs = lazy(() => import("./view/TruthBombs/TruthBombs"));
const TestCredit = lazy(() => import("./view/TestCredit/TestCredit"));
const JoinTheFlex = lazy(() => import("./view/JoinTheFlex/JoinTheFlex"));
const Join = lazy(() => import("./view/Join/Join"));
const Feedback = lazy(() => import("./view/Feedback/Feedback"));
const CreditCardCalculator = lazy(() => import("./view/CreditCardCalculator/CreditCardCalculator"));
const FAQ = lazy(() => import("./view/FAQ/FAQ"));

const Social = () => {
  return (
    <main className="relative">
      <HeroSection />
      <CreditCardCalculator />
      <TruthBombs />
      <TestCredit />
      <JoinTheFlex />
      <Feedback />
      <FAQ />
      <Join />
    </main>
  );
};

export default Social;
