export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gold/10 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="font-display text-gold text-xl font-bold tracking-widest mb-1">
              KemetCraft
            </p>
            <p className="text-sand-dark text-sm max-w-xs">
              Crafting digital experiences with modern technology and timeless inspiration.
              Based in Alexandria, Egypt.
            </p>
          </div>

          {/* Quick links */}
          <nav className="flex gap-6 flex-wrap justify-center">
            {['#projects', '#achievements', '#skills', '#contact'].map((href) => (
              <a
                key={href}
                href={href}
                className="nav-link capitalize text-sm link-underline"
              >
                {href.replace('#', '')}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-gold/10 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sand-dark/40 text-sm">
          <p>
            © {year} KemetCraft. Built with React, Tailwind CSS, and passion.
          </p>
          <a
            href="https://kemetcraft.me"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
          >
            kemetcraft.me
          </a>
        </div>
      </div>
    </footer>
  )
}
