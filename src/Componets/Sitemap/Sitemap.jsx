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
import { europeanClientLocations, serviceMarkets } from '../../data/locationMarkets';

const sitemapGroups = [
  {
    title: 'Main Pages',
    Icon: Home,
    image: '/images/heroimages/3.png',
    links: [
      { label: 'Home', to: '/' },
      { label: 'About Us', to: '/about' },
      { label: 'Projects', to: '/projects' },
      { label: 'Services', to: '/services' },
      { label: 'Showreel', to: '/showreel' },
      { label: 'Work', to: '/work' },
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
      { label: 'Compositing', to: '/services' },
      { label: 'Matchmove', to: '/services' },
      { label: 'Paint & Prep', to: '/services' },
      { label: 'Rotoscoping', to: '/services' },
      { label: 'Cosmetic VFX', to: '/services' },
    ],
  },
  {
    title: 'Projects & Insights',
    Icon: Clapperboard,
    image: '/images/project.png',
    links: [
      { label: 'Featured Projects', to: '/projects' },
      { label: 'Project Gallery', to: '/projects' },
      { label: 'Showreel', to: '/showreel' },
      { label: 'Work & Reels', to: '/work' },
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
];

const Sitemap = () => (
  <>
    <PageHeader
      eyebrow="Our navigation"
      title="Sitemap"
      background="/images/sitemap.png"
      align="left"
    >
     
    </PageHeader>
    <main id="sitemap-links" className="relative isolate scroll-mt-24 overflow-hidden bg-[var(--bg-primary)] px-[5%] py-12 text-[var(--text-primary)] sm:py-16 lg:px-[4%]">
      <div className="mx-auto max-w-[1500px]">
        <header className="mb-8 max-w-2xl">
          <h2 className="font-serif text-3xl font-bold uppercase sm:text-4xl">
            Explore our <span className="text-[var(--gold-bright)]">website</span>
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
            Browse Feather VFX services, selected work, studio information, and contact details.
          </p>
          <div className="mt-4 h-px w-12 bg-[var(--gold-primary)]" aria-hidden="true" />
        </header>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {sitemapGroups.map(({ title, Icon, image, links }) => (
            <section
              key={title}
              aria-label={title}
              className="group relative isolate min-h-[190px] overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)]"
            >
              <img
                src={image}
                alt=""
                loading="lazy"
                className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20 transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--bg-secondary)]/95 via-[var(--bg-secondary)]/85 to-[var(--bg-secondary)]/50"
                aria-hidden="true"
              />
              <div className="flex gap-4 p-4 sm:p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--gold-primary)] text-[var(--gold-bright)]">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-serif text-lg font-semibold uppercase text-[var(--text-primary)]">
                    {title}
                  </h3>
                  <ul className="mt-3 space-y-1.5">
                    {links.map(({ label, to }) => (
                      <li key={label}>
                        <Link
                          to={to}
                          className="inline-flex items-center gap-2 text-xs text-[var(--text-secondary)] transition-colors hover:text-[var(--gold-bright)]"
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

        <section
          aria-labelledby="global-locations-heading"
          className="relative isolate mt-5 overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 sm:p-7"
        >
          <div className="mb-5 flex items-center gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--gold-primary)] text-[var(--gold-bright)]">
              <Globe2 size={20} aria-hidden="true" />
            </span>
            <div>
              <h3 id="global-locations-heading" className="font-serif text-lg font-semibold uppercase text-[var(--text-primary)]">
                Markets &amp; verified <span className="text-[var(--gold-bright)]">client locations</span>
              </h3>
              <p className="mt-1 text-xs text-[var(--text-secondary)]">
                These are service markets and client locations, not Feather VFX office locations.
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {serviceMarkets.map(({ country, regions, productionHubs }) => (
              <section key={country} aria-label={`${country} markets`}>
                <h4 className="font-serif text-base font-semibold">{country} markets served</h4>
                <ul className="mt-2 space-y-2">
                  {regions.map(({ name, cities }) => (
                    <li key={name} className="text-sm leading-relaxed text-[var(--text-secondary)]">
                      <strong className="text-[var(--text-primary)]">{name}:</strong>{' '}
                      {cities.length ? cities.join(', ') : 'VFX outsourcing services'}
                    </li>
                  ))}
                </ul>
                {productionHubs && (
                  <p className="mt-2 text-sm text-[var(--text-secondary)]">
                    Production hubs: {productionHubs.join(' and ')}.
                  </p>
                )}
              </section>
            ))}
            <section aria-label="European client locations">
              <h4 className="font-serif text-base font-semibold">European client locations</h4>
              <ul className="mt-2 grid gap-x-4 gap-y-2 sm:grid-cols-2">
                {europeanClientLocations.map(({ country, cities }) => (
                  <li key={country} className="text-sm leading-relaxed text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">{country}:</strong> {cities.join(', ')}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </section>
      </div>
    </main>
  </>
);

export default Sitemap;
