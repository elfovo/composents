'use client';

import BubbleMenu from '@/components/navigation/BubbleMenu.jsx';
import { getMenuConfig } from '@/config/menu';
import { useLanguage } from '@/contexts/LanguageContext';
import { colors } from '@/lib/colors';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { t } = useLanguage();
  const menuConfig = getMenuConfig(t);
  
  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.background.main }}>
      {/* BubbleMenu en position fixe */}
      <div className="fixed top-4 left-4 z-50">
        <BubbleMenu
          logo={menuConfig.logo}
          items={menuConfig.items}
          useFixedPosition={true}
          menuBg={menuConfig.menuBg}
          menuContentColor={menuConfig.menuContentColor}
          className="shadow-lg"
          onMenuClick={undefined}
          onItemClick={undefined}
          style={undefined}
        />
      </div>
      
      <main>
        {children}
      </main>
    </div>
  );
}
