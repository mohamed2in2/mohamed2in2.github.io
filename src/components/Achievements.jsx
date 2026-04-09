const ACHIEVEMENTS = [
  {
    code: 'ICSC',
    name: 'International Computer Science Competition',
  },
  {
    code: 'IYMC',
    name: 'International Youth Math Challenge',
  },
  {
    code: 'IPhR',
    name: 'International Physics Recognition',
  },
  {
    code: 'SIC',
    name: 'Scientific Innovation Challenge',
  },
  {
    code: 'DIGITOPIA',
    name: 'Digital Innovation Competition',
  },
  {
    code: 'دوري الروبوتات',
    name: 'School Robot League (دوري الروبوتات للمدارس)',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 bg-pharaoh-mid/40">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold/60" />
            <span className="text-gold text-sm font-medium tracking-[0.25em] uppercase">
              Recognition
            </span>
          </div>
          <h2 className="section-title">Achievements & Competitions</h2>
          <p className="section-subtitle">
            Recognition and excellence across multiple disciplines
          </p>
        </div>

        {/* Achievements grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.code}
              className="card group hover:-translate-y-1 cursor-default relative overflow-hidden"
            >
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <svg viewBox="0 0 100 100" className="w-full h-full text-gold fill-current">
                  <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" />
                </svg>
              </div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <span className="font-display text-lg font-bold text-gold">
                    {item.code}
                  </span>
                </div>
                <p className="text-sand-dark text-sm leading-relaxed">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
