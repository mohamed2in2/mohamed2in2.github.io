import { useState } from 'react'

export default function Contact() {
  const [copied, setCopied] = useState(null)

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key)
      setTimeout(() => setCopied(null), 2000)
    })
  }

  return (
    <section id="contact" className="py-24 px-6 bg-pharaoh-mid/40">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold/60" />
            <span className="text-gold text-sm font-medium tracking-[0.25em] uppercase">
              Let&apos;s Connect
            </span>
            <div className="h-px w-10 bg-gold/60" />
          </div>
          <h2 className="section-title">Get in Touch</h2>
          <p className="text-sand-dark text-lg max-w-xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
          </p>
        </div>

        {/* Contact cards */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          {/* Email */}
          <button
            onClick={() => copyToClipboard('ahmedehab2n5@gmail.com', 'email')}
            className="card flex items-center gap-4 text-left group hover:-translate-y-1 cursor-pointer min-w-[260px]"
          >
            <div className="w-10 h-10 rounded-sm bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
              <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-sand-dark mb-0.5">Email</p>
              <p className="text-sand font-medium text-sm group-hover:text-gold transition-colors">
                ahmedehab2n5@gmail.com
              </p>
            </div>
            <span className="ml-auto text-xs text-gold/40 group-hover:text-gold transition-colors">
              {copied === 'email' ? '✓ Copied!' : 'Click to copy'}
            </span>
          </button>

          {/* Phone */}
          <button
            onClick={() => copyToClipboard('+201101670389', 'phone')}
            className="card flex items-center gap-4 text-left group hover:-translate-y-1 cursor-pointer min-w-[260px]"
          >
            <div className="w-10 h-10 rounded-sm bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
              <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-sand-dark mb-0.5">Phone</p>
              <p className="text-sand font-medium text-sm group-hover:text-gold transition-colors">
                +20 110 167 0389
              </p>
            </div>
            <span className="ml-auto text-xs text-gold/40 group-hover:text-gold transition-colors">
              {copied === 'phone' ? '✓ Copied!' : 'Click to copy'}
            </span>
          </button>
        </div>

        {/* Email CTA */}
        <a
          href="mailto:ahmedehab2n5@gmail.com"
          className="btn-primary text-base px-10 py-4 inline-flex"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Send me an Email
        </a>

        {/* Location badge */}
        <div className="flex items-center justify-center gap-2 mt-10 text-sand-dark/60 text-sm">
          <svg className="w-4 h-4 text-gold/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Alexandria, Egypt
        </div>
      </div>
    </section>
  )
}
