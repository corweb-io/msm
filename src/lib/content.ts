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

export const faqOrganic = [
  {
    q: "Quel gain de temps puis-je attendre ?",
    a: "Nos clients rapportent généralement un facteur de 5 à 10 — réalisez en 1 jour ce qui demandait 5 à 10 jours auparavant.",
  },
  {
    q: "La formation et le support sont-ils vraiment gratuits ?",
    a: "Oui. L'installation, la formation, le support technique et les mises à jour sont inclus sans frais supplémentaires.",
  },
  {
    q: "Puis-je migrer depuis un autre logiciel ?",
    a: "Oui. MSM supporte tous les standards informatiques (import/export) pour récupérer vos données existantes.",
  },
  {
    q: "J'ai une entreprise saisonnière — quelles options ai-je ?",
    a: "L'abonnement mensuel permet de vous désabonner durant les périodes creuses et de reprendre sans perdre vos données.",
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
