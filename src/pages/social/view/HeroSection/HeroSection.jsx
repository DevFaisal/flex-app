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
          <div className="flex mt-20 flex-col lg:flex-row justify-between items-center pt-10">
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
    <section className="flex mt-10 lg:mt-40 flex-col gap-6 lg:gap-10 items-center xl:items-start justify-between w-full lg:w-1/2 text-center lg:text-left">
      <div>
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white">
          Pay For What You Owe <br /> No More, No Less
        </h2>
        <p className="text-white text-base md:text-md mt-2 lg:mt-4 px-4 lg:px-0">
          Join <span className="font-extrabold">1,527</span> people who are redefining credit—fairer, smarter, and built
          for you.
        </p>
      </div>
      <div className="flex  gap-4 mt-6 lg:mt-4">
        <Button type="white" label={"Learn More"} />
        <Button type="primary" label={"Join The Waitlist"} />
      </div>
    </section>
  );
}
