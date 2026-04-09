const SKILL_GROUPS = [
  {
    category: 'Frontend Development',
    icon: '⚡',
    skills: ['HTML/CSS', 'JavaScript', 'React'],
  },
  {
    category: 'Design & Prototyping',
    icon: '🎨',
    skills: ['Figma', 'UI/UX Design'],
  },
  {
    category: 'Version Control',
    icon: '🔀',
    skills: ['Git', 'GitHub'],
  },
  {
    category: 'Backend & Data',
    icon: '🖥️',
    skills: ['Python', 'Node.js'],
  },
  {
    category: 'Problem Solving',
    icon: '🧠',
    skills: ['Competitive Programming', 'Algorithms'],
  },
  {
    category: 'DevOps',
    icon: '⚙️',
    skills: ['Intro to DevOps', 'CI/CD Basics'],
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
          <h2 className="section-title">Skills Manifest</h2>
          <p className="section-subtitle">
            A diverse toolkit for building modern web experiences
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.category}
              className="card group hover:-translate-y-1 cursor-default"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl" role="img" aria-label={group.category}>
                  {group.icon}
                </span>
                <h3 className="font-semibold text-sand group-hover:text-gold transition-colors duration-300">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="tag hover:bg-gold/20 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Born year footnote */}
        <p className="text-center text-sand-dark/50 text-sm mt-16 font-mono">
          Born in 2010 • Continuously learning and evolving
        </p>
      </div>
    </section>
  )
}
