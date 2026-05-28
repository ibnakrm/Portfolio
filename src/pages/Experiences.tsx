import { experiences, education } from '../data/experiences';
import { Briefcase, GraduationCap, CheckCircle } from 'lucide-react';

export default function Experiences() {
  return (
    <main style={{ paddingTop: '64px' }}>
      <section className="section">
        <div className="container">
          {/* Header */}
          <div style={{ marginBottom: '56px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Parcours
            </span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, margin: '8px 0 12px', letterSpacing: '-0.03em' }}>
              Expériences
            </h1>
            <p style={{ color: 'var(--color-text-2)', maxWidth: '560px', lineHeight: 1.7 }}>
              Des expériences concrètes en entreprise sur des sujets réels : automatisation,
              data, BI, intégrations API et IA appliquée.
            </p>
          </div>

          {/* Experiences */}
          <div style={{ marginBottom: '64px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '32px' }}>
              <Briefcase size={18} style={{ color: 'var(--color-accent)' }} />
              <h2 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>Expériences professionnelles</h2>
            </div>

            <div style={{ position: 'relative', paddingLeft: '40px' }}>
              <div className="timeline-line" />

              {experiences.map((exp, idx) => (
                <article key={exp.id} style={{
                  marginBottom: idx < experiences.length - 1 ? '48px' : 0,
                  position: 'relative',
                }}>
                  {/* Timeline dot */}
                  <div style={{
                    position: 'absolute',
                    left: '-28px',
                    top: '6px',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: exp.current ? 'var(--color-accent)' : 'var(--color-surface-2)',
                    border: `2px solid ${exp.current ? 'var(--color-accent)' : 'var(--color-border-hover)'}`,
                    boxShadow: exp.current ? '0 0 0 4px rgba(34, 197, 94, 0.15)' : 'none',
                  }} />

                  <div className="card" style={{ padding: '28px' }}>
                    {/* Header */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
                      <div>
                        <h3 style={{ margin: '0 0 4px', fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-text)' }}>
                          {exp.title}
                        </h3>
                        <p style={{ margin: 0, fontWeight: 600, color: 'var(--color-accent)', fontSize: '0.9rem' }}>
                          {exp.company}
                        </p>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                        <span style={{
                          fontSize: '0.8rem',
                          color: 'var(--color-text-2)',
                          padding: '3px 10px',
                          borderRadius: '999px',
                          backgroundColor: 'rgba(255,255,255,0.05)',
                          border: '1px solid var(--color-border)',
                          whiteSpace: 'nowrap',
                        }}>
                          {exp.period}
                        </span>
                        {exp.current && (
                          <span style={{
                            fontSize: '0.7rem',
                            fontWeight: 600,
                            color: 'var(--color-accent)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                          }}>
                            <span className="dot-pulse" style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-accent)', display: 'inline-block' }} />
                            En cours
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Context */}
                    <p style={{ margin: '12px 0 16px', color: 'var(--color-text-2)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      {exp.context}
                    </p>

                    {/* Missions */}
                    <div style={{ marginBottom: '16px' }}>
                      <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-3)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 10px' }}>
                        Missions
                      </p>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '6px' }}>
                        {exp.missions.map((m, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                            <CheckCircle size={13} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '3px' }} />
                            <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-text-2)', lineHeight: 1.5 }}>{m}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stack */}
                    <div style={{ marginBottom: '16px' }}>
                      <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-3)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 8px' }}>
                        Technologies
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {exp.stack.map(tech => (
                          <span key={tech} style={{
                            padding: '3px 10px',
                            borderRadius: '999px',
                            fontSize: '0.72rem',
                            fontWeight: 500,
                            backgroundColor: 'rgba(255,255,255,0.05)',
                            color: 'var(--color-text-2)',
                            border: '1px solid rgba(255,255,255,0.08)',
                          }}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Impact */}
                    <div style={{
                      padding: '12px 16px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(34, 197, 94, 0.05)',
                      border: '1px solid rgba(34, 197, 94, 0.12)',
                      marginBottom: exp.autonomyAndInteractions ? '16px' : 0
                    }}>
                      <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 6px' }}>
                        Impact
                      </p>
                      <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-text-2)', lineHeight: 1.6 }}>
                        {exp.impact}
                      </p>
                    </div>

                    {/* Autonomie & Interactions */}
                    {exp.autonomyAndInteractions && (
                      <div style={{
                        padding: '16px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid var(--color-border)',
                      }}>
                        <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-3)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 8px' }}>
                          Autonomie & Interactions Professionnelles
                        </p>
                        <div style={{ fontSize: '0.85rem', color: 'var(--color-text-2)', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                          {exp.autonomyAndInteractions}
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '32px' }}>
              <GraduationCap size={18} style={{ color: 'var(--color-accent)' }} />
              <h2 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>Formation</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              {education.map(edu => (
                <article key={edu.id} className="card" style={{ padding: '24px' }}>
                  <p style={{ margin: '0 0 4px', fontWeight: 700, fontSize: '1rem', color: 'var(--color-text)' }}>{edu.degree}</p>
                  <p style={{ margin: '0 0 8px', fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-accent)' }}>{edu.school}</p>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--color-text-3)' }}>{edu.period}</p>
                  {edu.description && (
                    <p style={{ margin: '8px 0 0', fontSize: '0.85rem', color: 'var(--color-text-2)' }}>{edu.description}</p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
