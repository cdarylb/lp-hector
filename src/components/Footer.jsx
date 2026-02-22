export default function Footer() {
  return (
    <footer style={{
      padding: '32px',
      borderTop: '1px solid var(--color-gray-800)',
    }}>
      <div style={{
        maxWidth: 1152, margin: '0 auto',
        display: 'flex', flexWrap: 'wrap',
        justifyContent: 'space-between', gap: 16,
        fontSize: 12, color: 'var(--color-gray-700)',
        letterSpacing: '-0.01em',
      }}>
        <p>© {new Date().getFullYear()} Hector Beaufrère</p>
        <p>Fait avec passion (et quelques galères).</p>
      </div>
    </footer>
  )
}
