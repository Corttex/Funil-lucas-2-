import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface RadioCardProps {
  label: string;
  desc?: string;
  selected: boolean;
  onClick: () => void;
  index?: number;
}

export function RadioOptionCard({ label, desc, selected, onClick, index = 0 }: RadioCardProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: Math.min(0.2, index * 0.035), ease: 'easeOut' }}
      whileHover={{ scale: 1.012, y: -1 }}
      whileTap={{ scale: 0.985 }}
      className={`flex w-full items-center justify-between gap-3 rounded-2xl border px-4 py-3.5 text-left transition-colors duration-150 ${
        selected
          ? 'border-[#2E1F19] bg-[#F5EFE8] ring-1 ring-[#2E1F19]'
          : 'border-[#EAE3DC] bg-white hover:border-[#C9BDB4]'
      }`}
    >
      <div className="min-w-0 flex-1">
        <span className="block text-sm font-semibold text-[#1F1510]">{label}</span>
        {desc && <span className="mt-0.5 block text-xs text-[#6B5E57]">{desc}</span>}
      </div>
      <motion.span
        animate={selected ? { scale: [0.8, 1.15, 1] } : { scale: 1 }}
        transition={{ duration: 0.2 }}
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors ${
          selected
            ? 'border-[#2E1F19] bg-[#2E1F19] text-white'
            : 'border-[#D5CCC3] bg-white'
        }`}
      >
        {selected && <Check size={12} strokeWidth={3} />}
      </motion.span>
    </motion.button>
  );
}

interface CheckboxCardProps {
  label: string;
  selected: boolean;
  onClick: () => void;
  thumb?: string;
  index?: number;
}

export function CheckboxOptionCard({ label, selected, onClick, thumb, index = 0 }: CheckboxCardProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: Math.min(0.2, index * 0.035), ease: 'easeOut' }}
      whileHover={{ scale: 1.012, y: -1 }}
      whileTap={{ scale: 0.985 }}
      className={`flex w-full items-center justify-between gap-3 rounded-2xl border px-4 py-3 text-left transition-colors duration-150 ${
        selected
          ? 'border-[#2E1F19] bg-[#F5EFE8] ring-1 ring-[#2E1F19]'
          : 'border-[#EAE3DC] bg-white hover:border-[#C9BDB4]'
      }`}
    >
      <span className="text-sm font-semibold text-[#1F1510]">{label}</span>
      {thumb ? (
        <div className="flex items-center gap-2.5">
          <img src={thumb} alt={label} className="h-11 w-11 rounded-xl object-cover" />
          <motion.span
            animate={selected ? { scale: [0.8, 1.15, 1] } : { scale: 1 }}
            transition={{ duration: 0.2 }}
            className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors ${
              selected
                ? 'border-[#2E1F19] bg-[#2E1F19] text-white'
                : 'border-[#D5CCC3] bg-white'
            }`}
          >
            {selected && <Check size={12} strokeWidth={3} />}
          </motion.span>
        </div>
      ) : (
        <motion.span
          animate={selected ? { scale: [0.8, 1.15, 1] } : { scale: 1 }}
          transition={{ duration: 0.2 }}
          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors ${
            selected
              ? 'border-[#2E1F19] bg-[#2E1F19] text-white'
              : 'border-[#D5CCC3] bg-white'
          }`}
        >
          {selected && <Check size={12} strokeWidth={3} />}
        </motion.span>
      )}
    </motion.button>
  );
}

export function toggleMultiOption(
  current: string[],
  value: string,
  noneValue: string,
): string[] {
  if (value === noneValue) {
    return current.includes(noneValue) ? [] : [noneValue];
  }
  const withoutNone = current.filter((v) => v !== noneValue);
  return withoutNone.includes(value)
    ? withoutNone.filter((v) => v !== value)
    : [...withoutNone, value];
}
