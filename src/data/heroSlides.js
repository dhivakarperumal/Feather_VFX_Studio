import { FaCrosshairs, FaFaceSmile, FaLayerGroup, FaPaintbrush, FaVectorSquare } from 'react-icons/fa6';
import {
  Layers3,
  Crosshair,
  Paintbrush,
  ScanLine,
  Sparkles,
} from "lucide-react";

const heroImage = (filename) =>
  `/images/slider/${encodeURIComponent(filename)}`;

export const heroSlides = [
  {
    message: 'International Space Station',
    image: heroImage('hero1.png'),
    responsiveImage: heroImage('hero1_res.jpg'),
  },
  {
    message: 'One Night in Miami',
    supportingMessage: 'Roto · Paint · Matchmove | 200+ shots completed',
    compactSupportingMessage: true,
    image: heroImage('hero.webp'),
  },
  {
    message: 'Carter',
    image: heroImage('hero2.png'),
    responsiveImage: heroImage('hero2_res.png'),
  },
  {
    message: 'Projects Delivered on Time and Within Budget',
    image: heroImage('1.jpg'),
  },
  {
    message: 'We Create the Extraordinary',
    singleLine: true,
    image: heroImage('2.jpg'),
  },
  // {
  //   message:
  //     'Films, TV Commercials, Web Videos, Music Videos, Corporate Videos, and TV Shows',
  //   supportingMessage: 'Content creators and Collaborators',
  //   compactMessage: true,
  //   image: heroImage('3.jpg'),
  // },
  {
    message: 'Feather VFX. Great Work, Delivered.',
    image: heroImage('4.jpg'),
  },
];

export const heroCapabilities = [
  {
    title: "Rotoscoping",
    subtitle: "Precise subject mattes.",
    Icon: Layers3,
  },
  {
    title: "Paint and Prep",
    subtitle: "Clean plates and fixes.",
    Icon: Paintbrush,
  },
  {
    title: "Matchmove",
    subtitle: "Precise camera tracking.",
    Icon: Crosshair,
  },
  {
    title: "Compositing",
    subtitle: "Seamless final images.",
    Icon: ScanLine,
  },
];