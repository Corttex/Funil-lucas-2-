import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Gender, Experience, Protocol } from '../engine/calculations';

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
  selectedPlan: '1_month' | '4_months' | 'lifetime';
  extraDiscount: boolean;
}

export interface WeightEntry { date: string; kg: number }

export interface AppData {
  isPaid: boolean;
  protocol: Protocol;
  fastStart: number | null; // timestamp ms
  waterLog: Record<string, number>; // yyyy-mm-dd -> ml
  weights: WeightEntry[];
  meals: string[];
  achievements: string[];
}

interface State {
  step: number;
  funnel: FunnelData;
  app: AppData;
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

export const today = () => new Date().toISOString().slice(0, 10);

const initialFunnel: FunnelData = {
  gender: null, ageRange: '', exactAge: null, objectives: [], name: '', bodyType: '',
  fastingExperience: null, hungerTime: '',
  mealTimes: { breakfast: '', lunch: '', dinner: '' },
  cooking: '', activityLevel: '', workSchedule: '', dailyRoutine: '', goalIntensity: null,
  unitSystem: 'metric', heightCm: null, currentWeightKg: null, targetWeightKg: null, weeklyPace: 1.0,
  walking: '', sleep: '', pastMethods: [], waterIntake: '', sugaryDrinks: '',
  takesMedication: null, healthConditions: [], email: '', signature: null,
  selectedPlan: '4_months', extraDiscount: false,
};

const initialApp: AppData = {
  isPaid: false, protocol: '16:8', fastStart: null,
  waterLog: {}, weights: [], meals: [], achievements: [],
};

export const useBestMeStore = create<State>()(
  persist(
    (set) => ({
      step: 0,
      funnel: initialFunnel,
      app: initialApp,
      setStep: (n) => set({ step: Math.max(0, Math.min(47, n)) }),
      next: () => set((s) => ({ step: Math.min(47, s.step + 1) })),
      back: () => set((s) => ({ step: Math.max(0, s.step - 1) })),
      setFunnel: (patch) => set((s) => ({ funnel: { ...s.funnel, ...patch } })),
      setApp: (patch) => set((s) => ({ app: { ...s.app, ...patch } })),
      addWater: (ml, day = today()) =>
        set((s) => ({ app: { ...s.app, waterLog: { ...s.app.waterLog, [day]: (s.app.waterLog[day] ?? 0) + ml } } })),
      addWeight: (kg, day = today()) =>
        set((s) => ({
          app: { ...s.app, weights: [...s.app.weights.filter((w) => w.date !== day), { date: day, kg }] },
        })),
      startFast: () => set((s) => ({ app: { ...s.app, fastStart: Date.now() } })),
      endFast: () => set((s) => ({ app: { ...s.app, fastStart: null } })),
      reset: () => set({ step: 0, funnel: initialFunnel, app: initialApp }),
    }),
    { name: 'bestme-fasting-v1' },
  ),
);
