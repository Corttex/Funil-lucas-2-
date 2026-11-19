import { useEffect, useRef, useState } from 'react';
import confetti from 'canvas-confetti';

interface Props {
  onComplete: () => void;
}

export function ScratchCard({ onComplete }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const scratching = useRef(false);
  const [revealed, setRevealed] = useState(false);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    grad.addColorStop(0, '#14B8A6');
    grad.addColorStop(1, '#0EA5E9');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(255,255,255,0.9)';
    ctx.font = 'bold 16px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Raspe aqui 👆', canvas.width / 2, canvas.height / 2);
  }, []);

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
    confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
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
    ctx.arc(x, y, 24, 0, Math.PI * 2);
    ctx.fill();

    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let cleared = 0;
    for (let i = 3; i < pixels.length; i += 16) {
      if (pixels[i] === 0) cleared++;
    }
    if (cleared / (pixels.length / 16) > 0.4) {
      revealNow();
    }
  };

  return (
    <div className="relative mx-auto flex h-[300px] w-[240px] flex-col items-center justify-center overflow-hidden rounded-3xl border-2 border-dashed border-[#10B981] bg-white p-5 text-center shadow-md">
      <span className="rounded-full bg-[#ECFDF5] px-3 py-1 text-xs font-bold text-[#10B981]">
        DESCONTO DESBLOQUEADO
      </span>
      <p className="mt-3 text-3xl font-extrabold text-[#0E3A47]">Até 70% OFF</p>
      <p className="mt-1 text-sm font-semibold text-[#475569]">em seu plano personalizado</p>
      <p className="mt-3 text-xs text-[#64748B]">Aplicado automaticamente no pagamento</p>
      {revealed && (
        <div className="mt-4 flex flex-col items-center gap-1">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#10B981] text-sm font-extrabold text-[#10B981]">
            {countdown}s
          </span>
          <button
            type="button"
            onClick={onComplete}
            className="text-xs font-bold text-[#0284C7] underline"
          >
            Ver minha oferta agora
          </button>
        </div>
      )}
      {!revealed && (
        <canvas
          ref={canvasRef}
          width={240}
          height={300}
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
  );
}
