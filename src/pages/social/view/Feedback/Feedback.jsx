import React, { useState, useEffect } from "react";
import HeaderNote from "../../../../components/ui/HeaderNote";
import { feedbackData } from "../../constants/constants";
import feedbackIcon from "../../../../assets/svg/feedback.svg";
import Carousel from "../../../../components/ui/Carousel";

const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(window.innerWidth >= 1024 ? 2 : 1);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate the indices of the cards to display
  const cardIndices = Array.from({ length: visibleCards }, (_, i) => (currentIndex + i) % feedbackData.length);

  return (
    <section className="py-5 md:py-10 bg-gray-50">
      <HeaderNote note="What People Are Saying" desc="Pay For What You Owe" />
      <div className="container mx-auto px-4 md:px-8 py-6 md:py-10">
        <Carousel autoSlide={true} autoSlideInterval={5000}>
          {feedbackData.map((card) => (
            <div key={card.id} className="min-w-full ">
              <div className="grid grid-cols-1 lg:grid-cols-2 p-10 lg:px-30">
                {cardIndices.map((idx) => (
                  <FeedbackCard key={`${idx}-${feedbackData[idx].author}`} {...feedbackData[idx]} />
                ))}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

const FeedbackCard = ({ text, author, role, profile }) => (
  <div className="mx-1 sm:mx-1 md:mx-2 bg-white rounded-md shadow-lg p-4 md:p-8 flex flex-col text-left justify-between min-h-[300px] md:min-h-[450px] transition-all duration-300 hover:-translate-y-2 border border-gray-100">
    <div className="flex md:h-full flex-col justify-center items-center space-y-4 md:space-y-6">
      <div className="text-blue-600 transform hover:scale-105 transition-transform">
        <img src={feedbackIcon} alt="Feedback icon" className="w-12 h-12 md:w-16 md:h-16" />
      </div>
      <p className="flex-1 text-gray-800 text-base md:text-lg leading-relaxed text-center font-light tracking-wide">
        {text}
      </p>
    </div>

    <div className="flex flex-col  mt-2 md:mt-4 justify-center items-center space-y-2 md:space-y-3">
      <div className="rounded-full bg-gray-100">
        <img src={profile} width={40} className="rounded-full" />
        {/* <CgProfile className="text-gray-500 text-3xl md:text-4xl" /> */}
      </div>
      <h3 className="font-bold text-gray-900 text-lg md:text-xl">{author}</h3>
      <h6 className="text-gray-800 capitalise tracking-wider">{role}</h6>
    </div>
  </div>
);

export default Feedback;
