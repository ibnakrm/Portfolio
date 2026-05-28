import { useState } from 'react';
import { projects, categories } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('Tous');

  const filtered = activeFilter === 'Tous'
    ? [...projects].sort((a, b) => a.order - b.order)
    : [...projects].filter(p => p.categories.includes(activeFilter)).sort((a, b) => a.order - b.order);

  return (
    <main style={{ paddingTop: '64px' }}>
      <section className="section">
        <div className="container">
          {/* Header */}
          <div style={{ marginBottom: '48px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Portfolio
            </span>
            <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, margin: '8px 0 12px', letterSpacing: '-0.03em' }}>
              Mes projets
            </h1>
            <p style={{ color: 'var(--color-text-2)', maxWidth: '560px', lineHeight: 1.7, fontSize: '1rem' }}>
              Des cas concrets réalisés en alternance, en stage et en apprentissage personnel.
              Chaque projet est présenté avec son contexte, la problématique et l'impact.
            </p>
          </div>

          {/* Filters */}
          <div id="project-filters" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '36px' }}>
            {categories.map(cat => (
              <button
                key={cat}
                id={`filter-${cat.toLowerCase().replace(/[\s/]/g, '-')}`}
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Count */}
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-3)', marginBottom: '24px' }}>
            {filtered.length} projet{filtered.length > 1 ? 's' : ''} {activeFilter !== 'Tous' ? `en ${activeFilter}` : 'au total'}
          </p>

          {/* Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
            gap: '16px',
          }}>
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--color-text-3)' }}>
              Aucun projet dans cette catégorie.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
