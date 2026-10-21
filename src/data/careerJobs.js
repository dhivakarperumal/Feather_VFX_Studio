import { FaLayerGroup, FaPaintbrush, FaUserTie } from 'react-icons/fa6';

export const careerJobs = [
  {
    title: 'Rotoscope Artist',
    department: 'Rotoscope',
    type: 'Full-time',
    location: 'Chennai, India',
    image: '/images/services/ROTO_IN.jpg',
    Icon: FaLayerGroup,
    responsibilities: [
      'Should be expert in hair detail and heavy motion blur.',
      'Should know 2D workflow.',
      'Open to feedback and able to follow notes from the Lead or Supervisor.',
      'Proactive, dependable, and flexible.',
    ],
    qualifications: [
      'Minimum 1–2 years of VFX experience with Silhouette, Mocha, and basic Nuke knowledge.',
      'A strong eye for detail and precision.',
      'Knowledge of Nuke camera projection and keying is an advantage.',
    ],
  },
  {
    title: 'Paint / Prep Artist',
    department: 'Paint & Prep',
    type: 'Full-time',
    location: 'Chennai, India',
    image: '/images/services/PP-IN.jpg',
    Icon: FaPaintbrush,
    responsibilities: [
      'Create clean plates and remove markers, rigs, and wires using compositing and painting techniques.',
      'Clean up seams on blue- and green-screen footage to support the compositing team with keying.',
      'Complete frame-by-frame sequence painting when source frames are available.',
      'Handle prosthetic and makeup fixes.',
    ],
    qualifications: [
      'Minimum 1–3 years of experience in VFX paint and prep work.',
      'Strong skills in at least one paint application, such as Nuke or Photoshop.',
      'An artistic vision and creative-thinking ability.',
    ],
  },
  // {
  //   title: 'VFX Executive Producer',
  //   department: 'Production',
  //   type: 'Full-time',
  //   location: 'Chennai, India',
  //   image: '/images/services/COMP_IN.jpg',
  //   Icon: FaUserTie,
  //   responsibilities: [
  //     'Post-produce complex VFX television and commercial projects from bid through production to final-master delivery.',
  //     'Provide well-organized service to agencies and production companies across challenging films.',
  //     'Present creative solutions and advise on best-practice shooting techniques to achieve the best results.',
  //     'Develop new business and build relationships with TV producers, creatives, producers, and directors.',
  //   ],
  //   qualifications: [
  //     '4–6 years of experience post-producing complex VFX TV and commercial projects.',
  //     'A proven track record working with agencies and production companies.',
  //     'Fluent understanding of grading, CGI animation and effects, and VFX processes.',
  //     'Excellent new-business skills and strong industry relationships.',
  //   ],
  // },
];
