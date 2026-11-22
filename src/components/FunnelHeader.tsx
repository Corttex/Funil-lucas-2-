import { useState } from 'react';
import { ArrowLeft, Home, Menu, User, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useI18n } from '../i18n/I18nProvider';
import { LOCALE_CONFIG, SUPPORTED_LOCALES } from '../i18n/config';

interface Props {
  step: number;
  onBack?: () => void;
  onOpenLogin?: () => void;
  onGoHome?: () => void;
}

interface SegmentInfo {
  label: string;
  start: number;
  end: number;
}

export function FunnelHeader({ step, onBack, onOpenLogin, onGoHome }: Props) {
  const { t, locale, setLocale } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);

  const segments: SegmentInfo[] = [
    { label: t.funnel.sections.profile, start: 2, end: 12 },
    { label: t.funnel.sections.activity, start: 13, end: 20 },
    { label: t.funnel.sections.lifestyle, start: 21, end: 26 },
    { label: t.funnel.sections.nutrition, start: 27, end: 33 },
    { label: t.funnel.sections.almostThere, start: 34, end: 47 },
  ];

  // Steps that hide the section bar and show simple header
  const showProgressSegments =
    (step >= 3 && step <= 11 && step !== 4 && step !== 9) ||
    (step >= 13 && step <= 19) ||
    (step >= 21 && step <= 26 && step !== 24) ||
    (step >= 27 && step <= 32 && step !== 31) ||
    (step >= 34 && step <= 46 && step !== 38 && step !== 39 && step !== 43 && step !== 45);

  const activeSegment = segments.find((s) => step >= s.start && step <= s.end);

  return (
    <header className="sticky top-0 z-30 bg-[#FDFBF7]/95 pt-3 pb-2 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {step > 0 && onBack && (
            <motion.button
              type="button"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={onBack}
              aria-label={t.common.back}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#EAE3DC] bg-white text-[#1F1510] shadow-sm transition hover:bg-[#F5EFE8]"
            >
              <ArrowLeft size={16} />
            </motion.button>
          )}
          <button
            type="button"
            onClick={onGoHome}
            className="font-['Plus_Jakarta_Sans'] text-xl font-extrabold tracking-tight text-[#1F1510]"
          >
            {t.common.brand}
          </button>
        </div>

        {showProgressSegments && activeSegment && (
          <motion.span
            key={activeSegment.label}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden text-xs font-semibold text-[#6B5E57] sm:inline"
          >
            {activeSegment.label}
          </motion.span>
        )}

        <motion.button
          type="button"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[#EAE3DC] bg-white text-[#1F1510] shadow-sm transition hover:bg-[#F5EFE8]"
        >
          {menuOpen ? <X size={16} /> : <Menu size={16} />}
        </motion.button>
      </div>

      {showProgressSegments && (
        <div className="mt-3">
          {activeSegment && (
            <p className="mb-1.5 text-center text-xs font-semibold text-[#6B5E57] sm:hidden">
              {activeSegment.label}
            </p>
          )}
          <div className="grid grid-cols-5 gap-1.5">
            {segments.map((seg) => {
              let fill = 0;
              if (step > seg.end) {
                fill = 100;
              } else if (step >= seg.start) {
                const span = Math.max(1, seg.end - seg.start + 1);
                fill = Math.min(100, Math.round(((step - seg.start + 1) / span) * 100));
              }
              return (
                <div
                  key={seg.label}
                  className="h-1 overflow-hidden rounded-full bg-[#E7E0D8]"
                >
                  <motion.div
                    className="h-full rounded-full bg-[#2E1F19]"
                    initial={false}
                    animate={{ width: `${fill}%` }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="mt-2 rounded-2xl border border-[#EAE3DC] bg-white p-4 shadow-lg"
          >
            <div className="flex flex-col gap-2 text-sm font-semibold text-[#1F1510]">
              {onGoHome && (
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    onGoHome();
                  }}
                  className="flex items-center gap-2 rounded-xl px-3 py-2 text-left hover:bg-[#F5EFE8]"
                >
                  <Home size={16} /> {t.common.homeLink}
                </button>
              )}
              {onOpenLogin && (
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    onOpenLogin();
                  }}
                  className="flex items-center gap-2 rounded-xl px-3 py-2 text-left hover:bg-[#F5EFE8]"
                >
                  <User size={16} /> {t.common.login}
                </button>
              )}

              <div className="border-t border-[#EAE3DC] pt-2">
                <p className="px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#6B5E57]">
                  Idioma / Language
                </p>
                <div className="grid grid-cols-2 gap-1">
                  {SUPPORTED_LOCALES.map((loc) => {
                    const c = LOCALE_CONFIG[loc];
                    const active = loc === locale;
                    return (
                      <button
                        key={loc}
                        type="button"
                        onClick={() => {
                          setLocale(loc);
                          setMenuOpen(false);
                        }}
                        className={`flex items-center gap-2 rounded-xl px-3 py-1.5 text-xs font-semibold ${
                          active ? 'bg-[#2E1F19] text-white' : 'hover:bg-[#F5EFE8] text-[#1F1510]'
                        }`}
                      >
                        <span>{c.flag}</span>
                        <span>{c.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
