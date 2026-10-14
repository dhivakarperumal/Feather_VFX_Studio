import Hero from './HeroSection/Hero';
import HomeIntroSection from './HomeIntroSection/HomeIntroSection';
import Projects from '../Projects/Projects';
import ServicesSection from './ServicesSection/ServicesSection';
import WhyUsSection from './WhyUsSection/WhyUsSection';
import BrandsSection from './BrandsSection/BrandsSection';
import TestimonialsSection from './TestimonialsSection/TestimonialsSection';

const Home = () => (
  <>
    <Hero />
    <HomeIntroSection />
    <Projects homePage />
    <ServicesSection />
    <WhyUsSection />
    <BrandsSection />
    <TestimonialsSection />
  </>
);

export default Home;
