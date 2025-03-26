import React, { useMemo } from "react";
import HeaderNote from "../../../../components/ui/HeaderNote";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { feedbackData } from "../../constants/constants";
import feedbackIcon from "../../../../assets/svg/feedback.svg";
import { CgProfile } from "react-icons/cg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Feedback = () => {
  const memoizedCarousel = useMemo(
    () => (
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        customTransition="transform 700ms ease-in-out"
        transitionDuration={700}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-20-px"
      >
        {feedbackData.map((feedback, index) => (
          <Card key={index} {...feedback} />
        ))}
      </Carousel>
    ),
    []
  );

  return (
    <section className="py-20 bg-[#F2F4F8]">
      <HeaderNote note="What People Are Saying" desc="Pay For What You Owe" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">{memoizedCarousel}</div>
    </section>
  );
};

const Card = ({ text, author, role }) => (
  <div className="mx-6 bg-white rounded-md shadow-xl p-6 flex flex-col text-left justify-between h-[500px] transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl border border-gray-100">
    <div className="flex flex-col justify-center items-center">
      <div className="text-blue-600 text-5xl mb-8">
        <img src={feedbackIcon} alt="feedback" className="" />
      </div>
      <p className="text-gray-800 text-xl leading-relaxed text-center line-clamp-5 font-light">{text}</p>
    </div>

    <div className="flex flex-col justify-center items-center pt-8 border-t border-gray-200 mt-8">
      <CgProfile className="text-gray-300 text-4xl" />
      <h3 className="font-bold text-gray-900 text-2xl mb-3">{author}</h3>
      <p className="text-gray-500 font-semibold text-base">{role}</p>
    </div>
  </div>
);

export default Feedback;
