export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  context: string;
  problem: string;
  solution: string;
  actions: string[];
  stack: string[];
  impact: string[];
  learnings: string;
  categories: string[];
  company?: string;
  period?: string;
  featured: boolean;
  confidential?: boolean;
  gitUrl?: string;
  order: number;
}

export const projects: Project[] = [
  {
    id: "catalogue-produit-ia",
    slug: "catalogue-produit-ia",
    title: "Catalogue produit automatisé par IA",
    shortDescription: "Automatisation complète de la création de fiches produit logiciel à partir d'une URL — scraping, structuration IA, alimentation Webflow.",
    context: "Chez Symbolist.ai, l'objectif était d'alimenter rapidement un catalogue de logiciels avec des fiches standardisées, à partir du simple nom d'un produit et de l'URL de son site officiel.",
    problem: "Créer manuellement chaque fiche produit était long et rendait difficile la standardisation des informations entre les pages.",
    solution: "Création d'un scénario Make capable de scraper le site du logiciel, d'appeler un LLM pour structurer les données, puis d'alimenter automatiquement un template Webflow avec tous les champs renseignés.",
    actions: [
      "Création du scénario Make avec les modules de routing et d'agrégation",
      "Intégration de Firecrawl pour le scraping des sites officiels",
      "Mapping des champs : description, fonctionnalités, bénéfices, cas d'usage, intégrations, tags, pricing, SEO",
      "Prompting IA pour produire une sortie JSON strictement structurée",
      "Création ou adaptation du template Webflow pour accueillir les données",
      "Tests sur plusieurs logiciels et ajustements des prompts"
    ],
    stack: ["Make", "Webflow", "Firecrawl", "LLM", "JSON", "APIs"],
    impact: [
      "Gain de temps significatif sur la création de fiches produit",
      "Meilleure cohérence entre toutes les pages du catalogue",
      "Processus entièrement réutilisable pour de nouveaux logiciels",
      "Passage d'une tâche manuelle répétitive à un flux automatisé"
    ],
    learnings: "J'ai appris à structurer précisément un prompt IA pour obtenir une sortie JSON fiable, à gérer les cas d'échec de scraping, et à mapper correctement des données vers un CMS Webflow.",
    categories: ["Automatisation", "IA", "Web", "No-code"],
    company: "Symbolist.ai",
    period: "2025",
    featured: true,
    confidential: true,
    order: 1
  },
  {
    id: "dashboards-clicdata-coupler",
    slug: "dashboards-clicdata-coupler",
    title: "Dashboards BI & migration vers Coupler",
    shortDescription: "Création et correction de dashboards marketing/SEO sur ClicData, analyse des limites de l'outil et participation à la transition vers Coupler.",
    context: "Chez Symbolist.ai, ClicData était utilisé pour créer des dashboards clients autour du SEO, Google Analytics, Google Ads et du reporting marketing.",
    problem: "L'outil présentait des limites importantes : bugs récurrents, complexité de maintenance, coûts élevés, et des écarts de données inexpliqués entre les sources connectées.",
    solution: "Travailler sur les dashboards existants, corriger les anomalies, analyser les écarts de données et contribuer à la réflexion autour d'une migration vers une architecture plus fiable avec Coupler.",
    actions: [
      "Connexion de sources de données (Google Analytics, Search Console, Google Ads)",
      "Nettoyage et transformation via les dataflows ClicData",
      "Création et correction de dashboards clients",
      "Définition et validation des KPIs avec les équipes",
      "Analyse des écarts entre données API directe et connecteurs ClicData",
      "Travail sur les requêtes GAQL pour Google Ads",
      "Diagnostic structuré des limites de l'outil",
      "Participation à la définition de la nouvelle architecture Coupler"
    ],
    stack: ["ClicData", "Google Analytics", "Google Search Console", "Google Ads", "GAQL", "Coupler", "API connectors"],
    impact: [
      "Fiabilisation de plusieurs dashboards clients",
      "Meilleure compréhension de la qualité de la donnée marketing",
      "Contribution directe à une décision stratégique de changement de stack",
      "Montée en responsabilité sur l'architecture data de l'entreprise"
    ],
    learnings: "J'ai compris que la fiabilité de la donnée passe autant par la compréhension des limites des outils que par les dashboards eux-mêmes. J'ai aussi appris à analyser méthodiquement des écarts de données.",
    categories: ["Data", "BI"],
    company: "Symbolist.ai",
    period: "2025",
    featured: true,
    confidential: true,
    order: 2
  },
  {
    id: "stage-bi-europe-loisirs",
    slug: "stage-bi-europe-loisirs",
    title: "Stage BI — Europe Loisirs",
    shortDescription: "Connexion à l'ERP Dolibarr, création de vues SQL et construction de dashboards Power BI pour remplacer des fichiers Excel de pilotage.",
    context: "Europe Loisirs utilisait un ERP Dolibarr connecté à une base MariaDB. La direction souhaitait remplacer des fichiers Excel et des rapports partiels par des dashboards BI fiables et exploitables.",
    problem: "Les données étaient présentes dans l'ERP mais difficiles à exploiter directement : pas de vue structurée, indicateurs éparpillés, aucun outil de pilotage consolidé.",
    solution: "Analyser les besoins métier, explorer les données de l'ERP, créer des vues SQL structurées et construire des dashboards Power BI connectés à la base en temps réel.",
    actions: [
      "Analyse des besoins avec la direction (ventes, commandes, encours, trésorerie, stocks)",
      "Connexion à la base MariaDB via DBeaver",
      "Exploration et compréhension des tables Dolibarr",
      "Création de vues SQL (exercices fiscaux, encours clients, commandes, trésorerie)",
      "Calcul des indicateurs financiers et commerciaux",
      "Création de rapports et indicateurs dans Power BI",
      "Construction des dashboards avec filtres et drill-down",
      "Recettage des données et restitution à la direction"
    ],
    stack: ["MariaDB", "MySQL", "SQL", "DBeaver", "Power BI", "Dolibarr"],
    impact: [
      "Reporting consolidé accessible directement par la direction",
      "Remplacement des fichiers Excel manuels",
      "Meilleure capacité de pilotage commercial et financier",
      "Données structurées et reproductibles"
    ],
    learnings: "J'ai appris à naviguer dans un ERP complexe pour en comprendre le modèle de données, à écrire des vues SQL efficaces, et à traduire des besoins métier en indicateurs Power BI.",
    categories: ["Data", "BI"],
    company: "Europe Loisirs",
    period: "Avr. – Juin 2025",
    featured: true,
    confidential: true,
    order: 3
  },
  {
    id: "migration-airtable-supabase",
    slug: "migration-airtable-supabase",
    title: "Migration Airtable → Supabase",
    shortDescription: "Analyse de la structure Airtable, identification des problèmes de modélisation, et préparation d'un schéma relationnel propre dans Supabase / PostgreSQL.",
    context: "Chez Symbolist.ai, certaines données internes étaient stockées dans Airtable. L'entreprise souhaitait migrer vers Supabase pour disposer d'une base PostgreSQL plus robuste et scalable.",
    problem: "La structure Airtable contenait des doublons, des champs lookup complexes, des dépendances implicites et une organisation difficile à migrer directement dans un modèle relationnel.",
    solution: "Prendre du recul sur l'architecture avant de migrer : analyser la structure existante, identifier les problèmes, concevoir un modèle relationnel propre dans Supabase.",
    actions: [
      "Analyse exhaustive de la structure Airtable (tables, champs, relations)",
      "Identification des doublons et incohérences",
      "Cartographie des champs lookup et de leurs dépendances",
      "Conception du schéma relationnel cible dans Supabase",
      "Définition des clés primaires, étrangères et contraintes",
      "Préparation de la logique de migration des données"
    ],
    stack: ["Airtable", "Supabase", "PostgreSQL"],
    impact: [
      "Passage d'un système flexible mais fragile à une vraie logique relationnelle",
      "Meilleure compréhension des limites d'Airtable à l'échelle",
      "Base plus scalable et exploitable pour l'avenir",
      "Consolidation des données en évitant la duplication"
    ],
    learnings: "J'ai compris pourquoi la modélisation de données est cruciale avant toute migration, et comment passer d'une logique 'spreadsheet' à une logique relationnelle propre.",
    categories: ["Data", "Backend"],
    company: "Symbolist.ai",
    period: "2025",
    featured: true,
    confidential: true,
    order: 4
  },
  {
    id: "rag-tribee",
    slug: "rag-tribee",
    title: "Système RAG & base de connaissance",
    shortDescription: "Structuration d'une base de connaissance pour améliorer la qualité des contenus générés par IA — moins d'hallucinations, plus de cohérence métier.",
    context: "Pour un projet client chez Symbolist.ai, l'objectif était de permettre à un LLM de produire des contenus cohérents avec l'identité et le contexte de la marque.",
    problem: "Un prompt seul ne suffit pas à produire un bon résultat IA. Il faut de bonnes données d'entrée, une base de connaissance structurée et un cadrage clair pour éviter les hallucinations.",
    solution: "Participer à la création d'une base de connaissance exploitable pour un système RAG et à un système de prompts pour la génération de contenus blog plus fiables.",
    actions: [
      "Collecte et sélection des ressources utiles au contexte client",
      "Structuration et normalisation des connaissances",
      "Création d'un système de prompts progressifs",
      "Réflexion sur la réduction des hallucinations",
      "Enrichissement des contenus avec le contexte métier",
      "Génération et validation de contenus blog"
    ],
    stack: ["LLM", "RAG", "Prompt engineering", "SEO", "Base de connaissance"],
    impact: [
      "Meilleure qualité et cohérence des contenus générés",
      "Réduction significative du risque d'hallucination",
      "Compréhension approfondie de la chaîne IA : données → contexte → prompts → sortie",
      "Contenus plus alignés avec l'identité de la marque"
    ],
    learnings: "J'ai compris que la qualité d'un système IA dépend avant tout de la qualité des données et du contexte fournis, pas seulement du prompt.",
    categories: ["IA", "No-code"],
    company: "Symbolist.ai",
    period: "2025",
    featured: true,
    confidential: true,
    order: 5
  },
  {
    id: "firebase-cloud-functions-api",
    slug: "firebase-cloud-functions-api",
    title: "Firebase Cloud Functions & API externe",
    shortDescription: "Cloud Function Node.js pour synchroniser des données via une API externe : génération de JWT, appel API, gestion d'erreurs et cache de secours dans Firestore.",
    context: "Dans le cadre de missions chez Symbolist.ai, certaines fonctionnalités nécessitaient de récupérer des données depuis une API externe pour plusieurs entités, de les valider et de les stocker en base.",
    problem: "Il fallait gérer l'authentification par JWT, appeler l'API pour chaque entité, valider les réponses, stocker les données sans écraser les données valides existantes en cas d'erreur.",
    solution: "Création d'une Cloud Function Firebase qui orchestre tout le flux : lecture depuis Firestore, génération du token, appel API, validation, sauvegarde et gestion d'erreurs avec fallback.",
    actions: [
      "Lecture des entités cibles depuis Firestore",
      "Génération de tokens JWT pour l'authentification API",
      "Appels API REST avec gestion des timeouts",
      "Validation des réponses avant toute écriture",
      "Sauvegarde des données dans les collections Firestore dédiées",
      "Mise en place d'une logique de cache de secours",
      "Journalisation des erreurs et métriques dans une collection dédiée"
    ],
    stack: ["Node.js", "Firebase Cloud Functions", "Firestore", "APIs REST", "JWT"],
    impact: [
      "Synchronisation plus fiable entre l'API externe et la base",
      "Meilleure robustesse face aux erreurs API",
      "Protection des données existantes en cas de réponse invalide",
      "Renforcement des compétences backend et Firebase"
    ],
    learnings: "J'ai appris à gérer proprement les cas d'erreur dans un flux asynchrone, à sécuriser les appels API avec JWT, et à concevoir une logique de fallback robuste.",
    categories: ["Backend", "API"],
    company: "Symbolist.ai",
    period: "2025",
    featured: true,
    confidential: true,
    order: 6
  },
  {
    id: "extraction-pdfs-masse",
    slug: "extraction-pdfs-masse",
    title: "Extraction massive de PDFs pour base IA",
    shortDescription: "Conception d'un flux pour télécharger, extraire, nettoyer et structurer des centaines de milliers de documents PDF en base exploitable pour un système IA.",
    context: "Le point de départ était un CSV contenant plusieurs centaines de milliers de liens vers des documents PDF à analyser.",
    problem: "Les informations utiles étaient dispersées dans des fichiers PDF, impossibles à exploiter directement pour une analyse ou un futur système RAG.",
    solution: "Concevoir un pipeline capable de télécharger les PDFs en batch, d'en extraire le texte utile, de le nettoyer et de le structurer dans une base exploitable.",
    actions: [
      "Analyse du CSV source et identification des patterns d'URL",
      "Conception du pipeline de téléchargement batch",
      "Extraction du texte depuis les PDFs",
      "Nettoyage et normalisation des données",
      "Structuration pour une utilisation en RAG ou scoring IA",
      "Tests de qualité sur un échantillon"
    ],
    stack: ["CSV", "Scraping", "PDF extraction", "Automatisation", "LLM", "RAG"],
    impact: [
      "Transformation d'une donnée massive et non structurée en base utilisable",
      "Démonstration d'une vraie problématique data à grande échelle",
      "Pipeline réutilisable pour des sources similaires"
    ],
    learnings: "J'ai appris à penser un pipeline data à grande échelle : gestion des erreurs, idempotence, qualité des données extraites, et structuration pour l'IA.",
    categories: ["Data", "IA", "Automatisation"],
    company: "Symbolist.ai",
    period: "2025",
    featured: false,
    confidential: true,
    order: 7
  },
  {
    id: "ecommerce-shopify",
    slug: "ecommerce-shopify",
    title: "E-commerce & marketing digital",
    shortDescription: "Création et gestion de boutiques Shopify, SEO, publicité Facebook/TikTok, analyse de performance et optimisation de la conversion.",
    context: "Projet personnel lancé depuis 2020 pour apprendre la vente en ligne de manière autonome.",
    problem: "Comment vendre en ligne de manière rentable avec un budget limité, en gérant seul l'ensemble de la chaîne.",
    solution: "Apprentissage par l'expérimentation : boutiques Shopify, campagnes publicitaires, optimisation continue des offres et des pages de vente.",
    actions: [
      "Création et configuration de boutiques Shopify",
      "Rédaction de pages de vente et copywriting",
      "Gestion de campagnes Facebook Ads et TikTok Ads",
      "Optimisation SEO",
      "Analyse des métriques de conversion",
      "Gestion du service client"
    ],
    stack: ["Shopify", "Facebook Ads", "TikTok Ads", "SEO", "Analytics"],
    impact: [
      "Compréhension profonde du comportement utilisateur et de la conversion",
      "Logique test & learn appliquée sur des données réelles",
      "Sens business et analyse de rentabilité"
    ],
    learnings: "J'ai développé une vraie logique business : tester des hypothèses, mesurer les résultats, itérer rapidement.",
    categories: ["Web"],
    period: "Depuis 2020",
    featured: false,
    order: 8
  },
  {
    id: "jeu-multijoueur-agario",
    slug: "jeu-multijoueur-agario",
    title: "Jeu multijoueur Agar.io Clone",
    shortDescription: "Réalisation d'un jeu en ligne multijoueur inspiré d'Agar.io avec gestion des collisions, bonus, bots autonomes. (Node.js, Socket.io, Canvas)",
    context: "SAE universitaire — développement d'un jeu multijoueur en temps réel.",
    problem: "Synchroniser l'état du jeu entre plusieurs clients en temps réel tout en gérant les collisions, les bots et les performances.",
    solution: "Architecture client/serveur avec Socket.io, rendu côté client en Canvas.",
    actions: [
      "Architecture serveur Node.js + Socket.io",
      "Rendu Canvas côté client",
      "Gestion des collisions et des bots autonomes",
      "Synchronisation temps réel"
    ],
    stack: ["Node.js", "Socket.io", "Canvas", "JavaScript"],
    impact: ["Jeu fonctionnel et jouable en ligne", "Compréhension des WebSockets"],
    learnings: "Architecture temps réel, gestion d'état distribué, optimisation Canvas.",
    categories: ["Web", "Backend"],
    period: "Mars 2025",
    featured: false,
    gitUrl: "https://github.com/ibnakrm",
    order: 9
  },
  {
    id: "campustalk",
    slug: "campustalk",
    title: "CampusTalk — Application de fils de discussion",
    shortDescription: "Application web de création et participation à des fils de discussion pour campus. (Jakarta EE, JSP, TailwindCSS)",
    context: "SAE universitaire — développement d'une application web full stack.",
    problem: "Créer un système de discussion structuré avec authentification et gestion des droits.",
    solution: "Application Jakarta EE avec JSP, gestion des sessions et base de données.",
    actions: [
      "Architecture MVC avec Jakarta EE",
      "Gestion de l'authentification",
      "Création des fils de discussion",
      "Interface avec TailwindCSS"
    ],
    stack: ["Jakarta EE", "JSP", "Java", "TailwindCSS", "SQL"],
    impact: ["Application fonctionnelle déployée"],
    learnings: "Architecture Java EE, gestion des sessions, MVC.",
    categories: ["Web", "Backend"],
    period: "Janv. 2025",
    featured: false,
    gitUrl: "https://github.com/ibnakrm",
    order: 10
  }
];

export const categories = [
  "Tous",
  "Data",
  "BI",
  "Automatisation",
  "IA",
  "Backend",
  "API",
  "Web",
  "No-code"
];
