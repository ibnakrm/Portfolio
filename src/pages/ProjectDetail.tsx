import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Lock, 
  CheckCircle,
  Building,
  Calendar,
  FileText,
  HelpCircle,
  Lightbulb,
  Wrench,
  TrendingUp,
  BookOpen
} from 'lucide-react';
import { projects } from '../data/projects';

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <main style={{ paddingTop: '64px', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--color-text-2)', marginBottom: '16px' }}>Projet introuvable.</p>
          <button onClick={() => navigate('/projets')} className="btn-outline">← Retour aux projets</button>
        </div>
      </main>
    );
  }

  const related = projects.filter(p => p.id !== project.id && p.categories.some(c => project.categories.includes(c))).slice(0, 2);

  return (
    <main style={{ paddingTop: '64px' }}>
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          {/* Back */}
          <Link
            to="/projets"
            id="back-to-projects"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.875rem',
              color: 'var(--color-text-2)',
              textDecoration: 'none',
              marginBottom: '32px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-2)')}
          >
            <ArrowLeft size={14} /> Retour aux projets
          </Link>

          {/* Header */}
          <div style={{ marginBottom: '40px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
              {project.categories.map(cat => (
                <span key={cat} className="tag">{cat}</span>
              ))}
              {project.confidential && (
                <span className="tag tag-amber" style={{ gap: '4px' }}>
                  <Lock size={10} />
                  Confidentiel
                </span>
              )}
            </div>
            <h1 style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
              fontWeight: 800,
              margin: '0 0 12px',
              letterSpacing: '-0.03em',
              lineHeight: 1.2,
            }}>
              {project.title}
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-2)', margin: '0 0 16px', lineHeight: 1.6 }}>
              {project.shortDescription}
            </p>
            <div style={{ display: 'flex', gap: '16px', fontSize: '0.85rem', color: 'var(--color-text-3)', flexWrap: 'wrap', alignItems: 'center' }}>
              {project.company && (
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <Building size={14} style={{ color: 'var(--color-accent)' }} /> {project.company}
                </span>
              )}
              {project.period && (
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <Calendar size={14} style={{ color: 'var(--color-accent)' }} /> {project.period}
                </span>
              )}
            </div>

            {project.gitUrl && (
              <div style={{ marginTop: '24px' }}>
                <a
                  href={project.gitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.85rem',
                    padding: '8px 16px',
                  }}
                >
                  <GithubIcon />
                  Voir le code source
                </a>
              </div>
            )}
          </div>

          {/* Confidentiality note */}
          {project.confidential && (
            <div style={{
              padding: '12px 16px',
              borderRadius: '8px',
              backgroundColor: 'rgba(148, 163, 184, 0.06)',
              border: '1px solid rgba(148, 163, 184, 0.15)',
              marginBottom: '32px',
              fontSize: '0.85rem',
              color: 'var(--color-text-3)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <Lock size={14} />
              Certains détails techniques, données ou noms de clients ont été volontairement simplifiés ou anonymisés pour respecter la confidentialité du projet.
            </div>
          )}

          {/* Sections */}
          {[
            { label: 'Contexte', icon: <FileText size={14} />, content: project.context },
            { label: 'Problème', icon: <HelpCircle size={14} />, content: project.problem },
            { label: 'Solution', icon: <Lightbulb size={14} />, content: project.solution },
          ].map(({ label, icon, content }) => (
            <div key={label} style={{ marginBottom: '32px' }}>
              <h2 style={{ 
                fontSize: '0.8rem', 
                fontWeight: 700, 
                color: 'var(--color-accent)', 
                margin: '0 0 10px', 
                textTransform: 'uppercase', 
                letterSpacing: '0.05em',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                {icon}
                {label}
              </h2>
              <p style={{ color: 'var(--color-text-2)', lineHeight: 1.8, margin: 0 }}>{content}</p>
            </div>
          ))}

          {/* Actions */}
          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ 
              fontSize: '0.8rem', 
              fontWeight: 700, 
              color: 'var(--color-accent)', 
              margin: '0 0 14px', 
              textTransform: 'uppercase', 
              letterSpacing: '0.05em',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <CheckCircle size={14} />
              Ce que j'ai fait
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {project.actions.map((action, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle size={16} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
                  <p style={{ margin: 0, color: 'var(--color-text-2)', lineHeight: 1.6, fontSize: '0.95rem' }}>{action}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stack */}
          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ 
              fontSize: '0.8rem', 
              fontWeight: 700, 
              color: 'var(--color-accent)', 
              margin: '0 0 14px', 
              textTransform: 'uppercase', 
              letterSpacing: '0.05em',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <Wrench size={14} />
              Stack utilisée
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.stack.map(tech => (
                <span key={tech} style={{
                  padding: '5px 14px',
                  borderRadius: '999px',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  color: 'var(--color-text)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Impact */}
          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ 
              fontSize: '0.8rem', 
              fontWeight: 700, 
              color: 'var(--color-accent)', 
              margin: '0 0 14px', 
              textTransform: 'uppercase', 
              letterSpacing: '0.05em',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <TrendingUp size={14} />
              Impact
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {project.impact.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ color: 'var(--color-accent)', flexShrink: 0 }}>→</span>
                  <p style={{ margin: 0, color: 'var(--color-text-2)', lineHeight: 1.6, fontSize: '0.95rem' }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Learnings */}
          <div style={{
            marginBottom: '48px',
            padding: '20px 24px',
            borderRadius: '10px',
            backgroundColor: 'rgba(34, 197, 94, 0.05)',
            border: '1px solid rgba(34, 197, 94, 0.15)',
          }}>
            <h2 style={{ 
              fontSize: '0.8rem', 
              fontWeight: 700, 
              color: 'var(--color-accent)', 
              margin: '0 0 10px', 
              textTransform: 'uppercase', 
              letterSpacing: '0.05em',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <BookOpen size={14} />
              Ce que j'ai appris
            </h2>
            <p style={{ margin: 0, color: 'var(--color-text-2)', lineHeight: 1.8 }}>{project.learnings}</p>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div>
              <h2 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 20px', color: 'var(--color-text)' }}>
                Projets similaires
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
                {related.map(p => (
                  <Link
                    key={p.id}
                    to={`/projets/${p.slug}`}
                    className="card"
                    style={{ padding: '20px', textDecoration: 'none', display: 'block' }}
                  >
                    <p style={{ margin: '0 0 6px', fontWeight: 600, color: 'var(--color-text)', fontSize: '0.9rem' }}>{p.title}</p>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--color-text-2)' }}>{p.shortDescription.slice(0, 80)}…</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
