import { useEffect, useState } from 'react';
import {
  Check,
  ChevronDown,
  Dumbbell,
  GraduationCap,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Timer,
  Utensils,
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { CTAButton } from '../../../components/CTAButton';
import { AVATARS } from '../../../data/avatars';
import { generatePromoCode } from '../../../engine/calculations';
import { useI18n } from '../../../i18n/I18nProvider';
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

  useEffect(() => {
    const id = window.setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

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

  const PricingCardsBlock = () => (
    <div className="flex flex-col gap-3">
      {/* Green promo code banner */}
      <div className="rounded-2xl border border-[#C9DFB8] bg-[#EBF3E4] p-3">
        <p className="text-center text-xs font-bold text-[#1F1510]">
          🏷️ {t.funnel.paywall.promoAppliedTitle}
        </p>
        <div className="mt-2 flex items-center justify-between gap-2 rounded-xl bg-white px-3 py-2">
          <span className="flex items-center gap-1.5 text-xs font-extrabold text-[#1F1510]">
            <Check size={14} className="text-[#3F6212]" /> {promoCode}
          </span>
          <span className="rounded-lg bg-[#EBF3E4] px-2.5 py-1 text-xs font-extrabold text-[#3F6212]">
            {mins} : {secs}
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

      <div className="flex items-center justify-center gap-3 pt-1 text-[10px] font-bold text-[#6B5E57]">
        <span className="rounded border border-[#EAE3DC] bg-white px-2 py-0.5">SSL SECURED</span>
        <span className="rounded border border-[#EAE3DC] bg-white px-2 py-0.5">VISA</span>
        <span className="rounded border border-[#EAE3DC] bg-white px-2 py-0.5">Mastercard</span>
        <span className="rounded border border-[#EAE3DC] bg-white px-2 py-0.5">PCI-DSS</span>
      </div>
    </div>
  );

  const featureIcons = [Dumbbell, Sparkles, Timer, ShieldCheck, Utensils, GraduationCap];

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

      {/* Choose your plan block #1 */}
      <div>
        <h2 className="bm-title mb-4">{t.funnel.paywall.choosePlanTitle}</h2>
        <PricingCardsBlock />
      </div>

      {/* What is included in your plan */}
      <div className="rounded-3xl bg-[#F5EFE8]/70 p-5">
        <h2 className="bm-title">{t.funnel.paywall.includedTitle}</h2>

        {/* Mini App screens strip */}
        <div className="mt-4 flex gap-2.5 overflow-x-auto pb-2">
          {[
            { label: 'Full-Body', img: isWoman ? AVATARS.objectives.mulher['Conseguir um corpo firme e tonificado'] : AVATARS.objectives.homem['Conseguir um corpo firme e tonificado'] },
            { label: 'Meal Log', img: AVATARS.meals.lunch },
            { label: 'Today', img: isWoman ? AVATARS.gender.mulher : AVATARS.gender.homem },
            { label: '0:20 Timer', img: isWoman ? AVATARS.objectives.mulher['Perder peso'] : AVATARS.objectives.homem['Perder peso'] },
          ].map((scr) => (
            <div
              key={scr.label}
              className="w-24 shrink-0 overflow-hidden rounded-2xl border-2 border-[#1F1510] bg-white p-1.5 shadow-sm"
            >
              <img src={scr.img} alt={scr.label} className="h-24 w-full rounded-xl object-cover" />
              <p className="mt-1.5 text-center text-[10px] font-bold text-[#1F1510]">{scr.label}</p>
            </div>
          ))}
        </div>

        {/* 6 features list */}
        <div className="mt-4 flex flex-col gap-3">
          {t.funnel.paywall.features.map((feat, idx) => {
            const Icon = featureIcons[idx] || Smartphone;
            return (
              <div key={feat.title} className="flex items-start gap-3 border-b border-[#EAE3DC] pb-2.5 last:border-0">
                <Icon size={17} className="mt-0.5 shrink-0 text-[#2E1F19]" />
                <div>
                  <p className="text-xs font-extrabold text-[#1F1510]">{feat.title}</p>
                  <p className="text-[11px] text-[#6B5E57]">{feat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Your progress mini grid */}
        <div className="mt-4 rounded-2xl border border-[#EAE3DC] bg-white p-3.5">
          <p className="text-xs font-bold text-[#1F1510]">{t.funnel.paywall.progressHeader}</p>
          <div className="mt-2.5 grid grid-cols-4 gap-1.5 text-center text-[10px]">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((d) => (
              <div
                key={d}
                className={`rounded-xl p-2 font-bold ${
                  d <= 2 ? 'bg-[#2E1F19] text-white' : 'bg-[#F5EFE8] text-[#6B5E57]'
                }`}
              >
                {t.funnel.paywall.dayLabel} {d}
                <span className="mt-0.5 block text-[9px]">
                  {d <= 2 ? '✓' : `${8 + d} min`}
                </span>
              </div>
            ))}
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
        <PricingCardsBlock />
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

      <CheckoutModal open={checkoutOpen} onClose={() => setCheckoutOpen(false)} />
    </div>
  );
}
