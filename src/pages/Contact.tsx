import { Mail, Phone, MapPin, Download } from 'lucide-react';

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);


export default function Contact() {
  return (
    <main style={{ paddingTop: '64px' }}>
      <section className="section">
        <div className="container" style={{ maxWidth: '700px' }}>
          {/* Header */}
          <div style={{ marginBottom: '48px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Contact
            </span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, margin: '8px 0 12px', letterSpacing: '-0.03em' }}>
              Travaillons ensemble
            </h1>
            <p style={{ color: 'var(--color-text-2)', maxWidth: '480px', lineHeight: 1.7 }}>
              Disponible pour des opportunités en alternance, stage ou collaboration.
              N'hésitez pas à me contacter directement.
            </p>
          </div>

          {/* Contact cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
            <a
              id="contact-email"
              href="mailto:khachnaneothemane@gmail.com"
              className="card"
              style={{
                padding: '20px 24px',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                backgroundColor: 'rgba(34, 197, 94, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-accent)',
                flexShrink: 0,
              }}>
                <Mail size={18} />
              </div>
              <div>
                <p style={{ margin: '0 0 2px', fontWeight: 600, color: 'var(--color-text)', fontSize: '0.9rem' }}>Email</p>
                <p style={{ margin: 0, color: 'var(--color-text-2)', fontSize: '0.875rem' }}>khachnaneothemane@gmail.com</p>
              </div>
            </a>

            <a
              id="contact-phone"
              href="tel:+33749652782"
              className="card"
              style={{
                padding: '20px 24px',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                backgroundColor: 'rgba(34, 197, 94, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-accent)',
                flexShrink: 0,
              }}>
                <Phone size={18} />
              </div>
              <div>
                <p style={{ margin: '0 0 2px', fontWeight: 600, color: 'var(--color-text)', fontSize: '0.9rem' }}>Téléphone</p>
                <p style={{ margin: 0, color: 'var(--color-text-2)', fontSize: '0.875rem' }}>07 49 65 27 82</p>
              </div>
            </a>

            <div
              className="card"
              style={{
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                backgroundColor: 'rgba(34, 197, 94, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-accent)',
                flexShrink: 0,
              }}>
                <MapPin size={18} />
              </div>
              <div>
                <p style={{ margin: '0 0 2px', fontWeight: 600, color: 'var(--color-text)', fontSize: '0.9rem' }}>Localisation</p>
                <p style={{ margin: 0, color: 'var(--color-text-2)', fontSize: '0.875rem' }}>Paris / Lille — France</p>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div style={{ marginBottom: '40px' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-3)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 14px' }}>
              Réseaux
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                id="social-linkedin"
                href="https://www.linkedin.com/in/othemane-khachnane-5230b0264/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ padding: '10px 20px' }}
              >
                <LinkedinIcon />
                LinkedIn
              </a>
              <a
                id="social-github"
                href="https://github.com/ibnakrm"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ padding: '10px 20px' }}
              >
                <GithubIcon />
                GitHub
              </a>
              <a
                id="contact-download-cv"
                href="/cv.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ padding: '10px 20px' }}
              >
                <Download size={16} />
                Télécharger le CV
              </a>
            </div>
          </div>

          {/* Note */}
          <div style={{
            padding: '16px 20px',
            borderRadius: '10px',
            backgroundColor: 'rgba(34, 197, 94, 0.05)',
            border: '1px solid rgba(34, 197, 94, 0.15)',
          }}>
            <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-text-2)', lineHeight: 1.7 }}>
              💬 <strong style={{ color: 'var(--color-text)' }}>Temps de réponse :</strong> Je réponds généralement dans les 24h.
              Pour les candidatures ou collaborations, précisez le contexte de votre message pour que je puisse vous répondre efficacement.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
