# Yuktha P — Portfolio

A kawaii game-style personal portfolio showcasing UI/UX design, frontend development, and creative work. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

![Portfolio Preview](https://images.pexels.com/photos/29765806/pexels-photo-29765806.jpeg?auto=compress&cs=tinysrgb&h=400&w=800)

## Features

- **Animated Chibi Mascot** — A custom hand-drawn SVG character that waves, sits, paints, points, and waves goodbye across different sections. Click the mascot for a fun reaction message.
- **Game-Inspired Navigation** — Sections are labeled as "levels" (LV.01 through Final Level) with a scroll progress bar styled as a quest map.
- **Floating Guide Avatar** — On large screens, the mascot follows your scroll position and changes poses to match each section.
- **Custom Sparkle Cursor** — A spinning star cursor replaces the default pointer on desktop devices.
- **Project Showcase** — Interactive project cards with detailed modal views, including live demo and GitHub links.
- **Design Lab** — A corkboard-style masonry grid displaying design experiments with real photography.
- **Quest Path** — A zigzag timeline showing the design process from Explore to Refine.
- **Achievements & Quests** — Badge cards highlighting activities and a scrolling ticker of current obsessions.
- **Responsive Design** — Fully responsive from mobile to desktop with adaptive layouts.
- **Pastel Color System** — A custom palette of pink, lilac, baby blue, butter, and mint tones throughout.

## Sections

1. **Hero** — Introduction with animated mascot and call-to-action buttons
2. **About Me** — Personal story with skill tags, education, and location
3. **Skills** — Skill cards grouped by proficiency level
4. **Featured Work** — Project cards with detailed modals (Health Hub, Bento Café, Moodboard, Finance App, Traffic Simulation)
5. **Design Lab** — Experiment cards with real design photography
6. **My Approach** — Six-step design process timeline
7. **Quests & Achievements** — Activity badges and current learning ticker
8. **Beyond the Screen** — Creative interests (painting, travel, Bharatanatyam, design, technology)
9. **Contact** — Social links and call-to-action

## Tech Stack

- **React 18** — UI library
- **TypeScript** — Type safety
- **Vite** — Build tool and dev server
- **Tailwind CSS** — Utility-first styling with custom theme
- **Framer Motion** — Animations and transitions
- **Lucide React** — Icon library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or your preferred package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/yukthaprakash/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Project Structure

```
src/
├── App.tsx                    # Root component
├── main.tsx                   # Entry point
├── index.css                  # Global styles and Tailwind directives
├── components/
│   ├── ChibiAvatar.tsx        # Animated SVG mascot character
│   ├── CustomCursor.tsx       # Desktop sparkle cursor
│   ├── ExperimentArtwork.tsx  # Design lab card images
│   ├── FloatingBackground.tsx # Animated background elements
│   ├── GuideAvatar.tsx        # Scroll-following mascot guide
│   ├── Navbar.tsx             # Navigation with active section tracking
│   ├── ProjectArtwork.tsx     # Project preview illustrations
│   ├── ScrollProgress.tsx     # Top scroll progress bar
│   ├── SparkleBurst.tsx       # Click sparkle effect
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── FeaturedWork.tsx
│       ├── DesignExperiments.tsx
│       ├── DesignApproach.tsx
│       ├── Activity.tsx
│       ├── CreativeInterests.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── data/
│   └── content.ts             # All site content (projects, skills, links)
└── hooks/
    └── useActiveSection.ts    # IntersectionObserver hook for nav tracking
```

## Customization

All content — projects, skills, social links, experiment categories, approach steps, and creative interests — is centralized in `src/data/content.ts`. Edit that file to update the portfolio content without touching component code.

The color palette, fonts, shadows, and animations are defined in `tailwind.config.js`. The mascot character is a custom SVG in `src/components/ChibiAvatar.tsx`.

## Connect

- **GitHub:** [github.com/yukthaprakash](https://github.com/yukthaprakash)
- **LinkedIn:** [linkedin.com/in/yuktha-p-481767393](https://www.linkedin.com/in/yuktha-p-481767393)
- **Email:**[yukthaprakash2007@gmail.com] 

## License

This project is personal portfolio work. Feel free to reference the structure and approach for your own portfolio, but please don't copy the design, mascot, or content directly.

---

Designed with curiosity. Built with code.
