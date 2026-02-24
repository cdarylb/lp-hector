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

const experiences = [
  {
    n: '01',
    tag: 'CDD · 4 mois',
    year: 'Avr–Juil 2025',
    title: 'Conseiller de vente',
    company: 'PokéMagique, Puteaux (92)',
    desc: 'Adaptation aux différentes demandes clients, tri et organisation des achats/revente de cartes à collectionner. Prise d\'autonomie et montée en compétence en vente.',
  },
  {
    n: '02',
    tag: 'Stage d\'observation',
    year: 'Jan 2021',
    title: 'Stagiaire',
    company: 'La Poste, Chanteloup-les-Vignes (78)',
    desc: 'Découverte des métiers, tâches administratives, support client et entretiens téléphoniques. Renforcement de l\'autonomie en environnement professionnel.',
  },
  {
    n: '03',
    tag: 'Formation en cours',
    year: '2025–2026',
    title: 'BTS Communication',
    company: 'CNED - à distance',
    desc: 'Cursus complet en autonomie : stratégie de communication, création de contenus, identité de marque. Bac général obtenu mention Assez Bien (2024).',
  },
]

export default function Projects() {
  return (
    <section id="experiences" className="section-pad" style={{ padding: '48px 32px' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto' }}>

        <Reveal>
          <p style={{
            fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'var(--color-gray-600)', marginBottom: 36,
          }}>
            03 - Expériences
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, marginBottom: 48 }}>
            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800,
              letterSpacing: '-0.03em', lineHeight: 1.1,
              color: 'var(--color-gray-25)',
            }}>
              Mon parcours -{' '}
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--color-gray-500)' }}>professionnel et scolaire.</em>
            </h2>
            <p style={{ fontSize: 13, color: 'var(--color-gray-600)', maxWidth: 280, lineHeight: 1.65, letterSpacing: '-0.01em' }}>
              Permis B · Basé à Poissy (78)
            </p>
          </div>
        </Reveal>

        <div>
          {experiences.map((e, i) => (
            <Reveal key={e.n} delay={0.05 * i}>
              <motion.div
                whileHover={{ paddingLeft: 40 }}
                transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="exp-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '48px 1fr auto',
                  gap: 32,
                  padding: '32px 0 32px 24px',
                  borderTop: '1px solid var(--color-gray-800)',
                  cursor: 'default', alignItems: 'start',
                }}
              >
                <p className="exp-num" style={{ fontSize: 11, fontWeight: 600, color: 'var(--color-gray-700)', letterSpacing: '0.08em', paddingTop: 4 }}>
                  {e.n}
                </p>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6, flexWrap: 'wrap' }}>
                    <span style={{
                      fontSize: 11, fontWeight: 600, letterSpacing: '0.08em',
                      textTransform: 'uppercase', color: 'var(--color-brand-600)',
                    }}>{e.tag}</span>
                    <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--color-gray-700)', display: 'inline-block' }} />
                    <span style={{ fontSize: 12, color: 'var(--color-gray-600)' }}>{e.year}</span>
                  </div>
                  <h3 style={{
                    fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em',
                    color: 'var(--color-gray-25)', marginBottom: 4,
                  }}>{e.title}</h3>
                  <p style={{ fontSize: 13, color: 'var(--color-gray-600)', marginBottom: 10, letterSpacing: '-0.01em' }}>
                    {e.company}
                  </p>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--color-gray-500)', maxWidth: 560, letterSpacing: '-0.01em' }}>
                    {e.desc}
                  </p>
                </div>

                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="exp-arrow" style={{ color: 'var(--color-gray-800)', flexShrink: 0, marginTop: 4 }}>
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
