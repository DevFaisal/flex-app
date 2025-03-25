import React from "react";
import Gradient from "../../../../components/ui/Gradient";
import Container from "../../../../components/view/Container";
import Navbar from "../../../../components/view/Navbar";
import Button from "../../../../components/ui/Button";
import CardStack from "../../../../components/ui/CardStack";

const HeroSection = () => {
  return (
    <main className="relative min-h-screen overflow-clip">
      <Gradient>
        <Container>
          <Navbar />
          <div className="flex mt-20 flex-col lg:flex-row justify-between items-center pt-40 md:pt-10">
            <LeftSection />
            <CardStack />
          </div>
        </Container>
      </Gradient>
    </main>
  );
};

export default HeroSection;

function LeftSection() {
  return (
    <section className="flex flex-col w-full lg:w-1/2 px-4 sm:px-6 lg:px-0 mt-6 sm:mt-8 lg:mt-35">
      <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Pay For What You Owe <span className="block sm:inline">No More, No Less</span>
        </h2>
        <p className="text-white text-base sm:text-lg mt-3 sm:mt-4 lg:mt-6 opacity-90">
          Join <span className="font-extrabold">1,527</span> people who are redefining credit—fairer, smarter, and built
          for you.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8 sm:mt-10">
        <Button type="white" label={"Learn More"} className="w-full sm:w-auto" />
        <Button type="outline" label={"Join The Waitlist"} className="w-full sm:w-auto" />
      </div>
    </section>
  );
}
