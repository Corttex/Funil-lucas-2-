import { useEffect, useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import { Check } from 'lucide-react';
import { useI18n } from '../i18n/I18nProvider';

interface Props {
  promoCode: string;
  onComplete: () => void;
}

export function ScratchCard({ promoCode, onComplete }: Props) {
  const { t } = useI18n();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const scratching = useRef(false);
  const [revealed, setRevealed] = useState(false);
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    grad.addColorStop(0, '#3B2820');
    grad.addColorStop(1, '#2E1F19');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Subtle shimmer strokes mimicking scratch foil
    ctx.strokeStyle = 'rgba(255,255,255,0.14)';
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(64, 108);
    ctx.lineTo(148, 88);
    ctx.lineTo(84, 136);
    ctx.lineTo(164, 118);
    ctx.stroke();

    // Dashed perforation line
    ctx.setLineDash([6, 5]);
    ctx.strokeStyle = 'rgba(255,255,255,0.35)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(16, 188);
    ctx.lineTo(canvas.width - 16, 188);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 14px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(t.funnel.step53.scratchHere, canvas.width / 2, 42);
  }, [t.funnel.step53.scratchHere]);

  useEffect(() => {
    if (!revealed) return;
    const id = window.setInterval(() => {
      setCountdown((c) => {
        if (c <= 1) {
          window.clearInterval(id);
          onComplete();
          return 0;
        }
        return c - 1;
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [revealed, onComplete]);

  const revealNow = () => {
    if (revealed) return;
    setRevealed(true);
    confetti({ particleCount: 75, spread: 65, origin: { y: 0.55 } });
  };

  const scratch = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (revealed || !scratching.current || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * canvas.width;
    const y = ((e.clientY - rect.top) / rect.height) * canvas.height;
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 26, 0, Math.PI * 2);
    ctx.fill();

    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let cleared = 0;
    for (let i = 3; i < pixels.length; i += 16) {
      if (pixels[i] === 0) cleared++;
    }
    if (cleared / (pixels.length / 16) > 0.35) {
      revealNow();
    }
  };

  return (
    <div className="relative mx-auto w-[220px]">
      {/* Ticket card */}
      <div className="relative flex h-[270px] w-full flex-col justify-between overflow-hidden rounded-2xl bg-[#5C4E47] p-4 text-center text-white shadow-xl">
        {/* Left & Right ticket notches */}
        <span className="pointer-events-none absolute -left-2.5 top-[182px] h-5 w-5 rounded-full bg-[#FDFBF7]" />
        <span className="pointer-events-none absolute -right-2.5 top-[182px] h-5 w-5 rounded-full bg-[#FDFBF7]" />

        <div className="flex flex-1 flex-col items-center justify-center">
          <p className="font-['Plus_Jakarta_Sans'] text-5xl font-extrabold leading-none tracking-tight">
            50%
          </p>
          <p className="mt-1 text-lg font-bold">{t.funnel.step53.discountLabel}</p>
          <p className="mt-1.5 text-[11px] leading-tight text-white/80">
            {t.funnel.step53.discountSub}
          </p>
        </div>

        <div className="border-t border-dashed border-white/30 pt-3">
          <div className="rounded-xl bg-white px-3 py-2 text-[#1F1510]">
            <span className="block text-[10px] font-medium text-[#6B5E57]">
              {t.funnel.step53.promoLabel}
            </span>
            <span className="mt-0.5 flex items-center justify-center gap-1 text-xs font-bold text-[#1F1510]">
              <Check size={13} className="text-[#3F6212]" />
              {promoCode}
            </span>
          </div>
        </div>

        {!revealed && (
          <canvas
            ref={canvasRef}
            width={220}
            height={270}
            style={{ touchAction: 'none' }}
            className="absolute inset-0 h-full w-full cursor-pointer"
            onPointerDown={(e) => {
              e.currentTarget.setPointerCapture(e.pointerId);
              scratching.current = true;
              scratch(e);
            }}
            onPointerMove={scratch}
            onPointerUp={() => {
              scratching.current = false;
            }}
            onClick={revealNow}
          />
        )}
      </div>

      {/* Countdown note shown after reveal */}
      {revealed && (
        <div className="mt-4 flex flex-col items-center gap-2 text-center">
          <p className="text-xs font-medium text-[#6B5E57]">{t.funnel.step53.overlayNote}</p>
          <button
            type="button"
            onClick={onComplete}
            className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#2E1F19] text-xs font-extrabold text-[#2E1F19]"
          >
            {countdown}
          </button>
        </div>
      )}
    </div>
  );
}
