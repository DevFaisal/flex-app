import React from "react";
import centerImage from "../../assets/png/background.png";

const Gradient = ({ children }) => {
  return (
    <div className="absolute  h-screen w-full z-[-1] overflow-hidden flex items-center justify-center">
      {/* Gradient Background */}
      <div
        className="absolute top-[0%] lg:top-[-40%] lg:right-[-3%] w-[110%] h-full 
                   bg-gradient-to-r from-[#0569E8] to-[#76D232] 
                   lg:rounded-4xl lg:-rotate-[25deg] overflow-hidden"
      >
        {/* Background Image (Centered & Unrotated) */}
        <img
          src={centerImage}
          className="absolute lg:rotate-[25deg] w-full h-full lg:top-[30%] lg:right-[10%] object-cover opacity-50 z-[10]"
          alt="background"
          loading="lazy"
        />
      </div>

      {/* Centered Children */}
      <div className="relative z-[9999] overflow-hidden h-full w-full">{children}</div>
    </div>
  );
};

export default Gradient;
