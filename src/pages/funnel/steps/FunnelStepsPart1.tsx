import { Check, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { CTAButton } from '../../../components/CTAButton';
import { AVATARS } from '../../../data/avatars';
import { interpolate } from '../../../i18n/translations';
import { useI18n } from '../../../i18n/I18nProvider';
import { useBestMeStore } from '../../../store/useBestMeStore';
import { CheckboxOptionCard, RadioOptionCard, toggleMultiOption } from './StepShell';

export function FunnelStepsPart1() {
  const { t } = useI18n();
  const { step, funnel, setFunnel, next } = useBestMeStore();
  const gender = funnel.gender ?? 'mulher';
  const isWoman = gender === 'mulher';

  const autoAdvance = () => {
    window.setTimeout(() => next(), 200);
  };

  // Step 0: Gênero inicial (Homem / Mulher)
  if (step === 0) {
    return (
      <div className="mt-6 flex flex-col gap-5">
        <div className="text-center">
          <p className="text-[11px] font-extrabold uppercase tracking-widest text-[#6B5E57]">
            {t.funnel.step0.eyebrow}
          </p>
          <h1 className="bm-title mt-2">{t.funnel.step0.title}</h1>
          <p className="bm-subtitle mt-2">{t.funnel.step0.subtitle}</p>
        </div>

        <div className="mt-2 grid grid-cols-2 gap-3.5">
          <motion.button
            type="button"
            whileHover={{ scale: 1.025, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            onClick={() => {
              setFunnel({ gender: 'mulher' });
              next();
            }}
            className={`group flex flex-col overflow-hidden rounded-3xl border bg-[#F5EFE8] text-left shadow-sm transition hover:border-[#2E1F19] ${
              funnel.gender === 'mulher' ? 'border-2 border-[#2E1F19]' : 'border-[#EAE3DC]'
            }`}
          >
            <div className="h-52 w-full overflow-hidden bg-[#F5EFE8]">
              <img
                src={AVATARS.gender.mulher}
                alt={t.funnel.step0.woman}
                className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-3">
              <div>
                <p className="font-['Plus_Jakarta_Sans'] text-base font-extrabold text-[#1F1510]">
                  {t.funnel.step0.woman}
                </p>
                <p className="mt-0.5 text-[11px] leading-snug text-[#6B5E57]">
                  {t.funnel.step0.womanSub}
                </p>
              </div>
              <div className="mt-3 flex items-center justify-between rounded-xl bg-[#2E1F19] px-3 py-2 text-xs font-bold text-white">
                <span>{t.funnel.step0.woman}</span>
                <ChevronRight size={15} />
              </div>
            </div>
          </motion.button>

          <motion.button
            type="button"
            whileHover={{ scale: 1.025, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            onClick={() => {
              setFunnel({ gender: 'homem' });
              next();
            }}
            className={`group flex flex-col overflow-hidden rounded-3xl border bg-[#F5EFE8] text-left shadow-sm transition hover:border-[#2E1F19] ${
              funnel.gender === 'homem' ? 'border-2 border-[#2E1F19]' : 'border-[#EAE3DC]'
            }`}
          >
            <div className="h-52 w-full overflow-hidden bg-[#F5EFE8]">
              <img
                src={AVATARS.gender.homem}
                alt={t.funnel.step0.man}
                className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-3">
              <div>
                <p className="font-['Plus_Jakarta_Sans'] text-base font-extrabold text-[#1F1510]">
                  {t.funnel.step0.man}
                </p>
                <p className="mt-0.5 text-[11px] leading-snug text-[#6B5E57]">
                  {t.funnel.step0.manSub}
                </p>
              </div>
              <div className="mt-3 flex items-center justify-between rounded-xl bg-[#2E1F19] px-3 py-2 text-xs font-bold text-white">
                <span>{t.funnel.step0.man}</span>
                <ChevronRight size={15} />
              </div>
            </div>
          </motion.button>
        </div>
      </div>
    );
  }

  // Step 1: Faixa etária (Desafio de Calistenia)
  if (step === 1) {
    const ranges = ['18-29', '30-39', '40-49', '50+'] as const;
    return (
      <div className="mt-4 flex flex-col gap-4">
        <div className="text-center">
          <h1 className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold uppercase tracking-tight text-[#1F1510]">
            {t.funnel.step1.title}
          </h1>
          <p className="mt-1.5 text-xs font-semibold uppercase tracking-wide text-[#6B5E57]">
            {t.funnel.step1.subtitle}
          </p>
        </div>

        <div className="mt-1 grid grid-cols-2 gap-3">
          {ranges.map((r, idx) => (
            <motion.button
              key={r}
              type="button"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.25 }}
              whileHover={{ scale: 1.025, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setFunnel({ ageRange: r });
                next();
              }}
              className="group overflow-hidden rounded-2xl border border-[#EAE3DC] bg-[#F5EFE8] p-1.5 text-left shadow-sm transition hover:border-[#2E1F19]"
            >
              <div className="h-36 overflow-hidden rounded-xl bg-[#F5EFE8]">
                <img
                  src={AVATARS.ageRanges[gender][r]}
                  alt={`${t.funnel.step1.ageLabel} ${r}`}
                  className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-1.5 flex items-center justify-between rounded-xl bg-[#2E1F19] px-3 py-2 text-xs font-bold text-white">
                <span>
                  {t.funnel.step1.ageLabel} {r}
                </span>
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#2E1F19]">
                  <ChevronRight size={13} />
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        <p className="mt-2 text-center text-[11px] leading-relaxed text-[#6B5E57]">
          {t.common.termsPrefix}{' '}
          <span className="underline">{t.common.termsLink}</span> |{' '}
          <span className="underline">{t.common.privacyLink}</span>. {t.common.termsSuffix}.
        </p>
      </div>
    );
  }

  // Step 2: Prova social numérica + Como visto em
  if (step === 2) {
    const headline = isWoman ? t.funnel.step2.headlineWoman : t.funnel.step2.headlineMan;
    const ageDisplay = funnel.ageRange ? funnel.ageRange.replace('-', ' e ') : '30 e 39';
    return (
      <div className="mt-4 flex flex-col gap-5">
        <div className="overflow-hidden rounded-3xl border border-[#EAE3DC] bg-[#F5EFE8] p-4">
          <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-bold text-[#6B5E57]">
            {['Mon', 'Tue', 'Wed', 'Thu'].map((d) => (
              <div key={d} className="rounded-xl bg-white/80 p-1.5 shadow-sm">
                <div className="h-10 overflow-hidden rounded-lg bg-[#F5EFE8]">
                  <img
                    src={isWoman ? AVATARS.objectives.mulher['Conseguir um corpo firme e tonificado'] : AVATARS.objectives.homem['Conseguir um corpo firme e tonificado']}
                    alt={d}
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="mt-1 block">{d}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 overflow-hidden rounded-2xl bg-white">
            <img
              src={isWoman ? AVATARS.gender.mulher : AVATARS.gender.homem}
              alt="Challenge preview"
              className="h-44 w-full object-cover object-top"
            />
          </div>
        </div>

        <div>
          <h2 className="font-['Plus_Jakarta_Sans'] text-xl font-extrabold text-[#1F1510]">
            {headline}
          </h2>
          <p className="mt-1 text-sm text-[#6B5E57]">
            {interpolate(t.funnel.step2.subtext, { age: ageDisplay })}
          </p>
        </div>

        <div className="border-t border-[#EAE3DC] pt-4">
          <p className="text-xs font-bold text-[#6B5E57]">{t.common.asSeenIn}</p>
          <div className="mt-2 flex flex-wrap items-center gap-4 text-sm font-extrabold text-[#4B3F39]">
            <span>healthline</span>
            <span className="text-xs uppercase tracking-wider">Good Housekeeping</span>
            <span className="font-serif italic">
              {isWoman ? "Women's Health" : "Men's Health"}
            </span>
          </div>
        </div>

        <CTAButton onClick={next}>{t.common.continueBtn}</CTAButton>
      </div>
    );
  }

  // Step 3: Você já experimentou treinos de calistenia?
  if (step === 3) {
    return (
      <div className="mt-5 flex flex-col gap-4">
        <h1 className="bm-title">{t.funnel.step3.title}</h1>
        <div className="mt-2 flex flex-col gap-3">
          <RadioOptionCard
            label={t.funnel.step3.yes}
            selected={funnel.calisthenicsExp === 'yes'}
            onClick={() => {
              setFunnel({ calisthenicsExp: 'yes', fastingExperience: 'experimentei' });
              autoAdvance();
            }}
          />
          <RadioOptionCard
            label={t.funnel.step3.no}
            selected={funnel.calisthenicsExp === 'no'}
            onClick={() => {
              setFunnel({ calisthenicsExp: 'no', fastingExperience: 'nao_conheco' });
              autoAdvance();
            }}
          />
        </div>
        <div className="mt-4 flex justify-center">
          <img
            src={isWoman ? AVATARS.objectives.mulher['Conseguir um corpo firme e tonificado'] : AVATARS.objectives.homem['Conseguir um corpo firme e tonificado']}
            alt=""
            className="h-44 rounded-3xl object-cover"
          />
        </div>
      </div>
    );
  }

  // Step 4: Intersticial educativa sobre calistenia
  if (step === 4) {
    return (
      <div className="mt-4 flex flex-col gap-5">
        <div className="overflow-hidden rounded-3xl border border-[#EAE3DC] bg-[#F5EFE8]">
          <img
            src={isWoman ? AVATARS.objectives.mulher['Melhorar minha saúde em geral'] : AVATARS.objectives.homem['Melhorar minha saúde em geral']}
            alt=""
            className="h-56 w-full object-cover object-top"
          />
        </div>
        <div>
          <h1 className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold leading-tight text-[#1F1510]">
            {t.funnel.step4.title}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-[#6B5E57]">{t.funnel.step4.p1}</p>
          <p className="mt-2 text-sm font-medium leading-relaxed text-[#1F1510]">
            {isWoman ? t.funnel.step4.p2Woman : t.funnel.step4.p2Man}
          </p>
        </div>
        <CTAButton onClick={next}>{t.common.continueBtn}</CTAButton>
      </div>
    );
  }

  // Step 5: Principal objetivo
  if (step === 5) {
    const opts = [
      { id: 'lose_weight' as const, label: t.funnel.step5.loseWeight, intensity: 'maximo' as const },
      { id: 'gain_muscle' as const, label: t.funnel.step5.gainMuscle, intensity: 'tentar' as const },
      { id: 'stay_fit' as const, label: t.funnel.step5.stayFit, intensity: 'testar' as const },
    ];
    return (
      <div className="mt-5 flex flex-col gap-4">
        <h1 className="bm-title">{t.funnel.step5.title}</h1>
        <div className="mt-2 flex flex-col gap-3">
          {opts.map((o) => (
            <RadioOptionCard
              key={o.id}
              label={o.label}
              selected={funnel.mainGoal === o.id}
              onClick={() => {
                setFunnel({ mainGoal: o.id, goalIntensity: o.intensity });
                autoAdvance();
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  // Step 6: O que mais você espera alcançar? (Multi)
  if (step === 6) {
    const none = t.common.noneOption;
    const allOpts = [...t.funnel.step6.options, none];
    return (
      <div className="mt-4 flex flex-col gap-4">
        <h1 className="bm-title">{t.funnel.step6.title}</h1>
        <p className="bm-subtitle">{t.common.selectAllApply}</p>
        <div className="mt-1 flex flex-col gap-2.5">
          {allOpts.map((label) => (
            <CheckboxOptionCard
              key={label}
              label={label}
              selected={funnel.extraGoals.includes(label)}
              onClick={() => {
                const updated = toggleMultiOption(funnel.extraGoals, label, none);
                setFunnel({ extraGoals: updated, objectives: updated });
              }}
            />
          ))}
        </div>
        <div className="mt-2">
          <CTAButton disabled={funnel.extraGoals.length === 0} onClick={next}>
            {t.common.nextStepBtn}
          </CTAButton>
        </div>
      </div>
    );
  }

  // Step 7: Como você descreveria seu físico?
  if (step === 7) {
    const images = AVATARS.calisthenics.physiques[gender];
    return (
      <div className="mt-4 flex flex-col gap-4">
        <h1 className="bm-title">{t.funnel.step7.title}</h1>
        <div className="mt-1 grid grid-cols-2 gap-3">
          {t.funnel.step7.options.map((opt) => {
            const imgSrc = images[opt.id as keyof typeof images] ?? images.average;
            const selected = funnel.currentPhysique === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => {
                  setFunnel({ currentPhysique: opt.id });
                  autoAdvance();
                }}
                className={`flex flex-col overflow-hidden rounded-2xl border p-2 text-left transition ${
                  selected
                    ? 'border-[#2E1F19] bg-[#F5EFE8]'
                    : 'border-[#EAE3DC] bg-white hover:border-[#C9BDB4]'
                }`}
              >
                <div className="h-32 w-full overflow-hidden rounded-xl bg-[#FDFBF7]">
                  <img src={imgSrc} alt={opt.label} className="h-full w-full object-cover object-top" />
                </div>
                <div className="mt-2 flex items-center justify-between gap-1 px-1 py-1">
                  <span className="text-xs font-semibold text-[#1F1510]">{opt.label}</span>
                  <span
                    className={`h-4 w-4 shrink-0 rounded-full border ${
                      selected ? 'border-[#2E1F19] bg-[#2E1F19]' : 'border-[#D5CCC3]'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Step 8: Qual é o seu corpo de sonho?
  if (step === 8) {
    const images = AVATARS.calisthenics.dreamBodies[gender];
    return (
      <div className="mt-4 flex flex-col gap-4">
        <h1 className="bm-title">{t.funnel.step8.title}</h1>
        <p className="bm-subtitle">{t.funnel.step8.subtitle}</p>
        <div className="mt-1 grid grid-cols-2 gap-3">
          {t.funnel.step8.options.map((opt) => {
            const imgSrc = images[opt.id as keyof typeof images] ?? images.toned;
            const selected = funnel.dreamBody === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => {
                  setFunnel({ dreamBody: opt.id });
                  autoAdvance();
                }}
                className={`flex flex-col overflow-hidden rounded-2xl border p-2 text-left transition ${
                  selected
                    ? 'border-[#2E1F19] bg-[#F5EFE8]'
                    : 'border-[#EAE3DC] bg-white hover:border-[#C9BDB4]'
                }`}
              >
                <div className="h-32 w-full overflow-hidden rounded-xl bg-[#FDFBF7]">
                  <img src={imgSrc} alt={opt.label} className="h-full w-full object-cover object-top" />
                </div>
                <div className="mt-2 flex items-center justify-between gap-1 px-1 py-1">
                  <span className="text-xs font-semibold text-[#1F1510]">{opt.label}</span>
                  <span
                    className={`h-4 w-4 shrink-0 rounded-full border ${
                      selected ? 'border-[#2E1F19] bg-[#2E1F19]' : 'border-[#D5CCC3]'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Step 9: Intersticial "Grandes vitórias começam com pequenos passos"
  if (step === 9) {
    const heights = ['h-16', 'h-24', 'h-32', 'h-40'];
    const colors = ['bg-[#EAE2D8]', 'bg-[#DED3C6]', 'bg-[#D0BFA9]', 'bg-[#B99E86] text-white'];
    return (
      <div className="mt-4 flex flex-col gap-5">
        <div className="rounded-3xl border border-[#EAE3DC] bg-[#F5EFE8] p-5">
          <div className="flex items-end justify-between gap-2 pt-4">
            <div className="flex flex-col items-center rounded-xl bg-white px-2.5 py-2 text-[10px] font-bold text-[#1F1510] shadow-sm">
              <span>{t.funnel.step9.monday}</span>
              <span className="mt-1 text-base">✦</span>
            </div>
            {t.funnel.step9.weekLabels.map((wk, idx) => (
              <div key={wk} className="flex flex-1 flex-col items-center">
                <div
                  className={`flex w-full items-center justify-center rounded-t-xl p-1.5 text-center text-[10px] font-bold leading-tight text-[#1F1510] ${heights[idx]} ${colors[idx]}`}
                >
                  {t.funnel.step9.barTexts[idx]}
                </div>
                <span className="mt-1.5 text-[10px] font-semibold text-[#6B5E57]">{wk}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold text-[#1F1510]">
            {t.funnel.step9.title}
          </h1>
          <p className="mt-2.5 text-sm leading-relaxed text-[#6B5E57]">
            {t.funnel.step9.p1Prefix}
            <strong className="text-[#1F1510]">{t.funnel.step9.p1Bold}</strong>
          </p>
          <p className="mt-2 text-sm text-[#6B5E57]">{t.funnel.step9.p2}</p>
        </div>

        <CTAButton onClick={next}>{t.common.continueBtn}</CTAButton>
      </div>
    );
  }

  // Step 10: Há quanto tempo esteve no melhor físico?
  if (step === 10) {
    return (
      <div className="mt-5 flex flex-col gap-4">
        <h1 className="bm-title">{t.funnel.step10.title}</h1>
        <div className="mt-2 flex flex-col gap-3">
          {t.funnel.step10.options.map((opt) => (
            <RadioOptionCard
              key={opt}
              label={opt}
              selected={funnel.bestShapeAgo === opt}
              onClick={() => {
                setFunnel({ bestShapeAgo: opt });
                autoAdvance();
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  // Step 11: Como seu peso muda tipicamente?
  if (step === 11) {
    const opts = [
      { id: 'hard_lose' as const, label: t.funnel.step11.hardLose, body: 'Endomorfo' },
      { id: 'changes_easily' as const, label: t.funnel.step11.changesEasily, body: 'Mesomorfo' },
      { id: 'hard_gain' as const, label: t.funnel.step11.hardGain, body: 'Ectomorfo' },
    ];
    return (
      <div className="mt-5 flex flex-col gap-4">
        <h1 className="bm-title">{t.funnel.step11.title}</h1>
        <div className="mt-2 flex flex-col gap-3">
          {opts.map((opt) => (
            <RadioOptionCard
              key={opt.id}
              label={opt.label}
              selected={funnel.weightChangePattern === opt.id}
              onClick={() => {
                setFunnel({ weightChangePattern: opt.id, bodyType: opt.body });
                autoAdvance();
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  // Step 12: Intersticial Biótipo
  if (step === 12) {
    const pat = funnel.weightChangePattern;
    const title =
      pat === 'hard_lose'
        ? t.funnel.step12.endomorfoTitle
        : pat === 'hard_gain'
          ? t.funnel.step12.ectomorfoTitle
          : t.funnel.step12.mesomorfoTitle;
    const desc =
      pat === 'hard_lose'
        ? t.funnel.step12.endomorfoDesc
        : pat === 'hard_gain'
          ? t.funnel.step12.ectomorfoDesc
          : t.funnel.step12.mesomorfoDesc;

    return (
      <div className="mt-4 flex flex-col gap-5">
        <div className="relative overflow-hidden rounded-3xl border border-[#EAE3DC] bg-[#F5EFE8] p-4">
          <div className="overflow-hidden rounded-2xl border-4 border-[#1F1510] bg-white shadow-md">
            <img
              src={isWoman ? AVATARS.objectives.mulher['Conseguir um corpo firme e tonificado'] : AVATARS.objectives.homem['Conseguir um corpo firme e tonificado']}
              alt="Video coaching preview"
              className="h-44 w-full object-cover object-top"
            />
          </div>
          <div className="mt-2 flex items-center justify-between text-xs font-bold text-[#6B5E57]">
            <span>▶ 0:20</span>
            <span>Calisthenics Challenge</span>
          </div>
        </div>

        <div>
          <h1 className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold text-[#1F1510]">
            {title}
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-[#6B5E57]">{desc}</p>
          <p className="mt-3 text-sm leading-relaxed text-[#6B5E57]">
            {t.funnel.step12.p2Prefix}
            <strong className="text-[#1F1510]">{t.funnel.step12.p2Bold}</strong>
            {t.funnel.step12.p2Suffix}
          </p>
        </div>

        <CTAButton onClick={next}>{t.common.continueBtn}</CTAButton>
      </div>
    );
  }

  // Step 13: Quantas vezes treina?
  if (step === 13) {
    return (
      <div className="mt-5 flex flex-col gap-4">
        <h1 className="bm-title">{t.funnel.step13.title}</h1>
        <div className="mt-2 flex flex-col gap-3">
          {t.funnel.step13.options.map((opt) => (
            <RadioOptionCard
              key={opt}
              label={opt}
              selected={funnel.workoutFreq === opt}
              onClick={() => {
                setFunnel({ workoutFreq: opt, activityLevel: opt });
                autoAdvance();
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  // Step 14: Área de foco (Multi-escolha com mini-fotos)
  if (step === 14) {
    const focusImgs = AVATARS.calisthenics.focusAreas[gender];
    return (
      <div className="mt-4 flex flex-col gap-4">
        <h1 className="bm-title">{t.funnel.step14.title}</h1>
        <p className="bm-subtitle">{t.common.selectAllApply}</p>
        <div className="mt-1 flex flex-col gap-2.5">
          {t.funnel.step14.options.map((opt) => (
            <CheckboxOptionCard
              key={opt.id}
              label={opt.label}
              thumb={focusImgs[opt.id as keyof typeof focusImgs]}
              selected={funnel.focusAreas.includes(opt.id)}
              onClick={() => {
                const exists = funnel.focusAreas.includes(opt.id);
                setFunnel({
                  focusAreas: exists
                    ? funnel.focusAreas.filter((v) => v !== opt.id)
                    : [...funnel.focusAreas, opt.id],
                });
              }}
            />
          ))}
        </div>
        <div className="mt-2">
          <CTAButton disabled={funnel.focusAreas.length === 0} onClick={next}>
            {t.common.nextStepBtn}
          </CTAButton>
        </div>
      </div>
    );
  }

  // Step 15: Caminhadas
  if (step === 15) {
    return (
      <div className="mt-5 flex flex-col gap-4">
        <h1 className="bm-title">{t.funnel.step15.title}</h1>
        <div className="mt-2 flex flex-col gap-3">
          {t.funnel.step15.options.map((opt) => (
            <RadioOptionCard
              key={opt}
              label={opt}
              selected={funnel.walking === opt}
              onClick={() => {
                setFunnel({ walking: opt });
                autoAdvance();
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  // Step 16: Subir escadas
  if (step === 16) {
    return (
      <div className="mt-5 flex flex-col gap-4">
        <h1 className="bm-title">{t.funnel.step16.title}</h1>
        <div className="mt-2 flex flex-col gap-3">
          {t.funnel.step16.options.map((opt) => (
            <RadioOptionCard
              key={opt}
              label={opt}
              selected={funnel.stairsFeeling === opt}
              onClick={() => {
                setFunnel({ stairsFeeling: opt });
                autoAdvance();
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  // Step 17: Flexões
  if (step === 17) {
    return (
      <div className="mt-5 flex flex-col gap-4">
        <h1 className="bm-title">{t.funnel.step17.title}</h1>
        <div className="mt-2 flex flex-col gap-3">
          {t.funnel.step17.options.map((opt) => (
            <RadioOptionCard
              key={opt}
              label={opt}
              selected={funnel.pushups === opt}
              onClick={() => {
                setFunnel({ pushups: opt });
                autoAdvance();
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  // Step 18: Agachamentos
  if (step === 18) {
    return (
      <div className="mt-5 flex flex-col gap-4">
        <h1 className="bm-title">{t.funnel.step18.title}</h1>
        <div className="mt-2 flex flex-col gap-3">
          {t.funnel.step18.options.map((opt) => (
            <RadioOptionCard
              key={opt}
              label={opt}
              selected={funnel.squats === opt}
              onClick={() => {
                setFunnel({ squats: opt });
                autoAdvance();
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  // Step 19: Sensibilidades (3 cards com foto fiéis ao enunciado)
  const none = t.common.noneOption;
  const sensCards = [
    {
      id: t.funnel.step19.back,
      img: AVATARS.calisthenics.sensitivities[gender].back,
    },
    {
      id: t.funnel.step19.knees,
      img: AVATARS.calisthenics.sensitivities[gender].knees,
    },
    {
      id: none,
      img: AVATARS.calisthenics.sensitivities[gender].none,
    },
  ];

  return (
    <div className="mt-4 flex flex-col gap-4">
      <h1 className="bm-title">{t.funnel.step19.title}</h1>
      <p className="bm-subtitle">{t.common.selectAllApply}</p>
      <div className="mt-2 grid grid-cols-3 gap-2.5">
        {sensCards.map((c, idx) => {
          const selected = funnel.sensitivities.includes(c.id);
          return (
            <motion.button
              key={c.id}
              type="button"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.25 }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const updated = toggleMultiOption(funnel.sensitivities, c.id, none);
                setFunnel({ sensitivities: updated, healthConditions: updated });
              }}
              className={`flex flex-col justify-between overflow-hidden rounded-2xl border p-2 text-left shadow-xs transition ${
                selected ? 'border-[#2E1F19] bg-[#F5EFE8] ring-1 ring-[#2E1F19]' : 'border-[#EAE3DC] bg-white hover:border-[#C9BDB4]'
              }`}
            >
              <div className="h-28 w-full overflow-hidden rounded-xl bg-[#FAF7F2]">
                <img
                  src={c.img}
                  alt={c.id}
                  className="h-full w-full object-cover object-top transition duration-300 hover:scale-105"
                />
              </div>
              <div className="mt-2.5 flex items-center justify-between gap-1 px-0.5">
                <span className="text-[11px] font-bold leading-tight text-[#1F1510]">
                  {c.id}
                </span>
                <span
                  className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition ${
                    selected
                      ? 'border-[#2E1F19] bg-[#2E1F19] text-white'
                      : 'border-[#D5CCC3] bg-white'
                  }`}
                >
                  {selected && <Check size={10} strokeWidth={3} />}
                </span>
              </div>
            </motion.button>
          );
        })}
      </div>
      <div className="mt-3">
        <CTAButton disabled={funnel.sensitivities.length === 0} onClick={next}>
          {t.common.nextStepBtn}
        </CTAButton>
      </div>
    </div>
  );
}
