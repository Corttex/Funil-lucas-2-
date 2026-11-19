import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { hungerTip, NUTRITION_FAQ, NUTRITIONISTS } from '../../data/nutritionists';
import type { Protocol } from '../../engine/calculations';
import { useBestMeStore } from '../../store/useBestMeStore';

export function ProfileTab() {
  const { funnel, app, setApp, reset } = useBestMeStore();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-5 pb-24 pt-2">
      <h1 className="text-xl font-extrabold text-[#0E3A47]">Nutricionistas & Perfil</h1>

      <div className="rounded-3xl bg-white p-4 shadow-sm">
        <p className="text-xs font-bold uppercase text-[#10B981]">Dica diária personalizada</p>
        <p className="mt-1 text-sm text-[#0E3A47]">{hungerTip(funnel.hungerTime)}</p>
        <div className="mt-4 flex justify-around border-t border-slate-100 pt-3">
          {NUTRITIONISTS.map((n) => (
            <div key={n.name} className="text-center">
              <img
                src={n.avatar}
                alt={n.name}
                className="mx-auto h-12 w-12 rounded-full border-2 border-[#10B981] object-cover shadow-sm"
              />
              <p className="mt-1 text-xs font-bold text-[#0E3A47]">{n.name}</p>
              <p className="text-[10px] text-[#64748B]">{n.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl bg-white p-4 shadow-sm">
        <h2 className="mb-2 text-sm font-extrabold text-[#0E3A47]">Perguntas Frequentes</h2>
        <div className="flex flex-col gap-2">
          {NUTRITION_FAQ.map((item, idx) => (
            <div key={item.q} className="rounded-xl border border-[#E2E8F0] p-3">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full text-left text-xs font-bold text-[#0E3A47]"
              >
                {item.q}
              </button>
              {openFaq === idx && (
                <p className="mt-2 text-xs leading-relaxed text-[#475569]">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl bg-white p-4 shadow-sm">
        <h2 className="mb-2 text-sm font-extrabold text-[#0E3A47]">Resumo da Anamnese</h2>
        <div className="grid grid-cols-2 gap-2 text-xs text-[#475569]">
          <span>Nome: <strong>{funnel.name || '—'}</strong></span>
          <span>Idade: <strong>{funnel.exactAge ?? '—'} anos</strong></span>
          <span>Altura: <strong>{funnel.heightCm ?? '—'} cm</strong></span>
          <span>Peso atual: <strong>{funnel.currentWeightKg ?? '—'} kg</strong></span>
          <span>Meta: <strong>{funnel.targetWeightKg ?? '—'} kg</strong></span>
          <span>Protocolo: <strong>{app.protocol}</strong></span>
        </div>
        <div className="mt-3 flex gap-2">
          {(['14:10', '16:8', '18:6', '20:4'] as Protocol[]).map((p) => (
            <button
              key={p}
              onClick={() => setApp({ protocol: p })}
              className={`flex-1 rounded-lg py-1.5 text-xs font-bold ${
                app.protocol === p ? 'bg-[#10B981] text-white' : 'bg-slate-100 text-[#0E3A47]'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={reset}
        className="flex items-center justify-center gap-2 rounded-full border border-red-200 bg-white py-3 text-xs font-bold text-red-600"
      >
        <RotateCcw size={15} /> Reiniciar Funil (Demo)
      </button>
    </div>
  );
}
