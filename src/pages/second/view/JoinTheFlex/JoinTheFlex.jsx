import React from "react";
import image from "../../../../assets/png/image.png";
import Input from "../../../../components/ui/Input";
import Button from "../../../../components/ui/Button";
import { MdDone } from "react-icons/md";

const JoinTheFlex = () => {
  const Info = [
    `<strong>Pay for what you owe</strong> - Not what's on your statement`,
    `<strong>Transparent fees </strong>- No hidden charges or complicated terms`,
    `<strong>1% cashback </strong>- On all your purchases`,
    `<strong>Early access </strong>- Be the first to get your card`,
    `<strong>Premium experience </strong>- Built for the modern consumer`,
  ];

  return (
    <section className="py-20 flex gap-10 relative bg-gray-900  xl:h-[80vh]">
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <img
          className="w-full h-full object-cover opacity-60"
          src={image}
          alt="Background"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col  items-center xl:flex-row md:gap-10">
        <div className="flex-1 flex flex-col gap-6 bg-opacity-80 p-6">
          <h1 className="text-4xl font-bold text-white">
            Join the FlexCard <br /> Revolution
          </h1>
          <p className="text-white text-base">
            Be among the first to get your hands on a credit card that's
            designed to be fair and transparent.
          </p>
          <div className="flex flex-col gap-8">
            {Info.map((item, index) => (
              <div
                key={index}
                className="flex justify-start items-center gap-4"
              >
                <p className="ring-3 flex rounded-full p-1 w-fit ring-white">
                  <MdDone  className="text-[#76D232] md:size-7" />
                </p>
                <h1
                  className="text-white"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-xl flex flex-col gap-6 bg-white bg-opacity-80 p-6 rounded-lg py-10 px-6 ml-5 md:ml-0 shadow-[-20px_20px_0px_rgba(0,0,0,0.25)] shadow-gray-300">
          <h2 className="text-2xl font-bold">Join the Waitlist</h2>
          <p className="text-xl">
            Be the first to get your FlexCard when we launch.
          </p>
          <Input label={`Full Name`} placeholder={`Your full name`} />
          <Input label={`Email`} placeholder={`youremail@example.com`} />
          <p>
            By joining the waitlist, you agree to receive updates about
            FlexCard. We respect your privacy and will never share your
            information.
          </p>
          <Button type="secondary" label={`Join the Waitlist->`} />
        </div>
      </div>
    </section>
  );
};

export default JoinTheFlex;
