const ACHIEVEMENTS = [
  {
    code: 'ICSC',
    name: 'International Computer Science Competition',
    year: '2025',
    certFiles: [
      '/cert/ICSC 22 septmember 2025 cert.pdf',
      '/cert/2025preformancpage ICSC.pdf',
    ],
    color: '#D4AF37',
  },
  {
    code: 'IYMC',
    name: 'International Youth Math Challenge',
    year: '2023–2025',
    certFiles: ['/cert/IYMC 15 december 2025 participation.pdf'],
    color: '#C0A430',
  },
  {
    code: 'IPhR',
    name: 'International Physics Recognition',
    year: '2024',
    certFiles: [],
    color: '#B8922A',
  },
  {
    code: 'SIC',
    name: 'Scientific Innovation Challenge',
    year: '2023',
    certFiles: [],
    color: '#A8860A',
  },
  {
    code: 'DIGITOPIA',
    name: 'Digital Innovation Competition',
    year: '2024',
    certFiles: [],
    color: '#C9A96E',
  },
  {
    code: 'دوري الروبوتات',
    name: 'School Robot League (دوري الروبوتات للمدارس)',
    year: '2023–2024',
    certFiles: [],
    color: '#D4AF37',
  },
  {
    code: 'Build with AI',
    name: 'Build with AI — Egypt Edition (Google)',
    year: '2025',
    certFiles: ['/cert/Build with AI MASR edition.pdf'],
    color: '#E8C840',
  },
  {
    code: 'Foyle Poets',
    name: 'Foyle Young Poets of the Year Award',
    year: '2026',
    certFiles: ['/cert/Certificate - Foyle Young Poets 2026 .pdf'],
    color: '#F0D060',
  },
  {
    code: 'TOFAS L2',
    name: 'TOFAS — Talented & Outstanding Students Level 2',
    year: '2024',
    certFiles: ['/cert/tofas lvl2.pdf'],
    color: '#D4AF37',
  },
]

function DownloadButton({ certFiles }) {
  if (!certFiles || certFiles.length === 0) {
    return (
      <span className="text-xs text-gold/25 italic mt-3 inline-block">
        — No certificate on file —
      </span>
    )
  }

  const handleDownload = (e) => {
    e.stopPropagation()
    certFiles.forEach((file, i) => {
      setTimeout(() => {
        const a = document.createElement('a')
        a.href = file
        a.download = file.split('/').pop()
        a.click()
      }, i * 300)
    })
  }

  return (
    <button
      onClick={handleDownload}
      className="mt-4 flex items-center gap-2 text-xs font-semibold text-gold border border-gold/30 px-3 py-1.5 rounded-sm hover:bg-gold hover:text-pharaoh transition-all duration-300 hover:border-gold group/btn"
    >
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      {certFiles.length > 1 ? `Download ${certFiles.length} Certificates` : 'Download Certificate'}
    </button>
  )
}

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
          <h2 className="section-title">Achievements &amp; Competitions</h2>
          <p className="section-subtitle">
            Recognition and excellence across multiple disciplines — click to download certificates
          </p>
        </div>

        {/* Achievements grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.code}
              className="card group hover:-translate-y-1 cursor-default relative overflow-hidden transition-all duration-300"
              style={{ '--accent': item.color }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: item.color }}
              />

              {/* Background hexagon accent */}
              <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-gold">
                  <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" />
                </svg>
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-3">
                  <span
                    className="font-display text-lg font-bold transition-colors duration-300"
                    style={{ color: item.color }}
                  >
                    {item.code}
                  </span>
                  <span className="text-xs text-gold/50 font-mono bg-gold/10 px-2 py-0.5 rounded-sm border border-gold/15">
                    {item.year}
                  </span>
                </div>

                <p className="text-sand-dark text-sm leading-relaxed flex-1">
                  {item.name}
                </p>

                <DownloadButton certFiles={item.certFiles} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
