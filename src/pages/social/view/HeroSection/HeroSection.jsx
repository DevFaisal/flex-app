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
      </Container>
    </main>
  );
};

export default memo(HeroSection);

const LeftSection = memo(() => {
  function handleScroll(target) {
    window.scrollTo({
      top: document.getElementById(target).offsetTop,
      behavior: "smooth",
    });
  }

  const title = (
    <h1 className="title font-bold text-white leading-tight tracking-tight text-center xl:text-left">
      <span className="text-nowrap">Pay For What You Owe</span>{" "}
      <span className="block xl:inline bg-clip-text text-white">No More, No Less</span>
    </h1>
  );

  const description = (
    <p className="text-white text-base sm:text-lg mt-3 sm:mt-4 lg:mt-6 opacity-90">
      Join <span className="font-extrabold">1,527</span> people who are redefining credit—fairer, smarter, and built for
      you.
    </p>
  );

  const buttons = (
    <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-3 mt-8 sm:mt-3 w-full">
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
    </div>
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
