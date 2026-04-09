const PROJECTS = [
  {
    number: '01',
    title: 'Movie App',
    description: 'A comprehensive movie discovery platform',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    number: '02',
    title: 'Robot League',
    description: 'Robotics competition management system',
    tags: ['Python', 'React', 'MongoDB'],
  },
  {
    number: '03',
    title: 'Portfolio Engine',
    description: 'Dynamic portfolio generator',
    tags: ['Next.js', 'React', 'Node.js'],
  },
  {
    number: '04',
    title: 'Algorithm Visualizer',
    description: 'Interactive algorithm learning platform',
    tags: ['JavaScript', 'D3.js', 'React'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold/60" />
            <span className="text-gold text-sm font-medium tracking-[0.25em] uppercase">
              Portfolio
            </span>
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Showcasing innovation through code and design
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <article
              key={project.number}
              className="group card hover:-translate-y-1 cursor-default"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="font-display text-4xl font-black text-gold/20 group-hover:text-gold/40 transition-colors duration-300 select-none">
                  {project.number}
                </span>
                <svg
                  className="w-5 h-5 text-gold/30 group-hover:text-gold transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 17L17 7M17 7H7M17 7v10"
                  />
                </svg>
              </div>

              <h3 className="font-display text-2xl font-bold text-sand mb-2 group-hover:text-gold transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sand-dark text-sm mb-5 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              <button className="text-gold text-sm font-semibold flex items-center gap-1.5 hover:gap-3 transition-all duration-300 group-hover:text-gold-light">
                View Case Study
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
