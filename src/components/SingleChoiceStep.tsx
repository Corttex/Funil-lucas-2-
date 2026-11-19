import { useEffect, useRef } from 'react';
import { OptionCard } from '../components/OptionCard';

export interface ChoiceOption<T extends string = string> {
  value: T;
  label: string;
  icon?: string;
}

interface Props<T extends string> {
  title: string;
  subtitle?: string;
  microCopy?: string;
  options: ChoiceOption<T>[];
  value: T | null | '';
  onSelect: (value: T) => void;
  onAdvance: () => void;
}

export function SingleChoiceStep<T extends string>({
  title,
  subtitle,
  microCopy,
  options,
  value,
  onSelect,
  onAdvance,
}: Props<T>) {
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  const handleClick = (optValue: T) => {
    onSelect(optValue);
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      onAdvance();
    }, 250);
  };

  return (
    <div className="mt-6 flex flex-col gap-4">
      {microCopy && <p className="text-center text-sm font-medium text-[#475569]">{microCopy}</p>}
      <h1 className="bm-title">{title}</h1>
      {subtitle && <p className="bm-subtitle">{subtitle}</p>}
      <div className="mt-2 flex flex-col gap-3">
        {options.map((opt) => (
          <OptionCard
            key={opt.value}
            selected={value === opt.value}
            onClick={() => handleClick(opt.value)}
          >
            <span className="flex items-center gap-3">
              {opt.icon && <span className="text-xl">{opt.icon}</span>}
              <span>{opt.label}</span>
            </span>
          </OptionCard>
        ))}
      </div>
    </div>
  );
}
