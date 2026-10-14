import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import PageContainer from '../../../CommonComponents/PageContainer';
import VFXServiceCard from '../../../CommonComponents/VFXServiceCard';
import { services } from '../../../data/services';

const ServicesSection = () => {
  return (
    <section aria-label="Our services" className="bg-[#070b0d] py-16">
      <PageContainer>
        <div className="mb-7 flex flex-col gap-4 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--gold-bright)]">
              Our Services
            </p>
            <h2 className="mt-4 max-w-[900px] text-4xl font-bold uppercase leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl lg:text-[4rem]">
              End-to-end VFX Solutions
            </h2>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center self-start gap-3 border border-[var(--gold-primary)] bg-transparent px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--gold-bright)] transition-colors hover:bg-[var(--gold-primary)] hover:text-[var(--bg-primary)] lg:self-auto"
          >
            View all services <FaArrowRight aria-hidden="true" />
          </Link>
        </div>

        <div className="grid items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <VFXServiceCard key={service.title} service={service} />
          ))}
        </div>
      </PageContainer>
    </section>
  );
};

export default ServicesSection;
