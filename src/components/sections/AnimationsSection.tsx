'use client';

import { CurvedLoop, AnimatedContent, FadeContent, ElectricBorder, MagnetLines, Magnet, Cubes, MetallicPaint, ShapeBlur, MetaBalls, CircularText, FuzzyText } from '@/components/animations';
import SectionWrapper from '@/components/SectionWrapper';
import { useState, useEffect } from 'react';

export default function AnimationsSection() {
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
      description: 'Animation de boucle courbe avec particules',
      component: (
        <div className="w-full h-full flex items-center justify-center">
          <CurvedLoop className="w-full h-full" />
        </div>
      )
    },
    {
      id: 'animatedcontent',
      name: 'AnimatedContent',
      description: 'Contenu animé avec effets de transition',
      component: (
        <div className="w-full h-full flex items-center justify-center">
          <AnimatedContent>
            <div className="text-white text-2xl font-bold">
              Contenu Animé
            </div>
          </AnimatedContent>
        </div>
      )
    },
    {
      id: 'fadecontent',
      name: 'FadeContent',
      description: 'Contenu avec effet de fondu',
      component: (
        <div className="w-full h-full flex items-center justify-center">
          <FadeContent>
            <div className="text-white text-2xl font-bold">
              Contenu avec Fade
            </div>
          </FadeContent>
        </div>
      )
    },
    {
      id: 'electricborder',
      name: 'ElectricBorder',
      description: 'Bordure électrique animée',
      component: (
        <div className="w-full h-full flex items-center justify-center">
          <ElectricBorder className="w-full h-full">
            <div className="text-white text-2xl font-bold p-8">
              Bordure Électrique
            </div>
          </ElectricBorder>
        </div>
      )
    },
    {
      id: 'magnetlines',
      name: 'MagnetLines',
      description: 'Lignes magnétiques interactives',
      component: (
        <div className="w-full h-full flex items-center justify-center">
          <MagnetLines />
        </div>
      )
    },
    {
      id: 'magnet',
      name: 'Magnet',
      description: 'Effet magnétique avec attraction',
      component: (
        <div className="w-full h-full flex items-center justify-center">
          <Magnet>
            <div className="text-white text-2xl font-bold">
              Effet Magnétique
            </div>
          </Magnet>
        </div>
      )
    },
    {
      id: 'cubes',
      name: 'Cubes',
      description: 'Cubes 3D animés',
      component: (
        <div className="w-full h-full flex items-center justify-center">
          <Cubes 
            cubeSize={20}
            cellGap={2}
          />
        </div>
      )
    },
    {
      id: 'metallicpaint',
      name: 'MetallicPaint',
      description: 'Effet de peinture métallique',
      component: (
        <div className="w-full h-full flex items-center justify-center">
          <MetallicPaint imageData={logoImageData} />
        </div>
      )
    },
    {
      id: 'shapeblur',
      name: 'ShapeBlur',
      description: 'Formes avec effet de flou',
      component: (
        <div className="w-full h-full flex items-center justify-center">
          <ShapeBlur />
        </div>
      )
    },
    {
      id: 'metaballs',
      name: 'MetaBalls',
      description: 'MetaBalls avec logo interactif',
      component: (
        <div className="w-full h-full flex items-center justify-center">
          {logoImageData ? (
            <MetaBalls 
              className="w-full h-full"
              color="#ffffff"
            />
          ) : (
            <div className="text-white">Chargement du logo...</div>
          )}
        </div>
      )
    },
    {
      id: 'circulartext',
      name: 'CircularText',
      description: 'Texte circulaire animé',
      component: (
        <div className="w-full h-full flex items-center justify-center">
          <CircularText text="MonDev Agency" />
        </div>
      )
    },
    {
      id: 'fuzzytext',
      name: 'FuzzyText',
      description: 'Texte avec effet flou',
      component: (
        <div className="w-full h-full flex items-center justify-center">
          <FuzzyText>
            MonDev Agency
          </FuzzyText>
        </div>
      )
    }
  ];

  return (
    <SectionWrapper
      id="animations"
      title="Animations"
      subtitle="Collection d'animations et effets visuels"
      demos={animationDemos}
      initialActiveDemo="curvedloop"
    />
  );
}