import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  Download,
  Lock,
  Mail,
  Smartphone,
  Sparkles,
  User,
} from 'lucide-react';
import { CTAButton } from '../../components/CTAButton';
import { AVATARS } from '../../data/avatars';
import {
  BMI_LABEL,
  bmiCategory,
  calcBmi,
  recommendProtocol,
  waterGoalMl,
} from '../../engine/calculations';
import { today, useBestMeStore } from '../../store/useBestMeStore';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export function LoginScreen() {
  const { funnel, setFunnel, setApp, setViewMode, addWeight } = useBestMeStore();
  const [nameInput, setNameInput] = useState(funnel.name || '');
  const [emailInput, setEmailInput] = useState(funnel.email || '');
  const [passwordInput, setPasswordInput] = useState('');
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showIosGuide, setShowIosGuide] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e as BeforeInstallPromptEvent);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const heightCm = funnel.heightCm ?? 168;
  const currentKg = funnel.currentWeightKg ?? 75;
  const targetKg = funnel.targetWeightKg ?? 65;
  const bmi = calcBmi(currentKg, heightCm);
  const sensitive =
    funnel.healthConditions.length > 0 && !funnel.healthConditions.includes('Não, nenhum');
  const recommendedProto = recommendProtocol({
    experience: funnel.fastingExperience ?? 'ouvi_falar',
    goalIntensity: funnel.goalIntensity ?? 'tentar',
    sensitiveConditions: sensitive,
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = nameInput.trim() || funnel.name.trim() || 'Aluno(a)';
    const cleanEmail = emailInput.trim() || funnel.email.trim() || 'cliente@bestme.app';
    setFunnel({ name: cleanName, email: cleanEmail });
    if (funnel.currentWeightKg) {
      addWeight(funnel.currentWeightKg, today());
    }
    setApp({ isPaid: true, protocol: recommendedProto });
    setViewMode('app');
  };

  const handleInstallPwa = async () => {
    if (installPrompt) {
      await installPrompt.prompt();
    } else {
      setShowIosGuide(true);
    }
  };

  return (
    <div className="bm-container flex flex-col gap-5 pb-12 pt-3">
      <header className="flex items-center justify-between">
        <button
          onClick={() => setViewMode('funnel')}
          className="flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-xs font-bold text-[#0E3A47] shadow-sm"
        >
          <ArrowLeft size={15} /> Voltar ao Questionário
        </button>
        <strong style={{ fontFamily: 'var(--font-title)', fontSize: 18 }}>
          Best <span className="rounded-md bg-[#10B981] px-1.5 py-0.5 text-white">Me</span> Fasting
        </strong>
      </header>

      <div className="mt-1 flex flex-col items-center text-center">
        <img
          src={
            funnel.gender === 'homem' ? AVATARS.gender.homem : AVATARS.gender.mulher
          }
          alt="Avatar"
          className="h-20 w-20 rounded-full border-4 border-white object-cover shadow-md"
        />
        <h1 className="bm-title mt-3">Acesse sua Conta & App</h1>
        <p className="bm-subtitle mt-1 text-sm">
          Seus dados do questionário são sincronizados automaticamente no seu painel.
        </p>
      </div>

      {/* Resumo dos dados assimilados do Funil */}
      <div className="rounded-3xl border border-[#10B981]/30 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-extrabold uppercase text-[#10B981]">
          <Sparkles size={15} /> Dados assimilados do seu Diagnóstico
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2.5 text-xs text-[#475569]">
          <div className="rounded-xl bg-[#F8FAFC] p-2.5">
            <span className="text-[10px] text-[#64748B]">Protocolo Ideal</span>
            <p className="text-sm font-extrabold text-[#0E3A47]">{recommendedProto}</p>
          </div>
          <div className="rounded-xl bg-[#F8FAFC] p-2.5">
            <span className="text-[10px] text-[#64748B]">Peso → Meta</span>
            <p className="text-sm font-extrabold text-[#10B981]">
              {currentKg} kg → {targetKg} kg
            </p>
          </div>
          <div className="rounded-xl bg-[#F8FAFC] p-2.5">
            <span className="text-[10px] text-[#64748B]">IMC ({BMI_LABEL[bmiCategory(bmi)]})</span>
            <p className="text-sm font-extrabold text-[#0E3A47]">{bmi.toFixed(1)}</p>
          </div>
          <div className="rounded-xl bg-[#F8FAFC] p-2.5">
            <span className="text-[10px] text-[#64748B]">Meta Diária de Água</span>
            <p className="text-sm font-extrabold text-[#0284C7]">{waterGoalMl(currentKg)} ml</p>
          </div>
        </div>
      </div>

      {/* Formulário de Login */}
      <form onSubmit={handleLogin} className="flex flex-col gap-3 rounded-3xl bg-white p-5 shadow-sm">
        <h2 className="text-sm font-extrabold text-[#0E3A47]">Entrar no Aplicativo Personalizado</h2>

        <div className="relative">
          <User size={16} className="absolute left-3.5 top-3.5 text-[#64748B]" />
          <input
            type="text"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            placeholder="Seu nome"
            className="w-full rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] py-3 pl-10 pr-4 text-sm font-semibold text-[#0E3A47] outline-none focus:border-[#10B981] focus:bg-white"
          />
        </div>

        <div className="relative">
          <Mail size={16} className="absolute left-3.5 top-3.5 text-[#64748B]" />
          <input
            type="email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            placeholder="Seu e-mail cadastrado"
            className="w-full rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] py-3 pl-10 pr-4 text-sm font-semibold text-[#0E3A47] outline-none focus:border-[#10B981] focus:bg-white"
          />
        </div>

        <div className="relative">
          <Lock size={16} className="absolute left-3.5 top-3.5 text-[#64748B]" />
          <input
            type="password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            placeholder="Senha ou código de acesso (opcional no demo)"
            className="w-full rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] py-3 pl-10 pr-4 text-sm font-semibold text-[#0E3A47] outline-none focus:border-[#10B981] focus:bg-white"
          />
        </div>

        <div className="mt-2">
          <CTAButton onClick={() => {}}>Entrar e Personalizar Meu App</CTAButton>
        </div>
      </form>

      {/* Opções para Baixar o App (PWA / iOS / Android) */}
      <div className="rounded-3xl bg-white p-5 shadow-sm">
        <div className="flex items-center gap-2">
          <Download size={18} className="text-[#10B981]" />
          <h2 className="text-sm font-extrabold text-[#0E3A47]">Baixar o Aplicativo no Celular</h2>
        </div>
        <p className="mt-1 text-xs text-[#475569]">
          Instale o Web App oficial na tela inicial para receber lembretes de jejum e usar em tela cheia.
        </p>

        <div className="mt-4 grid grid-cols-2 gap-2.5">
          <button
            type="button"
            onClick={handleInstallPwa}
            className="flex items-center justify-center gap-2 rounded-2xl bg-[#0E3A47] px-3 py-3 text-xs font-bold text-white shadow-sm"
          >
            <Smartphone size={16} className="text-[#10B981]" />
            <div className="text-left leading-tight">
              <span className="block text-[9px] font-normal text-slate-300">Instalar no</span>
              <span>iPhone (iOS)</span>
            </div>
          </button>

          <button
            type="button"
            onClick={handleInstallPwa}
            className="flex items-center justify-center gap-2 rounded-2xl bg-[#10B981] px-3 py-3 text-xs font-bold text-white shadow-sm"
          >
            <Download size={16} />
            <div className="text-left leading-tight">
              <span className="block text-[9px] font-normal text-emerald-100">Baixar para</span>
              <span>Android (APK/PWA)</span>
            </div>
          </button>
        </div>

        {showIosGuide && (
          <div className="mt-3 rounded-2xl border border-[#10B981]/40 bg-[#ECFDF5] p-3.5 text-xs text-[#0E3A47]">
            <p className="flex items-center gap-1.5 font-extrabold text-[#10B981]">
              <CheckCircle2 size={15} /> Como instalar na tela inicial:
            </p>
            <ol className="mt-1.5 list-decimal space-y-1 pl-4 text-[11px] text-[#475569]">
              <li>
                No navegador do celular, toque em <strong>Compartilhar</strong> (iOS) ou no menu{' '}
                <strong>⋮</strong> (Android).
              </li>
              <li>
                Selecione <strong>“Adicionar à Tela de Início”</strong> ou{' '}
                <strong>“Instalar Aplicativo”</strong>.
              </li>
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}
