import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import PageContainer from '../../../CommonComponents/PageContainer';
import VFXServiceCard from '../../../CommonComponents/VFXServiceCard';
import { services } from '../../../data/services';

const serviceOrder = ['Rotoscoping', 'Paint & Prep', 'Cosmetic VFX', 'Matchmove', 'Compositing'];
const orderedServices = serviceOrder.map((title) => services.find((service) => service.title === title));

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
            to="/services"
            className="btn-shimmer inline-flex items-center self-start gap-3 border border-[var(--gold-primary)] bg-transparent px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--gold-bright)] transition-colors hover:bg-[var(--gold-primary)] hover:text-[var(--bg-primary)] lg:self-auto"
          >
            View all services <FaArrowRight aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          {orderedServices.map((service, index) => (
            <div
              key={service.title}
              className={
                index === orderedServices.length - 1
                  ? 'sm:col-span-2 sm:w-1/2 sm:justify-self-start'
                  : ''
              }
            >
              <VFXServiceCard service={service} layout="grid" />
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
};

export default ServicesSection;
