import { useEffect, useRef } from 'react';
import { Award, Check, Star, User } from 'lucide-react';
import { CTAButton } from '../../../components/CTAButton';
import { OptionCard } from '../../../components/OptionCard';
import { SingleChoiceStep } from '../../../components/SingleChoiceStep';
import { genderTerms, type Gender } from '../../../engine/calculations';
import { useBestMeStore } from '../../../store/useBestMeStore';

function BodySilhouette({ type }: { type: string }) {
  const paths: Record<string, string> = {
    Oval: 'M20 8c6 0 10 8 10 18s-4 18-10 18-10-8-10-18 4-18 10-18z',
    Ampulheta: 'M12 8h16l-5 16 5 18H12l5-18-5-16z',
    Retângulo: 'M13 8h14v34H13V8z',
    Triângulo: 'M16 8h8l6 34H10L16 8z',
    'Triângulo invertido': 'M10 8h20l-6 34h-8L10 8z',
    'Não tenho certeza': 'M20 12a6 6 0 100 12v4m0 6h.01',
  };
  const isQuestion = type === 'Não tenho certeza';
  return (
    <svg width="36" height="44" viewBox="0 0 40 50" className="shrink-0 text-[#10B981]">
      <path
        d={paths[type] ?? paths.Retângulo}
        fill={isQuestion ? 'none' : '#CCFBF1'}
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Steps0To17() {
  const { step, funnel, setFunnel, next, setApp } = useBestMeStore();
  const gender: Gender = funnel.gender ?? 'mulher';
  const terms = genderTerms(gender);
  const nome = funnel.name.trim() || 'amigo(a)';
  const autoTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (autoTimer.current) window.clearTimeout(autoTimer.current);
    };
  }, [step]);

  const selectAndAdvance = (patch: Parameters<typeof setFunnel>[0]) => {
    setFunnel(patch);
    if (autoTimer.current) window.clearTimeout(autoTimer.current);
    autoTimer.current = window.setTimeout(next, 250);
  };

  switch (step) {
    case 0:
      return (
        <div className="flex flex-col items-center">
          <header className="flex h-16 w-full items-center justify-between">
            <span className="w-8" />
            <strong style={{ fontFamily: 'var(--font-title)', fontSize: 20 }}>
              Best <span className="rounded-md bg-[#10B981] px-1.5 py-0.5 text-white">Me</span> Fasting
            </strong>
            <button
              title="Entrar no App (Demo)"
              onClick={() => setApp({ isPaid: true })}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0E3A47] shadow-sm"
            >
              <User size={18} />
            </button>
          </header>

          <h1 className="bm-title mt-4">
            <em>Perca peso</em> introduzindo pequenas mudanças
          </h1>

          <div className="mt-5 flex items-center gap-2 rounded-full border border-[#FDBA74] bg-white px-5 py-2 shadow-sm">
            <Award size={18} className="text-[#10B981]" />
            <div className="text-center leading-tight">
              <div className="flex items-center justify-center gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={13} fill="currentColor" />
                ))}
              </div>
              <p className="text-xs font-bold text-[#0E3A47]">
                500 mil <span className="font-normal text-[#475569]">usuários satisfeitos</span>
              </p>
            </div>
            <Award size={18} className="text-[#10B981]" />
          </div>

          <p className="bm-subtitle mt-6 font-semibold text-[#0E3A47]">Selecione seu sexo</p>

          <div className="mt-4 grid w-full grid-cols-2 gap-4">
            {([
              { id: 'mulher', label: 'Mulher', emoji: '👩🏻' },
              { id: 'homem', label: 'Homem', emoji: '👨🏻' },
            ] as const).map((item) => (
              <button
                key={item.id}
                onClick={() => selectAndAdvance({ gender: item.id })}
                className={`bm-card flex flex-col items-center justify-center gap-3 py-6 ${
                  funnel.gender === item.id ? 'selected' : ''
                }`}
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#E6F7F4] text-5xl">
                  {item.emoji}
                </div>
                <span className="text-base font-bold text-[#0E3A47]">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      );

    case 1:
      return (
        <div className="mt-6 flex flex-col gap-4">
          <h1 className="bm-title">
            <em>Perca peso</em> introduzindo pequenas mudanças
          </h1>
          <p className="bm-subtitle">Adapte seu plano de perda de peso à sua idade</p>
          <div className="mt-2 grid grid-cols-2 gap-3">
            {[
              { label: 'Entre 18 e 26', emoji: gender === 'mulher' ? '🧑🏻‍♀️' : '🧑🏻' },
              { label: 'Entre 27 e 38', emoji: gender === 'mulher' ? '👩🏻' : '👨🏻' },
              { label: 'Entre 39 e 50', emoji: gender === 'mulher' ? '👩🏽' : '👨🏽' },
              { label: 'Mais de 50', emoji: gender === 'mulher' ? '👵🏻' : '👴🏻' },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => selectAndAdvance({ ageRange: item.label })}
                className={`bm-card flex flex-col items-center gap-2 py-5 ${
                  funnel.ageRange === item.label ? 'selected' : ''
                }`}
              >
                <span className="text-4xl">{item.emoji}</span>
                <span className="text-sm font-bold">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      );

    case 2: {
      const options = [
        'Perder peso',
        'Melhorar minha saúde em geral',
        'Conseguir um corpo firme e tonificado',
        'Livrar-me do estresse',
      ];
      const toggle = (item: string) => {
        const exists = funnel.objectives.includes(item);
        setFunnel({
          objectives: exists
            ? funnel.objectives.filter((o) => o !== item)
            : [...funnel.objectives, item],
        });
      };
      return (
        <div className="mt-6 flex flex-col gap-4">
          <h1 className="bm-title">O que você se propôs a conseguir?</h1>
          <div className="flex flex-col gap-3">
            {options.map((opt) => (
              <OptionCard
                key={opt}
                multi
                selected={funnel.objectives.includes(opt)}
                onClick={() => toggle(opt)}
              >
                {opt}
              </OptionCard>
            ))}
          </div>
          <div className="sticky bottom-4 mt-4">
            <CTAButton disabled={funnel.objectives.length === 0} onClick={next}>
              Continuar
            </CTAButton>
          </div>
        </div>
      );
    }

    case 3:
      return (
        <div className="mt-6 flex flex-col gap-5">
          <h1 className="bm-title">Você chegou ao lugar certo!</h1>
          <p className="text-center text-lg font-bold text-[#0E3A47]">
            94% dos nossos usuários perdem peso nos primeiros 5 dias
          </p>
          <div className="rounded-2xl border-2 border-[#FDBA74] bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <strong className="text-[#0E3A47]">Reinis R.</strong>
              <div className="flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[#475569]">
              “Mudou a minha vida! Me sinto em forma, durmo melhor e consigo me concentrar mais no
              trabalho. Queria ter encontrado antes.”
            </p>
          </div>
          <CTAButton onClick={next}>Continuar</CTAButton>
        </div>
      );

    case 4:
      return (
        <div className="mt-6 flex flex-col gap-4">
          <p className="text-center text-sm font-medium text-[#475569]">
            Adoraríamos conhecer você! 😊
          </p>
          <h1 className="bm-title">Como você quer que a gente te chame?</h1>
          <input
            type="text"
            value={funnel.name}
            onChange={(e) => setFunnel({ name: e.target.value })}
            placeholder="Nome"
            className="mt-2 w-full rounded-2xl border-2 border-[#E2E8F0] bg-white px-5 py-4 text-lg font-semibold text-[#0E3A47] outline-none focus:border-[#10B981]"
          />
          <div className="mt-4">
            <CTAButton disabled={funnel.name.trim().length < 2} onClick={next}>
              Continuar
            </CTAButton>
          </div>
        </div>
      );

    case 5: {
      const shapes = [
        'Oval',
        'Ampulheta',
        'Retângulo',
        'Triângulo',
        'Triângulo invertido',
        'Não tenho certeza',
      ];
      return (
        <div className="mt-6 flex flex-col gap-4">
          <p className="text-center text-sm font-medium text-[#475569]">
            É um prazer conhecer você, {nome}!
          </p>
          <h1 className="bm-title">Como você descreveria o formato do seu corpo agora mesmo?</h1>
          <div className="flex flex-col gap-3">
            {shapes.map((shape) => (
              <button
                key={shape}
                onClick={() => selectAndAdvance({ bodyType: shape })}
                className={`bm-card flex w-full items-center justify-between ${
                  funnel.bodyType === shape ? 'selected' : ''
                }`}
              >
                <span>{shape}</span>
                <BodySilhouette type={shape} />
              </button>
            ))}
          </div>
        </div>
      );
    }

    case 6:
      return (
        <SingleChoiceStep
          title={`Quão ${terms.familiarizado} você está com o jejum intermitente com água?`}
          value={funnel.fastingExperience}
          onSelect={(v) => setFunnel({ fastingExperience: v })}
          onAdvance={next}
          options={[
            { value: 'experimentei', label: 'Já experimentei', icon: '😊' },
            { value: 'ouvi_falar', label: 'Já ouvi falar alguma coisa', icon: '👀' },
            { value: 'nao_conheco', label: 'Não conheço', icon: '😲' },
          ]}
        />
      );

    case 7: {
      const benefits = [
        'Níveis equilibrados de açúcar no sangue e energia',
        'Melhora do humor e da clareza mental',
        'Crescimento sustentado de novas células nervosas',
        'Redução do colesterol "ruim"',
        'Redução do risco de inflamação',
        'E muitas outras melhorias',
      ];
      return (
        <div className="mt-6 flex flex-col gap-4">
          <h1 className="bm-title">Ajudaremos você a alcançar melhor seus objetivos de jejum.</h1>
          <p className="bm-subtitle">
            {nome}, mais de <strong>85.000 {terms.pessoas}</strong> como você perdem peso conosco
            todos os dias!
          </p>
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <h2 className="mb-3 text-base font-bold text-[#0E3A47]">Vantagens para você:</h2>
            <ul className="flex flex-col gap-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm font-medium text-[#0E3A47]">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#10B981] text-white">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <CTAButton onClick={next}>Continuar</CTAButton>
        </div>
      );
    }

    case 8:
      return (
        <SingleChoiceStep
          title="A que horas você costuma sentir fome?"
          subtitle="Isso nos ajudará a personalizar seu plano"
          value={funnel.hungerTime}
          onSelect={(v) => setFunnel({ hungerTime: v })}
          onAdvance={next}
          options={[
            { value: 'manha', label: 'Pela manhã', icon: '⏰' },
            { value: 'tarde', label: 'À tarde', icon: '🕒' },
            { value: 'noite', label: 'À noite', icon: '🕒' },
            { value: 'sem_hora', label: 'Não é em uma hora específica do dia', icon: '⏳' },
          ]}
        />
      );

    case 9:
      return (
        <SingleChoiceStep
          microCopy="☕ Rotina matinal"
          title="A que horas você costuma tomar café da manhã?"
          value={funnel.mealTimes.breakfast}
          onSelect={(v) => setFunnel({ mealTimes: { ...funnel.mealTimes, breakfast: v } })}
          onAdvance={next}
          options={[
            { value: 'pulo', label: 'Costumo pular o café da manhã' },
            { value: '06_08', label: 'Entre 06:00 e 08:00 ou antes' },
            { value: '08_10', label: 'Entre 08:00 e 10:00' },
            { value: '10_12', label: 'Entre 10:00 e 12:00 ou mais tarde' },
          ]}
        />
      );

    case 10:
      return (
        <SingleChoiceStep
          microCopy="🍽️ Meio do dia"
          title="A que horas você costuma almoçar?"
          value={funnel.mealTimes.lunch}
          onSelect={(v) => setFunnel({ mealTimes: { ...funnel.mealTimes, lunch: v } })}
          onAdvance={next}
          options={[
            { value: 'pulo', label: 'Costumo pular o almoço' },
            { value: '10_12', label: 'Entre 10:00 e 12:00 ou antes' },
            { value: '12_14', label: 'Entre 12:00 e 14:00' },
            { value: '14_16', label: 'Entre 14:00 e 16:00 ou mais tarde' },
          ]}
        />
      );

    case 11:
      return (
        <SingleChoiceStep
          microCopy="🌙 Noite"
          title="A que horas você costuma jantar?"
          value={funnel.mealTimes.dinner}
          onSelect={(v) => setFunnel({ mealTimes: { ...funnel.mealTimes, dinner: v } })}
          onAdvance={next}
          options={[
            { value: 'pulo', label: 'Costumo pular o jantar' },
            { value: '16_18', label: 'Entre 16:00 e 18:00 ou antes' },
            { value: '18_20', label: 'Entre 18:00 e 20:00' },
            { value: '20_22', label: 'Entre 20:00 e 22:00 ou mais tarde' },
          ]}
        />
      );

    case 12:
      return (
        <SingleChoiceStep
          title="Como você costuma preparar suas refeições?"
          value={funnel.cooking}
          onSelect={(v) => setFunnel({ cooking: v })}
          onAdvance={next}
          options={[
            { value: 'eu_cozinho', label: 'Quase sempre eu mesmo cozinho', icon: '👨‍🍳' },
            { value: 'em_casa', label: 'Normalmente alguém cozinha em casa', icon: '🍳' },
            { value: 'delivery', label: 'Costumo comer em restaurantes ou pedir delivery', icon: '🍽️' },
            { value: 'misto', label: 'Não sei, um pouco de tudo', icon: '🎲' },
          ]}
        />
      );

    case 13:
      return (
        <SingleChoiceStep
          title="Como você descreveria seu nível de atividade durante a semana?"
          subtitle="79% dizem que o app ajuda a ter mais energia"
          value={funnel.activityLevel}
          onSelect={(v) => setFunnel({ activityLevel: v })}
          onAdvance={next}
          options={[
            { value: 'nenhum', label: 'Pouco ou nenhum exercício', icon: '🧑‍💻' },
            { value: 'leve', label: 'Alguma atividade (1-2 treinos/semana)', icon: '🧘' },
            { value: 'moderada', label: 'Atividade moderada (3-5 treinos)', icon: '🤸' },
            { value: 'bastante', label: 'Bastante atividade (6-7 treinos)', icon: '🏃' },
            { value: 'muita', label: 'Muita atividade (exercício diário ou esporte e trabalho físico)', icon: '🏋️' },
          ]}
        />
      );

    case 14:
      return (
        <SingleChoiceStep
          title="Qual é o seu horário de trabalho?"
          subtitle="86% dos usuários afirmam ter melhorado a concentração no trabalho"
          value={funnel.workSchedule}
          onSelect={(v) => setFunnel({ workSchedule: v })}
          onAdvance={next}
          options={[
            { value: '9_17', label: 'Trabalho das 9:00 às 17:00', icon: '☕' },
            { value: 'noite', label: 'Trabalho à noite', icon: '🌛' },
            { value: 'turnos', label: 'Irregular, turnos diferentes', icon: '🕒' },
            { value: 'aposentado', label: `Estou ${terms.aposentado}`, icon: '😌' },
          ]}
        />
      );

    case 15:
      return (
        <SingleChoiceStep
          title="Descreva um dia normal na sua vida"
          value={funnel.dailyRoutine}
          onSelect={(v) => setFunnel({ dailyRoutine: v })}
          onAdvance={next}
          options={[
            { value: 'sedentario', label: 'Principalmente sedentário (caminhar um pouco, ficar em pé)', icon: '🧑‍💻' },
            { value: 'fisico', label: 'Principalmente físico (caminhar a maior parte do tempo, ficar em pé)', icon: '🚶' },
            { value: 'muito_fisico', label: 'Muito físico (trabalho pesado)', icon: '👷' },
            { value: 'imprevisivel', label: 'Imprevisível. Pode ser sedentário ou físico, dependendo do dia.', icon: '❓' },
          ]}
        />
      );

    case 16:
      return (
        <SingleChoiceStep
          title="Quais são seus objetivos em relação à perda de peso?"
          value={funnel.goalIntensity}
          onSelect={(v) => setFunnel({ goalIntensity: v })}
          onAdvance={next}
          options={[
            { value: 'testar', label: 'Só quero testar o jejum intermitente', icon: '🙂' },
            { value: 'tentar', label: 'Quero tentar perder peso', icon: '🪄' },
            { value: 'maximo', label: 'Quero perder todo o peso possível', icon: '🎯' },
          ]}
        />
      );

    case 17:
      return (
        <div className="mt-8 flex flex-col items-center gap-5 text-center">
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white text-6xl shadow-md">
            ✌️
          </div>
          <h1 className="bm-title">Você vai se sair muito bem!</h1>
          <p className="bm-subtitle leading-relaxed">
            Já ajudamos <strong className="text-[#0E3A47]">559.332</strong> {terms.pessoas} a
            perder peso! Deixe-nos ajudar você a conquistar o corpo dos seus sonhos!
          </p>
          <div className="mt-4 w-full">
            <CTAButton onClick={next}>Continuar</CTAButton>
          </div>
        </div>
      );

    default:
      return null;
  }
}
