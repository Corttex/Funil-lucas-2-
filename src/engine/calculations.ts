export type Gender = 'mulher' | 'homem';
export type Experience = 'experimentei' | 'ouvi_falar' | 'nao_conheco';
export type Protocol = '14:10' | '16:8' | '18:6' | '20:4';
export type BmiCategory = 'abaixo' | 'normal' | 'sobrepeso' | 'obesidade';
export type Somatotype = 'mesomorfo' | 'endomorfo' | 'ectomorfo';

const MONTHS = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

/** Flexão de gênero para textos do funil. */
export function genderTerms(gender: Gender) {
  const f = gender === 'mulher';
  return {
    familiarizado: f ? 'familiarizada' : 'familiarizado',
    pessoas: f ? 'mulheres' : 'homens',
    aposentado: f ? 'aposentada' : 'aposentado',
    pronto: f ? 'pronta' : 'pronto',
  };
}

export const kgToLb = (kg: number) => kg * 2.20462;
export const lbToKg = (lb: number) => lb / 2.20462;
export const cmToIn = (cm: number) => cm / 2.54;
export const inToCm = (inch: number) => inch * 2.54;

export function calcBmi(weightKg: number, heightCm: number): number {
  const m = heightCm / 100;
  return weightKg / (m * m);
}

export function bmiCategory(bmi: number): BmiCategory {
  if (bmi < 18.5) return 'abaixo';
  if (bmi < 25) return 'normal';
  if (bmi < 30) return 'sobrepeso';
  return 'obesidade';
}

export const BMI_LABEL: Record<BmiCategory, string> = {
  abaixo: 'Abaixo do peso',
  normal: 'Peso normal',
  sobrepeso: 'Sobrepeso',
  obesidade: 'Obesidade',
};

/** Peso ideal (IMC 21.5) e faixa saudável (IMC 19.0 a 24.5), em kg inteiros. */
export function idealWeight(heightCm: number) {
  const m2 = (heightCm / 100) ** 2;
  return {
    ideal: Math.round(21.5 * m2),
    min: Math.round(19.0 * m2),
    max: Math.round(24.5 * m2),
  };
}

/** Semanas para atingir a meta; diferença mínima de 1 kg. */
export function weeksToGoal(currentKg: number, targetKg: number, weeklyPace = 1.0): number {
  const delta = Math.max(1, currentKg - targetKg);
  return delta / weeklyPace;
}

export function targetDate(weeks: number, from: Date = new Date()): Date {
  const d = new Date(from);
  d.setDate(d.getDate() + Math.ceil(weeks * 7));
  return d;
}

/** Ex.: "17 fev 2027". */
export function formatDatePtBr(d: Date): string {
  return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

export function recommendProtocol(opts: {
  experience: Experience;
  goalIntensity: 'testar' | 'tentar' | 'maximo';
  sensitiveConditions: boolean;
}): Protocol {
  if (opts.experience === 'nao_conheco' || opts.sensitiveConditions) return '14:10';
  if (opts.experience === 'experimentei' && opts.goalIntensity === 'maximo') return '18:6';
  return '16:8';
}

/** Meta de água diária: 35 ml por kg. */
export function waterGoalMl(weightKg: number): number {
  return Math.round(weightKg * 35);
}

/** Peso projetado na semana w (queda linear até a meta). */
export function projectedWeight(currentKg: number, targetKg: number, weeklyPace: number, week: number): number {
  return Math.max(targetKg, currentKg - weeklyPace * week);
}

/** Identifica o biótipo a partir da mudança típica de peso. */
export function detectSomatotype(
  pattern: 'hard_lose' | 'changes_easily' | 'hard_gain' | null,
): Somatotype {
  if (pattern === 'hard_lose') return 'endomorfo';
  if (pattern === 'hard_gain') return 'ectomorfo';
  return 'mesomorfo';
}

/** Gera código promocional personalizado no padrão [nome]_nov26. */
export function generatePromoCode(name: string): string {
  const clean = name
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .split(/\s+/)[0]
    ?.replace(/[^a-z0-9]/g, '');
  const prefix = clean && clean.length >= 2 ? clean : 'bestme';
  return `${prefix}_nov26`;
}

/** Calcula porcentagem de alteração entre peso atual e meta. */
export function calcWeightDeltaPct(currentKg: number, targetKg: number): {
  pct: number;
  direction: 'gain' | 'lose' | 'maintain';
} {
  if (!currentKg || currentKg <= 0) return { pct: 0, direction: 'maintain' };
  const diff = targetKg - currentKg;
  if (Math.abs(diff) < 0.5) return { pct: 0, direction: 'maintain' };
  const pct = Math.max(1, Math.round((Math.abs(diff) / currentKg) * 100));
  return {
    pct,
    direction: diff > 0 ? 'gain' : 'lose',
  };
}

/** Estima data futura para ganho ou perda de peso. */
export function estimateGoalDate(currentKg: number, targetKg: number, weeklyPace = 0.65): Date {
  const diff = Math.abs(targetKg - currentKg);
  const weeks = Math.max(4, Math.ceil(diff / Math.max(0.3, weeklyPace)));
  return targetDate(weeks);
}

export function formatLongDateLocale(d: Date, intlLocale: string): string {
  return new Intl.DateTimeFormat(intlLocale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(d);
}

export function formatDayMonthLocale(d: Date, intlLocale: string): string {
  return new Intl.DateTimeFormat(intlLocale, {
    day: 'numeric',
    month: 'long',
  }).format(d);
}
