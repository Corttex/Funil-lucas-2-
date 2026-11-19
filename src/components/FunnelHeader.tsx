interface Props {
  step: number;
  total?: number;
  onBack?: () => void;
}

export function FunnelHeader({ step, total = 46, onBack }: Props) {
  return (
    <header style={{ height: 64 }} className="flex flex-col justify-center gap-2">
      <div className="flex items-center justify-between text-sm">
        <button onClick={onBack} disabled={!onBack} style={{ opacity: onBack ? 1 : 0 }}>← Voltar</button>
        <strong style={{ fontFamily: 'var(--font-title)', fontSize: 18 }}>
          Best <span style={{ background: 'var(--color-accent)', color: '#fff', borderRadius: 6, padding: '0 6px' }}>Me</span> Fasting
        </strong>
        <span>{step}/{total}</span>
      </div>
      <div className="bm-progress"><div style={{ width: `${(step / total) * 100}%` }} /></div>
    </header>
  );
}
