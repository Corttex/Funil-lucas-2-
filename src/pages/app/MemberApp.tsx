import { useState } from 'react';
import { BarChart3, Clock, UserCircle, Utensils } from 'lucide-react';
import { NutritionTab } from './NutritionTab';
import { ProfileTab } from './ProfileTab';
import { ProgressTab } from './ProgressTab';
import { TodayTab } from './TodayTab';

type Tab = 'today' | 'nutrition' | 'progress' | 'profile';

export function MemberApp() {
  const [tab, setTab] = useState<Tab>('today');

  const navItems: { id: Tab; label: string; icon: typeof Clock }[] = [
    { id: 'today', label: 'Hoje', icon: Clock },
    { id: 'nutrition', label: 'Nutrição', icon: Utensils },
    { id: 'progress', label: 'Progresso', icon: BarChart3 },
    { id: 'profile', label: 'Perfil', icon: UserCircle },
  ];

  return (
    <div className="bm-container">
      {tab === 'today' && <TodayTab />}
      {tab === 'nutrition' && <NutritionTab />}
      {tab === 'progress' && <ProgressTab />}
      {tab === 'profile' && <ProfileTab />}

      <nav className="fixed bottom-0 left-1/2 z-40 flex w-full max-w-[480px] -translate-x-1/2 justify-around border-t border-[#E2E8F0] bg-white py-2 shadow-lg">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = tab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setTab(item.id)}
              className={`flex flex-col items-center gap-0.5 text-[11px] font-bold ${
                active ? 'text-[#10B981]' : 'text-[#64748B]'
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
