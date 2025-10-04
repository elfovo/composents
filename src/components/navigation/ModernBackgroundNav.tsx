'use client';

import GooeyNav from './GooeyNav.jsx';
import { useEffect, useRef } from 'react';

interface BackgroundDemo {
  id: string;
  name: string;
  description: string;
  component: React.ReactNode;
}

interface ModernBackgroundNavProps {
  backgroundDemos: BackgroundDemo[];
  activeDemo: string;
  setActiveDemo: (id: string) => void;
}

export default function ModernBackgroundNav({ 
  backgroundDemos, 
  activeDemo, 
  setActiveDemo 
}: ModernBackgroundNavProps) {
  const navItems = backgroundDemos.map((demo: BackgroundDemo) => ({
    label: demo.name,
    href: '#'
  }));

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const links = containerRef.current.querySelectorAll('a');
    links.forEach((link: HTMLAnchorElement, index: number) => {
      link.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const selectedDemo = backgroundDemos[index];
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
  }, [backgroundDemos, setActiveDemo]);

  return (
    <div className="flex justify-center mb-12">
      <div className="relative" ref={containerRef}>
        <GooeyNav
          items={navItems}
          animationTime={600}
          particleCount={12}
          particleDistances={[80, 8]}
          particleR={80}
          timeVariance={200}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          initialActiveIndex={backgroundDemos.findIndex((demo: BackgroundDemo) => demo.id === activeDemo)}
        />
        <style jsx>{`
          :root {
            --color-1: #5239ff;
            --color-2: #ffffff;
            --color-3: #f8f9fa;
            --color-4: #e9ecef;
          }
          
          .gooey-nav-container {
            background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
            border-radius: 50px;
            padding: 8px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          }
          
          .gooey-nav-container nav ul {
            gap: 1.5em;
            padding: 0 0.5em;
          }
          
          .gooey-nav-container nav ul li a {
            padding: 0.8em 1.2em;
            font-weight: 600;
            font-size: 0.9rem;
            letter-spacing: 0.5px;
          }
        `}</style>
      </div>
    </div>
  );
}
