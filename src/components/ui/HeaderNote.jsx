import React from "react";

const HeaderNote = ({ title, note, desc }) => {
  return (
    <div className="flex flex-col items-center mb-6 md:mb-8 lg:mb-10 text-center px-4 sm:px-6 lg:px-8">
      <h2 className="uppercase font-bold text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg mb-2">{title}</h2>
      <h1 className="relative self-stretch mt-[-1px] font-['Manrope',Helvetica] font-bold text-coolgray-90 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed">
        {note}
      </h1>
      {desc && (
        <p
          dangerouslySetInnerHTML={{ __html: desc }}
          className="relative self-stretch font-['Manrope',Helvetica] font-medium text-[#7b838a] text-sm sm:text-base md:text-lg lg:text-xl text-center tracking-wide sm:tracking-normal md:tracking-wide lg:tracking-wider"
        ></p>
      )}
    </div>
  );
};

export default HeaderNote;
