# MonDev Agency - Site Web

Site web moderne et modulaire pour l'agence de développement MonDev, construit avec Next.js, TypeScript, Tailwind CSS et le composant BubbleMenu interactif. Le site dispose d'un thème sombre et d'un système de traduction français/anglais.

## 🚀 Technologies Utilisées

- **Next.js 15** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire avec thème sombre
- **shadcn/ui** - Composants UI modernes
- **GSAP** - Animations fluides
- **BubbleMenu** - Menu interactif avec animations
- **Système de traduction** - Français/Anglais

## 📁 Structure du Projet

```
src/
├── app/                    # Pages Next.js (App Router)
│   ├── about/             # Page À propos
│   ├── contact/           # Page Contact
│   ├── projects/         # Page Projets
│   ├── services/         # Page Services
│   ├── layout.tsx        # Layout principal avec thème sombre
│   └── page.tsx          # Page d'accueil
├── components/            # Composants réutilisables
│   ├── layout/           # Composants de layout
│   │   ├── Header.tsx    # En-tête avec BubbleMenu
│   │   └── Layout.tsx    # Layout principal avec thème sombre
│   ├── BubbleMenu.jsx    # Composant menu interactif
│   └── LanguageSwitcher.tsx # Sélecteur de langue
├── config/               # Configuration
│   └── menu.ts          # Configuration du menu avec traductions
├── contexts/            # Contextes React
│   └── LanguageContext.tsx # Contexte de traduction
├── lib/                 # Utilitaires et traductions
│   └── translations.ts  # Fichier de traductions FR/EN
├── types/               # Types TypeScript
│   └── menu.ts         # Types pour le menu
└── lib/                # Utilitaires
    └── utils.ts        # Fonctions utilitaires
```

## 🎨 Fonctionnalités

- **Menu BubbleMenu Interactif** : Navigation moderne avec animations GSAP
- **Thème Sombre** : Design moderne avec palette de couleurs sombres
- **Traduction FR/EN** : Système de traduction complet
- **Design Responsive** : Adapté à tous les écrans
- **Architecture Modulaire** : Code organisé et maintenable
- **TypeScript** : Typage strict pour une meilleure qualité de code
- **Configuration Centralisée** : Menu configuré dans un fichier dédié

## 🌐 Pages Disponibles

1. **Accueil** (`/`) - Page d'accueil avec présentation de l'agence
2. **À propos** (`/about`) - Informations sur MonDev Agency
3. **Projets** (`/projects`) - Portfolio des réalisations
4. **Services** (`/services`) - Offres de services de l'agence
5. **Contact** (`/contact`) - Formulaire de contact et informations

## 🛠️ Installation et Démarrage

1. **Installer les dépendances** :
   ```bash
   npm install
   ```

2. **Démarrer le serveur de développement** :
   ```bash
   npm run dev
   ```

3. **Ouvrir dans le navigateur** :
   ```
   http://localhost:3000
   ```

## 🌍 Traduction

Le site supporte deux langues :
- **Français** (par défaut)
- **Anglais**

Utilisez le sélecteur de langue en haut à droite pour changer de langue. Toutes les pages et le menu s'adapteront automatiquement.

## 📝 Personnalisation

### Modifier le Menu

Le menu est configuré dans `src/config/menu.ts`. Vous pouvez :
- Modifier les labels des menus (traduits automatiquement)
- Changer les couleurs de survol
- Ajuster les rotations des éléments
- Modifier les liens de navigation

### Ajouter de Nouvelles Traductions

1. Ajoutez les nouvelles clés dans `src/lib/translations.ts`
2. Utilisez `const { t } = useLanguage()` dans vos composants
3. Appelez `t('votreCle')` pour obtenir la traduction

### Styling

Le projet utilise Tailwind CSS avec un thème sombre. Les styles personnalisés sont dans :
- `src/app/globals.css` - Styles globaux avec variables CSS pour le thème sombre
- `src/components/BubbleMenu.css` - Styles du menu

## 🎯 Prochaines Étapes

- [ ] Ajouter plus de contenu spécifique pour chaque section
- [ ] Implémenter des animations supplémentaires
- [ ] Ajouter des composants UI supplémentaires
- [ ] Optimiser les performances
- [ ] Ajouter des tests
- [ ] Intégrer un CMS pour la gestion de contenu

## 📄 Licence

Ce projet est développé pour MonDev Agency.