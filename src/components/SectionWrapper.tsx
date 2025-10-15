'use client';

import { colors } from '@/lib/colors';
import GooeyNav from '@/components/navigation/GooeyNav.jsx';
import { useTheme } from '@/contexts/ThemeContext';
import { useState, useEffect, useRef, ReactNode } from 'react';

interface DemoItem {
  id: string;
  name: string;
  description: string;
  component: ReactNode;
}

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle: string;
  demos: DemoItem[];
  initialActiveDemo?: string;
}

export default function SectionWrapper({ 
  id, 
  title, 
  subtitle, 
  demos, 
  initialActiveDemo 
}: SectionWrapperProps) {
  const { theme } = useTheme();
  const [activeDemo, setActiveDemo] = useState(initialActiveDemo || demos[0]?.id || '');
  const [shouldCenter, setShouldCenter] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Couleurs adaptées au thème
  const themeColors = {
    background: theme === 'light' ? '#ffffff' : colors.background.main,
    textPrimary: theme === 'light' ? '#000000' : colors.text.primary,
    textMuted: theme === 'light' ? '#666666' : colors.text.muted,
    demoBackground: theme === 'light' ? '#f8f9fa' : '#000000',
    border: theme === 'light' ? '#e5e5e5' : '#333333'
  };

  const navItems = demos.map((demo) => ({
    label: demo.name,
    href: '#'
  }));

  useEffect(() => {
    if (!containerRef.current) return;

    const links = containerRef.current.querySelectorAll('a');
    links.forEach((link: HTMLAnchorElement, index: number) => {
      link.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const selectedDemo = demos[index];
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
  }, [demos, setActiveDemo]);

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

  const currentDemo = demos.find(demo => demo.id === activeDemo);

  return (
    <section id={id} className="min-h-screen py-20" style={{ backgroundColor: themeColors.background }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Titre et sous-titre */}
          <div className="text-center mb-0">
            <h2 className="text-4xl font-bold mb-4" style={{ color: themeColors.textPrimary }}>
              {title}
            </h2>
            <p className="text-xl" style={{ color: themeColors.textMuted }}>
              {subtitle}
            </p>
          </div>

          {/* Navigation moderne avec GooeyNav */}
          <div className="relative" style={{ margin: 0, padding: 0, marginBottom: 0 }}>
            <div 
              className={`w-full overflow-x-auto overflow-y-hidden scrollbar-hide ${shouldCenter ? 'flex justify-center' : ''}`}
              ref={containerRef}
              style={{ 
                scrollbarWidth: 'thin',
                scrollbarColor: 'rgba(0, 0, 0, 0.2) transparent',
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
                  initialActiveIndex={demos.findIndex((demo) => demo.id === activeDemo)}
                />
              </div>
              <style jsx>{`
                /* Scrollbar stylisée mais visible pour permettre le scroll avec la souris */
                .scrollbar-hide::-webkit-scrollbar {
                  height: 8px;
                }
                
                .scrollbar-hide::-webkit-scrollbar-track {
                  background: transparent;
                }
                
                .scrollbar-hide::-webkit-scrollbar-thumb {
                  background: rgba(0, 0, 0, 0.2);
                  border-radius: 4px;
                }
                
                .scrollbar-hide::-webkit-scrollbar-thumb:hover {
                  background: rgba(0, 0, 0, 0.4);
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
          <div className="mb-0 p-8 rounded-2xl shadow-lg" style={{ backgroundColor: themeColors.demoBackground }}>
            <div 
              className="w-full h-[600px] rounded-2xl overflow-hidden border-2 shadow-lg relative flex items-center justify-center" 
              style={{ 
                backgroundColor: themeColors.demoBackground,
                borderColor: themeColors.border
              }}
            >
              {currentDemo?.component}
            </div>
          </div>

          {/* Description */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4" style={{ color: themeColors.textPrimary }}>
              {currentDemo?.name}
            </h3>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: themeColors.textMuted }}>
              {currentDemo?.description}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}