import React from 'react';

const HeaderNote = ({ title, note, desc }) => {
  return (
    <div className="flex flex-col items-center mb-4 text-center px-2 sm:px-4">
      <h2 className="uppercase font-bold text-gray-400 text-[10px] sm:text-xs mb-1">{title}</h2>
      <h1 className="font-['Manrope',Helvetica] font-bold text-coolgray-90 text-2xl sm:text-4xl md:text-2xl xl:text-3xl text-center leading-snug">
        {note}
      </h1>
      {desc && (
        <p
          dangerouslySetInnerHTML={{ __html: desc }}
          className="font-['Manrope',Helvetica] font-medium text-[#7b838a] text-xs sm:text-sm text-center tracking-tight"
        ></p>
      )}
    </div>
  );
};

export default HeaderNote;
