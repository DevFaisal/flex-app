import HeaderNote from "../../../../components/ui/HeaderNote";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaQuoteRight } from "react-icons/fa";
import { feedbackData } from "../../constants/feedback";

const Feedback = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <section className="py-20 bg-[#F2F4F8]">
      <HeaderNote note="What People Are Saying" desc="Pay For What You Owe" />
      <div className="px-4 sm:px-6 lg:px-8 py-8 h-full">
        <Carousel responsive={responsive}>
          {feedbackData.map((feedback, index) => (
            <Card key={index} text={feedback.text} author={feedback.author} role={feedback.role} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

const Card = ({ text, author, role }) => {
  return (
    <div className="mx-4 bg-white gap-4 h-full  rounded-lg shadow-md p-8 flex flex-col text-left justify-center items-center transition-transform duration-300 -translate-y-2 hover:-translate-y-4">
      <div className="text-blue-600 text-3xl mb-4">
        <FaQuoteRight />
      </div>
      <p className="flex-grow text-gray-600 text-base leading-relaxed mb-6">{text}</p>
      <div className="flex flex-col justify-center items-center border-t border-gray-100 pt-4">
        <h3 className="font-semibold text-gray-800 text-2xl mb-1">{author}</h3>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>
    </div>
  );
};

export default Feedback;
