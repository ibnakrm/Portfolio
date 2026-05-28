import { Link } from 'react-router-dom';
import { ArrowUp, Mail } from 'lucide-react';

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{
      borderTop: '1px solid var(--color-border)',
      backgroundColor: 'var(--color-surface)',
      padding: '40px 0 24px',
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '32px',
          marginBottom: '32px'
        }}>
          {/* Brand */}
          <div>
            <p style={{ fontWeight: 700, fontSize: '1.1rem', margin: '0 0 6px', color: 'var(--color-text)' }}>
              Othemane Khachnane<span style={{ color: 'var(--color-accent)' }}>.</span>
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-2)', margin: 0, maxWidth: '280px', lineHeight: 1.6 }}>
              Alternant Full Stack, Data & Automatisation IA — disponible pour de nouvelles opportunités.
            </p>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 12px' }}>Navigation</p>
              {[
                { to: '/projets', label: 'Projets' },
                { to: '/experiences', label: 'Expériences' },
                { to: '/competences', label: 'Compétences' },
                { to: '/contact', label: 'Contact' },
              ].map(link => (
                <Link key={link.to} to={link.to} style={{ display: 'block', fontSize: '0.875rem', color: 'var(--color-text-2)', textDecoration: 'none', marginBottom: '8px' }}>
                  {link.label}
                </Link>
              ))}
            </div>
            <div>
              <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 12px' }}>Liens</p>
              <a href="https://www.linkedin.com/in/othemane-khachnane-5230b0264/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--color-text-2)', textDecoration: 'none', marginBottom: '8px' }}>
                <LinkedinIcon /> LinkedIn
              </a>
              <a href="https://github.com/ibnakrm" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--color-text-2)', textDecoration: 'none', marginBottom: '8px' }}>
                <GithubIcon /> GitHub
              </a>
              <a href="mailto:khachnaneothemane@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--color-text-2)', textDecoration: 'none', marginBottom: '8px' }}>
                <Mail size={14} /> Email
              </a>
            </div>
          </div>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '20px',
          borderTop: '1px solid var(--color-border)',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--color-text-3)', margin: 0 }}>
            © 2025 Othemane Khachnane — Portfolio
          </p>
          <button
            id="scroll-to-top"
            onClick={scrollTop}
            style={{
              background: 'var(--color-surface-2)',
              border: '1px solid var(--color-border)',
              borderRadius: '6px',
              color: 'var(--color-text-2)',
              cursor: 'pointer',
              padding: '6px 10px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.8rem',
              transition: 'all 0.2s',
            }}
          >
            <ArrowUp size={14} />
            Haut de page
          </button>
        </div>
      </div>
    </footer>
  );
}
