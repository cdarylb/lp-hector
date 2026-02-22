import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >{children}</motion.div>
  )
}

const socials = [
  {
    name: 'Instagram',
    handle: '@hector.beaufrere',
    href: '#',
    icon: <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>,
  },
  {
    name: 'LinkedIn',
    handle: 'Hector Beaufrère',
    href: '#',
    icon: <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,
  },
]

export default function Contact() {
  return (
    <section id="contact" style={{
      padding: '128px 32px',
      borderTop: '1px solid var(--color-gray-800)',
    }}>
      <div style={{ maxWidth: 1152, margin: '0 auto' }}>

        <Reveal>
          <p style={{
            fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'var(--color-gray-600)', marginBottom: 64,
          }}>
            04 — Contact
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 style={{
            fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: 800,
            letterSpacing: '-0.04em', lineHeight: 1.0,
            color: 'var(--color-gray-25)', marginBottom: 16,
          }}>
            On se parle ?
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p style={{
            fontSize: 16, lineHeight: 1.7, color: 'var(--color-gray-500)',
            maxWidth: 480, letterSpacing: '-0.01em', marginBottom: 56,
          }}>
            Projet, stage, ou juste un échange sur la com et le créatif — je suis toujours ouvert à la discussion.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <a
            href="mailto:beaufrerehector@gmail.com"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 12,
              fontSize: 'clamp(18px, 2.5vw, 28px)', fontWeight: 700,
              letterSpacing: '-0.03em', color: 'var(--color-gray-25)',
              textDecoration: 'none', transition: 'color 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--color-brand-400)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--color-gray-25)'}
          >
            beaufrerehector@gmail.com
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ flexShrink: 0 }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        </Reveal>

        <Reveal delay={0.2}>
          <div style={{ marginTop: 48, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            {socials.map(s => (
              <a
                key={s.name}
                href={s.href}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  fontSize: 13, fontWeight: 500, letterSpacing: '-0.01em',
                  padding: '10px 16px', borderRadius: 8,
                  border: '1px solid var(--color-gray-800)',
                  color: 'var(--color-gray-500)', textDecoration: 'none',
                  transition: 'border-color 0.15s, color 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-gray-600)'; e.currentTarget.style.color = 'var(--color-gray-25)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-gray-800)'; e.currentTarget.style.color = 'var(--color-gray-500)' }}
              >
                {s.icon}
                {s.handle}
              </a>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  )
}
