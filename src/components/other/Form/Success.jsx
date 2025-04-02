import React from "react";
import { motion } from "framer-motion";
import { MdOutlineDone } from "react-icons/md";
import icon from "../../../assets/icons/flexicon.svg";
import useFormStore from "./store/FormStore";

const Success = () => {
  const number = useFormStore((state) => state.number);

  return (
    <div className="flex flex-col justify-center items-center relative z-[1]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=" flex flex-col justify-center items-center gap-3 px-4 text-center z-10 "
      >
        <span className="flex justify-center items-center bg-[#76D232] p-4 rounded-full">
          <MdOutlineDone size={90} className="text-white" />
        </span>
        <h1 className="text-2xl font-bold">Perfect</h1>
        <h3 className="text-xl text-nowrap">
          You are number <span className="font-bold text-secondary">{number}</span> on the waitlist !
        </h3>
        <p className="text-sm font-light">flexcard.app coming soon...</p>
      </motion.div>
      <img src={icon} className="absolute z-[-1] -top-20 object-containe h-[40vh]" />
    </div>
  );
};

export default Success;
