import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import PageContainer from '../../../CommonComponents/PageContainer';
import VFXServiceCard from '../../../CommonComponents/VFXServiceCard';
import { services } from '../../../data/services';

const ServicesSection = () => {
  return (
    <section id="services" aria-label="Our services" className="bg-[var(--bg-primary)] py-16">
      <PageContainer>
        <div className="mb-7 flex flex-col gap-4 lg:mb-10 lg:flex-row lg:items-end lg:justify-between" data-aos="fade-up" data-aos-offset="60">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--gold-bright)]">
              Our Services
            </p>
            <h2 className="mt-4 max-w-[900px] text-4xl font-bold uppercase leading-[0.95] tracking-[-0.05em] text-[var(--text-primary)] sm:text-5xl lg:text-[4rem]">
              End-to-end VFX Solutions
            </h2>
          </div>

          <Link
            to="/#services"
            className="btn-shimmer inline-flex items-center self-start gap-3 border border-[var(--gold-primary)] bg-transparent px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--gold-bright)] transition-colors hover:bg-[var(--gold-primary)] hover:text-[var(--bg-primary)] lg:self-auto"
          >
            View all services <FaArrowRight aria-hidden="true" />
          </Link>
        </div>

        <Swiper
          className="home-services-swiper"
          modules={[Autoplay]}
          slidesPerView={1.1}
          spaceBetween={16}
          loop={services.length > 1}
          speed={700}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 16 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          aria-label="Our services carousel"
        >
          {services.map((service) => (
            <SwiperSlide key={service.title}>
              <VFXServiceCard service={service} />
            </SwiperSlide>
          ))}
        </Swiper>
      </PageContainer>
    </section>
  );
};

export default ServicesSection;
