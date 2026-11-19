interface Props {
  value: 'metric' | 'imperial';
  onChange: (v: 'metric' | 'imperial') => void;
}

export function UnitToggle({ value, onChange }: Props) {
  const base = { flex: 1, padding: 10, borderRadius: 9999, fontWeight: 600 } as const;
  const on = { ...base, background: 'var(--color-accent)', color: '#fff' };
  const off = { ...base, background: '#fff', color: 'var(--color-text-primary)' };
  return (
    <div className="flex gap-1 rounded-full bg-white p-1">
      <button style={value === 'metric' ? on : off} onClick={() => onChange('metric')}>Métrico</button>
      <button style={value === 'imperial' ? on : off} onClick={() => onChange('imperial')}>Imperial</button>
    </div>
  );
}
