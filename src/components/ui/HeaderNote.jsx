import React from "react";

const HeaderNote = ({ title, note, desc }) => {
  return (
    <div className="flex flex-col items-center mb-8 md:mb-10 text-center">
      <h2 className="uppercase font-bold text-gray-400 text-sm md:text-base mb-2">
        {title}
      </h2>
      <h1 className="text-3xl md:text-4xl font-bold">{note}</h1>
      {desc && <p className="text-sm md:text-xl text-gray-400 mt-2 w-2/3">{desc}</p>}
    </div>
  );
};

export default HeaderNote;
