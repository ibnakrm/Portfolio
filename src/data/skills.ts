export interface SkillCategory {
  id: string;
  label: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "data-bi",
    label: "Data & BI",
    icon: "BarChart3",
    skills: [
      "SQL", "PostgreSQL", "MariaDB / MySQL", "Power BI", "DAX",
      "ClicData", "Coupler", "Data cleaning", "Data modeling",
      "Reporting", "KPIs", "Recette de données"
    ]
  },
  {
    id: "automatisation",
    label: "Automatisation",
    icon: "Zap",
    skills: [
      "Make", "n8n", "Webhooks", "APIs REST", "JSON",
      "Gestion d'erreurs", "Retry / idempotence", "Workflows multi-outils",
      "Logs", "Monitoring"
    ]
  },
  {
    id: "ia-appliquee",
    label: "IA appliquée",
    icon: "Brain",
    skills: [
      "LLM", "Prompt engineering", "RAG", "Base de connaissance",
      "Extraction d'information", "Structuration de données",
      "Génération de contenu", "Contrôle qualité IA", "Réduction d'hallucinations"
    ]
  },
  {
    id: "developpement",
    label: "Développement",
    icon: "Code2",
    skills: [
      "JavaScript", "TypeScript", "Node.js", "React",
      "Python", "Java", "HTML/CSS", "Git", "Bash", "Linux",
      "Firebase", "Firestore", "Flutter"
    ]
  },
  {
    id: "outils-metier",
    label: "Outils métier",
    icon: "Wrench",
    skills: [
      "Webflow", "Airtable", "Supabase", "Firebase",
      "Google Analytics", "Google Search Console", "Google Ads",
      "Lemlist", "Pipedrive", "HubSpot", "Vercel", "Shopify"
    ]
  },
  {
    id: "transverses",
    label: "Compétences transverses",
    icon: "Sparkles",
    skills: [
      "Analyse de besoin", "Cadrage technique", "Documentation",
      "Communication non-technique", "Debugging", "Maintenance",
      "Recettage", "Autonomie", "Apprentissage rapide", "Sens business"
    ]
  }
];

export const techIcons: Record<string, string> = {
  "Python": "/images/py.png",
  "JavaScript": "/images/js.png",
  "SQL": "/images/sql.png",
  "Power BI": "/images/PBI.png",
  "Java": "/images/java.png",
  "Git": "/images/git.png",
  "Linux": "/images/linux.png",
  "Docker": "/images/docker.png",
  "CSS": "/images/css.png",
  "HTML": "/images/html.png",
  "Shopify": "/images/shopify.png",
  "Canva": "/images/canva.png",
  "Office": "/images/office.png"
};

export interface HardSkillDetail {
  title: string;
  level: string;
  context: string;
  todo: string[];
  axes: string[];
}

export const hardSkillsDetails: HardSkillDetail[] = [
  {
    title: "SQL / MariaDB / PostgreSQL",
    level: "intermédiaire",
    context: "J’ai utilisé SQL dans plusieurs contextes : projets académiques, stage BI chez Europe Loisirs et sujets liés à Supabase/PostgreSQL. Chez Europe Loisirs, j’ai travaillé sur une base MariaDB liée à l’ERP Dolibarr, avec création de vues SQL, structuration de données et préparation d’indicateurs pour Power BI.",
    todo: [
      "explorer une base relationnelle ;",
      "comprendre les relations entre tables ;",
      "écrire des requêtes SQL ;",
      "créer des vues ;",
      "filtrer, agréger et transformer des données ;",
      "préparer des données pour du reporting ;",
      "identifier des incohérences ou doublons."
    ],
    axes: [
      "requêtes plus avancées ;",
      "optimisation SQL ;",
      "modélisation plus poussée ;",
      "architecture data à plus grande échelle."
    ]
  },
  {
    title: "Power BI / DAX",
    level: "intermédiaire",
    context: "J’ai utilisé Power BI durant mon stage chez Europe Loisirs pour construire des dashboards à partir de données ERP. J’ai travaillé sur la préparation de données, la création d’indicateurs, la visualisation et le recettage.",
    todo: [
      "connecter des sources de données ;",
      "préparer des tables pour le reporting ;",
      "créer des dashboards ;",
      "construire des mesures DAX simples à intermédiaires ;",
      "organiser les visuels selon un besoin métier ;",
      "vérifier la cohérence des indicateurs."
    ],
    axes: [
      "DAX avancé ;",
      "modélisation complexe ;",
      "optimisation de rapports ;",
      "automatisation des flux d’actualisation."
    ]
  },
  {
    title: "ClicData / Coupler / Reporting",
    level: "intermédiaire",
    context: "Chez Symbolist.ai, j’ai travaillé sur des dashboards clients avec ClicData, notamment sur des données SEO, Google Analytics et Google Ads. J’ai aussi participé à l’analyse des limites de ClicData et à la réflexion autour d’une transition vers Coupler.",
    todo: [
      "connecter des sources ;",
      "nettoyer des données ;",
      "créer des datasets ;",
      "construire des dashboards ;",
      "analyser des écarts entre sources ;",
      "définir des KPIs ;",
      "identifier les limites d’un outil BI ;",
      "participer à une réflexion d’architecture data."
    ],
    axes: [
      "architecture data plus robuste ;",
      "entrepôts de données ;",
      "pipelines industrialisés ;",
      "séparation claire extraction / transformation / visualisation."
    ]
  },
  {
    title: "Make",
    level: "avancé junior / intermédiaire confirmé",
    context: "Make est l’un des outils que j’ai le plus utilisés en alternance. J’ai conçu et maintenu des scénarios pour connecter des outils, automatiser des processus, structurer des données et intégrer de l’IA dans des workflows.",
    todo: [
      "créer des scénarios multi-étapes ;",
      "connecter des APIs ;",
      "mapper des données ;",
      "manipuler du JSON ;",
      "ajouter des filtres et routes ;",
      "gérer des erreurs simples ;",
      "optimiser certains modules ;",
      "automatiser des tâches métier ;",
      "intégrer des LLM dans un workflow."
    ],
    axes: [
      "architecture Make très avancée ;",
      "gestion d’erreurs plus industrielle ;",
      "monitoring complet ;",
      "optimisation à grande échelle."
    ]
  },
  {
    title: "APIs / Webhooks / JSON",
    level: "intermédiaire",
    context: "J’ai utilisé des APIs dans plusieurs contextes : Taleez, Firebase, Weenav, outils SaaS, Webflow, automatisations Make et intégrations front-end.",
    todo: [
      "lire une documentation API ;",
      "comprendre les endpoints ;",
      "envoyer des requêtes ;",
      "manipuler des réponses JSON ;",
      "gérer des tokens ;",
      "connecter une API à un outil ou à un workflow ;",
      "tester et corriger des erreurs d’intégration."
    ],
    axes: [
      "sécurité API ;",
      "architecture backend plus avancée ;",
      "tests automatisés ;",
      "gestion d’authentification plus complexe."
    ]
  },
  {
    title: "LLM / Prompt engineering / RAG",
    level: "intermédiaire",
    context: "J’ai utilisé les LLM dans des cas concrets : génération de contenu SEO, extraction d’informations, structuration de données, création de prompts, workflows IA, base de connaissance et projets RAG.",
    todo: [
      "rédiger des prompts structurés ;",
      "cadrer les sorties attendues ;",
      "demander une sortie JSON exploitable ;",
      "limiter les hallucinations par le contexte ;",
      "exploiter une base de connaissance ;",
      "intégrer un LLM dans un workflow Make ;",
      "tester et améliorer les résultats."
    ],
    axes: [
      "architecture RAG complète ;",
      "vectorisation ;",
      "évaluation de modèles ;",
      "agents IA plus avancés ;",
      "monitoring de qualité des sorties."
    ]
  },
  {
    title: "JavaScript / TypeScript / Node.js",
    level: "intermédiaire junior",
    context: "J’ai utilisé JavaScript et Node.js sur des intégrations front-end, des scripts, des projets Webflow, des APIs et des Cloud Functions Firebase.",
    todo: [
      "écrire des scripts front-end ;",
      "manipuler des données ;",
      "intégrer une API ;",
      "créer ou adapter une logique backend simple ;",
      "travailler avec Firebase Cloud Functions ;",
      "comprendre et corriger des bugs."
    ],
    axes: [
      "architecture backend plus propre ;",
      "tests ;",
      "TypeScript avancé ;",
      "design patterns ;",
      "sécurité applicative."
    ]
  }
];

export interface SoftSkillItem {
  title: string;
  desc: string;
  situation: string;
}

export interface SoftSkillsData {
  etre: SoftSkillItem[];
  communiquer: SoftSkillItem[];
  collaborer: SoftSkillItem[];
}

export const softSkillsData: SoftSkillsData = {
  etre: [
    {
      title: "Curiosité et envie d’apprendre",
      desc: "Dans mes expériences, j’ai souvent été confronté à des outils que je ne maîtrisais pas totalement au départ. Par exemple, chez Symbolist.ai, j’ai travaillé sur Make, ClicData, Coupler, Supabase, Firebase, Webflow, RAG ou encore des APIs spécifiques selon les clients. Cette diversité m’a obligé à apprendre rapidement, à chercher dans les documentations et à tester par moi-même. Ma curiosité m’aide à ne pas rester bloqué face à un outil inconnu.",
      situation: "Lors de la transition entre ClicData et Coupler, il ne s’agissait pas seulement d’apprendre un nouvel outil. Il fallait comprendre pourquoi l’ancien outil posait problème, quelles limites avaient été rencontrées et comment construire une approche plus maintenable."
    },
    {
      title: "Persévérance",
      desc: "Je suis quelqu’un qui n’aime pas rester bloqué. Lorsqu’un problème apparaît, j’essaie d’abord de comprendre l’erreur, de tester plusieurs pistes et d’isoler la cause du problème.",
      situation: "Sur ClicData, certains dashboards présentaient des écarts de données ou des bugs liés aux connecteurs, aux filtres ou aux traitements. Ces situations demandaient de la patience, car la solution n’était pas toujours immédiate. Il fallait comparer les sources, vérifier les données et comprendre le comportement de l'outil."
    },
    {
      title: "Esprit critique",
      desc: "L’utilisation de l’IA m’a appris à ne pas accepter automatiquement un résultat parce qu’il semble correct. Un LLM peut produire une réponse convaincante mais fausse, incomplète ou biaisée.",
      situation: "Sur un projet où l’IA devait produire des prédictions ou analyses, j’ai remarqué que les résultats semblaient parfois trop bons. Cela a mené à une réflexion sur le biais possible et sur la nécessité d’anonymiser certaines données pour obtenir une évaluation plus fiable."
    }
  ],
  communiquer: [
    {
      title: "Reformulation des besoins",
      desc: "J’ai appris que la première étape d’un projet technique est souvent de bien comprendre le besoin. En entreprise, les demandes ne sont pas toujours formulées sous forme de spécifications techniques. Il faut donc écouter, reformuler et transformer un besoin métier en solution réalisable.",
      situation: "Sur les projets de dashboards, il fallait traduire des besoins de pilotage en indicateurs concrets. Un KPI n’est pas seulement une donnée affichée : il doit être compris, fiable et utile pour la personne qui va l’utiliser."
    },
    {
      title: "Vulgarisation technique",
      desc: "J’ai progressé dans ma capacité à expliquer des problèmes techniques à des personnes qui ne sont pas forcément développeurs ou data. Cela concerne par exemple les limites d’un outil, la nécessité d’un upgrade Webflow, les problèmes de données ou les contraintes d’une API.",
      situation: "Sur le projet Urbilog, certaines difficultés étaient liées au plan Webflow utilisé. Il fallait comprendre le blocage technique, mais aussi l’expliquer de manière claire sans dégrader la relation client."
    },
    {
      title: "Documentation",
      desc: "J’ai compris que documenter un projet n’est pas une tâche secondaire. Sur des automatisations, des workflows IA ou des flux data, la documentation permet de comprendre ce qui a été fait, pourquoi, et comment maintenir la solution ensuite.",
      situation: "Sur les scénarios Make et les projets data, il était important de garder une trace des champs utilisés, des mappings, des erreurs possibles et des choix réalisés, surtout lorsque le projet devait pouvoir être repris ou maintenu."
    }
  ],
  collaborer: [
    {
      title: "Travail avec un Tech Lead",
      desc: "Chez Symbolist.ai, j’ai travaillé avec mon Tech Lead sur plusieurs sujets : cadrage, faisabilité, choix techniques, chiffrage, correction de bugs ou réflexion sur l'architecture. Cette relation m’a permis de progresser techniquement, mais aussi de mieux comprendre comment raisonner avant de développer. J’ai appris à préparer mes questions, à arriver avec des éléments concrets et à prendre en compte les retours.",
      situation: "Préparation des sessions hebdomadaires en arrivant avec des scénarios Make déjà testés, des alternatives de structures PostgreSQL et les logs d'erreurs déjà analysés pour faciliter la prise de décision."
    },
    {
      title: "Collaboration avec des profils non techniques",
      desc: "Certains projets demandaient de comprendre des besoins venant de personnes non techniques : direction, clients, marketing ou utilisateurs métier. Cela m’a appris à ne pas raisonner uniquement en termes d’outil ou de code, mais aussi en termes d’usage.",
      situation: "Chez Europe Loisirs, les dashboards Power BI devaient répondre à des besoins de pilotage. Il fallait donc comprendre les indicateurs importants pour l’entreprise, pas seulement construire des visuels."
    },
    {
      title: "Adaptation aux contraintes d’équipe et de projet",
      desc: "En entreprise, un projet ne se déroule pas toujours de manière idéale. Il peut y avoir des contraintes de temps, de budget, d’outil, de données ou de priorité. J’ai appris à composer avec ces contraintes et à chercher des solutions réalistes.",
      situation: "Avec ClicData, l’équipe a progressivement identifié que l’outil devenait trop complexe, coûteux et difficile à maintenir. Cette situation m’a montré qu’un bon choix technique ne dépend pas seulement des fonctionnalités, mais aussi de la maintenabilité, du coût, de l'expérience client et de la fiabilité."
    }
  ]
};

