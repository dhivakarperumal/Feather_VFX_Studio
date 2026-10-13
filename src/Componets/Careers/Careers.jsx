import { useMemo, useState } from 'react';
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
  FaClapperboard,
  FaCube,
  FaFilm,
  FaLayerGroup,
  FaLaptop,
  FaWandMagicSparkles,
} from 'react-icons/fa6';

const benefits = [
  { title: 'Creative freedom', description: 'Bring your ideas to life and explore new possibilities.', Icon: FaLightbulb },
  { title: 'Learning & growth', description: 'Work with industry experts and keep developing your craft.', Icon: FaChartLine },
  { title: 'Collaborative culture', description: 'Be part of a supportive and talented team.', Icon: FaUsers },
  { title: 'Cutting-edge technology', description: 'Access the latest tools and pipelines.', Icon: FaLaptop },
  { title: 'Global opportunities', description: 'Work on international projects for top brands and studios.', Icon: FaGlobe },
  { title: 'Work-life balance', description: 'Because creativity thrives in a healthy mind.', Icon: FaHeart },
];

const roles = [
  { title: 'VFX Compositor', department: 'VFX', type: 'Full-time', location: 'Chennai, India', image: '/images/heroimages/1.png', Icon: FaLayerGroup },
  { title: '3D Environment Artist', department: '3D', type: 'Full-time', location: 'Chennai, India', image: '/images/heroimages/5.png', Icon: FaCube },
  { title: 'CG Character Artist', department: 'Character', type: 'Full-time', location: 'Chennai, India', image: '/images/heroimages/4.png', Icon: FaWandMagicSparkles },
  { title: 'Colorist', department: 'Post-Production', type: 'Full-time', location: 'Chennai, India', image: '/images/heroimages/2.png', Icon: FaFilm },
  { title: 'Virtual Production Artist', department: 'Virtual Production', type: 'Contract', location: 'Chennai, India', image: '/images/heroimages/3.png', Icon: FaClapperboard },
  { title: 'Pipeline TD', department: 'Pipeline', type: 'Full-time', location: 'Chennai, India', image: '/images/heroimages/2.png', Icon: FaLaptop },
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

const applicationEmail = 'enquiry@feathervfx.com';

function Careers() {
  const [search, setSearch] = useState('');
  const [department, setDepartment] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');

  const filteredRoles = useMemo(() => {
    const query = search.trim().toLowerCase();
    return roles.filter((role) => (
      (!query || `${role.title} ${role.department} ${role.type} ${role.location}`.toLowerCase().includes(query))
      && (!department || role.department === department)
      && (!location || role.location === location)
      && (!type || role.type === type)
    ));
  }, [search, department, location, type]);

  const applyLink = (roleTitle) => (
    `mailto:${applicationEmail}?subject=${encodeURIComponent(`Careers application - ${roleTitle}`)}&body=${encodeURIComponent(`Hello Feather VFX Studio,\n\nI would like to apply for the ${roleTitle} position.\n\nName:\nPortfolio link:\nRelevant experience:\n\nI have attached my resume and portfolio.`)}`
  );

  return (
    <div className="bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <section className="relative isolate flex min-h-[430px] items-center overflow-hidden border-b border-[var(--border-color)] sm:min-h-[500px] lg:min-h-[540px]">
        <img src="/images/heroimages/2.png" alt="" fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_55%]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--bg-primary)] via-[var(--bg-primary)]/80 to-[var(--bg-primary)]/10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[var(--bg-primary)]/80 via-transparent to-[var(--bg-primary)]/35" />
        <div className="mx-auto w-full max-w-[1700px] px-[6%] py-14 sm:px-[5%] lg:px-[3%]">
          <div className="max-w-xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] sm:text-xs">Careers at Feather VFX</p>
            <h1 className="mt-2 font-serif text-4xl font-bold uppercase leading-[0.98] sm:text-5xl md:text-6xl">
              Create worlds
              <br />
              <span className="text-[var(--gold-primary)]">with us</span>
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/85 sm:text-base">
              Be part of a passionate team that transforms imagination into breathtaking visual experiences. Join us and work on films, series, commercials, and next-gen virtual content.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a href="#open-positions" className="inline-flex items-center gap-3 bg-[var(--gold-primary)] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--bg-primary)] transition-colors hover:bg-[var(--gold-bright)]">
                View open positions <FaArrowRight aria-hidden="true" />
              </a>
              <a href="#studio-life" className="inline-flex items-center gap-3 px-2 py-2 text-[10px] font-bold uppercase tracking-[0.12em] transition-colors hover:text-[var(--gold-primary)]">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/70 text-sm">▶</span>
                Watch our studio
              </a>
            </div>
            <div className="mt-7 grid max-w-[570px] grid-cols-2 gap-y-4 border-t border-white/20 pt-4 sm:grid-cols-4">
              {[
                ['50+', 'Creative talents'],
                ['25+', 'Global projects'],
                ['10+', 'Years of excellence'],
                ['∞', 'New possibilities'],
              ].map(([value, label]) => (
                <div key={label} className="border-l border-white/20 pl-3 first:border-0 first:pl-0">
                  <p className="font-serif text-2xl text-[var(--gold-primary)]">{value}</p>
                  <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.08em] text-white/80">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border-color)] bg-[var(--bg-secondary)]">
        <div className="mx-auto max-w-[1700px] px-[6%] py-8 sm:px-[5%] lg:px-[3%]">
          <div className="grid gap-3 sm:grid-cols-[1.2fr_0.8fr] sm:items-end">
            <div>
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
            {benefits.map(({ title, description, Icon }) => (
              <article key={title} className="flex min-h-[138px] flex-col items-center border border-[var(--border-color)] bg-[var(--bg-primary)] px-3 py-4 text-center transition-colors hover:border-[var(--gold-primary)]">
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
            <div>
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
                  {[...new Set(roles.map((role) => role.department))].map((item) => <option key={item}>{item}</option>)}
                </select>
              </label>
              <label>
                <span className="sr-only">Filter by location</span>
                <select value={location} onChange={(event) => setLocation(event.target.value)} className="career-filter w-full xl:w-36">
                  <option value="">All locations</option>
                  {[...new Set(roles.map((role) => role.location))].map((item) => <option key={item}>{item}</option>)}
                </select>
              </label>
              <label>
                <span className="sr-only">Filter by employment type</span>
                <select value={type} onChange={(event) => setType(event.target.value)} className="career-filter w-full xl:w-32">
                  <option value="">All types</option>
                  {[...new Set(roles.map((role) => role.type))].map((item) => <option key={item}>{item}</option>)}
                </select>
              </label>
            </div>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="space-y-2">
              {filteredRoles.length ? filteredRoles.map(({ title, department: team, type: contract, location: place, image, Icon }) => (
                <a key={title} href={applyLink(title)} className="group flex min-h-[64px] items-center gap-3 border border-[var(--border-color)] bg-[var(--bg-secondary)] p-2 transition-colors hover:border-[var(--gold-primary)]">
                  <img src={image} alt="" loading="lazy" className="h-12 w-20 shrink-0 object-cover sm:w-28" />
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-xs font-bold">{title}</h3>
                    <div className="mt-1 flex flex-wrap gap-1.5">
                      <span className="rounded-sm border border-[var(--border-color)] px-1.5 py-0.5 text-[9px] text-[var(--text-secondary)]">{team}</span>
                      <span className="rounded-sm border border-[var(--border-color)] px-1.5 py-0.5 text-[9px] text-[var(--text-secondary)]">{contract}</span>
                    </div>
                  </div>
                  <span className="hidden items-center gap-1.5 text-[9px] text-[var(--text-secondary)] sm:flex"><FaMapMarkerAlt className="text-[var(--gold-primary)]" aria-hidden="true" />{place}</span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--gold-primary)] text-[var(--gold-primary)] transition-colors group-hover:bg-[var(--gold-primary)] group-hover:text-[var(--bg-primary)]" aria-label={`Apply for ${title}`}>
                    <Icon className="text-xs sm:hidden" aria-hidden="true" />
                    <FaChevronRight className="hidden text-[10px] sm:block" aria-hidden="true" />
                  </span>
                </a>
              )) : (
                <div className="border border-[var(--border-color)] p-6 text-sm text-[var(--text-secondary)]">
                  No roles match those filters. Try a different search or check back soon.
                </div>
              )}
              <p className="pt-1 text-[10px] text-[var(--text-secondary)]">{filteredRoles.length} position{filteredRoles.length === 1 ? '' : 's'} shown · Select a role to apply by email.</p>
            </div>

            <div className="relative flex min-h-[300px] items-end overflow-hidden border border-[var(--border-color)] sm:min-h-[390px]">
              <img src="/images/heroimages/1.png" alt="A visual effects artist creating a cinematic environment" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/95 via-[var(--bg-primary)]/35 to-transparent" />
              <div className="relative max-w-lg p-5 sm:p-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em]">Build the future with us</p>
                <h3 className="mt-2 font-serif text-3xl font-bold uppercase leading-[1.02] sm:text-4xl">
                  Let&apos;s build
                  <br />
                  <span className="text-[var(--gold-primary)]">extraordinary worlds</span>
                  <br />
                  together
                </h3>
                <a href={`mailto:${applicationEmail}?subject=${encodeURIComponent('Career enquiry - Feather VFX Studio')}`} className="mt-4 inline-flex items-center gap-3 bg-[var(--gold-primary)] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--bg-primary)] transition-colors hover:bg-[var(--gold-bright)]">
                  Apply now <FaArrowRight aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border-color)] bg-[var(--bg-secondary)]">
        <div className="mx-auto grid max-w-[1700px] gap-5 px-[6%] py-6 sm:px-[5%] lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:px-[3%]">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em]">Our hiring process</p>
            <h2 className="mt-1 font-serif text-xl font-bold uppercase">A simple &amp; transparent journey</h2>
          </div>
          <ol className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {processSteps.map(({ number, title, description, Icon }) => (
              <li key={number} className="flex items-center gap-2">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--gold-primary)] text-[var(--gold-primary)]"><Icon aria-hidden="true" /></span>
                <span><span className="block text-[9px] font-bold text-[var(--gold-primary)]">{number} &nbsp; {title}</span><span className="mt-1 block text-[9px] leading-relaxed text-[var(--text-secondary)]">{description}</span></span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="studio-life" className="scroll-mt-24 border-b border-[var(--border-color)]">
        <div className="mx-auto max-w-[1700px] px-[6%] py-8 sm:px-[5%] lg:px-[3%]">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em]">Life at Feather VFX Studio</p>
              <h2 className="mt-1 font-serif text-2xl font-bold uppercase sm:text-3xl">A place to create, learn and grow</h2>
            </div>
            <a href="#open-positions" className="inline-flex items-center gap-2 border border-[var(--gold-primary)] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.12em] text-[var(--gold-primary)] transition-colors hover:bg-[var(--gold-primary)] hover:text-[var(--bg-primary)]">
              Join our team <FaArrowRight aria-hidden="true" />
            </a>
          </div>
          <p className="mt-2 max-w-2xl text-xs leading-relaxed text-[var(--text-secondary)]">
            Explore the worlds we create, the production craft that inspires us, and the creative possibilities that bring a team together.
          </p>
          <div className="mt-4 grid h-[150px] grid-cols-2 gap-2 sm:h-[190px] sm:grid-cols-5">
            {galleryImages.map(({ src, alt }, index) => (
              <div key={src} className={`relative overflow-hidden border border-[var(--border-color)] ${index === 0 ? 'col-span-2 sm:col-span-1' : ''}`}>
                <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden">
        <img src="/images/heroimages/Dragon%20Over%20the%20Sunset%20Kingdom.png" alt="" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_55%]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--bg-primary)]/95 via-[var(--bg-primary)]/70 to-[var(--bg-primary)]/25" />
        <div className="mx-auto flex max-w-[1700px] flex-col justify-between gap-5 px-[6%] py-8 sm:px-[5%] md:flex-row md:items-center lg:px-[3%]">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em]">Ready to create something extraordinary?</p>
            <h2 className="mt-1 font-serif text-2xl font-bold uppercase sm:text-3xl">Your next chapter starts here.</h2>
            <p className="mt-2 text-sm text-white/80">Explore open positions and become a part of Feather VFX Studio.</p>
          </div>
          <a href="#open-positions" className="inline-flex shrink-0 items-center gap-3 bg-[var(--gold-primary)] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--bg-primary)] transition-colors hover:bg-[var(--gold-bright)]">
            Join our team <FaArrowRight aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Careers;
