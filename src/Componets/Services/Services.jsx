import { useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  Box,
  Building2,
  Camera,
  Check,
  Clock3,
  Clapperboard,
  Gamepad2,
  Gem,
  GraduationCap,
  Layers3,
  Lightbulb,
  Monitor,
  PawPrint,
  Play,
  Send,
  SlidersHorizontal,
  Star,
  Tv,
  WandSparkles,
} from 'lucide-react';
import PageContainer from '../../CommonComponents/PageContainer';
import {
  serviceAdvantages,
  serviceBenefits,
  serviceComparisons,
  serviceIndustries,
  serviceProcessSteps,
  services,
} from '../../data/services';
import './services.css';

const serviceIcons = {
  Box,
  Building2,
  Camera,
  Check,
  Clock3,
  Clapperboard,
  Gamepad2,
  Gem,
  GraduationCap,
  Layers3,
  Lightbulb,
  Monitor,
  PawPrint,
  Send,
  SlidersHorizontal,
  Star,
  Tv,
  WandSparkles,
};

const Services = () => {
  const [activeComparison, setActiveComparison] = useState(0);
  const [comparisonPosition, setComparisonPosition] = useState(50);
  const comparison = serviceComparisons[activeComparison];

  return (
  <div className="services-page">
    <section className="services-hero">
      <div className="services-hero__overlay" aria-hidden="true" />
      <PageContainer className="services-hero__content">
        <div className="max-w-xl">
          <p className="services-eyebrow">Our Services</p>
          <h1>
            End-to-end
            <span>VFX solutions.</span>
          </h1>
          <p className="services-hero__description">
            From concept to final frame, we deliver world-class visual effects, CGI,
            compositing, and post-production services for films, series, commercials,
            and immersive experiences.
          </p>
          <a href="/contact" className="services-button">
            Get a quote <ArrowRight size={15} aria-hidden="true" />
          </a>
        </div>
        <p className="services-hero__signature" aria-hidden="true">
          Imagination
          <span>Into Reality</span>
        </p>
      </PageContainer>
    </section>

    <section className="services-benefits" aria-label="Our commitments">
      <PageContainer className="services-benefits__grid">
        {serviceBenefits.map(({ title, description, icon }) => {
          const Icon = serviceIcons[icon];
          return (
          <div className="services-benefit" key={title}>
            <Icon aria-hidden="true" />
            <div>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
          );
        })}
      </PageContainer>
    </section>

    <section id="services" className="services-offerings">
      <PageContainer>
        <div className="services-section-heading">
          <div>
            <p className="services-eyebrow">Our Services</p>
            <h2>Creative solutions for every story</h2>
          </div>
          <p>We combine artistic vision with technical excellence to create stunning visuals that captivate audiences worldwide.</p>
        </div>
        <div className="services-card-grid">
          {services.map(({ title, description, image, icon }) => {
            const Icon = serviceIcons[icon];
            return (
            <article className="services-card" key={title}>
              <img src={image} alt="" loading="lazy" />
              <div className="services-card__shade" aria-hidden="true" />
              <div className="services-card__content">
                <Icon className="services-card__icon" aria-hidden="true" />
                <h3>{title}</h3>
                <p>{description}</p>
                <a href="/contact" aria-label={`Ask us about ${title}`}>
                  Learn more <ArrowRight size={13} aria-hidden="true" />
                </a>
              </div>
              <a className="services-card__play" href="/reels" aria-label={`Explore ${title} work`}>
                <Play size={13} fill="currentColor" aria-hidden="true" />
              </a>
            </article>
            );
          })}
        </div>
      </PageContainer>
    </section>

    <section className="services-comparison" aria-labelledby="services-comparison-title">
      <PageContainer>
        <div className="services-section-heading">
          <div>
            <p className="services-eyebrow">The difference is in the details</p>
            <h2 id="services-comparison-title">Before &amp; after</h2>
          </div>
          <p>Drag the slider to see how our artists transform every frame.</p>
        </div>
        <div className="services-comparison__tabs" role="group" aria-label="Choose a VFX comparison">
          {serviceComparisons.map(({ title }, index) => (
            <button
              type="button"
              key={title}
              className={activeComparison === index ? 'active' : ''}
              aria-pressed={activeComparison === index}
              onClick={() => {
                setActiveComparison(index);
                setComparisonPosition(50);
              }}
            >
              {title}
            </button>
          ))}
        </div>
        <div className="services-comparison__frame" style={{ '--comparison-position': `${comparisonPosition}%` }}>
          <img className="services-comparison__after" src={comparison.after} alt={`${comparison.title} completed result`} />
          <img className="services-comparison__before" src={comparison.before} alt="" aria-hidden="true" />
          <span className="services-comparison__label services-comparison__label--before">Before</span>
          <span className="services-comparison__label services-comparison__label--after">After</span>
          <span className="services-comparison__divider" aria-hidden="true">
            <span><ArrowRight size={16} aria-hidden="true" /></span>
          </span>
          <input
            className="services-comparison__input"
            type="range"
            min="0"
            max="100"
            value={comparisonPosition}
            onChange={(event) => setComparisonPosition(Number(event.target.value))}
            aria-label={`Reveal before and after ${comparison.title} work`}
          />
        </div>
      </PageContainer>
    </section>

    <section id="process" className="services-process">
      <PageContainer>
        <div className="services-section-heading">
          <div>
            <p className="services-eyebrow">Our Process</p>
            <h2>From idea to <span>final frame</span></h2>
          </div>
          <p>A streamlined process that ensures creativity, quality and efficiency at every stage.</p>
        </div>
        <div className="services-process__grid">
          {serviceProcessSteps.map(({ title, description, image, icon }, index) => {
            const Icon = serviceIcons[icon];
            return (
            <article className="services-process__step" key={title}>
              <div className="services-process__image">
                <img src={image} alt="" loading="lazy" />
                <span><Icon size={17} aria-hidden="true" /></span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              {index < serviceProcessSteps.length - 1 && <ArrowDownRight className="services-process__arrow" aria-hidden="true" />}
            </article>
            );
          })}
        </div>
      </PageContainer>
    </section>

    <section className="services-impact">
      <PageContainer className="services-impact__content">
        <div>
          <p className="services-eyebrow">Why choose us</p>
          <h2>Creative excellence <span>with real impact</span></h2>
        </div>
        <ul>
          {serviceAdvantages.map((advantage) => (
            <li key={advantage}><Check size={14} aria-hidden="true" /> {advantage}</li>
          ))}
        </ul>
        <a href="/reels#featured-reel" className="services-impact__reel">
          <span><Play size={17} fill="currentColor" aria-hidden="true" /></span>
          Watch our showreel
        </a>
      </PageContainer>
    </section>

    <section className="services-industries">
      <PageContainer>
        <p className="services-eyebrow">Industries we serve</p>
        <div className="services-industries__grid">
          {serviceIndustries.map(({ title, icon }) => {
            const Icon = serviceIcons[icon];
            return (
            <div className="services-industry" key={title}>
              <Icon size={21} aria-hidden="true" />
              <h2>{title}</h2>
            </div>
            );
          })}
        </div>
      </PageContainer>
    </section>

    <section className="services-cta">
      <PageContainer className="services-cta__content">
        <div>
          <h2>Let&apos;s create something extraordinary together.</h2>
          <p>Have a project in mind? We&apos;d love to hear from you.</p>
        </div>
        <a href="/contact" className="services-button">
          Get in touch <ArrowRight size={15} aria-hidden="true" />
        </a>
        <p className="services-cta__stats"><strong>50+</strong> projects <strong>25+</strong> happy clients <strong>5+</strong> years experience</p>
      </PageContainer>
    </section>
  </div>
);
};

export default Services;
