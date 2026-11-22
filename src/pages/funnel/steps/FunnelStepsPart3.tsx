import { useEffect, useState } from 'react';
import { Award, Calendar as CalendarIcon, Check, ChevronLeft, ChevronRight, Lock, Sparkles, Star, ThumbsUp } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { CTAButton } from '../../../components/CTAButton';
import { ScratchCard } from '../../../components/ScratchCard';
import { WeightCurveChart } from '../../../components/WeightCurveChart';
import { AVATARS } from '../../../data/avatars';
import { submitLead } from '../../../services/leadService';
import {
  bmiCategory,
  calcBmi,
  detectSomatotype,
  estimateGoalDate,
  formatDayMonthLocale,
  formatLongDateLocale,
  generatePromoCode,
} from '../../../engine/calculations';
import { interpolate } from '../../../i18n/translations';
import { useI18n } from '../../../i18n/I18nProvider';
import { useBestMeStore } from '../../../store/useBestMeStore';
import { CheckboxOptionCard, RadioOptionCard, toggleMultiOption } from './StepShell';

export function FunnelStepsPart3() {
  const { t, config } = useI18n();
  const { step, funnel, setFunnel, setStep, next } = useBestMeStore();
  const gender = funnel.gender ?? 'mulher';
  const isWoman = gender === 'mulher';

  // Step 38 animation state (4 progress bars)
  const [barProgress, setBarProgress] = useState<[number, number, number, number]>([0, 0, 0, 0]);

  // Step 42 calendar state
  const [calMonth, setCalMonth] = useState(() => {
    const d = new Date();
    d.setMonth(d.getMonth() + 3);
    return { year: d.getFullYear(), month: d.getMonth() };
  });

  // Step 48 circular loading state
  const [circlePct, setCirclePct] = useState(0);

  // Step 49 & 50 inputs
  const [emailInput, setEmailInput] = useState(funnel.email || '');
  const [nameInput, setNameInput] = useState(funnel.name || '');

  // Step 52 slide index
  const [slideIdx, setSlideIdx] = useState(0);

  const autoAdvance = () => {
    window.setTimeout(() => next(), 200);
  };

  // Step 38: 4 sequential progress bars
  useEffect(() => {
    if (step !== 38) return;
    setBarProgress([0, 0, 0, 0]);
    let tick = 0;
    const id = window.setInterval(() => {
      tick += 4; // ~100 ticks * 36ms = 3.6s total
      const b0 = Math.min(100, tick * 4);
      const b1 = Math.min(100, Math.max(0, (tick - 22) * 4));
      const b2 = Math.min(100, Math.max(0, (tick - 45) * 4));
      const b3 = Math.min(100, Math.max(0, (tick - 68) * 3.5));
      setBarProgress([Math.round(b0), Math.round(b1), Math.round(b2), Math.round(b3)]);
      if (b3 >= 100) {
        window.clearInterval(id);
        window.setTimeout(() => next(), 350);
      }
    }, 36);
    return () => window.clearInterval(id);
  }, [step, next]);

  // Step 48: Circular loader 0 -> 100%
  useEffect(() => {
    if (step !== 48) return;
    setCirclePct(0);
    let pct = 0;
    const id = window.setInterval(() => {
      pct += 2;
      setCirclePct(Math.min(100, pct));
      if (pct >= 100) {
        window.clearInterval(id);
        window.setTimeout(() => next(), 300);
      }
    }, 55);
    return () => window.clearInterval(id);
  }, [step, next]);

  // Step 52: 5-slide animated text intro (3s por slide para leitura confortável)
  useEffect(() => {
    if (step !== 52) return;
    setSlideIdx(0);
    const SLIDE_DURATION = 3100; // 3.1 segundos por frase
    const timers: number[] = [];
    for (let i = 1; i < 5; i++) {
      timers.push(window.setTimeout(() => setSlideIdx(i), i * SLIDE_DURATION));
    }
    timers.push(window.setTimeout(() => next(), 5 * SLIDE_DURATION));
    return () => timers.forEach((tm) => window.clearTimeout(tm));
  }, [step, next]);

  // Derived metrics for steps 39, 43, 46, 51
  const heightCm = funnel.heightCm ?? 170;
  const currentKg = funnel.currentWeightKg ?? 75;
  const targetKg = funnel.targetWeightKg ?? 70;
  const bmi = calcBmi(currentKg, heightCm);
  const bmiCat = bmiCategory(bmi);
  const bmiPct = Math.min(96, Math.max(4, ((Math.min(40, Math.max(15, bmi)) - 15) / 25) * 100));
  const somatotype = detectSomatotype(funnel.weightChangePattern);
  const goalDate = estimateGoalDate(currentKg, targetKg);
  const longGoalDate = formatLongDateLocale(goalDate, config.intlLocale);
  const dayMonthGoalDate = formatDayMonthLocale(goalDate, config.intlLocale);
  const diffKg = Math.abs(targetKg - currentKg);
  const diffDisplay =
    diffKg > 0 ? `${targetKg > currentKg ? '+' : '-'}${diffKg} kg` : `${targetKg} kg`;

  // Step 38: Analisando suas respostas
  if (step === 38) {
    return (
      <div className="mt-10 flex flex-col gap-7 px-2">
        <h1 className="bm-title">{t.funnel.step38.title}</h1>

        <div className="flex flex-col gap-4">
          {t.funnel.step38.bars.map((label, idx) => {
            const pct = barProgress[idx];
            const done = pct >= 100;
            return (
              <div key={label}>
                <div className="mb-1.5 flex items-center justify-between text-xs font-semibold text-[#1F1510]">
                  <span>{label}</span>
                  {done ? (
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#2E1F19] text-white">
                      <Check size={11} strokeWidth={3} />
                    </span>
                  ) : (
                    <span className="text-[#6B5E57]">{pct}%</span>
                  )}
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#E7E0D8]">
                  <motion.div
                    className="h-full rounded-full bg-[#2E1F19]"
                    animate={{ width: `${pct}%` }}
                    transition={{ duration: 0.08, ease: 'easeOut' }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-4 flex flex-col items-center text-center text-[#6B5E57]">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🌿</span>
            <div>
              <p className="text-[11px] font-extrabold tracking-widest text-[#1F1510]">
                {t.funnel.step38.awardTitle}
              </p>
              <p className="text-[11px]">{t.funnel.step38.awardSub}</p>
            </div>
            <span className="text-2xl">🌿</span>
          </div>
        </div>
      </div>
    );
  }

  // Step 39: Aqui está o seu perfil de bem-estar (IMC)
  if (step === 39) {
    const bodyLabel =
      somatotype === 'endomorfo'
        ? 'Endomorfo'
        : somatotype === 'ectomorfo'
          ? 'Ectomorfo'
          : 'Mesomorfo';
    return (
      <div className="mt-4 flex flex-col gap-5">
        <h1 className="bm-title">{t.funnel.step39.title}</h1>

        <div className="rounded-3xl border border-[#EAE3DC] bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-xs font-extrabold text-[#1F1510]">{t.funnel.step39.bmiTitle}</p>
            <span className="rounded-full bg-[#F5EFE8] px-2.5 py-0.5 text-xs font-extrabold text-[#1F1510]">
              {bmi.toFixed(1)}
            </span>
          </div>

          <div className="mt-4">
            <div className="flex justify-between text-[10px] font-semibold text-[#6B5E57]">
              <span>15</span>
              <span>18.5</span>
              <span>25</span>
              <span>30</span>
              <span>40</span>
            </div>
            <div className="relative mt-1 h-2.5 w-full rounded-full bg-gradient-to-r from-sky-300 via-emerald-400 via-amber-400 to-rose-400">
              <span
                className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#1F1510] bg-white shadow"
                style={{ left: `${bmiPct}%` }}
              />
            </div>
            <div className="mt-1.5 flex justify-between text-[9px] text-[#8C7E77]">
              {t.funnel.step39.scaleLabels.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-[#C9DFB8] bg-[#EBF3E4] p-3 text-xs text-[#1F1510]">
            <p className="font-extrabold text-[#3F6212]">
              ✓{' '}
              {bmiCat === 'normal'
                ? t.funnel.step39.bmiHealthyTitle
                : t.funnel.step39.bmiImproveTitle}
            </p>
            <p className="mt-0.5 text-[11px] text-[#3F4A36]">
              {bmiCat === 'normal'
                ? t.funnel.step39.bmiHealthyDesc
                : t.funnel.step39.bmiImproveDesc}
            </p>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
            <div className="rounded-xl bg-[#FDFBF7] p-2.5">
              <span className="text-[10px] text-[#6B5E57]">{t.funnel.step39.bodyTypeLabel}</span>
              <p className="font-bold text-[#1F1510]">{bodyLabel}</p>
            </div>
            <div className="rounded-xl bg-[#FDFBF7] p-2.5">
              <span className="text-[10px] text-[#6B5E57]">{t.funnel.step39.lifestyleLabel}</span>
              <p className="font-bold text-[#1F1510]">{t.funnel.step39.lifestyleValue}</p>
            </div>
            <div className="rounded-xl bg-[#FDFBF7] p-2.5">
              <span className="text-[10px] text-[#6B5E57]">{t.funnel.step39.fitnessLabel}</span>
              <p className="font-bold text-[#1F1510]">{t.funnel.step39.fitnessValue}</p>
            </div>
            <div className="rounded-xl bg-[#FDFBF7] p-2.5">
              <span className="text-[10px] text-[#6B5E57]">{t.funnel.step39.metabolismLabel}</span>
              <p className="font-bold text-[#1F1510]">{t.funnel.step39.metabolismValue}</p>
            </div>
          </div>
        </div>

        <CTAButton onClick={next}>{t.common.continueBtn}</CTAButton>
      </div>
    );
  }

  // Step 40: Eventos que impactaram o crescimento muscular
  if (step === 40) {
    const none = t.common.noneOption;
    const allOpts = [...t.funnel.step40.options, none];
    return (
      <div className="mt-4 flex flex-col gap-4">
        <h1 className="bm-title">{t.funnel.step40.title}</h1>
        <p className="bm-subtitle">{t.common.selectAllApply}</p>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {allOpts.map((opt) => (
            <CheckboxOptionCard
              key={opt}
              label={opt}
              selected={funnel.lifeEvents.includes(opt)}
              onClick={() =>
                setFunnel({ lifeEvents: toggleMultiOption(funnel.lifeEvents, opt, none) })
              }
            />
          ))}
        </div>
        <div className="mt-2">
          <CTAButton disabled={funnel.lifeEvents.length === 0} onClick={next}>
            {t.common.nextStepBtn}
          </CTAButton>
        </div>
      </div>
    );
  }

  // Step 41: Evento importante pela frente?
  if (step === 41) {
    const allOpts = [...t.funnel.step41.options, t.funnel.step41.noneEvent];
    return (
      <div className="mt-4 flex flex-col gap-4">
        <h1 className="bm-title">{t.funnel.step41.title}</h1>
        <p className="bm-subtitle">{t.funnel.step41.subtitle}</p>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {allOpts.map((opt) => (
            <RadioOptionCard
              key={opt}
              label={opt}
              selected={funnel.upcomingEvent === opt}
              onClick={() => {
                if (opt === t.funnel.step41.noneEvent) {
                  setFunnel({ upcomingEvent: '', eventDate: '' });
                  window.setTimeout(() => setStep(43), 200);
                } else {
                  setFunnel({ upcomingEvent: opt });
                  autoAdvance();
                }
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  // Step 42: Quando é o seu evento? (Calendário)
  if (step === 42) {
    const firstDay = new Date(calMonth.year, calMonth.month, 1);
    const daysInMonth = new Date(calMonth.year, calMonth.month + 1, 0).getDate();
    const startOffset = (firstDay.getDay() + 6) % 7; // Monday first
    const monthTitle = new Intl.DateTimeFormat(config.intlLocale, {
      month: 'long',
      year: 'numeric',
    }).format(firstDay);

    const selectedDateStr =
      funnel.eventDate ||
      `${calMonth.year}-${String(calMonth.month + 1).padStart(2, '0')}-22`;

    const formattedSelected = (() => {
      const [y, m, d] = selectedDateStr.split('-');
      return `${d}/${m}/${y}`;
    })();

    return (
      <div className="mt-4 flex flex-col gap-4">
        <div className="text-center">
          <h1 className="bm-title">{t.funnel.step42.title}</h1>
          <p className="bm-subtitle mt-1.5">{t.funnel.step42.subtitle}</p>
        </div>

        <div className="rounded-2xl border border-[#1F1510] bg-white px-4 py-3">
          <span className="block text-[10px] font-semibold text-[#6B5E57]">
            {t.funnel.step42.selectDateLabel}
          </span>
          <div className="mt-0.5 flex items-center justify-between text-sm font-bold text-[#1F1510]">
            <span>{formattedSelected}</span>
            <CalendarIcon size={16} className="text-[#6B5E57]" />
          </div>
        </div>

        <p className="text-center text-[10px] text-[#6B5E57]">
          🔒 {t.funnel.step42.privacyNote}
        </p>

        <div className="rounded-3xl border border-[#EAE3DC] bg-white p-4 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <button
              type="button"
              onClick={() =>
                setCalMonth((prev) => {
                  const d = new Date(prev.year, prev.month - 1, 1);
                  return { year: d.getFullYear(), month: d.getMonth() };
                })
              }
              className="rounded-lg p-1 text-[#6B5E57] hover:bg-[#F5EFE8]"
            >
              <ChevronLeft size={16} />
            </button>
            <span className="text-xs font-extrabold capitalize text-[#1F1510]">{monthTitle}</span>
            <button
              type="button"
              onClick={() =>
                setCalMonth((prev) => {
                  const d = new Date(prev.year, prev.month + 1, 1);
                  return { year: d.getFullYear(), month: d.getMonth() };
                })
              }
              className="rounded-lg p-1 text-[#6B5E57] hover:bg-[#F5EFE8]"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-[#8C7E77]">
            {['S', 'T', 'Q', 'Q', 'S', 'S', 'D'].map((d, i) => (
              <span key={i} className="py-1">
                {d}
              </span>
            ))}
            {Array.from({ length: startOffset }).map((_, i) => (
              <span key={`empty-${i}`} />
            ))}
            {Array.from({ length: daysInMonth }).map((_, idx) => {
              const day = idx + 1;
              const iso = `${calMonth.year}-${String(calMonth.month + 1).padStart(2, '0')}-${String(
                day,
              ).padStart(2, '0')}`;
              const active = selectedDateStr === iso;
              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => setFunnel({ eventDate: iso })}
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition ${
                    active ? 'bg-[#2E1F19] text-white' : 'text-[#1F1510] hover:bg-[#F5EFE8]'
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>

        <CTAButton
          onClick={() => {
            if (!funnel.eventDate) setFunnel({ eventDate: selectedDateStr });
            next();
          }}
        >
          {t.common.continueBtn}
        </CTAButton>
        <button
          type="button"
          onClick={() => {
            setFunnel({ eventDate: '' });
            next();
          }}
          className="text-center text-xs font-bold uppercase tracking-wide text-[#6B5E57] underline"
        >
          {t.common.skipStepBtn}
        </button>
      </div>
    );
  }

  // Step 43: O plano que finalmente vai ajudar você a entrar em forma
  if (step === 43) {
    return (
      <div className="mt-4 flex flex-col gap-4">
        <h1 className="bm-title">{t.funnel.step43.title}</h1>

        <div className="flex items-center justify-between gap-2 text-xs">
          <div>
            <p className="text-[#6B5E57]">{t.funnel.step43.estimatePrefix}</p>
            <p className="font-bold text-[#1F1510]">
              {targetKg} kg {t.funnel.step43.untilLabel} {longGoalDate}*
            </p>
          </div>
          {funnel.upcomingEvent && (
            <span className="shrink-0 rounded-full bg-[#F5EFE8] px-3 py-1.5 text-[11px] font-bold text-[#2E1F19]">
              {interpolate(t.funnel.step43.untilEventTag, {
                diff: `~${Math.max(2, Math.round(diffKg / 2))}kg`,
                event: funnel.upcomingEvent,
              })}
            </span>
          )}
        </div>

        <WeightCurveChart
          currentKg={currentKg}
          targetKg={targetKg}
          targetDateLabel={longGoalDate}
          eventLabel={funnel.upcomingEvent || undefined}
          goalLabel={t.funnel.step43.chartObjective}
        />

        <p className="text-[10px] leading-relaxed text-[#8C7E77]">
          {t.funnel.step43.disclaimer}
        </p>

        <div className="rounded-2xl border border-[#EAE3DC] bg-[#F5EFE8]/70 p-4">
          <p className="font-serif text-xs italic leading-relaxed text-[#1F1510]">
            &ldquo;{t.funnel.step43.quote}&rdquo;
          </p>
          <div className="mt-3 flex items-center gap-2.5">
            <img
              src={AVATARS.nutritionists.Elina}
              alt="Lisa Wishmann"
              className="h-9 w-9 rounded-full object-cover"
            />
            <div>
              <p className="text-xs font-extrabold text-[#1F1510]">
                {t.funnel.step33.specialists[0].name}
              </p>
              <p className="text-[10px] text-[#6B5E57]">
                {t.funnel.step33.specialists[0].role}
              </p>
            </div>
          </div>
        </div>

        <CTAButton onClick={next}>{t.common.continueBtn}</CTAButton>
      </div>
    );
  }

  // Step 44: Principal motivo para ganhar músculo
  if (step === 44) {
    const opts = isWoman ? t.funnel.step44.optionsWoman : t.funnel.step44.optionsMan;
    return (
      <div className="mt-5 flex flex-col gap-4">
        <h1 className="bm-title">{t.funnel.step44.title}</h1>
        <div className="mt-2 flex flex-col gap-3">
          {opts.map((opt) => (
            <RadioOptionCard
              key={opt}
              label={opt}
              selected={funnel.mainMotivation === opt}
              onClick={() => {
                setFunnel({ mainMotivation: opt });
                autoAdvance();
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  // Step 45: Melhore seu bem-estar todos os dias (15 min)
  if (step === 45) {
    return (
      <div className="mt-4 flex flex-col gap-5">
        <div className="relative overflow-hidden rounded-3xl border border-[#EAE3DC] bg-[#F5EFE8]">
          <img
            src={isWoman ? AVATARS.objectives.mulher['Conseguir um corpo firme e tonificado'] : AVATARS.objectives.homem['Conseguir um corpo firme e tonificado']}
            alt=""
            className="h-56 w-full object-cover object-top"
          />
          <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-[#1F1510] shadow">
            <span>{t.funnel.step45.cardTitle}</span>
            <span className="text-[#6B5E57]">⏱ {t.funnel.step45.cardDuration}</span>
          </div>
        </div>

        <div>
          <h1 className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold text-[#1F1510]">
            {t.funnel.step45.title}
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-[#6B5E57]">{t.funnel.step45.p1}</p>
          <p className="mt-2 text-sm font-medium text-[#1F1510]">{t.funnel.step45.p2}</p>
        </div>

        <CTAButton onClick={next}>{t.common.continueBtn}</CTAButton>
      </div>
    );
  }

  // Step 46: Quão confiante está até a data?
  if (step === 46) {
    const opts = isWoman ? t.funnel.step46.optionsWoman : t.funnel.step46.optionsMan;
    return (
      <div className="mt-5 flex flex-col gap-4">
        <h1 className="bm-title">
          {interpolate(t.funnel.step46.title, { date: dayMonthGoalDate })}
        </h1>
        <div className="mt-2 flex flex-col gap-3">
          {opts.map((opt) => (
            <RadioOptionCard
              key={opt}
              label={opt}
              selected={funnel.confidenceLevel === opt}
              onClick={() => {
                setFunnel({ confidenceLevel: opt });
                autoAdvance();
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  // Step 47: O que torna a BestMe uma escolha confiável (3 prêmios)
  if (step === 47) {
    return (
      <div className="mt-5 flex flex-col gap-5">
        <h1 className="bm-title">{t.funnel.step47.title}</h1>
        <div className="flex flex-col gap-3">
          {t.funnel.step47.awards.map((aw, idx) => (
            <div
              key={aw.title}
              className="flex flex-col items-center rounded-2xl border border-[#EAE3DC] bg-[#F5EFE8]/70 p-4 text-center"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#2E1F19] shadow-sm">
                <Award size={22} />
              </div>
              <p className="mt-2 text-sm font-extrabold text-[#1F1510]">{aw.title}</p>
              <p className="mt-0.5 text-xs text-[#6B5E57]">{aw.desc}</p>
              <span className="mt-1.5 text-[11px] font-bold text-[#8C7E77]">
                {aw.year} {idx === 1 ? '· App Store' : ''}
              </span>
            </div>
          ))}
        </div>
        <CTAButton onClick={next}>{t.common.continueBtn}</CTAButton>
      </div>
    );
  }

  // Step 48: Loading circular (0-100%)
  if (step === 48) {
    const r = 44;
    const c = 2 * Math.PI * r;
    const dashOffset = c * (1 - circlePct / 100);
    return (
      <div className="mt-10 flex flex-col items-center gap-6 text-center">
        <div className="relative flex h-28 w-28 items-center justify-center">
          <svg width="112" height="112" className="-rotate-90">
            <circle cx="56" cy="56" r={r} fill="none" stroke="#EAE3DC" strokeWidth="6" />
            <circle
              cx="56"
              cy="56"
              r={r}
              fill="none"
              stroke="#2E1F19"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={c}
              strokeDashoffset={dashOffset}
            />
          </svg>
          <span className="absolute font-['Plus_Jakarta_Sans'] text-xl font-extrabold text-[#1F1510]">
            {circlePct}%
          </span>
        </div>

        <p className="text-sm font-semibold text-[#1F1510]">{t.funnel.step48.creating}</p>

        <div className="mt-2">
          <p className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold text-[#1F1510]">
            {isWoman ? t.funnel.step48.socialCountWoman : t.funnel.step48.socialCountMan}
          </p>
          <p className="mt-1 text-xs text-[#6B5E57]">{t.funnel.step48.socialSub}</p>
        </div>

        <div className="w-full rounded-2xl border border-[#EAE3DC] bg-[#F5EFE8]/80 p-4 text-left">
          <div className="flex items-center gap-1 text-[#00B67A]">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={13} fill="currentColor" />
            ))}
          </div>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-xs font-extrabold text-[#1F1510]">
              {t.funnel.step48.reviewTitle}
            </span>
            <span className="text-[11px] text-[#6B5E57]">{t.funnel.step48.reviewAuthor}</span>
          </div>
          <p className="mt-1 text-xs leading-relaxed text-[#6B5E57]">
            {t.funnel.step48.reviewBody}
          </p>
        </div>
      </div>
    );
  }

  // Step 49: Captura de e-mail
  if (step === 49) {
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.trim());

    const handleEmailSubmit = () => {
      if (!emailValid) return;
      const cleanEmail = emailInput.trim();
      setFunnel({ email: cleanEmail });
      submitLead({
        email: cleanEmail,
        gender: funnel.gender,
        ageRange: funnel.ageRange,
        mainGoal: funnel.mainGoal,
        currentWeightKg: funnel.currentWeightKg,
        targetWeightKg: funnel.targetWeightKg,
        heightCm: funnel.heightCm,
        somatotype,
        sensitivities: funnel.sensitivities,
        promoCode: funnel.promoCode,
      });
      next();
    };

    return (
      <div className="mt-10 flex flex-col gap-6">
        <h1 className="bm-title">
          {t.funnel.step49.titlePrefix}
          <span className="text-[#8C7E77]">{t.funnel.step49.titleHighlight}</span>
          {t.funnel.step49.titleSuffix}
        </h1>

        <div>
          <input
            type="email"
            autoFocus
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && emailValid) {
                e.preventDefault();
                handleEmailSubmit();
              }
            }}
            placeholder={t.funnel.step49.placeholder}
            className="w-full rounded-xl border border-[#1F1510] bg-white px-4 py-3.5 text-sm font-medium text-[#1F1510] outline-none transition focus:ring-2 focus:ring-[#2E1F19]/20"
          />
          <p className="mt-3 flex items-start gap-2 text-[11px] leading-relaxed text-[#6B5E57]">
            <Lock size={14} className="mt-0.5 shrink-0" />
            <span>
              {t.funnel.step49.privacyPrefix}{' '}
              <span className="text-[#0284C7] underline">{t.funnel.step49.privacyLink}</span>
            </span>
          </p>
        </div>

        <CTAButton
          disabled={!emailValid}
          onClick={handleEmailSubmit}
        >
          {t.common.continueBtn}
        </CTAButton>
      </div>
    );
  }

  // Step 50: Qual é o seu nome?
  if (step === 50) {
    const valid = nameInput.trim().length >= 2;
    return (
      <div className="mt-14 flex flex-col gap-8">
        <h1 className="bm-title">{t.funnel.step50.title}</h1>
        <div className="border-b border-[#6B5E57] pb-2">
          <input
            type="text"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            placeholder={t.funnel.step50.placeholder}
            className="w-full bg-transparent text-center font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#1F1510] placeholder-[#B5A9A2] outline-none"
          />
        </div>
        <CTAButton
          disabled={!valid}
          onClick={() => {
            const cleanName = nameInput.trim();
            setFunnel({ name: cleanName, promoCode: generatePromoCode(cleanName) });
            next();
          }}
        >
          {t.common.continueBtn}
        </CTAButton>
      </div>
    );
  }

  // Step 51: Plano pronto + Gráfico Sua força muscular
  if (step === 51) {
    const goalText =
      funnel.mainGoal === 'lose_weight'
        ? t.funnel.step51.goalLose
        : funnel.mainGoal === 'stay_fit'
          ? t.funnel.step51.goalFit
          : t.funnel.step51.goalGain;
    const userName = funnel.name.trim() || 'BestMe';

    return (
      <div className="mt-4 flex flex-col gap-5">
        <h1 className="bm-title">
          <span className="text-[#8C7E77]">{userName}</span>
          {interpolate(t.funnel.step51.titlePrefix, { name: '' })}
          {goalText}
          {t.funnel.step51.titleSuffix}
        </h1>

        <div className="rounded-3xl border border-[#EAE3DC] bg-[#F5EFE8]/80 p-4">
          <p className="text-xs font-bold text-[#6B5E57]">{t.funnel.step51.chartTitle}</p>
          <svg viewBox="0 0 300 130" className="mt-2 w-full overflow-visible">
            <defs>
              <linearGradient id="strengthStroke" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#EF7B45" />
                <stop offset="45%" stopColor="#EAB308" />
                <stop offset="100%" stopColor="#34D399" />
              </linearGradient>
              <linearGradient id="strengthFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#34D399" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#F5EFE8" stopOpacity="0.02" />
              </linearGradient>
            </defs>
            <line x1="16" y1="26" x2="284" y2="26" stroke="#E4DDD5" />
            <line x1="16" y1="62" x2="284" y2="62" stroke="#E4DDD5" />
            <line x1="16" y1="98" x2="284" y2="98" stroke="#E4DDD5" />
            <path
              d="M 24 98 C 90 66, 175 68, 260 22 L 260 105 L 24 105 Z"
              fill="url(#strengthFill)"
            />
            <motion.path
              d="M 24 98 C 90 66, 175 68, 260 22"
              fill="none"
              stroke="url(#strengthStroke)"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.0, ease: 'easeInOut' }}
            />
            <circle cx="24" cy="98" r="5" fill="#fff" stroke="#EF7B45" strokeWidth="2.5" />
            <rect x="14" y="64" width="90" height="22" rx="11" fill="#fff" stroke="#EAE3DC" />
            <text x="59" y="79" textAnchor="middle" fill="#1F1510" fontSize="9.5" fontWeight="700">
              {t.funnel.step51.mondayBadge}
            </text>
            {t.funnel.step51.weeks.map((wk, idx) => (
              <text
                key={wk}
                x={30 + idx * 80}
                y="120"
                textAnchor="middle"
                fill="#8C7E77"
                fontSize="9"
              >
                {wk}
              </text>
            ))}
          </svg>
          <p className="mt-1 text-[10px] text-[#8C7E77]">{t.funnel.step51.chartNote}</p>
        </div>

        <div className="flex flex-col gap-2.5 rounded-2xl border border-[#EAE3DC] bg-white p-4 text-xs font-semibold text-[#1F1510]">
          <div className="flex items-center gap-2.5">
            <ThumbsUp size={15} className="text-[#6B5E57]" />
            <span>{t.funnel.step51.bullet1}</span>
          </div>
          <div className="flex items-center gap-2.5 border-t border-[#F5EFE8] pt-2.5">
            <Sparkles size={15} className="text-[#6B5E57]" />
            <span>{t.funnel.step51.bullet2}</span>
          </div>
          <div className="flex items-center gap-2.5 border-t border-[#F5EFE8] pt-2.5">
            <Check size={15} className="text-[#6B5E57]" />
            <span>
              {interpolate(t.funnel.step51.bullet3Prefix, {
                diff: diffDisplay,
                date: longGoalDate,
              })}
            </span>
          </div>
        </div>

        <CTAButton onClick={next}>{t.common.continueBtn}</CTAButton>
      </div>
    );
  }

  // Step 52: 5-slide animated text intro
  if (step === 52) {
    const currentSlide = t.funnel.step52.slides[slideIdx] ?? t.funnel.step52.slides[0];
    return (
      <button
        type="button"
        onClick={next}
        className="flex min-h-[75vh] w-full flex-col items-center justify-center px-4 text-center"
      >
        <AnimatePresence mode="wait">
          <motion.p
            key={slideIdx}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="whitespace-pre-line font-['Plus_Jakarta_Sans'] text-2xl font-extrabold leading-snug text-[#1F1510]"
          >
            {currentSlide}
          </motion.p>
        </AnimatePresence>
        <div className="mt-8 flex gap-1.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.span
              key={i}
              animate={{
                width: i === slideIdx ? 28 : 6,
                backgroundColor: i === slideIdx ? '#2E1F19' : '#D5CCC3',
              }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="h-1.5 rounded-full"
            />
          ))}
        </div>
      </button>
    );
  }

  // Step 53: Raspadinha de desconto especial
  const promoCode = funnel.promoCode || generatePromoCode(funnel.name || 'bestme');
  return (
    <div className="mt-5 flex flex-col items-center gap-6 text-center">
      <div>
        <h1 className="bm-title">{t.funnel.step53.title}</h1>
        <p className="bm-subtitle mt-2">{t.funnel.step53.subtitle}</p>
      </div>
      <ScratchCard
        promoCode={promoCode}
        onComplete={() => {
          setFunnel({ scratchRevealed: true, promoCode });
          next();
        }}
      />
    </div>
  );
}
