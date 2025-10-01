export const translations = {
  fr: {
    // Navigation
    home: 'Accueil',
    about: 'À propos',
    projects: 'Projets',
    services: 'Services',
    contact: 'Contact',
    
    // Page d'accueil
    welcomeTitle: 'MonDev Digital',
    welcomeSubtitle: 'Votre partenaire de confiance pour le développement web moderne',
    welcomeDescription: 'Nous sommes une agence de développement spécialisée dans la création de sites web et d\'applications mobiles modernes.',
    
    // À propos
    aboutTitle: 'À propos de MonDev',
    aboutDescription: 'MonDev Agency est une agence de développement web spécialisée dans la création de solutions digitales sur mesure.',
    
    // Projets
    projectsTitle: 'Nos Projets',
    projectsDescription: 'Découvrez nos réalisations et projets récents.',
    
    // Services
    servicesTitle: 'Nos Services',
    servicesDescription: 'Nous proposons une gamme complète de services de développement web.',
    
    // Contact
    contactTitle: 'Contactez-nous',
    contactDescription: 'Prêt à démarrer votre projet ? Contactez-nous dès aujourd\'hui.',
    
    // Commun
    learnMore: 'En savoir plus',
    getStarted: 'Commencer',
    viewProject: 'Voir le projet',
    contactUs: 'Nous contacter'
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    services: 'Services',
    contact: 'Contact',
    
    // Page d'accueil
    welcomeTitle: 'MonDev Digital',
    welcomeSubtitle: 'Your trusted partner for modern web development',
    welcomeDescription: 'We are a development agency specialized in creating modern websites and mobile applications.',
    
    // À propos
    aboutTitle: 'About MonDev',
    aboutDescription: 'MonDev Agency is a web development agency specialized in creating custom digital solutions.',
    
    // Projets
    projectsTitle: 'Our Projects',
    projectsDescription: 'Discover our recent achievements and projects.',
    
    // Services
    servicesTitle: 'Our Services',
    servicesDescription: 'We offer a complete range of web development services.',
    
    // Contact
    contactTitle: 'Contact Us',
    contactDescription: 'Ready to start your project? Contact us today.',
    
    // Commun
    learnMore: 'Learn More',
    getStarted: 'Get Started',
    viewProject: 'View Project',
    contactUs: 'Contact Us'
  }
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.fr;

