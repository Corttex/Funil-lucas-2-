import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { Check, Lock, Star, TrendingDown } from 'lucide-react';
import { CTAButton } from '../../../components/CTAButton';
import { ScratchCard } from '../../../components/ScratchCard';
import { SignatureCanvas } from '../../../components/SignatureCanvas';
import { WeightCurveChart } from '../../../components/WeightCurveChart';
import { AVATARS } from '../../../data/avatars';
import {
  calcBmi,
  formatDatePtBr,
  genderTerms,
  targetDate,
  weeksToGoal,
} from '../../../engine/calculations';
import { useBestMeStore } from '../../../store/useBestMeStore';
import { CheckoutModal } from '../CheckoutModal';

export function Steps35To47() {
  const { step, funnel, setFunnel, next } = useBestMeStore();
  const terms = genderTerms(funnel.gender ?? 'mulher');
  const nome = funnel.name.trim() || 'amigo(a)';
  const heightCm = funnel.heightCm ?? 168;
  const currentKg = funnel.currentWeightKg ?? 75;
  const targetKg = funnel.targetWeightKg ?? 65;
  const deltaKg = Math.max(1, Math.round(currentKg - targetKg));
  const currentBmi = calcBmi(currentKg, heightCm);
  const targetBmi = calcBmi(targetKg, heightCm);
  const dateStr = formatDatePtBr(targetDate(weeksToGoal(currentKg, targetKg, funnel.weeklyPace)));

  const [offerSeconds, setOfferSeconds] = useState(179);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  useEffect(() => {
    if (step !== 38) return;
    confetti({ particleCount: 120, spread: 90, origin: { y: 0.55 } });
    const id = window.setTimeout(next, 2500);
    return () => window.clearTimeout(id);
  }, [step, next]);

  useEffect(() => {
    if (step !== 46) return;
    const id = window.setInterval(() => {
      setOfferSeconds((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => window.clearInterval(id);
  }, [step]);

  const mm = String(Math.floor(offerSeconds / 60)).padStart(2, '0');
  const ss = String(offerSeconds % 60).padStart(2, '0');

  if (step >= 35 && step <= 37) {
    const prompts: Record<number, { q: string; img: string }> = {
      35: { q: 'Você quer se sentir bem com o que veste?', img: AVATARS.microCommitments[35] },
      36: { q: 'Você quer ter mais energia no seu dia a dia?', img: AVATARS.microCommitments[36] },
      37: { q: 'Você quer desenvolver novos hábitos saudáveis?', img: AVATARS.microCommitments[37] },
    };
    const item = prompts[step];
    return (
      <div className="mt-8 flex flex-col items-center gap-6 text-center">
        <img
          src={item.img}
          alt={item.q}
          className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-md"
        />
        <h1 className="bm-title">{item.q}</h1>
        <div className="mt-4 grid w-full grid-cols-2 gap-3">
          <button
            onClick={next}
            className="rounded-full border border-[#E2E8F0] bg-white py-4 font-bold text-[#0E3A47] shadow-sm"
          >
            Não
          </button>
          <CTAButton onClick={next}>Sim! Vamos lá!</CTAButton>
        </div>
      </div>
    );
  }

  if (step === 38) {
    return (
      <div className="mt-20 flex flex-col items-center gap-4 text-center">
        <div className="text-6xl">🎉</div>
        <h1 className="bm-title">Incrível! Tudo está a seu favor.</h1>
      </div>
    );
  }

  if (step === 39) {
    const checks = [
      'Alcançarei meu objetivo de perda de peso!',
      'Irei com confiança e energia!',
      'Desenvolverei hábitos saudáveis!',
      'Me sentirei melhor a cada dia!',
    ];
    return (
      <div className="mt-6 flex flex-col gap-4">
        <h1 className="bm-title">É hora de tornar isso oficial, {nome}!</h1>
        <div className="rounded-2xl bg-white p-4 shadow-sm">
          <ul className="flex flex-col gap-2.5 text-sm font-semibold text-[#0E3A47]">
            {checks.map((c) => (
              <li key={c} className="flex items-center gap-2.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#10B981] text-white">
                  <Check size={12} strokeWidth={3} />
                </span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
        <SignatureCanvas onChange={(sig) => setFunnel({ signature: sig })} />
        <p className="flex items-center justify-center gap-1 text-xs text-[#64748B]">
          <Lock size={13} /> Sua assinatura não fica salva
        </p>
        <CTAButton disabled={!funnel.signature} onClick={next}>
          Continuar
        </CTAButton>
      </div>
    );
  }

  if (step >= 40 && step <= 44) {
    const slideIdx = step - 40;
    const SegmentedBar = (
      <div className="mt-3 grid grid-cols-5 gap-1.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full ${i <= slideIdx ? 'bg-[#10B981]' : 'bg-[#CBD5E1]'}`}
          />
        ))}
      </div>
    );

    if (step === 40) {
      return (
        <div className="mt-4 flex flex-col gap-4">
          {SegmentedBar}
          <span className="self-center rounded-full bg-[#ECFDF5] px-3 py-1 text-xs font-extrabold text-[#10B981]">
            É INCRÍVEL
          </span>
          <h1 className="bm-title">
            {nome}, segundo seus resultados, você pode perder <em>8 kg em 1 mês</em>
          </h1>
          <WeightCurveChart currentKg={currentKg} targetKg={targetKg} targetDateLabel={dateStr} />
          <div className="rounded-2xl bg-white p-4 text-sm text-[#0E3A47] shadow-sm">
            😲 Você poderia perder peso <strong>89% mais rápido</strong> que a maioria dos{' '}
            {terms.pessoas} de <strong>{funnel.exactAge ?? 25} anos</strong>!
          </div>
          <CTAButton onClick={next}>Próximo</CTAButton>
        </div>
      );
    }

    if (step === 41) {
      const pct = Math.min(95, Math.max(5, ((targetBmi - 15) / (35 - 15)) * 100));
      return (
        <div className="mt-4 flex flex-col gap-4">
          {SegmentedBar}
          <h1 className="bm-title">
            Você alcançará um <em>IMC mais saudável</em>
          </h1>
          <p className="bm-subtitle">
            Isso afeta sua aparência e como você se sente todos os dias
          </p>
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-center text-sm font-bold text-[#0E3A47]">
              IMC alcançado: <span className="text-xl text-[#10B981]">{targetBmi.toFixed(1)}</span>
            </p>
            <div className="relative mt-6 h-3 rounded-full bg-gradient-to-r from-sky-400 via-emerald-400 via-amber-400 to-red-500">
              <div
                style={{ left: `${pct}%` }}
                className="absolute -top-2 h-7 w-1.5 -translate-x-1/2 rounded-full bg-[#0E3A47]"
              />
            </div>
            <div className="mt-2 flex justify-between text-xs text-[#64748B]">
              <span>15 (Normal)</span>
              <span>25</span>
              <span>35 (Obeso)</span>
            </div>
            <div className="mt-3 text-center">
              <span className="rounded-full bg-[#ECFDF5] px-3 py-1 text-xs font-bold text-[#10B981]">
                Seu novo IMC
              </span>
            </div>
          </div>
          <CTAButton onClick={next}>Próximo</CTAButton>
        </div>
      );
    }

    if (step === 42) {
      const gains = [
        'Eficiência metabólica melhorada',
        'Controle natural da ingestão calórica',
        'Queima de gordura melhorada',
        'Níveis de energia melhorados',
      ];
      return (
        <div className="mt-4 flex flex-col gap-4">
          {SegmentedBar}
          <h1 className="bm-title">
            E verá múltiplas melhorias <em>imediatamente</em>
          </h1>
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <ul className="flex flex-col gap-3 text-sm font-semibold text-[#0E3A47]">
              {gains.map((g) => (
                <li key={g} className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#10B981] text-white">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-[#FDBA74] bg-[#FFF7ED] p-4 text-center text-sm font-bold text-[#0E3A47]">
            🔥 Você pode <strong>perder 5 kg</strong> durante a <strong>primeira semana</strong>!
          </div>
          <CTAButton onClick={next}>Próximo</CTAButton>
        </div>
      );
    }

    if (step === 43) {
      const drops = [
        'Redução do risco de diabetes',
        'Redução do colesterol "ruim"',
        'Redução do estresse oxidativo',
      ];
      return (
        <div className="mt-4 flex flex-col gap-4">
          {SegmentedBar}
          <h1 className="bm-title">
            Com seu plano, você receberá a <em>nutrição que seu corpo precisa</em>
          </h1>
          <p className="bm-subtitle">Com o Jejum Leve seus benefícios são:</p>
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <ul className="flex flex-col gap-3.5 text-sm font-semibold text-[#0E3A47]">
              {drops.map((d) => (
                <li key={d} className="flex items-center gap-3">
                  <TrendingDown className="text-[#10B981]" size={20} />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <CTAButton onClick={next}>Próximo</CTAButton>
        </div>
      );
    }

    return (
      <div className="mt-4 flex flex-col gap-4">
        {SegmentedBar}
        <h1 className="bm-title">
          Sua história de sucesso <em>começa agora</em>
        </h1>
        <p className="bm-subtitle">
          Todos os dias, mais de 85.000 {terms.pessoas} na faixa dos {funnel.exactAge ?? 25} anos{' '}
          <strong>perdem peso</strong> e <strong>se sentem melhor</strong> conosco, {nome}!
        </p>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {[
            { author: 'Agris I.', text: 'Em 4 semanas já vi diferença enorme na cintura.' },
            { author: 'Petras M.', text: 'Simples de seguir e sem passar fome.' },
          ].map((r) => (
            <div key={r.author} className="min-w-[230px] rounded-2xl bg-white p-4 shadow-sm">
              <div className="flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="mt-2 text-xs text-[#475569]">{r.text}</p>
              <strong className="mt-2 block text-xs text-[#0E3A47]">{r.author}</strong>
            </div>
          ))}
        </div>
        <div className="rounded-2xl bg-white p-4 text-center shadow-sm">
          <p className="text-sm font-bold text-[#0E3A47]">Nossas nutricionistas</p>
          <div className="mt-3 flex justify-center gap-5">
            {[
              { name: 'Elina', img: AVATARS.nutritionists.Elina },
              { name: 'Anna', img: AVATARS.nutritionists.Anna },
              { name: 'Simona', img: AVATARS.nutritionists.Simona },
            ].map((n) => (
              <div key={n.name} className="flex flex-col items-center gap-1">
                <img
                  src={n.img}
                  alt={n.name}
                  className="h-14 w-14 rounded-full border-2 border-[#10B981] object-cover shadow-sm"
                />
                <span className="text-xs font-semibold text-[#475569]">{n.name}</span>
              </div>
            ))}
          </div>
        </div>
        <CTAButton onClick={next}>Conseguir meu plano de perda de peso</CTAButton>
      </div>
    );
  }

  if (step === 45) {
    return (
      <div className="mt-6 flex flex-col gap-5 text-center">
        <h1 className="bm-title">Descubra seu desconto!</h1>
        <p className="bm-subtitle">
          Valorizamos muito o seu esforço e preparamos um{' '}
          <strong>desconto especial por tempo limitado!</strong>
        </p>
        <ScratchCard onComplete={next} />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5 pb-10">
      <div className="sticky top-0 z-20 -mx-4 flex items-center justify-between border-b border-[#FDBA74] bg-[#FFF7ED] px-4 py-2.5">
        <span className="text-xs font-bold text-[#0E3A47]">
          DESCONTO DE 70% ativo: <strong className="text-[#EF4444]">{mm}:{ss}</strong>
        </span>
        <button
          onClick={() => setCheckoutOpen(true)}
          className="rounded-full bg-[#0284C7] px-3.5 py-1.5 text-xs font-bold text-white"
        >
          Obter meu plano
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 rounded-2xl bg-white p-4 shadow-sm">
        <div className="text-center">
          <p className="text-xs font-bold text-[#64748B]">Você hoje</p>
          <img
            src={
              funnel.gender === 'homem'
                ? AVATARS.paywall.todayHomem
                : AVATARS.paywall.todayMulher
            }
            alt="Você hoje"
            className="mx-auto my-2 h-28 w-28 rounded-2xl object-cover"
          />
          <p className="text-xs font-bold">Peso: {currentKg} kg</p>
          <p className="text-xs text-[#64748B]">IMC: {currentBmi.toFixed(1)}</p>
          <div className="mt-2 flex justify-center gap-1">
            {[1, 2, 3, 4, 5].map((n) => (
              <span key={n} className={`h-1.5 w-4 rounded ${n <= 2 ? 'bg-amber-400' : 'bg-slate-200'}`} />
            ))}
          </div>
        </div>
        <div className="border-l border-slate-100 pl-3 text-center">
          <p className="text-xs font-bold text-[#10B981]">Você em {dateStr}</p>
          <img
            src={
              funnel.gender === 'homem'
                ? AVATARS.paywall.goalHomem
                : AVATARS.paywall.goalMulher
            }
            alt="Você na meta"
            className="mx-auto my-2 h-28 w-28 rounded-2xl border-2 border-[#10B981] object-cover"
          />
          <p className="text-xs font-bold text-[#10B981]">Meta: {targetKg} kg</p>
          <p className="text-xs text-[#64748B]">IMC: {targetBmi.toFixed(1)}</p>
          <div className="mt-2 flex justify-center gap-1">
            {[1, 2, 3, 4, 5].map((n) => (
              <span key={n} className="h-1.5 w-4 rounded bg-[#10B981]" />
            ))}
          </div>
        </div>
      </div>

      <h1 className="bm-title">Solicite já o seu plano de perda de peso!</h1>

      <div className="flex items-center justify-between rounded-2xl border border-[#10B981] bg-[#ECFDF5] p-3.5 text-xs font-bold text-[#0E3A47]">
        <span>🏷️ ✓ DESCONTO70_HOJE</span>
        <span className="text-[#10B981]">{mm} min : {ss} seg</span>
      </div>

      <div className="flex flex-col gap-3">
        {[
          {
            id: '1_month' as const,
            title: 'Plano de 1 mês',
            old: 'R$ 99,00',
            price: 'R$ 39,90',
            perDay: 'R$ 1,33/dia',
            badge: '60% OFF',
          },
          {
            id: '4_months' as const,
            title: `Plano de perda de ${deltaKg} kg (4 meses)`,
            old: 'R$ 329,00',
            price: 'R$ 97,00',
            perDay: 'R$ 0,80/dia',
            badge: `JEJUM DE 4 MESES PARA ${nome.toUpperCase()}`,
          },
          {
            id: 'lifetime' as const,
            title: 'Plano de perda de peso vitalício',
            old: 'R$ 499,00',
            price: 'R$ 297,00',
            perDay: 'Para toda a vida',
            badge: 'MAIS COMPLETO',
          },
        ].map((p) => {
          const sel = funnel.selectedPlan === p.id;
          return (
            <button
              key={p.id}
              onClick={() => setFunnel({ selectedPlan: p.id })}
              className={`bm-card flex flex-col gap-1 text-left ${sel ? 'selected' : ''}`}
            >
              <span className="self-start rounded-full bg-[#10B981] px-2.5 py-0.5 text-[10px] font-extrabold text-white">
                {p.badge}
              </span>
              <div className="mt-1 flex w-full items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-[#0E3A47]">{p.title}</p>
                  <p className="text-xs text-[#64748B] line-through">{p.old}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-extrabold text-[#10B981]">{p.price}</p>
                  <p className="text-[11px] text-[#475569]">{p.perDay}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <CTAButton onClick={() => setCheckoutOpen(true)}>Obter meu plano</CTAButton>

      <div className="rounded-2xl border border-amber-300 bg-amber-50 p-4 text-center text-sm text-[#0E3A47]">
        🏆 <strong>Sua chance de ganhar R$ 10.000</strong> — Concurso anual de transformação (2.431 participantes).
      </div>

      <div className="flex items-center justify-center gap-3 rounded-2xl bg-white p-4 text-sm font-bold text-[#0E3A47] shadow-sm">
        <span className="rounded-full bg-[#0284C7] px-2.5 py-1 text-xs text-white">100%</span>
        <span>Garantia de reembolso de 30 dias</span>
      </div>

      <div className="rounded-2xl bg-white p-5 shadow-sm">
        <h2 className="mb-3 text-base font-extrabold text-[#0E3A47]">O que está incluído?</h2>
        <ul className="flex flex-col gap-2.5 text-sm text-[#475569]">
          {[
            'Plano de perda de peso sob medida',
            'Mais de 600 receitas deliciosas e saudáveis',
            'Temporizador de jejum intermitente em tempo real',
            'Dicas práticas para acelerar o metabolismo',
            'Apoio exclusivo de nossas nutricionistas formadas',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <Check size={16} className="mt-0.5 shrink-0 text-[#10B981]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl bg-white p-4 text-sm shadow-sm">
        <div className="flex items-center gap-3">
          <img
            src={AVATARS.paywall.ramon}
            alt="Ramón R."
            className="h-11 w-11 rounded-full object-cover"
          />
          <p className="font-bold text-[#10B981]">Ramón R. — Perdeu 20 kg em 4 meses</p>
        </div>
        <div className="mt-3 flex items-center gap-3 border-t border-slate-100 pt-3">
          <img
            src={AVATARS.paywall.juana}
            alt="Juana F."
            className="h-10 w-10 rounded-full object-cover"
          />
          <p className="text-xs text-[#475569]">
            <strong>Juana F.:</strong> “Emagreci 14 kg. Tudo graças ao plano personalizado!” ❤️ 44
          </p>
        </div>
        <p className="mt-3 text-center text-base font-extrabold text-[#0E3A47]">💪 +500.000 💪</p>
      </div>

      <CTAButton onClick={() => setCheckoutOpen(true)}>Obter meu plano</CTAButton>

      <CheckoutModal open={checkoutOpen} onClose={() => setCheckoutOpen(false)} />
    </div>
  );
}
