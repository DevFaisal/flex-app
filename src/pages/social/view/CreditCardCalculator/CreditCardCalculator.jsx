import React from "react";
import HeaderNote from "../../../../components/ui/HeaderNote";
import Card from "./components/Card";
import Section from "./components/Section";

const CreditCardCalculator = () => {
  return (
    <section
      id="calculator"
      className="relative flex flex-col justify-center items-center p-4 md:p-15 max-w-5xl mx-auto"
    >
      <HeaderNote
        note={"Credit Card Calculator"}
        desc={`Discover how much interest you&#39;re really paying <br />
          and how FlexCard can help you save.`}
      />
      <Section>
        <Card />
      </Section>
      {/* Background Gradient */}
      <div className="absolute w-full h-2/3 top-50 bg-gradient-to-r from-[#0569E8] to-[#76D232] blur-3xl opacity-15"></div>
    </section>
  );
};

export default CreditCardCalculator;
