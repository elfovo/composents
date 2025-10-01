// Système de couleurs centralisé pour MonDev Agency
// Palette strictement noir et blanc pour une identité visuelle cohérente

export const colors = {
  // Couleurs principales
  primary: {
    black: '#000000',
    white: '#ffffff',
    blue: '#5239ff', // Bleu pour les survols du menu
  },
  
  // Couleurs de fond
  background: {
    main: '#000000',      // Fond principal noir
    card: '#ffffff',      // Cartes blanches
    menu: '#ffffff',     // Menu blanc
  },
  
  // Couleurs de texte
  text: {
    primary: '#ffffff',   // Texte principal blanc
    secondary: '#000000', // Texte secondaire noir
    muted: '#666666',     // Texte atténué gris
    light: '#cccccc',     // Texte clair gris clair
  },
  
  // Couleurs de bordure
  border: {
    light: '#e5e5e5',     // Bordure claire
    dark: '#333333',      // Bordure sombre
  },
  
  // Couleurs d'état
  state: {
    hover: '#f5f5f5',     // Survol gris très clair
    active: '#e0e0e0',    // État actif gris clair
  },
  
  // Couleurs du menu BubbleMenu
  menu: {
    background: '#ffffff',  // Fond du menu blanc
    text: '#000000',       // Texte du menu noir
    logo: '#000000',       // Logo noir
    hover: '#5239ff',      // Couleur de survol bleue
  },
  
  // Couleurs des cartes
  card: {
    background: '#ffffff', // Fond des cartes blanc
    text: '#000000',       // Texte des cartes noir
    border: '#e5e5e5',     // Bordure des cartes gris clair
  }
} as const;

// Types pour TypeScript
export type ColorKey = keyof typeof colors;
export type ColorValue = typeof colors[ColorKey];
