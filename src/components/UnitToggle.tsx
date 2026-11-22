interface Props {
  value: 'metric' | 'imperial';
  onChange: (v: 'metric' | 'imperial') => void;
  metricLabel?: string;
  imperialLabel?: string;
}

export function UnitToggle({
  value,
  onChange,
  metricLabel = 'cm',
  imperialLabel = 'ft',
}: Props) {
  return (
    <div className="mx-auto inline-flex rounded-full bg-[#F5EFE8] p-1">
      <button
        type="button"
        onClick={() => onChange('imperial')}
        className={`rounded-full px-4 py-1 text-xs font-bold transition ${
          value === 'imperial'
            ? 'bg-white text-[#1F1510] shadow-sm'
            : 'text-[#6B5E57] hover:text-[#1F1510]'
        }`}
      >
        {imperialLabel}
      </button>
      <button
        type="button"
        onClick={() => onChange('metric')}
        className={`rounded-full px-4 py-1 text-xs font-bold transition ${
          value === 'metric'
            ? 'bg-white text-[#1F1510] shadow-sm'
            : 'text-[#6B5E57] hover:text-[#1F1510]'
        }`}
      >
        {metricLabel}
      </button>
    </div>
  );
}
