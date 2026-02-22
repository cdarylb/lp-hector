import { motion } from 'framer-motion'

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const up = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } } }

export default function Hero() {
  return (
    <section style={{ minHeight: '100svh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '96px 32px 64px' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto', width: '100%' }}>
        <motion.div variants={stagger} initial="hidden" animate="show">

          {/* Eyebrow */}
          <motion.p variants={up} style={{
            fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--color-brand-500)', marginBottom: 40,
          }}>
            Étudiant en communication — disponible
          </motion.p>

          {/* Name */}
          <motion.h1 variants={up} style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 'clamp(56px, 10vw, 128px)',
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: '-0.04em',
            color: 'var(--color-gray-25)',
            marginBottom: 0,
          }}>
            Hector<br />
            <span style={{ color: 'var(--color-gray-700)' }}>Beaufrere</span>
          </motion.h1>

          {/* Hashtags */}
          <motion.div variants={up} style={{ marginTop: 32, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['#créatif', '#curieux', '#communication', '#design', '#photo', '#storytelling', '#identité'].map((tag) => (
              <motion.span
                key={tag}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
                style={{
                  fontSize: 13, fontWeight: 500, letterSpacing: '-0.01em',
                  padding: '5px 12px', borderRadius: 999, cursor: 'default',
                  border: '1px solid var(--color-gray-800)',
                  color: 'var(--color-gray-600)',
                  display: 'inline-block',
                  transition: 'border-color 0.2s, color 0.2s, background 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--color-brand-500) 50%, transparent)'
                  e.currentTarget.style.color = 'var(--color-brand-400)'
                  e.currentTarget.style.background = 'color-mix(in srgb, var(--color-brand-500) 8%, transparent)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--color-gray-800)'
                  e.currentTarget.style.color = 'var(--color-gray-600)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* Bottom row */}
          <motion.div variants={up} style={{
            marginTop: 48, display: 'flex', flexWrap: 'wrap',
            alignItems: 'flex-end', justifyContent: 'space-between', gap: 32,
          }}>
            <p style={{
              fontSize: 16, lineHeight: 1.7, color: 'var(--color-gray-500)',
              maxWidth: 380, letterSpacing: '-0.01em', fontWeight: 400,
            }}>
              Je construis mon regard créatif entre image,
              message et identité. BTS Communication, 2024–2026.
            </p>

            <div style={{ display: 'flex', gap: 12, flexShrink: 0 }}>
              <a href="#projects" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                fontSize: 14, fontWeight: 600, letterSpacing: '-0.02em',
                padding: '12px 24px', borderRadius: 999,
                background: 'var(--color-gray-25)', color: 'var(--color-gray-950)',
                textDecoration: 'none', transition: 'opacity 0.15s',
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                Mes projets
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#about" style={{
                display: 'inline-flex', alignItems: 'center',
                fontSize: 14, fontWeight: 500, letterSpacing: '-0.02em',
                padding: '12px 24px', borderRadius: 999,
                border: '1px solid var(--color-gray-800)',
                color: 'var(--color-gray-400)', textDecoration: 'none', transition: 'border-color 0.15s, color 0.15s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-gray-600)'; e.currentTarget.style.color = 'var(--color-gray-25)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-gray-800)'; e.currentTarget.style.color = 'var(--color-gray-400)' }}
              >
                En savoir plus
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
