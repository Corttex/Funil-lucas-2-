import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Gender, Experience, Protocol } from '../engine/calculations';
import type { ViewMode } from '../i18n/config';

export interface FunnelData {
  gender: Gender | null;
  ageRange: string;
  exactAge: number | null;
  objectives: string[];
  name: string;
  bodyType: string;
  fastingExperience: Experience | null;
  hungerTime: string;
  mealTimes: { breakfast: string; lunch: string; dinner: string };
  cooking: string;
  activityLevel: string;
  workSchedule: string;
  dailyRoutine: string;
  goalIntensity: 'testar' | 'tentar' | 'maximo' | null;
  unitSystem: 'metric' | 'imperial';
  heightCm: number | null;
  currentWeightKg: number | null;
  targetWeightKg: number | null;
  weeklyPace: number;
  walking: string;
  sleep: string;
  pastMethods: string[];
  waterIntake: string;
  sugaryDrinks: string;
  takesMedication: boolean | null;
  healthConditions: string[];
  email: string;
  signature: string | null;
  selectedPlan: '1_week' | '4_weeks' | '12_weeks';
  extraDiscount: boolean;

  // Campos específicos do funil de Calistenia
  calisthenicsExp: 'yes' | 'no' | null;
  mainGoal: 'lose_weight' | 'gain_muscle' | 'stay_fit' | null;
  extraGoals: string[];
  currentPhysique: string;
  dreamBody: string;
  bestShapeAgo: string;
  weightChangePattern: 'hard_lose' | 'changes_easily' | 'hard_gain' | null;
  workoutFreq: string;
  focusAreas: string[];
  stairsFeeling: string;
  pushups: string;
  squats: string;
  sensitivities: string[];
  energyLevel: string;
  dietType: string;
  eatingHabits: string[];
  healthConsent: boolean;
  lifeEvents: string[];
  upcomingEvent: string;
  eventDate: string;
  mainMotivation: string;
  confidenceLevel: string;
  scratchRevealed: boolean;
  promoCode: string;
}

export interface WeightEntry {
  date: string;
  kg: number;
}

export interface AppData {
  isPaid: boolean;
  protocol: Protocol;
  fastStart: number | null;
  waterLog: Record<string, number>;
  weights: WeightEntry[];
  meals: string[];
  achievements: string[];
}

interface State {
  step: number;
  viewMode: ViewMode;
  funnel: FunnelData;
  app: AppData;
  setViewMode: (mode: ViewMode) => void;
  setStep: (n: number) => void;
  next: () => void;
  back: () => void;
  setFunnel: (patch: Partial<FunnelData>) => void;
  setApp: (patch: Partial<AppData>) => void;
  addWater: (ml: number, day?: string) => void;
  addWeight: (kg: number, day?: string) => void;
  startFast: () => void;
  endFast: () => void;
  reset: () => void;
}

export const TOTAL_FUNNEL_STEPS = 54;

export const today = () => new Date().toISOString().slice(0, 10);

const initialFunnel: FunnelData = {
  gender: null,
  ageRange: '',
  exactAge: null,
  objectives: [],
  name: '',
  bodyType: '',
  fastingExperience: null,
  hungerTime: '',
  mealTimes: { breakfast: '', lunch: '', dinner: '' },
  cooking: '',
  activityLevel: '',
  workSchedule: '',
  dailyRoutine: '',
  goalIntensity: null,
  unitSystem: 'metric',
  heightCm: null,
  currentWeightKg: null,
  targetWeightKg: null,
  weeklyPace: 1.0,
  walking: '',
  sleep: '',
  pastMethods: [],
  waterIntake: '',
  sugaryDrinks: '',
  takesMedication: null,
  healthConditions: [],
  email: '',
  signature: null,
  selectedPlan: '4_weeks',
  extraDiscount: false,

  calisthenicsExp: null,
  mainGoal: null,
  extraGoals: [],
  currentPhysique: '',
  dreamBody: '',
  bestShapeAgo: '',
  weightChangePattern: null,
  workoutFreq: '',
  focusAreas: [],
  stairsFeeling: '',
  pushups: '',
  squats: '',
  sensitivities: [],
  energyLevel: '',
  dietType: '',
  eatingHabits: [],
  healthConsent: true,
  lifeEvents: [],
  upcomingEvent: '',
  eventDate: '',
  mainMotivation: '',
  confidenceLevel: '',
  scratchRevealed: false,
  promoCode: '',
};

const initialApp: AppData = {
  isPaid: false,
  protocol: '16:8',
  fastStart: null,
  waterLog: {},
  weights: [],
  meals: [],
  achievements: [],
};

export const useBestMeStore = create<State>()(
  persist(
    (set) => ({
      step: 0,
      viewMode: 'home',
      funnel: initialFunnel,
      app: initialApp,
      setViewMode: (viewMode) => set({ viewMode }),
      setStep: (n) => set({ step: Math.max(0, Math.min(TOTAL_FUNNEL_STEPS, n)) }),
      next: () => set((s) => ({ step: Math.min(TOTAL_FUNNEL_STEPS, s.step + 1) })),
      back: () => set((s) => ({ step: Math.max(0, s.step - 1) })),
      setFunnel: (patch) => set((s) => ({ funnel: { ...s.funnel, ...patch } })),
      setApp: (patch) =>
        set((s) => ({
          app: { ...s.app, ...patch },
          viewMode: patch.isPaid === true ? 'app' : patch.isPaid === false ? 'funnel' : s.viewMode,
        })),
      addWater: (ml, day = today()) =>
        set((s) => ({
          app: {
            ...s.app,
            waterLog: { ...s.app.waterLog, [day]: (s.app.waterLog[day] ?? 0) + ml },
          },
        })),
      addWeight: (kg, day = today()) =>
        set((s) => ({
          app: {
            ...s.app,
            weights: [...s.app.weights.filter((w) => w.date !== day), { date: day, kg }],
          },
        })),
      startFast: () => set((s) => ({ app: { ...s.app, fastStart: Date.now() } })),
      endFast: () => set((s) => ({ app: { ...s.app, fastStart: null } })),
      reset: () => set({ step: 0, viewMode: 'home', funnel: initialFunnel, app: initialApp }),
    }),
    { name: 'bestme-calisthenics-v2' },
  ),
);
