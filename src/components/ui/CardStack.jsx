import React, { useEffect } from "react";
import { motion, useAnimation } from "motion/react";
import greencard from "../../assets/cards/green.svg";
import materialcard from "../../assets/cards/material.svg";
import blackcard from "../../assets/cards/black.svg";

const CardStack = () => {
  // Animation controls for green and black cards
  const greenControls = useAnimation();
  const blackControls = useAnimation();

  useEffect(() => {
    async function sequence() {
      // Step 1: Black card appears first
      await blackControls.start({
        opacity: 1,
        y: 0,
        transition: { delay: 0.3, duration: 0.2 },
      });

      // Step 2: Material card appears next
      await new Promise((resolve) => setTimeout(resolve, 600)); // Wait for material card
      await greenControls.start({
        opacity: 1,
        y: 0,
        transition: { delay: 0.6, duration: 0.2 },
      });

      // Step 3: After 0.2s delay, move green & black cards closer
      await new Promise((resolve) => setTimeout(resolve, 200));
      await Promise.all([
        greenControls.start({
          y: 100, // Move downward closer to material card
          transition: { duration: 0.5 },
        }),
        blackControls.start({
          y: -100, // Move upward closer to material card
          transition: { duration: 0.5 },
        }),
      ]);
    }
    sequence();
  }, [greenControls, blackControls]);

  return (
    <section className="hidden top-40 w-full lg:w-1/2 lg:flex flex-col justify-start items-center relative h-72 md:h-96 mt-12 lg:mt-0">
      {/* Black Card (Appears First) */}
      <motion.img
        src={blackcard}
        alt="Black credit card"
        className="absolute w-xl"
        style={{ zIndex: 1, top: "170px" }}
        initial={{ opacity: 0, y: 20 }}
        animate={blackControls}
      />

      {/* Material Card (Appears Second) */}
      <motion.img
        src={materialcard}
        alt="Material credit card"
        className="absolute w-xl"
        style={{ zIndex: 2, top: "30px" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.9, duration: 0.2 },
        }}
      />

      {/* Green Card (Appears Last) */}
      <motion.img
        src={greencard}
        alt="Green credit card"
        className="absolute w-xl"
        style={{ zIndex: 3, top: "-130px" }}
        initial={{ opacity: 0, y: -20 }}
        animate={greenControls}
      />
    </section>
  );
};

export default CardStack;
