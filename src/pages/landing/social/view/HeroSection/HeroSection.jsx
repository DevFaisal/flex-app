import React, { memo } from 'react';
import Gradient from '../../../../../components/ui/Gradient';
import Container from '../../../../../components/view/Container';
import Navbar from '../../../../../components/view/Navbar';
import LeftSection from './components/LeftSection';
import CardStack from './components/CardStack';

const HeroSection = () => {
  return (
    <main className="relative min-h-screen z-[20]">
      <Gradient />
      <Container>
        {/* <Navbar /> */}
        <section className="flex items-center justify-center md:h-[70vh] h-[100vh]">
          <div className="flex-1 lg:px-0 mt-6 sm:mt-8 lg:mt-35 md:mt-70 xl:ml-16">
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
