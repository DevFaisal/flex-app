import HeaderNote from "../../../../components/ui/HeaderNote";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaQuoteRight } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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
  const feedbackData = [
    {
      text: "Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam.",
      author: "Sarah Johnson",
      role: "Product Manager",
    },
    {
      text: "Non, massa ut a arcu, fermentum, vel. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam.",
      author: "Michael Chen",
      role: "Software Engineer",
    },
    {
      text: "Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel. Quis pellentesque tortor a elementum ut blandit sed.",
      author: "Emily Rodriguez",
      role: "UX Designer",
    },
    {
      text: "Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada facilisi libero, nam eu. Malesuada in faucibus risus velit diam.",
      author: "David Wilson",
      role: "Marketing Director",
    },
  ];

  const arrowStyles =
    "absolute z-10 top-1/2 transform -translate-y-1/2  rounded-full p-2  transition-all duration-300 cursor-pointer";

  const customRenderArrowPrev = (clickHandler, hasPrev) => (
    <div
      onClick={clickHandler}
      className={`${arrowStyles} left-[-15px] ${
        !hasPrev ? "opacity-30 cursor-not-allowed" : "opacity-100"
      }`}
    >
      <IoIosArrowBack className="text-gray-700 text-xl" />
    </div>
  );

  const customRenderArrowNext = (clickHandler, hasNext) => (
    <div
      onClick={clickHandler}
      className={`${arrowStyles} right-[-15px] ${
        !hasNext ? "opacity-30 cursor-not-allowed" : "opacity-100"
      }`}
    >
      <IoIosArrowForward className="text-gray-700 text-xl" />
    </div>
  );

  return (
    <section className="py-20 bg-[#F2F4F8]">
      <HeaderNote
        note={`What Early Users Are Saying`}
        desc={`Pay For What You Owe`}
      />
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <Carousel responsive={responsive}>
          {feedbackData.map((feedback, index) => (
            <Card
              key={index}
              text={feedback.text}
              author={feedback.author}
              role={feedback.role}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

function Card({ text, author, role }) {
  return (
    <div className="mx-4 gap-4 md:h-80  bg-white rounded-lg shadow-md p-8 flex flex-col text-left transition-transform duration-300 hover:-translate-y-2">
      <div className="text-blue-600 text-3xl mb-4">
        <FaQuoteRight />
      </div>
      <p className="flex-grow text-gray-600 text-base leading-relaxed mb-6">
        {text}
      </p>
      <div className="border-t border-gray-100 pt-4">
        <h3 className="font-semibold text-gray-800 text-lg mb-1">{author}</h3>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>
    </div>
  );
}

export default Feedback;
