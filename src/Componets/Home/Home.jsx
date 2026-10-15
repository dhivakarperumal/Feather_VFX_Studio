import Hero from './HeroSection/Hero';
import HomeIntroSection from './HomeIntroSection/HomeIntroSection';
import Projects from '../Projects/Projects';
import ServicesSection from './ServicesSection/ServicesSection';
import GlobalVFXSection from './GlobalVFXSection/GlobalVFXSection';
import WhyUsSection from './WhyUsSection/WhyUsSection';
import QualitySecuritySection from './QualitySecuritySection/QualitySecuritySection';
import BrandsSection from './BrandsSection/BrandsSection';
import TestimonialsSection from './TestimonialsSection/TestimonialsSection';

const Home = () => (
  <>
    <Hero />
    <Projects homePage />
    <HomeIntroSection />
    <ServicesSection />
    <QualitySecuritySection />
    <GlobalVFXSection />
    <WhyUsSection />
    <TestimonialsSection />
    <BrandsSection />
  </>
);

export default Home;
