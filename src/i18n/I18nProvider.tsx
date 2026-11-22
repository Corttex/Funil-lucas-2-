import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';
import {
  buildPath,
  detectLocaleFromBrowser,
  LOCALE_CONFIG,
  parseRoute,
  type Locale,
  type LocaleConfig,
  type ViewMode,
} from './config';
import { TRANSLATIONS, type TranslationDict } from './translations';
import { useBestMeStore } from '../store/useBestMeStore';

interface I18nContextValue {
  locale: Locale;
  config: LocaleConfig;
  t: TranslationDict;
  setLocale: (next: Locale) => void;
  navigateView: (view: ViewMode) => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const { viewMode, setViewMode } = useBestMeStore();
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === 'undefined') return 'pt';
    const parsed = parseRoute(window.location.pathname);
    return parsed.locale ?? detectLocaleFromBrowser();
  });

  // Inicializa URL prefixada e viewMode ao carregar
  useEffect(() => {
    const parsed = parseRoute(window.location.pathname);
    const activeLocale = parsed.locale ?? detectLocaleFromBrowser();
    setLocaleState(activeLocale);
    document.documentElement.lang = LOCALE_CONFIG[activeLocale].htmlLang;

    const targetView = parsed.locale ? parsed.view : viewMode || 'home';
    if (parsed.locale && parsed.view !== viewMode) {
      setViewMode(parsed.view);
    }

    const expectedPath = buildPath(activeLocale, targetView);
    if (window.location.pathname !== expectedPath) {
      window.history.replaceState(null, '', expectedPath + window.location.search);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Mantém URL sincronizada quando viewMode muda (ex: após pagamento -> /<locale>/app)
  useEffect(() => {
    document.documentElement.lang = LOCALE_CONFIG[locale].htmlLang;
    const expectedPath = buildPath(locale, viewMode);
    if (window.location.pathname !== expectedPath) {
      window.history.replaceState(null, '', expectedPath + window.location.search);
    }
  }, [locale, viewMode]);

  // Suporte a botão Voltar/Avançar do navegador
  useEffect(() => {
    const onPopState = () => {
      const parsed = parseRoute(window.location.pathname);
      if (parsed.locale) {
        setLocaleState(parsed.locale);
      }
      setViewMode(parsed.view);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, [setViewMode]);

  const setLocale = useCallback(
    (next: Locale) => {
      setLocaleState(next);
      document.documentElement.lang = LOCALE_CONFIG[next].htmlLang;
      const targetPath = buildPath(next, viewMode);
      window.history.pushState(null, '', targetPath + window.location.search);
    },
    [viewMode],
  );

  const navigateView = useCallback(
    (view: ViewMode) => {
      setViewMode(view);
      const targetPath = buildPath(locale, view);
      if (window.location.pathname !== targetPath) {
        window.history.pushState(null, '', targetPath);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [locale, setViewMode],
  );

  return (
    <I18nContext.Provider
      value={{
        locale,
        config: LOCALE_CONFIG[locale],
        t: TRANSLATIONS[locale],
        setLocale,
        navigateView,
      }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error('useI18n must be used inside I18nProvider');
  }
  return ctx;
}
