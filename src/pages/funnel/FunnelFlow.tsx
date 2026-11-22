import { AnimatePresence, motion } from 'framer-motion';
import { FunnelHeader } from '../../components/FunnelHeader';
import { useI18n } from '../../i18n/I18nProvider';
import { useBestMeStore } from '../../store/useBestMeStore';
import { FunnelStepsPart1 } from './steps/FunnelStepsPart1';
import { FunnelStepsPart2 } from './steps/FunnelStepsPart2';
import { FunnelStepsPart3 } from './steps/FunnelStepsPart3';
import { PaywallStep } from './steps/PaywallStep';

export function FunnelFlow() {
  const { navigateView } = useI18n();
  const { step, back } = useBestMeStore();

  // Steps 54 (paywall has its own sticky countdown bar) uses dedicated headers
  const hideStandardHeader = step === 54;

  return (
    <div className="bm-container">
      {!hideStandardHeader && (
        <FunnelHeader
          step={step}
          onBack={step > 0 ? back : undefined}
          onOpenLogin={() => navigateView('login')}
          onGoHome={() => navigateView('home')}
        />
      )}

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 12, scale: 0.995 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -12, scale: 0.995 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="w-full flex-1"
        >
          {step <= 19 ? (
            <FunnelStepsPart1 />
          ) : step <= 37 ? (
            <FunnelStepsPart2 />
          ) : step <= 53 ? (
            <FunnelStepsPart3 />
          ) : (
            <PaywallStep />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
