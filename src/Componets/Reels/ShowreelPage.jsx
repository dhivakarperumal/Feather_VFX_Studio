import { useRef, useState, useEffect } from 'react';
import {
  ArrowRight,
  Box,
  Layers3,
  Paintbrush,
  Play,
  ScanFace,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageContainer from '../../CommonComponents/PageContainer';
import PageHeader from '../../CommonComponents/PageHeader';

const showreels = [
  {
    id: 'roto',
    title: 'Rotoscoping',
    description:
      'Clean and detailed rotoscoping work for film, OTT and commercial projects.',
    video: '/images/videos/rotoscope-showreel.mp4',
    image: '/images/projects/featured/4.jpg',
    Icon: ScanFace,
  },
  {
    id: 'prep',
    title: 'Paint and Prep',
    description:
      'Wire removal, object cleanup and high quality paint work for seamless visuals.',
    video: '/images/videos/prep-cleanup-showreel.mp4',
    image: '/images/projects/featured/5.jpg',
    Icon: Paintbrush,
  },
  {
    id: 'matchmove',
    title: 'Matchmove',
    description:
      'Accurate 3D camera tracking and matchmoving for realistic integration.',
    video: '/images/videos/matchmove-showreel.mp4',
    image: '/images/projects/featured/7.jpg',
    Icon: Box,
  },
  {
    id: 'compositing',
    title: 'Compositing',
    description:
      'Stunning compositing work that brings elements together seamlessly for breathtaking results.',
    video: '/images/videos/compositing-showreel.mp4',
    image: '/images/projects/featured/1.jpg',
    Icon: Layers3,
  },
];

const HERO_IMAGE =
  '/images/heroimages/Dragon Over the Sunset Kingdom.png';

function ShowreelPage() {
  const [selectedReel, setSelectedReel] = useState(showreels[3]);
  const [shouldPlay, setShouldPlay] = useState(false);

  const playerSectionRef = useRef(null);
  const videoRef = useRef(null);

  const selectReel = (reel) => {
    setSelectedReel(reel);
    setShouldPlay(true);

    requestAnimationFrame(() => {
      playerSectionRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    });
  };

  useEffect(() => {
    if (!shouldPlay || !videoRef.current) return;

    const video = videoRef.current;
    let cancelled = false;

    const playVideo = async () => {
      try {
        await video.play();
      } catch {
        // Autoplay may be blocked by the browser.
      } finally {
        if (!cancelled) setShouldPlay(false);
      }
    };

    if (video.readyState >= 2) {
      playVideo();
    } else {
      video.addEventListener('loadeddata', playVideo, { once: true });
    }

    return () => {
      cancelled = true;
      video.removeEventListener('loadeddata', playVideo);
    };
  }, [selectedReel, shouldPlay]);

  return (
    <div className="overflow-hidden bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <PageHeader
        eyebrow="Feather VFX Studio"
        title="Our Showreel"
        background="/images/heroimages/Dragon Over the Sunset Kingdom.png"
        description="Explore the Feather VFX showreel and discover our expertise in visual effects for film and television. From seamless compositing and detailed paint and prep to precise rotoscoping and camera tracking, our team delivers high-quality visuals with creativity and attention to detail."
        align="left"
        showBreadcrumb={false}
        className="min-h-[370px]"
      >
        <p className="mt-3 text-xs font-semibold text-[var(--text-primary)]">
          Bringing Creative Visions to Life. Watch our work. Discover our capabilities. Imagine the possibilities.
        </p>
      </PageHeader>

      {/* MAIN VIDEO PLAYER */}
      <section
        ref={playerSectionRef}
        className="relative z-10 mt-8 pb-8 sm:mt-12 sm:pb-10"
      >
        <PageContainer>
          <div className="mx-auto w-full max-w-[1000px] overflow-hidden rounded-xl border-[4px] border-white bg-black shadow-[0_18px_45px_rgba(35,28,18,0.22)] sm:rounded-2xl">
            <video
              key={selectedReel.id}
              ref={videoRef}
              controls
              playsInline
              preload="metadata"
              poster={HERO_IMAGE}
              // onLoadedData={handleVideoLoaded}
              // onCanPlay={handleVideoLoaded}
              aria-label={`${selectedReel.title} showreel`}
              className="block aspect-video max-h-[580px] w-full bg-black object-contain sm:max-h-[620px]"
            >
              <source src={selectedReel.video} type="video/mp4" />
              Your browser does not support the video element.
            </video>
          </div>
        </PageContainer>
      </section>

      {/* SHOWREEL EXPERTISE CARDS */}
      <section className="pb-8 pt-2 sm:pb-10">
        <PageContainer>
          <header className="mx-auto mb-6 max-w-2xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c77a00]">
              Our Expertise
            </p>

            <h2 className="mt-0.5 font-serif text-3xl font-bold leading-tight text-[var(--text-primary)] sm:text-4xl">
              Showreels
            </h2>

            <p className="mt-1 text-xs leading-relaxed text-[var(--text-secondary)] sm:text-[13px]">
              Explore our specialised showreels showcasing the key
              areas of our VFX expertise.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {showreels.map(({ id, title, description, image, Icon }) => (
              <article
                key={id}
                className="showreel-expertise-card group relative isolate flex min-h-[190px] flex-col overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 shadow-[0_5px_16px_rgba(54,39,15,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_26px_rgba(54,39,15,0.13)]"
              >
                <img
                  src={image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="pointer-events-none absolute right-0 top-0 -z-20 h-full w-[68%] object-cover object-center opacity-[0.17] transition-all duration-500 group-hover:scale-105 group-hover:opacity-[0.25]"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[var(--bg-secondary)] via-[var(--bg-secondary)]/90 to-[var(--bg-secondary)]/35"
                />

                <div className="mb-2 flex h-[47px] w-[47px] items-center justify-center rounded-full border-[1.5px] border-[var(--gold-primary)] text-[var(--gold-primary)] transition-all duration-300 group-hover:bg-[var(--gold-primary)] group-hover:text-[var(--bg-primary)]">
                  <Icon size={23} strokeWidth={1.7} />
                </div>

                <h3 className="font-serif text-lg font-bold leading-tight text-[var(--text-primary)]">
                  {title}
                </h3>

                <p className="mt-1.5 text-xs leading-[1.5] text-[var(--text-secondary)]">
                  {description}
                </p>

                <button
                  type="button"
                  onClick={() => selectReel(showreels.find((reel) => reel.id === id))}
                  className="mt-auto inline-flex w-fit items-center gap-2 pt-4 text-[11px] font-semibold text-[var(--gold-primary)] transition-colors hover:text-[var(--gold-bright)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold-primary)]"
                  aria-label={`Play ${title} in the main showreel player`}
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-current transition-colors group-hover:bg-[var(--gold-primary)] group-hover:text-[var(--bg-primary)]">
                    <Play size={11} fill="currentColor" />
                  </span>

                  Watch Showreel

                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </article>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* CONTACT CTA */}
      <section className="px-[4%] pb-5 pt-1">
        <div className="showreel-contact-cta relative mx-auto flex max-w-[1700px] flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl px-5 py-6 text-center sm:min-h-[118px] sm:flex-row sm:gap-8 sm:px-10 sm:py-4">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-10 -top-12 hidden h-56 w-56 rounded-full border-[14px] border-[var(--gold-primary)]/10 sm:block"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-12 hidden h-56 w-56 rounded-full border-[14px] border-[var(--gold-primary)]/10 sm:block"
          />

          <div className="relative">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--gold-primary)]">
              Let&apos;s Create Together
            </p>

            <h2 className="mt-1 font-serif text-2xl font-bold leading-tight text-[var(--text-primary)] sm:text-3xl">
              Have a <span className="text-[var(--gold-bright)]">project</span>{' '}
              in mind?
            </h2>

            <p className="mt-1 text-xs text-[var(--text-secondary)]">
              Contact us to discuss how we can support your next
              production.
            </p>
          </div>

          <Link
            to="/contact"
            className="relative inline-flex shrink-0 items-center gap-2 rounded-full bg-[var(--gold-primary)] px-6 py-3 text-xs font-semibold text-[var(--bg-primary)] shadow-md shadow-[#9b5d00]/20 transition-all hover:-translate-y-0.5 hover:bg-[var(--gold-bright)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold-primary)]"
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
