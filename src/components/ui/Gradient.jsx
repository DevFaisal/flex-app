import React from "react";
import centerImage from "../../assets/png/background.png";
import { motion } from "motion/react";

const Gradient = ({ children }) => {
  return (
    <motion.div className="absolute h-screen w-full z-0 overflow-hidden flex items-center justify-center">
      {/* Gradient Background */}
      <div
        className="absolute top-[0%] lg:top-[-40%] lg:right-[-3%] w-[110%] h-full 
                   bg-gradient-to-r from-[#0569E8] to-[#76D232] 
                   lg:rounded-4xl lg:-rotate-[18deg] xl:-rotate-[25deg] overflow-hidden duration-300"
      >
        {/* Background Image (Centered & Unrotated) */}
        <motion.img
          initial={{ y: -40 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          src={centerImage}
          width={800}
          height={600}
          className="absolute transition-opacity duration-300  lg:rotate-[25deg] w-full h-full lg:top-[34%] lg:right-[10%] object-cover opacity-50"
          alt="background"
          loading="lazy"
        />
      </div>

      {/* Centered Children */}
      <div className="relative h-full w-full">{children}</div>
    </motion.div>
  );
};

export default Gradient;
