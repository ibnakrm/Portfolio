import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';

export default function About() {
  return (
    <main style={{ paddingTop: '64px' }}>
      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '64px',
            alignItems: 'start',
          }}>
            {/* Left: Photo + infos */}
            <div>
              <div style={{ position: 'relative', display: 'inline-block', marginBottom: '28px' }}>
                <img
                  src="/images/avatar.png"
                  alt="Othemane Khachnane"
                  style={{
                    width: '180px',
                    height: '180px',
                    borderRadius: '16px',
                    objectFit: 'cover',
                    objectPosition: 'center 22%',
                    border: '2px solid var(--color-border)',
                    display: 'block',
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '-8px',
                  right: '-8px',
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--color-accent)',
                  border: '3px solid var(--color-bg)',
                }} />
              </div>

              <h1 style={{ margin: '0 0 4px', fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
                Othemane Khachnane
              </h1>
              <p style={{ margin: '0 0 20px', color: 'var(--color-accent)', fontWeight: 600, fontSize: '0.9rem' }}>
                Alternant Full Stack, Data & Automatisation IA
              </p>

              {/* Info list */}
              {[
                { label: 'Email', value: 'khachnaneothemane@gmail.com', href: 'mailto:khachnaneothemane@gmail.com' },
                { label: 'Téléphone', value: '07 49 65 27 82', href: 'tel:+33749652782' },
                { label: 'Localisation', value: 'Paris / Lille', href: null },
                { label: 'Disponibilité', value: 'Ouvert aux opportunités', href: null },
              ].map((info) => (
                <div key={info.label} style={{ marginBottom: '12px' }}>
                  <p style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--color-text-3)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 2px' }}>
                    {info.label}
                  </p>
                  {info.href ? (
                    <a href={info.href} style={{ fontSize: '0.875rem', color: 'var(--color-text-2)', textDecoration: 'none' }}>
                      {info.value}
                    </a>
                  ) : (
                    <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--color-text-2)' }}>{info.value}</p>
                  )}
                </div>
              ))}

              {/* Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '24px' }}>
                <a
                  href="/documents/Khachnane Othemane CV.pdf"
                  download
                  className="btn-primary"
                  id="about-download-cv"
                >
                  <Download size={15} />
                  Télécharger le CV
                </a>
                <Link to="/contact" className="btn-outline" id="about-contact-link">
                  Me contacter <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Right: Content */}
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                À propos
              </span>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, margin: '8px 0 24px', letterSpacing: '-0.03em', lineHeight: 1.2 }}>
                Construire des solutions
                <br /><span className="gradient-text">concrètes et utilisables</span>
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', color: 'var(--color-text-2)', fontSize: '0.975rem', lineHeight: 1.8 }}>
                <p style={{ margin: 0 }}>
                  Mon parcours s'est construit autour d'un fil rouge : apprendre à transformer des problèmes
                  concrets en solutions utilisables. J'ai commencé par le développement et les bases de données,
                  puis je me suis progressivement orienté vers la data, l'automatisation et l'IA appliquée.
                </p>
                <p style={{ margin: 0 }}>
                  Chez <strong style={{ color: 'var(--color-text)' }}>Symbolist.ai</strong>, j'ai découvert un environnement où il faut être capable de
                  comprendre rapidement un besoin, tester une solution, connecter plusieurs outils, fiabiliser
                  un workflow, documenter et livrer. Cette expérience m'a permis de sortir d'une vision
                  purement scolaire du développement pour travailler sur des sujets réels.
                </p>
                <p style={{ margin: 0 }}>
                  Automatisations Make, intégrations API, dashboards BI, migration de données, RAG,
                  extraction massive de documents, Webflow, Firebase, Supabase, outils BI — j'ai touché
                  à l'ensemble de la chaîne d'un système digital.
                </p>
                <p style={{ margin: 0 }}>
                  Ce qui me motive : <strong style={{ color: 'var(--color-text)' }}>apprendre vite, comprendre un besoin métier, construire une
                  solution concrète et la rendre utile</strong>.
                </p>
              </div>

              {/* Values */}
              <div style={{ marginTop: '36px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {[
                  { label: 'Autonomie', desc: 'Capable de travailler de manière indépendante' },
                  { label: 'Apprentissage rapide', desc: 'Nouveaux outils et technologies' },
                  { label: 'Sens business', desc: 'Comprendre les enjeux métier' },
                  { label: 'Orientation impact', desc: 'Des solutions qui servent vraiment' },
                ].map((v) => (
                  <div key={v.label} style={{
                    padding: '14px 16px',
                    borderRadius: '8px',
                    backgroundColor: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                  }}>
                    <p style={{ margin: '0 0 4px', fontWeight: 600, fontSize: '0.875rem', color: 'var(--color-text)' }}>{v.label}</p>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--color-text-3)' }}>{v.desc}</p>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <hr style={{ border: 'none', height: '1px', backgroundColor: 'var(--color-border)', margin: '40px 0' }} />

              {/* Mon projet professionnel */}
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-text)', margin: '0 0 12px' }}>
                  Mon projet professionnel
                </h3>
                <div style={{ color: 'var(--color-text-2)', fontSize: '0.9rem', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <p style={{ margin: 0 }}>
                    À court terme, mon objectif est de poursuivre mon parcours en alternance dans un environnement où je peux continuer à progresser sur des sujets mêlant data, automatisation, développement et IA appliquée.
                  </p>
                  <p style={{ margin: 0 }}>
                    Après mon BUT Informatique, je souhaite intégrer une formation spécialisée en Data & IA, en école d’ingénieur ou en master, afin de consolider mes bases théoriques tout en continuant à travailler sur des projets concrets en entreprise.
                  </p>
                  <p style={{ margin: 0 }}>
                    Professionnellement, je vise des postes autour de la data, de l’automatisation et de l’IA appliquée, comme Data Analyst, Data Engineer junior, développeur orienté data, consultant automatisation ou profil hybride capable de faire le lien entre besoin métier, données, outils et solution technique.
                  </p>
                  <p style={{ margin: 0 }}>
                    Ce qui m’intéresse particulièrement, c’est de construire des systèmes utiles : automatiser des tâches répétitives, fiabiliser des flux de données, créer des dashboards exploitables, connecter des outils métiers et utiliser l’IA pour améliorer des processus existants.
                  </p>
                  <p style={{ margin: 0 }}>
                    Mon projet professionnel n’est donc pas uniquement de “faire de la technique”, mais de devenir un profil capable de comprendre un problème métier, de proposer une solution réaliste, de la construire et de l’améliorer avec le temps.
                  </p>
                </div>
              </div>

              {/* Évolution personnelle et professionnelle */}
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-text)', margin: '0 0 12px' }}>
                  Évolution personnelle et professionnelle
                </h3>
                <div style={{ color: 'var(--color-text-2)', fontSize: '0.9rem', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <p style={{ margin: 0 }}>
                    Mon parcours m’a permis de comprendre que les compétences techniques seules ne suffisent pas. En entreprise, il faut aussi savoir écouter, reformuler, prioriser, documenter, accepter les retours et apprendre rapidement lorsqu’on découvre un nouvel outil ou une nouvelle problématique.
                  </p>
                  <p style={{ margin: 0 }}>
                    Chez Symbolist.ai, j’ai été confronté à des missions variées. Cette diversité m’a appris à ne pas rester bloqué sur un seul rôle ou une seule technologie.
                  </p>
                  <p style={{ margin: 0 }}>
                    Au départ, certains sujets me semblaient très larges ou difficiles à cadrer. Avec l’expérience, j’ai appris à découper les problèmes, poser les bonnes questions, chercher les informations manquantes, tester progressivement et documenter ce que je faisais.
                  </p>
                  <p style={{ margin: 0 }}>
                    Cette évolution m’a aussi permis de mieux comprendre mon profil : je suis plus à l’aise lorsque je peux construire, tester, comprendre le besoin et voir un résultat concret. J’ai besoin de sens dans ce que je fais, et je progresse beaucoup lorsque je travaille sur des projets réels avec des contraintes réelles.
                  </p>
                </div>
              </div>

              {/* Divider */}
              <hr style={{ border: 'none', height: '1px', backgroundColor: 'var(--color-border)', margin: '40px 0' }} />

              {/* Analyse réflexive & connaissance de soi */}
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-text)', margin: '0 0 20px', letterSpacing: '-0.02em' }}>
                  Analyse réflexive & Connaissance de soi
                </h3>

                {/* Ce que j'ai appris sur moi-même */}
                <div style={{ marginBottom: '24px' }}>
                  <h4 style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 8px' }}>
                    Ce que j'ai appris sur moi-même
                  </h4>
                  <div style={{ color: 'var(--color-text-2)', fontSize: '0.9rem', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <p style={{ margin: 0 }}>
                      Mes expériences m’ont montré que je suis capable d’apprendre rapidement lorsqu’un sujet m’intéresse et que je comprends son utilité. J’ai découvert que je suis à l’aise dans des environnements où les missions ne sont pas toujours parfaitement définies dès le départ, à condition de pouvoir poser des questions, chercher, tester et avancer par étapes.
                    </p>
                    <p style={{ margin: 0 }}>
                      J’ai aussi compris que j’aime les projets hybrides. Je ne me reconnais pas uniquement dans un rôle de développeur pur, de data analyst pur ou d’automaticien pur. Ce qui m’intéresse, c’est le lien entre ces domaines : comprendre un besoin, structurer une donnée, créer un workflow, connecter une API, produire un dashboard ou intégrer une brique IA.
                    </p>
                    <p style={{ margin: 0 }}>
                      J’ai également appris que j’avais besoin de progresser sur la priorisation. Quand un sujet m’intéresse, j’ai parfois tendance à vouloir tout comprendre ou tout améliorer. L’entreprise m’a appris qu’il faut aussi savoir avancer avec une solution suffisante, livrer une première version, puis améliorer ensuite.
                    </p>
                  </div>
                </div>

                {/* Forces identifiées */}
                <div style={{ marginBottom: '24px' }}>
                  <h4 style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--color-text)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 12px' }}>
                    Forces identifiées
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                    {[
                      { title: "Autonomie progressive", desc: "Chercher par soi-même, tester des solutions, comprendre la documentation et proposer des pistes concrètes avant de demander de l'aide." },
                      { title: "Capacité d'adaptation", desc: "Apprendre rapidement de multiples technologies (Make, SQL, Power BI, LLM, Firebase, Webflow) et saisir la logique globale d'un système." },
                      { title: "Sens du concret", desc: "Rechercher des solutions pragmatiques et utiles menant à des résultats directs (scénario actif, dashboard fonctionnel, etc.)." }
                    ].map((f, i) => (
                      <div key={i} style={{
                        padding: '14px 16px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(34, 197, 94, 0.03)',
                        border: '1px solid rgba(34, 197, 94, 0.15)',
                      }}>
                        <p style={{ margin: '0 0 6px', fontWeight: 600, fontSize: '0.85rem', color: 'var(--color-text)' }}>{f.title}</p>
                        <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--color-text-2)', lineHeight: 1.5 }}>{f.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Axes de progrès */}
                <div style={{ marginBottom: '24px' }}>
                  <h4 style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--color-text)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 12px' }}>
                    Axes de progrès
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                    {[
                      { title: "Priorisation", desc: "Apprendre à distinguer ce qui est essentiel pour livrer une première version fonctionnelle de ce qui peut être affiné par la suite." },
                      { title: "Formalisation technique", desc: "Garder une trace claire et documentée des choix techniques, contraintes rencontrées et décisions d'architecture." },
                      { title: "Communication synthétique", desc: "Savoir expliquer rapidement et simplement des enjeux ou des blocages techniques à des profils non techniques." }
                    ].map((f, i) => (
                      <div key={i} style={{
                        padding: '14px 16px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(245, 158, 11, 0.03)',
                        border: '1px solid rgba(245, 158, 11, 0.15)',
                      }}>
                        <p style={{ margin: '0 0 6px', fontWeight: 600, fontSize: '0.85rem', color: 'var(--color-text)' }}>{f.title}</p>
                        <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--color-text-2)', lineHeight: 1.5 }}>{f.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Besoins pour évoluer */}
                <div>
                  <h4 style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 8px' }}>
                    Besoins pour continuer à évoluer
                  </h4>
                  <div style={{ color: 'var(--color-text-2)', fontSize: '0.9rem', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <p style={{ margin: 0 }}>
                      Pour continuer à progresser, j’ai besoin de travailler sur des projets concrets, avec une vraie responsabilité progressive. J’apprends beaucoup lorsque je suis confronté à des cas réels, avec des données imparfaites, des outils limités, des contraintes client et des objectifs métier.
                    </p>
                    <p style={{ margin: 0 }}>
                      J’ai aussi besoin de renforcer mes bases théoriques, notamment en data, architecture logicielle, bases de données, IA et développement backend. C’est pour cela que je souhaite poursuivre mes études après le BUT dans une formation spécialisée en Data & IA afin d'équilibrer rigueur théorique et pragmatisme pratique.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
