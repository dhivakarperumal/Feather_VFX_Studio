import { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Globe2,
  Layers3,
  ScanLine,
  Sparkles,
  WandSparkles,
} from 'lucide-react';

const serviceDetails = {
  Rotoscoping: {
    icon: ScanLine,
    points: ['VFX roto', 'Stereo roto', 'Green/blue keying', 'Matte extraction'],
  },
  'Paint & Prep': {
    icon: WandSparkles,
    points: ['Wire removals', 'Rig removals', 'Camera/reflection removals', 'Clean plate creation'],
  },
  'Cosmetic VFX': {
    icon: Sparkles,
    points: ['Tattoo clean-ups', 'Wrinkle and crew clean-ups', 'Beard and hair removals', 'Digital beauty'],
  },
  Matchmove: {
    icon: Globe2,
    points: ['Camera tracking', 'Object and layout tracking', '2D tracking', '3D tracking'],
  },
  Compositing: {
    icon: Layers3,
    points: ['Crowd duplication', 'Multi-layer composites', 'Match, color and grain', 'Set extension'],
  },
};

const reversedComparisonServices = ['Rotoscoping', 'Matchmove', 'Cosmetic VFX'];

const VFXServiceCard = ({ service }) => {
  const [comparisonPosition, setComparisonPosition] = useState(50);
  const details = serviceDetails[service.title];
  const Icon = details.icon;
  const outputImage = service.image.replace('_IN.jpg', '_OUT.jpg').replace('-IN.jpg', '-OUT.jpg');
  const reverseComparison = reversedComparisonServices.includes(service.title);
  const firstImage = reverseComparison ? outputImage : service.image;
  const secondImage = reverseComparison ? service.image : outputImage;
  const firstLabel = 'SOURCE';
  const secondLabel = 'OUTPUT';

  return (
    <article className="group flex h-full flex-col overflow-hidden border border-[#b8852f]/45 bg-[#080b0c]/95 transition-colors duration-300 hover:border-[#e8b14f]/80">
      <div className="service-comparison relative aspect-[16/10] min-h-[190px] shrink-0 overflow-hidden sm:min-h-[210px]">
        <img
          src={firstImage}
          alt={`${service.title} ${firstLabel} image`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 0 0 ${comparisonPosition}%)` }}
        >
          <img
            src={secondImage}
            alt={`${service.title} ${secondLabel} image`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <span className="pointer-events-none absolute bottom-2 left-2 z-10 bg-black/75 px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.16em] text-white/85">
          {firstLabel}
        </span>
        <span className="pointer-events-none absolute bottom-2 right-2 z-10 bg-black/75 px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.16em] text-[#f2c56e]">
          {secondLabel}
        </span>
        <span
          className="service-comparison__divider pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.7)]"
          style={{ left: `${comparisonPosition}%` }}
          aria-hidden="true"
        >
          <span className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white bg-black/75 text-white shadow-lg">
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
          aria-label={`Compare source and output for ${service.title}`}
          aria-valuetext={`${comparisonPosition}% source, ${100 - comparisonPosition}% output`}
          className="service-comparison__range absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>

      <div className="flex flex-1 flex-col px-4 py-5 sm:px-5 lg:px-6">
        <div className="flex items-center gap-3">
          <Icon className="h-5 w-5 shrink-0 text-[#efb64e]" strokeWidth={1.7} aria-hidden="true" />
          <h3 className="font-serif text-lg font-bold uppercase leading-tight text-white sm:text-xl">
            {service.title}
          </h3>
        </div>
        <p className="mt-2 text-xs leading-relaxed text-white/65">{service.description}</p>
        <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5">
          {details.points.map((point) => (
            <li key={point} className="flex items-start gap-1.5 text-[10px] leading-snug text-white/80">
              <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[#e6ad47]" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default VFXServiceCard;
