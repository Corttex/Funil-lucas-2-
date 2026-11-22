import { useState } from 'react';
import {
  Check,
  CheckCircle2,
  CreditCard,
  Lock,
  Tag,
  X,
  Zap,
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { generatePromoCode, recommendProtocol } from '../../engine/calculations';
import { formatMoney } from '../../i18n/config';
import { interpolate } from '../../i18n/translations';
import { useI18n } from '../../i18n/I18nProvider';
import { today, useBestMeStore } from '../../store/useBestMeStore';

interface Props {
  open: boolean;
  onClose: () => void;
}

export function CheckoutModal({ open, onClose }: Props) {
  const { t, locale, config, navigateView } = useI18n();
  const { funnel, setApp, addWeight } = useBestMeStore();
  const [paidAnim, setPaidAnim] = useState(false);
  const [method, setMethod] = useState<'card' | 'apple' | 'pix'>('card');

  // Card fields state
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [cardHolder, setCardHolder] = useState(funnel.name || '');

  const plan = config.plans[funnel.selectedPlan] ?? config.plans['4_weeks'];
  const savedAmount = Math.max(0, plan.fullNum - plan.saleNum);
  const promoCode = funnel.promoCode || generatePromoCode(funnel.name || 'wesley');

  const confirmPayment = () => {
    setPaidAnim(true);
    const sensitive =
      funnel.sensitivities.length > 0 && !funnel.sensitivities.includes(t.common.noneOption);
    const protocol = recommendProtocol({
      experience: funnel.fastingExperience ?? 'ouvi_falar',
      goalIntensity: funnel.goalIntensity ?? 'tentar',
      sensitiveConditions: sensitive,
    });
    if (funnel.currentWeightKg) {
      addWeight(funnel.currentWeightKg, today());
    }
    window.setTimeout(() => {
      setApp({ isPaid: true, protocol });
      navigateView('app');
    }, 900);
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-[2px]"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 14 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            className="relative z-10 max-h-[96vh] w-full max-w-[680px] overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl"
          >
            {/* Close button */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              onClick={onClose}
              aria-label="Close"
              className="absolute left-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-[#F5EFE8] text-[#1F1510] transition hover:bg-[#EAE3DC]"
            >
              <X size={16} />
            </motion.button>

            {/* Modal Title */}
            <h2 className="pt-1 text-center font-['Plus_Jakarta_Sans'] text-xl font-extrabold text-[#1F1510] sm:text-2xl">
              {locale === 'pt' ? 'Complete seu checkout' : t.funnel.checkout.title}
            </h2>

            {/* 2-Column Content */}
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {/* Left Column: Order Summary */}
              <div className="flex flex-col justify-between rounded-2xl border border-[#EAE3DC] bg-[#FAF8F5] p-5">
                <div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-sm font-extrabold text-[#1F1510]">
                    {t.funnel.checkout.summaryTitle}
                  </h3>

                  <div className="mt-4 space-y-2 text-xs">
                    <div className="flex justify-between text-[#6B5E57]">
                      <span>{t.funnel.checkout.regularPrice}</span>
                      <span className="font-semibold text-[#1F1510]">{plan.full}</span>
                    </div>
                    <div className="flex justify-between font-semibold text-[#DC2626]">
                      <span>{t.funnel.checkout.initialDiscount}</span>
                      <span>-{formatMoney(savedAmount, locale)}</span>
                    </div>
                  </div>

                  {/* Promo code badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="mt-4 rounded-xl bg-white p-3 border border-[#EAE3DC] text-xs shadow-xs"
                  >
                    <span className="block text-[11px] text-[#6B5E57]">
                      {t.funnel.checkout.appliedPromo}
                    </span>
                    <span className="mt-1 flex items-center gap-1.5 font-mono font-bold text-[#1F1510]">
                      <Tag size={13} className="text-[#3F6212]" /> {promoCode}
                    </span>
                  </motion.div>
                </div>

                <div className="mt-6 border-t border-[#EAE3DC] pt-4">
                  <div className="flex items-center justify-between text-base font-extrabold text-[#1F1510]">
                    <span>{t.funnel.checkout.totalToPay}</span>
                    <span className="text-lg font-black text-[#1F1510]">{plan.sale}</span>
                  </div>

                  <div className="mt-2.5 flex items-start gap-1.5 rounded-lg bg-rose-50 p-2 text-[11px] font-bold leading-tight text-[#DC2626]">
                    <Zap size={14} className="mt-0.5 shrink-0 fill-current text-[#DC2626]" />
                    <span>
                      {interpolate(t.funnel.checkout.savingsBanner, {
                        saved: formatMoney(savedAmount, locale),
                      })}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Payment Methods */}
              <div className="flex flex-col gap-3">
                {/* Quick Apple Pay */}
                <motion.div
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setMethod('apple')}
                  className={`cursor-pointer rounded-2xl border p-3.5 transition-colors ${
                    method === 'apple' ? 'border-[#1F1510] bg-[#FAF8F5]' : 'border-[#EAE3DC] bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-bold text-[#1F1510]">
                    <span className="flex items-center gap-2">
                      <span
                        className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                          method === 'apple'
                            ? 'border-[#1F1510] bg-[#1F1510] text-white'
                            : 'border-[#D5CCC3]'
                        }`}
                      >
                        {method === 'apple' && <Check size={10} strokeWidth={3} />}
                      </span>
                      <span>{t.funnel.checkout.expressCheckout}</span>
                    </span>
                    <span className="rounded bg-black px-2 py-0.5 text-[11px] font-bold text-white">
                       Pay
                    </span>
                  </div>

                  {method === 'apple' && (
                    <motion.button
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      type="button"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={confirmPayment}
                      className="mt-3 w-full rounded-xl bg-black py-2.5 text-xs font-bold text-white transition hover:bg-neutral-800"
                    >
                      Buy with Pay
                    </motion.button>
                  )}
                </motion.div>

                {/* Credit Card (Primary) */}
                <motion.div
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setMethod('card')}
                  className={`cursor-pointer rounded-2xl border p-4 transition-colors ${
                    method === 'card'
                      ? 'border-[#1F1510] bg-white ring-1 ring-[#1F1510]'
                      : 'border-[#EAE3DC] bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-bold text-[#1F1510]">
                    <span className="flex items-center gap-2">
                      <span
                        className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                          method === 'card'
                            ? 'border-[#1F1510] bg-[#1F1510] text-white'
                            : 'border-[#D5CCC3]'
                        }`}
                      >
                        {method === 'card' && <Check size={10} strokeWidth={3} />}
                      </span>
                      <span>{t.funnel.checkout.creditCard}</span>
                    </span>
                  </div>

                  {/* Card brand badges as seen in screenshot */}
                  <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
                    <span className="rounded bg-[#1A1F71] px-1.5 py-0.5 text-[9px] font-black italic text-white tracking-wider">
                      VISA
                    </span>
                    <span className="flex items-center rounded bg-[#EB001B] px-1.5 py-0.5 text-[9px] font-black text-white">
                      <span className="h-2 w-2 rounded-full bg-[#EB001B] inline-block -mr-1"></span>
                      <span className="h-2 w-2 rounded-full bg-[#F79E1B] inline-block"></span>
                    </span>
                    <span className="rounded bg-[#006FCF] px-1.5 py-0.5 text-[9px] font-black text-white">
                      AMEX
                    </span>
                    <span className="rounded bg-[#FF6000] px-1.5 py-0.5 text-[9px] font-bold text-white">
                      DISCOVER
                    </span>
                    <span className="rounded bg-black px-1.5 py-0.5 text-[9px] font-extrabold text-white">
                      elo
                    </span>
                    <span className="rounded bg-[#B3141A] px-1.5 py-0.5 text-[9px] font-bold text-white">
                      Hipercard
                    </span>
                  </div>

                  {method === 'card' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.2 }}
                      className="mt-3.5 space-y-2.5 text-xs"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div>
                        <label className="mb-1 block text-[11px] font-bold text-[#6B5E57]">
                          {t.funnel.checkout.cardNumber}
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            maxLength={19}
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            placeholder="XXXX XXXX XXXX XXXX"
                            className="w-full rounded-xl border border-[#D5CCC3] bg-white px-3 py-2 pr-9 text-xs font-mono text-[#1F1510] outline-none transition focus:border-[#00B67A] focus:ring-1 focus:ring-[#00B67A]"
                          />
                          <CreditCard
                            size={16}
                            className="absolute right-3 top-2.5 text-[#A89E97]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="mb-1 block text-[11px] font-bold text-[#6B5E57]">
                            {t.funnel.checkout.expiry}
                          </label>
                          <input
                            type="text"
                            maxLength={5}
                            value={cardExpiry}
                            onChange={(e) => setCardExpiry(e.target.value)}
                            placeholder="MM/AA"
                            className="w-full rounded-xl border border-[#D5CCC3] bg-white px-3 py-2 text-xs font-mono text-[#1F1510] outline-none transition focus:border-[#00B67A] focus:ring-1 focus:ring-[#00B67A]"
                          />
                        </div>
                        <div>
                          <label className="mb-1 block text-[11px] font-bold text-[#6B5E57]">
                            {t.funnel.checkout.cvv}
                          </label>
                          <input
                            type="text"
                            maxLength={4}
                            value={cardCvv}
                            onChange={(e) => setCardCvv(e.target.value)}
                            placeholder="CVV"
                            className="w-full rounded-xl border border-[#D5CCC3] bg-white px-3 py-2 text-xs font-mono text-[#1F1510] outline-none transition focus:border-[#00B67A] focus:ring-1 focus:ring-[#00B67A]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-1 block text-[11px] font-bold text-[#6B5E57]">
                          {t.funnel.checkout.cardHolder}
                        </label>
                        <input
                          type="text"
                          value={cardHolder}
                          onChange={(e) => setCardHolder(e.target.value)}
                          placeholder="Nome completo como no cartão"
                          className="w-full rounded-xl border border-[#D5CCC3] bg-white px-3 py-2 text-xs text-[#1F1510] outline-none transition focus:border-[#00B67A] focus:ring-1 focus:ring-[#00B67A]"
                        />
                      </div>
                    </motion.div>
                  )}
                </motion.div>

                {/* PIX for Brazilian visitors */}
                {config.hasPix && (
                  <motion.div
                    whileTap={{ scale: 0.99 }}
                    onClick={() => setMethod('pix')}
                    className={`cursor-pointer rounded-2xl border p-3.5 transition-colors ${
                      method === 'pix' ? 'border-[#1F1510] bg-[#FAF8F5]' : 'border-[#EAE3DC] bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-bold text-[#1F1510]">
                      <span className="flex items-center gap-2">
                        <span
                          className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                            method === 'pix'
                              ? 'border-[#1F1510] bg-[#1F1510] text-white'
                              : 'border-[#D5CCC3]'
                          }`}
                        >
                          {method === 'pix' && <Check size={10} strokeWidth={3} />}
                        </span>
                        <span>{t.funnel.checkout.payWithPix}</span>
                      </span>
                      <span className="rounded bg-[#EBF3E4] px-2 py-0.5 text-[10px] font-extrabold text-[#3F6212]">
                        PIX Instantâneo
                      </span>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Green CTA Button */}
            <div className="mt-6">
              {paidAnim ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#00B67A] py-3.5 text-sm font-extrabold text-white shadow-lg"
                >
                  <CheckCircle2 size={18} /> {t.funnel.checkout.approvedMsg}
                </motion.div>
              ) : (
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.985 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  onClick={confirmPayment}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#00B67A] py-3.5 text-center text-sm font-black uppercase tracking-wider text-white shadow-md transition hover:bg-[#009E69]"
                >
                  <Lock size={16} className="stroke-[2.5]" />
                  <span>{locale === 'pt' ? 'OBTER O MEU PLANO' : t.funnel.checkout.payNowBtn}</span>
                </motion.button>
              )}
            </div>

            {/* Trust Badges Footer */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 border-t border-[#F0EBE4] pt-3 text-[10px] text-[#8C8078]">
              <span className="flex items-center gap-1 font-bold">
                <Lock size={10} className="text-[#00B67A]" /> SECURED 256-BIT ENCRYPTION
              </span>
              <span>•</span>
              <span className="font-bold">VISA Secure</span>
              <span>•</span>
              <span className="font-bold">Mastercard ID Check</span>
              <span>•</span>
              <span className="font-bold">PCI DSS COMPLIANT</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
