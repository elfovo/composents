'use client';

import { colors } from '@/lib/colors';
import { GooeyNav } from '@/components/navigation';
import { useState, lazy, Suspense } from 'react';

// Lazy loading des composants de navigation
const BubbleMenu = lazy(() => import('@/components/navigation/BubbleMenu.jsx'));
const GooeyNavComponent = lazy(() => import('@/components/navigation/GooeyNav.jsx'));
const CardNav = lazy(() => import('@/components/navigation/CardNav.jsx'));
const StaggeredMenu = lazy(() => import('@/components/navigation/StaggeredMenu.jsx'));
const Dock = lazy(() => import('@/components/navigation/Dock.jsx'));
const GlassIcons = lazy(() => import('@/components/navigation/GlassIcons.jsx'));
const AnimatedList = lazy(() => import('@/components/navigation/AnimatedList.jsx'));

export default function NavigationSection() {
  const [activeDemo, setActiveDemo] = useState('bubble');

  const navigationDemos = [
    {
      id: 'bubble',
      name: 'BubbleMenu',
      description: 'Menu flottant avec animations et effets visuels',
      component: (
        <div className="w-full h-[600px] rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg relative flex items-center justify-center" style={{ backgroundColor: '#000000' }}>
          <Suspense fallback={<div className="text-white">Chargement...</div>}>
            <BubbleMenu
              logo="logo.svg"
              items={[
                { label: 'Demo 1', href: '#', ariaLabel: 'Demo 1', rotation: -8, hoverStyles: { bgColor: '#5239ff', textColor: '#ffffff' } },
                { label: 'Demo 2', href: '#', ariaLabel: 'Demo 2', rotation: 8, hoverStyles: { bgColor: '#5239ff', textColor: '#ffffff' } },
                { label: 'Demo 3', href: '#', ariaLabel: 'Demo 3', rotation: -8, hoverStyles: { bgColor: '#5239ff', textColor: '#ffffff' } },
                { label: 'Demo 4', href: '#', ariaLabel: 'Demo 4', rotation: 8, hoverStyles: { bgColor: '#5239ff', textColor: '#ffffff' } },
                { label: 'Demo 5', href: '#', ariaLabel: 'Demo 5', rotation: -8, hoverStyles: { bgColor: '#5239ff', textColor: '#ffffff' } }
              ]}
              useFixedPosition={false}
              menuBg="#ffffff"
              menuContentColor="#000000"
              className="shadow-lg"
              disableNavigation={true}
              onMenuClick={undefined}
              onItemClick={undefined}
              style={undefined}
            />
          </Suspense>
          <div className="absolute bottom-4 left-4 right-4 text-center">
            <p className="text-white text-sm opacity-70">
              Menu flottant avec animations et effets visuels
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'gooey',
      name: 'GooeyNav',
      description: 'Navigation avec effets gooey et particules',
      component: (
        <div className="w-full h-[600px] rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg relative" style={{ backgroundColor: '#000000' }}>
          <div className="absolute inset-0" style={{ backgroundColor: '#000000' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Suspense fallback={<div className="text-white">Chargement...</div>}>
              <GooeyNavComponent
                items={[
                  { label: 'Demo 1', href: '#' },
                  { label: 'Demo 2', href: '#' },
                  { label: 'Demo 3', href: '#' },
                  { label: 'Demo 4', href: '#' }
                ]}
                animationTime={600}
                particleCount={12}
                particleDistances={[80, 8]}
                particleR={80}
                timeVariance={200}
                colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                initialActiveIndex={0}
              />
            </Suspense>
          </div>
          <div className="absolute bottom-4 left-4 right-4 text-center">
            <p className="text-white text-sm opacity-70">
              Navigation avec effets gooey et particules
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'card',
      name: 'CardNav',
      description: 'Navigation avec cartes expansibles et animations',
      component: (
        <div className="w-full h-[600px] rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg relative flex items-center justify-center" style={{ backgroundColor: '#000000' }}>
          <Suspense fallback={<div className="text-white">Chargement...</div>}>
            <CardNav
              logo="logo.svg"
              logoAlt="Logo Demo"
              items={[
                {
                  label: 'Demo 1',
                  bgColor: '#000000',
                  textColor: '#ffffff',
                  links: [
                    { label: 'Sous-menu 1', href: '#', ariaLabel: 'Sous-menu 1' },
                    { label: 'Sous-menu 2', href: '#', ariaLabel: 'Sous-menu 2' }
                  ]
                },
                {
                  label: 'Demo 2',
                  bgColor: '#000000',
                  textColor: '#ffffff',
                  links: [
                    { label: 'Sous-menu 3', href: '#', ariaLabel: 'Sous-menu 3' },
                    { label: 'Sous-menu 4', href: '#', ariaLabel: 'Sous-menu 4' }
                  ]
                },
                {
                  label: 'Demo 3',
                  bgColor: '#000000',
                  textColor: '#ffffff',
                  links: [
                    { label: 'Sous-menu 5', href: '#', ariaLabel: 'Sous-menu 5' },
                    { label: 'Sous-menu 6', href: '#', ariaLabel: 'Sous-menu 6' }
                  ]
                }
              ]}
              baseColor="#ffffff"
              menuColor="#000000"
              buttonBgColor="#000000"
              buttonTextColor="#ffffff"
              className="shadow-lg"
            />
          </Suspense>
          <div className="absolute bottom-4 left-4 right-4 text-center">
            <p className="text-white text-sm opacity-70">
              Navigation avec cartes expansibles et animations
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'staggered',
      name: 'StaggeredMenu',
      description: 'Menu avec animations décalées et effets de superposition',
      component: (
        <div className="w-full h-[600px] rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg relative flex items-center justify-center" style={{ backgroundColor: '#000000' }}>
          <Suspense fallback={<div className="text-white">Chargement...</div>}>
            <StaggeredMenu
              position="right"
              colors={['#B19EEF', '#5227FF']}
              items={[
                { label: 'Demo 1', link: '#', ariaLabel: 'Demo 1' },
                { label: 'Demo 2', link: '#', ariaLabel: 'Demo 2' },
                { label: 'Demo 3', link: '#', ariaLabel: 'Demo 3' },
                { label: 'Demo 4', link: '#', ariaLabel: 'Demo 4' }
              ]}
              socialItems={[
                { label: 'Twitter', link: 'https://twitter.com' },
                { label: 'GitHub', link: 'https://github.com' },
                { label: 'LinkedIn', link: 'https://linkedin.com' }
              ]}
              displaySocials={true}
              displayItemNumbering={true}
              logoUrl="logo-white.svg"
              menuButtonColor="#ffffff"
              openMenuButtonColor="#000000"
              accentColor="#5227FF"
              changeMenuColorOnOpen={true}
              isFixed={false}
              className="shadow-lg"
            />
          </Suspense>
          <div className="absolute bottom-4 left-4 right-4 text-center">
            <p className="text-white text-sm opacity-70">
              Menu avec animations décalées et effets de superposition
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'dock',
      name: 'Dock',
      description: 'Barre de navigation avec effets de magnification et animations fluides',
      component: (
        <div className="w-full h-[600px] rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg relative flex items-center justify-center" style={{ backgroundColor: '#000000' }}>
          <Suspense fallback={<div className="text-white">Chargement...</div>}>
            <Dock
              items={[
                { 
                  label: 'Demo 1', 
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9,22 9,12 15,12 15,22"/>
                    </svg>
                  ), 
                  href: '#', 
                  onClick: (e) => e.preventDefault() 
                },
                { 
                  label: 'Demo 2', 
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/>
                    </svg>
                  ), 
                  href: '#', 
                  onClick: (e) => e.preventDefault() 
                },
                { 
                  label: 'Demo 3', 
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3"/>
                      <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
                    </svg>
                  ), 
                  href: '#', 
                  onClick: (e) => e.preventDefault() 
                },
                { 
                  label: 'Demo 4', 
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                      <rect x="7" y="7" width="3" height="9"/>
                      <rect x="14" y="7" width="3" height="5"/>
                    </svg>
                  ), 
                  href: '#', 
                  onClick: (e) => e.preventDefault() 
                },
                { 
                  label: 'Demo 5', 
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                      <path d="M13 8H7"/>
                      <path d="M17 12H7"/>
                    </svg>
                  ), 
                  href: '#', 
                  onClick: (e) => e.preventDefault() 
                }
              ]}
              magnification={80}
              distance={200}
              panelHeight={68}
              dockHeight={256}
              baseItemSize={50}
              className="shadow-lg"
            />
          </Suspense>
          <div className="absolute bottom-4 left-4 right-4 text-center">
            <p className="text-white text-sm opacity-70">
              Barre de navigation avec effets de magnification et animations fluides
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'glass',
      name: 'GlassIcons',
      description: 'Icônes avec effet de verre et gradients colorés',
      component: (
        <div className="w-full h-[600px] rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg relative flex items-center justify-center" style={{ backgroundColor: '#000000' }}>
          <Suspense fallback={<div className="text-white">Chargement...</div>}>
            <GlassIcons
              items={[
                { 
                  label: 'Demo 1', 
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9,22 9,12 15,12 15,22"/>
                    </svg>
                  ), 
                  color: 'blue'
                },
                { 
                  label: 'Demo 2', 
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/>
                    </svg>
                  ), 
                  color: 'purple'
                },
                { 
                  label: 'Demo 3', 
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3"/>
                      <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
                    </svg>
                  ), 
                  color: 'red'
                },
                { 
                  label: 'Demo 4', 
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                      <rect x="7" y="7" width="3" height="9"/>
                      <rect x="14" y="7" width="3" height="5"/>
                    </svg>
                  ), 
                  color: 'green'
                },
                { 
                  label: 'Demo 5', 
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                      <path d="M13 8H7"/>
                      <path d="M17 12H7"/>
                    </svg>
                  ), 
                  color: 'orange'
                }
              ]}
              className="shadow-lg"
            />
          </Suspense>
          <div className="absolute bottom-4 left-4 right-4 text-center">
            <p className="text-white text-sm opacity-70">
              Icônes avec effet de verre et gradients colorés
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'animated-list',
      name: 'AnimatedList',
      description: 'Liste animée avec navigation au clavier et effets de scroll',
      component: (
        <div className="w-full h-[600px] rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg relative flex items-center justify-center" style={{ backgroundColor: '#000000' }}>
          <Suspense fallback={<div className="text-white">Chargement...</div>}>
            <AnimatedList
              items={[
                'Accueil',
                'À propos',
                'Services',
                'Portfolio',
                'Blog',
                'Contact',
                'Équipe',
                'Carrières',
                'Actualités',
                'Support',
                'Documentation',
                'API',
                'Partenaires',
                'Témoignages',
                'FAQ'
              ]}
              onItemSelect={(item, index) => {
                console.log(`Sélectionné: ${item} (index: ${index})`);
              }}
              showGradients={true}
              enableArrowNavigation={true}
              displayScrollbar={true}
              initialSelectedIndex={0}
              className="shadow-lg"
            />
          </Suspense>
          <div className="absolute bottom-4 left-4 right-4 text-center">
            <p className="text-white text-sm opacity-70">
              Liste animée avec navigation au clavier et effets de scroll
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="navigation" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: colors.text.primary }}>
              Navigation
            </h2>
            <p className="text-xl" style={{ color: colors.text.muted }}>
              Collection de composants de navigation et menus interactifs
            </p>
          </div>

          {/* Navigation moderne avec GooeyNav */}
          <div className="flex justify-center mb-12">
            <GooeyNav
              items={navigationDemos.map(demo => ({
                label: demo.name,
                href: '#'
              }))}
              animationTime={600}
              particleCount={12}
              particleDistances={[80, 8]}
              particleR={80}
              timeVariance={200}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
              initialActiveIndex={navigationDemos.findIndex(demo => demo.id === activeDemo)}
              onItemClick={(item, index) => {
                setActiveDemo(navigationDemos[index].id);
              }}
            />
          </div>

          {/* Zone d'affichage avec contours arrondis */}
          <div className="mb-8 p-8 rounded-2xl shadow-lg" style={{ backgroundColor: '#000000' }}>
            {navigationDemos.find(demo => demo.id === activeDemo)?.component}
          </div>

          {/* Description */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4" style={{ color: colors.text.primary }}>
              {navigationDemos.find(demo => demo.id === activeDemo)?.name}
            </h3>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.text.muted }}>
              {navigationDemos.find(demo => demo.id === activeDemo)?.description}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
