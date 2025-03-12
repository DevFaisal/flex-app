import React from "react";
import circlefaded from "../../assets/circle-faded.svg";

const Gradient = () => {
  return (
    <div className="absolute h-screen w-[120%] z-[-9999]">
      <div
        className="bg-gradient-to-r h-full from-[#0569E8] to-[#76D232] md:rounded-4xl md:-rotate-25
                                         absolute top-[-20%]  md:top-[-60%] md:right-[-3%] w-[110%] "
      />
      <img
        width={600}
        height={600}
        src={circlefaded}
        className="absolute rotate-12 top-60 left-[20%] transform -translate-x-1/2 -translate-y-1/2 z-[2]"
      />
      <img
        width={600}
        height={600}
        src={circlefaded}
        className="absolute top-1/2 left-[40%] transform -translate-x-1/2 -translate-y-1/2 z-[2]"
      />
    </div>
  );
};

export default Gradient;
