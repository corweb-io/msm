/**
 * Marketing photography.
 * Sector/region assets adapted from the Nutrisoft sibling project.
 * Product & page imagery from Unsplash/Pexels (free commercial license).
 * BacTrack imagery from the original MSM Environnementale microsite (© MSM).
 */

export const sectors = [
  {
    id: "agriculture",
    title: "Agriculture",
    description: "Récoltes, parcelles et traçabilité de la ferme à l'assiette.",
    image: "/images/sectors/sector_agriculture.jpeg",
  },
  {
    id: "dairy",
    title: "Produits laitiers",
    description: "Fromageries et transformateurs — lots et contrôle qualité.",
    image: "/images/sectors/sector_dairy.jpeg",
  },
  {
    id: "meat",
    title: "Viandes et volailles",
    description: "Abattoirs et transformateurs — traçabilité et conformité.",
    image: "/images/sectors/sector_meat.jpeg",
  },
  {
    id: "cattle",
    title: "Bovins et porcins",
    description: "Élevage — troupeaux, pesées et expéditions.",
    image: "/images/sectors/sector_cattle.jpeg",
  },
  {
    id: "beverages",
    title: "Eau et boissons",
    description: "Embouteillage, consignes et livraisons récurrentes.",
    image: "/images/sectors/sector_beverages.jpeg",
  },
  {
    id: "bakery",
    title: "Boulangerie et plus",
    description: "Boulangeries, confiseries, produits de l'érable et autres.",
    image: "/images/sectors/sector_bakery.jpeg",
  },
] as const;

export const regions = [
  { id: "nord", title: "Nord du Québec", image: "/images/regions/region_nord.jpg" },
  { id: "abitibi", title: "Abitibi-Témiscamingue", image: "/images/regions/region_abitibi.jpg" },
  { id: "baiejames", title: "Baie-James", image: "/images/regions/region_baiejames.jpg" },
  { id: "saguenay", title: "Saguenay–Lac-Saint-Jean", image: "/images/regions/region_saguenay.jpg" },
  { id: "coteNord", title: "Côte-Nord", image: "/images/regions/region_coteNord.jpg" },
  { id: "basStLaurent", title: "Bas-Saint-Laurent", image: "/images/regions/region_basStLaurent.jpg" },
  { id: "gaspesie", title: "Gaspésie", image: "/images/regions/region_gaspesie.jpg" },
] as const;

/** One atmosphere photo per product module */
export const productImages = {
  central: "/images/content/central-servers.jpg",
  organic: "/images/content/organic-inventory.jpg",
  route: "/images/content/route-delivery.jpg",
  comptoir: "/images/content/comptoir-pos.jpg",
  kiosk: "/images/content/kiosk-market.jpg",
  xero: "/images/content/xero-payment.jpg",
  entreprise: "/images/content/entreprise-portable.jpg",
  confidentiel: "/images/content/confidentiel-lock.jpg",
} as const;

/** Solution hub / homepage cards */
export const solutionImages = {
  organic: productImages.organic,
  iaa: "/images/content/iaa-tablet.png",
  confidentiel: productImages.confidentiel,
  bactrack: "/images/content/bactrack-street.jpg",
} as const;

/** Original MSM Environnementale / BacTrack assets */
export const bactrackImages = {
  hero: "/images/content/bactrack-hero.png",
  street: "/images/content/bactrack-street.jpg",
  sensor: "/images/content/bactrack-sensor.jpg",
  system: "/images/content/bactrack-system.jpg",
  hardware: "/images/content/bactrack-hardware.jpg",
} as const;

/** Original MSM IAA landing-page hardware assets */
export const iaaImages = {
  milstd: "/images/content/iaa-milstd.png",
  ip54: "/images/content/iaa-ip54.png",
  tablet: "/images/content/iaa-tablet.png",
  dashboard: "/images/content/iaa-dashboard.png",
  handle: "/images/content/iaa-handle.png",
  keyboard: "/images/content/iaa-keyboard.png",
  scanner: "/images/content/iaa-scanner.png",
  bakery: "/images/content/iaa-bakery.jpg",
} as const;

/** Page-level photography (headers & feature sections) */
export const pageImages = {
  aboutHero: regions[0].image,
  aboutSide: "/images/content/about-agriculture.jpg",
  careers: "/images/content/careers-team.jpg",
  contact: "/images/content/contact-phone.jpg",
  support: "/images/content/support-headset.jpg",
  tarifs: "/images/content/tarifs-analytics.jpg",
  solutions: productImages.organic,
  produits: productImages.central,
  iaaBakery: iaaImages.bakery,
} as const;
