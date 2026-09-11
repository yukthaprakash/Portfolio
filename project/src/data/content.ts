import {
  Sparkles,
  Palette,
  Code,
  Wrench,
  Github,
  Linkedin,
  Mail,
  PenTool,
  Dribbble,
  Plane,
  Music,
  Brush,
  Monitor,
  Heart,
  Star,
} from 'lucide-react';

export type IconType = typeof Sparkles;

export const navSections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
  { id: 'experiments', label: 'Lab' },
  { id: 'approach', label: 'Approach' },
  { id: 'activity', label: 'Quests' },
  { id: 'interests', label: 'Beyond' },
  { id: 'contact', label: 'Contact' },
] as const;

export const skillGroups = [
  {
    label: 'Comfortable with',
    icon: Star,
    color: 'pink',
    skills: [
      { name: 'UI/UX Design', icon: Palette },
      { name: 'Figma', icon: PenTool },
      { name: 'Canva', icon: Brush },
      { name: 'Visual Design', icon: Palette },
      { name: 'Branding', icon: Sparkles },
      { name: 'Logo Design', icon: PenTool },
      { name: 'Social Media Design', icon: Sparkles },
      { name: 'Design Systems', icon: Monitor },
      { name: 'Wireframing', icon: PenTool },
      { name: 'Prototyping', icon: Wrench },
      { name: 'User-focused Interface Design', icon: Palette },
    ],
  },
  {
    label: 'Currently exploring',
    icon: Code,
    color: 'lilac',
    skills: [
      { name: 'HTML', icon: Code },
      { name: 'CSS', icon: Code },
      { name: 'JavaScript', icon: Code },
      { name: 'React', icon: Code },
      { name: 'Tailwind CSS', icon: Code },
      { name: 'Python', icon: Code },
      { name: 'C Programming', icon: Code },
    ],
  },
  {
    label: 'Always learning',
    icon: Wrench,
    color: 'mint',
    skills: [
      { name: 'Git', icon: Github },
      { name: 'GitHub', icon: Github },
      { name: 'Figma', icon: PenTool },
      { name: 'Canva', icon: Brush },
      { name: 'Leaflet / Mapbox', icon: Monitor },
      { name: 'Responsive Web Design', icon: Monitor },
      { name: 'Prototyping & Interaction Design', icon: Wrench },
    ],
  },
] as const;

export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  highlight: string;
  liveDemo?: string;
  github?: string;
  subItems?: string[];
  accent: string;
  bg: string;
};

export const projects: Project[] = [
  {
    id: 'health-hub',
    number: '01',
    title: 'Health Hub',
    category: 'UI/UX · Frontend · Healthcare',
    description:
      'A patient-centric healthcare platform designed to bring medical records, prescriptions, diagnostic reports, appointments, and healthcare history into one simple experience. I worked on the frontend and UI/UX direction, focusing on creating a clean, accessible interface for a space that can often feel overwhelming and complicated.',
    highlight: 'Designing a complex system to feel simple.',
    liveDemo: 'https://healthhubb.lovable.app',
    github: 'https://github.com/Solvyn-Tech/healthhub',
    accent: 'pink',
    bg: 'from-pink-100 to-lilac-100',
  },
  {
    id: 'bento-cafe',
    number: '02',
    title: 'Bento Café',
    category: 'UI/UX · Branding · Web Design',
    description:
      'A playful café brand and website concept built around warm visuals, simple navigation, and an experience that feels as inviting as the place itself. The project explores how branding, typography, colour, photography, and interface design can work together to create a memorable digital identity.',
    highlight: 'A café experience, translated into pixels.',
    subItems: ['Logo', 'Brand identity', 'Homepage', 'Menu interface', 'Mobile version'],
    accent: 'butter',
    bg: 'from-butter-100 to-pink-100',
  },
  {
    id: 'moodboard',
    number: '03',
    title: 'Moodboard / Creative Dashboard',
    category: 'UI/UX · Visual Design · Concept',
    description:
      'A personal dashboard concept designed for creative people to collect inspiration, organise ideas, save references, and turn scattered thoughts into projects. The visual direction is experimental but functional, with strong typography, cards, micro-interactions, and an editorial layout.',
    highlight: 'Because good ideas rarely arrive organised.',
    accent: 'lilac',
    bg: 'from-lilac-100 to-babyblue-100',
  },
  {
    id: 'finance-app',
    number: '04',
    title: 'Personal Finance App Concept',
    category: 'UI/UX · Product Design',
    description:
      'A modern finance dashboard concept designed to make everyday money tracking feel less intimidating and more visual. Focuses on information hierarchy, data visualisation, simple interactions, and a dashboard that communicates information without overwhelming the user.',
    highlight: 'Making numbers easier to understand.',
    accent: 'mint',
    bg: 'from-mint-100 to-babyblue-100',
  },
  {
    id: 'traffic-sim',
    number: '05',
    title: 'Traffic Simulation & Pilgrim Flow',
    category: 'UI/UX · Frontend · Creative Technology',
    description:
      'A smart traffic-management concept exploring how technology can help manage vehicle and pedestrian movement around high-footfall pilgrimage areas. Combines maps, live zones, traffic information, route planning, and BFS-based pathfinding concepts to create a more intuitive experience for managing movement, with interactive map-based interfaces.',
    highlight: 'Where maps meet problem-solving.',
    accent: 'babyblue',
    bg: 'from-babyblue-100 to-lilac-100',
  },
];

export const experimentCategories = [
  { title: 'Logo explorations', rotation: -3, color: 'pink' },
  { title: 'Poster designs', rotation: 2, color: 'lilac' },
  { title: 'Landing page concepts', rotation: -2, color: 'babyblue' },
  { title: 'Mobile UI experiments', rotation: 4, color: 'butter' },
  { title: 'Branding explorations', rotation: -4, color: 'mint' },
  { title: 'Typography experiments', rotation: 1, color: 'pink' },
  { title: 'Instagram carousel designs', rotation: -2, color: 'lilac' },
  { title: 'Colour palette studies', rotation: 3, color: 'babyblue' },
  { title: 'Dashboard concepts', rotation: -1, color: 'butter' },
] as const;

export const approachSteps = [
  { num: '01', title: 'Explore', desc: 'Understand the idea, problem, audience, and visual direction.', icon: Sparkles },
  { num: '02', title: 'Sketch', desc: 'Turn vague thoughts into rough layouts, flows, and possibilities.', icon: PenTool },
  { num: '03', title: 'Design', desc: 'Build the visual language through typography, spacing, colour, hierarchy, and interaction.', icon: Palette },
  { num: '04', title: 'Prototype', desc: 'Make the idea feel real through interactions and user flows.', icon: Wrench },
  { num: '05', title: 'Build', desc: 'Bring the design to life using frontend technologies.', icon: Code },
  { num: '06', title: 'Refine', desc: 'Step back, notice what\u2019s not working, and make it better.', icon: Star },
] as const;

export const activityBadges = [
  {
    title: 'Building beyond the classroom',
    desc: 'Exploring frontend development, UI/UX, and creative technology through self-driven projects and experiments.',
    icon: Code,
  },
  {
    title: 'Hackathon & problem-solving',
    desc: 'Working on real-world problem statements involving traffic management, mapping, pathfinding, and technology-driven solutions.',
    icon: Wrench,
  },
  {
    title: 'Design + Development',
    desc: 'Exploring both sides of digital products — designing interfaces in Figma and bringing them to life through frontend development.',
    icon: Palette,
  },
  {
    title: 'Always experimenting',
    desc: 'From branding and social media visuals to product interfaces and web experiences, continuously experimenting with different forms of design.',
    icon: Sparkles,
  },
] as const;

export const obsessedList = [
  'Better interfaces',
  'Interesting typography',
  'Tiny interactions',
  'Good colour palettes',
  'Turning Figma files into real websites',
  'Finding ideas in unexpected places',
] as const;

export const creativeInterests = [
  { label: 'Painting', icon: Brush },
  { label: 'Travel', icon: Plane },
  { label: 'Bharatanatyam', icon: Music },
  { label: 'Design', icon: Palette },
  { label: 'Technology', icon: Monitor },
] as const;

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/yukthaprakash', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yuktha-p-481767393', icon: Linkedin },
  { label: 'Email', href: 'mailto:hello@yukthap.com', icon: Mail },
  { label: 'Behance', href: '#', icon: PenTool },
  { label: 'Dribbble', href: '#', icon: Dribbble },
] as const;

export const approachIconMap = { Sparkles, PenTool, Palette, Wrench, Code, Star };
export const interestIconMap = { Brush, Plane, Music, Palette, Monitor };
export const socialIconMap = { Github, Linkedin, Mail, PenTool, Dribbble, Heart };
