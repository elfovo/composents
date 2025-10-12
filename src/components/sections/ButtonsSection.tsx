'use client';

import { colors } from '@/lib/colors';
import GooeyNav from '@/components/navigation/GooeyNav.jsx';
import { SimpleButton, GradientButton, OutlineButton, CancelButton, SquareButton, SquareButtonFilled } from '@/components/buttons';
import { useState, useEffect, useRef } from 'react';

export default function ButtonsSection() {
  const [activeDemo, setActiveDemo] = useState('simple');
  const [shouldCenter, setShouldCenter] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const buttonDemos = [
    {
      id: 'simple',
      name: 'Bouton Simple',
      description: 'Bouton blanc moderne et minimaliste',
      component: (
        <div className="flex justify-center items-center">
          <SimpleButton size="lg">
            Bouton Simple
          </SimpleButton>
        </div>
      )
    },
    {
      id: 'gradient',
      name: 'Bouton Gradient',
      description: 'Bouton avec dégradé bleu',
      component: (
        <div className="flex justify-center items-center">
          <GradientButton size="lg" gradient="blue">
            Bouton Gradient
          </GradientButton>
        </div>
      )
    },
    {
      id: 'outline',
      name: 'Bouton Outline',
      description: 'Bouton avec bordure blanche',
      component: (
        <div className="flex justify-center items-center">
          <OutlineButton size="lg" variant="white">
            Bouton Outline
          </OutlineButton>
        </div>
      )
    },
    {
      id: 'cancel',
      name: 'Bouton Cancel',
      description: 'Bouton rond avec croix pour annuler',
      component: (
        <div className="flex justify-center items-center">
          <CancelButton size="lg" />
        </div>
      )
    },
    {
      id: 'square',
      name: 'Bouton Square',
      description: 'Bouton avec bordure blanche et bords carrés',
      component: (
        <div className="flex justify-center items-center">
          <SquareButton size="lg" variant="white">
            Bouton Square
          </SquareButton>
        </div>
      )
    },
    {
      id: 'squarefilled',
      name: 'Bouton Square Filled',
      description: 'Bouton blanc plein avec bords carrés',
      component: (
        <div className="flex justify-center items-center">
          <SquareButtonFilled size="lg" variant="white">
            Bouton Square Filled
          </SquareButtonFilled>
        </div>
      )
    }
  ];

  const navItems = buttonDemos.map((demo) => ({
    label: demo.name,
    href: '#'
  }));

  useEffect(() => {
    if (!containerRef.current) return;

    const links = containerRef.current.querySelectorAll('a');
    links.forEach((link: HTMLAnchorElement, index: number) => {
      link.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const selectedDemo = buttonDemos[index];
        if (selectedDemo) {
          setActiveDemo(selectedDemo.id);
        }
      });
    });

    return () => {
      links.forEach((link: HTMLAnchorElement) => {
        link.removeEventListener('click', () => {});
      });
    };
  }, [buttonDemos, setActiveDemo]);

  // Détecter si le contenu déborde pour centrer ou non
  useEffect(() => {
    const checkOverflow = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const content = container.querySelector('.gooey-nav-container');
      
      if (content) {
        const containerWidth = container.clientWidth;
        const contentWidth = content.scrollWidth;
        
        // Si le contenu ne déborde pas, centrer
        setShouldCenter(contentWidth <= containerWidth);
      }
    };

    // Vérifier au montage et au redimensionnement
    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    
    // Vérifier après un délai pour laisser le temps au contenu de se rendre
    const timeoutId = setTimeout(checkOverflow, 100);

    return () => {
      window.removeEventListener('resize', checkOverflow);
      clearTimeout(timeoutId);
    };
  }, [activeDemo]);

  return (
    <section id="buttons" className="min-h-screen py-20" style={{ backgroundColor: colors.background.main }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-0">
            <h2 className="text-4xl font-bold mb-4" style={{ color: colors.text.primary }}>
              Boutons & Interactions
            </h2>
            <p className="text-xl" style={{ color: colors.text.muted }}>
              Collection de boutons et éléments interactifs
            </p>
          </div>

          {/* Navigation moderne avec GooeyNav */}
          <div className="relative" style={{ margin: 0, padding: 0, marginBottom: 0 }}>
            <div 
              className={`w-full overflow-x-auto overflow-y-hidden scrollbar-hide ${shouldCenter ? 'flex justify-center' : ''}`}
              ref={containerRef}
              style={{ 
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                margin: 0,
                padding: '50px 0',
                marginBottom: 0
              }}
            >
              <div className="inline-block min-w-max">
                <GooeyNav
                  items={navItems}
                  animationTime={600}
                  particleCount={12}
                  particleDistances={[80, 8]}
                  particleR={80}
                  timeVariance={200}
                  colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                  initialActiveIndex={buttonDemos.findIndex((demo) => demo.id === activeDemo)}
                />
              </div>
              <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
                
                /* Permettre aux particules de déborder verticalement dans l'espace existant */
                .gooey-nav-container {
                  overflow: visible !important;
                }
                
                .gooey-nav-container .effect.filter {
                  overflow: visible !important;
                }
              `}</style>
            </div>
          </div>

          {/* Zone d'affichage avec contours arrondis */}
          <div className="mb-8 p-8 rounded-2xl shadow-lg" style={{ backgroundColor: '#000000' }}>
            <div className="w-full h-[600px] rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg relative flex items-center justify-center" style={{ backgroundColor: '#000000' }}>
              {buttonDemos.find(demo => demo.id === activeDemo)?.component}
            </div>
          </div>

          {/* Description */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4" style={{ color: colors.text.primary }}>
              {buttonDemos.find(demo => demo.id === activeDemo)?.name}
            </h3>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.text.muted }}>
              {buttonDemos.find(demo => demo.id === activeDemo)?.description}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
