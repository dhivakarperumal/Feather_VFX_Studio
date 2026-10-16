import { useRef, useState } from 'react';
import { ArrowRight, Box, Layers3, Paintbrush, Play, ScanFace } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageContainer from '../../CommonComponents/PageContainer';

const showreels = [
  {
    id: 'roto',
    title: 'Rotoscoping',
    description: 'Clean and detailed rotoscoping work for film, OTT and commercial projects.',
    video: '/images/videos/rotoscope-showreel.mp4',
    image: '/images/projects/featured/4.jpg',
    Icon: ScanFace,
  },
  {
    id: 'prep',
    title: 'Paint and Prep',
    description: 'Wire removal, object cleanup and high quality paint work for seamless visuals.',
    video: '/images/videos/prep-cleanup-showreel.mp4',
    image: '/images/projects/featured/5.jpg',
    Icon: Paintbrush,
  },
  {
    id: 'matchmove',
    title: 'Matchmove',
    description: 'Accurate 3D camera tracking and matchmoving for realistic integration.',
    video: '/images/videos/matchmove-showreel.mp4',
    image: '/images/projects/featured/7.jpg',
    Icon: Box,
  },
  {
    id: 'compositing',
    title: 'Compositing',
    description: 'Stunning compositing work that brings elements together seamlessly.',
    video: '/images/videos/compositing-showreel.mp4',
    image: '/images/projects/featured/1.jpg',
    Icon: Layers3,
  },
];

function ShowreelPage() {
  const [selectedReel, setSelectedReel] = useState(showreels[3]);
  const playerRef = useRef(null);

  const selectReel = (reel) => {
    setSelectedReel(reel);
    playerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="overflow-hidden bg-[#fffdfa] text-[#191a1c]">
      <section className="relative isolate min-h-[370px]">
        <img
          src="/images/heroimages/Dragon Over the Sunset Kingdom.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#fffdfa] via-[#fffdfa]/95 to-[#fffdfa]/15" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#fffdfa] via-transparent to-white/10" />

        <PageContainer className="relative flex min-h-[370px] items-center py-10 sm:py-12">
          <div className="max-w-xl">
            <nav aria-label="Breadcrumb" className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#858585]">
              <Link className="transition-colors hover:text-[#c77a00]" to="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page" className="text-[#c77a00]">Showreel</span>
            </nav>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#c77a00]">
              Feather VFX Studio
            </p>
            <h1 className="font-serif text-4xl font-bold leading-[1.05] text-[#17191b] sm:text-5xl lg:text-6xl">
              Our Showreel
            </h1>
            <p className="mt-1 font-serif text-xl font-semibold leading-tight text-[#c77a00] sm:text-2xl lg:text-3xl">
              Bringing Creative Visions to Life
            </p>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#52565a]">
              Explore the Feather VFX showreel and discover our expertise in visual effects for film and television. From seamless compositing and detailed paint and prep to precise rotoscoping and camera tracking, our team delivers high-quality visuals with creativity and attention to detail.
            </p>
            <p className="mt-3 text-xs font-semibold text-[#26292c]">
              Watch our work. Discover our capabilities. Imagine the possibilities.
            </p>
          </div>
        </PageContainer>
      </section>

      <section className="relative z-10 -mt-8 pb-10 sm:-mt-12">
        <PageContainer>
          <div
            id="featured-showreel"
            ref={playerRef}
            className="mx-auto max-w-4xl overflow-hidden rounded-xl border-[3px] border-white bg-black shadow-[0_18px_45px_rgba(35,28,18,0.25)]"
          >
            <video
              key={selectedReel.id}
              controls
              preload="metadata"
              poster="/images/heroimages/Dragon Over the Sunset Kingdom.png"
              aria-label={`${selectedReel.title} showreel`}
              className="block aspect-[2.35/1] w-full bg-black object-cover"
            >
              <source src={selectedReel.video} type="video/mp4" />
              Your browser does not support the video element.
            </video>
          </div>
        </PageContainer>
      </section>

      <section className="pb-8 pt-1 sm:pb-10">
        <PageContainer>
          <div className="mx-auto mb-5 max-w-2xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c77a00]">Our expertise</p>
            <h2 className="mt-0.5 font-serif text-3xl font-bold leading-tight text-[#17191b] sm:text-4xl">Showreels</h2>
            <p className="mt-1 text-xs leading-relaxed text-[#60656a]">
              Explore our specialised showreels showcasing the key areas of our VFX expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {showreels.map(({ id, title, description, image, Icon }, index) => (
              <article
                key={id}
                className="showreel-expertise-card group relative isolate min-h-[172px] overflow-hidden rounded-xl border border-[#eadfce] bg-white p-4 shadow-[0_5px_16px_rgba(54,39,15,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_26px_rgba(54,39,15,0.13)]"
              >
                <img
                  src={image}
                  alt=""
                  aria-hidden="true"
                  className="absolute right-0 top-0 -z-10 h-full w-3/5 object-cover object-center opacity-[0.12] transition-opacity duration-300 group-hover:opacity-20"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/95 to-white/40" />
                <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full border border-[#d58a0b] text-[#c77a00]">
                  <Icon aria-hidden="true" size={18} strokeWidth={1.8} />
                </div>
                <h3 className="font-serif text-lg font-bold leading-tight text-[#202124]">{title}</h3>
                <p className="mt-1.5 min-h-9 max-w-[15rem] text-xs leading-relaxed text-[#62666a]">{description}</p>
                <button
                  type="button"
                  onClick={() => selectReel(showreels[index])}
                  className="mt-2 inline-flex items-center gap-2 text-[11px] font-semibold text-[#bd7300] transition-colors hover:text-[#8f5400] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bd7300]"
                  aria-label={`Watch ${title} showreel`}
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-current">
                    <Play aria-hidden="true" size={10} fill="currentColor" />
                  </span>
                  Watch Showreel
                  <ArrowRight aria-hidden="true" size={13} />
                </button>
              </article>
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="px-[4%] pb-6 pt-1">
        <div className="relative mx-auto flex max-w-[1700px] flex-col items-center justify-between gap-5 overflow-hidden rounded-2xl border border-[#f0d7a9] bg-gradient-to-r from-[#f7e6c8] via-[#fff9ee] to-[#f1d9b4] px-6 py-6 text-center sm:flex-row sm:px-10 sm:text-left lg:px-16">
          <div className="pointer-events-none absolute -left-5 -top-16 h-48 w-48 rounded-full border-[14px] border-[#c77a00]/10 sm:h-64 sm:w-64" />
          <div className="relative">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b86c00]">Let&apos;s create together</p>
            <h2 className="mt-1 font-serif text-2xl font-bold leading-tight text-[#202124] sm:text-3xl">
              Have a project in mind?
            </h2>
            <p className="mt-1 text-xs text-[#5c6064]">Contact us to discuss how we can support your next production.</p>
          </div>
          <Link
            to="/contact"
            className="relative inline-flex shrink-0 items-center gap-2 rounded-full bg-[#c77a00] px-6 py-3 text-xs font-semibold text-white shadow-md shadow-[#9b5d00]/20 transition hover:bg-[#a96500] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a96500]"
          >
            Discuss Your Project
            <ArrowRight aria-hidden="true" size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ShowreelPage;
