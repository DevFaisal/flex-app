import React, { useState, useEffect, useRef } from 'react';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

const Carousel = ({ children, autoSlide = false, autoSlideInterval = 3000 }) => {
  const [curr, setCurr] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideRef = useRef(null);

  const prev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurr((curr) => (curr === 0 ? React.Children.count(children) - 1 : curr - 1));
  };

  const next = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurr((curr) => (curr === React.Children.count(children) - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  // Handle transition end
  useEffect(() => {
    const handleTransitionEnd = () => {
      setIsTransitioning(false);
    };

    const slideElement = slideRef.current;
    if (slideElement) {
      slideElement.addEventListener('transitionend', handleTransitionEnd);
      return () => {
        slideElement.removeEventListener('transitionend', handleTransitionEnd);
      };
    }
  }, []);

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${curr * 100}%)` }}
        ref={slideRef}
      >
        {React.Children.map(children, (child) => (
          <div className="w-full flex-shrink-0">{child}</div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prev} className="p-1 hover:-translate-x-1 duration-200">
          <IoChevronBackOutline size={24} />
        </button>

        <button onClick={next} className="p-1 hover:translate-x-1 duration-200">
          <IoChevronForwardOutline size={24} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
