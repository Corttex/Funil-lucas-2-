interface Props {
  type: string;
  gender: 'mulher' | 'homem';
}

const WOMAN_BODY_ASSETS: Record<string, string> = {
  Oval: '/assets/body-woman-oval.png',
  Ampulheta: '/assets/body-woman-ampulheta.png',
  Retângulo: '/assets/body-woman-retangulo.png',
  Triângulo: '/assets/body-woman-triangulo.png',
  'Triângulo invertido': '/assets/body-woman-triangulo-invertido.png',
};

export function BodyTypeIllustration({ type, gender }: Props) {
  if (type === 'Não tenho certeza') {
    return null;
  }

  if (gender === 'mulher') {
    const src = WOMAN_BODY_ASSETS[type];
    if (!src) return null;
    return (
      <img
        src={src}
        alt={type}
        className="h-24 w-auto shrink-0 object-contain mix-blend-multiply"
      />
    );
  }

  return (
    <svg
      viewBox="0 0 80 140"
      className="h-24 w-14 shrink-0"
      aria-hidden="true"
    >
      {/* Camada 1: Forma geométrica do biotipo */}
      <g opacity="0.9">
        {type === 'Oval' && <ellipse cx="40" cy="52" rx="16" ry="22" fill="#00C896" />}
        {type === 'Ampulheta' && (
          <polygon points="24,32 56,32 45,54 55,74 25,74 35,54" fill="#00C896" />
        )}
        {type === 'Retângulo' && (
          <rect x="26" y="32" width="28" height="42" rx="2" fill="#00C896" />
        )}
        {type === 'Triângulo' && <polygon points="40,32 58,74 22,74" fill="#00C896" />}
        {type === 'Triângulo invertido' && (
          <polygon points="21,32 59,32 40,76" fill="#00C896" />
        )}
      </g>

      {/* Camada 2: Silhueta anatômica masculina fina */}
      <g
        stroke="#335C67"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Cabeça e cabelo curto masculino */}
        <ellipse cx="40" cy="13.5" rx="5.5" ry="6.8" />
        <path d="M34.5 12c0.5-4 3-6 5.5-6s5 2 5.5 6M35.5 10.5c2.5-1 6.5-1 9 0" />
        {/* Pescoço estruturado e ombros largos */}
        <path d="M36.8 20v5.5M43.2 20v5.5" />
        <path d="M36.8 25.5c-6 1.2-11.5 2.5-13.8 5.5M43.2 25.5c6 1.2 11.5 2.5 13.8 5.5" />
        {/* Peitoral e tronco masculino reto */}
        <path d="M27.5 34c1.2 9 2 18 2 27 0 6-0.5 11 0.5 16.5" />
        <path d="M52.5 34c-1.2 9-2 18-2 27 0 6 0.5 11-0.5 16.5" />
        <path d="M31 39.5c4 1.8 14 1.8 18 0M40 33v13" />
        {/* Braço direito firme */}
        <path d="M23 31c-2.5 10-2.5 20-1.5 30l1 6" />
        <path d="M27.5 36c-1 8-1 17-0.5 25" />
        {/* Braço esquerdo com mão no quadril/cintura */}
        <path d="M57 31c3.5 6 4.5 12 3.5 17-1 4-4.5 6-10 7.5" />
        <path d="M52.5 36c2 4 3 8.5 2.2 12-0.7 2.8-3 4-6.2 4.8" />
        {/* Pernas proporcionais masculinas */}
        <path d="M30 77.5c0.5 15 1.5 30 2 44l-2 10h4.5l1.5-11c1-13 2-26 2.5-36" />
        <path d="M50 77.5c-0.5 15-1.5 30-2 44l2 10h-4.5l-1.5-11c-1-13-2-26-2.5-36" />
        <path d="M38.5 84.5h3" />
      </g>
    </svg>
  );
}
