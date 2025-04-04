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
    </section>
  );
};

export default CardStack;
