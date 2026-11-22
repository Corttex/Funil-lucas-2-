import { motion } from 'framer-motion';

interface Props {
  currentKg: number;
  targetKg: number;
  targetDateLabel: string;
  eventLabel?: string;
  goalLabel?: string;
}

export function WeightCurveChart({
  currentKg,
  targetKg,
  targetDateLabel,
  eventLabel,
  goalLabel = 'Objetivo',
}: Props) {
  const isGain = targetKg >= currentKg;
  const minVal = Math.min(currentKg, targetKg);
  const maxVal = Math.max(currentKg, targetKg);
  const midVal = Math.round((currentKg + targetKg) / 2);

  // Y coordinates: higher weight = lower Y on SVG
  const yStart = isGain ? 116 : 36;
  const yMid = 76;
  const yEnd = isGain ? 36 : 116;

  const yTicks = [
    maxVal,
    Math.round(minVal + (maxVal - minVal) * 0.65),
    Math.round(minVal + (maxVal - minVal) * 0.35),
    minVal,
  ];

  const pathD = isGain
    ? `M 38 ${yStart} C 100 ${yStart - 22}, 130 ${yMid + 8}, 168 ${yMid} C 210 ${yMid - 10}, 235 ${yEnd}, 292 ${yEnd}`
    : `M 38 ${yStart} C 100 ${yStart + 22}, 130 ${yMid - 8}, 168 ${yMid} C 210 ${yMid + 10}, 235 ${yEnd}, 292 ${yEnd}`;

  const areaD = `${pathD} L 292 132 L 38 132 Z`;

  return (
    <div className="rounded-2xl border border-[#EAE3DC] bg-[#F5EFE8]/70 p-4 shadow-sm">
      <svg viewBox="0 0 320 154" className="w-full overflow-visible">
        <defs>
          <linearGradient id="bmCurveStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#EF7B45" />
            <stop offset="45%" stopColor="#EAB308" />
            <stop offset="100%" stopColor="#4ADE80" />
          </linearGradient>
          <linearGradient id="bmCurveFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#86EFAC" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#F5EFE8" stopOpacity="0.03" />
          </linearGradient>
        </defs>

        {/* Horizontal grid lines */}
        {[34, 62, 90, 118].map((y, idx) => (
          <g key={y}>
            <line x1="34" y1={y} x2="302" y2={y} stroke="#E4DDD5" strokeWidth="1" />
            <text x="28" y={y + 3} textAnchor="end" fill="#8C7E77" fontSize="9" fontWeight="600">
              {yTicks[idx]}
            </text>
          </g>
        ))}

        {/* Shaded Area fill */}
        <motion.path
          d={areaD}
          fill="url(#bmCurveFill)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        {/* Animated Stroke Line */}
        <motion.path
          d={pathD}
          fill="none"
          stroke="url(#bmCurveStroke)"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
        />

        {/* Initial weight point */}
        <motion.circle
          cx="38"
          cy={yStart}
          r="4.5"
          fill="#FFFFFF"
          stroke="#EF7B45"
          strokeWidth="2.5"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Event milestone */}
        {eventLabel && (
          <motion.g
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.4 }}
          >
            <line
              x1="168"
              y1="22"
              x2="168"
              y2="132"
              stroke="#6B5E57"
              strokeDasharray="3 3"
              strokeWidth="1"
            />
            <rect x="116" y="4" width="104" height="20" rx="10" fill="#FFFFFF" stroke="#EAE3DC" />
            <text x="168" y="17" textAnchor="middle" fill="#1F1510" fontSize="9.5" fontWeight="700">
              {eventLabel} - {midVal} kg
            </text>
            <circle cx="168" cy={yMid} r="5.5" fill="#FFFFFF" stroke="#84CC16" strokeWidth="2.5" />
          </motion.g>
        )}

        {/* Final target node */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.0, type: 'spring', stiffness: 300, damping: 20 }}
          style={{ originX: '292px', originY: `${yEnd}px` }}
        >
          <circle cx="292" cy={yEnd} r="6" fill="#FFFFFF" stroke="#22C55E" strokeWidth="2.5" />
          <rect
            x="242"
            y={yEnd + (isGain ? 12 : -32)}
            width="58"
            height="24"
            rx="8"
            fill="#2E1F19"
          />
          <text
            x="271"
            y={yEnd + (isGain ? 27 : -17)}
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="9"
            fontWeight="700"
          >
            {goalLabel}: {targetKg} kg
          </text>
        </motion.g>

        <text x="296" y="148" textAnchor="end" fill="#6B5E57" fontSize="10" fontWeight="600">
          {targetDateLabel}
        </text>
      </svg>
    </div>
  );
}
