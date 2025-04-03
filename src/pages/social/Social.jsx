import React, { lazy } from "react";
const HeroSection = lazy(() => import("./view/HeroSection/HeroSection"));
const CreditCardCalculator = lazy(() => import("./view/CreditCardCalculator/CreditCardCalculator"));
const TruthBombs = lazy(() => import("./view/TruthBombs/TruthBombs"));
const TestCredit = lazy(() => import("./view/TestCredit/TestCredit"));
const JoinTheFlex = lazy(() => import("./view/JoinTheFlex/JoinTheFlex"));
const Feedback = lazy(() => import("./view/Feedback/Feedback"));
const VideoPlayback = lazy(() => import("./view/VideoPlayback/VideoPlayback"));
const FlexFAQ = lazy(() => import("./view/FlexFAQ/FlexFAQ"));
const Join = lazy(() => import("./view/Join/Join"));

const Social = () => {
  return (
    <MainContainer>
      <HeroSection />
      <CreditCardCalculator />
      <TruthBombs />
      <TestCredit />
      <JoinTheFlex />
      <Feedback />
      <VideoPlayback />
      <FlexFAQ />
      <Join />
    </MainContainer>
  );
};

export default Social;

function MainContainer({ children }) {
  return <main className="relative">{children}</main>;
}
