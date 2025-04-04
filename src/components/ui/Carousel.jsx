import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import React, { useState, useEffect, useCallback } from 'react';

const Carousel = ({
  children,
  autoSlide = false,
  autoSlideInterval = 3000,
  showControls = true,
  showIndicators = true,
}) => {
  const [curr, setCurr] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = React.Children.toArray(children);

  const prev = useCallback(() => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  }, [slides.length]);

  const next = useCallback(() => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  }, [slides.length]);

  useEffect(() => {
    if (!autoSlide || isPaused) return;

    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, isPaused, next]);

  return (
    <div
      className="overflow-hidden relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>

      {showControls && (
        <>
          <button
            onClick={prev}
            className="absolute top-1/2 left-4 -translate-y-1/2 p-2 transition-all duration-200"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          <button
            onClick={next}
            className="absolute top-1/2 right-4 -translate-y-1/2 p-2 transition-all duration-200"
            aria-label="Next slide"
          >
            <FaChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;
