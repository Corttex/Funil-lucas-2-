import { useEffect, useState } from 'react';
import { Droplets, Flame, Play, Square } from 'lucide-react';
import { waterGoalMl, type Protocol } from '../../engine/calculations';
import { today, useBestMeStore } from '../../store/useBestMeStore';

const PROTOCOL_HOURS: Record<Protocol, number> = {
  '14:10': 14,
  '16:8': 16,
  '18:6': 18,
  '20:4': 20,
};

const PHASES = [
  { minH: 0, maxH: 4, title: 'Digestão', desc: 'Açúcar no sangue sobe e insulina processa nutrientes.' },
  { minH: 4, maxH: 12, title: 'Queda de Insulina', desc: 'Corpo esgota glicogênio hepático e estabiliza glicemia.' },
  { minH: 12, maxH: 16, title: 'Queima de Gordura (Cetose) 🔥', desc: 'Reservas de gordura viram energia principal.' },
  { minH: 16, maxH: 99, title: 'Autofagia Celular ✨', desc: 'Renovação celular profunda e redução de inflamações.' },
];

function fmtDuration(ms: number) {
  const totalSec = Math.max(0, Math.floor(ms / 1000));
  const h = String(Math.floor(totalSec / 3600)).padStart(2, '0');
  const m = String(Math.floor((totalSec % 3600) / 60)).padStart(2, '0');
  const s = String(totalSec % 60).padStart(2, '0');
  return `${h}:${m}:${s}`;
}

function fmtHour(ts: number) {
  const d = new Date(ts);
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}

export function TodayTab() {
  const { funnel, app, setApp, startFast, endFast, addWater } = useBestMeStore();
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const nome = funnel.name.trim() || 'amigo(a)';
  const currentKg = funnel.currentWeightKg ?? 75;
  const targetKg = funnel.targetWeightKg ?? 65;
  const goalHours = PROTOCOL_HOURS[app.protocol];
  const goalMs = goalHours * 3600 * 1000;
  const elapsedMs = app.fastStart ? Math.max(0, now - app.fastStart) : 0;
  const elapsedHours = elapsedMs / (3600 * 1000);
  const pct = Math.min(100, Math.round((elapsedMs / goalMs) * 100));

  const r = 82;
  const circ = 2 * Math.PI * r;
  const dashOffset = circ * (1 - pct / 100);

  const waterToday = app.waterLog[today()] ?? 0;
  const waterTarget = waterGoalMl(currentKg);
  const waterPct = Math.min(100, Math.round((waterToday / waterTarget) * 100));

  return (
    <div className="flex flex-col gap-5 pb-24">
      <div className="flex items-center justify-between pt-2">
        <div>
          <h1 className="text-xl font-extrabold text-[#0E3A47]">Olá, {nome}! 👋</h1>
          <p className="text-xs font-semibold text-[#475569]">Meta: {targetKg} kg</p>
        </div>
        <span className="flex items-center gap-1 rounded-full bg-[#FFF7ED] px-3 py-1 text-xs font-extrabold text-orange-600">
          <Flame size={14} /> Dia 1
        </span>
      </div>

      <div className="rounded-3xl bg-white p-5 shadow-sm">
        <div className="flex justify-center gap-2">
          {(['14:10', '16:8', '18:6', '20:4'] as Protocol[]).map((p) => (
            <button
              key={p}
              onClick={() => setApp({ protocol: p })}
              className={`rounded-full px-3 py-1 text-xs font-bold ${
                app.protocol === p
                  ? 'bg-[#10B981] text-white'
                  : 'bg-[#E6F7F4] text-[#0E3A47]'
              }`}
            >
              {p}
            </button>
          ))}
        </div>

        <div className="relative my-5 flex items-center justify-center">
          <svg width="200" height="200" className="-rotate-90">
            <defs>
              <linearGradient id="fastGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#0EA5E9" />
              </linearGradient>
            </defs>
            <circle cx="100" cy="100" r={r} fill="none" stroke="#E2E8F0" strokeWidth="14" />
            <circle
              cx="100"
              cy="100"
              r={r}
              fill="none"
              stroke="url(#fastGrad)"
              strokeWidth="14"
              strokeLinecap="round"
              strokeDasharray={circ}
              strokeDashoffset={dashOffset}
            />
          </svg>
          <div className="absolute text-center">
            <p className="text-xs font-bold uppercase text-[#64748B]">
              {app.fastStart ? 'Em jejum' : 'Pronto para iniciar'}
            </p>
            <p className="text-3xl font-extrabold text-[#0E3A47]">
              {app.fastStart ? fmtDuration(elapsedMs) : '00:00:00'}
            </p>
            <p className="text-xs font-bold text-[#10B981]">{pct}% concluído</p>
          </div>
        </div>

        {app.fastStart && (
          <div className="mb-4 flex justify-between rounded-xl bg-[#F8FAFC] px-4 py-2 text-xs text-[#475569]">
            <span>Início: <strong>{fmtHour(app.fastStart)}</strong></span>
            <span>Meta ({goalHours}h): <strong>{fmtHour(app.fastStart + goalMs)}</strong></span>
          </div>
        )}

        <button
          onClick={app.fastStart ? endFast : startFast}
          className="bm-cta flex items-center justify-center gap-2"
        >
          {app.fastStart ? (
            <>
              <Square size={16} fill="currentColor" /> Encerrar Jejum
            </>
          ) : (
            <>
              <Play size={16} fill="currentColor" /> Iniciar Jejum
            </>
          )}
        </button>
      </div>

      <div className="rounded-3xl bg-white p-5 shadow-sm">
        <h2 className="mb-3 text-sm font-extrabold text-[#0E3A47]">Fases Metabólicas</h2>
        <div className="flex gap-2.5 overflow-x-auto pb-1">
          {PHASES.map((ph) => {
            const active = app.fastStart !== null && elapsedHours >= ph.minH;
            return (
              <div
                key={ph.title}
                className={`min-w-[185px] rounded-2xl border p-3.5 ${
                  active ? 'border-[#10B981] bg-[#ECFDF5]' : 'border-[#E2E8F0] bg-[#F8FAFC] opacity-70'
                }`}
              >
                <span className="text-[11px] font-bold text-[#0284C7]">
                  {ph.minH}h – {ph.maxH === 99 ? '∞' : `${ph.maxH}h`}
                </span>
                <p className="mt-1 text-xs font-extrabold text-[#0E3A47]">{ph.title}</p>
                <p className="mt-1 text-[11px] leading-snug text-[#475569]">{ph.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="rounded-3xl bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="flex items-center gap-1.5 text-sm font-extrabold text-[#0E3A47]">
            <Droplets size={17} className="text-[#0EA5E9]" /> Hidratação Diária
          </h2>
          <span className="text-xs font-bold text-[#0EA5E9]">
            {waterToday} / {waterTarget} ml ({waterPct}%)
          </span>
        </div>
        <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-sky-400 to-teal-400 transition-all"
            style={{ width: `${waterPct}%` }}
          />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2.5">
          <button
            onClick={() => addWater(250)}
            className="rounded-xl border border-sky-200 bg-sky-50 py-2.5 text-xs font-bold text-[#0284C7]"
          >
            + 250 ml (1 copo)
          </button>
          <button
            onClick={() => addWater(500)}
            className="rounded-xl border border-sky-200 bg-sky-50 py-2.5 text-xs font-bold text-[#0284C7]"
          >
            + 500 ml (Garrafa)
          </button>
        </div>
      </div>
    </div>
  );
}
