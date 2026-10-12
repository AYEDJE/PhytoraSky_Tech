// ====================================================================
//  FICHIER DE CONTENU — Modifie tout le texte et les images ici
// ====================================================================

// --- Images du site ---
// Tu peux remplacer ces liens par tes propres images
export const images = {
  hero:   'https://images.pexels.com/photos/34182367/pexels-photo-34182367.jpeg?auto=compress&cs=tinysrgb&w=1400',
  drone:  'https://images.pexels.com/photos/34182370/pexels-photo-34182370.jpeg?auto=compress&cs=tinysrgb&w=1200',
  field:  'https://images.pexels.com/photos/34182311/pexels-photo-34182311.jpeg?auto=compress&cs=tinysrgb&w=1000',
  fire:   'https://images.pexels.com/photos/33622176/pexels-photo-33622176.jpeg?auto=compress&cs=tinysrgb&w=1000',
  crops:  'https://images.pexels.com/photos/19239403/pexels-photo-19239403.jpeg?auto=compress&cs=tinysrgb&w=1000',
};

// --- Liens du menu ---
export const navLinks = [
  { label: 'Le projet',    href: '#projet' },
  { label: 'La solution',  href: '#solution' },
  { label: 'Technologie',  href: '#technologie' },
  { label: 'Missions',     href: '#missions' },
  { label: 'Simulateur',   href: '#simulateur' },
  { label: "L'équipe",     href: '#equipe' },
];

// --- Section : Problématique ---
export const problems = [
  { title: 'Maladies et ravageurs',  text: 'Les maladies et les ravageurs réduisent les récoltes.',                    image: images.crops },
  { title: 'Manque de suivi',        text: 'Le manque de protection et de suivi fragilise les cultures.',              image: images.field },
  { title: 'Traitements longs',      text: 'Les grandes parcelles nécessitent des traitements longs et difficiles.',   image: images.drone },
  { title: 'Feux de brousse',        text: 'Les feux de brousse menacent les terres et les écosystèmes.',              image: images.fire },
];

// --- Section : Les 4 missions ---
export const missions = [
  { icon: 'Sprout',     title: 'Surveillance agricole',         text: 'Détection des cultures malades, suivi de la croissance et cartographie des plantations.' },
  { icon: 'Trees',      title: 'Surveillance environnementale', text: 'Observation des forêts, des eaux et des zones protégées.' },
  { icon: 'Flame',      title: 'Détection des feux',            text: 'Caméras thermique et RGB pour repérer les fumées et les flammes.' },
  { icon: 'CloudRain',  title: 'Pulvérisation intelligente',    text: 'Traitement ciblé des zones affectées avec une consommation réduite.' },
];

// --- Section : Innovation (liste à puces) ---
export const innovationPoints = [
  "Détection automatique des maladies par analyse d'images",
  'Traitement ciblé des seules zones affectées',
  'Cartographie intelligente à partir des vols successifs',
  'Génération automatique de rapports agricoles',
  'Application mobile de suivi des missions',
  'Recharge possible grâce à une station solaire',
];

// --- Section : Démarche (étapes) ---
export const processSteps = [
  'Besoin & conception',
  'Fabrication',
  'Tests',
  'Déploiement',
];

// --- Section : Investissement (postes de dépense) ---
export const investmentItems = [
  { icon: 'Radar',  text: 'Drone et système de pulvérisation' },
  { icon: 'Target', text: 'Caméras et capteurs intelligents' },
  { icon: 'Zap',    text: 'Station de recharge solaire' },
  { icon: 'Map',    text: 'Développement logiciel et application' },
];

// --- Section : Valeur ajoutée ---
export const impactGroups = [
  { title: 'Agriculteurs', text: 'Moins de risques sanitaires · Gain de temps · Plus de rendements' },
  { title: 'État',         text: "Meilleure surveillance environnementale · Réduction des coûts d'intervention" },
  { title: 'ONG',          text: 'Cartographie des forêts · Surveillance des zones protégées' },
  { title: 'ANAC',         text: 'Usage civil des drones · Prévention des catastrophes' },
];

// --- Section : Environnement (menaces détectées) ---
export const environmentThreats = [
  'Déforestation',
  'Dépôts sauvages',
  'Pollution des eaux',
  'Activités suspectes',
];

// --- Section : Équipe ---
// Modifie les noms et rôles ici
export const team = [
  { first: 'ATSOU',      last: 'Elikplim Seth',    role: "Chef d'équipe · Responsable technique" },
  { first: 'KEKEH',       last: 'Alcide',           role: 'Responsable Intelligence Artificielle' },
  { first: 'ATUNLESE',   last: 'Josue O.O.O',      role: 'Responsable Données & Logiciels' },
  { first: 'ATTIOGBE',    last: 'Ulrich',           role: 'Responsable Opérations' },
  { first: 'AYEDJE',      last: 'Kossi Blessing',   role: 'Responsable Systèmes embarqués' },
  { first: 'ANATO',       last: 'Fabrice',          role: 'Responsable Mécanique & Fabrication' },
];
