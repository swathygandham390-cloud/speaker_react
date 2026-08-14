import { Link } from 'react-router-dom';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/events', label: 'Events' },
  { to: '/services', label: 'Services' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        background: 'black',
        marginTop: 40,
      }}
    >
      <div
        className="container"
        style={{
          padding: '40px 32px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 24,
        }}
      >
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 18 }}>Speaker Vivek Bindra</div>
          <p style={{ fontSize: 13, marginTop: 6, maxWidth: 220 }}>
           Vivek Bindra
          </p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <p className="eyebrow" style={{ marginBottom: 10 }}>Quick links</p>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
            {quickLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                style={{ fontSize: 13, color: 'var(--ink-soft)' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div style={{ textAlign: 'right' }}>
          <p className="eyebrow" style={{ marginBottom: 10 }}>Contact</p>
          <p style={{ fontSize: 13 }}>vivekbindra90@gmail.com</p>
          <p style={{ fontSize: 13, marginTop: 4 }}>+91 1239874566</p>
        </div>
      </div>

      <div
        style={{
          borderTop: '1px solid var(--border)',
          padding: '16px 32px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: 12, color: 'var(--muted)' }}>
          &copy; 2026 Speker Vivek Bindra. All rights reserved.
        </p>
      </div>
    </footer>
  );
}



