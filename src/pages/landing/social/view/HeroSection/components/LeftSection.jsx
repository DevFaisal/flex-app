import React, { memo } from 'react';
import { motion } from 'motion/react';
import Button from '../../../../../../components/ui/Button';
import useCurrentEnroll from '../../../../../../hooks/useCurrentEnroll';
import Counter from '../../../../../../components/ui/Counter';

const textContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const textItem = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { ease: 'easeOut', duration: 0.4 } },
};

const LeftSection = memo(() => {
  const number = useCurrentEnroll();

  function handleScroll(target) {
    window.scrollTo({
      top: document.getElementById(target).offsetTop,
      behavior: 'smooth',
    });
  }

  const titleText = ['Pay For What You Owe', 'No More, No Less'];

  const title = (
    <motion.h1
      variants={textContainer}
      initial="hidden"
      animate="show"
      className="title font-bold text-white leading-tight tracking-tight text-center xl:text-left"
    >
      <span className="text-nowrap">
        {titleText[0].split(' ').map((word, index) => (
          <motion.span key={index} variants={textItem} className="md:inline-block mr-2 md:mr-4">
            {word}
          </motion.span>
        ))}
      </span>
      <br />
      <span className="block xl:inline bg-clip-text text-white">
        {titleText[1].split(' ').map((word, index) => (
          <motion.span key={index} variants={textItem} className="md:inline-block mr-2 md:mr-4">
            {word}
          </motion.span>
        ))}
      </span>
    </motion.h1>
  );

  const description = (
    <motion.div
      variants={textItem}
      initial="hidden"
      animate="show"
      transition={{ delay: 0.5 }}
      className="text-white mt-3 sm:mt-4 lg:mt-6 opacity-90 text-center xl:text-left lg:mb-6"
    >
      <h2 className="flex text-sm sm:text-base md:text-nowrap">
        <span>Join</span>
        <span className="w-[55px] block overflow-hidden pl-1">
          <Counter value={number} className="font-extrabold" />
        </span>
        <span>people who are redefining credit—fairer, smarter, and built for you.</span>
      </h2>
    </motion.div>
  );

  const buttons = (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="flex flex-col px-10 md:px-0 sm:flex-row items-center justify-center xl:justify-start gap-3 mt-8 sm:mt-3 w-full"
    >
      <Button
        type="white"
        label="Learn More"
        className="w-full sm:w-auto text-sm md:text-base"
        onClick={() => handleScroll('calculator')}
      />
      <Button
        type="outline"
        label="Join The Waitlist"
        className="w-full sm:w-auto text-sm md:text-base"
        onClick={() => handleScroll('join')}
      />
    </motion.div>
  );

  return (
    <section className="flex flex-col xl:items-start justify-center items-center xl:text-left w-[100%]">
      <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0 md:px-0">
        {title}
        {description}
      </div>
      {buttons}
    </section>
  );
});

export default LeftSection;
