import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Mail, MapPin, Briefcase, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  // Show all featured projects in the carousel
  const featuredProjects = projects.filter(p => p.featured);
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  // Monitor scroll positioning to update the active index (handles swipe on mobile)
  const handleScroll = () => {
    if (trackRef.current) {
      const { scrollLeft } = trackRef.current;
      const items = trackRef.current.children;
      if (items.length > 0) {
        const firstItem = items[0] as HTMLElement;
        const itemWidth = firstItem.getBoundingClientRect().width + 20; // width + gap
        const index = Math.min(
          Math.round(scrollLeft / itemWidth),
          items.length - 1
        );
        setActiveIndex(index);
      }
    }
  };

  const scrollToCard = (index: number) => {
    if (trackRef.current) {
      const items = trackRef.current.children;
      if (items[index]) {
        const item = items[index] as HTMLElement;
        trackRef.current.scrollTo({
          left: item.offsetLeft - trackRef.current.offsetLeft,
          behavior: 'smooth',
        });
      }
    }
  };

  const handleNext = () => {
    let nextIndex = activeIndex + 1;
    if (nextIndex >= featuredProjects.length) {
      nextIndex = 0;
    }
    scrollToCard(nextIndex);
  };

  const handlePrev = () => {
    let prevIndex = activeIndex - 1;
    if (prevIndex < 0) {
      prevIndex = featuredProjects.length - 1;
    }
    scrollToCard(prevIndex);
  };

  return (
    <main style={{ paddingTop: '64px' }}>
      {/* Hero Section */}
      <section style={{
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '60px 0',
      }}>
        {/* Subtle radial glow background */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(34,197,94,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px',
            alignItems: 'center',
          }}>
            {/* Left: Intro / Typo */}
            <div>
              {/* Availability tag */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '999px',
                backgroundColor: 'rgba(34, 197, 94, 0.08)',
                border: '1px solid rgba(34, 197, 94, 0.2)',
                marginBottom: '24px',
              }}>
                <span className="dot-pulse" style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-accent)',
                  display: 'inline-block',
                }} />
                <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--color-accent)', letterSpacing: '0.02em' }}>
                  Disponible — Alternance & Opportunités
                </span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
                fontWeight: 900,
                margin: '0 0 16px',
                letterSpacing: '-0.04em',
                lineHeight: 1.05,
                color: 'var(--color-text)',
              }}>
                Othemane<br />Khachnane<span style={{ color: 'var(--color-accent)' }}>.</span>
              </h1>

              <p style={{
                fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)',
                fontWeight: 500,
                color: 'var(--color-text-2)',
                margin: '0 0 24px',
                lineHeight: 1.4,
                letterSpacing: '-0.01em',
              }}>
                Spécialiste de la <span style={{ color: 'var(--color-text)' }}>Data</span>, de l'
                <span className="gradient-text">automatisation</span> et de l'
                <span style={{ color: 'var(--color-text)' }}>IA appliquée</span>.
              </p>

              <p style={{
                fontSize: '0.95rem',
                color: 'var(--color-text-2)',
                lineHeight: 1.7,
                margin: '0 0 32px',
                maxWidth: '480px',
              }}>
                Je conçois des solutions techniques robustes pour orchestrer les flux de travail, fiabiliser la donnée d'entreprise et maximiser l'impact des technologies d'intelligence artificielle.
              </p>

              {/* CTAs */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '32px' }}>
                <Link id="cta-projets" to="/projets" className="btn-primary" style={{ fontSize: '0.85rem', padding: '10px 22px' }}>
                  Projets sélectionnés <ArrowRight size={14} />
                </Link>
                <a
                  id="cta-cv"
                  href="/documents/Khachnane Othemane CV.pdf"
                  download
                  className="btn-outline"
                  style={{ fontSize: '0.85rem', padding: '10px 22px' }}
                >
                  <Download size={14} />
                  Télécharger le CV
                </a>
              </div>

              <div style={{ display: 'flex', gap: '20px', fontSize: '0.8125rem', color: 'var(--color-text-3)', flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <MapPin size={14} style={{ color: 'var(--color-accent)' }} /> Paris / Lille, France
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Briefcase size={14} style={{ color: 'var(--color-accent)' }} /> Alternant chez Symbolist.ai
                </span>
              </div>
            </div>

            {/* Right: Fine-art Portrait Frame */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ position: 'relative', width: '100%', maxWidth: '300px', margin: '20px 0' }}>
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '-12px',
                  width: '100%',
                  height: '100%',
                  border: '1px solid rgba(34, 197, 94, 0.3)',
                  borderRadius: '20px',
                  zIndex: 0,
                  pointerEvents: 'none',
                }} />
                <img
                  src="/images/avatar.png"
                  alt="Othemane Khachnane"
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: 'auto',
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
                    objectFit: 'cover',
                    objectPosition: 'center 22%',
                    aspectRatio: '1 / 1',
                    zIndex: 1,
                    display: 'block',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Bio Section */}
      <section style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', padding: '72px 0', backgroundColor: 'rgba(22, 27, 39, 0.3)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span style={{ display: 'block', textAlign: 'center', fontSize: '0.72rem', fontWeight: 600, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>
            Positionnement
          </span>
          <h2 style={{
            fontSize: 'clamp(1.4rem, 3vw, 1.85rem)',
            fontWeight: 800,
            lineHeight: 1.4,
            color: 'var(--color-text)',
            textAlign: 'center',
            letterSpacing: '-0.02em',
            margin: '0 0 28px',
          }}>
            L'hybridation entre <span className="gradient-text">ingénierie technique</span> et <span style={{ color: 'var(--color-text)' }}>compréhension des enjeux métier</span>.
          </h2>
          <div style={{
            color: 'var(--color-text-2)',
            fontSize: '0.95rem',
            lineHeight: 1.8,
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            textAlign: 'justify',
          }}>
            <p style={{ margin: 0 }}>
              Basé entre Lille et Paris, mon profil s'est structuré autour d'une double exigence : maîtriser l'architecture technique tout en sachant la mettre au service d'objectifs d'affaires concrets. J'accompagne les organisations dans la transition technologique en connectant leurs systèmes de manière fluide.
            </p>
            <p style={{ margin: 0 }}>
              De l'élaboration de pipelines d'automatisation complexes (Make, Node.js) au développement de solutions de traitement automatisé par IA (RAG, prompting de précision), j'attache une grande importance à la qualité et la propreté du code, à la rigueur de la modélisation de données (SQL, Supabase) et à la lisibilité des rapports de Business Intelligence (Power BI).
            </p>
          </div>
        </div>
      </section>

      {/* Curated Projects (Selected Work) */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '40px',
            flexWrap: 'wrap',
            gap: '16px',
          }}>
            <div>
              <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>
                Portefeuille
              </span>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 800, margin: 0, letterSpacing: '-0.02em' }}>
                Projets sélectionnés
              </h2>
              <p style={{ color: 'var(--color-text-2)', margin: '4px 0 0', fontSize: '0.875rem' }}>
                Études de cas réels issues de mon travail chez Symbolist.ai et de collaborations.
              </p>
            </div>
            <Link id="all-projects-link" to="/projets" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-accent)', textDecoration: 'none' }}>
              Parcourir tous les projets <ArrowRight size={14} />
            </Link>
          </div>

          <div className="carousel-container">
            <button
              onClick={handlePrev}
              className="carousel-btn prev"
              aria-label="Projet précédent"
            >
              <ChevronLeft size={20} />
            </button>

            <div
              ref={trackRef}
              onScroll={handleScroll}
              className="carousel-track"
            >
              {featuredProjects.map(p => (
                <div key={p.id} className="carousel-item">
                  <ProjectCard project={p} style={{ height: '100%' }} />
                </div>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="carousel-btn next"
              aria-label="Projet suivant"
            >
              <ChevronRight size={20} />
            </button>

            <div className="carousel-dots">
              {featuredProjects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToCard(idx)}
                  className={`carousel-dot ${activeIndex === idx ? 'active' : ''}`}
                  aria-label={`Aller au projet ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Tech Stack Overview */}
      <section style={{ borderTop: '1px solid var(--color-border)', padding: '72px 0', backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '40px',
          }}>
            {[
              { title: "Données & Décisionnel", items: ["SQL (PostgreSQL, MySQL)", "Power BI & DAX", "Modélisation relationnelle", "Migration de bases", "Nettoyage & Restitution"] },
              { title: "Flux & Automatisation", items: ["Make / Integromat", "n8n Integration", "Interconnexions APIs", "Gestion des exceptions & logs", "Développement Node.js / TS"] },
              { title: "Intelligence Artificielle", items: ["Prompt engineering de précision", "Architectures RAG", "Structuration de documents", "Anonymisation de données", "Intégration d'APIs LLM"] }
            ].map((col, idx) => (
              <div key={idx}>
                <h3 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-accent)', margin: '0 0 16px' }}>
                  {col.title}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {col.items.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--color-text-2)' }}>
                      <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--color-accent)', display: 'inline-block' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Contact Banner */}
      <section style={{ borderTop: '1px solid var(--color-border)', padding: '80px 0', backgroundColor: 'rgba(22, 27, 39, 0.4)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, margin: '0 0 12px', letterSpacing: '-0.02em' }}>
            Lancer un projet ou échanger ?
          </h2>
          <p style={{ color: 'var(--color-text-2)', margin: '0 auto 32px', lineHeight: 1.6, fontSize: '0.925rem' }}>
            Je réponds sous 24h pour discuter de vos besoins en traitement de données, création d'automates métier ou intégration d'IA.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              id="cta-contact-bottom"
              href="mailto:khachnaneothemane@gmail.com"
              className="btn-primary"
              style={{ fontSize: '0.85rem', padding: '10px 24px' }}
            >
              <Mail size={15} />
              khachnaneothemane@gmail.com
            </a>
            <Link
              to="/contact"
              className="btn-outline"
              style={{ fontSize: '0.85rem', padding: '10px 24px' }}
            >
              Coordonnées complètes <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
