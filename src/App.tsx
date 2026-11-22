import { useEffect, useState } from 'react';
import { Smartphone } from 'lucide-react';
import { LanguageSelector } from './components/LanguageSelector';
import { useI18n } from './i18n/I18nProvider';
import { LoginScreen } from './pages/app/LoginScreen';
import { MemberApp } from './pages/app/MemberApp';
import { FunnelFlow } from './pages/funnel/FunnelFlow';
import { HomePage } from './pages/home/HomePage';
import { useBestMeStore } from './store/useBestMeStore';

export function MobileOnlyBlocker({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-[#FDFBF7] text-[#1F1510] flex flex-col antialiased">
      {children}
    </div>
  );
}

export default function App() {
  const { viewMode, app } = useBestMeStore();
  const activeMode = viewMode || (app.isPaid ? 'app' : 'home');

  if (activeMode === 'home') {
    return <HomePage />;
  }

  if (activeMode === 'login') {
    return <LoginScreen />;
  }

  if (activeMode === 'app') {
    return (
      <MobileOnlyBlocker>
        <MemberApp />
      </MobileOnlyBlocker>
    );
  }

  return (
    <MobileOnlyBlocker>
      <FunnelFlow />
    </MobileOnlyBlocker>
  );
}
