import React from "react";

const Section = ({ children }) => {
  return (
    <section className="flex flex-col items-center md:gap-12 md:py-10 md:px-20 relative max-w-[1440px] mx-auto px-4">
      <div className="z-1">{children}</div>
      <img
        className="hidden xl:block top-[-580px] left-[382px] absolute"
        alt="Decorative line"
        src="/line-9.svg"
      />
      <img
        className="hidden xl:block h-[656px] top-[270px] left-[0px] absolute w-20"
        alt="Decorative line"
        src="/line-10.svg"
      />
    </section>
  );
};
export default Section;
