# KemetCraft Portfolio Architecture

This document describes the architectural layout, styling guidelines, and code structure of the **KemetCraft** portfolio application built for **Ahmed Ehab**.

---

## 1. Application Overview

**KemetCraft** is a highly polished, responsive Single Page Application (SPA) designed to showcase the work, expertise, competitive programming achievements, and contact channels of Ahmed Ehab, a Web Developer and Competitive Programmer based in Alexandria, Egypt. 

The website uses a premium **Egyptian Pharaoh/Gold** dark theme, combining modern visual cues with a custom golden palette.

---

## 2. Technical Stack

- **Core Framework:** [React (v18.3.1)](https://react.dev/)
- **Build System & Bundler:** [Vite (v5.4.10)](https://vite.dev/)
- **Styling System:** [Tailwind CSS (v3.4.14)](https://tailwindcss.com/) with PostCSS & Autoprefixer
- **Package Manager:** `npm`
- **Typography:** Google Fonts:
  - `Cinzel` (serif): Used for headings and branding elements (`font-display`).
  - `Inter` (sans-serif): Used for clean, legible body text (`font-sans`).

---

## 3. Directory Structure

```text
portfolio-/
├── public/                 # Static assets (icons, images)
├── src/
│   ├── components/         # Reusable presentation and layout components
│   │   ├── Achievements.jsx# Display card grid for competition codes & years
│   │   ├── Contact.jsx     # Clipboard-copiable contact cards and email CTAs
│   │   ├── Footer.jsx      # Bottom links, copyright, and external link credits
│   │   ├── Hero.jsx        # Landing fold with custom grid/glow SVGs and scroll indicators
│   │   ├── Navbar.jsx      # Fixed top header with responsive mobile hamburger drawer
│   │   ├── Projects.jsx    # Project grid containing case studies and tags
│   │   └── Skills.jsx      # Grid showing technical skills categorized by domain
│   ├── App.jsx             # App layout coordinator (combines sections)
│   ├── index.css           # Global styles, Tailwind base/components/utilities overrides
│   └── main.jsx            # React root mount and bootstrapping
├── index.html              # Main HTML skeleton containing font connections and SEO tags
├── postcss.config.js       # PostCSS config file mapping Tailwind and Autoprefixer
├── tailwind.config.js      # Custom theme extension (colors, fonts)
├── vite.config.js          # Vite config using @vitejs/plugin-react
├── package.json            # Scripts and dependency versions
└── ARCHITECTURE.md         # Architecture documentation (This File)
```

---

## 4. Visual Design System

The application utilizes a curated dark palette defined in [tailwind.config.js](file:///j:/portfolio/portfolio-/tailwind.config.js) and configured under the base layer in [index.css](file:///j:/portfolio/portfolio-/src/index.css):

### Color Tokens

- **Pharaoh (Backgrounds):**
  - `pharaoh` (Default): `#1A1008` — The primary canvas background.
  - `pharaoh-mid` (Cards/Alternate backgrounds): `#2C1D0A`
  - `pharaoh-light` (Accents/Hovers): `#3D2B10`
- **Gold (Primary Accent):**
  - `gold` (Default): `#D4AF37` — Used for titles, primary buttons, borders, and active links.
  - `gold-light`: `#F0D060` — Used for hover states.
  - `gold-dark`: `#A8860A` — Darker contrast states.
- **Sand (Text & Contrast):**
  - `sand` (Default): `#F5E6C8` — Default text color.
  - `sand-dark`: `#C9A96E` — Subtitle and secondary text color.

### Custom CSS Utilities & Component Classes
- **`.btn-primary`:** Full gold button with smooth scaling and shadow glows.
- **`.btn-outline`:** Transparent button with gold border, filling with gold on hover.
- **`.card`:** Mid-pharaoh background, gold border at 10% opacity transitioning to 30% opacity on hover.
- **`.tag`:** Gold outline tag with transparent gold background.
- **`.text-glow`:** Subtle text-shadow wrapper simulating gold illumination.
- **`.link-underline`:** Animated hover underline that expands horizontally from the left.

---

## 5. Architectural Breakdown of Components

### A. Root Layer
- [main.jsx](file:///j:/portfolio/portfolio-/src/main.jsx) handles mounting the React DOM root under `#root`.
- [App.jsx](file:///j:/portfolio/portfolio-/src/App.jsx) establishes a full-screen context (`min-h-screen`) using the main dark theme and orders the sections:
  1. `<Navbar />` (Fixed floating header)
  2. `<Hero />` (Interactive introduction fold)
  3. `<Projects />` (Showcases build cases)
  4. `<Achievements />` (Academic and challenge milestones)
  5. `<Skills />` (Tech stack layout)
  6. `<Contact />` (Interactive messaging prompts)
  7. `<Footer />` (Copyright details)

### B. Navigation ([Navbar.jsx](file:///j:/portfolio/portfolio-/src/components/Navbar.jsx))
- Monitored scroll listener toggles backdrop class (translucency + border line) once page is scrolled beyond 30px.
- Responsive mobile drawer toggled via a simple React state (`menuOpen`).

### C. Hero Section ([Hero.jsx](file:///j:/portfolio/portfolio-/src/components/Hero.jsx))
- Includes stylized background graphics:
  - A subtle radial gradient simulating ambient gold backlighting.
  - Custom SVG grid overlay mimicking Egyptian layout alignments.
  - Geometric corner borders matching Pharaoh visual design.
- Contains secondary scroll cue bouncing at the bottom of the landing view.

### D. Portfolio Grid ([Projects.jsx](file:///j:/portfolio/portfolio-/src/components/Projects.jsx))
- Dynamic rendering of projects from an array containing title, short descriptions, case study link structures, and custom tags.

### E. Achievements ([Achievements.jsx](file:///j:/portfolio/portfolio-/src/components/Achievements.jsx))
- Modern card list rendering regional and international challenges (e.g. ICSC, IYMC).
- Each card incorporates an abstract SVG geometric polygon background shifting opacity during cursor hover.

### F. Skills ([Skills.jsx](file:///j:/portfolio/portfolio-/src/components/Skills.jsx))
- Standard groupings displaying tags corresponding to specific domains (Frontend, Design, DevOps, Version Control, Backend, Problem Solving).

### G. Contact Fold ([Contact.jsx](file:///j:/portfolio/portfolio-/src/components/Contact.jsx))
- Implements Clipboard API integrations to allow user clicks to instantly copy emails (`ahmedehab2n5@gmail.com`) and phone contacts (`+201101670389`) without navigating away.
- Displays temporary "✓ Copied!" badge confirmations.

---

## 6. Setup & Execution Commands

To execute the project locally:

```bash
# Install dependencies
npm install

# Run localized development server
npm run dev

# Compile static assets for production deployment
npm run build

# Run quality lint checks
npm run lint
```
