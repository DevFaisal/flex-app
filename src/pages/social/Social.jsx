<<<<<<< HEAD
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
=======
import React, { lazy, Suspense, memo } from "react";
import Index from "..";

const components = {
  HeroSection: lazy(() => import("./view/HeroSection/HeroSection")),
  CreditCardCalculator: lazy(() => import("./view/CreditCardCalculator/CreditCardCalculator")),
  TruthBombs: lazy(() => import("./view/TruthBombs/TruthBombs")),
  TestCredit: lazy(() => import("./view/TestCredit/TestCredit")),
  JoinTheFlex: lazy(() => import("./view/JoinTheFlex/JoinTheFlex")),
  Feedback: lazy(() => import("./view/Feedback/Feedback")),
  VideoPlayback: lazy(() => import("./view/VideoPlayback/VideoPlayback")),
  FlexFAQ: lazy(() => import("./view/FlexFAQ/FlexFAQ")),
  Join: lazy(() => import("./view/Join/Join")),
};

const Social = () => {
  const {
    HeroSection,
    CreditCardCalculator,
    TruthBombs,
    TestCredit,
    JoinTheFlex,
    Feedback,
    VideoPlayback,
    FlexFAQ,
    Join,
  } = components;

  return (
    <Suspense fallback={<Index />}>
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
    </Suspense>
>>>>>>> testing
  );
};

export default Social;

<<<<<<< HEAD
function MainContainer({ children }) {
  return <main className="relative">{children}</main>;
}
=======
const MainContainer = memo(({ children }) => {
  return <main className="relative">{children}</main>;
});
>>>>>>> testing
