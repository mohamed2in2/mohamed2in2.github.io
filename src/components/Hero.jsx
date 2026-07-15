export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(212,175,55,0.10) 0%, rgba(212,175,55,0.03) 50%, transparent 70%)',
          }}
        />
        {/* Secondary glow ring */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)',
          }}
        />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Hieroglyph-style decorative corners */}
        <div className="absolute top-24 left-8 w-16 h-16 border-t-2 border-l-2 border-gold/20" />
        <div className="absolute top-24 right-8 w-16 h-16 border-t-2 border-r-2 border-gold/20" />
        <div className="absolute bottom-16 left-8 w-16 h-16 border-b-2 border-l-2 border-gold/20" />
        <div className="absolute bottom-16 right-8 w-16 h-16 border-b-2 border-r-2 border-gold/20" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-6 hero-animate" style={{ animationDelay: '0ms' }}>
          <div className="h-px w-12 bg-gold/60" />
          <span className="text-gold font-medium text-sm tracking-[0.3em] uppercase">
            Full Stack Developer &amp; Competitive Programmer
          </span>
          <div className="h-px w-12 bg-gold/60" />
        </div>

        {/* Main headline */}
        <h1 className="font-display text-5xl md:text-7xl font-black text-sand leading-tight mb-4 hero-animate" style={{ animationDelay: '120ms' }}>
          Building the Future,
          <br />
          <span className="text-gold text-glow">Inspired by the Past.</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-sand-dark text-lg md:text-xl max-w-2xl mx-auto mt-6 mb-10 leading-relaxed hero-animate" style={{ animationDelay: '240ms' }}>
          I&apos;m{' '}
          <span className="text-gold font-semibold">Ahmed Ehab</span>, a Full Stack Developer
          and Competitive Programmer based in Alexandria.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center hero-animate" style={{ animationDelay: '360ms' }}>
          <a href="#projects" className="btn-primary text-base px-8 py-3">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            View Projects
          </a>
          <a href="#contact" className="btn-outline text-base px-8 py-3">
            Get in Touch
          </a>
        </div>

        {/* Quick stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-14 hero-animate" style={{ animationDelay: '480ms' }}>
          {[
            { value: '2+', label: 'Years Experience' },
            { value: '9+', label: 'Achievements' },
            { value: '5+', label: 'Projects Built' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-display text-3xl font-black text-gold text-glow">{value}</p>
              <p className="text-sand-dark text-xs tracking-wider uppercase mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold/40 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
