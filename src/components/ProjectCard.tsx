import { Link } from 'react-router-dom';
import { ArrowRight, Lock } from 'lucide-react';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  style?: React.CSSProperties;
}

export default function ProjectCard({ project, style }: ProjectCardProps) {
  return (
    <article
      className="card"
      style={{
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        ...style
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {project.categories.slice(0, 2).map(cat => (
            <span key={cat} className="tag">{cat}</span>
          ))}
          {project.confidential && (
            <span className="tag tag-amber" style={{ gap: '4px' }}>
              <Lock size={10} />
              Confidentiel
            </span>
          )}
        </div>
        {project.company && (
          <span style={{ fontSize: '0.75rem', color: 'var(--color-text-3)', whiteSpace: 'nowrap' }}>
            {project.company}
          </span>
        )}
      </div>

      {/* Title */}
      <div>
        <h3 style={{
          margin: '0 0 8px',
          fontSize: '1.05rem',
          fontWeight: 600,
          color: 'var(--color-text)',
          lineHeight: 1.3
        }}>
          {project.title}
        </h3>
        <p style={{
          margin: 0,
          fontSize: '0.875rem',
          color: 'var(--color-text-2)',
          lineHeight: 1.6
        }}>
          {project.shortDescription}
        </p>
      </div>

      {/* Stack */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {project.stack.slice(0, 5).map(tech => (
          <span key={tech} className="tag-gray" style={{
            display: 'inline-block',
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
        {project.stack.length > 5 && (
          <span style={{
            display: 'inline-block',
            padding: '3px 10px',
            borderRadius: '999px',
            fontSize: '0.72rem',
            color: 'var(--color-text-3)',
          }}>
            +{project.stack.length - 5}
          </span>
        )}
      </div>

      {/* Footer */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 'auto',
        paddingTop: '4px'
      }}>
        {project.period && (
          <span style={{ fontSize: '0.78rem', color: 'var(--color-text-3)' }}>
            {project.period}
          </span>
        )}
        <Link
          to={`/projets/${project.slug}`}
          id={`project-link-${project.id}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.8125rem',
            fontWeight: 600,
            color: 'var(--color-accent)',
            textDecoration: 'none',
            marginLeft: 'auto',
            transition: 'gap 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.gap = '10px')}
          onMouseLeave={(e) => (e.currentTarget.style.gap = '6px')}
        >
          Voir le projet <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
}
