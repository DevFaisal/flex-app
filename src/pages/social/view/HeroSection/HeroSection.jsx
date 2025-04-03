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
      </Container>
    </main>
  );
};

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
