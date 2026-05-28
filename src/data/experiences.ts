export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  current?: boolean;
  context: string;
  missions: string[];
  stack: string[];
  impact: string;
  type: 'pro' | 'perso';
  autonomyAndInteractions?: string;
}

export const experiences: Experience[] = [
  {
    id: "symbolist-ai",
    title: "Alternant Full Stack, Data & Automatisation IA",
    company: "Symbolist.ai / EuraNov",
    period: "Juillet 2025 — Aujourd'hui",
    current: true,
    context: "Symbolist.ai est une entreprise tech qui travaille sur des sujets mêlant automatisation, IA, data, développement web, intégrations API et projets clients.",
    missions: [
      "Conception d'automatisations Make pour des besoins internes et clients",
      "Connexion d'outils SaaS : Airtable, Webflow, Lemlist, Pipedrive, HubSpot, Google Sheets, Firebase, APIs",
      "Création de workflows IA pour extraction, structuration et enrichissement de données",
      "Maintenance et refonte de sites Webflow",
      "Création et correction de dashboards BI avec ClicData",
      "Participation à la transition de ClicData vers Coupler",
      "Migration de données Airtable vers Supabase",
      "Intégrations API côté front et backend",
      "Extraction de données depuis sites web, fichiers CSV et PDFs",
      "Travail sur des bases de connaissance et systèmes RAG",
      "Maintenance mobile, builds Android/iOS et publication stores",
      "Cadrage technique, chiffrage et diagnostic de solutions"
    ],
    stack: ["Make", "Webflow", "Airtable", "Supabase", "PostgreSQL", "Firebase", "Node.js", "JavaScript", "APIs REST", "JWT", "ClicData", "Coupler", "GAQL", "Firecrawl", "LLM", "RAG", "Flutter", "iOS", "Android"],
    impact: "Cette expérience m'a permis d'intervenir sur toute la chaîne d'un système digital : collecte, automatisation, structuration, traitement, stockage, visualisation et exploitation par IA.",
    type: 'pro',
    autonomyAndInteractions: "Chez Symbolist.ai, j'ai évolué dans une petite équipe où l'autonomie est importante. Les missions n'étaient pas toujours limitées à une seule tâche précise : il fallait souvent comprendre le besoin, analyser l'existant, tester plusieurs solutions, identifier les limites d'un outil puis proposer une approche réaliste.\n\nJ'ai régulièrement travaillé avec mon Tech Lead pour cadrer les sujets, valider des choix techniques, chiffrer certaines évolutions ou comprendre les priorités. J'ai aussi été amené à travailler sur des projets impliquant des clients ou des besoins internes, ce qui m'a obligé à mieux formuler les problèmes, expliquer les limites techniques et documenter les solutions.\n\nMon autonomie s'est construite progressivement. Au début, j'avais besoin d'être davantage guidé sur les outils et les méthodes. Avec le temps, j'ai appris à chercher dans les documentations, tester par moi-même, analyser les erreurs, proposer des corrections et revenir vers l'équipe avec des éléments plus construits.\n\nCette expérience m'a permis de comprendre que l'autonomie en entreprise ne veut pas dire \"tout faire seul\", mais savoir avancer intelligemment, communiquer ses blocages et prendre des décisions adaptées au contexte."
  },
  {
    id: "europe-loisirs",
    title: "Stagiaire Data & Business Intelligence",
    company: "Europe Loisirs",
    period: "Avril 2025 — Juin 2025",
    context: "Europe Loisirs utilisait un ERP Dolibarr connecté à une base MariaDB. L'entreprise souhaitait remplacer des fichiers Excel et rapports partiels par des dashboards Power BI fiables.",
    missions: [
      "Analyse des besoins métier avec la direction",
      "Connexion à la base MariaDB via DBeaver",
      "Exploration et compréhension des données ERP Dolibarr",
      "Création de vues SQL (ventes, commandes, encours, trésorerie, stocks)",
      "Nettoyage, structuration et fiabilisation des données",
      "Création de mesures DAX et dashboards Power BI",
      "Recettage des données et des indicateurs",
      "Documentation et restitution à la direction"
    ],
    stack: ["MariaDB", "MySQL", "SQL", "DBeaver", "Power BI", "DAX", "Dolibarr"],
    impact: "Le projet a permis de produire un reporting fiable pour suivre les ventes, commandes, encours, stocks, trésorerie et indicateurs financiers, remplaçant des fichiers Excel épars.",
    type: 'pro',
    autonomyAndInteractions: "Lors de mon stage chez Europe Loisirs, j'ai travaillé sur un projet BI en lien direct avec des besoins métier. L'objectif était de remplacer des fichiers Excel et des rapports partiels par des dashboards Power BI exploitables à partir des données de l'ERP Dolibarr.\n\nJ'ai dû comprendre le fonctionnement de l'entreprise, explorer la base MariaDB, analyser les tables, créer des vues SQL et construire des indicateurs utiles pour la direction. Cette mission m'a demandé de l'autonomie, car il fallait comprendre des données existantes, parfois complexes, et les transformer en informations lisibles.\n\nLes interactions avec les utilisateurs métier ont été importantes. Il ne suffisait pas de produire un dashboard techniquement correct : il fallait aussi que les indicateurs soient compréhensibles, cohérents et utiles pour le pilotage de l'activité.\n\nCe stage m'a appris que la data ne consiste pas seulement à faire des requêtes ou des graphiques. Il faut comprendre le contexte métier, vérifier la fiabilité des données et s'assurer que le résultat final répond réellement au besoin."
  },
  {
    id: "ecommerce-perso",
    title: "E-commerce & marketing digital",
    company: "Projet personnel",
    period: "Depuis 2020",
    context: "Création et gestion autonome de boutiques e-commerce en dropshipping, avec apprentissage du marketing digital par l'expérimentation.",
    missions: [
      "Création et gestion de boutiques Shopify",
      "Rédaction de pages de vente et copywriting",
      "Gestion de campagnes Facebook Ads et TikTok Ads",
      "Optimisation SEO et analyse de performance",
      "Suivi de la conversion et du ROI",
      "Gestion du service client et des relations fournisseurs"
    ],
    stack: ["Shopify", "Facebook Ads", "TikTok Ads", "SEO", "Analytics", "Canva"],
    impact: "Cette expérience m'a donné une vraie logique business : tester des hypothèses, analyser les données, itérer rapidement. Un atout concret pour comprendre les enjeux métier.",
    type: 'perso'
  }
];

export interface Education {
  id: string;
  degree: string;
  school: string;
  period: string;
  description?: string;
}

export const education: Education[] = [
  {
    id: "but-info",
    degree: "BUT Informatique",
    school: "IUT-A Villeneuve-d'Ascq (Université de Lille)",
    period: "2023 — 2026",
    description: "Parcours Conception et Développement d'Applications"
  },
  {
    id: "bac-sti2d",
    degree: "Bac STI2D",
    school: "Lycée Touchard Washington — Le Mans",
    period: "2021 — 2023"
  }
];
