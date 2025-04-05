import React from 'react';
import { motion } from 'motion/react';
import centerImage from '../../assets/png/background.png';

const Gradient = () => {
  return (
    <motion.div className="absolute inset-0 z-[-9999] flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute w-[110%] md:w-[110%] 3xl:w-[130%] h-full top-0 lg:right-[-3%]
                   bg-gradient-to-r from-[#0569E8] to-[#76D232]
                   lg:rounded-4xl overflow-hidden duration-300
                   lg:rotate-0 xl:-rotate-[25deg] xl:-top-[42%] 2xl:-rotate-[20deg]"
      >
        <motion.img
          initial={{ y: -40 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          src={centerImage}
          width={800}
          height={600}
          loading="lazy"
          alt="background"
          className="absolute w-full h-full object-cover opacity-50 transition-opacity duration-300
                     xl:top-[35%] xl:right-[10%] xl:rotate-[25deg]
                     2xl:top-[39%] 2xl:right-[2%] 2xl:rotate-[20deg]"
        />
      </motion.div>
    </motion.div>
  );
};

export default Gradient;
