import {
  ArrowRight,
  Box,
  Layers3,
  Paintbrush,
  Play,
  ScanFace,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../../CommonComponents/PageHeader';

const showreels = [
  {
    id: 'roto',
    title: 'Rotoscoping',
    description:
      'Clean and detailed rotoscoping work for film, OTT and commercial projects.',
    video: '/images/videos/rotoscope-showreel.mp4',
    Icon: ScanFace,
  },
  {
    id: 'prep',
    title: 'Paint and Prep',
    description:
      'Wire removal, object cleanup and high quality paint work for seamless visuals.',
    video: '/images/videos/prep-cleanup-showreel.mp4',
    Icon: Paintbrush,
  },
  {
    id: 'matchmove',
    title: 'Matchmove',
    description:
      'Accurate 3D camera tracking and matchmoving for realistic integration.',
    video: '/images/videos/matchmove-showreel.mp4',
    Icon: Box,
  },
  {
    id: 'compositing',
    title: 'Compositing',
    description:
      'Stunning compositing work that brings elements together seamlessly for breathtaking results.',
    video: '/images/videos/compositing-showreel.mp4',
    Icon: Layers3,
  },
];

const SHOWREEL_POSTER = '/images/videos/showreel-poster.png';

function ShowreelPage() {
  return (
    <div className="overflow-hidden bg-[#fffdfa] text-[#191a1c]">
      <PageHeader
        eyebrow="Feather VFX Studio"
        title={<>Our <span className="text-[#E5A544]">Showreel</span></>}
        titleSize="text-2xl sm:text-3xl md:text-4xl"
        breadcrumbLabel="Showreel"
        background="/images/heroimages/Dragon Over the Sunset Kingdom.png"
        align="left"
      >
        <a
          href="#showreels"
          className="mt-5 inline-flex min-h-11 items-center gap-3 border border-[var(--gold-bright)] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[var(--gold-bright)] transition-colors hover:bg-[var(--gold-bright)] hover:text-[#17191b] focus-visible:bg-[var(--gold-bright)] focus-visible:text-[#17191b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <Play size={14} fill="currentColor" aria-hidden="true" />
          Play showreel
        </a>
      </PageHeader>

      <section id="showreels" className="scroll-mt-24 px-[4%] pb-10 pt-8 sm:pb-14 sm:pt-12">
        <div className="mx-auto max-w-[1100px]">
          <header className="mx-auto mb-8 max-w-2xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c77a00]">
              Our Expertise
            </p>

            <h2 className="mt-0.5 font-serif text-3xl font-bold leading-tight text-[#17191b] sm:text-4xl">
              Showreels
            </h2>

            <p className="mt-1 text-sm leading-relaxed text-[#60656a] sm:text-[15px]">
              Watch our specialised showreels, presented one by one.
            </p>
          </header>

          <div className="flex flex-col gap-8 sm:gap-10">
            {showreels.map(({ id, title, description, video, Icon }, index) => (
              <article
                key={id}
                className="overflow-hidden rounded-xl border border-[#eadfce] bg-white shadow-[0_5px_16px_rgba(54,39,15,0.07)]"
              >
                <div className="flex items-start gap-3 px-4 py-4 sm:px-6">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d58a0b] text-[#c77a00]">
                    <Icon size={21} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#c77a00]">
                      Showreel {index + 1}
                    </p>
                    <h3 className="mt-1 font-serif text-xl font-bold leading-tight text-[#202124] sm:text-2xl">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#62666a]">
                      {description}
                    </p>
                  </div>
                </div>
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster={SHOWREEL_POSTER}
                  aria-label={`${title} showreel`}
                  className="block aspect-video w-full bg-white object-contain"
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video element.
                </video>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="px-[4%] pb-5 pt-1">
        <div className="relative mx-auto flex max-w-[1700px] flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border border-[#f0d7a9] bg-gradient-to-r from-[#f7e6c8] via-[#fff9ee] to-[#f1d9b4] px-5 py-6 text-center sm:min-h-[118px] sm:flex-row sm:gap-8 sm:px-10 sm:py-4">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-10 -top-12 hidden h-56 w-56 rounded-full border-[14px] border-[#c77a00]/10 sm:block"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-12 hidden h-56 w-56 rounded-full border-[14px] border-[#c77a00]/10 sm:block"
          />

          <div className="relative">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b86c00]">
              Let&apos;s Create Together
            </p>

            <h2 className="mt-1 font-serif text-2xl font-bold leading-tight text-[#202124] sm:text-3xl">
              Have a <span className="text-[#c77a00]">project</span>{' '}
              in mind?
            </h2>

            <p className="mt-1 text-xs text-[#5c6064]">
              Contact us to discuss how we can support your next
              production.
            </p>
          </div>

          <Link
            to="/contact"
            className="relative inline-flex shrink-0 items-center gap-2 rounded-full bg-[#c77a00] px-6 py-3 text-xs font-semibold text-white shadow-md shadow-[#9b5d00]/20 transition-all hover:-translate-y-0.5 hover:bg-[#a96500] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a96500]"
          >
            Discuss Your Project
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
    
  );
}

export default ShowreelPage;
