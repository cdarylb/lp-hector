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


export default function Contact() {
  return (
    <section id="contact" className="section-pad" style={{
      padding: '48px 32px',
      borderTop: '1px solid var(--color-gray-800)',
    }}>
      <div style={{ maxWidth: 1152, margin: '0 auto' }}>

        <Reveal>
          <p style={{
            fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'var(--color-gray-600)', marginBottom: 36,
          }}>
            04 - Contact
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
            Projet, stage, ou juste un échange sur la com et le créatif - je suis toujours ouvert à la discussion.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <a
            href="mailto:beaufrerehector@gmail.com"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 12,
              fontSize: 'clamp(16px, 2.5vw, 28px)', fontWeight: 700,
              letterSpacing: '-0.03em', color: 'var(--color-gray-25)',
              textDecoration: 'none', transition: 'color 0.15s',
              wordBreak: 'break-word', minWidth: 0,
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
          <div style={{ marginTop: 48 }}>
            <a
              href="https://www.linkedin.com/in/hector-beaufrere/"
              target="_blank"
              rel="noopener noreferrer"
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
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              Hector Beaufrère
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
