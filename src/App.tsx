import { useEffect, useState } from 'react';
import { Smartphone } from 'lucide-react';
import { MemberApp } from './pages/app/MemberApp';
import { FunnelFlow } from './pages/funnel/FunnelFlow';
import { useBestMeStore } from './store/useBestMeStore';

function checkIsMobile(): boolean {
  if (typeof window === 'undefined') return true;

  // 1. Verificação por User-Agent
  const ua = navigator.userAgent || navigator.vendor || (window as unknown as { opera?: string }).opera || '';
  const isMobileUA = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i.test(ua);

  // 2. Verificação de largura de tela (tablets/smartphones tipicamente <= 768px)
  const isSmallScreen = window.innerWidth <= 768;

  // 3. Verificação de suporte a toque (evita false positives em desktop, mas permite emuladores devtools)
  const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  // Se tiver UA mobile OU for tela pequena com suporte a toque
  return isMobileUA || (isSmallScreen && hasTouch) || isSmallScreen;
}

export function MobileOnlyBlocker({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState<boolean>(true);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const update = () => setIsMobile(checkIsMobile());
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  if (!mounted) return null;

  if (!isMobile) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#0E3A47] p-6 text-center text-white">
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 text-[#10B981] shadow-inner backdrop-blur-sm">
          <Smartphone size={44} />
        </div>
        <h1 className="mt-6 font-['Plus_Jakarta_Sans'] text-2xl font-extrabold tracking-tight">
          Acesso Exclusivo via Celular
        </h1>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-300">
          Esta avaliação personalizada de jejum intermitente foi otimizada para ser realizada diretamente no seu smartphone.
        </p>
        <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-4 text-xs text-slate-300">
          <p className="font-semibold text-white">📱 Como acessar agora:</p>
          <p className="mt-1">Abra este link diretamente no navegador do seu celular ou ative o <strong>Modo Mobile</strong> (F12 → Dispositivos Móveis) no navegador.</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

export default function App() {
  const isPaid = useBestMeStore((s) => s.app.isPaid);

  return (
    <MobileOnlyBlocker>
      {isPaid ? <MemberApp /> : <FunnelFlow />}
    </MobileOnlyBlocker>
  );
}
