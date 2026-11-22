export type Locale = 'pt' | 'us' | 'es' | 'fr' | 'de' | 'it';
export type ViewMode = 'home' | 'funnel' | 'login' | 'app';

export interface PlanPricing {
  full: string;
  sale: string;
  fullNum: number;
  saleNum: number;
  perDayFull: string;
  perDay: string;
}

export interface LocaleConfig {
  code: Locale;
  label: string;
  shortLabel: string;
  flag: string;
  htmlLang: string;
  intlLocale: string;
  currencySymbol: string;
  currencyCode: string;
  hasPix: boolean;
  plans: {
    '7_days_trial': PlanPricing;
    '1_week': PlanPricing;
    '4_weeks': PlanPricing;
    '12_weeks': PlanPricing;
  };
}

export const SUPPORTED_LOCALES: Locale[] = ['pt', 'us', 'es', 'fr', 'de', 'it'];

export const LOCALE_CONFIG: Record<Locale, LocaleConfig> = {
  pt: {
    code: 'pt',
    label: 'Português (BR)',
    shortLabel: 'PT',
    flag: '🇧🇷',
    htmlLang: 'pt-BR',
    intlLocale: 'pt-BR',
    currencySymbol: 'R$',
    currencyCode: 'BRL',
    hasPix: true,
    plans: {
      '7_days_trial': {
        full: 'R$19,99',
        sale: 'R$5,99',
        fullNum: 19.99,
        saleNum: 5.99,
        perDayFull: 'R$2,86',
        perDay: 'R$0,86',
      },
      '1_week': {
        full: 'R$40,00',
        sale: 'R$19,99',
        fullNum: 40,
        saleNum: 19.99,
        perDayFull: 'R$5,71',
        perDay: 'R$2,86',
      },
      '4_weeks': {
        full: 'R$99,99',
        sale: 'R$49,99',
        fullNum: 99.99,
        saleNum: 49.99,
        perDayFull: 'R$3,57',
        perDay: 'R$1,79',
      },
      '12_weeks': {
        full: 'R$199,99',
        sale: 'R$99,99',
        fullNum: 199.99,
        saleNum: 99.99,
        perDayFull: 'R$2,38',
        perDay: 'R$1,19',
      },
    },
  },
  us: {
    code: 'us',
    label: 'English (US)',
    shortLabel: 'US',
    flag: '🇺🇸',
    htmlLang: 'en-US',
    intlLocale: 'en-US',
    currencySymbol: '$',
    currencyCode: 'USD',
    hasPix: false,
    plans: {
      '7_days_trial': {
        full: 'R$19,99',
        sale: 'R$5,99',
        fullNum: 19.99,
        saleNum: 5.99,
        perDayFull: 'R$2,86',
        perDay: 'R$0,86',
      },
      '1_week': {
        full: '$19.98',
        sale: '$9.99',
        fullNum: 19.98,
        saleNum: 9.99,
        perDayFull: '$2.85',
        perDay: '$1.43',
      },
      '4_weeks': {
        full: '$39.98',
        sale: '$19.99',
        fullNum: 39.98,
        saleNum: 19.99,
        perDayFull: '$1.43',
        perDay: '$0.71',
      },
      '12_weeks': {
        full: '$79.98',
        sale: '$39.99',
        fullNum: 79.98,
        saleNum: 39.99,
        perDayFull: '$0.95',
        perDay: '$0.48',
      },
    },
  },
  es: {
    code: 'es',
    label: 'Español',
    shortLabel: 'ES',
    flag: '🇪🇸',
    htmlLang: 'es-ES',
    intlLocale: 'es-ES',
    currencySymbol: '€',
    currencyCode: 'EUR',
    hasPix: false,
    plans: {
      '7_days_trial': {
        full: 'R$19,99',
        sale: 'R$5,99',
        fullNum: 19.99,
        saleNum: 5.99,
        perDayFull: 'R$2,86',
        perDay: 'R$0,86',
      },
      '1_week': {
        full: '€19,98',
        sale: '€9,99',
        fullNum: 19.98,
        saleNum: 9.99,
        perDayFull: '€2,85',
        perDay: '€1,43',
      },
      '4_weeks': {
        full: '€39,98',
        sale: '€19,99',
        fullNum: 39.98,
        saleNum: 19.99,
        perDayFull: '€1,43',
        perDay: '€0,71',
      },
      '12_weeks': {
        full: '€79,98',
        sale: '€39,99',
        fullNum: 79.98,
        saleNum: 39.99,
        perDayFull: '€0,95',
        perDay: '€0,48',
      },
    },
  },
  fr: {
    code: 'fr',
    label: 'Français',
    shortLabel: 'FR',
    flag: '🇫🇷',
    htmlLang: 'fr-FR',
    intlLocale: 'fr-FR',
    currencySymbol: '€',
    currencyCode: 'EUR',
    hasPix: false,
    plans: {
      '7_days_trial': {
        full: 'R$19,99',
        sale: 'R$5,99',
        fullNum: 19.99,
        saleNum: 5.99,
        perDayFull: 'R$2,86',
        perDay: 'R$0,86',
      },
      '1_week': {
        full: '€19,98',
        sale: '€9,99',
        fullNum: 19.98,
        saleNum: 9.99,
        perDayFull: '€2,85',
        perDay: '€1,43',
      },
      '4_weeks': {
        full: '€39,98',
        sale: '€19,99',
        fullNum: 39.98,
        saleNum: 19.99,
        perDayFull: '€1,43',
        perDay: '€0,71',
      },
      '12_weeks': {
        full: '€79,98',
        sale: '€39,99',
        fullNum: 79.98,
        saleNum: 39.99,
        perDayFull: '€0,95',
        perDay: '€0,48',
      },
    },
  },
  de: {
    code: 'de',
    label: 'Deutsch',
    shortLabel: 'DE',
    flag: '🇩🇪',
    htmlLang: 'de-DE',
    intlLocale: 'de-DE',
    currencySymbol: '€',
    currencyCode: 'EUR',
    hasPix: false,
    plans: {
      '7_days_trial': {
        full: 'R$19,99',
        sale: 'R$5,99',
        fullNum: 19.99,
        saleNum: 5.99,
        perDayFull: 'R$2,86',
        perDay: 'R$0,86',
      },
      '1_week': {
        full: '€19,98',
        sale: '€9,99',
        fullNum: 19.98,
        saleNum: 9.99,
        perDayFull: '€2,85',
        perDay: '€1,43',
      },
      '4_weeks': {
        full: '€39,98',
        sale: '€19,99',
        fullNum: 39.98,
        saleNum: 19.99,
        perDayFull: '€1,43',
        perDay: '€0,71',
      },
      '12_weeks': {
        full: '€79,98',
        sale: '€39,99',
        fullNum: 79.98,
        saleNum: 39.99,
        perDayFull: '€0,95',
        perDay: '€0,48',
      },
    },
  },
  it: {
    code: 'it',
    label: 'Italiano',
    shortLabel: 'IT',
    flag: '🇮🇹',
    htmlLang: 'it-IT',
    intlLocale: 'it-IT',
    currencySymbol: '€',
    currencyCode: 'EUR',
    hasPix: false,
    plans: {
      '7_days_trial': {
        full: 'R$19,99',
        sale: 'R$5,99',
        fullNum: 19.99,
        saleNum: 5.99,
        perDayFull: 'R$2,86',
        perDay: 'R$0,86',
      },
      '1_week': {
        full: '€19,98',
        sale: '€9,99',
        fullNum: 19.98,
        saleNum: 9.99,
        perDayFull: '€2,85',
        perDay: '€1,43',
      },
      '4_weeks': {
        full: '€39,98',
        sale: '€19,99',
        fullNum: 39.98,
        saleNum: 19.99,
        perDayFull: '€1,43',
        perDay: '€0,71',
      },
      '12_weeks': {
        full: '€79,98',
        sale: '€39,99',
        fullNum: 79.98,
        saleNum: 39.99,
        perDayFull: '€0,95',
        perDay: '€0,48',
      },
    },
  },
};

export function isValidLocale(code: string): code is Locale {
  return (SUPPORTED_LOCALES as string[]).includes(code);
}

export function detectLocaleFromBrowser(): Locale {
  if (typeof navigator === 'undefined') return 'pt';
  const candidates = [
    ...(navigator.languages || []),
    navigator.language || '',
  ].map((l) => l.toLowerCase());

  for (const lang of candidates) {
    if (lang.startsWith('pt')) return 'pt';
    if (lang.startsWith('es')) return 'es';
    if (lang.startsWith('fr')) return 'fr';
    if (lang.startsWith('de')) return 'de';
    if (lang.startsWith('it')) return 'it';
    if (lang.startsWith('en')) return 'us';
  }
  return 'us';
}

export function parseRoute(pathname: string): {
  locale: Locale | null;
  view: ViewMode;
} {
  const clean = pathname.replace(/\/+$/, '') || '/';
  const segments = clean.split('/').filter(Boolean);

  if (segments.length === 0) {
    return { locale: null, view: 'home' };
  }

  const first = segments[0].toLowerCase();
  let locale: Locale | null = null;
  let subIndex = 0;

  if (isValidLocale(first)) {
    locale = first;
    subIndex = 1;
  } else if (first === 'en') {
    locale = 'us';
    subIndex = 1;
  }

  const sub = (segments[subIndex] || '').toLowerCase();
  if (sub === 'quiz' || sub === 'onboarding' || sub === 'funnel') {
    return { locale, view: 'funnel' };
  }
  if (sub === 'login') {
    return { locale, view: 'login' };
  }
  if (sub === 'app') {
    return { locale, view: 'app' };
  }
  return { locale, view: 'home' };
}

export function buildPath(locale: Locale, view: ViewMode): string {
  switch (view) {
    case 'funnel':
      return `/${locale}/quiz`;
    case 'login':
      return `/${locale}/login`;
    case 'app':
      return `/${locale}/app`;
    case 'home':
    default:
      return `/${locale}`;
  }
}

export function formatMoney(amount: number, locale: Locale): string {
  const cfg = LOCALE_CONFIG[locale];
  const formatted = amount.toFixed(2);
  if (locale === 'us') {
    return `${cfg.currencySymbol}${formatted}`;
  }
  return `${cfg.currencySymbol}${formatted.replace('.', ',')}`;
}
