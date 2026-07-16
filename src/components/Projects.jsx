import { useState } from 'react'

// ─── DATA ────────────────────────────────────────────────────────────────────

const OPEN_SOURCE = [
  {
    number: '01',
    title: 'Movie App',
    description:
      'A comprehensive movie discovery platform with dynamic filtering, trailer previews, and personalized watchlists.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    link: null,
    githubLink: null,
  },
]

const CLOSED_SOURCE = [
  {
    number: '02',
    title: 'Robot League',
    description:
      'Smart agricultural robot designed for crop care automation — built for the School Robot League (دوري الروبوتات للمدارس). Features autonomous navigation via tracked wheels on clay soil, precision seeding with servo-controlled tubes, capacitive soil moisture sensing for targeted irrigation, PIR-based bird deterrence with audio alerts, and obstacle detection via HC-SR04 ultrasonic sensors. Full electronics circuit simulated on Tinkercad.',
    tags: ['Arduino', 'C++', 'Tinkercad', 'SketchUp', 'Robotics'],
    type: 'Competition · Hardware',
    link: 'https://www.tinkercad.com/things/47IzhfeFS4i',
    caseStudy: {
      problem:
        'Traditional farming forces farmers to manually monitor every meter of land 24/7 — wasting water through random irrigation, losing crops to birds, and spending exhausting physical effort on seeding.',
      solution:
        'An autonomous agricultural robot that navigates between crop rows on tracked wheels (to avoid sinking in clay), measures soil moisture before irrigation, plants seeds at precise equal intervals, and emits high-frequency sound to scare birds away on PIR detection.',
      tech: {
        controller: 'Arduino UNO',
        sensors: [
          'Capacitive Soil Moisture Sensor',
          'PIR Motion Sensor (bird detection)',
          'Ultrasonic HC-SR04 (obstacle avoidance)',
          'Camera (visual crop health monitoring)',
        ],
        actuators: [
          'DC Motors (tracked wheel drive)',
          'Servo Motor (seed gate control)',
          'Water Pump (targeted irrigation)',
          'Buzzer/Speaker (bird deterrent)',
        ],
        tools: ['SketchUp (3D design)', 'Tinkercad (circuit simulation)'],
      },
      highlights: [
        'Tracked chassis avoids sinking in wet clay farmland',
        'Capacitive sensor chosen over resistive — no corrosion in soil',
        'Servo-gated seed tube drops seeds at equal intervals autonomously',
        'Targeted irrigation saves water vs. full-field flooding',
        'Smart scarecrow: PIR detects birds → speaker emits high-frequency deterrent',
      ],
      tinkercadLink: 'https://www.tinkercad.com/things/47IzhfeFS4i/editel?sharecode=rkyMVOBexYViv3c4RdQu6QrCVfhKl_mo3uzjiIL57Uo',
    },
  },
  {
    number: '03',
    title: 'Code-up.tech',
    description:
      'Full-stack Arabic EdTech platform for Egyptian secondary school students. Features video course delivery, AI-guided learning assistant, smart quizzes, performance analytics dashboard, PWA support, and a leaderboard. Serving 1000+ active users.',
    tags: ['Next.js', 'Node.js', 'Tailwind CSS', 'AI', 'PWA', 'PHP'],
    type: 'Commercial · EdTech',
    role: 'Full Stack Developer · Server Manager · UI Designer',
    link: 'https://code-up.tech',
    caseStudy: null,
  },
]

// ─── MODAL ───────────────────────────────────────────────────────────────────

function CaseStudyModal({ project, onClose }) {
  const cs = project.caseStudy
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative z-10 max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-sm border border-gold/20 shadow-2xl"
        style={{ background: '#1A1008' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-gold/15"
          style={{ background: '#1A1008' }}
        >
          <div>
            <span className="text-gold/60 text-xs tracking-widest uppercase font-mono">Case Study</span>
            <h3 className="font-display text-2xl font-bold text-sand mt-1">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-sm border border-gold/20 text-gold/50 hover:text-gold hover:border-gold transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Problem */}
          <div>
            <h4 className="text-gold font-semibold text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-1 h-4 bg-gold rounded-full block" />
              The Problem
            </h4>
            <p className="text-sand-dark text-sm leading-relaxed">{cs.problem}</p>
          </div>

          {/* Solution */}
          <div>
            <h4 className="text-gold font-semibold text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-1 h-4 bg-gold rounded-full block" />
              The Solution
            </h4>
            <p className="text-sand-dark text-sm leading-relaxed">{cs.solution}</p>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="text-gold font-semibold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="w-1 h-4 bg-gold rounded-full block" />
              Key Features
            </h4>
            <ul className="space-y-2">
              {cs.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-sand-dark">
                  <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'Controller', items: [cs.tech.controller] },
              { label: 'Tools', items: cs.tech.tools },
              { label: 'Sensors', items: cs.tech.sensors },
              { label: 'Actuators', items: cs.tech.actuators },
            ].map(({ label, items }) => (
              <div key={label} className="card !p-4">
                <p className="text-gold text-xs font-semibold tracking-wider uppercase mb-2">{label}</p>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((item) => (
                    <span key={item} className="tag text-[11px]">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          {cs.tinkercadLink && (
            <a
              href={cs.tinkercadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View Circuit on Tinkercad
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── PROJECT CARD ────────────────────────────────────────────────────────────

function ProjectCard({ project, onOpenModal }) {
  return (
    <article className="group card hover:-translate-y-1 cursor-default transition-all duration-300 flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <span className="font-display text-4xl font-black text-gold/20 group-hover:text-gold/40 transition-colors duration-300 select-none">
          {project.number}
        </span>
        <div className="flex items-center gap-2 flex-wrap justify-end">
          {project.type && (
            <span className="text-[10px] font-semibold px-2 py-0.5 bg-gold/15 text-gold border border-gold/25 rounded-sm tracking-wide">
              {project.type}
            </span>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-gold/30 hover:text-gold transition-all duration-300 hover:translate-x-0.5 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          )}
        </div>
      </div>

      <h3 className="font-display text-2xl font-bold text-sand mb-2 group-hover:text-gold transition-colors duration-300">
        {project.title}
      </h3>

      {project.role && (
        <p className="text-gold/70 text-xs font-mono mb-2 tracking-wide">{project.role}</p>
      )}

      <p className="text-sand-dark text-sm mb-5 leading-relaxed flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>

      {project.caseStudy ? (
        <button
          onClick={onOpenModal}
          className="text-gold text-sm font-semibold flex items-center gap-1.5 hover:gap-3 transition-all duration-300 group-hover:text-gold-light"
        >
          View Case Study
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      ) : project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold text-sm font-semibold flex items-center gap-1.5 hover:gap-3 transition-all duration-300 group-hover:text-gold-light"
        >
          Visit Live Site
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      ) : null}
    </article>
  )
}

// ─── SECTION ─────────────────────────────────────────────────────────────────

export default function Projects() {
  const [modalProject, setModalProject] = useState(null)

  return (
    <>
      {modalProject && (
        <CaseStudyModal project={modalProject} onClose={() => setModalProject(null)} />
      )}

      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-gold/60" />
              <span className="text-gold text-sm font-medium tracking-[0.25em] uppercase">Portfolio</span>
            </div>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">Showcasing innovation through code, design, and engineering</p>
          </div>

          {/* Open Source */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.6)]" />
                <h3 className="text-sand font-display font-bold text-xl">Open Source</h3>
              </div>
              <div className="h-px flex-1 bg-gold/10" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {OPEN_SOURCE.map((project) => (
                <ProjectCard key={project.number} project={project} onOpenModal={() => setModalProject(project)} />
              ))}
            </div>
          </div>

          {/* Closed Source */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.6)]" />
                <h3 className="text-sand font-display font-bold text-xl">Closed Source / Commercial</h3>
              </div>
              <div className="h-px flex-1 bg-gold/10" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CLOSED_SOURCE.map((project) => (
                <ProjectCard key={project.number} project={project} onOpenModal={() => setModalProject(project)} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
