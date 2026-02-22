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

const projects = [
  {
    n: '01',
    tag: 'Identité visuelle',
    year: '2025',
    title: 'Projet Association XYZ',
    desc: "Création de l'identité graphique complète d'une association étudiante : logo, charte, supports de communication.",
  },
  {
    n: '02',
    tag: 'Campagne',
    year: '2025',
    title: 'Campagne de sensibilisation',
    desc: "Conception d'une campagne print et digitale sur un sujet de société, dans le cadre du BTS.",
  },
  {
    n: '03',
    tag: 'Photo',
    year: '2024',
    title: 'Série photographique',
    desc: 'Un projet personnel explorant [thème]. Cadrage, lumière, post-traitement — un premier regard mis en série.',
  },
]

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '128px 32px' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto' }}>

        <Reveal>
          <p style={{
            fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'var(--color-gray-600)', marginBottom: 64,
          }}>
            03 — Projets
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, marginBottom: 80 }}>
            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800,
              letterSpacing: '-0.03em', lineHeight: 1.1,
              color: 'var(--color-gray-25)',
            }}>
              Ce sur quoi<br />
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--color-gray-500)' }}>j'ai travaillé.</em>
            </h2>
            <p style={{ fontSize: 13, color: 'var(--color-gray-600)', maxWidth: 280, lineHeight: 1.65, letterSpacing: '-0.01em' }}>
              Des projets de cours, des expériences perso — tout ça grandit avec moi.
            </p>
          </div>
        </Reveal>

        {/* Project list */}
        <div>
          {projects.map((p, i) => (
            <Reveal key={p.n} delay={0.05 * i}>
              <motion.div
                whileHover={{ paddingLeft: 40 }}
                transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '48px 1fr auto',
                  gap: 32,
                  padding: '32px 0 32px 24px',
                  borderTop: '1px solid var(--color-gray-800)',
                  cursor: 'default', alignItems: 'center',
                }}
              >
                {/* Number */}
                <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--color-gray-700)', letterSpacing: '0.08em', alignSelf: 'start', paddingTop: 4 }}>
                  {p.n}
                </p>

                {/* Content */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                    <span style={{
                      fontSize: 11, fontWeight: 600, letterSpacing: '0.08em',
                      textTransform: 'uppercase', color: 'var(--color-brand-600)',
                    }}>{p.tag}</span>
                    <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--color-gray-700)', display: 'inline-block' }} />
                    <span style={{ fontSize: 12, color: 'var(--color-gray-600)' }}>{p.year}</span>
                  </div>
                  <h3 style={{
                    fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em',
                    color: 'var(--color-gray-25)', marginBottom: 8,
                  }}>{p.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--color-gray-500)', maxWidth: 560, letterSpacing: '-0.01em' }}>
                    {p.desc}
                  </p>
                </div>

                {/* Arrow */}
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} style={{ color: 'var(--color-gray-700)', flexShrink: 0 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </motion.div>
            </Reveal>
          ))}
          <div style={{ borderTop: '1px solid var(--color-gray-800)' }} />
        </div>

      </div>
    </section>
  )
}
