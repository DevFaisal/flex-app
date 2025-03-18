import React from "react";
import HeroSection from "./components/HeroSection";
import CheckQaulify from "./components/CheckQaulify";
import BetaPerks from "./components/BetaPerks";
import JoinWaitlist from "./components/JoinWaitlist";
import Feedback from "./components/Feedback";
import Join from "./components/Join";

const LandingPage = () => {
  return (
    <main className="">
      <HeroSection />
      <CheckQaulify />
      <BetaPerks />
      <JoinWaitlist />
      <Feedback />
      <Join />
    </main>
  );
};

export default LandingPage;
