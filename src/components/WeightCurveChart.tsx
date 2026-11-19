interface Props {
  currentKg: number;
  targetKg: number;
  targetDateLabel: string;
}

export function WeightCurveChart({ currentKg, targetKg, targetDateLabel }: Props) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <svg viewBox="0 0 320 150" className="w-full overflow-visible">
        <defs>
          <linearGradient id="curveFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <line x1="24" y1="28" x2="296" y2="28" stroke="#E2E8F0" strokeDasharray="4 4" />
        <line x1="24" y1="74" x2="296" y2="74" stroke="#E2E8F0" strokeDasharray="4 4" />
        <line x1="24" y1="120" x2="296" y2="120" stroke="#E2E8F0" strokeDasharray="4 4" />
        <path
          d="M 36 32 C 110 34, 180 96, 284 114 L 284 130 L 36 130 Z"
          fill="url(#curveFill)"
        />
        <path
          d="M 36 32 C 110 34, 180 96, 284 114"
          fill="none"
          stroke="#10B981"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="36" cy="32" r="6" fill="#0E3A47" stroke="#fff" strokeWidth="2.5" />
        <circle cx="284" cy="114" r="7" fill="#10B981" stroke="#fff" strokeWidth="2.5" />
        <rect x="12" y="4" width="100" height="22" rx="11" fill="#0E3A47" />
        <text x="62" y="19" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700">
          Hoje ({currentKg.toFixed(1)} kg)
        </text>
        <rect x="192" y="84" width="118" height="22" rx="11" fill="#10B981" />
        <text x="251" y="99" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700">
          Meta ({targetKg.toFixed(1)} kg)
        </text>
        <text x="284" y="142" textAnchor="end" fill="#475569" fontSize="11" fontWeight="600">
          {targetDateLabel}
        </text>
      </svg>
    </div>
  );
}
