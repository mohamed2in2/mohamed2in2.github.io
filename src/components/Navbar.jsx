import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Featured Projects', href: '/featured-projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const FEATURED_PROJECTS_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar({ isFeaturedProjectsPage = false }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const links = isFeaturedProjectsPage ? FEATURED_PROJECTS_LINKS : NAV_LINKS

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-pharaoh/95 backdrop-blur-md border-b border-gold/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href={isFeaturedProjectsPage ? '/' : '#hero'}
          className="font-display text-gold font-bold text-xl tracking-widest hover:text-gold-light transition-colors"
        >
          KemetCraft
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link link-underline">
              {link.label}
            </a>
          ))}
          {isFeaturedProjectsPage ? null : (
            <a href="#contact" className="btn-primary text-sm py-2 px-5">
              Get in Touch
            </a>
          )}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gold focus:outline-none"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-pharaoh-mid border-t border-gold/10 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-base"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          {isFeaturedProjectsPage ? null : (
            <a
              href="#contact"
              className="btn-primary text-sm w-fit"
              onClick={() => setMenuOpen(false)}
            >
              Get in Touch
            </a>
          )}
        </nav>
      )}
    </header>
  )
}
