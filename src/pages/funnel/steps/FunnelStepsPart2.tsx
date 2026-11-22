import { useState } from 'react';
import { Check, CheckCheck, Info } from 'lucide-react';
import { CTAButton } from '../../../components/CTAButton';
import { UnitToggle } from '../../../components/UnitToggle';
import { AVATARS } from '../../../data/avatars';
import { calcWeightDeltaPct, inToCm, lbToKg, kgToLb } from '../../../engine/calculations';
import { interpolate } from '../../../i18n/translations';
import { useI18n } from '../../../i18n/I18nProvider';
import { useBestMeStore } from '../../../store/useBestMeStore';
import { CheckboxOptionCard, RadioOptionCard, toggleMultiOption } from './StepShell';

export function FunnelStepsPart2() {
  const { t } = useI18n();
  const { step, funnel, setFunnel, next } = useBestMeStore();
  const gender = funnel.gender ?? 'mulher';
  const isWoman = gender === 'mulher';

  const [heightInput, setHeightInput] = useState(
    funnel.heightCm ? String(funnel.heightCm) : '',
  );
  const [weightInput, setWeightInput] = useState(
    funnel.currentWeightKg ? String(funnel.currentWeightKg) : '',
  );
  const [targetInput, setTargetInput] = useState(
    funnel.targetWeightKg ? String(funnel.targetWeightKg) : '',
  );
  const [ageInput, setAgeInput] = useState(
    funnel.exactAge ? String(funnel.exactAge) : '',
  );

  const autoAdvance = () => {
    window.setTimeout(() => next(), 200);
  };

  // Step 20: Intersticial "Ótimo, entendido!"
  if (step === 20) {
    return (
      <div className="mt-10 flex flex-col items-start gap-5 px-2">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EAE3DC] text-[#2E1F19]">
          <CheckCheck size={20} />
        </div>
        <h1 className="font-['Plus_Jakarta_Sans'] text-3xl font-extrabold text-[#1F1510]">
          {t.funnel.step20.title}
        </h1>
        <p className="text-sm leading-relaxed text-[#6B5E57]">{t.funnel.step20.p1}</p>
        <p className="text-sm leading-relaxed text-[#6B5E57]">{t.funnel.step20.p2}</p>
        <div className="mt-4 w-full">
          <CTAButton onClick={next}>{t.common.continueBtn}</CTAButton>
        </div>
      </div>
    );
  }

  // Step 21: Rotina de trabalho
  if (step === 21) {
    return (
      <div className="mt-5 flex flex-col gap-4">
        <h1 className="bm-title">{t.funnel.step21.title}</h1>
        <div className="mt-2 flex flex-col gap-3">
          {t.funnel.step21.options.map((opt) => (
            <RadioOptionCard
              key={opt}
              label={opt}
              selected={funnel.workSchedule === opt}
              onClick={() => {
                setFunnel({ workSchedule: opt });
                autoAdvance();
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  // Step 22: Dia típico
  if (step === 22) {
    return (
      <div className="mt-5 flex flex-col gap-4">
        <h1 className="bm-title">{t.funnel.step22.title}</h1>
        <div className="mt-2 flex flex-col gap-3">
          {t.funnel.step22.options.map((opt) => (
            <RadioOptionCard
              key={opt}
              label={opt}
              selected={funnel.dailyRoutine === opt}
              onClick={() => {
                setFunnel({ dailyRoutine: opt });
                autoAdvance();
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  // Step 23: Níveis de energia
  if (step === 23) {
    const opts = [
      isWoman ? t.funnel.step23.lowWoman : t.funnel.step23.lowMan,
      t.funnel.step23.postLunch,
      t.funnel.step23.drag,
      t.funnel.step23.high,
    ];
    return (
      <div className="mt-5 flex flex-col gap-4">
        <h1 className="bm-title">{t.funnel.step23.title}</h1>
        <div className="mt-2 flex flex-col gap-3">
          {opts.map((opt) => (
            <RadioOptionCard
              key={opt}
              label={opt}
              selected={funnel.energyLevel === opt}
              onClick={() => {
                setFunnel({ energyLevel: opt });
                autoAdvance();
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  // Step 24: Intersticial energia pós-almoço
  if (step === 24) {
    return (
      <div className="mt-4 flex flex-col gap-5">
        <div className="overflow-hidden rounded-3xl border border-[#EAE3DC] bg-[#F5EFE8]">
          <img
            src={isWoman ? AVATARS.objectives.mulher['Livrar-me do estresse'] : AVATARS.objectives.homem['Livrar-me do estresse']}
            alt=""
            className="h-56 w-full object-cover object-top"
          />
        </div>
        <div>
          <h1 className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold text-[#1F1510]">
            {t.funnel.step24.title}
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-[#6B5E57]">{t.funnel.step24.p1}</p>
          <p className="mt-2 text-sm font-medium text-[#1F1510]">{t.funnel.step24.p2}</p>
        </div>
        <CTAButton onClick={next}>{t.common.continueBtn}</CTAButton>
      </div>
    );
  }

  // Step 25: Água diária
  if (step === 25) {
    return (
      <div className="mt-4 flex flex-col gap-4">
        <h1 className="bm-title">{t.funnel.step25.title}</h1>
        <p className="bm-subtitle">{t.funnel.step25.subtitle}</p>
        <div className="overflow-hidden rounded-2xl border border-[#EAE3DC] bg-[#F5EFE8]">
          <img src={AVATARS.calisthenics.water} alt="" className="h-32 w-full object-cover" />
        </div>
        <div className="flex flex-col gap-2.5">
          {t.funnel.step25.options.map((opt) => (
            <RadioOptionCard
              key={opt}
              label={opt}
              selected={funnel.waterIntake === opt}
              onClick={() => {
                setFunnel({ waterIntake: opt });
                autoAdvance();
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  // Step 26: Horas de sono
  if (step === 26) {
    return (
      <div className="mt-4 flex flex-col gap-4">
        <h1 className="bm-title">{t.funnel.step26.title}</h1>
        <div className="overflow-hidden rounded-2xl border border-[#EAE3DC] bg-[#F5EFE8]">
          <img src={AVATARS.calisthenics.sleep} alt="" className="h-32 w-full object-cover" />
        </div>
        <div className="flex flex-col gap-2.5">
          {t.funnel.step26.options.map((opt) => (
            <RadioOptionCard
              key={opt}
              label={opt}
              selected={funnel.sleep === opt}
              onClick={() => {
                setFunnel({ sleep: opt });
                autoAdvance();
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  // Step 27: Café da manhã
  if (step === 27) {
    return (
      <div className="mt-4 flex flex-col gap-4">
        <h1 className="bm-title">{t.funnel.step27.title}</h1>
        <div className="overflow-hidden rounded-2xl border border-[#EAE3DC] bg-[#F5EFE8]">
          <img src={AVATARS.meals.breakfast} alt="" className="h-32 w-full object-cover" />
        </div>
        <div className="flex flex-col gap-2.5">
          {t.funnel.step27.options.map((opt) => (
            <RadioOptionCard
              key={opt}
              label={opt}
              selected={funnel.mealTimes.breakfast === opt}
              onClick={() => {
                setFunnel({ mealTimes: { ...funnel.mealTimes, breakfast: opt } });
                autoAdvance();
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  // Step 28: Almoço
  if (step === 28) {
    return (
      <div className="mt-4 flex flex-col gap-4">
        <h1 className="bm-title">{t.funnel.step28.title}</h1>
        <div className="overflow-hidden rounded-2xl border border-[#EAE3DC] bg-[#F5EFE8]">
          <img src={AVATARS.meals.lunch} alt="" className="h-32 w-full object-cover" />
        </div>
        <div className="flex flex-col gap-2.5">
          {t.funnel.step28.options.map((opt) => (
            <RadioOptionCard
              key={opt}
              label={opt}
              selected={funnel.mealTimes.lunch === opt}
              onClick={() => {
                setFunnel({ mealTimes: { ...funnel.mealTimes, lunch: opt } });
                autoAdvance();
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  // Step 29: Jantar
  if (step === 29) {
    return (
      <div className="mt-4 flex flex-col gap-4">
        <h1 className="bm-title">{t.funnel.step29.title}</h1>
        <div className="overflow-hidden rounded-2xl border border-[#EAE3DC] bg-[#F5EFE8]">
          <img src={AVATARS.meals.dinner} alt="" className="h-32 w-full object-cover" />
        </div>
        <div className="flex flex-col gap-2.5">
          {t.funnel.step29.options.map((opt) => (
            <RadioOptionCard
              key={opt}
              label={opt}
              selected={funnel.mealTimes.dinner === opt}
              onClick={() => {
                setFunnel({ mealTimes: { ...funnel.mealTimes, dinner: opt } });
                autoAdvance();
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  // Step 30: Tipo de dieta (agrupado)
  if (step === 30) {
    const groups = [
      t.funnel.step30.groups.withMeat,
      t.funnel.step30.groups.noMeat,
      t.funnel.step30.groups.withFish,
      t.funnel.step30.groups.noAllergens,
    ];
    return (
      <div className="mt-4 flex flex-col gap-5">
        <h1 className="bm-title">{t.funnel.step30.title}</h1>
        {groups.map((grp) => (
          <div key={grp.label} className="flex flex-col gap-2">
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#6B5E57]">
              {grp.label}
            </p>
            {grp.items.map((item) => (
              <RadioOptionCard
                key={item.id}
                label={item.title}
                desc={item.desc}
                selected={funnel.dietType === item.id}
                onClick={() => {
                  setFunnel({ dietType: item.id, cooking: item.title });
                  autoAdvance();
                }}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }

  // Step 31: Intersticial Plano alimentar personalizado (Phone Mockup)
  if (step === 31) {
    const meals = [
      { label: t.funnel.step31.breakfast, meta: '517 kcal · 8 min', img: AVATARS.meals.breakfast, done: true },
      { label: t.funnel.step31.lunch, meta: '597 kcal · 20 min', img: AVATARS.meals.lunch, done: false },
      { label: t.funnel.step31.dinner, meta: '501 kcal · 25 min', img: AVATARS.meals.dinner, done: false },
    ];
    return (
      <div className="mt-4 flex flex-col gap-5">
        <div className="rounded-3xl border border-[#EAE3DC] bg-[#F5EFE8] p-5">
          <div className="mx-auto max-w-[260px] rounded-3xl border-4 border-[#1F1510] bg-white p-3.5 shadow-lg">
            <p className="text-center text-xs font-extrabold text-[#1F1510]">
              {t.funnel.step31.phoneHeader}
            </p>
            <div className="mt-3 flex flex-col gap-2">
              {meals.map((m) => (
                <div
                  key={m.label}
                  className="flex items-center justify-between rounded-xl border border-[#EAE3DC] bg-[#FDFBF7] p-2"
                >
                  <div className="flex items-center gap-2.5">
                    <img src={m.img} alt={m.label} className="h-9 w-9 rounded-lg object-cover" />
                    <div>
                      <p className="text-xs font-bold text-[#1F1510]">{m.label}</p>
                      <p className="text-[10px] text-[#6B5E57]">{m.meta}</p>
                    </div>
                  </div>
                  <span
                    className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                      m.done ? 'border-[#2E1F19] bg-[#2E1F19] text-white' : 'border-[#D5CCC3]'
                    }`}
                  >
                    {m.done && <Check size={10} />}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h1 className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold text-[#1F1510]">
            {t.funnel.step31.title}
          </h1>
          <p className="mt-2 text-sm text-[#6B5E57]">{t.funnel.step31.p1}</p>
          <p className="mt-2 text-sm text-[#6B5E57]">{t.funnel.step31.p2}</p>
        </div>

        <CTAButton onClick={next}>{t.common.continueBtn}</CTAButton>
      </div>
    );
  }

  // Step 32: Hábitos alimentares (Multi)
  if (step === 32) {
    const none = t.common.noneOption;
    const allOpts = [...t.funnel.step32.options, none];
    return (
      <div className="mt-4 flex flex-col gap-4">
        <h1 className="bm-title">{t.funnel.step32.title}</h1>
        <p className="bm-subtitle">{t.common.selectAllApply}</p>
        <div className="mt-1 flex flex-col gap-2.5">
          {allOpts.map((opt) => (
            <CheckboxOptionCard
              key={opt}
              label={opt}
              selected={funnel.eatingHabits.includes(opt)}
              onClick={() =>
                setFunnel({ eatingHabits: toggleMultiOption(funnel.eatingHabits, opt, none) })
              }
            />
          ))}
        </div>
        <div className="mt-2">
          <CTAButton disabled={funnel.eatingHabits.length === 0} onClick={next}>
            {t.common.nextStepBtn}
          </CTAButton>
        </div>
      </div>
    );
  }

  // Step 33: Especialistas certificados
  if (step === 33) {
    const avatars = [
      AVATARS.nutritionists.Elina,
      AVATARS.nutritionists.Anna,
      AVATARS.nutritionists.Simona,
    ];
    return (
      <div className="mt-5 flex flex-col gap-5">
        <h1 className="bm-title">{t.funnel.step33.title}</h1>
        <div className="flex flex-col gap-3">
          {t.funnel.step33.specialists.map((sp, i) => (
            <div
              key={sp.name}
              className="flex items-center gap-3.5 rounded-2xl border border-[#EAE3DC] bg-[#F5EFE8]/60 p-3.5"
            >
              <img
                src={avatars[i]}
                alt={sp.name}
                className="h-14 w-14 rounded-2xl object-cover"
              />
              <div>
                <p className="text-sm font-extrabold text-[#1F1510]">{sp.name}</p>
                <p className="mt-0.5 flex items-center gap-1 text-xs text-[#6B5E57]">
                  <span className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#2E1F19] text-[9px] text-white">
                    ✓
                  </span>
                  {sp.role}
                </p>
              </div>
            </div>
          ))}
        </div>
        <CTAButton onClick={next}>{t.common.continueBtn}</CTAButton>
      </div>
    );
  }

  // Step 34: Altura
  if (step === 34) {
    const isMetric = funnel.unitSystem === 'metric';
    const rawNum = Number(heightInput);
    const heightCmValid = isMetric
      ? rawNum >= 90 && rawNum <= 243
      : rawNum >= 3 && rawNum <= 8;
    const canContinue = heightCmValid && funnel.healthConsent;

    return (
      <div className="mt-5 flex flex-col gap-5">
        <h1 className="bm-title">{t.funnel.step34.title}</h1>
        <div className="rounded-3xl border border-[#EAE3DC] bg-white p-6 text-center shadow-sm">
          <UnitToggle
            value={funnel.unitSystem}
            onChange={(v) => setFunnel({ unitSystem: v })}
            metricLabel="cm"
            imperialLabel="ft"
          />
          <div className="mt-6 flex items-baseline justify-center gap-2 border-b-2 border-[#1F1510] pb-2">
            <input
              type="number"
              inputMode="decimal"
              value={heightInput}
              onChange={(e) => setHeightInput(e.target.value)}
              placeholder={t.funnel.step34.placeholder}
              className="w-32 bg-transparent text-center font-['Plus_Jakarta_Sans'] text-3xl font-extrabold text-[#1F1510] placeholder-[#B5A9A2] outline-none"
            />
            <span className="text-xl font-bold text-[#1F1510]">{isMetric ? 'cm' : 'ft'}</span>
          </div>
          <p className="mt-2 text-[11px] text-[#6B5E57]">
            {isMetric ? t.funnel.step34.rangeHintCm : t.funnel.step34.rangeHintFt}
          </p>

          <label className="mt-5 flex cursor-pointer items-start gap-2.5 text-left text-[11px] leading-snug text-[#6B5E57]">
            <input
              type="checkbox"
              checked={funnel.healthConsent}
              onChange={(e) => setFunnel({ healthConsent: e.target.checked })}
              className="mt-0.5 h-4 w-4 accent-[#2E1F19]"
            />
            <span>
              {t.funnel.step34.consentText}{' '}
              <span className="font-semibold text-[#0284C7] underline">
                {t.funnel.step34.privacyLink}
              </span>
            </span>
          </label>
        </div>

        <CTAButton
          disabled={!canContinue}
          onClick={() => {
            const cm = isMetric ? Math.round(rawNum) : Math.round(inToCm(rawNum * 12));
            setFunnel({ heightCm: cm });
            next();
          }}
        >
          {t.common.nextStepBtn}
        </CTAButton>
      </div>
    );
  }

  // Step 35: Peso atual
  if (step === 35) {
    const isMetric = funnel.unitSystem === 'metric';
    const rawNum = Number(weightInput);
    const valid = isMetric ? rawNum >= 25 && rawNum <= 300 : rawNum >= 55 && rawNum <= 660;

    return (
      <div className="mt-5 flex flex-col gap-5">
        <h1 className="bm-title">{t.funnel.step35.title}</h1>
        <div className="rounded-3xl border border-[#EAE3DC] bg-white p-6 text-center shadow-sm">
          <UnitToggle
            value={funnel.unitSystem}
            onChange={(v) => setFunnel({ unitSystem: v })}
            metricLabel="kg"
            imperialLabel="lbs"
          />
          <div className="mt-6 flex items-baseline justify-center gap-2 border-b-2 border-[#1F1510] pb-2">
            <input
              type="number"
              inputMode="decimal"
              value={weightInput}
              onChange={(e) => setWeightInput(e.target.value)}
              placeholder={t.funnel.step35.placeholder}
              className="w-32 bg-transparent text-center font-['Plus_Jakarta_Sans'] text-3xl font-extrabold text-[#1F1510] placeholder-[#B5A9A2] outline-none"
            />
            <span className="text-xl font-bold text-[#1F1510]">{isMetric ? 'kg' : 'lbs'}</span>
          </div>
          <p className="mt-2 text-[11px] text-[#6B5E57]">
            {isMetric ? t.funnel.step35.rangeHintKg : t.funnel.step35.rangeHintLbs}
          </p>
        </div>

        <CTAButton
          disabled={!valid}
          onClick={() => {
            const kg = isMetric ? Math.round(rawNum) : Math.round(lbToKg(rawNum));
            setFunnel({ currentWeightKg: kg });
            next();
          }}
        >
          {t.common.nextStepBtn}
        </CTAButton>
      </div>
    );
  }

  // Step 36: Objetivo de peso ideal
  if (step === 36) {
    const isMetric = funnel.unitSystem === 'metric';
    const currentKg = funnel.currentWeightKg ?? 75;
    const rawNum = Number(targetInput);
    const valid = isMetric ? rawNum >= 35 && rawNum <= 250 : rawNum >= 77 && rawNum <= 550;
    const targetKgCalc = valid
      ? isMetric
        ? Math.round(rawNum)
        : Math.round(lbToKg(rawNum))
      : currentKg;
    const delta = calcWeightDeltaPct(currentKg, targetKgCalc);
    const deltaMsg =
      delta.direction === 'gain'
        ? interpolate(t.funnel.step36.gainLabel, { pct: delta.pct })
        : delta.direction === 'lose'
          ? interpolate(t.funnel.step36.loseLabel, { pct: delta.pct })
          : t.funnel.step36.maintainLabel;

    return (
      <div className="mt-5 flex flex-col gap-5">
        <h1 className="bm-title">{t.funnel.step36.title}</h1>
        <div className="rounded-3xl border border-[#EAE3DC] bg-white p-6 text-center shadow-sm">
          <UnitToggle
            value={funnel.unitSystem}
            onChange={(v) => setFunnel({ unitSystem: v })}
            metricLabel="kg"
            imperialLabel="lbs"
          />
          <div className="mt-6 flex items-baseline justify-center gap-2 border-b-2 border-[#1F1510] pb-2">
            <input
              type="number"
              inputMode="decimal"
              value={targetInput}
              onChange={(e) => setTargetInput(e.target.value)}
              placeholder={
                isMetric ? String(Math.round(currentKg)) : String(Math.round(kgToLb(currentKg)))
              }
              className="w-32 bg-transparent text-center font-['Plus_Jakarta_Sans'] text-3xl font-extrabold text-[#1F1510] placeholder-[#B5A9A2] outline-none"
            />
            <span className="text-xl font-bold text-[#1F1510]">{isMetric ? 'kg' : 'lbs'}</span>
          </div>

          <div className="mt-5 rounded-2xl bg-[#F5EFE8] p-4 text-left">
            <p className="text-xs font-bold text-[#1F1510]">
              {t.funnel.step36.moveLabel} <span className="text-[#2E1F19]">{deltaMsg}</span>
            </p>
            <p className="mt-1.5 text-[11px] leading-relaxed text-[#6B5E57]">
              {t.funnel.step36.studyNote}
            </p>
          </div>
        </div>

        <CTAButton
          disabled={!valid}
          onClick={() => {
            setFunnel({ targetWeightKg: targetKgCalc });
            next();
          }}
        >
          {t.common.nextStepBtn}
        </CTAButton>
      </div>
    );
  }

  // Step 37: Qual é a sua idade?
  const ageVal = Number(ageInput);
  const ageValid = ageVal >= 16 && ageVal <= 99;
  return (
    <div className="mt-5 flex flex-col gap-5">
      <h1 className="bm-title">{t.funnel.step37.title}</h1>
      <div className="rounded-3xl border border-[#EAE3DC] bg-white p-6 text-center shadow-sm">
        <div className="flex items-baseline justify-center gap-2 border-b-2 border-[#1F1510] pb-2">
          <input
            type="number"
            inputMode="numeric"
            value={ageInput}
            onChange={(e) => setAgeInput(e.target.value)}
            placeholder="30"
            className="w-24 bg-transparent text-center font-['Plus_Jakarta_Sans'] text-3xl font-extrabold text-[#1F1510] placeholder-[#B5A9A2] outline-none"
          />
          <span className="text-xl font-bold text-[#1F1510]">{t.funnel.step37.unit}</span>
        </div>

        <div className="mt-5 flex items-start gap-2.5 rounded-2xl bg-[#F5EFE8] p-4 text-left">
          <Info size={16} className="mt-0.5 shrink-0 text-[#2E1F19]" />
          <div>
            <p className="text-xs font-bold text-[#1F1510]">{t.funnel.step37.noteTitle}</p>
            <p className="mt-1 text-[11px] leading-relaxed text-[#6B5E57]">
              {t.funnel.step37.noteDesc}
            </p>
          </div>
        </div>
      </div>

      <CTAButton
        disabled={!ageValid}
        onClick={() => {
          setFunnel({ exactAge: Math.round(ageVal) });
          next();
        }}
      >
        {t.common.nextStepBtn}
      </CTAButton>
    </div>
  );
}
