import { FunnelHeader } from '../../components/FunnelHeader';
import { useBestMeStore } from '../../store/useBestMeStore';
import { Steps0To17 } from './steps/Steps0To17';
import { Steps18To34 } from './steps/Steps18To34';
import { Steps35To47 } from './steps/Steps35To47';

export function FunnelFlow() {
  const { step, back, setViewMode } = useBestMeStore();

  return (
    <div className="bm-container">
      {step > 0 && (
        <FunnelHeader
          step={step}
          total={46}
          onBack={back}
          onOpenLogin={() => setViewMode('login')}
        />
      )}
      {step <= 17 ? (
        <Steps0To17 />
      ) : step <= 34 ? (
        <Steps18To34 />
      ) : (
        <Steps35To47 />
      )}
    </div>
  );
}
