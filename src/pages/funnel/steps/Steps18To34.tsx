import { useEffect, useRef, useState } from 'react';
import { Check, Lock, Mail } from 'lucide-react';
import { CTAButton } from '../../../components/CTAButton';
import { OptionCard } from '../../../components/OptionCard';
import { SingleChoiceStep } from '../../../components/SingleChoiceStep';
import { UnitToggle } from '../../../components/UnitToggle';
import { WeightCurveChart } from '../../../components/WeightCurveChart';
import {
  BMI_LABEL,
  bmiCategory,
  calcBmi,
  cmToIn,
  formatDatePtBr,
  genderTerms,
  idealWeight,
  inToCm,
  kgToLb,
  lbToKg,
  targetDate,
  weeksToGoal,
  type BmiCategory,
} from '../../../engine/calculations';
import { useBestMeStore } from '../../../store/useBestMeStore';

const BMI_ALERT: Record<BmiCategory, string> = {
  abaixo: 'border-sky-300 bg-sky-50 text-sky-900',
  normal: 'border-emerald-300 bg-emerald-50 text-emerald-900',
  sobrepeso: 'border-orange-300 bg-[#FFF7ED] text-orange-950',
  obesidade: 'border-red-300 bg-[#FEF2F2] text-red-950',
};

const WALKING_LABELS = [
  'Menos de 20 minutos',
  '20 a 40 minutos',
  'Até 1 hora',
  '1 a 2 horas',
  '2 horas ou mais',
];

export function Steps18To34() {
  const { step, funnel, setFunnel, next } = useBestMeStore();
  const terms = genderTerms(funnel.gender ?? 'mulher');
  const nome = funnel.name.trim() || 'amigo(a)';
  const heightCm = funnel.heightCm ?? 168;
  const currentKg = funnel.currentWeightKg ?? 75;
  const targetKg = funnel.targetWeightKg ?? 65;
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (step !== 33) return;
    setProgress(0);
    const start = performance.now();
    const id = window.setInterval(() => {
      const pct = Math.min(100, Math.round(((performance.now() - start) / 4000) * 100));
      setProgress(pct);
      if (pct >= 100) {
        window.clearInterval(id);
        window.setTimeout(next, 350);
      }
    }, 40);
    return () => window.clearInterval(id);
  }, [step, next]);

  useEffect(() => () => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
  }, [step]);

  const toggleMulti = (field: 'pastMethods' | 'healthConditions', item: string, noneLabel: string) => {
    const list = funnel[field];
    if (item === noneLabel) {
      setFunnel({ [field]: list.includes(noneLabel) ? [] : [noneLabel] });
      return;
    }
    const clean = list.filter((x) => x !== noneLabel);
    setFunnel({
      [field]: clean.includes(item) ? clean.filter((x) => x !== item) : [...clean, item],
    });
  };

  switch (step) {
    case 18: {
      const age = funnel.exactAge ?? 25;
      return (
        <div className="mt-6 flex flex-col gap-4">
          <p className="text-center text-sm font-medium text-[#475569]">Vamos aperfeiçoar seu plano!</p>
          <h1 className="bm-title">Quantos anos você tem?</h1>
          <div className="flex items-center justify-center gap-2 rounded-2xl bg-white p-5 shadow-sm">
            <input
              type="number"
              min={18}
              max={99}
              value={funnel.exactAge ?? ''}
              placeholder="25"
              onChange={(e) => setFunnel({ exactAge: e.target.value ? Number(e.target.value) : null })}
              className="w-24 border-b-2 border-[#10B981] text-center text-3xl font-extrabold text-[#0E3A47] outline-none"
            />
            <span className="text-lg font-semibold text-[#475569]">anos</span>
          </div>
          <CTAButton disabled={!age || age < 18 || age > 99} onClick={next}>
            Continuar
          </CTAButton>
        </div>
      );
    }

    case 19: {
      const isMetric = funnel.unitSystem === 'metric';
      const displayVal = funnel.heightCm
        ? Math.round(isMetric ? funnel.heightCm : cmToIn(funnel.heightCm))
        : '';
      return (
        <div className="mt-6 flex flex-col gap-4">
          <h1 className="bm-title">Qual é a sua altura?</h1>
          <UnitToggle value={funnel.unitSystem} onChange={(v) => setFunnel({ unitSystem: v })} />
          <div className="flex items-center justify-center gap-2 rounded-2xl bg-white p-5 shadow-sm">
            <input
              type="number"
              value={displayVal}
              placeholder={isMetric ? '168' : '66'}
              onChange={(e) => {
                const raw = Number(e.target.value);
                setFunnel({ heightCm: raw > 0 ? (isMetric ? raw : Math.round(inToCm(raw))) : null });
              }}
              className="w-28 border-b-2 border-[#10B981] text-center text-3xl font-extrabold text-[#0E3A47] outline-none"
            />
            <span className="text-lg font-semibold text-[#475569]">{isMetric ? 'cm' : 'in'}</span>
          </div>
          <CTAButton disabled={!funnel.heightCm || funnel.heightCm < 100 || funnel.heightCm > 240} onClick={next}>
            Continuar
          </CTAButton>
        </div>
      );
    }

    case 20: {
      const isMetric = funnel.unitSystem === 'metric';
      const displayVal = funnel.currentWeightKg
        ? Math.round(isMetric ? funnel.currentWeightKg : kgToLb(funnel.currentWeightKg))
        : '';
      const bmi = funnel.currentWeightKg ? calcBmi(funnel.currentWeightKg, heightCm) : null;
      const cat = bmi ? bmiCategory(bmi) : null;
      return (
        <div className="mt-6 flex flex-col gap-4">
          <h1 className="bm-title">Quanto você pesa agora?</h1>
          <UnitToggle value={funnel.unitSystem} onChange={(v) => setFunnel({ unitSystem: v })} />
          <div className="flex items-center justify-center gap-2 rounded-2xl bg-white p-5 shadow-sm">
            <input
              type="number"
              value={displayVal}
              placeholder={isMetric ? '75' : '165'}
              onChange={(e) => {
                const raw = Number(e.target.value);
                setFunnel({ currentWeightKg: raw > 0 ? (isMetric ? raw : Math.round(lbToKg(raw))) : null });
              }}
              className="w-28 border-b-2 border-[#10B981] text-center text-3xl font-extrabold text-[#0E3A47] outline-none"
            />
            <span className="text-lg font-semibold text-[#475569]">{isMetric ? 'kg' : 'lbs'}</span>
          </div>
          {bmi !== null && cat && (
            <div className={`rounded-2xl border p-4 text-sm leading-relaxed ${BMI_ALERT[cat]}`}>
              <p className="font-bold">
                📊 BMI: {bmi.toFixed(1)} — {BMI_LABEL[cat]}
              </p>
              <p className="mt-1">
                Seu IMC é <strong>{bmi.toFixed(1)}</strong>, o que coloca você na categoria de{' '}
                <strong>{BMI_LABEL[cat]}</strong>. Criaremos um plano personalizado que ajudará você
                a alcançar um peso saudável de forma fácil e rápida.
              </p>
            </div>
          )}
          <CTAButton disabled={!funnel.currentWeightKg || funnel.currentWeightKg < 35} onClick={next}>
            Continuar
          </CTAButton>
        </div>
      );
    }

    case 21: {
      const isMetric = funnel.unitSystem === 'metric';
      const { ideal, min, max } = idealWeight(heightCm);
      const displayVal = funnel.targetWeightKg
        ? Math.round(isMetric ? funnel.targetWeightKg : kgToLb(funnel.targetWeightKg))
        : '';
      return (
        <div className="mt-6 flex flex-col gap-4">
          <h1 className="bm-title">Qual é o seu peso desejado?</h1>
          <div className="rounded-2xl border border-[#10B981]/30 bg-white p-4 text-sm text-[#0E3A47] shadow-sm">
            🎯 Peso ideal sugerido: <strong>{ideal} kg</strong>. Vamos definir uma meta que faça
            você se sentir bem e saudável, entre <strong>{min}–{max} kg</strong>. Você consegue!
          </div>
          <UnitToggle value={funnel.unitSystem} onChange={(v) => setFunnel({ unitSystem: v })} />
          <div className="flex items-center justify-center gap-2 rounded-2xl bg-white p-5 shadow-sm">
            <input
              type="number"
              value={displayVal}
              placeholder={String(isMetric ? ideal : Math.round(kgToLb(ideal)))}
              onChange={(e) => {
                const raw = Number(e.target.value);
                setFunnel({ targetWeightKg: raw > 0 ? (isMetric ? raw : Math.round(lbToKg(raw))) : null });
              }}
              className="w-28 border-b-2 border-[#10B981] text-center text-3xl font-extrabold text-[#0E3A47] outline-none"
            />
            <span className="text-lg font-semibold text-[#475569]">{isMetric ? 'kg' : 'lbs'}</span>
          </div>
          <CTAButton disabled={!funnel.targetWeightKg || funnel.targetWeightKg < 35} onClick={next}>
            Continuar
          </CTAButton>
        </div>
      );
    }

    case 22: {
      const weeks = weeksToGoal(currentKg, targetKg, funnel.weeklyPace);
      const dateStr = formatDatePtBr(targetDate(weeks));
      return (
        <div className="mt-6 flex flex-col gap-4">
          <div className="rounded-2xl bg-white p-4 text-sm text-[#0E3A47] shadow-sm">
            🎯 {nome}, este é o seu calendário previsto de perda de peso. Ajuste seu ritmo abaixo
            para ver se você consegue atingir sua meta ainda mais rápido! 😊
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold text-[#475569]">Seu progresso previsto</p>
            <p className="text-xl font-extrabold text-[#10B981]">
              {targetKg} kg antes de {dateStr}
            </p>
          </div>
          <WeightCurveChart currentKg={currentKg} targetKg={targetKg} targetDateLabel={dateStr} />
          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <div className="text-center">
              <strong className="text-lg text-[#0E3A47]">{funnel.weeklyPace.toFixed(1)} kg/semana</strong>
              <p className="text-xs text-[#64748B]">Ritmo de perda de peso recomendado</p>
            </div>
            <input
              type="range"
              min={0.5}
              max={1.5}
              step={0.1}
              value={funnel.weeklyPace}
              onChange={(e) => setFunnel({ weeklyPace: Number(e.target.value) })}
              className="mt-3 w-full accent-[#10B981]"
            />
            <div className="mt-1 flex justify-between text-xs text-[#64748B]">
              <span>Ritmo mais lento</span>
              <span>Ritmo mais rápido</span>
            </div>
          </div>
          <CTAButton onClick={next}>Continuar</CTAButton>
        </div>
      );
    }

    case 23:
      return (
        <div className="mt-6 flex flex-col gap-4">
          <h1 className="bm-title">Uma entre tantas histórias de sucesso</h1>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-white p-4 text-center shadow-sm">
              <div className="text-4xl">🧍🏻‍♀️</div>
              <span className="mt-2 inline-block rounded-full bg-slate-100 px-3 py-0.5 text-xs font-bold">
                Antes
              </span>
            </div>
            <div className="rounded-2xl border-2 border-[#10B981] bg-white p-4 text-center shadow-sm">
              <div className="text-4xl">💃🏻</div>
              <span className="mt-2 inline-block rounded-full bg-[#ECFDF5] px-3 py-0.5 text-xs font-bold text-[#10B981]">
                Depois
              </span>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <h2 className="text-lg font-extrabold text-[#10B981]">Perdeu 15 kg em 3 meses</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#475569]">
              “Comecei a perder peso já na primeira semana. Meus níveis de energia também
              aumentaram. Antes usava tamanho GG e agora uso M. Finalmente me sinto uma pessoa
              nova.” — <strong className="text-[#0E3A47]">Janis D.</strong>
            </p>
          </div>
          <CTAButton onClick={next}>Continuar</CTAButton>
        </div>
      );

    case 24: {
      const idx = Math.max(0, WALKING_LABELS.indexOf(funnel.walking || 'Até 1 hora'));
      return (
        <div className="mt-6 flex flex-col gap-4">
          <h1 className="bm-title">Quanto tempo você dedica em média para caminhar por dia?</h1>
          <div className="rounded-2xl bg-white p-5 text-center shadow-sm">
            <div className="text-4xl">👣</div>
            <p className="mt-2 text-lg font-bold text-[#10B981]">{WALKING_LABELS[idx]}</p>
            <input
              type="range"
              min={0}
              max={WALKING_LABELS.length - 1}
              value={idx}
              onChange={(e) => setFunnel({ walking: WALKING_LABELS[Number(e.target.value)] })}
              className="mt-4 w-full accent-[#10B981]"
            />
            <div className="mt-1 flex justify-between text-xs text-[#64748B]">
              <span>Menos de 20 min</span>
              <span>2h ou mais</span>
            </div>
          </div>
          <CTAButton
            onClick={() => {
              if (!funnel.walking) setFunnel({ walking: 'Até 1 hora' });
              next();
            }}
          >
            Continuar
          </CTAButton>
        </div>
      );
    }

    case 25:
      return (
        <SingleChoiceStep
          title="Quanto você costuma dormir por noite?"
          subtitle="O jejum intermitente pode ajudar você a pegar no sono mais rápido e descansar mais"
          value={funnel.sleep}
          onSelect={(v) => setFunnel({ sleep: v })}
          onAdvance={next}
          options={[
            { value: 'mais_8', label: 'Mais de 8 horas', icon: '😴' },
            { value: '7_8', label: 'Entre 7 e 8 horas', icon: '😌' },
            { value: '5_6', label: 'Entre 5 e 6 horas', icon: '🥱' },
            { value: 'menos_5', label: 'Tenho problemas para dormir. Algumas noites durmo menos de 5 horas.', icon: '😩' },
          ]}
        />
      );

    case 26: {
      const methods = [
        'Não, não estou',
        'Dieta vegana ou vegetariana',
        'Dieta keto',
        'Jejum intermitente',
        'Dieta mediterrânea',
        'Jejum com água',
        'Suplementos para emagrecer',
        'Contagem de calorias',
        'Outro',
      ];
      return (
        <div className="mt-6 flex flex-col gap-4">
          <h1 className="bm-title">Você está tentando perder peso com algum destes métodos?</h1>
          <div className="flex flex-col gap-2.5">
            {methods.map((m) => (
              <OptionCard
                key={m}
                multi
                selected={funnel.pastMethods.includes(m)}
                onClick={() => toggleMulti('pastMethods', m, 'Não, não estou')}
              >
                {m}
              </OptionCard>
            ))}
          </div>
          <div className="sticky bottom-4 mt-2">
            <CTAButton disabled={funnel.pastMethods.length === 0} onClick={next}>
              Continuar
            </CTAButton>
          </div>
        </div>
      );
    }

    case 27: {
      const waterOpts = [
        { label: '1 copo ou menos', pct: 15 },
        { label: 'Entre 2 e 3 copos', pct: 35 },
        { label: 'Entre 4 e 5 copos', pct: 55 },
        { label: 'Entre 6 e 7 copos', pct: 80 },
        { label: 'Mais de 8 copos', pct: 100 },
      ];
      return (
        <div className="mt-6 flex flex-col gap-4">
          <h1 className="bm-title">Quantos copos de água você costuma beber por dia?</h1>
          <div className="flex flex-col gap-3">
            {waterOpts.map((w) => (
              <OptionCard
                key={w.label}
                selected={funnel.waterIntake === w.label}
                onClick={() => {
                  setFunnel({ waterIntake: w.label });
                  if (timerRef.current) window.clearTimeout(timerRef.current);
                  timerRef.current = window.setTimeout(next, 250);
                }}
              >
                <span className="flex items-center gap-3">
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-[#0E3A47]"
                    style={{
                      background: `conic-gradient(#0EA5E9 ${w.pct * 3.6}deg, #E2E8F0 0deg)`,
                    }}
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white">
                      💧
                    </span>
                  </span>
                  <span>{w.label}</span>
                </span>
              </OptionCard>
            ))}
          </div>
        </div>
      );
    }

    case 28:
      return (
        <SingleChoiceStep
          title="Com que frequência você consome bebidas açucaradas ou refrigerantes?"
          value={funnel.sugaryDrinks}
          onSelect={(v) => setFunnel({ sugaryDrinks: v })}
          onAdvance={next}
          options={[
            { value: 'todos_dias', label: 'Todos os dias' },
            { value: 'algumas_semana', label: 'Algumas vezes por semana' },
            { value: 'raramente', label: 'Raramente ou nunca' },
          ]}
        />
      );

    case 29:
      return (
        <SingleChoiceStep
          title="Você está tomando algum medicamento, suplemento ou vitamina?"
          value={funnel.takesMedication === null ? '' : funnel.takesMedication ? 'sim' : 'nao'}
          onSelect={(v) => setFunnel({ takesMedication: v === 'sim' })}
          onAdvance={next}
          options={[
            { value: 'sim', label: 'Sim' },
            { value: 'nao', label: 'Não' },
          ]}
        />
      );

    case 30: {
      const conditions = [
        'Diabetes (qualquer fase)',
        'Refluxo gastroesofágico',
        'Apneia do sono',
        'Hipertensão arterial',
        'Colesterol alto',
        'Doenças ou problemas cardíacos',
        'Doenças ou problemas renais',
        'Câncer',
        'Estou me recuperando de uma cirurgia',
        'Algo diferente',
        'Não, nenhum',
      ];
      return (
        <div className="mt-6 flex flex-col gap-4">
          <h1 className="bm-title">Você tem algum destes problemas de saúde?</h1>
          <p className="bm-subtitle">
            Temos o firme compromisso de tornar esta experiência o mais segura e saudável possível.
          </p>
          <div className="flex flex-col gap-2.5">
            {conditions.map((c) => (
              <OptionCard
                key={c}
                multi
                selected={funnel.healthConditions.includes(c)}
                onClick={() => toggleMulti('healthConditions', c, 'Não, nenhum')}
              >
                {c}
              </OptionCard>
            ))}
          </div>
          <div className="sticky bottom-4 mt-2">
            <CTAButton disabled={funnel.healthConditions.length === 0} onClick={next}>
              Continuar
            </CTAButton>
          </div>
        </div>
      );
    }

    case 31:
      return (
        <div className="mt-8 flex flex-col items-center gap-5 text-center">
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white text-5xl shadow-md">
            💚
          </div>
          <h1 className="bm-title">
            Obrigado por responder às nossas perguntas com sinceridade, {nome}!
          </h1>
          <p className="bm-subtitle">
            Conhecer seu estado de saúde nos ajuda a preparar um plano adaptado às suas necessidades.
            Não vamos perder o ritmo!
          </p>
          <div className="mt-4 w-full">
            <CTAButton onClick={next}>Continuar</CTAButton>
          </div>
        </div>
      );

    case 32: {
      const weeks = weeksToGoal(currentKg, targetKg, funnel.weeklyPace);
      const dateStr = formatDatePtBr(targetDate(weeks));
      return (
        <div className="mt-6 flex flex-col gap-4">
          <h1 className="bm-title">Boas notícias, você está no caminho certo! 🎉</h1>
          <p className="text-center text-lg font-extrabold text-[#10B981]">
            {targetKg} kg antes de {dateStr}
          </p>
          <WeightCurveChart currentKg={currentKg} targetKg={targetKg} targetDateLabel={dateStr} />
          <div className="rounded-2xl bg-white p-4 text-sm text-[#0E3A47] shadow-sm">
            🎯 Suas respostas mostram que você tem tudo {terms.pronto} para a mudança. Vamos ver
            como alcançar sua meta de forma segura e duradoura.
          </div>
          <CTAButton onClick={next}>Continuar</CTAButton>
        </div>
      );
    }

    case 33: {
      const age = funnel.exactAge ?? 25;
      const r = 46;
      const circ = 2 * Math.PI * r;
      const offset = circ * (1 - progress / 100);
      return (
        <div
          className="mt-4 flex flex-col items-center gap-5 rounded-3xl p-6 text-white shadow-lg"
          style={{ background: 'var(--gradient-loading)' }}
        >
          <div className="relative flex h-28 w-28 items-center justify-center">
            <svg width="112" height="112" className="-rotate-90">
              <circle cx="56" cy="56" r={r} fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="8" />
              <circle
                cx="56"
                cy="56"
                r={r}
                fill="none"
                stroke="#fff"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={circ}
                strokeDashoffset={offset}
              />
            </svg>
            <span className="absolute text-2xl font-extrabold">{progress}%</span>
          </div>
          <h1 className="text-center font-['Plus_Jakarta_Sans'] text-2xl font-extrabold">
            Estamos gerando seu plano de perda de peso personalizado
          </h1>
          <div className="w-full rounded-2xl bg-white p-5 text-[#0E3A47]">
            <p className="text-sm font-bold">
              Você está em melhor situação que <span className="text-[#10B981]">89%</span> dos{' '}
              {terms.pessoas} de <strong>{age} anos</strong> para perder peso com nosso plano de
              jejum intermitente
            </p>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-[#475569]">
              {[
                'De acordo com suas respostas, você poderá perder até 5 kg na primeira semana com nosso plano',
                '89% dos usuários com perfil similar ao seu alcançaram seus objetivos nos prazos previstos',
                'Seu perfil de peso e saúde é ideal para o jejum intermitente',
              ].map((txt) => (
                <li key={txt} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#10B981] text-white">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span>{txt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }

    case 34: {
      const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(funnel.email.trim());
      return (
        <div className="mt-6 flex flex-col items-center gap-4 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#10B981] shadow-sm">
            <Mail size={32} />
          </div>
          <h1 className="bm-title">
            {nome}, receba seu programa de perda de peso por e-mail e alcance sua meta de{' '}
            <em>{targetKg} kg</em>
          </h1>
          <input
            type="email"
            value={funnel.email}
            onChange={(e) => setFunnel({ email: e.target.value })}
            placeholder="Digite seu endereço de e-mail"
            className="w-full rounded-2xl border-2 border-[#E2E8F0] bg-white px-5 py-4 text-base font-medium text-[#0E3A47] outline-none focus:border-[#10B981]"
          />
          <p className="flex items-center gap-1.5 text-xs text-[#64748B]">
            <Lock size={14} /> Levamos sua privacidade muito a sério! Protegemos todos os seus dados.
          </p>
          <CTAButton disabled={!validEmail} onClick={next}>
            Continuar
          </CTAButton>
          <p className="text-xs text-[#64748B]">
            Ao continuar, você concorda com nossos{' '}
            <span className="underline">Termos de uso</span> e{' '}
            <span className="underline">Política de privacidade</span>.
          </p>
        </div>
      );
    }

    default:
      return null;
  }
}
