'use client';

import { colors } from '@/lib/colors';
import { ModernAnimationNav } from '@/components/navigation';
import { useState } from 'react';

export default function AnimationsSection() {
  const [activeDemo, setActiveDemo] = useState('fade');

  const animationDemos = [
    {
      id: 'fade',
      name: 'Fade & Slide',
      description: 'Animations de fondu et de glissement',
      component: (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Fade In</h3>
            <div className="w-full h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 animate-fade-in">
              <div className="flex items-center justify-center h-full text-white font-medium">
                Animation Fade In
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Slide Up</h3>
            <div className="w-full h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg transform translate-y-4 opacity-0 animate-slide-up">
              <div className="flex items-center justify-center h-full text-white font-medium">
                Animation Slide Up
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'hover',
      name: 'Effets de survol',
      description: 'Animations au survol des éléments',
      component: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Scale Hover</h3>
            <p className="text-gray-600">Survolez cette carte pour voir l'effet de zoom</p>
          </div>
          <div className="bg-gradient-to-br from-pink-500 to-rose-500 p-6 rounded-lg text-white hover:from-pink-600 hover:to-rose-600 transition-all duration-300 cursor-pointer">
            <h3 className="text-xl font-semibold mb-4">Gradient Hover</h3>
            <p className="opacity-90">Survolez pour changer le gradient</p>
          </div>
        </div>
      )
    },
    {
      id: 'spinners',
      name: 'Spinners',
      description: 'Indicateurs de chargement animés',
      component: (
        <div className="flex flex-wrap gap-8 justify-center items-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin mb-2"></div>
            <p className="text-sm text-gray-600">Spinner classique</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-gray-200 border-r-green-500 rounded-full animate-spin mb-2"></div>
            <p className="text-sm text-gray-600">Spinner vert</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-gray-200 border-b-purple-500 rounded-full animate-spin mb-2"></div>
            <p className="text-sm text-gray-600">Spinner violet</p>
          </div>
        </div>
      )
    },
    {
      id: 'transitions',
      name: 'Transitions avancées',
      description: 'Animations complexes et fluides',
      component: (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Bounce Effect</h3>
            <div className="w-16 h-16 bg-red-500 rounded-full animate-bounce mx-auto"></div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Pulse Effect</h3>
            <div className="w-16 h-16 bg-blue-500 rounded-full animate-pulse mx-auto"></div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Ping Effect</h3>
            <div className="w-16 h-16 bg-green-500 rounded-full animate-ping mx-auto"></div>
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
              Animations
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
