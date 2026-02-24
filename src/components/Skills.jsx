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

const skills = [
  { n: '01', title: 'Communication', desc: 'Écrite et orale. Capable de porter un message clairement, adapter son discours, convaincre.' },
  { n: '02', title: 'Sens de l\'initiative', desc: 'Je prends les devants, j\'anticipe, je propose - sans attendre qu\'on me le demande.' },
  { n: '03', title: 'Minutieux & rigoureux', desc: 'Chaque détail compte. Dans le travail comme dans les projets, rien n\'est laissé au hasard.' },
  { n: '04', title: 'Langues', desc: 'Français langue maternelle · Anglais B2 (lu, écrit, parlé) · Espagnol A1.' },
  { n: '05', title: 'Relation client', desc: 'Expérience terrain en conseil de vente : écoute, adaptation, satisfaction client.' },
  { n: '06', title: 'Centres d\'intérêt', desc: 'Parfums, cartes à collectionner, culture geek - des univers où l\'identité et la communauté comptent.' },
]

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: '48px 32px',
        borderTop: '1px solid var(--color-gray-800)',
        borderBottom: '1px solid var(--color-gray-800)',
      }}
    >
      <div style={{ maxWidth: 1152, margin: '0 auto' }}>

        <Reveal>
          <p style={{
            fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'var(--color-gray-600)',
            marginBottom: 36,
          }}>
            02 - Compétences
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800,
            letterSpacing: '-0.03em', lineHeight: 1.1,
            color: 'var(--color-gray-25)', marginBottom: 48,
          }}>
            Ce que j'apporte -{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--color-gray-600)' }}>
              et ce qui me définit.
            </em>
          </h2>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1px', background: 'var(--color-gray-800)' }}>
          {skills.map((s, i) => (
            <Reveal key={s.n} delay={0.04 * i}>
              <motion.div
                whileHover={{ background: 'color-mix(in srgb, var(--color-gray-800) 50%, var(--color-gray-950))' }}
                transition={{ duration: 0.15 }}
                style={{ padding: 32, background: 'var(--color-gray-950)' }}
              >
                <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--color-brand-600)', letterSpacing: '0.1em', marginBottom: 20 }}>
                  {s.n}
                </p>
                <h3 style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--color-gray-25)', marginBottom: 12 }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--color-gray-500)', letterSpacing: '-0.01em' }}>
                  {s.desc}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
