# Composants Showcase

Une bibliothèque de composants réutilisables pour vos projets web modernes.

## 🚀 Fonctionnalités

- **Backgrounds** : LiquidEther, gradients animés, particules, formes géométriques
- **Boutons** : Boutons primaires, animés, toggle, avec états de chargement
- **Layouts** : Cartes, grilles, navigation, formulaires
- **Animations** : Fade/slide, effets de survol, spinners, transitions avancées

## 📁 Structure du Projet

```
src/
├── components/
│   ├── BubbleMenu.jsx          # Menu animé avec effet bulle
│   ├── LiquidEther.jsx         # Background liquide WebGL
│   ├── LanguageSwitcher.tsx    # Sélecteur de langue
│   └── sections/
│       ├── HomeSection.tsx     # Page d'accueil du showcase
│       ├── BackgroundsSection.tsx
│       ├── ButtonsSection.tsx
│       ├── LayoutsSection.tsx
│       └── AnimationsSection.tsx
├── config/
│   └── menu.ts                 # Configuration du menu
├── lib/
│   ├── colors.ts               # Système de couleurs
│   └── translations.ts         # Traductions
└── contexts/
    └── LanguageContext.tsx     # Contexte de langue
```

## 🎨 Utilisation des Composants

### LiquidEther (Background liquide)
```jsx
<LiquidEther
  mouseForce={15}
  cursorSize={80}
  colors={['#5227FF', '#FF9FFC', '#B19EEF']}
  autoDemo={true}
  autoSpeed={0.3}
  autoIntensity={1.8}
  resolution={0.4}
/>
```

### BubbleMenu (Menu animé)
```jsx
<BubbleMenu
  logo="/logo.svg"
  items={menuItems}
  useFixedPosition={true}
  menuBg="#ffffff"
  menuContentColor="#000000"
/>
```

### Boutons avec animations
```jsx
<button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all font-medium transform hover:scale-105">
  Bouton Animé
</button>
```

## 🛠️ Installation

```bash
npm install
npm run dev
```

## 📝 Notes

- Tous les composants sont conçus pour être facilement réutilisables
- Le système de couleurs est centralisé dans `lib/colors.ts`
- Les animations utilisent GSAP et CSS transitions
- Responsive design avec Tailwind CSS

## 🎯 Objectif

Ce projet sert de base pour tous vos futurs projets web. Chaque composant peut être copié et adapté selon vos besoins spécifiques.