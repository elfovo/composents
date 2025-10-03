'use client';

import { colors } from '@/lib/colors';
import LiquidEther from '@/components/LiquidEther';
import { useState } from 'react';

export default function BackgroundsSection() {
  const [activeDemo, setActiveDemo] = useState('liquid');

  const backgroundDemos = [
    {
      id: 'liquid',
      name: 'LiquidEther',
      description: 'Background liquide interactif avec WebGL',
      component: (
        <LiquidEther
          mouseForce={15}
          cursorSize={80}
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          autoDemo={true}
          autoSpeed={0.3}
          autoIntensity={1.8}
          resolution={0.4}
          style={{ width: '100%', height: '300px', borderRadius: '12px' }}
        />
      )
    },
    {
      id: 'gradient',
      name: 'Gradient Animé',
      description: 'Gradient CSS avec animation fluide',
      component: (
        <div 
          className="w-full h-72 rounded-xl relative overflow-hidden"
          style={{
            background: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
            animation: 'gradientShift 3s ease-in-out infinite alternate'
          }}
        >
          <style jsx>{`
            @keyframes gradientShift {
              0% { background: linear-gradient(45deg, #667eea 0%, #764ba2 100%); }
              50% { background: linear-gradient(45deg, #f093fb 0%, #f5576c 100%); }
              100% { background: linear-gradient(45deg, #4facfe 0%, #00f2fe 100%); }
            }
          `}</style>
        </div>
      )
    },
    {
      id: 'particles',
      name: 'Particules',
      description: 'Effet de particules flottantes',
      component: (
        <div className="w-full h-72 rounded-xl relative overflow-hidden bg-black">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
          <style jsx>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-20px) rotate(180deg); }
            }
          `}</style>
        </div>
      )
    },
    {
      id: 'geometric',
      name: 'Géométrique',
      description: 'Formes géométriques animées',
      component: (
        <div className="w-full h-72 rounded-xl relative overflow-hidden bg-gradient-to-br from-purple-900 to-blue-900">
          <div className="absolute inset-0">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute border-2 border-white opacity-30"
                style={{
                  width: `${60 + i * 20}px`,
                  height: `${60 + i * 20}px`,
                  left: `${20 + i * 15}%`,
                  top: `${20 + i * 10}%`,
                  borderRadius: i % 2 === 0 ? '50%' : '0%',
                  animation: `rotate ${4 + i}s linear infinite`,
                  animationDelay: `${i * 0.5}s`
                }}
              />
            ))}
          </div>
          <style jsx>{`
            @keyframes rotate {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}</style>
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

          {/* Navigation des démos */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {backgroundDemos.map((demo) => (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(demo.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeDemo === demo.id
                    ? 'text-white'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
                style={{
                  backgroundColor: activeDemo === demo.id ? colors.primary.blue : colors.background.card,
                  border: `1px solid ${colors.border.light}`
                }}
              >
                {demo.name}
              </button>
            ))}
          </div>

          {/* Démo active */}
          <div className="mb-8">
            {backgroundDemos.find(demo => demo.id === activeDemo)?.component}
          </div>

          {/* Description */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4" style={{ color: colors.text.primary }}>
              {backgroundDemos.find(demo => demo.id === activeDemo)?.name}
            </h3>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.text.muted }}>
              {backgroundDemos.find(demo => demo.id === activeDemo)?.description}
            </p>
          </div>

          {/* Code d'exemple */}
          <div className="mt-12 bg-gray-900 rounded-lg p-6">
            <h4 className="text-white font-semibold mb-4">Code d'exemple :</h4>
            <pre className="text-green-400 text-sm overflow-x-auto">
              <code>{`// Utilisation du composant LiquidEther
<LiquidEther
  mouseForce={15}
  cursorSize={80}
  colors={['#5227FF', '#FF9FFC', '#B19EEF']}
  autoDemo={true}
  autoSpeed={0.3}
  autoIntensity={1.8}
  resolution={0.4}
/>`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
