import { useState } from 'react';
import { Award, Plus } from 'lucide-react';
import { WeightCurveChart } from '../../components/WeightCurveChart';
import {
  BMI_LABEL,
  bmiCategory,
  calcBmi,
  formatDatePtBr,
  targetDate,
  waterGoalMl,
  weeksToGoal,
} from '../../engine/calculations';
import { today, useBestMeStore } from '../../store/useBestMeStore';

export function ProgressTab() {
  const { funnel, app, addWeight } = useBestMeStore();
  const initialKg = funnel.currentWeightKg ?? 75;
  const latestKg = app.weights.length ? app.weights[app.weights.length - 1].kg : initialKg;
  const targetKg = funnel.targetWeightKg ?? 65;
  const heightCm = funnel.heightCm ?? 168;
  const remaining = Math.max(0, latestKg - targetKg);
  const bmi = calcBmi(latestKg, heightCm);
  const dateStr = formatDatePtBr(targetDate(weeksToGoal(latestKg, targetKg, funnel.weeklyPace)));

  const [inputKg, setInputKg] = useState(String(latestKg));
  const [showInput, setShowInput] = useState(false);

  const waterToday = app.waterLog[today()] ?? 0;
  const badges = [
    { title: 'Primeiro Jejum', unlocked: app.fastStart !== null || app.meals.length > 0, icon: '⏱️' },
    { title: 'Hidratação Perfeita', unlocked: waterToday >= waterGoalMl(latestKg), icon: '💧' },
    { title: 'Queimador 16h', unlocked: app.protocol === '16:8' || app.protocol === '18:6', icon: '🔥' },
    { title: 'Primeiros 2 kg Eliminados', unlocked: initialKg - latestKg >= 2, icon: '🏆' },
  ];

  return (
    <div className="flex flex-col gap-5 pb-24 pt-2">
      <h1 className="text-xl font-extrabold text-[#0E3A47]">Progresso & Biometria</h1>

      <div className="grid grid-cols-3 gap-2.5 rounded-3xl bg-white p-4 text-center shadow-sm">
        <div>
          <p className="text-[11px] text-[#64748B]">Inicial</p>
          <p className="text-lg font-extrabold text-[#0E3A47]">{initialKg} kg</p>
        </div>
        <div className="border-x border-slate-100">
          <p className="text-[11px] text-[#64748B]">Atual</p>
          <p className="text-lg font-extrabold text-[#10B981]">{latestKg} kg</p>
        </div>
        <div>
          <p className="text-[11px] text-[#64748B]">Faltam</p>
          <p className="text-lg font-extrabold text-[#0284C7]">{remaining.toFixed(1)} kg</p>
        </div>
      </div>

      {showInput ? (
        <div className="flex gap-2 rounded-2xl bg-white p-3 shadow-sm">
          <input
            type="number"
            step="0.1"
            value={inputKg}
            onChange={(e) => setInputKg(e.target.value)}
            className="flex-1 rounded-xl border border-[#E2E8F0] px-3 py-2 text-sm font-bold outline-none focus:border-[#10B981]"
          />
          <button
            onClick={() => {
              const v = Number(inputKg);
              if (v > 30) addWeight(v);
              setShowInput(false);
            }}
            className="rounded-xl bg-[#10B981] px-4 py-2 text-xs font-bold text-white"
          >
            Salvar
          </button>
        </div>
      ) : (
        <button
          onClick={() => setShowInput(true)}
          className="bm-cta flex items-center justify-center gap-1.5"
        >
          <Plus size={18} /> Registrar Peso de Hoje
        </button>
      )}

      <WeightCurveChart currentKg={latestKg} targetKg={targetKg} targetDateLabel={dateStr} />

      <div className="rounded-3xl bg-white p-4 shadow-sm">
        <p className="text-sm font-extrabold text-[#0E3A47]">
          IMC Atual: <span className="text-[#10B981]">{bmi.toFixed(1)}</span> ({BMI_LABEL[bmiCategory(bmi)]})
        </p>
      </div>

      <div className="rounded-3xl bg-white p-4 shadow-sm">
        <h2 className="mb-3 flex items-center gap-1.5 text-sm font-extrabold text-[#0E3A47]">
          <Award size={16} className="text-[#10B981]" /> Conquistas
        </h2>
        <div className="grid grid-cols-2 gap-2.5">
          {badges.map((b) => (
            <div
              key={b.title}
              className={`rounded-2xl border p-3 text-center ${
                b.unlocked
                  ? 'border-[#10B981] bg-[#ECFDF5]'
                  : 'border-[#E2E8F0] bg-slate-50 opacity-60'
              }`}
            >
              <div className="text-2xl">{b.icon}</div>
              <p className="mt-1 text-xs font-bold text-[#0E3A47]">{b.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
