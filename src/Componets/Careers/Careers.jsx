import { useEffect, useMemo, useState } from 'react';
import {
  FaArrowRight,
  FaChartLine,
  FaChevronRight,
  FaGlobe,
  FaHeart,
  FaLightbulb,
  FaMapMarkerAlt,
  FaSearch,
  FaUsers,
} from 'react-icons/fa';
import {
  FaLaptop,
} from 'react-icons/fa6';
import TeamReviewsSlider from './TeamReviewsSlider';
import { sendEmailJsForm } from '../../utils/emailJs';
import ModalPortal from '../../CommonComponents/ModalPortal';
import PageHeader from '../../CommonComponents/PageHeader';
import { careerJobs } from '../../data/careerJobs';

const benefits = [
  { title: 'Creative freedom', description: 'Bring your ideas to life and explore new possibilities.', Icon: FaLightbulb },
  { title: 'Learning & growth', description: 'Work with industry experts and keep developing your craft.', Icon: FaChartLine },
  { title: 'Collaborative culture', description: 'Be part of a supportive and talented team.', Icon: FaUsers },
  { title: 'Cutting-edge technology', description: 'Access the latest tools and pipelines.', Icon: FaLaptop },
  { title: 'Global opportunities', description: 'Work on international projects for top brands and studios.', Icon: FaGlobe },
  { title: 'Work-life balance', description: 'Because creativity thrives in a healthy mind.', Icon: FaHeart },
];

const processSteps = [
  { number: '01', title: 'Apply', description: 'Submit your application and portfolio.', Icon: FaLightbulb },
  { number: '02', title: 'Review', description: 'Our team reviews your profile.', Icon: FaLaptop },
  { number: '03', title: 'Interview', description: 'A conversation about your work and approach.', Icon: FaUsers },
  { number: '04', title: 'Offer', description: 'Welcome to the team!', Icon: FaHeart },
];

const galleryImages = [
  { src: '/images/heroimages/2.png', alt: 'A film production set at sunset' },
  { src: '/images/heroimages/1.png', alt: 'A digital artist workstation with a cinematic world on screen' },
  { src: '/images/heroimages/5.png', alt: 'A team creating a cinematic creature sequence' },
  { src: '/images/heroimages/3.png', alt: 'A cinematic visual effects production scene' },
  { src: '/images/heroimages/4.png', alt: 'A dramatic digital environment in production' },
];

function Careers() {
  const [search, setSearch] = useState('');
  const [department, setDepartment] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [isSendingApplication, setIsSendingApplication] = useState(false);
  const [applicationStatus, setApplicationStatus] = useState(null);

  useEffect(() => {
    if (!selectedRole) return undefined;

    const body = document.body;
    const scrollY = window.scrollY;
    const originalStyles = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
      paddingRight: body.style.paddingRight,
    };
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.left = '0';
    body.style.right = '0';
    body.style.width = '100%';
    body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      Object.entries(originalStyles).forEach(([property, value]) => {
        body.style[property] = value;
      });
      window.scrollTo(0, scrollY);
    };
  }, [selectedRole]);

  useEffect(() => {
    if (!selectedRole || isSendingApplication) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedRole('');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedRole, isSendingApplication]);

  const filteredRoles = useMemo(() => {
    const query = search.trim().toLowerCase();
    return careerJobs.filter((role) => (
      (!query || `${role.title} ${role.department} ${role.type} ${role.location}`.toLowerCase().includes(query))
      && (!department || role.department === department)
      && (!location || role.location === location)
      && (!type || role.type === type)
    ));
  }, [search, department, location, type]);

  const startApplication = (roleTitle) => {
    setSelectedRole(roleTitle);
    setApplicationStatus(null);
  };

  const submitApplication = async (event) => {
    event.preventDefault();
    if (isSendingApplication) return;

    const form = event.currentTarget;
    setIsSendingApplication(true);
    setApplicationStatus(null);

    try {
      await sendEmailJsForm(form, 'careers');
      form.reset();
      setApplicationStatus({ type: 'success', message: 'Your application was sent successfully. Thank you for your interest.' });
    } catch (error) {
      setApplicationStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'We could not send your application. Please try again.',
      });
    } finally {
      setIsSendingApplication(false);
    }
  };

  return (
    <div className="bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <PageHeader
        eyebrow="Careers at Feather VFX"
        title={<>Our <span className="text-[var(--gold-bright)]">Careers</span></>}
        titleSize="text-2xl sm:text-3xl md:text-4xl"
        breadcrumbLabel="Careers"
        background="/images/pageheader/career.png"
        align="left"
      >
        {/* <div className="mt-5 flex flex-wrap items-center gap-3">
          <a href="#open-positions" className="inline-flex min-h-11 items-center gap-3 border border-[var(--gold-bright)] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--gold-bright)] transition-colors hover:bg-[var(--gold-bright)] hover:text-[#17191b] focus-visible:bg-[var(--gold-bright)] focus-visible:text-[#17191b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            View open positions <FaArrowRight aria-hidden="true" />
          </a>
          <a href="#studio-life" className="hidden min-h-11 items-center gap-3 border border-white/60 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:border-[var(--gold-bright)] hover:bg-[var(--gold-bright)] hover:text-[#17191b] focus-visible:border-[var(--gold-bright)] focus-visible:bg-[var(--gold-bright)] focus-visible:text-[#17191b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:inline-flex">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-current text-sm">▶</span>
            Watch our studio
          </a>
        </div> */}
      </PageHeader>

      <section className="border-b border-[var(--border-color)] bg-[var(--bg-secondary)]">
        <div className="mx-auto max-w-[1700px] px-[6%] py-8 sm:px-[5%] lg:px-[3%]">
          <div className="grid gap-3 sm:grid-cols-[1.2fr_0.8fr] sm:items-end">
            <div data-aos="fade-up">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em]">Why join us</p>
              <h2 className="mt-1 font-serif text-2xl font-bold uppercase leading-tight sm:text-3xl">
                More than a job
                <br />
                <span className="text-[var(--gold-primary)]">it&apos;s a creative journey</span>
              </h2>
            </div>
            <p className="max-w-xl text-xs leading-relaxed text-[var(--text-secondary)] sm:justify-self-end">
              We believe great work comes from great people. At Feather VFX Studio, we provide a space to learn, grow, and create without limits.
            </p>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {benefits.map(({ title, description, Icon }, index) => (
              <article key={title} className="flex min-h-[138px] flex-col items-center border border-[var(--border-color)] bg-[var(--bg-primary)] px-3 py-4 text-center transition-colors hover:border-[var(--gold-primary)]" data-aos="zoom-in" data-aos-delay={index * 80}>
                <Icon className="text-xl text-[var(--gold-primary)]" aria-hidden="true" />
                <h3 className="mt-3 text-[10px] font-bold uppercase tracking-[0.06em]">{title}</h3>
                <p className="mt-2 text-[10px] leading-relaxed text-[var(--text-secondary)]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="open-positions" className="scroll-mt-24 border-b border-[var(--border-color)]">
        <div className="mx-auto max-w-[1700px] px-[6%] py-9 sm:px-[5%] lg:px-[3%]">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
            <div data-aos="fade-up">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em]">Open positions</p>
              <h2 className="mt-1 font-serif text-2xl font-bold uppercase sm:text-3xl">Find your next opportunity</h2>
            </div>
            <div className="grid gap-2 sm:grid-cols-2 xl:flex">
              <label className="relative">
                <span className="sr-only">Search jobs</span>
                <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search jobs..." className="career-filter w-full xl:w-44" />
                <FaSearch className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[var(--text-secondary)]" aria-hidden="true" />
              </label>
              <label>
                <span className="sr-only">Filter by department</span>
                <select value={department} onChange={(event) => setDepartment(event.target.value)} className="career-filter w-full xl:w-36">
                  <option value="">All departments</option>
                  {[...new Set(careerJobs.map((role) => role.department))].map((item) => <option key={item}>{item}</option>)}
                </select>
              </label>
              <label>
                <span className="sr-only">Filter by location</span>
                <select value={location} onChange={(event) => setLocation(event.target.value)} className="career-filter w-full xl:w-36">
                  <option value="">All locations</option>
                  {[...new Set(careerJobs.map((role) => role.location))].map((item) => <option key={item}>{item}</option>)}
                </select>
              </label>
              <label>
                <span className="sr-only">Filter by employment type</span>
                <select value={type} onChange={(event) => setType(event.target.value)} className="career-filter w-full xl:w-32">
                  <option value="">All types</option>
                  {[...new Set(careerJobs.map((role) => role.type))].map((item) => <option key={item}>{item}</option>)}
                </select>
              </label>
            </div>
          </div>

          <div className="mt-5">
            <div className="space-y-4">
              {filteredRoles.length ? filteredRoles.map(({ title, department: team, type: contract, location: place, image, Icon, responsibilities, qualifications }) => (
                <article key={title} className="overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)]">
                  <div className="grid sm:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[450px_minmax(0,1fr)]">
                    <div className="relative hidden min-h-full sm:block">
                      <img src={image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                      {/* <div className="absolute inset-0 flex items-center justify-center bg-[var(--bg-primary)]/50">
                        <Icon className="text-3xl text-[var(--gold-primary)]" aria-hidden="true" />
                      </div> */}
                    </div>
                    <div className="p-4 sm:p-5">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <h3 className="font-serif text-xl font-bold text-[var(--gold-bright)] sm:text-2xl">{title}</h3>
                          <div className="mt-2 flex flex-wrap gap-2 text-[10px] text-[var(--text-secondary)]">
                            <span className="border border-[var(--border-color)] px-2 py-1">{team}</span>
                            <span className="border border-[var(--border-color)] px-2 py-1">{contract}</span>
                            <span className="inline-flex items-center gap-1 border border-[var(--border-color)] px-2 py-1"><FaMapMarkerAlt className="text-[var(--gold-primary)]" aria-hidden="true" />{place}</span>
                          </div>
                        </div>
                        <button type="button" onClick={() => startApplication(title)} className="inline-flex shrink-0 items-center gap-2 bg-[var(--gold-primary)] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--bg-primary)] transition-colors hover:bg-[var(--gold-bright)]">
                          Apply now <FaChevronRight aria-hidden="true" />
                        </button>
                      </div>
                      <div className="mt-4 grid gap-4 md:grid-cols-2">
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--text-primary)]">Responsibilities</h4>
                          <ul className="mt-2 list-disc space-y-1 pl-4 text-xs leading-relaxed text-[var(--text-secondary)]">
                            {responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--text-primary)]">Qualifications</h4>
                          <ul className="mt-2 list-disc space-y-1 pl-4 text-xs leading-relaxed text-[var(--text-secondary)]">
                            {qualifications.map((qualification) => <li key={qualification}>{qualification}</li>)}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              )) : (
                <div className="border border-[var(--border-color)] p-6 text-sm text-[var(--text-secondary)]">
                  No roles match those filters. Try a different search or check back soon.
                </div>
              )}
              <p className="pt-1 text-[10px] text-[var(--text-secondary)]">{filteredRoles.length} position{filteredRoles.length === 1 ? '' : 's'} shown · Select a role to apply by email.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border-color)] bg-[var(--bg-secondary)]">
        <div className="mx-auto grid max-w-[1700px] gap-5 px-[6%] py-6 sm:px-[5%] lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:px-[3%]">
          <div data-aos="fade-up">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em]">Our hiring process</p>
            <h2 className="mt-1 font-serif text-xl font-bold uppercase">A simple &amp; transparent journey</h2>
          </div>
          <ol className="grid grid-cols-2 gap-4 sm:grid-cols-4" data-aos="fade-up" data-aos-delay="100">
            {processSteps.map(({ number, title, description, Icon }) => (
              <li key={number} className="flex items-center gap-2">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--gold-primary)] text-[var(--gold-primary)]"><Icon aria-hidden="true" /></span>
                <span><span className="block text-[9px] font-bold text-[var(--gold-primary)]">{number} &nbsp; {title}</span><span className="mt-1 block text-[9px] leading-relaxed text-[var(--text-secondary)]">{description}</span></span>
              </li>
            ))}
          </ol>
        </div>
      </section>

  

      <TeamReviewsSlider />

      {selectedRole && (
        <ModalPortal>
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto overscroll-contain bg-black/80 p-4 backdrop-blur-sm"
            onClick={(event) => {
              if (event.target === event.currentTarget && !isSendingApplication) setSelectedRole('');
            }}
            role="presentation"
          >
            <section role="dialog" aria-modal="true" aria-labelledby="career-application-title" className="my-auto max-h-[calc(100vh-2rem)] max-h-[calc(100dvh-2rem)] w-full max-w-xl overflow-y-auto border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 shadow-2xl sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em]">Careers at Feather VFX</p>
                  <h2 id="career-application-title" className="mt-1 font-serif text-2xl font-bold uppercase">
                    Apply: <span className="text-[var(--gold-primary)]">{selectedRole}</span>
                  </h2>
                </div>
                <button type="button" onClick={() => setSelectedRole('')} disabled={isSendingApplication} aria-label="Close application form" className="text-2xl text-[var(--text-secondary)] transition-colors hover:text-[var(--gold-primary)] disabled:opacity-50">×</button>
              </div>
              <form className="mt-5 space-y-3" onSubmit={submitApplication}>
                <input type="hidden" name="role" value={selectedRole} />
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="sr-only" htmlFor="career-applicant-name">Full name</label>
                  <input id="career-applicant-name" name="name" required autoComplete="name" placeholder="Full name *" className="contact-field" />
                  <label className="sr-only" htmlFor="career-applicant-email">Email</label>
                  <input id="career-applicant-email" name="email" required type="email" autoComplete="email" placeholder="Email *" className="contact-field" />
                </div>
                <label className="sr-only" htmlFor="career-applicant-phone">Phone number</label>
                <input id="career-applicant-phone" name="phone" type="tel" autoComplete="tel" placeholder="Phone number" className="contact-field" />
                <label className="sr-only" htmlFor="career-portfolio">Portfolio or showreel link</label>
                <input id="career-portfolio" name="portfolio_url" type="url" placeholder="Portfolio / showreel link" className="contact-field" />
                <label className="sr-only" htmlFor="career-experience">Relevant experience</label>
                <textarea id="career-experience" name="experience" rows="3" placeholder="Tell us about your relevant experience" className="contact-field resize-y" />
                <label className="sr-only" htmlFor="career-resume-url">Resume link</label>
                <input
                  id="career-resume-url"
                  name="resume_url"
                  type="url"
                  required
                  placeholder="Resume link (Google Drive, Dropbox, etc.) *"
                  className="contact-field"
                />
                <p className="text-[10px] leading-relaxed text-[var(--text-secondary)]">
                  Add the resume link to your Careers EmailJS template using <code>{'{{resume_url}}'}</code>. Make sure the link can be opened by our hiring team.
                </p>
                {applicationStatus && (
                  <p role={applicationStatus.type === 'error' ? 'alert' : 'status'} className={`text-xs ${applicationStatus.type === 'error' ? 'text-red-400' : 'text-[var(--gold-primary)]'}`}>
                    {applicationStatus.message}
                  </p>
                )}
                <button type="submit" disabled={isSendingApplication} className="inline-flex items-center gap-3 bg-[var(--gold-primary)] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[var(--bg-primary)] transition-colors hover:bg-[var(--gold-bright)] disabled:cursor-not-allowed disabled:opacity-60">
                  {isSendingApplication ? 'Sending application...' : 'Submit application'}
                  {!isSendingApplication && <FaArrowRight aria-hidden="true" />}
                </button>
              </form>
            </section>
          </div>
        </ModalPortal>
      )}
      <section className="relative isolate overflow-hidden">
        <img
          src="/images/heroimages/Dragon%20Over%20the%20Sunset%20Kingdom.png"
          alt=""
          loading="lazy"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_55%]"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/60 to-black/20 max-md:bg-black/65" />

        <div className="mx-auto flex min-h-[260px] max-w-[1700px] flex-col justify-between gap-6 px-[6%] py-10 text-white sm:px-[5%] md:flex-row md:items-center lg:px-[3%]">
          <div className="max-w-2xl" data-aos="fade-up">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">
              Ready to create something extraordinary?
            </p>

            <h2 className="mt-2 font-serif text-2xl font-bold uppercase leading-tight text-white sm:text-3xl lg:text-4xl">
              Your next chapter starts here.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/90">
              Explore open positions and become a part of Feather VFX Studio.
            </p>
          </div>

          <a
            href="#open-positions"
            className="inline-flex w-fit shrink-0 items-center gap-3 border border-[var(--gold-bright)] bg-[var(--gold-primary)] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[var(--gold-bright)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Join our team
            <FaArrowRight aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Careers;
