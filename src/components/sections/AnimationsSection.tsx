'use client';

import { colors } from '@/lib/colors';
import { CurvedLoop } from '@/components/animations';
import { ModernAnimationNav } from '@/components/navigation';
import { useState } from 'react';

export default function AnimationsSection() {
  const [activeDemo, setActiveDemo] = useState('curvedloop');

  const animationDemos = [
    {
      id: 'curvedloop',
      name: 'Curved Loop',
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
    }
  ];

  return (
    <section id="animations" className="min-h-screen py-20" style={{ backgroundColor: colors.background.main }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: colors.text.primary }}>
              Animations & Effets
            </h2>
            <p className="text-xl" style={{ color: colors.text.muted }}>
              Effets d'animation et transitions fluides
            </p>
          </div>

          {/* Navigation moderne avec GooeyNav */}
          <ModernAnimationNav 
            animationDemos={animationDemos}
            activeDemo={activeDemo}
            setActiveDemo={setActiveDemo}
          />

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
