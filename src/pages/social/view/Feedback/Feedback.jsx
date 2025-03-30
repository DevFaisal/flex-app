import React, { useState, useEffect } from "react";
import HeaderNote from "../../../../components/ui/HeaderNote";
import { feedbackData } from "../../constants/constants";
import feedbackIcon from "../../../../assets/svg/feedback.svg";
import { CgProfile } from "react-icons/cg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  // Determine number of visible cards based on screen size
  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(window.innerWidth >= 1024 ? 2 : 1);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? feedbackData.length - visibleCards : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + visibleCards >= feedbackData.length ? 0 : prevIndex + 1));
  };

  // Calculate the indices of the cards to display
  const cardIndices = Array.from({ length: visibleCards }, (_, i) => (currentIndex + i) % feedbackData.length);

  return (
    <section className="py-8 md:py-16 bg-gray-50">
      <HeaderNote note="What People Are Saying" desc="Pay For What You Owe" />
      <div className="container mx-auto px-4 md:px-8 py-6 md:py-10">
        <div className="relative max-w-8xl mx-auto">
          {/* Carousel controls */}
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="absolute -left-4 md:-left-8 top-1/2 transform -translate-y-1/2 p-3  hover:-translate-x-1 transition-all duration-300 z-10 focus:outline-none"
          >
            <FaChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          {/* Cards container with transition */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {cardIndices.map((idx) => (
              <FeedbackCard key={`${idx}-${feedbackData[idx].author}`} {...feedbackData[idx]} />
            ))}
          </div>

          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="absolute -right-4 md:-right-8 top-1/2 transform -translate-y-1/2 p-3 hover:translate-x-1 transition-all duration-300 z-10 focus:outline-none"
          >
            <FaChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

// const FeedbackCard = ({ text, author, role }) => (
//   <div className="bg-white rounded-lg shadow-md p-6 md:p-8 flex flex-col text-left justify-between h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border border-gray-100">
//     <div className="flex flex-col space-y-4 md:space-y-6">
//       <div className="text-blue-600 self-center">
//         <img src={feedbackIcon} alt="" className="w-12 h-12 md:w-14 md:h-14" />
//       </div>
//       <p className="text-gray-700 text-base md:text-lg leading-relaxed line-clamp-6 font-normal">
//         "{text}"
//       </p>
//     </div>

//     <div className="flex items-center pt-6 mt-6 border-t border-gray-200">
//       <div className="bg-gray-100 rounded-full p-2 mr-4">
//         <CgProfile className="text-gray-600 text-2xl md:text-3xl" />
//       </div>
//       <div>
//         <h3 className="font-semibold text-gray-900 text-base md:text-lg">{author}</h3>
//         <p className="text-gray-500 text-sm uppercase tracking-wider">{role}</p>
//       </div>
//     </div>
//   </div>
// );

const FeedbackCard = ({ text, author, role }) => (
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
