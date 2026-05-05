export const testimonials = [
  {
    text: "Après ma rupture des ligaments, je pensais ne plus jamais courir en montagne. Grâce au programme de réathlétisation de Coach Eric, j'ai fini mon premier 40km 1 an après.",
    author: "Marc D.",
    meta: "Finisher Marathon du Mont-Blanc",
    initials: "MD",
    rating: 5,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Marie L.",
    meta: "UTMB 2024 — Finisher",
    initials: "ML",
    rating: 5,
  },
  {
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    author: "Thomas M.",
    meta: "Marathon de Paris — PR : 3h22",
    initials: "TM",
    rating: 5,
  },
  {
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.",
    author: "Sophie C.",
    meta: "Reprise après blessure genou",
    initials: "SC",
    rating: 5,
  },
  {
    text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    author: "Julien D.",
    meta: "Trail des Écrins — Top 20",
    initials: "JD",
    rating: 5,
  },
];

export const packs = [
  {
    tier: "Niveau 1",
    name: "Pack Sente",
    icon: "leaf",
    //price: 49,
    description: "Planification mensuelle, 1 appel de suivi. Idéal pour débuter.",
    features: [
      "Plan d'entraînement mensuel personnalisé",
      "1 appel bilan mensuel (30 min)",
      "Accès espace membre en ligne",
      "Suivi via application dédiée",
      "Communauté privée Strava",
    ],
    featured: false,
    cta: "Choisir Sente",
  },
  {
    tier: "Niveau 2",
    name: "Pack Crête",
    icon: "mountain",
    //price: 89,
    description: "Plan dynamique via App, Suivi hebdomadaire, Conseils nutrition.",
    features: [
      "Tout ce qui est inclus dans Sente",
      "Plan hebdomadaire adaptatif",
      "2 appels vidéo par mois (45 min)",
      "Analyse vidéo de la foulée",
      "Messagerie directe (réponse 24h)",
      "Conseils nutrition personnalisés",
      "Plan de récupération post-course",
    ],
    featured: true,
    badge: "Le plus populaire",
    cta: "Choisir Crête",
  },
  {
    tier: "Niveau 3",
    name: "Pack Sommet",
    icon: "summit",
    //price: 149,
    description: "Suivi quotidien, Analyse vidéo, Préparation mentale complète.",
    features: [
      "Tout ce qui est inclus dans Crête",
      "Préparation ultra-trail sur mesure",
      "Appels illimités + messagerie prioritaire",
      "Analyse biomécanique complète",
      "Périodisation annuelle scientifique",
      "Accompagnement mental & stratégie",
      "Plan nutrition & hydratation course",
      "Support race-day en direct",
    ],
    featured: false,
    cta: "Choisir Sommet",
  },
];

export const faqItems = [
  {
    q: "Comment se déroule le premier mois de coaching ?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
  },
  {
    q: "Est-ce que le coaching convient si je sors d'une blessure ?",
    a: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
  },
  {
    q: "Quelle application utilisez-vous pour le suivi ?",
    a: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim.",
  },
  {
    q: "Peut-on changer de pack en cours de route ?",
    a: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit.",
  },
  {
    q: "Y a-t-il un engagement de durée minimum ?",
    a: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
  },
];

export const blogPosts = [
  {
    slug: "periodisation-trail-ultra",
    title: "La périodisation en trail ultra : planifier son année",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "15 Avril 2024",
    readTime: "7 min",
    category: "Entraînement",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&q=80",
  },
  {
    slug: "nutrition-course-montagne",
    title: "Nutrition en course de montagne : ce qu'on ne vous dit pas",
    excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    date: "2 Avril 2024",
    readTime: "5 min",
    category: "Nutrition",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
  },
  {
    slug: "retour-blessure-genou",
    title: "Retour à la course après une blessure au genou",
    excerpt: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    date: "18 Mars 2024",
    readTime: "9 min",
    category: "Santé",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
  },
];
