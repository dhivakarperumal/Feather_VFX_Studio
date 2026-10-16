import { useState } from 'react';
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  Layers3,
  ScanLine,
  Sparkles,
  WandSparkles,
} from 'lucide-react';

const serviceDetails = {
  Rotoscoping: {
    icon: ScanLine,
    points: ['VFX Roto', 'Stereo Roto', 'Green/Blue Screen Keying', 'Matte Extraction'],
  },
  'Paint & Prep': {
    icon: WandSparkles,
    points: [
      'Wire Removal',
      'Rig Removal',
      'Camera and Reflection Removal',
      'Object Removal',
      'Clean Plate Creation',
      'Dust and Scratch Removal',
    ],
  },
  'Cosmetic VFX': {
    icon: Sparkles,
    points: [
      'Tattoo Cleanup',
      "Wrinkle and Crow's Feet Cleanup",
      'Beard and Hair Removal',
      'Acne Scar and Age Spot Removal',
      'Digital Beauty Makeup',
    ],
  },
  Matchmove: {
    icon: Camera,
    points: ['Camera Tracking', 'Object and Layout Tracking', '2D Tracking'],
  },
  Compositing: {
    icon: Layers3,
    points: [
      'Crowd Duplication',
      'Monitor Screen Compositing',
      'Mobile Screen Compositing',
      'Set Extensions',
    ],
  },
};

const reverseComparisonServices = ['Rotoscoping', 'Matchmove', 'Cosmetic VFX'];

const VFXServiceCard = ({ service }) => {
  const [comparisonPosition, setComparisonPosition] = useState(50);
  const { icon: Icon, points } = serviceDetails[service.title];
  const outputImage = service.image.replace('_IN.jpg', '_OUT.jpg').replace('-IN.jpg', '-OUT.jpg');
  const reverseComparison = reverseComparisonServices.includes(service.title);
  const firstImage = reverseComparison ? outputImage : service.image;
  const secondImage = reverseComparison ? service.image : outputImage;

  return (
    <article className="group grid h-[460px] overflow-hidden rounded-sm border border-[var(--border-color)] bg-[var(--bg-secondary)] transition-colors duration-300 hover:border-[var(--gold-primary)] md:h-[300px] md:grid-cols-2">
      <div className="service-comparison relative h-full overflow-hidden">
        <img
          src={firstImage}
          alt={`${service.title} before`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 0 0 ${comparisonPosition}%)` }}
        >
          <img
            src={secondImage}
            alt={`${service.title} after`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <span className="pointer-events-none absolute left-3 top-3 z-10 rounded-sm bg-[var(--text-primary)]/75 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[var(--bg-primary)]">
          Before
        </span>
        <span className="pointer-events-none absolute right-3 top-3 z-10 rounded-sm bg-[var(--gold-primary)] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[var(--bg-primary)]">
          After
        </span>
        <span
          className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-[var(--gold-primary)] shadow-[0_0_8px_rgba(0,0,0,0.3)]"
          style={{ left: `${comparisonPosition}%` }}
          aria-hidden="true"
        >
          <span className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-[var(--gold-primary)] bg-[var(--bg-primary)]/90 text-[var(--text-primary)] shadow-lg">
            <span className="flex items-center">
              <ChevronLeft size={14} />
              <ChevronRight size={14} />
            </span>
          </span>
        </span>
        <input
          type="range"
          min="0"
          max="100"
          value={comparisonPosition}
          onChange={(event) => setComparisonPosition(Number(event.target.value))}
          aria-label={`Compare before and after for ${service.title}`}
          aria-valuetext={`${comparisonPosition}% before, ${100 - comparisonPosition}% after`}
          className="service-comparison__range absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>

      <div className="flex h-full items-start gap-5 bg-[var(--bg-secondary)] px-6 py-6 sm:px-8">
        <div className="mt-1 shrink-0">
          <Icon className="h-9 w-9 text-[var(--gold-primary)]" strokeWidth={1.35} aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-serif text-2xl font-bold uppercase leading-tight tracking-wide text-[var(--text-primary)] sm:text-3xl">
            {service.title}
          </h3>
          <span className="mt-2 mb-4 block h-[2px] w-10 bg-[var(--gold-primary)]" aria-hidden="true" />
          <ul className="flex flex-col gap-2.5">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm leading-snug text-[var(--text-secondary)] sm:text-base">
                <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold-primary)]" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default VFXServiceCard;
