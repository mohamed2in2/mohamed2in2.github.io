const SKILL_GROUPS = [
  {
    category: 'Frontend Development',
    icon: '⚡',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    category: 'Backend Development',
    icon: '🖥️',
    skills: ['Node.js', 'PHP', 'Python', 'REST APIs'],
  },
  {
    category: 'Frameworks',
    icon: '🚀',
    skills: ['Next.js', 'React', 'Express.js'],
  },
  {
    category: 'Design & Prototyping',
    icon: '🎨',
    skills: ['Figma', 'UI/UX Design', 'Responsive Design'],
  },
  {
    category: 'Version Control',
    icon: '🔀',
    skills: ['Git', 'GitHub'],
  },
  {
    category: 'Problem Solving',
    icon: '🧠',
    skills: ['Competitive Programming', 'Algorithms', 'Data Structures'],
  },
  {
    category: 'Server Management',
    icon: '⚙️',
    skills: ['Server Management', 'Linux', 'Nginx', 'CI/CD', 'VPS Deployment'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    skills: ['MongoDB', 'MySQL', 'Firebase'],
  },
]

const EXPERIENCE = [
  {
    role: 'Full Stack Developer',
    company: 'Code-up.tech',
    period: '2024 – 2026',
    duration: '2 Years',
    duties: ['Full Stack Development', 'Server Management', 'UI Design'],
    link: 'https://code-up.tech',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold/60" />
            <span className="text-gold text-sm font-medium tracking-[0.25em] uppercase">
              Expertise
            </span>
          </div>
          <h2 className="section-title">Full Stack Toolkit</h2>
          <p className="section-subtitle">
            A comprehensive skill set spanning frontend, backend, servers, and competitive programming
          </p>
        </div>

        {/* Work Experience Banner */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold shadow-[0_0_8px_rgba(212,175,55,0.8)] animate-pulse" />
              <h3 className="text-sand font-display font-bold text-xl">Work Experience</h3>
            </div>
            <div className="h-px flex-1 bg-gold/10" />
          </div>

          {EXPERIENCE.map((exp) => (
            <a
              key={exp.company}
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card group flex flex-col sm:flex-row items-start sm:items-center gap-5 hover:-translate-y-0.5 transition-all duration-300 no-underline"
            >
              {/* Duration badge */}
              <div className="flex-shrink-0 w-20 h-20 rounded-sm bg-gold/10 border border-gold/20 flex flex-col items-center justify-center group-hover:bg-gold/20 transition-colors">
                <span className="font-display text-gold font-black text-xl leading-none">2</span>
                <span className="text-gold/70 text-xs font-medium">Years</span>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap mb-1">
                  <h4 className="font-display font-bold text-sand text-lg group-hover:text-gold transition-colors">
                    {exp.role}
                  </h4>
                  <span className="text-xs font-semibold px-2 py-0.5 bg-gold/15 text-gold border border-gold/25 rounded-sm">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gold font-semibold text-sm mb-2">{exp.company}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.duties.map((d) => (
                    <span key={d} className="tag text-xs">{d}</span>
                  ))}
                </div>
              </div>

              <svg className="w-5 h-5 text-gold/30 group-hover:text-gold transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          ))}
        </div>

        {/* Skills header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold/60" />
            <h3 className="text-sand font-display font-bold text-xl">Technical Skills</h3>
          </div>
          <div className="h-px flex-1 bg-gold/10" />
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.category}
              className="card group hover:-translate-y-1 cursor-default transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl" role="img" aria-label={group.category}>
                  {group.icon}
                </span>
                <h3 className="font-semibold text-sand text-sm group-hover:text-gold transition-colors duration-300">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span key={skill} className="tag text-[11px] hover:bg-gold/20 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer footnote */}
        <p className="text-center text-sand-dark/50 text-sm mt-16 font-mono">
          Born in 2010 · Full Stack Developer since 2022 · Continuously learning and evolving
        </p>
      </div>
    </section>
  )
}
