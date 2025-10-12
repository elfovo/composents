'use client';

import { colors } from '@/lib/colors';
import { CurvedLoop, AnimatedContent, FadeContent, ElectricBorder, MagnetLines, Magnet, Cubes, MetallicPaint, ShapeBlur, MetaBalls } from '@/components/animations';
import GooeyNav from '@/components/navigation/GooeyNav.jsx';
import { useState, useEffect, useRef } from 'react';

export default function AnimationsSection() {
  const [activeDemo, setActiveDemo] = useState('curvedloop');
  const [shouldCenter, setShouldCenter] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Fonction pour charger le logo SVG et le convertir en données d'image
  const [logoImageData, setLogoImageData] = useState<ImageData | null>(null);

  useEffect(() => {
    const loadLogoImage = async () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = 500;
      canvas.height = 500;
      
      // Fond blanc
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, 500, 500);
      
      // Charger le logo SVG
      const img = new Image();
      img.crossOrigin = 'anonymous';
      
      img.onload = () => {
        // Dessiner le logo au centre du canvas
        const logoSize = 300;
        const x = (500 - logoSize) / 2;
        const y = (500 - logoSize) / 2;
        
        ctx.drawImage(img, x, y, logoSize, logoSize);
        setLogoImageData(ctx.getImageData(0, 0, 500, 500));
      };
      
      img.onerror = () => {
        console.error('Erreur lors du chargement du logo');
        // Fallback vers une forme simple
        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.arc(250, 250, 150, 0, 2 * Math.PI);
        ctx.fill();
        setLogoImageData(ctx.getImageData(0, 0, 500, 500));
      };
      
      img.src = '/logo.svg';
    };

    loadLogoImage();
  }, []);

  const animationDemos = [
    {
      id: 'curvedloop',
      name: 'CurvedLoop',
      description: 'Texte défilant avec courbe',
      component: (
        <div className="bg-black w-full h-full flex items-center justify-center">
          <div className="w-full h-full">
            <CurvedLoop
              marqueeText="Be ✦ Creative ✦ With ✦ React ✦ Bits ✦"
              speed={2}
              curveAmount={0}
              interactive={true}
              className="text-white"
            />
          </div>
        </div>
      )
    },
    {
      id: 'animatedcontent',
      name: 'AnimatedContent',
      description: 'Composant avec animations GSAP au scroll',
      component: (
        <div className="bg-black w-full h-full flex items-center justify-center p-8">
          <div className="space-y-8">
            <AnimatedContent distance={50} direction="vertical" duration={1}>
              <div className="text-white text-2xl font-bold text-center">
                Animation 1
              </div>
            </AnimatedContent>
            <AnimatedContent distance={50} direction="horizontal" reverse={true} duration={1} delay={0.2}>
              <div className="text-white text-xl text-center">
                Animation 2
              </div>
            </AnimatedContent>
            <AnimatedContent distance={30} direction="vertical" duration={1.2} delay={0.4} scale={0.8}>
              <div className="text-white text-lg text-center">
                Animation 3
              </div>
            </AnimatedContent>
          </div>
        </div>
      )
    },
    {
      id: 'fadecontent',
      name: 'FadeContent',
      description: 'Composant avec effet de fondu au scroll',
      component: (
        <div className="bg-black w-full h-full flex items-center justify-center p-8">
          <div className="space-y-8 w-full">
            <FadeContent duration={800} delay={0}>
              <div className="text-white text-2xl font-bold text-center">
                Fade In 1
              </div>
            </FadeContent>
            <FadeContent duration={1000} delay={200} blur={true}>
              <div className="text-white text-xl text-center">
                Fade In avec Blur
              </div>
            </FadeContent>
            <FadeContent duration={1200} delay={400} initialOpacity={0.3}>
              <div className="text-white text-lg text-center">
                Fade In Lent
              </div>
            </FadeContent>
            <FadeContent duration={600} delay={600} easing="ease-in-out">
              <div className="text-white text-base text-center">
                Fade In Rapide
              </div>
            </FadeContent>
          </div>
        </div>
      )
    },
    {
      id: 'electricborder',
      name: 'ElectricBorder',
      description: 'Bordure électrique animée avec effet turbulent',
      component: (
        <div className="bg-black w-full h-full flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <ElectricBorder 
              color="#7DF9FF" 
              speed={1} 
              chaos={0.5} 
              thickness={2}
              className="p-6 rounded-xl"
              style={{ borderRadius: '12px' }}
            >
              <div className="text-white text-center">
                <h3 className="text-xl font-bold mb-2">Electric Border</h3>
                <p className="text-sm opacity-80">
                  Bordure électrique avec effet turbulent animé
                </p>
              </div>
            </ElectricBorder>
          </div>
        </div>
      )
    },
    {
      id: 'magnetlines',
      name: 'MagnetLines',
      description: 'Lignes magnétiques qui suivent le curseur',
      component: (
        <div className="bg-black w-full h-full flex items-center justify-center p-8">
          <div className="w-full h-full flex items-center justify-center">
            <MagnetLines 
              rows={9}
              columns={9}
              containerSize="60vmin"
              lineColor="#ffffff"
              lineWidth="0.5vmin"
              lineHeight="6vmin"
              baseAngle={-10}
              className="rounded-xl"
            />
          </div>
        </div>
      )
    },
    {
      id: 'magnet',
      name: 'Magnet',
      description: 'Effet magnétique sur les éléments',
      component: (
        <div className="bg-black w-full h-full flex items-center justify-center p-8">
          <div className="w-full h-full flex items-center justify-center">
            <Magnet 
              padding={100}
              magnetStrength={2}
              activeTransition="transform 0.3s ease-out"
              inactiveTransition="transform 0.5s ease-in-out"
            >
              <div className="bg-white text-black px-8 py-4 rounded-xl font-medium text-lg">
                Magnet Button
              </div>
            </Magnet>
          </div>
        </div>
      )
    },
    {
      id: 'cubes',
      name: 'Cubes',
      description: 'Grille de cubes 3D interactifs',
      component: (
        <div className="bg-black w-full h-full flex items-center justify-center p-8">
          <div className="w-full h-full flex items-center justify-center">
            <Cubes 
              gridSize={8}
              cubeSize={null}
              maxAngle={30}
              radius={2}
              easing="power3.out"
              duration={{ enter: 0.3, leave: 0.6 }}
              cellGap="3%"
              borderStyle="1px dashed #ffffff"
              faceColor="#060010"
              shadow={true}
              autoAnimate={true}
              rippleOnClick={true}
              rippleColor="#7DF9FF"
              rippleSpeed={2}
            />
          </div>
        </div>
      )
    },
    {
      id: 'metallicpaint',
      name: 'MetallicPaint',
      description: 'Effet de peinture métallique liquide',
      component: (
        <div className="bg-black w-full h-full flex items-center justify-center p-8">
          <div className="w-full h-full flex items-center justify-center">
            {logoImageData ? (
              <MetallicPaint 
                imageData={logoImageData}
                params={{
                  patternScale: 2,
                  refraction: 0.015,
                  edge: 1,
                  patternBlur: 0.005,
                  liquid: 0.07,
                  speed: 0.3
                }}
              />
            ) : (
              <div className="text-white text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                <p>Chargement du logo...</p>
              </div>
            )}
          </div>
        </div>
      )
    },
    {
      id: 'shapeblur',
      name: 'ShapeBlur',
      description: 'Formes géométriques avec effet de flou interactif',
      component: (
        <div className="bg-black w-full h-full flex items-center justify-center p-8">
          <div className="w-full h-full flex items-center justify-center">
            <ShapeBlur 
              variation={0}
              pixelRatioProp={2}
              shapeSize={1}
              roundness={0.4}
              borderSize={0.05}
              circleSize={0.3}
              circleEdge={0.5}
            />
          </div>
        </div>
      )
    },
    {
      id: 'metaballs',
      name: 'MetaBalls',
      description: 'Sphères métalliques liquides interactives',
      component: (
        <div className="bg-black w-full h-full flex items-center justify-center p-8">
          <div className="w-full h-full flex items-center justify-center">
            <MetaBalls 
              color="#ffffff"
              speed={0.3}
              enableMouseInteraction={false}
              hoverSmoothness={0.05}
              animationSize={30}
              ballCount={15}
              clumpFactor={1}
              cursorBallSize={3}
              cursorBallColor="#ffffff"
              enableTransparency={true}
            />
          </div>
        </div>
      )
    }
  ];

  const navItems = animationDemos.map((demo) => ({
    label: demo.name,
    href: '#'
  }));

  useEffect(() => {
    if (!containerRef.current) return;

    const links = containerRef.current.querySelectorAll('a');
    links.forEach((link: HTMLAnchorElement, index: number) => {
      link.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const selectedDemo = animationDemos[index];
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
  }, [animationDemos, setActiveDemo]);

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
    <section id="animations" className="min-h-screen py-20" style={{ backgroundColor: colors.background.main }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-0">
            <h2 className="text-4xl font-bold mb-4" style={{ color: colors.text.primary }}>
              Animations & Effets
            </h2>
            <p className="text-xl" style={{ color: colors.text.muted }}>
              Effets d'animation et transitions fluides
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
                  initialActiveIndex={animationDemos.findIndex((demo) => demo.id === activeDemo)}
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
              {animationDemos.find(demo => demo.id === activeDemo)?.component}
            </div>
          </div>

          {/* Description */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4" style={{ color: colors.text.primary }}>
              {animationDemos.find(demo => demo.id === activeDemo)?.name}
            </h3>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.text.muted }}>
              {animationDemos.find(demo => demo.id === activeDemo)?.description}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
