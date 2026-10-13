import { FaClapperboard, FaCube, FaLayerGroup, FaWandMagicSparkles } from 'react-icons/fa6';

const cinematicImage = (photoId) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=2400&q=85`;

export const heroSlides = [
  {
    eyebrow: 'Visual effects | CGI | Post-production',
    title: 'Imagining worlds.',
    highlight: 'Creating reality.',
    description:
      'We are a creative visual effects studio crafting breathtaking worlds through VFX, CGI, compositing and post-production.',
    image: cinematicImage('photo-1462331940025-496dfbfc7564'),
    highlights: [
      { value: 'VFX', label: 'Visual effects' },
      { value: 'CGI', label: 'Digital worlds' },
      { value: 'FINISH', label: 'Final polish' },
    ],
  },
  {
    eyebrow: 'Designed for the big screen',
    title: 'Make every frame',
    highlight: 'feel cinematic.',
    description:
      'From the first concept to the final composite, we help filmmakers bring ambitious visual stories to life.',
    image: cinematicImage('photo-1534796636912-3b95b3ab5986'),
    highlights: [
      { value: 'DESIGN', label: 'Creative vision' },
      { value: 'CRAFT', label: 'Pixel precision' },
      { value: 'IMPACT', label: 'Screen-ready' },
    ],
  },
  {
    eyebrow: 'Seamless by design',
    title: 'Invisible artistry.',
    highlight: 'Unforgettable worlds.',
    description:
      'Build believable environments and seamless shots with thoughtful matchmove, paint-prep and compositing.',
    image: cinematicImage('photo-1519608487953-e999c86e7455'),
    highlights: [
      { value: 'TRACK', label: 'Matchmove' },
      { value: 'REFINE', label: 'Paint-prep' },
      { value: 'BLEND', label: 'Compositing' },
    ],
  },
  {
    eyebrow: 'The details make the difference',
    title: 'Precision in every',
    highlight: 'single pixel.',
    description:
      'Our artists bring focus and care to every cleanup, cosmetic fix and finishing pass.',
    image: cinematicImage('photo-1518709268805-4e9042af9f23'),
    highlights: [
      { value: 'CLEAN', label: 'Careful cleanup' },
      { value: 'POLISH', label: 'Cosmetic fixes' },
      { value: 'FINISH', label: 'Final delivery' },
    ],
  },
  {
    eyebrow: 'Your creative post-production partner',
    title: 'Big ideas.',
    highlight: 'Built together.',
    description:
      'Partner with Feather VFX Studio for collaborative visual effects and post-production from start to finish.',
    image: cinematicImage('photo-1470225620780-dba8ba36b745'),
    highlights: [
      { value: 'IDEATE', label: 'Plan together' },
      { value: 'CREATE', label: 'Craft each shot' },
      { value: 'DELIVER', label: 'Ready to release' },
    ],
  },
];

export const heroCapabilities = [
  { title: 'VFX & CGI', subtitle: 'Real worlds. Beyond reality.', Icon: FaWandMagicSparkles },
  { title: 'Compositing', subtitle: 'Seamless integration.', Icon: FaLayerGroup },
  { title: '3D Environments', subtitle: 'Worlds without limits.', Icon: FaCube },
  { title: 'Color & Finishing', subtitle: 'The perfect look.', Icon: FaClapperboard },
];
