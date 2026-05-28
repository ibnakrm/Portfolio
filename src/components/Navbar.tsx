import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/projets', label: 'Projets' },
  { to: '/experiences', label: 'Expériences' },
  { to: '/competences', label: 'Compétences' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      id="navbar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'rgba(15, 17, 23, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <span style={{
            fontWeight: 800,
            fontSize: '1.2rem',
            color: 'var(--color-text)',
            letterSpacing: '-0.04em'
          }}>
            OK<span style={{ color: 'var(--color-accent)' }}>.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                padding: '6px 14px',
                borderRadius: '6px',
                fontSize: '0.875rem',
                fontWeight: 500,
                textDecoration: 'none',
                color: location.pathname === link.to ? 'var(--color-accent)' : 'var(--color-text-2)',
                backgroundColor: location.pathname === link.to ? 'rgba(34, 197, 94, 0.1)' : 'transparent',
                transition: 'all 0.18s ease',
              }}
              onMouseEnter={(e) => {
                if (location.pathname !== link.to) {
                  (e.target as HTMLElement).style.color = 'var(--color-text)';
                  (e.target as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.04)';
                }
              }}
              onMouseLeave={(e) => {
                if (location.pathname !== link.to) {
                  (e.target as HTMLElement).style.color = 'var(--color-text-2)';
                  (e.target as HTMLElement).style.backgroundColor = 'transparent';
                }
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/cv.html"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ marginLeft: '8px', padding: '7px 16px', fontSize: '0.8125rem' }}
          >
            <Download size={14} />
            CV
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-toggle"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--color-text)',
            cursor: 'pointer',
            padding: '4px',
            display: 'none'
          }}
          aria-label="Menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          backgroundColor: 'rgba(15, 17, 23, 0.98)',
          backdropFilter: 'blur(16px)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '12px 24px 20px',
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                display: 'block',
                padding: '12px 0',
                fontSize: '1rem',
                fontWeight: 500,
                textDecoration: 'none',
                color: location.pathname === link.to ? 'var(--color-accent)' : 'var(--color-text)',
                borderBottom: '1px solid rgba(255,255,255,0.04)',
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/cv.html"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ marginTop: '16px', width: '100%', justifyContent: 'center' }}
          >
            <Download size={15} />
            Télécharger le CV
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}
