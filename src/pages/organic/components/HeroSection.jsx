import React from "react";
import Gradient from "../../../components/ui/Gradient";
import Container from "../../../components/view/Container";
import Navbar from "../../../components/view/Navbar";
import CardStack from "../../../components/ui/CardStack";

const HeroSection = () => {
  return (
    <main className="min-h-screen">
      <section className="relative min-h-screen overflow-clip">
        <Navbar />
        <Gradient />
        <Container>
          <div className="flex flex-col lg:flex-row justify-between items-center pt-10">
            <LeftSection />
            <CardStack />
          </div>
        </Container>
      </section>
    </main>
  );
};

export default HeroSection;

function LeftSection() {
  return (
    <section className="flex mt-20 lg:mt-60 flex-col gap-6 lg:gap-10 justify-between w-full lg:w-1/2 text-center lg:text-left">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
        The Credit Card That <br className="hidden md:block" /> Rewards You for <br className="hidden md:block" />{" "}
        Paying Smart
      </h2>
      <p className="text-white text-sm md:text-md mt-2 lg:mt-4 px-4 lg:px-0">
        Built for Fair & Transparent Credit | Secure & Encrypted <br className="hidden md:block" />
        Transactions | No Hidden Fees.
      </p>
      <div className="mt-6 lg:mt-4">
        <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg">Check if you qualify {"->"}</button>
      </div>
    </section>
  );
}
