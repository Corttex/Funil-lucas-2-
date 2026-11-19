import { User } from 'lucide-react';

interface Props {
  step: number;
  total?: number;
  onBack?: () => void;
  onOpenLogin?: () => void;
}

export function FunnelHeader({ step, total = 46, onBack, onOpenLogin }: Props) {
  return (
    <header style={{ height: 68 }} className="flex flex-col justify-center gap-2">
      <div className="flex items-center justify-between text-sm">
        <button
          onClick={onBack}
          disabled={!onBack}
          style={{ opacity: onBack ? 1 : 0 }}
          className="font-semibold text-[#0E3A47]"
        >
          ← Voltar
        </button>
        <strong style={{ fontFamily: 'var(--font-title)', fontSize: 18 }}>
          Best{' '}
          <span
            style={{
              background: 'var(--color-accent)',
              color: '#fff',
              borderRadius: 6,
              padding: '0 6px',
            }}
          >
            Me
          </span>{' '}
          Fasting
        </strong>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-[#475569]">
            {step}/{total}
          </span>
          {onOpenLogin && (
            <button
              title="Login & Baixar App"
              onClick={onOpenLogin}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0E3A47] shadow-sm"
            >
              <User size={16} />
            </button>
          )}
        </div>
      </div>
      <div className="bm-progress">
        <div style={{ width: `${(step / total) * 100}%` }} />
      </div>
    </header>
  );
}
