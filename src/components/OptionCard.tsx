import type { ReactNode } from 'react';

interface Props {
  selected?: boolean;
  multi?: boolean;
  onClick: () => void;
  children: ReactNode;
}

export function OptionCard({ selected, multi, onClick, children }: Props) {
  return (
    <button onClick={onClick} className={`bm-card flex w-full items-center gap-3 text-left ${selected ? 'selected' : ''}`}>
      {multi && (
        <span style={{ width: 22, height: 22, borderRadius: 6, border: '2px solid var(--color-accent)', background: selected ? 'var(--color-accent)' : '#fff', color: '#fff', textAlign: 'center', lineHeight: '18px' }}>
          {selected ? '✓' : ''}
        </span>
      )}
      <span>{children}</span>
    </button>
  );
}
