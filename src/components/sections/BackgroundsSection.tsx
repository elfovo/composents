'use client';

import { colors } from '@/lib/colors';
import { Aurora, DotGrid, Galaxy, LiquidEther, Orb, Squares, Threads } from '@/components/backgrounds';
import { GooeyNav } from '@/components/navigation';
import { useState } from 'react';

export default function BackgroundsSection() {
  const [activeDemo, setActiveDemo] = useState('liquid');

  const backgroundDemos = [
    {
      id: 'liquid',
      name: 'LiquidEther',
      description: 'Background liquide interactif avec WebGL',
      component: (
        <div className="w-full h-[600px] rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg">
          <LiquidEther
            mouseForce={15}
            cursorSize={80}
            colors={['#ffffff', '#f8f9fa', '#e9ecef']}
            autoDemo={true}
            autoSpeed={0.3}
            autoIntensity={1.8}
            resolution={0.4}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      )
    },
    {
      id: 'threads',
      name: 'Threads',
      description: 'Effet de fils animés avec WebGL',
      component: (
        <div className="w-full h-[600px] rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg">
          <Threads
            color={[1.0, 1.0, 1.0]}
            amplitude={1}
            distance={1.2}
            enableMouseInteraction={false}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      )
    },
    {
      id: 'orb',
      name: 'Orb',
      description: 'Sphère énergétique interactive avec WebGL',
      component: (
        <div className="w-full h-[600px] rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg">
          <Orb
            hue={0}
            hoverIntensity={0.3}
            rotateOnHover={true}
            forceHoverState={false}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      )
    },
    {
      id: 'dotgrid',
      name: 'DotGrid',
      description: 'Grille de points interactive avec animations',
      component: (
        <div className="w-full h-[600px] rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg">
          <DotGrid
            dotSize={2}
            gap={16}
            baseColor="#374151"
            activeColor="#ffffff"
            proximity={120}
            speedTrigger={80}
            shockRadius={250}
            shockStrength={16}
            maxSpeed={3000}
            resistance={750}
            returnDuration={1.5}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      )
    },
    {
      id: 'squares',
      name: 'Squares',
      description: 'Grille de carrés animée avec interaction souris',
      component: (
        <div className="w-full h-[600px] rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg">
          <Squares
            direction="diagonal"
            speed={0.1}
            borderColor="#0e041f"
            squareSize={22}
            hoverFillColor="#0e041f"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      )
    },
    {
      id: 'galaxy',
      name: 'Galaxy',
      description: 'Champ d\'étoiles animé avec interaction souris',
      component: (
        <div className="w-full h-[600px] rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg">
          <Galaxy
            focal={[0.5, 0.5]}
            rotation={[1.0, 0.0]}
            starSpeed={0.5}
            density={1.3}
            hueShift={140}
            disableAnimation={false}
            speed={1.0}
            mouseInteraction={true}
            glowIntensity={0.3}
            saturation={0.0}
            mouseRepulsion={false}
            repulsionStrength={2}
            twinkleIntensity={0.3}
            rotationSpeed={0.1}
            autoCenterRepulsion={0}
            transparent={true}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      )
    },
    {
      id: 'aurora',
      name: 'Aurora',
      description: 'Effet d\'aurore boréale avec WebGL et shaders',
      component: (
        <div className="w-full h-[600px] rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg">
          <Aurora
            colorStops={['#ffffff', '#f8f9fa', '#e9ecef']}
            amplitude={0.8}
            blend={0.6}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      )
    }
  ];

  return (
    <section id="backgrounds" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: colors.text.primary }}>
              Backgrounds
            </h2>
            <p className="text-xl" style={{ color: colors.text.muted }}>
              Collection de backgrounds interactifs et animés
            </p>
          </div>

          {/* Navigation moderne avec GooeyNav */}
          <div className="flex justify-center mb-12">
            <GooeyNav
              items={backgroundDemos.map(demo => ({
                label: demo.name,
                href: '#'
              }))}
              animationTime={600}
              particleCount={12}
              particleDistances={[80, 8]}
              particleR={80}
              timeVariance={200}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
              initialActiveIndex={backgroundDemos.findIndex(demo => demo.id === activeDemo)}
              onItemClick={(item, index) => {
                setActiveDemo(backgroundDemos[index].id);
              }}
            />
          </div>

          {/* Zone d'affichage avec contours arrondis */}
          <div className="mb-8 p-8 rounded-2xl shadow-lg">
            {backgroundDemos.find(demo => demo.id === activeDemo)?.component}
          </div>

          {/* Description */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4" style={{ color: colors.text.primary }}>
              {backgroundDemos.find(demo => demo.id === activeDemo)?.name}
            </h3>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.text.muted }}>
              {backgroundDemos.find(demo => demo.id === activeDemo)?.description}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
