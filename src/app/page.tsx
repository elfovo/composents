import HomeSection from '@/components/sections/HomeSection';
import BackgroundsSection from '@/components/sections/BackgroundsSection';
import NavigationSection from '@/components/sections/NavigationSection';
import ButtonsSection from '@/components/sections/ButtonsSection';
import LayoutsSection from '@/components/sections/LayoutsSection';
import AnimationsSection from '@/components/sections/AnimationsSection';
import TextAnimationsSection from '@/components/sections/TextAnimationsSection';
import ThemeToggle from '@/components/ThemeToggle';

export default function HomePage() {
  return (
    <div className="scroll-smooth bg-black min-h-screen">
      {/* <ThemeToggle /> */}
      <HomeSection />
      <BackgroundsSection />
      <NavigationSection />
      <ButtonsSection />
      <LayoutsSection />
      <AnimationsSection />
      <TextAnimationsSection />
    </div>
  );
}