import React from "react";
import Gradient from "../../../../components/ui/Gradient";
import Container from "../../../../components/view/Container";
import Navbar from "../../../../components/view/Navbar";
import Button from "../../../../components/ui/Button";
import CardStack from "../../../../components/ui/CardStack";

const HeroSection = () => {
  return (
    <main className="min-h-screen">
      <section className="relative min-h-screen  overflow-clip">
        <Gradient>
          <Navbar />
          <Container>
            <div className="flex flex-col lg:flex-row justify-between items-center pt-10">
              <LeftSection />
              <CardStack />
            </div>
          </Container>
        </Gradient>
      </section>
    </main>
  );
};

export default HeroSection;

function LeftSection() {
  return (
    <section className="flex mt-20 lg:mt-60 flex-col gap-6 lg:gap-10 items-center xl:items-start justify-between w-full lg:w-1/2 text-center lg:text-left">
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

// function CardStack() {
//   return (
//     <section className="hidden w-full lg:w-1/2 md:flex flex-col justify-start items-center relative h-72 md:h-96 mt-12 lg:mt-0">
//       {/* Green Card */}
//       <motion.img
//         src={greencard}
//         alt="Green credit card"
//         className="absolute w-56 md:w-auto"
//         style={{ zIndex: 3 }}
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0, top: "10px" }}
//         transition={{
//           delay: 1.8,
//           duration: 0.8,
//           type: "spring",
//           stiffness: 100,
//         }}
//       />

//       {/* Material Card */}
//       <motion.img
//         src={materialcard}
//         alt="Material credit card"
//         className="absolute w-56 md:w-auto"
//         style={{ zIndex: 2 }}
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0, top: "60px" }}
//         transition={{
//           delay: 1.0,
//           duration: 0.7,
//           type: "spring",
//           stiffness: 90,
//         }}
//       />

//       {/* Black Card */}
//       <motion.img
//         src={blackcard}
//         alt="Black credit card"
//         className="absolute w-56 md:w-auto"
//         style={{ zIndex: 1 }}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1, top: "100px" }}
//         transition={{
//           delay: 0.3,
//           duration: 0.6,
//         }}
//       />
//     </section>
//   );
// }
