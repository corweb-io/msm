export const site = {
  name: "MSM",
  tagline: "Logiciels d'ici pour les gens d'affaires",
  legalName: "Montreal Software Machine (MSM) inc",
  description:
    "Entreprise technologique québécoise qui conçoit des logiciels ultra performants pour la gestion d'entreprise, la distribution sur route et les régions éloignées.",
  phone: "(514) 312-1660",
  phoneSales: "(514) 993-4036",
  phoneTollFree: "1 (844) 395-2166",
  address: {
    street: "1155, boul. René-Lévesque O.",
    suite: "Bureau 2500",
    city: "Montréal, QC",
    postal: "H3B 2K4",
  },
  founded: 1998,
  satisfactionRate: "99%",
} as const;

export const nav = [
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Gestion d'entreprise", href: "/solutions/organic", description: "Facturation, inventaire, rapports" },
      { label: "Agroalimentaire (IAA)", href: "/solutions/iaa", description: "Production et distribution hors réseau" },
      { label: "Sécurité des données", href: "/solutions/confidentiel", description: "Base et connexions chiffrées" },
      { label: "Solution environnementale", href: "/solutions/bactrack", description: "Gestion intelligente des bacs" },
    ],
  },
  { label: "Produits", href: "/produits" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Support", href: "/support" },
  { label: "À propos", href: "/a-propos" },
  { label: "Carrière", href: "/carriere" },
] as const;

export const products = [
  {
    id: "central",
    name: "MSM-CENTRAL",
    tagline: "Le cœur de votre système",
    description:
      "Gestion centralisée de la base de données sur serveur dédié ou en nuage. Essentiel au fonctionnement de l'ensemble de la suite.",
  },
  {
    id: "entreprise",
    name: "MSM-ENTREPRISE",
    tagline: "Autonome et portable",
    description:
      "Installation sur un simple poste de travail. Idéal pour les travailleurs autonomes sans infrastructure réseau.",
  },
  {
    id: "organic",
    name: "MSM-ORGANIC",
    tagline: "Gestion complète",
    description:
      "Facturation, inventaire, commandes, rapports comptables — tous les modules livrés en standard, sans extra.",
  },
  {
    id: "route",
    name: "MSM-ROUTE",
    tagline: "Distribution sur route",
    description:
      "Acheminement des produits avec services associés. Route DSD autonome, avec ou sans connexion internet.",
  },
  {
    id: "comptoir",
    name: "MSM-COMPTOIR",
    tagline: "Ventes au comptoir",
    description:
      "Ventes en usine, magasin ou tout autre point de service. Liquidations, remises et gestion de stocks précise.",
  },
  {
    id: "kiosk",
    name: "MSM-KIOSK",
    tagline: "Kiosque de vente",
    description:
      "Fonctionnement similaire au comptoir avec vente à des clients en compte et haut niveau de précision des stocks.",
  },
  {
    id: "xero",
    name: "MSM-XERO",
    tagline: "Zéro papier",
    description:
      "Envoi de factures par courriel et réception de paiements en ligne. Connectez votre boutique en ligne.",
  },
  {
    id: "confidentiel",
    name: "MSM-CONFIDENTIEL",
    tagline: "Données protégées",
    description:
      "Base de données, connexion et réseau chiffrés. Confidentialité presque absolue pour données sensibles.",
  },
] as const;

export const valueProps = [
  {
    title: "Sans connexion requise",
    description:
      "Fonctionne sans internet, cellulaire ou Wi-Fi sur route. Synchronisation automatique en fin de journée.",
  },
  {
    title: "Tout inclus",
    description:
      "Installation, formation, support technique et mises à jour inclus. Pas de modules cachés ni de surprises.",
  },
  {
    title: "Support gratuit",
    description:
      "Support technique accessible par courriel et téléphone, avec outil de diagnostic intégré.",
  },
  {
    title: "25+ ans d'expertise",
    description:
      "Innovation en distribution (DSD) et vente hors réseau. Premier fournisseur dédié aux régions éloignées.",
  },
] as const;

export const pricingPlans = [
  {
    name: "Journalier",
    price: "3 $",
    period: "/ jour",
    extra: "3 $/jour par usager additionnel",
    ideal: "Entreprises actives au quotidien",
    features: ["Multi-société", "Multi-usager", "1 usager/instance", "Tout inclus"],
    highlighted: false,
  },
  {
    name: "Mensuel",
    price: "60 $",
    period: "/ mois",
    extra: "60 $/mois par usager additionnel",
    ideal: "Entreprises saisonnières",
    features: ["Multi-société", "Multi-usager", "1 usager/instance", "Désabonnement flexible"],
    highlighted: true,
  },
  {
    name: "Annuel",
    price: "365 $",
    period: "/ an",
    extra: "365 $/an par usager additionnel",
    ideal: "Entreprises actives toute l'année",
    features: ["Multi-société", "Multi-usager", "1 usager/instance", "Meilleur rapport qualité-prix"],
    highlighted: false,
  },
] as const;

export const industries = [
  "Santé",
  "Points de service",
  "Environnement",
  "Construction",
  "Entrepôts",
  "Plomberie",
  "Laboratoires dentaires",
  "Agroalimentaire",
  "Distribution (DSD)",
] as const;

/** Certified reseller / technology partners. Set `logo` to a path under public/ when assets are ready. */
export const partners: readonly {
  id: string;
  name: string;
  fullName: string;
  role: string;
  description: string;
  logo: string | null;
}[] = [
  {
    id: "zebra",
    name: "Zebra",
    fullName: "Zebra Technologies",
    role: "Revendeur certifié",
    description:
      "Matériel d'identification et de mobilité — lecteurs, imprimantes et terminaux pour le terrain.",
    logo: null,
  },
  {
    id: "global-payments",
    name: "Global Payments",
    fullName: "Global Payments",
    role: "Revendeur certifié",
    description:
      "Solutions de paiement pour encaisser en ligne et en point de service.",
    logo: null,
  },
];

export const faqOrganic = [
  {
    q: "À qui s'adresse MSM-ORGANIC ?",
    a: "Aux dirigeants et gestionnaires qui veulent une gestion simple et performante — de 1 à 2 500 employés, sur un ou plusieurs postes, avec ou sans réseau.",
  },
  {
    q: "Quel gain de temps puis-je attendre ?",
    a: "Nos clients rapportent généralement un facteur de 5 à 10 — réalisez en 1 jour ce qui demandait 5 à 10 jours auparavant.",
  },
  {
    q: "Tout est-il vraiment livré en standard ?",
    a: "Oui. Facturation, inventaire, commandes, rapports comptables — tous les modules sont inclus, sans extras à payer.",
  },
  {
    q: "La formation et le support sont-ils gratuits ?",
    a: "Oui. Installation, formation, support technique et mises à jour sont inclus. Une semaine suffit en général pour se former.",
  },
  {
    q: "Puis-je migrer depuis un autre logiciel ?",
    a: "Oui. MSM-ORGANIC supporte les standards d'import/export pour récupérer vos données existantes.",
  },
  {
    q: "Mes données sont-elles protégées et exportables ?",
    a: "La base est chiffrée. Vous pouvez exporter vos données librement, quel que soit le nombre d'usagers ou de bases.",
  },
  {
    q: "Puis-je l'installer sans infrastructure réseau ?",
    a: "Oui — sur un simple poste de travail, en réseau interne ou externe, ou en nuage pour y accéder où que vous soyez.",
  },
  {
    q: "Quels types de rapports puis-je produire ?",
    a: "Clients, fournisseurs, stocks, comptabilité… et si un rapport n'existe pas, nous pouvons le créer — voire un module sur mesure.",
  },
  {
    q: "J'ai une entreprise saisonnière — quelles options ai-je ?",
    a: "L'abonnement mensuel permet de vous désabonner en période creuse et de reprendre sans perdre vos données. Vos données vous appartiennent.",
  },
] as const;

/** Hero background videos (Mixkit — free commercial license) */
export const heroVideos = [
  "/videos/hero-1.mp4", // Business meeting
  "/videos/hero-2.mp4", // Warehouse inventory
  "/videos/hero-3.mp4", // Software development
  "/videos/hero-4.mp4", // Open office
  "/videos/hero-5.mp4", // Laptop / business analytics
] as const;
