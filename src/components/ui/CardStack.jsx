import React from "react";
import greencard from "../../assets/cards/green.svg";
import materialcard from "../../assets/cards/material.svg";
import blackcard from "../../assets/cards/black.svg";
import { motion } from "motion/react";

const CardStack = () => {
  return (
    <section className="hidden w-full lg:w-1/2 lg:flex flex-col justify-start items-center relative h-72 md:h-96 mt-12 lg:mt-0">
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
};

export default CardStack;
