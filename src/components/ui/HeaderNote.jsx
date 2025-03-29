import React from "react";

const HeaderNote = ({ title, note, desc }) => {
  return (
    <div className="flex flex-col items-center mb-8 md:mb-10 text-center">
      <h2 className="uppercase font-bold text-gray-400 text-sm md:text-base mb-2">{title}</h2>
      <h1 className="relative self-stretch mt-[-1.00px] font-['Manrope',Helvetica] font-bold text-coolgray-90 text-[42px] text-center leading-[46.2px]">
        {note}
      </h1>
      {desc && (
        <p
          dangerouslySetInnerHTML={{ __html: desc }}
          className="relative self-stretch font-['Manrope',Helvetica] font-medium text-[#7b838a] text-lg text-center tracking-[1.00px]"
        ></p>
      )}
    </div>
  );
};

export default HeaderNote;
