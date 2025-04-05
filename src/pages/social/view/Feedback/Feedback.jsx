import React, { useState, useEffect } from 'react';
import HeaderNote from '../../../../components/ui/HeaderNote';
import feedbackIcon from '../../../../assets/svg/feedback.svg';
import Carousel from '../../../../components/ui/Carousel';
import { feedbackData } from '../../constants/constants';

const Feedback = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Create mobile view (single card)
  const mobileView = feedbackData.map((feedback, index) => (
    <FeedbackCard
      key={index}
      text={feedback.text}
      author={feedback.author}
      role={feedback.role}
      profile={feedback.profile}
    />
  ));

  const desktopView = [];
  for (let i = 0; i < feedbackData.length; i += 2) {
    desktopView.push(
      <div key={i} className="flex gap-4 max-w-7xl h-full mx-auto p-5">
        <div className="w-1/2">
          <FeedbackCard
            text={feedbackData[i].text}
            author={feedbackData[i].author}
            role={feedbackData[i].role}
            profile={feedbackData[i].profile}
          />
        </div>
        {i + 1 < feedbackData.length && (
          <div className="w-1/2">
            <FeedbackCard
              text={feedbackData[i + 1].text}
              author={feedbackData[i + 1].author}
              role={feedbackData[i + 1].role}
              profile={feedbackData[i + 1].profile}
            />
          </div>
        )}
      </div>
    );
  }

  return (
    <section className="py-5 md:py-10 bg-gray-50">
      <HeaderNote note="What People Are Saying" desc="Pay For What You Owe" />
      <div className=" px-4 md:px-8 py-6 md:py-10 h-full">
        <Carousel autoSlide={true} autoSlideInterval={5000}>
          {isMobile ? mobileView : desktopView}
        </Carousel>
      </div>
    </section>
  );
};

const FeedbackCard = ({ text, author, role, profile }) => (
  <div className="bg-white rounded-md shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] p-4 md:p-6 flex flex-col text-left justify-between h-full transition-all duration-300 hover:-translate-y-1 border border-gray-100">
    <div className="flex flex-col justify-start items-center space-y-4">
      <div className="text-blue-600">
        <img src={feedbackIcon} alt="Feedback icon" className="w-10 h-10 md:w-12 md:h-12" />
      </div>
      <div className="overflow-hidden">
        <p className="text-gray-800 text-sm md:text-base leading-relaxed text-center font-light tracking-wide line-clamp-6 md:line-clamp-8">
          {text}
        </p>
      </div>
    </div>
    <div className="flex flex-col mt-4 justify-center items-center space-y-2">
      <div className="rounded-full bg-gray-100 overflow-hidden w-10 h-10">
        <img
          src={profile}
          alt={`${author} profile`}
          className="rounded-full w-full h-full object-cover"
        />
      </div>
      <h3 className="font-bold text-gray-900 text-base md:text-lg">{author}</h3>
      <h6 className="text-gray-600 text-xs md:text-sm capitalize tracking-wider">{role}</h6>
    </div>
  </div>
);

export default Feedback;
