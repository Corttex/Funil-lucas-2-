import { useState } from 'react';
import { CheckCircle2, Lock, ShieldCheck, X } from 'lucide-react';
import { CTAButton } from '../../components/CTAButton';
import { recommendProtocol } from '../../engine/calculations';
import { today, useBestMeStore } from '../../store/useBestMeStore';

interface Props {
  open: boolean;
  onClose: () => void;
}

const PLAN_PRICES = {
  '1_month': { label: 'Plano BestMe Fasting (1 mês)', full: 99, sale: 39.9 },
  '4_months': { label: 'Plano BestMe Fasting (4 meses)', full: 329, sale: 97.0 },
  lifetime: { label: 'Plano BestMe Fasting Vitalício', full: 499, sale: 297.0 },
} as const;

export function CheckoutModal({ open, onClose }: Props) {
  const { funnel, setFunnel, setApp, addWeight } = useBestMeStore();
  const [showExit, setShowExit] = useState(false);
  const [paidAnim, setPaidAnim] = useState(false);
  const [method, setMethod] = useState<'pix' | 'card' | 'apple' | 'google'>('pix');

  if (!open) return null;

  const plan = PLAN_PRICES[funnel.selectedPlan];
  const finalTotal = funnel.extraDiscount ? plan.sale * 0.9 : plan.sale;
  const discountValue = plan.full - finalTotal;

  const handleCloseAttempt = () => {
    if (!funnel.extraDiscount) {
      setShowExit(true);
    } else {
      onClose();
    }
  };

  const confirmPayment = () => {
    setPaidAnim(true);
    const sensitive =
      funnel.healthConditions.length > 0 && !funnel.healthConditions.includes('Não, nenhum');
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
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-0 sm:items-center sm:p-4">
      <div className="relative max-h-[95vh] w-full max-w-[480px] overflow-y-auto rounded-t-3xl bg-[#F8FAFC] p-5 shadow-2xl sm:rounded-3xl">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-extrabold text-[#0E3A47]">
            Selecione um método de pagamento seguro
          </h2>
          <button
            onClick={handleCloseAttempt}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#475569] shadow-sm"
            aria-label="Fechar"
          >
            <X size={18} />
          </button>
        </div>

        <div className="mt-2 flex flex-wrap gap-1.5 text-[11px] font-bold text-[#475569]">
          {['Visa', 'Mastercard', 'Elo', 'Amex', 'PIX'].map((b) => (
            <span key={b} className="rounded bg-white px-2 py-0.5 shadow-sm">
              {b}
            </span>
          ))}
        </div>

        <div className="mt-4 rounded-2xl bg-white p-4 shadow-sm">
          <div className="inline-block rounded-full bg-[#ECFDF5] px-3 py-1 text-xs font-bold text-[#10B981]">
            🏷️ Código aplicado: {funnel.extraDiscount ? 'DESCONTO_EXTRA10' : 'DESCONTO70_HOJE'}
          </div>
          <div className="mt-3 flex justify-between text-sm text-[#475569]">
            <span>{plan.label}</span>
            <span>R$ {plan.full.toFixed(2).replace('.', ',')}</span>
          </div>
          <div className="mt-1 flex justify-between text-sm font-semibold text-[#EF4444]">
            <span>Desconto {funnel.extraDiscount ? '(70% + 10% extra)' : '(70%)'}</span>
            <span>- R$ {discountValue.toFixed(2).replace('.', ',')}</span>
          </div>
          <div className="mt-3 flex justify-between border-t border-slate-100 pt-2 text-lg font-extrabold text-[#0E3A47]">
            <span>Total</span>
            <span>R$ {finalTotal.toFixed(2).replace('.', ',')}</span>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          <button
            onClick={() => setMethod('pix')}
            className={`rounded-xl py-2.5 text-xs font-bold text-white ${
              method === 'pix' ? 'ring-2 ring-[#0E3A47]' : ''
            } bg-[#10B981]`}
          >
            PIX Instantâneo
          </button>
          <button
            onClick={() => setMethod('apple')}
            className={`rounded-xl bg-black py-2.5 text-xs font-bold text-white ${
              method === 'apple' ? 'ring-2 ring-[#10B981]' : ''
            }`}
          >
            Apple Pay
          </button>
          <button
            onClick={() => setMethod('google')}
            className={`rounded-xl bg-[#0E3A47] py-2.5 text-xs font-bold text-white ${
              method === 'google' ? 'ring-2 ring-[#10B981]' : ''
            }`}
          >
            Google Pay
          </button>
        </div>

        <div className="mt-4 rounded-2xl bg-white p-4 shadow-sm">
          <button
            type="button"
            onClick={() => setMethod('card')}
            className="mb-3 text-sm font-bold text-[#0E3A47]"
          >
            💳 Cartão de Crédito
          </button>
          <div className="flex flex-col gap-2.5 text-sm">
            <input
              placeholder="Número do cartão"
              className="rounded-xl border border-[#E2E8F0] px-3 py-2.5 outline-none focus:border-[#10B981]"
            />
            <div className="grid grid-cols-2 gap-2.5">
              <input
                placeholder="Validade (MM/AA)"
                className="rounded-xl border border-[#E2E8F0] px-3 py-2.5 outline-none focus:border-[#10B981]"
              />
              <input
                placeholder="CVV"
                className="rounded-xl border border-[#E2E8F0] px-3 py-2.5 outline-none focus:border-[#10B981]"
              />
            </div>
            <input
              placeholder="Nome do titular"
              className="rounded-xl border border-[#E2E8F0] px-3 py-2.5 outline-none focus:border-[#10B981]"
            />
          </div>
        </div>

        <div className="mt-4">
          {paidAnim ? (
            <div className="flex items-center justify-center gap-2 rounded-full bg-[#10B981] py-4 font-bold text-white">
              <CheckCircle2 size={20} /> Pagamento aprovado! Abrindo App...
            </div>
          ) : (
            <CTAButton onClick={confirmPayment}>Pagar Agora</CTAButton>
          )}
        </div>

        <div className="mt-4 flex flex-col items-center gap-1 text-center text-xs text-[#64748B]">
          <span className="flex items-center gap-1 font-bold text-[#10B981]">
            <ShieldCheck size={16} /> Garantido: PAGAMENTO SEGURO
          </span>
          <span className="flex items-center gap-1">
            <Lock size={12} /> Criptografia SSL • Cancele quando quiser
          </span>
        </div>

        {showExit && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
            <div className="w-full max-w-[420px] rounded-3xl bg-white p-6 text-center shadow-2xl">
              <h3 className="text-xl font-extrabold text-[#0E3A47]">Você sabia? 🤔</h3>
              <p className="mt-2 text-sm text-[#475569]">
                <strong>68%</strong> de quem começou perdeu pelo menos <strong>5 kg</strong> no
                primeiro mês com o BestMe Fasting.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs font-bold">
                <div className="rounded-xl bg-slate-100 p-3 text-[#475569]">
                  Sem BestMe Fasting
                  <div className="mt-2 h-2 rounded bg-slate-300" />
                </div>
                <div className="rounded-xl bg-[#ECFDF5] p-3 text-[#10B981]">
                  Com BestMe Fasting
                  <div className="mt-2 h-2 rounded bg-[#10B981]" />
                </div>
              </div>
              <p className="mt-4 text-sm font-bold text-[#EF4444]">
                Ganhe +10% de DESCONTO EXTRA agora!
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <CTAButton
                  onClick={() => {
                    setFunnel({ extraDiscount: true });
                    setShowExit(false);
                  }}
                >
                  Aproveitar Desconto Extra!
                </CTAButton>
                <button
                  onClick={() => {
                    setShowExit(false);
                    onClose();
                  }}
                  className="text-xs font-semibold text-[#64748B] underline"
                >
                  Não, quero sair mesmo
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
