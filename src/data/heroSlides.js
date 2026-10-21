import { FaClapperboard, FaCube, FaFaceSmile, FaLayerGroup, FaWandMagicSparkles } from 'react-icons/fa6';

const heroImage = (filename) =>
  `/images/slider/${encodeURIComponent(filename)}`;

export const heroSlides = [
  {
    message: 'Projects Delivered on Time and Within Budget',
    image: heroImage('1.jpg'),
  },
  {
    message: 'We Create the Extraordinary',
    singleLine: true,
    image: heroImage('2.jpg'),
  },
  {
    message:
      'Films, TV Commercials, Web Videos, Music Videos, Corporate Videos, and TV Shows',
    supportingMessage: 'Content creators and Collaborators',
    compactMessage: true,
    image: heroImage('3.jpg'),
  },
  {
    message: 'Feather, Great Work Gets Delivered',
    image: heroImage('4.jpg'),
  },
  {
    message: 'International Space Station',
    image: heroImage('hero1.png'),
    responsiveImage: heroImage('hero1_res.jpg'),
  },
  {
    message: 'Carter',
    image: heroImage('hero2.png'),
    responsiveImage: heroImage('hero2_res.png'),
  },
  {
    message: '2021 Oscars Predictions "One Night in Miami"',
    supportingMessage: 'Roto - Paint - Matchmove | 200+ shots completed',
    compactSupportingMessage: true,
    image: heroImage('hero.webp'),
  },
];

export const heroCapabilities = [
  { title: 'Rotoscoping', subtitle: 'Detail-driven mattes.', Icon: FaClapperboard },
  { title: 'Paint & Prep', subtitle: 'Clean plates & fixes.', Icon: FaWandMagicSparkles },
  { title: 'Cosmetic VFX', subtitle: 'Natural-looking enhancements.', Icon: FaFaceSmile },
  { title: 'Matchmove', subtitle: 'Precision tracking.', Icon: FaCube },
];
