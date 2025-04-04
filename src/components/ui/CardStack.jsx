import { motion, useAnimate } from "motion/react";
import { useEffect } from "react";

const CardStack = () => {
  const [greenCard, animate] = useAnimate();
  const [blackCard] = useAnimate();
  const [goldenCard] = useAnimate();

  async function enterAnimation() {
    await animate(blackCard.current, { opacity: 1 }, { duration: 0.5 });
    await animate(goldenCard.current, { opacity: 1 }, { duration: 0.5 });
    await animate(greenCard.current, { opacity: 1 }, { duration: 0.5 });
  }

  async function cardsAnimate() {
    animate(greenCard.current, { y: 165 }, { duration: 0.5, delay: 1.5 });
    animate(blackCard.current, { y: -165 }, { duration: 0.5, delay: 1.5 });
  }

  useEffect(() => {
    Promise.all([enterAnimation(), cardsAnimate()]);
  }, []);

  return (
<<<<<<< HEAD
    <section className="hidden xl:flex mt-12">
      <motion.img
        ref={greenCard}
        className="absolute top-30 z-30"
        initial={{ opacity: 0, y: 0 }}
        src="/blue.svg"
        alt=""
      />
      <motion.img ref={goldenCard} className="absolute top-80 z-20" initial={{ opacity: 0 }} src="/golden.svg" alt="" />
      <motion.img
        ref={blackCard}
        className="absolute top-130 z-10"
        initial={{ opacity: 0, y: 0 }}
        src="/black.svg"
        alt=""
      />
      <svg
        className="absolute top-[55%] z-0"
        width="505"
        height="1002"
        viewBox="0 0 505 1002"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M331 222L331 735.132V921.003C331 964.634 295.63 1000 252 1000V1000"
          stroke="#C1C7CD"
          stroke-width="3"
          stroke-dasharray="6 6"
        />
        <rect
          x="2.59808"
          width="362.183"
          height="228.087"
          rx="10.5"
          transform="matrix(0.866025 -0.5 0.866025 0.5 -5.65192 180.89)"
          stroke="#C1C7CD"
          stroke-width="3"
          stroke-dasharray="6 6"
        />
      </svg>
=======
    <section className="">
      <div className="absolute w-full h-full">
        <motion.img
          ref={greenCard}
          className="absolute top-30 z-30"
          initial={{ opacity: 0, y: 0 }}
          src="/blue.svg"
          alt=""
        />
        <motion.img
          ref={goldenCard}
          className="absolute top-80 z-20"
          initial={{ opacity: 0 }}
          src="/golden.svg"
          alt=""
        />
        <motion.img
          ref={blackCard}
          className="absolute top-130 z-10"
          initial={{ opacity: 0, y: 0 }}
          src="/black.svg"
          alt=""
        />
      </div>
>>>>>>> testing
    </section>
  );
};

export default CardStack;
