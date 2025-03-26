import React from "react";
import image from "../../../../assets/png/image.png";
import { MdDone } from "react-icons/md";
import Form from "../../../../components/other/Form/Form";

const JoinTheFlex = () => {
  const Info = [
    `<strong>Pay for what you owe</strong> - Not what's on your statement`,
    `<strong>Transparent fees </strong>- No hidden charges or complicated terms`,
    `<strong>1% cashback </strong>- On all your purchases`,
    `<strong>Early access </strong>- Be the first to get your card`,
    `<strong>Premium experience </strong>- Built for the modern consumer`,
  ];

  return (
    <section className="py-10 md:py-20 flex flex-col xl:flex-row gap-10 relative bg-gray-900 xl:h-[80vh]">
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <img className="w-full h-full object-cover opacity-60" src={image} alt="Background" />
      </div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col xl:flex-row md:gap-10 items-center">
        <div className="flex-1 flex flex-col gap-6 bg-opacity-80 p-6">
          <h1 className="text-2xl md:text-4xl font-bold text-white text-center xl:text-left">
            Join the FlexCard <br /> Revolution
          </h1>
          <p className="text-white text-sm md:text-base text-center xl:text-left">
            Be among the first to get your hands on a credit card that's designed to be fair and transparent.
          </p>
          <div className="flex flex-col gap-4 md:gap-8">
            {Info.map((item, index) => (
              <div key={index} className="flex justify-start items-center gap-2 md:gap-4">
                <p className="ring-3 flex rounded-full p-1 w-fit ring-white">
                  <MdDone className="text-[#76D232] md:text-2xl" />
                </p>
                <h1 className="text-white text-sm md:text-base" dangerouslySetInnerHTML={{ __html: item }} />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-xl ml-5 flex flex-col gap-6 bg-white bg-opacity-80 p-6 rounded-lg py-15 px-6 mt-10 xl:mt-0 shadow-[-20px_20px_0px_rgba(0,0,0,0.25)] shadow-gray-300">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default JoinTheFlex;
