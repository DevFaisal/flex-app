import React from 'react';
import { motion } from 'motion/react';
import { MdOutlineDone } from 'react-icons/md';
import icon from '../../../assets/icons/flexicon.svg';
import { useNewUserStore } from '../../../store/global.store';

const Success = () => {
  const newNumber = useNewUserStore((state) => state.newNumber) + 7;

  return (
    <div className="flex flex-col justify-center items-center relative z-[1] h-full w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-center items-center gap-3 px-4 text-center z-10 max-w-sm mx-auto"
      >
        <span className="flex justify-center items-center bg-[#76D232] p-2 sm:p-3 md:p-4 rounded-full">
          <MdOutlineDone className="text-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
        </span>
        <h4 className="text-xl sm:text-2xl font-bold">Perfect</h4>
        <h6 className="text-base sm:text-lg md:text-xl font-medium">
          You are number <span className="font-bold text-secondary">{newNumber}</span> on the
          waitlist!
        </h6>
        <p className="text-xs sm:text-sm font-light">flexcard.app coming soon...</p>
      </motion.div>
      <div className="absolute inset-0 flex items-center justify-center z-[-1] w-full h-full overflow-hidden">
        <img
          src={icon}
          className="w-11/12 sm:w-4/5 md:w-3/4 lg:w-2/3 max-w-lg object-contain opacity-80"
          alt="Flex icon"
        />
      </div>
    </div>
  );
};

export default Success;
