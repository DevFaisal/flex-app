import React from "react";
import Gradient from "../../../components/ui/Gradient";
import Container from "../../../components/view/Container";
import greencard from "../../../assets/cards/green.svg";
import materialcard from "../../../assets/cards/material.svg";
import blackcard from "../../../assets/cards/black.svg";
import { motion } from "motion/react";
import Navbar from "../../../components/view/Navbar";

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
        The Credit Card That <br className="hidden md:block" /> Rewards You for{" "}
        <br className="hidden md:block" /> Paying Smart
      </h2>
      <p className="text-white text-sm md:text-md mt-2 lg:mt-4 px-4 lg:px-0">
        Built for Fair & Transparent Credit | Secure & Encrypted{" "}
        <br className="hidden md:block" />
        Transactions | No Hidden Fees.
      </p>
      <div className="mt-6 lg:mt-4">
        <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg">
          Check if you qualify {"->"}
        </button>
      </div>
    </section>
  );
}

function CardStack() {
  return (
    <section className="hidden w-full lg:w-1/2 md:flex flex-col justify-start items-center relative h-72 md:h-96 mt-12 lg:mt-0">
      {/* Green Card */}
      <motion.img
        src={greencard}
        alt="Green credit card"
        className="absolute w-56 md:w-auto"
        style={{ zIndex: 3 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, top: "10px" }}
        transition={{
          delay: 1.8,
          duration: 0.8,
          type: "spring",
          stiffness: 100,
        }}
      />

      {/* Material Card */}
      <motion.img
        src={materialcard}
        alt="Material credit card"
        className="absolute w-56 md:w-auto"
        style={{ zIndex: 2 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, top: "60px" }}
        transition={{
          delay: 1.0,
          duration: 0.7,
          type: "spring",
          stiffness: 90,
        }}
      />

      {/* Black Card */}
      <motion.img
        src={blackcard}
        alt="Black credit card"
        className="absolute w-56 md:w-auto"
        style={{ zIndex: 1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, top: "100px" }}
        transition={{
          delay: 0.3,
          duration: 0.6,
        }}
      />
    </section>
  );
}
