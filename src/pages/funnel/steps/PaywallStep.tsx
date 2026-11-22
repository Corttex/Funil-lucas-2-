import { useEffect, useState } from 'react';
import {
  Activity,
  Ban,
  Check,
  ChevronDown,
  Dumbbell,
  Flame,
  GraduationCap,
  Heart,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Timer,
  TrendingUp,
  Utensils,
  X,
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { CTAButton } from '../../../components/CTAButton';
import { AVATARS } from '../../../data/avatars';
import { generatePromoCode } from '../../../engine/calculations';
import { useI18n } from '../../../i18n/I18nProvider';
import { interpolate } from '../../../i18n/translations';
import { useBestMeStore } from '../../../store/useBestMeStore';
import { CheckoutModal } from '../CheckoutModal';

export function PaywallStep() {
  const { t, config } = useI18n();
  const { funnel, setFunnel } = useBestMeStore();
  const gender = funnel.gender ?? 'mulher';
  const isWoman = gender === 'mulher';

  const [secondsLeft, setSecondsLeft] = useState(599); // 09:59
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Exit intent & Downsell 7-day trial states (Imagens 1 e 2)
  const [showExitModal, setShowExitModal] = useState(false);
  const [trialMode, setTrialMode] = useState(false);
  const [exitTriggered, setExitTriggered] = useState(false);

  useEffect(() => {
    const id = window.setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  // Exit intent detection (cursor indo em direção ao topo da página no desktop)
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 20 && !exitTriggered && !trialMode) {
        setExitTriggered(true);
        setShowExitModal(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [exitTriggered, trialMode]);

  const mins = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
  const secs = String(secondsLeft % 60).padStart(2, '0');
  const promoCode = funnel.promoCode || generatePromoCode(funnel.name || 'bestme');

  const plans = [
    {
      id: '1_week' as const,
      title: t.funnel.paywall.plan1Title,
      sub: t.funnel.paywall.plan1Sub,
      pricing: config.plans['1_week'],
      popular: false,
    },
    {
      id: '4_weeks' as const,
      title: t.funnel.paywall.plan4Title,
      sub: '',
      pricing: config.plans['4_weeks'],
      popular: true,
    },
    {
      id: '12_weeks' as const,
      title: t.funnel.paywall.plan12Title,
      sub: '',
      pricing: config.plans['12_weeks'],
      popular: false,
    },
  ];

  const handleStartTrial = () => {
    setShowExitModal(false);
    setTrialMode(true);
    setFunnel({ selectedPlan: '7_days_trial' });
    setCheckoutOpen(true);
  };

  const PricingCardsBlock = () => (
    <div className="flex flex-col gap-3">
      {/* Green promo code banner */}
      <div className="rounded-2xl border border-[#C9DFB8] bg-[#EBF3E4] p-3 text-center">
        <p className="text-xs font-bold text-[#3F6212]">
          ✨ {t.funnel.paywall.promoAppliedTitle}
        </p>
        <div className="mt-1 flex items-center justify-between rounded-xl bg-white/90 px-3 py-1.5 text-xs text-[#1F1510]">
          <span className="font-mono font-bold">✓ {promoCode}</span>
          <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-[#3F6212]">
            {mins}:{secs}
          </span>
        </div>
      </div>

      {/* 3 Plan cards */}
      <div className="flex flex-col gap-2.5">
        {plans.map((p) => {
          const active = funnel.selectedPlan === p.id;
          return (
            <motion.button
              key={p.id}
              type="button"
              whileHover={{ scale: 1.012 }}
              whileTap={{ scale: 0.985 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              onClick={() => setFunnel({ selectedPlan: p.id })}
              className={`relative overflow-hidden rounded-2xl border text-left transition ${
                active
                  ? 'border-2 border-[#2E1F19] bg-white shadow-md ring-1 ring-[#2E1F19]'
                  : 'border-[#EAE3DC] bg-[#F5EFE8]/60 hover:border-[#C9BDB4]'
              }`}
            >
              {p.popular && (
                <div className="bg-[#2E1F19] py-1 text-center text-[10px] font-extrabold uppercase tracking-wider text-white">
                  {t.funnel.paywall.mostPopular}
                </div>
              )}
              <div className="flex items-center justify-between gap-2.5 p-3 sm:gap-3 sm:p-3.5">
                <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-2.5">
                  <motion.span
                    animate={active ? { scale: [0.8, 1.2, 1] } : { scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                      active
                        ? 'border-[#2E1F19] bg-[#2E1F19] text-white'
                        : 'border-[#D5CCC3] bg-white'
                    }`}
                  >
                    {active && <Check size={12} strokeWidth={3} />}
                  </motion.span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs sm:text-sm font-extrabold text-[#1F1510]">{p.title}</p>
                    {p.sub && (
                      <span className="mt-0.5 inline-block rounded bg-[#EAE3DC] px-1.5 py-0.5 text-[9px] font-bold text-[#6B5E57]">
                        {p.sub}
                      </span>
                    )}
                    <p className="mt-0.5 text-[11px] sm:text-xs">
                      <span className="text-[#8C7E77] line-through">{p.pricing.full}</span>{' '}
                      <span className="font-extrabold text-[#1F1510]">{p.pricing.sale}</span>
                    </p>
                  </div>
                </div>

                <div className="shrink-0 text-right pl-2">
                  <p className="text-[9px] sm:text-[10px] text-[#8C7E77] line-through">
                    {p.pricing.perDayFull}
                  </p>
                  <p className="font-['Plus_Jakarta_Sans'] text-base sm:text-lg font-extrabold leading-none text-[#1F1510] whitespace-nowrap">
                    {p.pricing.perDay}
                  </p>
                  <p className="mt-0.5 text-[9px] sm:text-[10px] font-semibold text-[#6B5E57] whitespace-nowrap">
                    {t.funnel.paywall.perDay}
                  </p>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      <CTAButton onClick={() => setCheckoutOpen(true)}>
        {t.funnel.paywall.getMyPlan}
      </CTAButton>

      <div className="rounded-xl border border-[#EAE3DC] bg-white p-3 text-center text-[10px] leading-relaxed text-[#8C7E77]">
        {t.funnel.paywall.legalSubscription}{' '}
        <span className="underline">{t.funnel.paywall.manageSub}</span>.
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-[10px] font-bold text-[#6B5E57]">
        <span className="rounded border border-[#EAE3DC] bg-white px-2 py-0.5">SSL SECURED</span>
        <span className="rounded border border-[#EAE3DC] bg-white px-2 py-0.5">VISA</span>
        <span className="rounded border border-[#EAE3DC] bg-white px-2 py-0.5">Mastercard</span>
        <span className="rounded border border-[#EAE3DC] bg-white px-2 py-0.5">PCI-DSS</span>
      </div>
    </div>
  );

  // 6 Features with icons from Image 4
  const featureList = [
    {
      title: t.funnel.paywall.features[0]?.title || 'Treinos fáceis em casa',
      desc: t.funnel.paywall.features[0]?.desc || 'para ganhar músculos e ficar em forma',
      icon: Flame,
    },
    {
      title: t.funnel.paywall.features[1]?.title || 'Exercícios para iniciantes',
      desc: t.funnel.paywall.features[1]?.desc || 'para uma barriga mais lisa e uma forma melhor',
      icon: TrendingUp,
    },
    {
      title: t.funnel.paywall.features[2]?.title || 'Rotinas de 10-20 min',
      desc: t.funnel.paywall.features[2]?.desc || 'que se encaixam na sua agenda',
      icon: Timer,
    },
    {
      title: t.funnel.paywall.features[3]?.title || 'Sem equipamento',
      desc: t.funnel.paywall.features[3]?.desc || 'tudo que você precisa é nosso plano',
      icon: Ban,
    },
    {
      title: t.funnel.paywall.features[4]?.title || 'Plano alimentar personalizado',
      desc: t.funnel.paywall.features[4]?.desc || 'com receitas rápidas e saborosas',
      icon: Utensils,
    },
    {
      title: t.funnel.paywall.features[5]?.title || 'Dicas e truques de especialistas',
      desc: t.funnel.paywall.features[5]?.desc || 'para melhorar seu estilo de vida e se manter em forma',
      icon: GraduationCap,
    },
  ];

  // 5 Realistic iPhone mockups (Image 3)
  const phoneMockups = [
    {
      id: 'workout',
      title: 'Full-Body Workout',
      sub: '120 kcal · 15 MIN',
      img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=400&q=80',
      action: 'START WORKOUT',
      tag: 'Glutes & Core',
    },
    {
      id: 'meal-log',
      title: 'Meal Log',
      sub: 'Salmon, Avocado, Egg',
      img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80',
      action: 'LOG FOOD',
      tag: 'Salmon 410 kcal',
    },
    {
      id: 'dashboard',
      title: 'Today · Aug 18',
      sub: 'Calisthenics Challenge',
      img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80',
      action: 'Do your workout ✓',
      tag: 'Water 1.5L',
    },
    {
      id: 'timer',
      title: 'Active Challenge',
      sub: '04:17 elapsed',
      img: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=400&q=80',
      action: '0:20',
      tag: '250 kcal burned',
    },
    {
      id: 'recipe',
      title: 'Chicken with Salad',
      sub: '380 kcal · 35g Protein',
      img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80',
      action: 'LOG MEAL',
      tag: '15 min prep',
    },
  ];

  return (
    <div className="flex flex-col gap-8 pb-12">
      {/* Sticky Top Discount Reservation Bar */}
      <div className="sticky top-0 z-30 flex items-center justify-between border-b border-[#EAE3DC] bg-[#FDFBF7]/95 px-3 py-2.5 backdrop-blur-sm sm:px-4">
        <div>
          <p className="text-[10px] font-medium text-[#6B5E57]">{t.funnel.paywall.timerLabel}</p>
          <p className="font-['Plus_Jakarta_Sans'] text-base font-extrabold leading-none text-[#1F1510] sm:text-lg">
            {mins} : {secs}
          </p>
        </div>
        <motion.button
          type="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => setCheckoutOpen(true)}
          className="shrink-0 rounded-full bg-[#2E1F19] px-3.5 py-2 text-[10px] font-extrabold uppercase tracking-wide text-white shadow-sm whitespace-nowrap sm:px-4 sm:text-[11px]"
        >
          {t.funnel.paywall.topCta}
        </motion.button>
      </div>

      {/* Hero: Agora vs Seu objetivo */}
      <div>
        <h1 className="bm-title">{t.funnel.paywall.heroTitle}</h1>

        <div className="mt-4 overflow-hidden rounded-3xl border border-[#EAE3DC] bg-[#F5EFE8] p-3">
          <div className="grid grid-cols-2 rounded-2xl bg-white p-1.5 text-center text-xs font-bold text-[#1F1510]">
            <span>{t.funnel.paywall.nowLabel}</span>
            <span>{t.funnel.paywall.goalLabel}</span>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-3">
            <img
              src={isWoman ? AVATARS.paywall.todayMulher : AVATARS.paywall.todayHomem}
              alt={t.funnel.paywall.nowLabel}
              className="h-44 w-full rounded-2xl bg-white object-cover object-top"
            />
            <img
              src={isWoman ? AVATARS.paywall.goalMulher : AVATARS.paywall.goalHomem}
              alt={t.funnel.paywall.goalLabel}
              className="h-44 w-full rounded-2xl bg-white object-cover object-top"
            />
          </div>

          <div className="mt-3 grid grid-cols-2 gap-3 rounded-2xl bg-white p-3 text-xs">
            <div>
              <p className="text-[10px] text-[#6B5E57]">{t.funnel.paywall.muscleStrength}</p>
              <p className="font-bold text-[#1F1510]">{t.funnel.paywall.strengthNow}</p>
              <div className="mt-1.5 grid grid-cols-3 gap-1">
                <span className="h-1 rounded-full bg-[#2E1F19]" />
                <span className="h-1 rounded-full bg-[#2E1F19]" />
                <span className="h-1 rounded-full bg-[#E7E0D8]" />
              </div>
              <p className="mt-2.5 text-[10px] text-[#6B5E57]">
                {t.funnel.paywall.calisthenicsLevel}
              </p>
              <p className="font-bold text-[#1F1510]">{t.funnel.paywall.levelNow}</p>
            </div>
            <div>
              <p className="text-[10px] text-[#6B5E57]">{t.funnel.paywall.muscleStrength}</p>
              <p className="font-bold text-[#1F1510]">{t.funnel.paywall.strengthGoal}</p>
              <div className="mt-1.5 grid grid-cols-3 gap-1">
                <span className="h-1 rounded-full bg-[#2E1F19]" />
                <span className="h-1 rounded-full bg-[#2E1F19]" />
                <span className="h-1 rounded-full bg-[#2E1F19]" />
              </div>
              <p className="mt-2.5 text-[10px] text-[#6B5E57]">
                {t.funnel.paywall.calisthenicsLevel}
              </p>
              <p className="font-bold text-[#1F1510]">{t.funnel.paywall.levelGoal}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Choose your plan block #1 (ou Card de Teste de 7 Dias - Imagem 2) */}
      {trialMode ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-3xl border-2 border-[#2E1F19] bg-white p-6 sm:p-8 text-center shadow-md"
        >
          <span className="inline-block rounded-full bg-[#EBF3E4] px-3 py-1 text-xs font-extrabold text-[#3F6212] mb-3">
            ✓ TESTE DE 7 DIAS PERSONALIZADO
          </span>
          <h2 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl font-extrabold text-[#1F1510]">
            {interpolate(t.funnel.paywall.trialHeroTitle, {
              price: config.plans['7_days_trial'].sale,
            })}
          </h2>
          <p className="mt-2 text-sm font-semibold text-[#6B5E57]">
            {interpolate(t.funnel.paywall.trialHeroSub, {
              renewalPrice: config.plans['4_weeks'].full,
            })}
          </p>

          <div className="mt-6">
            <CTAButton onClick={() => setCheckoutOpen(true)}>
              {t.funnel.paywall.trialStartCta}
            </CTAButton>
          </div>

          <div className="mt-5 rounded-2xl border border-[#EAE3DC] bg-[#FAF8F5] p-4 text-center text-[11px] leading-relaxed text-[#8C7E77]">
            {interpolate(t.funnel.paywall.trialLegal, {
              renewalPrice: config.plans['4_weeks'].full,
            })}
          </div>

          <button
            type="button"
            onClick={() => {
              setTrialMode(false);
              setFunnel({ selectedPlan: '4_weeks' });
            }}
            className="mt-4 text-xs font-bold text-[#6B5E57] hover:text-[#1F1510] underline transition"
          >
            {t.funnel.paywall.trialSeeOtherPlans}
          </button>
        </motion.div>
      ) : (
        <div>
          <h2 className="bm-title mb-4">{t.funnel.paywall.choosePlanTitle}</h2>
          <PricingCardsBlock />
          <div className="mt-3 text-center">
            <button
              type="button"
              onClick={() => setShowExitModal(true)}
              className="text-xs font-semibold text-[#6B5E57] hover:text-[#1F1510] underline transition"
            >
              💡 {t.funnel.paywall.exitModalTitle} {t.funnel.paywall.exitModalCta}
            </button>
          </div>
        </div>
      )}

      {/* O que está incluído no seu plano (5 iPhones realistas - Imagem 3) */}
      <div className="rounded-3xl bg-[#F5EFE8]/70 p-5 sm:p-7">
        <h2 className="bm-title">{t.funnel.paywall.includedTitle}</h2>

        {/* 5 iPhone mockups carousel strip */}
        <div className="mt-5 flex gap-4 overflow-x-auto pb-4 pt-1 scrollbar-none justify-start sm:justify-center">
          {phoneMockups.map((p) => (
            <div
              key={p.id}
              className="w-[152px] sm:w-[165px] shrink-0 rounded-[30px] border-[5px] border-[#1F1510] bg-[#1F1510] p-1 shadow-lg transition hover:scale-[1.02]"
            >
              <div className="flex h-full flex-col justify-between rounded-[24px] bg-[#FAF8F5] p-2 text-center overflow-hidden">
                {/* Dynamic island pill */}
                <div className="mx-auto h-2 w-10 rounded-full bg-[#1F1510] mb-1" />

                <div className="overflow-hidden rounded-xl border border-[#EAE3DC] bg-white">
                  <img src={p.img} alt={p.title} className="h-28 w-full object-cover" />
                </div>

                <div className="pt-2">
                  <p className="font-['Plus_Jakarta_Sans'] text-[11px] font-extrabold text-[#1F1510] leading-tight">
                    {p.title}
                  </p>
                  <p className="mt-0.5 text-[9px] text-[#6B5E57] leading-tight">{p.sub}</p>
                </div>

                <div className="mt-2.5">
                  <span className="block w-full rounded-full bg-[#2E1F19] py-1 text-[9px] font-bold uppercase tracking-wider text-white shadow-xs">
                    {p.action}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features + Your progress 2-Column Grid (Imagem 4) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Left Column: 6 Features List */}
          <div className="flex flex-col justify-between gap-3.5">
            {featureList.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="flex items-start gap-3 rounded-2xl bg-white/80 p-3.5 border border-[#EAE3DC] shadow-2xs"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F5EFE8] text-[#2E1F19]">
                    <Icon size={18} strokeWidth={2.2} />
                  </div>
                  <div>
                    <p className="text-xs font-extrabold text-[#1F1510]">{feat.title}</p>
                    <p className="mt-0.5 text-[11px] text-[#6B5E57] leading-snug">{feat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Your Progress Interactive Card with Fit Model */}
          <div className="relative overflow-hidden rounded-3xl border border-[#EAE3DC] bg-white p-5 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <p className="font-['Plus_Jakarta_Sans'] text-base font-extrabold text-[#1F1510]">
                  {t.funnel.paywall.progressHeader}
                </p>
                <span className="rounded-full bg-[#EBF3E4] px-2.5 py-0.5 text-[10px] font-extrabold uppercase text-[#3F6212]">
                  14 Dias
                </span>
              </div>

              {/* Progress bar */}
              <div className="mt-2.5 h-2 w-full rounded-full bg-[#F5EFE8] overflow-hidden">
                <div className="h-full w-2/5 rounded-full bg-[#2E1F19]" />
              </div>
            </div>

            <div className="mt-4 relative min-h-[270px]">
              {/* Grid of days 1 to 14 */}
              <div className="grid grid-cols-3 gap-1.5 text-center text-[10px] max-w-[62%] sm:max-w-[60%] z-10 relative">
                {[
                  { day: 1, done: true },
                  { day: 2, done: true },
                  { day: 3, done: true },
                  { day: 4, min: '12 min' },
                  { day: 5, min: '15 min' },
                  { day: 6, min: '7 min' },
                  { day: 7, done: true },
                  { day: 8, min: '8 min' },
                  { day: 9, min: '8 min' },
                  { day: 10, min: '10 min' },
                  { day: 11, done: true },
                  { day: 12, min: '8 min' },
                  { day: 13, min: '17 min' },
                  { day: 14, min: '11 min' },
                ].map((item) => (
                  <div
                    key={item.day}
                    className={`rounded-xl p-2 font-bold shadow-2xs transition ${
                      item.done
                        ? 'bg-[#2E1F19] text-white'
                        : 'border border-[#EAE3DC] bg-[#FAF8F5] text-[#6B5E57]'
                    }`}
                  >
                    <span className="block text-[8px] opacity-80">Day {item.day}</span>
                    <span className="mt-0.5 block text-[10px] font-extrabold">
                      {item.done ? '✓' : item.min}
                    </span>
                  </div>
                ))}
              </div>

              {/* Athletic Fit Model on the right */}
              <div className="absolute right-[-10px] bottom-[-20px] top-0 w-[48%] pointer-events-none flex items-end justify-end">
                <img
                  src={isWoman ? '/assets/gender-woman-fit.jpg' : '/assets/gender-man-fit.jpg'}
                  alt="Fit Progress Model"
                  className="h-[280px] w-full object-cover object-top drop-shadow-md rounded-2xl"
                  style={{
                    maskImage: 'linear-gradient(to right, transparent 0%, black 25%)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 25%)',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2.2M Ratings + App of the day */}
      <div className="rounded-3xl bg-[#F5EFE8]/80 p-5 text-center">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold text-[#1F1510]">2.2M</p>
            <p className="text-[11px] text-[#6B5E57]">{t.funnel.paywall.ratingsCount}</p>
          </div>
          <div>
            <p className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold text-[#1F1510]">1.7M</p>
            <p className="text-[11px] text-[#6B5E57]">{t.funnel.paywall.ratingsFiveStar}</p>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[#6B5E57]">
          <span>🌿</span>
          <div>
            <p className="font-extrabold text-[#1F1510]">{t.funnel.paywall.appOfDay}</p>
            <p className="text-[10px]">{t.funnel.paywall.appOfDaySub}</p>
          </div>
          <span>🌿</span>
        </div>
      </div>

      {/* Results that make us proud */}
      <div>
        <h2 className="bm-title">{t.funnel.paywall.resultsTitle}</h2>
        <div className="mt-4 flex flex-col gap-3">
          {t.funnel.paywall.resultsCards.map((card, i) => {
            const imgs = AVATARS.calisthenics.beforeAfter[i];
            return (
              <div
                key={card.name}
                className="overflow-hidden rounded-2xl border border-[#EAE3DC] bg-[#F5EFE8]/50 p-3"
              >
                <div className="grid grid-cols-2 gap-1.5">
                  <img src={imgs.before} alt="Before" className="h-32 w-full rounded-xl object-cover" />
                  <img src={imgs.after} alt="After" className="h-32 w-full rounded-xl object-cover" />
                </div>
                <p className="mt-2.5 text-sm font-extrabold text-[#1F1510]">{card.name}</p>
                <p className="mt-1 text-xs leading-relaxed text-[#6B5E57]">{card.quote}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="rounded-3xl bg-[#F5EFE8]/70 p-5">
        <h2 className="bm-title">{t.funnel.paywall.faqTitle}</h2>
        <div className="mt-4 flex flex-col gap-2">
          {t.funnel.paywall.faqs.map((faq, idx) => {
            const open = openFaq === idx;
            return (
              <div key={faq.q} className="border-b border-[#EAE3DC] py-2.5 last:border-0">
                <button
                  type="button"
                  onClick={() => setOpenFaq(open ? null : idx)}
                  className="flex w-full items-center justify-between gap-2 text-left text-xs font-extrabold text-[#1F1510]"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={`shrink-0 transition ${open ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="mt-2 overflow-hidden text-xs leading-relaxed text-[#6B5E57]"
                    >
                      {faq.a}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* As Seen In + Trusted by 10M */}
      <div>
        <div className="rounded-2xl bg-[#F5EFE8] p-4 text-center">
          <p className="text-xs font-bold text-[#6B5E57]">{t.common.asSeenIn}</p>
          <div className="mt-2 flex flex-wrap justify-center gap-4 text-sm font-extrabold text-[#4B3F39]">
            <span>healthline</span>
            <span className="font-serif italic">Women&apos;s Health</span>
            <span className="text-xs uppercase">Good Housekeeping</span>
          </div>
        </div>

        <h2 className="bm-title mt-6">{t.funnel.paywall.trustedTitle}</h2>
        <div className="mt-4 flex flex-col gap-3">
          {t.funnel.paywall.trustCards.map((tc) => (
            <div key={tc.title} className="rounded-2xl bg-[#F5EFE8]/70 p-4">
              <div className="flex items-center gap-1 text-[#00B67A]">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={13} fill="currentColor" />
                ))}
              </div>
              <div className="mt-2 flex items-center justify-between gap-2">
                <p className="text-xs font-extrabold text-[#1F1510]">{tc.title}</p>
                <span className="text-[11px] text-[#6B5E57]">{tc.author}</span>
              </div>
              <p className="mt-1 text-xs leading-relaxed text-[#6B5E57]">{tc.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-center text-[10px] leading-relaxed text-[#8C7E77]">
          {t.funnel.paywall.disclaimer}
        </p>

        <div className="mt-4 flex items-center justify-center gap-2 text-xs font-bold text-[#1F1510]">
          <span className="text-[#00B67A]">★ Trustpilot</span>
          <span>· {t.funnel.paywall.excellent}</span>
          <span className="text-[#00B67A]">★★★★★</span>
        </div>
      </div>

      {/* Bottom Pricing Section */}
      <div>
        <h2 className="bm-title mb-4">{t.funnel.paywall.visibleResultsTitle}</h2>
        {trialMode ? (
          <div className="rounded-3xl border-2 border-[#2E1F19] bg-white p-6 sm:p-8 text-center shadow-md">
            <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold text-[#1F1510]">
              {interpolate(t.funnel.paywall.trialHeroTitle, {
                price: config.plans['7_days_trial'].sale,
              })}
            </h3>
            <p className="mt-1 text-xs font-semibold text-[#6B5E57]">
              {interpolate(t.funnel.paywall.trialHeroSub, {
                renewalPrice: config.plans['4_weeks'].full,
              })}
            </p>
            <div className="mt-5">
              <CTAButton onClick={() => setCheckoutOpen(true)}>
                {t.funnel.paywall.trialStartCta}
              </CTAButton>
            </div>
          </div>
        ) : (
          <PricingCardsBlock />
        )}
      </div>

      {/* 30-Day Money-Back Guarantee */}
      <div className="rounded-3xl bg-[#F5EFE8] p-6 text-center">
        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-[#C9DFB8] bg-[#EBF3E4] text-[#3F6212]">
          <Check size={18} strokeWidth={3} />
        </div>
        <h3 className="mt-3 font-['Plus_Jakarta_Sans'] text-lg font-extrabold text-[#1F1510]">
          {t.funnel.paywall.guaranteeTitle}
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-[#6B5E57]">
          {t.funnel.paywall.guaranteeDesc}
        </p>
        <p className="mt-3 text-[11px] text-[#6B5E57]">
          {t.funnel.paywall.guaranteeLinkPrefix}{' '}
          <span className="text-[#0284C7] underline">{t.funnel.paywall.guaranteeLink}</span>
        </p>
      </div>

      {/* Footer Legal */}
      <footer className="text-center text-[11px] text-[#8C7E77]">
        <p>{t.funnel.paywall.companyLegal}</p>
        <div className="mt-2 flex justify-center gap-4 underline">
          <span>{t.common.privacyLink}</span>
          <span>{t.common.termsLink}</span>
        </div>
      </footer>

      {/* Checkout Modal */}
      <CheckoutModal open={checkoutOpen} onClose={() => setCheckoutOpen(false)} />

      {/* Exit Intent / Downsell Modal (Imagem 1) */}
      <AnimatePresence>
        {showExitModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowExitModal(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              transition={{ type: 'spring', damping: 25, stiffness: 320 }}
              className="relative z-10 w-full max-w-[460px] rounded-3xl bg-white p-6 sm:p-7 shadow-2xl text-center"
            >
              <button
                type="button"
                onClick={() => setShowExitModal(false)}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#F5EFE8] text-[#1F1510] hover:bg-[#EAE3DC] transition"
              >
                <X size={16} />
              </button>

              <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold text-[#1F1510] pt-2">
                {t.funnel.paywall.exitModalTitle}
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-[#6B5E57] leading-relaxed">
                {t.funnel.paywall.exitModalSubtitle}
              </p>

              <div className="mt-4 rounded-2xl border border-[#C9DFB8] bg-[#EBF3E4] p-3.5 text-left flex items-start gap-3">
                <span className="text-xl shrink-0">👍</span>
                <p className="text-xs font-semibold leading-relaxed text-[#2E4218]">
                  {t.funnel.paywall.exitModalCallout}
                </p>
              </div>

              <p className="mt-3 text-[11px] text-[#8C7E77] leading-relaxed">
                {t.funnel.paywall.exitModalNote}
              </p>

              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleStartTrial}
                className="mt-5 w-full rounded-2xl bg-[#2E1F19] hover:bg-[#1A120E] text-white py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-lg transition"
              >
                {t.funnel.paywall.exitModalCta}
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
