import { Globe } from 'lucide-react';
import { LOCALE_CONFIG, SUPPORTED_LOCALES } from '../i18n/config';
import { useI18n } from '../i18n/I18nProvider';

interface Props {
  compact?: boolean;
}

export function LanguageSelector({ compact = false }: Props) {
  const { locale, setLocale } = useI18n();

  return (
    <div className="relative inline-flex items-center">
      <Globe size={14} className="pointer-events-none absolute left-2.5 text-[#6B5E57]" />
      <select
        aria-label="Language"
        value={locale}
        onChange={(e) => setLocale(e.target.value as typeof locale)}
        className="cursor-pointer appearance-none rounded-full border border-[#EAE3DC] bg-white py-1.5 pl-8 pr-6 text-xs font-semibold text-[#1F1510] shadow-sm outline-none transition hover:border-[#2E1F19] focus:border-[#2E1F19]"
      >
        {SUPPORTED_LOCALES.map((code) => {
          const item = LOCALE_CONFIG[code];
          return (
            <option key={code} value={code}>
              {item.flag} {compact ? item.shortLabel : item.label}
            </option>
          );
        })}
      </select>
      <span className="pointer-events-none absolute right-2.5 text-[10px] text-[#6B5E57]">▾</span>
    </div>
  );
}
