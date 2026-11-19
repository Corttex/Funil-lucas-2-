interface Props {
  type: string;
  gender: 'mulher' | 'homem';
}

export function BodyTypeIllustration({ type, gender }: Props) {
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
        {type === 'Não tenho certeza' && (
          <text x="40" y="64" textAnchor="middle" fill="#00C896" fontSize="34" fontWeight="800">
            ?
          </text>
        )}
      </g>

      {/* Camada 2: Silhueta anatômica fina */}
      <g
        stroke="#335C67"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {gender === 'mulher' ? (
          <>
            {/* Cabeça e cabelo comprido */}
            <ellipse cx="40" cy="14" rx="5.2" ry="6.5" />
            <path d="M35 12c-2 4-2.5 10-2 15M45 12c2 4 2.5 10 2 15M36.5 9.5c2-2 5-2 7 0" />
            {/* Pescoço e ombros */}
            <path d="M37.5 20.5v4.5M42.5 20.5v4.5" />
            <path d="M37.5 25c-4 1.2-7.5 2.5-9.5 5M42.5 25c4 1.2 7.5 2.5 9.5 5" />
            {/* Tronco feminino (busto, cintura marcada, quadris) */}
            <path d="M30 33c1 6 3 12 3.2 19 0.2 5-3.2 10-3.7 16-0.3 4 1 7.5 2 9.5" />
            <path d="M50 33c-1 6-3 12-3.2 19-0.2 5 3.2 10 3.7 16 0.3 4-1 7.5-2 9.5" />
            <path d="M34 39c3 1.5 9 1.5 12 0" />
            {/* Braço direito levemente curvado */}
            <path d="M28 30c-2 8-2.5 17-1.5 25l1 6" />
            <path d="M30 34c-1 7-1 14-0.5 21" />
            {/* Braço esquerdo dobrado com mão na cintura */}
            <path d="M52 30c4 5 5.5 10 4.5 14-1 3.5-5 5-9.5 6" />
            <path d="M49.5 34c2.5 3.5 3.5 7 2.8 9.5-0.6 2-3.5 3-6.3 3.5" />
            {/* Pernas caminhando */}
            <path d="M31.5 77.5c1 14 2.5 28 3.5 42l-1.5 11.5h3.5l1.5-11.5c1-12 1.5-24 1.5-34" />
            <path d="M48.5 77.5c-0.8 14-2 28-3.5 42l1.2 11.5h-3.5l-1-11.5c-0.8-12-1.5-24-1.7-34" />
            <path d="M37.5 78c1.5 2 3.5 2 5 0" />
          </>
        ) : (
          <>
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
          </>
        )}
      </g>
    </svg>
  );
}
