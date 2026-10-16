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
      { label: 'Services', to: '/services' },
      { label: 'Showreel', to: '/showreel' },
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
];

const globalLocations = [
  ['Argentina', 'argentina'],
  ['Australia', 'australia'],
  ['Austria', 'austria'],
  ['Belgium', 'belgium'],
  ['Brazil', 'brazil'],
  ['Bulgaria', 'bulgaria'],
  ['Canada', 'canada'],
  ['Czech Republic', 'czech-republic'],
  ['Denmark', 'denmark'],
  ['Finland', 'finland'],
  ['France', 'france'],
  ['Germany', 'germany'],
  ['Greece', 'greece'],
  ['Greenland', 'greenland'],
  ['Hungary', 'hungary'],
  ['Iceland', 'iceland'],
  ['Ireland', 'ireland'],
  ['Italy', 'italy'],
  ['Mexico', 'mexico'],
  ['Netherlands', 'netherlands'],
  ['New Zealand', 'new-zealand'],
  ['Norway', 'norway'],
  ['Poland', 'poland'],
  ['Portugal', 'portugal'],
  ['Romania', 'romania'],
  ['Spain', 'spain'],
  ['Sweden', 'sweden'],
  ['Switzerland', 'switzerland'],
  ['Turkey', 'turkey'],
  ['Ukraine', 'ukraine'],
  ['United Kingdom', 'united-kingdom'],
  ['United States', 'united-states'],
  ['London', 'london'],
  ['Brighton', 'brighton'],
  ['Bristol', 'bristol'],
  ['Cambridge', 'cambridge'],
  ['Guildford', 'guildford'],
  ['Liverpool', 'liverpool'],
  ['Manchester', 'manchester'],
  ['Nottingham', 'nottingham'],
  ['Glasgow', 'glasgow'],
  ['Birmingham', 'birmingham%C2%A0'],
  ['Atlanta', 'atlanta'],
  ['Austin', 'austin'],
  ['Baltimore', 'baltimore'],
  ['Bellevue', 'bellevue'],
  ['Boston', 'boston'],
  ['Brisbane', 'brisbane'],
  ['Brooklyn', 'brooklyn'],
  ['Burbank', 'burbank'],
  ['Chicago', 'chicago'],
  ['Culver City', 'culver-city'],
  ['Denver', 'denver'],
  ['Las Vegas', 'las-vegas'],
  ['Los Angeles', 'los-angeles'],
  ['Miami', 'miami'],
  ['New York City', 'new-york-city'],
  ['Orlando', 'orlando'],
  ['Pittsburgh', 'pittsburgh'],
  ['San Diego', 'san-diego'],
  ['San Francisco', 'san-francisco'],
  ['Santa Monica', 'santa-monica'],
  ['Seattle', 'seattle'],
  ['Angoulême', 'angoul%C3%AAme'],
  ['Lyon', 'lyon'],
  ['Paris', 'paris'],
  ['Vancouver', 'vancouver'],
  ['Halifax', 'halifax'],
  ['Ottawa', 'ottawa'],
  ['St Catharines', 'st-catharines'],
  ['Toronto', 'toronto'],
  ['Montreal', 'montreal'],
  ['Québec', 'qu%C3%A9bec'],
  ['Quebec City', 'quebec-city'],
  ['Barcelona', 'barcelona'],
  ['Madrid', 'madrid'],
  ['Valencia', 'valencia'],
  ['Gdansk', 'gdansk'],
  ['Krakow', 'krakow'],
  ['Warsaw', 'warsaw'],
  ['Rzeszów', 'rzesz%C3%B3w'],
  ['Wrocław', 'wroc%C5%82aw'],
  ['Berlin', 'berlin'],
  ['Munich', 'munich'],
  ['Cologne', 'cologne'],
  ['Düsseldorf', 'd%C3%BCsseldorf'],
  ['Frankfurt', 'frankfurt'],
  ['Hamburg', 'hamburg'],
  ['Ludwigsburg', 'ludwigsburg'],
  ['Stuttgart', 'stuttgart'],
  ['Guadalajara', 'guadalajara'],
  ['Mexicali', 'mexicali'],
  ['Mexico City', 'mexico-city'],
  ['Toluca', 'toluca'],
  ['Tuxtla Gutierrez', 'tuxtla-gutierrez'],
  ['Adelaide', 'adelaide'],
  ['Melbourne', 'melbourne'],
  ['Sydney', 'sydney'],
  ['Belfast', 'belfast'],
  ['Dublin', 'dublin'],
  ['Galway', 'galway'],
  ['Kilkenny', 'kilkenny'],
  ['Gothenburgh', 'gothenburgh'],
  ['Malmö', 'malm%C3%B6'],
  ['Stockholm', 'stockholm'],
  ['Budapest', 'budapest'],
  ['Auckland', 'auckland'],
  ['Dunedin', 'dunedin'],
  ['Wellington', 'wellington'],
];

const Sitemap = () => (
  <>
    <PageHeader
      eyebrow="Our navigation"
      title="Sitemap"
      description="Find your way around Feather VFX Studio."
      background="/images/heroimages/3.png"
      align="left"
    >
      <a
        href="#sitemap-links"
        className="mt-5 inline-flex items-center gap-3 bg-[var(--gold-primary)] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--bg-primary)] transition-colors hover:bg-[var(--gold-bright)]"
      >
        Explore site
        <span aria-hidden="true">↓</span>
      </a>
    </PageHeader>
    <main id="sitemap-links" className="scroll-mt-24 relative isolate overflow-hidden bg-[var(--bg-primary)] px-[5%] py-12 text-[var(--text-primary)] sm:py-16 lg:px-[4%]">
      <div className="mx-auto max-w-[1500px]">
        <header className="mb-8 max-w-2xl">
          <h2 className="font-serif text-3xl font-bold uppercase sm:text-4xl">
            Explore our <span className="text-[var(--gold-bright)]">website</span>
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
            Find everything you need about Feather VFX Studio. Browse our work, services, team, and more.
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
                Global <span className="text-[var(--gold-bright)]">Locations</span>
              </h3>
              <p className="mt-1 text-xs text-[var(--text-secondary)]">{globalLocations.length} countries and cities</p>
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {globalLocations.map(([label, slug]) => (
              <li key={slug}>
                <a
                  href={`https://feathervfx.com/${slug}`}
                  className="inline-flex items-start gap-2 text-xs text-[var(--text-secondary)] transition-colors hover:text-[var(--gold-bright)]"
                >
                  <span className="text-[var(--gold-primary)]" aria-hidden="true">›</span>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  </>
);

export default Sitemap;
