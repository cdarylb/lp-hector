import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >{children}</motion.div>
  )
}

function PhotoCard() {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      style={{ position: 'relative', aspectRatio: '3/4', borderRadius: 16, overflow: 'hidden', cursor: 'pointer' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Photo */}
      <img
        src="/hector/Hector.jpg"
        alt="Hector Beaufrere"
        style={{
          width: '100%', height: '100%', display: 'block',
          objectFit: 'cover', objectPosition: 'center top',
          filter: hovered
            ? 'grayscale(0%) contrast(1) brightness(1.02)'
            : 'grayscale(100%) contrast(1.15) brightness(0.9)',
          transition: 'filter 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      />

      {/* Vignette permanent */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 50% 20%, transparent 45%, rgba(10,13,18,0.65) 100%)',
      }} />

      {/* Bottom gradient + info — slide on hover */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '48px 20px 20px',
        background: 'linear-gradient(to top, rgba(10,13,18,0.95) 0%, transparent 100%)',
        transform: hovered ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }}>
        <p style={{ margin: 0, fontSize: 15, fontWeight: 700, color: 'white', letterSpacing: '-0.02em' }}>
          Hector Beaufrere
        </p>
        <p style={{ margin: '3px 0 0', fontSize: 12, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          BTS Communication
        </p>
      </div>

      {/* Brand dot — top right */}
      <div style={{
        position: 'absolute', top: 16, right: 16,
        width: 8, height: 8, borderRadius: '50%',
        background: 'var(--color-brand-500)',
        boxShadow: '0 0 12px var(--color-brand-500)',
        opacity: hovered ? 0 : 1,
        transition: 'opacity 0.3s',
      }} />
    </div>
  )
}

const stats = [
  { value: '2 ans', label: 'BTS Communication' },
  { value: '∞', label: 'idées par jour' },
  { value: 'Paris', label: 'basé à' },
]

export default function About() {
  return (
    <section id="about" style={{ padding: '128px 32px' }}>
      <div style={{ maxWidth: 1152, margin: '0 auto' }}>

        {/* Section label */}
        <Reveal>
          <p style={{
            fontSize: 11, fontWeight: 600, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'var(--color-gray-600)',
            marginBottom: 64,
          }}>
            01 — À propos
          </p>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 80, alignItems: 'start' }}>

          {/* Text block */}
          <div>
            <Reveal delay={0.05}>
              <h2 style={{
                fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800,
                letterSpacing: '-0.03em', lineHeight: 1.1,
                color: 'var(--color-gray-25)', marginBottom: 32,
              }}>
                Un créatif qui<br />
                <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--color-gray-500)' }}>cherche sa voix.</em>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--color-gray-400)', marginBottom: 20, letterSpacing: '-0.01em' }}>
                Actuellement en BTS Communication, je m'intéresse à tout ce qui
                raconte quelque chose : une image bien cadrée, un logo qui claque,
                un texte qui accroche.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--color-gray-400)', letterSpacing: '-0.01em' }}>
                Je crois que la communication c'est avant tout de l'émotion mise en forme.
                Curieux, un peu perfectionniste, toujours partant pour un nouveau projet.
              </p>
            </Reveal>

            {/* Stats */}
            <Reveal delay={0.2}>
              <div style={{ marginTop: 48, display: 'flex', gap: 40, paddingTop: 40, borderTop: '1px solid var(--color-gray-800)' }}>
                {stats.map(s => (
                  <div key={s.label}>
                    <p style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--color-gray-25)' }}>{s.value}</p>
                    <p style={{ fontSize: 12, color: 'var(--color-gray-600)', marginTop: 4, letterSpacing: '-0.01em' }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Photo */}
          <Reveal delay={0.1}>
            <PhotoCard />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
