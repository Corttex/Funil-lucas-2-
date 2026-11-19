import { useState } from 'react';
import { Check, Search, X } from 'lucide-react';
import { DAILY_SUGGESTIONS, RECIPES, type Recipe } from '../../data/recipes';
import { useBestMeStore } from '../../store/useBestMeStore';

const FILTERS = ['Todas', '< 15 min', 'Rápidas', 'Detox', 'Low Carb'] as const;

export function NutritionTab() {
  const { app, setApp } = useBestMeStore();
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState<(typeof FILTERS)[number]>('Todas');
  const [selected, setSelected] = useState<Recipe | null>(null);

  const list = RECIPES.filter((r) => {
    const matchCat = cat === 'Todas' || r.category === cat;
    const matchQ =
      !query.trim() ||
      r.title.toLowerCase().includes(query.toLowerCase()) ||
      r.ingredients.some((i) => i.toLowerCase().includes(query.toLowerCase()));
    return matchCat && matchQ;
  });

  const toggleMeal = (id: string) => {
    const exists = app.meals.includes(id);
    setApp({ meals: exists ? app.meals : [...app.meals, id] });
    setSelected(null);
  };

  return (
    <div className="flex flex-col gap-5 pb-24 pt-2">
      <h1 className="text-xl font-extrabold text-[#0E3A47]">Nutrição & Receitas</h1>

      <div className="rounded-3xl bg-white p-4 shadow-sm">
        <h2 className="mb-3 text-sm font-extrabold text-[#0E3A47]">Sugestão do Dia</h2>
        <div className="flex flex-col gap-2.5">
          {DAILY_SUGGESTIONS.map((s) => (
            <div key={s.slot} className="flex items-center justify-between rounded-xl bg-[#F8FAFC] p-3">
              <div>
                <p className="text-[11px] font-bold text-[#10B981]">{s.slot}</p>
                <p className="text-xs font-bold text-[#0E3A47]">{s.title}</p>
              </div>
              <span className="text-xs font-bold text-[#64748B]">{s.kcal} kcal</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <Search size={16} className="absolute left-3.5 top-3.5 text-[#64748B]" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar por receita ou ingrediente..."
          className="w-full rounded-2xl border border-[#E2E8F0] bg-white py-2.5 pl-10 pr-4 text-sm outline-none focus:border-[#10B981]"
        />
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setCat(f)}
            className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-bold ${
              cat === f ? 'bg-[#10B981] text-white' : 'bg-white text-[#0E3A47]'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        {list.map((r) => {
          const done = app.meals.includes(r.id);
          return (
            <button
              key={r.id}
              onClick={() => setSelected(r)}
              className="bm-card flex w-full items-center justify-between text-left"
            >
              <div>
                <span className="text-[11px] font-bold text-[#10B981]">
                  {r.category} • {r.timeLabel}
                </span>
                <p className="text-sm font-bold text-[#0E3A47]">{r.title}</p>
                <p className="text-xs text-[#64748B]">{r.kcal} kcal</p>
              </div>
              {done && (
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#10B981] text-white">
                  <Check size={14} />
                </span>
              )}
            </button>
          );
        })}
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-[440px] rounded-3xl bg-white p-5 shadow-2xl">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-lg font-extrabold text-[#0E3A47]">{selected.title}</h3>
              <button onClick={() => setSelected(null)} className="text-[#64748B]">
                <X size={20} />
              </button>
            </div>
            <p className="mt-1 text-xs font-bold text-[#10B981]">
              {selected.timeLabel} • {selected.kcal} kcal
            </p>
            <h4 className="mt-4 text-xs font-extrabold uppercase text-[#64748B]">Ingredientes</h4>
            <ul className="mt-1 list-disc pl-5 text-sm text-[#0E3A47]">
              {selected.ingredients.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            <h4 className="mt-4 text-xs font-extrabold uppercase text-[#64748B]">Modo de preparo</h4>
            <ol className="mt-1 list-decimal pl-5 text-sm text-[#475569]">
              {selected.steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
            <button onClick={() => toggleMeal(selected.id)} className="bm-cta mt-5">
              Registrar Refeição
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
