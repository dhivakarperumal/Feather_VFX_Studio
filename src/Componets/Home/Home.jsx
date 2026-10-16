import Hero from './HeroSection/Hero';
import HomeIntroSection from './HomeIntroSection/HomeIntroSection';
import FeaturedProjectsSection from './FeaturedProjectsSection/FeaturedProjectsSection';
import ServicesSection from './ServicesSection/ServicesSection';
import GlobalVFXSection from './GlobalVFXSection/GlobalVFXSection';
import WhyUsSection from './WhyUsSection/WhyUsSection';
import QualitySecuritySection from './QualitySecuritySection/QualitySecuritySection';
import BrandsSection from './BrandsSection/BrandsSection';
import TestimonialsSection from './TestimonialsSection/TestimonialsSection';

const Home = () => (
  <>
    <Hero />
    <FeaturedProjectsSection homePage />
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
