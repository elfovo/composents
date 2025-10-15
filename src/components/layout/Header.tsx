'use client';

import BubbleMenu from '../BubbleMenu.jsx';
import { getMenuConfig } from '@/config/menu';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const { t } = useLanguage();
  const menuConfig = getMenuConfig(t);
  
  return (
    <header className="w-full">
      <BubbleMenu
        logo={menuConfig.logo}
        items={menuConfig.items}
        useFixedPosition={menuConfig.useFixedPosition}
        menuBg={menuConfig.menuBg}
        menuContentColor={menuConfig.menuContentColor}
        className=""
        onMenuClick={undefined}
        onItemClick={undefined}
        style={undefined}
      />
    </header>
  );
}