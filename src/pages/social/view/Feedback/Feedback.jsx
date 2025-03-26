import React, { useMemo } from "react";
import HeaderNote from "../../../../components/ui/HeaderNote";
import { feedbackData } from "../../constants/constants";
import feedbackIcon from "../../../../assets/svg/feedback.svg";
import { CgProfile } from "react-icons/cg";
import { Carousel } from "primereact/carousel";

const Feedback = () => {
  const memoizedCarousel = useMemo(
    () => (
      <Carousel
        value={feedbackData}
        numVisible={2}
        numScroll={1}
        responsiveOptions={[
          {
            breakpoint: "1024px",
            numVisible: 2,
            numScroll: 1,
          },
          {
            breakpoint: "768px",
            numVisible: 1,
            numScroll: 1,
          },
          {
            breakpoint: "560px",
            numVisible: 1,
            numScroll: 1,
          },
        ]}
        itemTemplate={(item) => <Card {...item} />}
        className="px-4 md:px-10 p-4 md:p-10 relative z-10"
        showIndicators={false}
        autoplayInterval={5000}
      />
    ),
    []
  );

  return (
    <section className="py-6 md:py-10 bg-[#F2F4F8]">
      <HeaderNote note="What People Are Saying" desc="Pay For What You Owe" />
      <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-8 md:py-12">{memoizedCarousel}</div>
    </section>
  );
};

const Card = ({ text, author, role }) => (
  <div className="mx-2 sm:mx-4 md:mx-6 bg-white rounded-lg shadow-lg p-4 md:p-8 flex flex-col text-left justify-between min-h-[400px] md:min-h-[500px] transition-all duration-300 hover:-translate-y-2 border border-gray-100">
    <div className="flex flex-col justify-center items-center space-y-4 md:space-y-6">
      <div className="text-blue-600 transform hover:scale-105 transition-transform">
        <img src={feedbackIcon} alt="Feedback icon" className="w-12 h-12 md:w-16 md:h-16" />
      </div>
      <p className="text-gray-800 text-base md:text-xl leading-relaxed text-center line-clamp-5 font-light tracking-wide">
        {text}
      </p>
    </div>

    <div className="flex flex-col justify-center items-center pt-6 md:pt-8 border-t border-gray-200 mt-6 md:mt-8 space-y-2 md:space-y-3">
      <div className="rounded-full bg-gray-100 p-2">
        <CgProfile className="text-gray-500 text-3xl md:text-4xl" />
      </div>
      <h3 className="font-bold text-gray-900 text-lg md:text-xl">{author}</h3>
      <p className="text-gray-600 text-xs md:text-sm uppercase tracking-wider">{role}</p>
    </div>
  </div>
);

export default Feedback;
