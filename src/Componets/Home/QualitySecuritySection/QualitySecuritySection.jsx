// import { Award, CircleDollarSign, UsersRound } from 'lucide-react';
import {
  Award,
  CircleDollarSign,
  UsersRound,
  ShieldCheck,
} from 'lucide-react';

const benefits = [
  {
    title: (
      <>
        High-Quality <span className="text-[var(--gold-bright)]">Work</span>
      </>
    ),
    description:
      'We focus on delivering precise, consistent visual effects that meet the agreed project specifications. Every shot receives careful attention to detail and quality control.',
    Icon: Award,
    image: '/images/highqualitywork.png',
    imageAlt: 'High-quality visual effects work displayed on a studio monitor',
  },
  {
    title: (
      <>
        Responsive <span className="text-[var(--gold-bright)]">Project Support</span>
      </>
    ),
    description:
      'We understand the demands of production schedules and the importance of clear communication. Our team works closely with clients to manage feedback, coordinate deliveries, and support project deadlines.',
    Icon: UsersRound,
    image: '/images/responsiveprojectsupport.png',
    imageAlt: 'VFX artists collaborating on a project',
  },
  {
    title: (
      <>
        Cost-Effective <span className="text-[var(--gold-bright)]">Solutions</span>
      </>
    ),
    description:
      'We provide flexible VFX outsourcing solutions designed to meet different production requirements and budgets without compromising on quality.',
    Icon: CircleDollarSign,
    image: '/images/cost-effective.png',
    imageAlt: 'Cost-effective production planning',
  },
];

const QualitySecuritySection = () => (
  <section
    aria-labelledby="quality-security-title"
    className="relative isolate overflow-hidden border-y border-[var(--gold-primary)]/20 bg-[var(--bg-primary)] px-[5%] py-10 text-[var(--text-primary)] sm:px-[4%] sm:py-14 lg:px-[3%] lg:py-16"
  >
    <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_10%_90%,rgba(184,134,11,0.07),transparent_28%),radial-gradient(ellipse_at_90%_10%,rgba(34,78,96,0.06),transparent_30%)]" aria-hidden="true" />

    <div className="mx-auto max-w-[1500px]">
      <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-10">
        <div data-aos="fade-right">
          <p className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--gold-bright)] sm:text-[10px]">
            <span className="h-px w-10 bg-[var(--gold-primary)]" aria-hidden="true" />
            Quality · Security · Reliability
          </p>
          <h2
            id="quality-security-title"
            className="mt-4 max-w-2xl font-serif text-3xl font-bold leading-[1.02] tracking-[-0.035em] sm:text-4xl lg:text-5xl"
          >
            Quality, Security
            <span className="block text-[var(--gold-bright)]">and Reliability</span>
          </h2>
          <span className="mt-4 block h-0.5 w-10 bg-[var(--gold-bright)]" aria-hidden="true" />
          <p className="mt-4 max-w-xl text-sm text-justify leading-[1.7] text-[var(--text-secondary)] sm:text-[16px]">
            At Feather VFX, we understand the importance of protecting our clients&apos; content and confidential information. We are committed to professional communication, responsible data handling, and reliable production workflows.
          </p>
          <p className="mt-3 max-w-xl text-sm  text-justify leading-[1.7] text-[var(--text-secondary)] sm:text-[16px]">
            Our goal is to build lasting client relationships through quality, transparency, and dependable service.
          </p>
          {/* ISO Security Certification Highlight */}
          <div className="mt-5 inline-flex max-w-full items-center gap-3 rounded-lg border border-[var(--gold-primary)]/40 bg-[var(--gold-primary)]/[0.07] px-4 py-3 shadow-sm sm:px-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--gold-primary)]/50 bg-[var(--gold-primary)]/10 text-[var(--gold-bright)]">
              <ShieldCheck className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
            </span>

            <div className="min-w-0">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--text-secondary)] sm:text-[10px]">
                Information Security Standard
              </p>
              <p className="mt-1 text-base font-extrabold tracking-wide text-[var(--gold-bright)] sm:text-lg">
                ISO 27001:2013
              </p>
            </div>
          </div>
        </div>

        <div data-aos="fade-left" data-aos-delay="100">
          <div className="relative min-h-[220px] overflow-hidden rounded-xl sm:min-h-[290px] lg:min-h-[330px]">
            <img
              src="/images/qsr.png"
              alt="VFX artist working at a studio workstation"
              className="absolute inset-0 h-full w-full object-contain opacity-60"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="mt-7 grid gap-4 md:grid-cols-3 lg:mt-8 lg:gap-5">
        {benefits.map(({ title, description, Icon, image, imageAlt }, index) => (
          <div key={image} className="relative pt-7">
            <article
              data-aos="fade-up"
              data-aos-delay={index * 90}
              className="group relative h-full border border-[var(--gold-primary)]/30 bg-[var(--bg-secondary)] shadow-[0_6px_20px_rgba(0,0,0,0.06)] transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Icon straddling the top border — half above, half inside */}
              <span className="absolute -top-7 left-5 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[var(--gold-primary)] bg-[var(--bg-primary)] text-[var(--gold-bright)] shadow-[0_0_18px_rgba(184,134,11,0.15)]">
                <Icon className="h-7 w-7" strokeWidth={1.7} aria-hidden="true" />
              </span>
              <div className="relative px-4 pb-5 pt-10 sm:px-5">
                <h3 className="font-serif text-xl font-bold leading-tight sm:text-2xl">
                  {title}
                </h3>
                <span className="mt-3 block h-0.5 w-9 bg-[var(--gold-bright)]" aria-hidden="true" />
                <p className="mt-3 text-sm leading-[1.7] text-[var(--text-secondary)] sm:text-[15px]">
                  {description}
                </p>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default QualitySecuritySection;
