/** Marketing photography adapted from the Nutrisoft sibling project. */

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

export const productImages = {
  central: "/images/products/software_central.jpg",
  organic: "/images/products/software_organic.jpg",
  route: "/images/products/software_route.jpg",
  comptoir: "/images/products/software_comptoir.jpg",
  kiosk: "/images/products/software_kiosque.jpg",
  xero: "/images/products/software_xero.jpg",
  custom: "/images/products/software_custom.jpg",
  entreprise: "/images/products/software_organic.jpg",
  confidentiel: "/images/products/software_central.jpg",
} as const;

export const solutionImages = {
  organic: productImages.organic,
  iaa: productImages.route,
  confidentiel: productImages.confidentiel,
  bactrack: productImages.custom,
} as const;
