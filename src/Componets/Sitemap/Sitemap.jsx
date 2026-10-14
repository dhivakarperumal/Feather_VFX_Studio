import {
  BriefcaseBusiness,
  Clapperboard,
  Globe2,
  Home,
  UsersRound,
  WandSparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../../CommonComponents/PageHeader';

const sitemapGroups = [
  {
    title: 'Main Pages',
    Icon: Home,
    image: '/images/heroimages/3.png',
    links: [
      { label: 'Home', to: '/' },
      { label: 'About Us', to: '/about' },
      { label: 'Projects', to: '/projects' },
      { label: 'Services', to: '/#services' },
      { label: 'Showreel', to: '/reels#featured-reel' },
      { label: 'Careers', to: '/careers' },
      { label: 'Blog', to: '/blog' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Studio',
    Icon: UsersRound,
    image: '/images/heroimages/1.png',
    links: [
      { label: 'Our Story', to: '/about#about-us' },
      { label: 'Mission & Vision', to: '/about#mission-heading' },
      { label: 'Our Values', to: '/about#values-heading' },
    ],
  },
  {
    title: 'Services',
    Icon: WandSparkles,
    image: '/images/services/COMP_IN.jpg',
    links: [
      { label: 'Compositing', to: '/#services' },
      { label: 'Matchmove', to: '/#services' },
      { label: 'Paint & Prep', to: '/#services' },
      { label: 'Rotoscoping', to: '/#services' },
      { label: 'Cosmetic VFX', to: '/#services' },
    ],
  },
  {
    title: 'Projects & Insights',
    Icon: Clapperboard,
    image: '/images/project.png',
    links: [
      { label: 'Featured Projects', to: '/projects' },
      { label: 'Project Gallery', to: '/projects' },
      { label: 'Showreels', to: '/reels' },
      { label: 'Blog Articles', to: '/blog' },
    ],
  },
  {
    title: 'Careers & Contact',
    Icon: BriefcaseBusiness,
    image: '/images/heroimages/2.png',
    links: [
      { label: 'Open Positions', to: '/careers#open-positions' },
      { label: 'Studio Life', to: '/careers#studio-life' },
      { label: 'Contact Form', to: '/contact#contact-form' },
      { label: 'Get in Touch', to: '/contact' },
    ],
  },
  {
    title: 'Global Locations',
    Icon: Globe2,
    image: '/images/background/bg_14.jpg',
    links: [
      { label: 'Chennai, India', to: '/contact' },
      { label: 'Ilford, United Kingdom', to: '/contact' },
    ],
  },
];

const Sitemap = () => (
  <>
    <PageHeader
      eyebrow="Our navigation"
      title="Sitemap"
      description="Find your way around Feather VFX Studio."
      background="/images/heroimages/3.png"
      align="left"
    />
    <main className="relative isolate overflow-hidden bg-[#05090b] px-[5%] py-12 text-white sm:py-16 lg:px-[4%]">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(5,10,11,0.3),#05090b_85%),url('/images/background/bg_14.jpg')] bg-cover bg-center opacity-30"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-[1500px]">
        <header className="mb-8 max-w-2xl">
          <h2 className="font-serif text-3xl font-bold uppercase sm:text-4xl">
            Explore our <span className="text-[var(--gold-bright)]">website</span>
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            Find everything you need about Feather VFX Studio. Browse our work, services, team, and more.
          </p>
          <div className="mt-4 h-px w-12 bg-[var(--gold-primary)]" aria-hidden="true" />
        </header>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {sitemapGroups.map(({ title, Icon, image, links }) => (
            <section
              key={title}
              aria-label={title}
              className="group relative isolate min-h-[190px] overflow-hidden border border-white/15 bg-[#071013]"
            >
              <img
                src={image}
                alt=""
                loading="lazy"
                className="absolute inset-0 -z-20 h-full w-full object-cover opacity-45 transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 -z-10 bg-gradient-to-r from-[#03090c]/95 via-[#03090c]/85 to-[#03090c]/45"
                aria-hidden="true"
              />
              <div className="flex gap-4 p-4 sm:p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--gold-primary)] text-[var(--gold-bright)]">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-serif text-lg font-semibold uppercase">
                    {title.split(' ').map((part, index) => (
                      <span key={`${part}-${index}`} className={index === title.split(' ').length - 1 ? 'text-[var(--gold-bright)]' : ''}>
                        {index > 0 ? ' ' : ''}{part}
                      </span>
                    ))}
                  </h3>
                  <ul className="mt-3 space-y-1.5">
                    {links.map(({ label, to }) => (
                      <li key={label}>
                        <Link
                          to={to}
                          className="inline-flex items-center gap-2 text-xs text-white/75 transition-colors hover:text-[var(--gold-bright)]"
                        >
                          <span className="text-[var(--gold-primary)]" aria-hidden="true">›</span>
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  </>
);

export default Sitemap;
