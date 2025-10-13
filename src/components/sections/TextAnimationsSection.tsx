'use client';

import { colors } from '@/lib/colors';
import { SplitText, BlurText, TextType, ShinyText, CountUp } from '@/components/text-animations';
import GooeyNav from '@/components/navigation/GooeyNav.jsx';
import { useState, useEffect, useRef } from 'react';

export default function TextAnimationsSection() {
  const [activeDemo, setActiveDemo] = useState('splittext');
  const [shouldCenter, setShouldCenter] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const textAnimationDemos = [
    {
      id: 'splittext',
      name: 'SplitText',
      description: 'Animation de texte avec GSAP SplitText et ScrollTrigger',
      component: (
        <div className="bg-black w-full h-full flex items-center justify-center p-8">
          <div className="w-full h-full flex items-center justify-center">
            <SplitText
              text="Hello, you !"
              tag="h1"
              className="text-white text-4xl font-bold"
              splitType="chars"
              delay={70}
              duration={2}
              ease="elastic.out(1, 0.3)"
              from={{ opacity: 0, y: 50 } as any}
              to={{ opacity: 1, y: 0 } as any}
              threshold={0.1}
              onLetterAnimationComplete={() => {}}
            />
          </div>
        </div>
      )
    },
    {
      id: 'blurtext',
      name: 'BlurText',
      description: 'Animation de texte avec effet de flou progressif',
      component: (
        <div className="bg-black w-full h-full flex items-center justify-center p-8">
          <div className="w-full h-full flex items-center justify-center">
            <BlurText
              text="Blur Text Animation"
              className="text-white text-4xl font-bold"
              animateBy="words"
              direction="top"
              delay={200}
              threshold={0.1}
              stepDuration={0.35}
              animationFrom={undefined}
              animationTo={undefined}
              onAnimationComplete={undefined}
            />
          </div>
        </div>
      )
    },
    {
      id: 'texttype',
      name: 'TextType',
      description: 'Animation de frappe avec curseur clignotant',
      component: (
        <div className="bg-black w-full h-full flex items-center justify-center p-8">
          <div className="w-full h-full flex items-center justify-center">
            <TextType
              text={["Hello, you !", "Welcome to TextType", "Animation de frappe"]}
              as="h1"
              className="text-white text-4xl font-bold"
              typingSpeed={100}
              deletingSpeed={50}
              pauseDuration={2000}
              showCursor={true}
              cursorCharacter="|"
              cursorBlinkDuration={0.5}
              loop={true}
              variableSpeed={undefined}
              onSentenceComplete={undefined}
            />
          </div>
        </div>
      )
    },
    {
      id: 'shinytext',
      name: 'ShinyText',
      description: 'Texte avec effet de brillance animé',
      component: (
        <div className="bg-black w-full h-full flex items-center justify-center p-8">
          <div className="w-full h-full flex items-center justify-center">
            <ShinyText
              text="Shiny Text Animation"
              speed={3}
              className="text-white text-4xl font-bold"
              disabled={false}
            />
          </div>
        </div>
      )
    },
    {
      id: 'countup',
      name: 'CountUp',
      description: 'Animation de compteur numérique avec effet de ressort',
      component: (
        <div className="bg-black w-full h-full flex items-center justify-center p-8">
          <div className="w-full h-full flex flex-col items-center justify-center gap-8">
            <CountUp
              to={1000}
              from={0}
              duration={2}
              className="text-white text-6xl font-bold"
              separator=","
              onStart={undefined}
              onEnd={undefined}
            />
            <CountUp
              to={99.9}
              from={0}
              duration={3}
              className="text-white text-4xl font-bold"
              delay={0.5}
              onStart={undefined}
              onEnd={undefined}
            />
            <CountUp
              to={1000000}
              from={0}
              duration={4}
              className="text-white text-3xl font-bold"
              delay={1}
              separator=" "
              onStart={undefined}
              onEnd={undefined}
            />
          </div>
        </div>
      )
    }
  ];

  const navItems = textAnimationDemos.map((demo) => ({
    label: demo.name,
    href: '#'
  }));

  useEffect(() => {
    if (!containerRef.current) return;

    const links = containerRef.current.querySelectorAll('a');
    links.forEach((link: HTMLAnchorElement, index: number) => {
      link.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const selectedDemo = textAnimationDemos[index];
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
  }, [textAnimationDemos, setActiveDemo]);

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
    <section id="text-animations" className="min-h-screen py-20" style={{ backgroundColor: colors.background.main }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-0">
            <h2 className="text-4xl font-bold mb-4" style={{ color: colors.text.primary }}>
              Animations de Texte
            </h2>
            <p className="text-xl" style={{ color: colors.text.muted }}>
              Collection d'animations et effets pour le texte
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
                  initialActiveIndex={textAnimationDemos.findIndex((demo) => demo.id === activeDemo)}
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
              {textAnimationDemos.find(demo => demo.id === activeDemo)?.component}
            </div>
          </div>

          {/* Description */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4" style={{ color: colors.text.primary }}>
              {textAnimationDemos.find(demo => demo.id === activeDemo)?.name}
            </h3>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.text.muted }}>
              {textAnimationDemos.find(demo => demo.id === activeDemo)?.description}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
