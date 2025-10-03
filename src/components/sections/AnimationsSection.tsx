'use client';

import { colors } from '@/lib/colors';
import { useState } from 'react';

export default function AnimationsSection() {
  const [activeDemo, setActiveDemo] = useState('fade');

  const animationDemos = [
    {
      id: 'fade',
      name: 'Fade & Slide',
      description: 'Animations de fondu et glissement',
      component: (
        <div className="space-y-6">
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="w-20 h-20 bg-blue-500 rounded-lg animate-fade-in"></div>
            <div className="w-20 h-20 bg-green-500 rounded-lg animate-slide-in-left"></div>
            <div className="w-20 h-20 bg-purple-500 rounded-lg animate-slide-in-right"></div>
            <div className="w-20 h-20 bg-red-500 rounded-lg animate-slide-in-up"></div>
          </div>
          <div className="text-center">
            <p className="text-gray-600">Rechargez la page pour voir les animations</p>
          </div>
        </div>
      )
    },
    {
      id: 'hover',
      name: 'Effets de Survol',
      description: 'Animations au survol des éléments',
      component: (
        <div className="flex flex-wrap gap-6 justify-center">
          <div className="w-32 h-32 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-pointer flex items-center justify-center text-white font-bold">
            Scale + Rotate
          </div>
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 cursor-pointer flex items-center justify-center text-white font-bold">
            Shadow Glow
          </div>
          <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg hover:brightness-110 hover:contrast-110 transition-all duration-300 cursor-pointer flex items-center justify-center text-white font-bold">
            Brightness
          </div>
        </div>
      )
    },
    {
      id: 'loading',
      name: 'Animations de Chargement',
      description: 'Spinners et indicateurs de chargement',
      component: (
        <div className="flex flex-wrap gap-8 justify-center items-center">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
            <span className="text-sm text-gray-600">Spinner</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="flex space-x-1">
              <div className="w-2 h-8 bg-blue-600 rounded animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-8 bg-blue-600 rounded animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-8 bg-blue-600 rounded animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
            <span className="text-sm text-gray-600">Bars</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-purple-600 rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
              <div className="w-3 h-3 bg-purple-600 rounded-full animate-pulse" style={{ animationDelay: '200ms' }}></div>
              <div className="w-3 h-3 bg-purple-600 rounded-full animate-pulse" style={{ animationDelay: '400ms' }}></div>
            </div>
            <span className="text-sm text-gray-600">Dots</span>
          </div>
        </div>
      )
    },
    {
      id: 'transitions',
      name: 'Transitions Avancées',
      description: 'Transitions complexes et effets de page',
      component: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-orange-400 to-pink-500 p-6 rounded-lg text-white transform transition-all duration-500 hover:scale-105 hover:rotate-1">
              <h4 className="font-bold mb-2">Card 1</h4>
              <p>Effet de transformation complexe</p>
            </div>
            <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-6 rounded-lg text-white transform transition-all duration-500 hover:scale-105 hover:-rotate-1">
              <h4 className="font-bold mb-2">Card 2</h4>
              <p>Rotation inverse</p>
            </div>
          </div>
          <div className="text-center">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50">
              Bouton avec effet complet
            </div>
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
              Collection d'animations CSS et effets visuels
            </p>
          </div>

          {/* Navigation des démos */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {animationDemos.map((demo) => (
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
          <div className="mb-8 p-8 rounded-xl" style={{ backgroundColor: colors.background.card }}>
            {animationDemos.find(demo => demo.id === activeDemo)?.component}
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

          {/* Code d'exemple */}
          <div className="bg-gray-900 rounded-lg p-6">
            <h4 className="text-white font-semibold mb-4">Code d'exemple :</h4>
            <pre className="text-green-400 text-sm overflow-x-auto">
              <code>{`// Animation de survol
<div className="hover:scale-110 hover:rotate-3 transition-all duration-300">
  Contenu
</div>

// Animation de chargement
<div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>

// Animation personnalisée
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Styles CSS pour les animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out;
        }
        
        .animate-slide-in-up {
          animation: slideInUp 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}
