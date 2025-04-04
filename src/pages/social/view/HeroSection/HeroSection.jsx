<<<<<<< HEAD
import React from "react";
import Gradient from "../../../../components/ui/Gradient";
import Container from "../../../../components/view/Container";
import Navbar from "../../../../components/view/Navbar";
import Button from "../../../../components/ui/Button";
import CardStack from "../../../../components/ui/CardStack";

const HeroSection = () => {
  return (
    <main className="relative pb-70 md:pb-80 xl:pb-160 z-[10]">
      <Gradient />
      <Container>
        <Navbar />
        <div className="flex flex-row md:gap-8 w-full mx-auto justify-center items-center">
          <div className="w-full xl:w-1/2 px-4 sm:px-6 lg:px-0 mt-6 sm:mt-8 lg:mt-35 md:mt-70 pt-60 md:pt-30 md:ml-16">
            <LeftSection />
          </div>
          <div className="sm:w-0 md:w-1/2 mr-2">
            <CardStack />
          </div>
        </div>
=======
import React, { memo } from "react";
import Gradient from "../../../../components/ui/Gradient";
import Container from "../../../../components/view/Container";
import Navbar from "../../../../components/view/Navbar";
import CardStack from "../../../../components/ui/CardStack";
import Button from "../../../../components/ui/Button";

const HeroSection = () => {
  return (
    <main className="relative min-h-screen z-[20]">
      <Gradient />
      <Container>
        <Navbar />
        <section className="flex items-center justify-center md:h-[70vh] h-[100vh]">
          <div className="flex-1 lg:px-0 mt-6 sm:mt-8 lg:mt-35 md:mt-70 xl:ml-16 px-4">
            <LeftSection />
          </div>
          <div className="flex-1 hidden xl:block relative md:pb-[700px]">
            <CardStack />
          </div>
        </section>
>>>>>>> testing
      </Container>
    </main>
  );
};

<<<<<<< HEAD
export default HeroSection;

function LeftSection() {
  return (
    <section className="flex flex-col xl:items-start justify-center items-center xl:text-left w-full">
      <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
        <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight text-center xl:text-left">
          Pay For What You Owe <span className="block sm:inline bg-clip-text text-white">No More, No Less</span>
        </h2>
        <p className="text-white text-base sm:text-lg mt-3 sm:mt-4 lg:mt-6 opacity-90">
          Join <span className="font-extrabold">1,527</span> people who are redefining credit—fairer, smarter, and built
          for you.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-4 mt-8 sm:mt-10 w-full">
        <Button type="white" label={"Learn More"} className="w-full sm:w-auto" />
        <Button type="outline" label={"Join The Waitlist"} className="w-full sm:w-auto" />
      </div>
    </section>
  );
}
=======
export default memo(HeroSection);

// const LeftSection = memo(() => {
//   function handleScroll(target) {
//     window.scrollTo({
//       top: document.getElementById(target).offsetTop,
//       behavior: "smooth",
//     });
//   }

//   const title = (
//     <h1 className="title font-bold text-white leading-tight tracking-tight text-center xl:text-left">
//       <span className="text-nowrap">Pay For What You Owe</span>{" "}
//       <span className="block xl:inline bg-clip-text text-white">No More, No Less</span>
//     </h1>
//   );

//   const description = (
//     <p className="text-white text-base sm:text-lg mt-3 sm:mt-4 lg:mt-6 opacity-90">
//       Join <span className="font-extrabold">1,527</span> people who are redefining credit—fairer, smarter, and built for
//       you.
//     </p>
//   );

//   const buttons = (
//     <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-3 mt-8 sm:mt-3 w-full">
//       <Button
//         type="white"
//         label="Learn More"
//         className="w-full sm:w-auto text-xs"
//         onClick={() => handleScroll("calculator")}
//       />
//       <Button
//         type="outline"
//         label="Join The Waitlist"
//         className="w-full sm:w-auto text-xs"
//         onClick={() => handleScroll("join")}
//       />
//     </div>
//   );

//   return (
//     <section className="flex flex-col xl:items-start justify-center items-center xl:text-left w-[100%]">
//       <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
//         {title}
//         {description}
//       </div>
//       {buttons}
//     </section>
//   );
// });

// import { memo } from "react";
import { motion } from "framer-motion";
// import Button from "./Button"; // adjust import as needed

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
  show: { y: 0, opacity: 1, transition: { ease: "easeOut", duration: 0.4 } },
};

const LeftSection = memo(() => {
  function handleScroll(target) {
    window.scrollTo({
      top: document.getElementById(target).offsetTop,
      behavior: "smooth",
    });
  }

  const titleText = ["Pay For What You Owe", "No More, No Less"];

  const title = (
    <motion.h1
      variants={textContainer}
      initial="hidden"
      animate="show"
      className="title font-bold text-white leading-tight tracking-tight text-center xl:text-left"
    >
      <span className="text-nowrap">
        {titleText[0].split(" ").map((word, index) => (
          <motion.span key={index} variants={textItem} className="inline-block mr-1">
            {word}
          </motion.span>
        ))}
      </span>
      <br />
      <span className="block xl:inline bg-clip-text text-white">
        {titleText[1].split(" ").map((word, index) => (
          <motion.span key={index} variants={textItem} className="inline-block mr-1">
            {word}
          </motion.span>
        ))}
      </span>
    </motion.h1>
  );

  const description = (
    <motion.p
      variants={textItem}
      initial="hidden"
      animate="show"
      transition={{ delay: 0.5 }}
      className="text-white text-base sm:text-lg mt-3 sm:mt-4 lg:mt-6 opacity-90"
    >
      Join <span className="font-extrabold">1,527</span> people who are redefining credit—fairer, smarter, and built for
      you.
    </motion.p>
  );

  const buttons = (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-3 mt-8 sm:mt-3 w-full"
    >
      <Button
        type="white"
        label="Learn More"
        className="w-full sm:w-auto text-xs"
        onClick={() => handleScroll("calculator")}
      />
      <Button
        type="outline"
        label="Join The Waitlist"
        className="w-full sm:w-auto text-xs"
        onClick={() => handleScroll("join")}
      />
    </motion.div>
  );

  return (
    <section className="flex flex-col xl:items-start justify-center items-center xl:text-left w-[100%]">
      <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
        {title}
        {description}
      </div>
      {buttons}
    </section>
  );
});

export { LeftSection };
>>>>>>> testing
