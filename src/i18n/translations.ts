import type { Locale } from './config';

export interface TranslationDict {
  common: {
    brand: string;
    continueBtn: string;
    nextStepBtn: string;
    skipStepBtn: string;
    back: string;
    login: string;
    help: string;
    language: string;
    homeLink: string;
    selectAllApply: string;
    termsPrefix: string;
    termsLink: string;
    privacyLink: string;
    termsSuffix: string;
    mobileOnlyTitle: string;
    mobileOnlyDesc: string;
    mobileOnlyHow: string;
    mobileOnlyHint: string;
    mobileOnlyBackHome: string;
    asSeenIn: string;
    noneOption: string;
  };
  home: {
    navApps: string;
    navCalisthenics: string;
    navStore: string;
    navBusiness: string;
    navReviews: string;
    navStartQuiz: string;
    heroBadge: string;
    heroTitle: string;
    heroSubtitle: string;
    heroCta: string;
    heroSecondaryCta: string;
    heroRating: string;
    quickTitle: string;
    quickSubtitle: string;
    quickWomanTitle: string;
    quickWomanSub: string;
    quickManTitle: string;
    quickManSub: string;
    quickStartTag: string;
    worldEyebrow: string;
    worldTitle: string;
    worldSubtitle: string;
    worldCards: {
      coaching: { tag: string; title: string; desc: string; cta: string; bullet1: string; bullet2: string; bullet3: string };
      mental: { tag: string; title: string; desc: string; cta: string; bullet1: string; bullet2: string; bullet3: string };
      store: { tag: string; title: string; desc: string; cta: string; bullet1: string; bullet2: string; bullet3: string };
      business: { tag: string; title: string; desc: string; cta: string; bullet1: string; bullet2: string; bullet3: string };
    };
    howEyebrow: string;
    howTitle: string;
    howSteps: { num: string; title: string; desc: string }[];
    impactTitle: string;
    impactDesc: string;
    impactStats: { value: string; label: string }[];
    reviewsTitle: string;
    reviewsSubtitle: string;
    reviews: { name: string; result: string; quote: string }[];
    finalCtaTitle: string;
    finalCtaSubtitle: string;
    finalCtaBtn: string;
    footerTagline: string;
    footerCols: {
      ecosystem: string;
      ecosystemLinks: string[];
      company: string;
      companyLinks: string[];
      support: string;
      supportLinks: string[];
    };
    footerCopy: string;
  };
  funnel: {
    sections: {
      profile: string;
      activity: string;
      lifestyle: string;
      nutrition: string;
      almostThere: string;
    };
    step0: {
      eyebrow: string;
      title: string;
      subtitle: string;
      woman: string;
      womanSub: string;
      man: string;
      manSub: string;
    };
    step1: {
      title: string;
      subtitle: string;
      ageLabel: string;
    };
    step2: {
      headlineWoman: string;
      headlineMan: string;
      subtext: string;
    };
    step3: {
      title: string;
      yes: string;
      no: string;
    };
    step4: {
      title: string;
      p1: string;
      p2Woman: string;
      p2Man: string;
    };
    step5: {
      title: string;
      loseWeight: string;
      gainMuscle: string;
      stayFit: string;
    };
    step6: {
      title: string;
      options: string[];
    };
    step7: {
      title: string;
      options: { id: string; label: string }[];
    };
    step8: {
      title: string;
      subtitle: string;
      options: { id: string; label: string }[];
    };
    step9: {
      title: string;
      p1Prefix: string;
      p1Bold: string;
      p2: string;
      weekLabels: [string, string, string, string];
      barTexts: [string, string, string, string];
      monday: string;
    };
    step10: {
      title: string;
      options: string[];
    };
    step11: {
      title: string;
      hardLose: string;
      changesEasily: string;
      hardGain: string;
    };
    step12: {
      mesomorfoTitle: string;
      mesomorfoDesc: string;
      endomorfoTitle: string;
      endomorfoDesc: string;
      ectomorfoTitle: string;
      ectomorfoDesc: string;
      p2Prefix: string;
      p2Bold: string;
      p2Suffix: string;
    };
    step13: {
      title: string;
      options: string[];
    };
    step14: {
      title: string;
      options: { id: string; label: string }[];
    };
    step15: {
      title: string;
      options: string[];
    };
    step16: {
      title: string;
      options: string[];
    };
    step17: {
      title: string;
      options: string[];
    };
    step18: {
      title: string;
      options: string[];
    };
    step19: {
      title: string;
      back: string;
      knees: string;
    };
    step20: {
      title: string;
      p1: string;
      p2: string;
    };
    step21: {
      title: string;
      options: string[];
    };
    step22: {
      title: string;
      options: string[];
    };
    step23: {
      title: string;
      lowWoman: string;
      lowMan: string;
      postLunch: string;
      drag: string;
      high: string;
    };
    step24: {
      title: string;
      p1: string;
      p2: string;
    };
    step25: {
      title: string;
      subtitle: string;
      options: string[];
    };
    step26: {
      title: string;
      options: string[];
    };
    step27: {
      title: string;
      options: string[];
    };
    step28: {
      title: string;
      options: string[];
    };
    step29: {
      title: string;
      options: string[];
    };
    step30: {
      title: string;
      groups: {
        withMeat: { label: string; items: { id: string; title: string; desc: string }[] };
        noMeat: { label: string; items: { id: string; title: string; desc: string }[] };
        withFish: { label: string; items: { id: string; title: string; desc: string }[] };
        noAllergens: { label: string; items: { id: string; title: string; desc: string }[] };
      };
    };
    step31: {
      title: string;
      p1: string;
      p2: string;
      phoneHeader: string;
      breakfast: string;
      lunch: string;
      dinner: string;
    };
    step32: {
      title: string;
      options: string[];
    };
    step33: {
      title: string;
      specialists: { name: string; role: string }[];
    };
    step34: {
      title: string;
      placeholder: string;
      rangeHintCm: string;
      rangeHintFt: string;
      consentText: string;
      privacyLink: string;
    };
    step35: {
      title: string;
      placeholder: string;
      rangeHintKg: string;
      rangeHintLbs: string;
    };
    step36: {
      title: string;
      placeholder: string;
      moveLabel: string;
      gainLabel: string;
      loseLabel: string;
      maintainLabel: string;
      studyNote: string;
    };
    step37: {
      title: string;
      unit: string;
      noteTitle: string;
      noteDesc: string;
    };
    step38: {
      title: string;
      bars: [string, string, string, string];
      awardTitle: string;
      awardSub: string;
    };
    step39: {
      title: string;
      bmiTitle: string;
      scaleLabels: [string, string, string, string];
      bmiHealthyTitle: string;
      bmiHealthyDesc: string;
      bmiImproveTitle: string;
      bmiImproveDesc: string;
      bodyTypeLabel: string;
      lifestyleLabel: string;
      lifestyleValue: string;
      fitnessLabel: string;
      fitnessValue: string;
      metabolismLabel: string;
      metabolismValue: string;
    };
    step40: {
      title: string;
      options: string[];
    };
    step41: {
      title: string;
      subtitle: string;
      options: string[];
      noneEvent: string;
    };
    step42: {
      title: string;
      subtitle: string;
      selectDateLabel: string;
      privacyNote: string;
    };
    step43: {
      title: string;
      estimatePrefix: string;
      untilLabel: string;
      untilEventTag: string;
      chartObjective: string;
      disclaimer: string;
      quote: string;
    };
    step44: {
      title: string;
      optionsWoman: string[];
      optionsMan: string[];
    };
    step45: {
      title: string;
      p1: string;
      p2: string;
      cardTitle: string;
      cardDuration: string;
    };
    step46: {
      title: string;
      optionsWoman: string[];
      optionsMan: string[];
    };
    step47: {
      title: string;
      awards: { title: string; desc: string; year: string }[];
    };
    step48: {
      creating: string;
      socialCountWoman: string;
      socialCountMan: string;
      socialSub: string;
      reviewTitle: string;
      reviewAuthor: string;
      reviewBody: string;
    };
    step49: {
      titlePrefix: string;
      titleHighlight: string;
      titleSuffix: string;
      placeholder: string;
      privacyPrefix: string;
      privacyLink: string;
    };
    step50: {
      title: string;
      placeholder: string;
    };
    step51: {
      titlePrefix: string;
      goalLose: string;
      goalGain: string;
      goalFit: string;
      titleSuffix: string;
      chartTitle: string;
      mondayBadge: string;
      weeks: [string, string, string, string];
      chartNote: string;
      bullet1: string;
      bullet2: string;
      bullet3Prefix: string;
    };
    step52: {
      slides: [string, string, string, string, string];
    };
    step53: {
      title: string;
      subtitle: string;
      scratchHere: string;
      discountLabel: string;
      discountSub: string;
      promoLabel: string;
      overlayNote: string;
    };
    paywall: {
      timerLabel: string;
      timerMinutes: string;
      timerSeconds: string;
      topCta: string;
      heroTitle: string;
      nowLabel: string;
      goalLabel: string;
      muscleStrength: string;
      strengthNow: string;
      strengthGoal: string;
      calisthenicsLevel: string;
      levelNow: string;
      levelGoal: string;
      choosePlanTitle: string;
      promoAppliedTitle: string;
      mostPopular: string;
      plan1Title: string;
      plan1Sub: string;
      plan4Title: string;
      plan12Title: string;
      perDay: string;
      getMyPlan: string;
      legalSubscription: string;
      manageSub: string;
      includedTitle: string;
      features: { title: string; desc: string }[];
      progressHeader: string;
      dayLabel: string;
      ratingsCount: string;
      ratingsFiveStar: string;
      appOfDay: string;
      appOfDaySub: string;
      resultsTitle: string;
      resultsCards: { name: string; quote: string }[];
      faqTitle: string;
      faqs: { q: string; a: string }[];
      trustedTitle: string;
      trustCards: { title: string; author: string; body: string }[];
      disclaimer: string;
      excellent: string;
      visibleResultsTitle: string;
      guaranteeTitle: string;
      guaranteeDesc: string;
      guaranteeLinkPrefix: string;
      guaranteeLink: string;
      companyLegal: string;
    };
    checkout: {
      title: string;
      summaryTitle: string;
      regularPrice: string;
      initialDiscount: string;
      appliedPromo: string;
      totalToPay: string;
      savingsBanner: string;
      expressCheckout: string;
      buyWithApplePay: string;
      payWithPix: string;
      creditCard: string;
      cardNumber: string;
      expiry: string;
      cvv: string;
      cardHolder: string;
      payNowBtn: string;
      approvedMsg: string;
      securePayment: string;
    };
  };
}

export function interpolate(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key: string) =>
    vars[key] !== undefined ? String(vars[key]) : '',
  );
}

const PT: TranslationDict = {
  common: {
    brand: 'BestMe',
    continueBtn: 'CONTINUAR',
    nextStepBtn: 'PRÓXIMO PASSO',
    skipStepBtn: 'PULAR ESTA ETAPA',
    back: 'Voltar',
    login: 'Entrar',
    help: 'Ajuda',
    language: 'Idioma',
    homeLink: 'Início',
    selectAllApply: 'Escolha todas que se aplicam',
    termsPrefix: 'Ao escolher sua idade e continuar, você concorda com nossos',
    termsLink: 'Termos de Serviço',
    privacyLink: 'Política de Privacidade',
    termsSuffix: 'Leia antes de continuar',
    mobileOnlyTitle: 'Acesso Exclusivo via Celular',
    mobileOnlyDesc:
      'O desafio interativo de calistenia e o aplicativo BestMe foram otimizados para funcionar diretamente no seu smartphone.',
    mobileOnlyHow: '📱 Como acessar o funil agora:',
    mobileOnlyHint:
      'Abra este link no navegador do seu celular ou ative o Modo Mobile (F12 → Dispositivos Móveis) no navegador.',
    mobileOnlyBackHome: 'Voltar para a Página Inicial',
    asSeenIn: 'Como visto em',
    noneOption: 'Nenhuma das opções',
  },
  home: {
    navApps: 'Aplicativos',
    navCalisthenics: 'Calistenia',
    navStore: 'BestMe Store',
    navBusiness: 'Para Empresas',
    navReviews: 'Avaliações',
    navStartQuiz: 'Começar Desafio',
    heroBadge: 'Ecossistema global de bem-estar · 150M+ downloads',
    heroTitle: 'Bem-estar feito para a vida real, não para extremos.',
    heroSubtitle:
      'Treinos guiados de calistenia sem equipamento, nutrição personalizada, saúde mental e ferramentas diárias que se adaptam à sua rotina em apenas 15 minutos por dia.',
    heroCta: 'Iniciar Meu Plano Personalizado',
    heroSecondaryCta: 'Explorar o Ecossistema',
    heroRating: '4.8 ★ na App Store · App do Dia em 160 países',
    quickTitle: 'Comece seu Desafio de Calistenia de 4 Semanas',
    quickSubtitle: 'Escolha abaixo para personalizar seu plano por gênero, idade e objetivos.',
    quickWomanTitle: 'Para Mulheres',
    quickWomanSub: 'Tonificação, força funcional e queima de gordura em casa',
    quickManTitle: 'Para Homens',
    quickManSub: 'Massa muscular, definição abdominal e resistência sem aparelhos',
    quickStartTag: 'Iniciar quiz personalizado →',
    worldEyebrow: 'Conheça o Mundo BestMe',
    worldTitle: 'Um ecossistema completo para corpo e mente',
    worldSubtitle:
      'Tudo o que você precisa para criar hábitos sustentáveis: treinos guiados em vídeo, planejamento alimentar, suporte emocional e acessórios de treino.',
    worldCards: {
      coaching: {
        tag: 'BestMe: Health Coaching',
        title: 'Calistenia, Pilates & Nutrição',
        desc: 'Mais de 4.000 treinos guiados sem equipamento, receitas rápidas adaptadas à sua dieta e acompanhamento diário.',
        cta: 'Montar meu plano',
        bullet1: 'Rotinas de 10 a 20 minutos em casa',
        bullet2: 'Planos alimentares para 10+ tipos de dieta',
        bullet3: 'Suporte de especialistas certificados',
      },
      mental: {
        tag: 'BestMe: Mental Health',
        title: 'Sono, Foco & Anti-Estresse',
        desc: 'Meditações guiadas, exercícios de respiração e ferramentas práticas para reduzir ansiedade e melhorar sua energia.',
        cta: 'Fazer avaliação',
        bullet1: 'Áudios de 5 min para aliviar o estresse',
        bullet2: 'Rotinas noturnas para dormir melhor',
        bullet3: 'Check-ins diários de humor e energia',
      },
      store: {
        tag: 'BestMe Store',
        title: 'Activewear & Equipamentos',
        desc: 'Roupas esportivas confortáveis para todos os tipos de corpo e acessórios compactos para potencializar seus treinos em casa.',
        cta: 'Começar em casa',
        bullet1: 'Modelagem inclusiva e respirável',
        bullet2: 'Faixas elásticas, tapetes e garrafas térmicas',
        bullet3: 'Integrado aos treinos do aplicativo',
      },
      business: {
        tag: 'BestMe para Empresas',
        title: 'Saúde Corporativa & Equipes',
        desc: 'Desafios de bem-estar, prevenção de burnout e programas de atividade física que aumentam o engajamento da sua equipe.',
        cta: 'Solicitar desafio',
        bullet1: 'Desafios gamificados em equipe',
        bullet2: 'Métricas de engajamento e bem-estar',
        bullet3: 'Disponível em múltiplos idiomas',
      },
    },
    howEyebrow: 'Simples, guiado e sustentável',
    howTitle: 'Como funciona o seu plano em 3 passos',
    howSteps: [
      {
        num: '01',
        title: 'Diagnóstico inteligente em 2 min',
        desc: 'Respondendo ao quiz, identificamos seu biótipo, condicionamento atual, rotina e preferências alimentares.',
      },
      {
        num: '02',
        title: 'Treinos de 15 min + Plano alimentar',
        desc: 'Receba sua programação de 4 semanas com exercícios em vídeo passo a passo e cardápio personalizado.',
      },
      {
        num: '03',
        title: 'Resultados visíveis e duradouros',
        desc: 'Na semana 1 você sente mais energia, na semana 2 vê diferença e na semana 4 celebra sua transformação.',
      },
    ],
    impactTitle: 'Feito para pessoas reais no mundo todo',
    impactDesc:
      'Acreditamos que saúde não é sobre perfeição estética — é sobre constância, acessibilidade e respeito ao seu corpo.',
    impactStats: [
      { value: '150M+', label: 'Downloads globais' },
      { value: '2.2M+', label: 'Avaliações de usuários' },
      { value: '160', label: 'Países com App do Dia' },
      { value: '15 min', label: 'Por dia em casa' },
    ],
    reviewsTitle: 'Confiado por mais de 10 milhões de pessoas',
    reviewsSubtitle: 'Histórias reais de quem transformou sua rotina com o Desafio de Calistenia BestMe.',
    reviews: [
      {
        name: 'Vera, -5 kg*',
        result: 'Desafio de 4 semanas',
        quote: 'Comecei com 75 kg sem conseguir fazer flexões. Em 4 semanas ganhei força, reduzi medidas e hoje amo treinar em casa.',
      },
      {
        name: 'Mandy, -4 kg*',
        result: 'Mais definição muscular',
        quote: 'Os treinos são curtos e vão direto ao ponto. O plano alimentar com receitas de 15 minutos mudou totalmente minha disposição.',
      },
      {
        name: 'Juan P.',
        result: 'Ganho de massa e energia',
        quote: 'A primeira semana foi acessível e a progressão me surpreendeu. Recomendo para quem quer definir o corpo sem academia.',
      },
    ],
    finalCtaTitle: 'Pronto(a) para começar nesta segunda-feira?',
    finalCtaSubtitle: 'Responda ao quiz rápido e receba seu Desafio de Calistenia personalizado com 50% de desconto.',
    finalCtaBtn: 'Fazer Meu Diagnóstico Agora',
    footerTagline: 'Ecossistema global de saúde, calistenia e bem-estar.',
    footerCols: {
      ecosystem: 'Ecossistema',
      ecosystemLinks: ['Health Coaching', 'Mental Health', 'BestMe Store', 'Para Empresas'],
      company: 'Sobre a BestMe',
      companyLinks: ['Nossa Missão', 'Especialistas', 'Avaliações', 'Blog de Bem-Estar'],
      support: 'Suporte & Legal',
      supportLinks: ['Central de Ajuda', 'Termos de Serviço', 'Política de Privacidade', 'Gerenciar Assinatura'],
    },
    footerCopy: '© 2026 BestMe Well-Being. Todos os direitos reservados.',
  },
  funnel: {
    sections: {
      profile: 'Meu perfil',
      activity: 'Atividade',
      lifestyle: 'Estilo de vida e hábitos',
      nutrition: 'Nutrição',
      almostThere: 'Quase lá',
    },
    step0: {
      eyebrow: 'DESAFIO PERSONALIZADO',
      title: 'Para quem estamos montando este plano?',
      subtitle: 'Selecione seu perfil para adaptar treinos, métricas de IMC e metas',
      woman: 'Mulher',
      womanSub: 'Treinos focados em tônus, postura e definição',
      man: 'Homem',
      manSub: 'Treinos focados em força, massa magra e definição',
    },
    step1: {
      title: 'DESAFIO DE CALISTENIA',
      subtitle: 'COMECE NESTA SEGUNDA-FEIRA E FIQUE IRRECONHECÍVEL ATÉ JANEIRO',
      ageLabel: 'Idade:',
    },
    step2: {
      headlineWoman: 'Mais de 306.000 mulheres',
      headlineMan: 'Mais de 284.000 homens',
      subtext: 'entre {{age}} anos já experimentaram nosso Desafio de calistenia',
    },
    step3: {
      title: 'Você já experimentou treinos de calistenia?',
      yes: 'Sim',
      no: 'Não',
    },
    step4: {
      title: 'A calistenia é uma forma simples e eficaz de se exercitar!',
      p1: 'É um tipo de treino que utiliza o peso do próprio corpo.',
      p2Woman: 'Vamos ajudá-la a ficar em forma em casa sem precisar de nenhum equipamento!',
      p2Man: 'Vamos ajudá-lo a ficar em forma em casa sem precisar de nenhum equipamento!',
    },
    step5: {
      title: 'Qual é o seu principal objetivo?',
      loseWeight: 'Perder peso',
      gainMuscle: 'Ganhar músculo',
      stayFit: 'Manter o peso e ficar em forma',
    },
    step6: {
      title: 'O que mais você espera alcançar com este desafio?',
      options: [
        'Perder gordura',
        'Esculpido e definido',
        'Melhorar a postura',
        'Reduzir o estresse e a preocupação',
        'Ganhar flexibilidade',
      ],
    },
    step7: {
      title: 'Como você descreveria seu físico?',
      options: [
        { id: 'slim', label: 'Magro' },
        { id: 'average', label: 'Médio' },
        { id: 'plus', label: 'Tamanho grande' },
        { id: 'overweight', label: 'Significativamente acima do peso' },
      ],
    },
    step8: {
      title: 'Qual é o seu corpo de sonho?',
      subtitle: 'Visualize sua meta para se manter motivado e responsável',
      options: [
        { id: 'slim', label: 'Magro' },
        { id: 'toned', label: 'Tonificado' },
        { id: 'curvy', label: 'Com curvas' },
        { id: 'bulk', label: 'Volume' },
      ],
    },
    step9: {
      title: 'Grandes vitórias começam com pequenos passos',
      p1Prefix: 'Esta não é mais uma "promessa de segunda-feira". Seu desafio foi ',
      p1Bold: 'criado para ajudar você a continuar.',
      p2: 'Cada sessão concluída aproxima você dos resultados que vai ver e sentir.',
      weekLabels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
      barTexts: ['Mais energia', 'Menos tensão', 'Mais força', 'Corpo definido'],
      monday: 'Segunda',
    },
    step10: {
      title: 'Há quanto tempo você esteve no melhor físico de sua vida?',
      options: ['Há menos de um ano', '1 a 2 anos atrás', 'Há mais de 3 anos', 'Nunca'],
    },
    step11: {
      title: 'Como seu peso muda tipicamente?',
      hardLose: 'Peso difícil de perder',
      changesEasily: 'O peso muda facilmente',
      hardGain: 'Dificuldade em ganhar peso',
    },
    step12: {
      mesomorfoTitle: 'Parece que você tem o biótipo Mesomorfo',
      mesomorfoDesc: 'O seu corpo muda rapidamente, por isso precisa da abordagem certa para atingir e manter o seu objetivo físico.',
      endomorfoTitle: 'Parece que você tem o biótipo Endomorfo',
      endomorfoDesc: 'Seu metabolismo armazena energia com facilidade, respondendo muito bem a treinos metabólicos e controle nutricional.',
      ectomorfoTitle: 'Parece que você tem o biótipo Ectomorfo',
      ectomorfoDesc: 'Seu metabolismo acelerado pede estímulos de força progressivos e nutrição rica para ganhar massa magra.',
      p2Prefix: 'Os nossos ',
      p2Bold: 'treinos guiados por vídeo e apoio nutricional',
      p2Suffix: ' vão garantir que atinge o seu objetivo físico.',
    },
    step13: {
      title: 'Quantas vezes treina?',
      options: ['Quase todos os dias', 'Várias vezes por semana', 'Várias vezes por mês', 'Nunca'],
    },
    step14: {
      title: 'Qual é a sua área de foco?',
      options: [
        { id: 'abs', label: 'Barriga' },
        { id: 'glutes', label: 'Glúteos' },
        { id: 'legs', label: 'Pernas' },
        { id: 'chest', label: 'Peito' },
        { id: 'arms', label: 'Braços' },
        { id: 'back', label: 'De Costas' },
      ],
    },
    step15: {
      title: 'Com que frequência você sai para caminhadas?',
      options: ['Quase todos os dias', '3-4 vezes por semana', '1 a 2 vezes por semana', 'Uma vez ao mês'],
    },
    step16: {
      title: 'Como você se sente ao subir escadas?',
      options: [
        'Muito sem fôlego',
        'Sinto dores musculares ao longo do tempo',
        'Ok depois de um lance de escada',
        'Bem depois de várias subidas',
      ],
    },
    step17: {
      title: 'Quantas flexões você consegue fazer de uma vez?',
      options: ['Não consigo fazer flexões', '1-10 flexões', '11-20 flexões', '20+ flexões'],
    },
    step18: {
      title: 'Quantos agachamentos você consegue fazer?',
      options: ['Não consigo fazer agachamentos', '11-20 agachamentos', '21-40 agachamentos', '40+ agachamentos'],
    },
    step19: {
      title: 'Você tem dificuldade com algum dos itens abaixo?',
      back: 'Costas sensíveis',
      knees: 'Joelhos sensíveis',
    },
    step20: {
      title: 'Ótimo, entendido!',
      p1: 'Vamos adicionar exercícios que fortalecem todo o seu corpo e melhoram seu condicionamento físico geral.',
      p2: 'Uma rotina de exercícios simples e regular significa uma vida mais saudável e feliz!',
    },
    step21: {
      title: 'Como é a sua rotina de trabalho?',
      options: [
        'Das 9h às 17h',
        'Meus horários são flexíveis',
        'Turnos noturnos',
        'Estou aposentado/não estou trabalhando no momento',
      ],
    },
    step22: {
      title: 'Como você descreveria seu dia típico?',
      options: ['Eu passo a maior parte do dia sentado', 'Eu faço pausas ativas', 'Estou de pé o dia todo'],
    },
    step23: {
      title: 'Como são os seus níveis de energia durante o dia?',
      lowWoman: 'Baixos, sinto-me cansada durante o dia',
      lowMan: 'Baixos, sinto-me cansado durante o dia',
      postLunch: 'Baixa após o almoço',
      drag: 'Arrasto-me entre refeições',
      high: 'Elevados e estáveis',
    },
    step24: {
      title: 'Acabe de vez com a queda de energia pós-almoço',
      p1: 'Nossos treinos vão ajudar você a melhorar sua resistência e condicionamento.',
      p2: 'Você terá mais energia e força para acompanhar suas atividades diárias.',
    },
    step25: {
      title: 'Quanta água bebe diariamente?',
      subtitle: '1 copo médio de água equivale a 237 ml',
      options: ['Apenas tomo café ou chá', 'Cerca de 2 copos', '2 a 6 copos', 'Mais de 6 copos'],
    },
    step26: {
      title: 'Quantas horas você costuma dormir?',
      options: ['Menos de 5 horas', '5-6 horas', '7-8 horas', 'Mais de 8 horas'],
    },
    step27: {
      title: 'Quando você normalmente toma café da manhã?',
      options: ['Entre as 6h e as 8h', 'Entre as 8h e as 10h', 'Entre as 10h e o meio dia', 'Costumo pular o café da manhã'],
    },
    step28: {
      title: 'E o almoço?',
      options: ['Entre as 10h e o meio dia', 'Entre o meio dia e as 14h', 'Entre as 14h e as 16h', 'Costumo pular o almoço'],
    },
    step29: {
      title: 'A que horas você normalmente janta?',
      options: ['Entre 16h e 18h', 'Entre 18h e 20h', 'Entre 20h e 22h', 'Costumo pular o jantar'],
    },
    step30: {
      title: 'Que tipo de dieta você prefere?',
      groups: {
        withMeat: {
          label: 'COM CARNE',
          items: [
            { id: 'traditional', title: 'Tradicional', desc: 'Eu gosto de tudo' },
            { id: 'keto', title: 'Cetogênica', desc: 'Eu prefiro refeições com alto teor de gordura e baixo teor de carboidratos' },
            { id: 'paleo', title: 'Paleo', desc: 'Eu não como alimentos processados' },
          ],
        },
        noMeat: {
          label: 'SEM CARNE',
          items: [
            { id: 'vegetarian', title: 'Vegetariano', desc: 'Eu evito carne e peixe' },
            { id: 'vegan', title: 'Vegana (dieta vegetal)', desc: 'Eu não como produtos animais' },
            { id: 'vegan_keto', title: 'Dieta cetogênica vegana', desc: 'Eu como somente refeições à base de plantas com baixo teor de carboidratos' },
          ],
        },
        withFish: {
          label: 'COM PEIXE',
          items: [
            { id: 'mediterranean', title: 'Mediterrânea', desc: 'Eu como muitos vegetais, grãos e frutos do mar' },
            { id: 'pescatarian', title: 'Pescatariana', desc: 'Eu evito carne, mas gosto de peixe' },
          ],
        },
        noAllergens: {
          label: 'SEM ALÉRGENOS',
          items: [
            { id: 'lactose_free', title: 'Sem lactose', desc: 'Eu não consumo alimentos com lactose' },
            { id: 'gluten_free', title: 'Sem glúten', desc: 'Eu evito grãos contendo glúten' },
          ],
        },
      },
    },
    step31: {
      title: 'Ganhe massa muscular com um plano alimentar personalizado',
      p1: 'A nutrição é fundamental para ter um corpo forte e definido.',
      p2: 'Receba receitas rápidas e saborosas e melhore seus hábitos alimentares para atingir seu objetivo mais rápido.',
      phoneHeader: 'Suas refeições',
      breakfast: 'Café da manhã',
      lunch: 'Almoço',
      dinner: 'Jantar',
    },
    step32: {
      title: 'Você tem algum desses hábitos?',
      options: ['Comer por emoção ou tédio', 'Comer demais', 'Lanches noturnos', 'Pular refeições com frequência'],
    },
    step33: {
      title: 'Especialistas certificados de alto nível',
      specialists: [
        { name: 'Lisa Wishmann', role: 'Especialista em Força e Condicionamento' },
        { name: 'Sydney Bueckert', role: 'Treinador pessoal certificado (NASM)' },
        { name: 'Kelsey Butler', role: 'Nutricionista Dietista Registrada' },
      ],
    },
    step34: {
      title: 'Qual a sua altura?',
      placeholder: 'Altura',
      rangeHintCm: 'Por favor, introduza um valor entre 90 cm e 243 cm',
      rangeHintFt: 'Por favor, introduza um valor entre 3 ft e 8 ft',
      consentText: 'Concordo que a BestMe processe os dados sobre minha saúde fornecidos no cadastro inicial para oferecer serviços e melhorar minha experiência de uso.',
      privacyLink: 'Política de Privacidade.',
    },
    step35: {
      title: 'Qual é o seu peso atualmente?',
      placeholder: 'Seu peso',
      rangeHintKg: 'Por favor, introduza um valor entre 25 kg e 300 kg',
      rangeHintLbs: 'Por favor, introduza um valor entre 55 lbs e 660 lbs',
    },
    step36: {
      title: 'Percebido! E qual é o seu objetivo de peso ideal?',
      placeholder: 'Peso ideal',
      moveLabel: 'Movimente-se:',
      gainLabel: 'ganhe {{pct}}% do seu peso',
      loseLabel: 'perca {{pct}}% do seu peso',
      maintainLabel: 'mantenha seu peso ideal com definição',
      studyNote: 'De acordo com estudos, treinar apenas 5 minutos por dia pode manter seu nível de condicionamento físico, aumentar seus níveis de energia e proporcionar um sono melhor.',
    },
    step37: {
      title: 'Qual é a sua idade?',
      unit: 'anos',
      noteTitle: 'Perguntamos a sua idade para personalizar o seu plano',
      noteDesc: 'As pessoas mais velhas tendem a ter mais gordura corporal que os mais novos com o mesmo IMC',
    },
    step38: {
      title: 'Analisando suas respostas',
      bars: ['Seu perfil', 'Atividade', 'Estilo de vida e hábitos', 'Nutrição'],
      awardTitle: 'APP DO DIA',
      awardSub: 'em 160 países | 15 de julho de 2025',
    },
    step39: {
      title: 'Aqui está o seu perfil de bem-estar',
      bmiTitle: 'Índice de Massa Corporal (IMC)',
      scaleLabels: ['Abaixo do peso', 'Normal', 'Acima do peso', 'Obeso'],
      bmiHealthyTitle: 'IMC saudável:',
      bmiHealthyDesc: 'Bom IMC inicial para tonificar e obter o seu corpo de sonho',
      bmiImproveTitle: 'Potencial de otimização:',
      bmiImproveDesc: 'Seu plano de calistenia vai equilibrar composição corporal e energia',
      bodyTypeLabel: 'Tipo de corpo',
      lifestyleLabel: 'Estilo de vida',
      lifestyleValue: 'Ativo',
      fitnessLabel: 'Nível de fitness',
      fitnessValue: 'Intermédio',
      metabolismLabel: 'Metabolismo',
      metabolismValue: 'Moderado, desafiante ficar definido',
    },
    step40: {
      title: 'Houve algum evento nos últimos anos que impactou o crescimento muscular?',
      options: [
        'Pressão no trabalho',
        'Desafios financeiros',
        'Vida familiar agitada',
        'Pandemia de Covid-19',
        'Divórcio ou término de relacionamento',
        'Outros eventos estressantes',
        'Metabolismo mais lento devido ao envelhecimento',
      ],
    },
    step41: {
      title: 'Você tem algum evento importante pela frente?',
      subtitle: 'Ter algo para esperar pode ser um grande motivador para alcançar sua meta',
      options: ['Férias', 'Reunião', 'Casamento', 'Aniversário', 'Feriado', 'Outros', 'Evento esportivo'],
      noneEvent: 'Nenhum evento em breve',
    },
    step42: {
      title: 'Quando é o seu evento?',
      subtitle: 'Vamos manter este evento importante em mente para o seu objetivo fitness',
      selectDateLabel: 'Selecionar data',
      privacyNote: 'Seus dados serão processados de acordo com a nossa Política de Privacidade.',
    },
    step43: {
      title: 'O plano que finalmente vai ajudar você a entrar em forma',
      estimatePrefix: 'Estimamos que você poderá pesar',
      untilLabel: 'até',
      untilEventTag: '{{diff}} até {{event}}',
      chartObjective: 'Objetivo',
      disclaimer: '* Com base nos dados de usuários que registram seu progresso no aplicativo. Seguir o plano de exercícios e o plano alimentar tem um grande impacto nos resultados. O gráfico é uma ilustração genérica, e os resultados podem variar.',
      quote: 'Nosso Desafio de calistenia vai ajudar você a alcançar resultados duradouros. Ele combina treinos envolventes com nutrição saudável para garantir seu progresso.',
    },
    step44: {
      title: 'Qual é o seu principal motivo para ganhar músculo?',
      optionsWoman: [
        'Me sentir mais confiante no meu corpo',
        'Me sentir mais saudável e energético',
        'Ficar melhor nas minhas roupas',
        'Voltar à forma após o parto',
        'Outros',
      ],
      optionsMan: [
        'Me sentir mais confiante no meu corpo',
        'Me sentir mais saudável e energético',
        'Ficar melhor nas minhas roupas',
        'Aumentar força e resistência física',
        'Outros',
      ],
    },
    step45: {
      title: 'Melhore seu bem-estar todos os dias',
      p1: 'A prontidão não é um requisito: basta começar e deixar cada sessão renovar suas energias.',
      p2: 'Nós cuidamos da progressão; você só precisa de 15 minutos de movimento por dia.',
      cardTitle: 'Build Your Core',
      cardDuration: '15 min',
    },
    step46: {
      title: 'Quão confiante você está de atingir sua meta até {{date}}?',
      optionsWoman: [
        'Acredito que posso fazer isso!',
        'Ainda tenho dúvidas, mas quero tentar!',
        'Ainda estou muito insegura',
      ],
      optionsMan: [
        'Acredito que posso fazer isso!',
        'Ainda tenho dúvidas, mas quero tentar!',
        'Ainda estou muito inseguro',
      ],
    },
    step47: {
      title: 'O que torna a BestMe uma escolha confiável',
      awards: [
        { title: 'The Best Mobile App Awards', desc: 'eleita a melhor na categoria Saúde & Fitness', year: '2022' },
        { title: 'Top 3 apps de treino guiado', desc: 'segundo o relatório da Apple sobre apps de terceiros', year: '2022' },
        { title: 'Melhores apps de fitness', desc: 'pela Forbes Health', year: '2025' },
      ],
    },
    step48: {
      creating: 'Criando seu desafio de calistenia personalizado',
      socialCountWoman: '287.465 mulheres',
      socialCountMan: '241.890 homens',
      socialSub: 'escolheram a BestMe para ganhar massa muscular e ficar em forma',
      reviewTitle: 'Eu gosto do aplicativo',
      reviewAuthor: 'Maria',
      reviewBody: 'Bem, eu gosto do aplicativo porque ele ajuda a controlar a alimentação e também a fazer exercícios e manter o corpo em forma.',
    },
    step49: {
      titlePrefix: 'Informe seu e-mail para receber uma versão personalizada de ',
      titleHighlight: 'Desafio de calistenia',
      titleSuffix: ' e desenvolver os músculos',
      placeholder: 'seuemail@exemplo.com',
      privacyPrefix: 'Respeitamos sua privacidade e estamos comprometidos em proteger seus dados pessoais. Seus dados serão processados de acordo com nossa',
      privacyLink: 'Política de Privacidade.',
    },
    step50: {
      title: 'Qual é o seu nome?',
      placeholder: 'Digite seu nome',
    },
    step51: {
      titlePrefix: '{{name}}, seu Desafio de calistenia de 4 semanas para ',
      goalLose: 'perder peso',
      goalGain: 'ganhar massa muscular',
      goalFit: 'entrar em forma',
      titleSuffix: ' está pronto!',
      chartTitle: 'Sua força muscular',
      mondayBadge: 'Segunda-feira',
      weeks: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
      chartNote: 'Este gráfico é apenas para fins ilustrativos',
      bullet1: 'Perfeito para iniciantes',
      bullet2: 'Adaptado com base nas suas respostas',
      bullet3Prefix: 'Objetivo: {{diff}} até {{date}}',
    },
    step52: {
      slides: [
        'Faça desta segunda-feira a que vai durar',
        'Você ficará irreconhecível, com apenas 15 minutos por dia e refeições saudáveis',
        'Para definir o corpo e achatar a barriga',
        'Na semana 1 – você vai sentir\nNa semana 2 – vai ver\nNa semana 3 – vai se orgulhar',
        'Vamos começar!',
      ],
    },
    step53: {
      title: 'Raspe para revelar seu desconto especial!',
      subtitle: 'Queremos que você comece sua jornada com uma boa surpresa',
      scratchHere: 'Raspe aqui',
      discountLabel: 'de desconto',
      discountSub: 'no seu Desafio de calistenia',
      promoLabel: 'Código promocional',
      overlayNote: 'Aplicado automaticamente no checkout',
    },
    paywall: {
      timerLabel: 'O desconto está reservado por:',
      timerMinutes: 'minutos',
      timerSeconds: 'segundos',
      topCta: 'OBTER O MEU PLANO',
      heroTitle: 'Seu Desafio de calistenia está pronto!',
      nowLabel: 'Agora',
      goalLabel: 'Seu objetivo',
      muscleStrength: 'Força muscular',
      strengthNow: 'Médio',
      strengthGoal: 'Alta',
      calisthenicsLevel: 'Nível de treino de calistenia',
      levelNow: 'Intermédio',
      levelGoal: 'Avançado',
      choosePlanTitle: 'Escolha o seu plano',
      promoAppliedTitle: 'Seu código promocional foi aplicado!',
      mostPopular: 'MAIS POPULAR',
      plan1Title: 'Teste de 1 semana',
      plan1Sub: 'PLANO DE 4 SEMANAS',
      plan4Title: 'Plano de 4 Semanas',
      plan12Title: 'Plano de 12 Semanas',
      perDay: 'por dia',
      getMyPlan: 'OBTER O MEU PLANO',
      legalSubscription: 'Caso eu não cancele antes do fim do plano selecionado, concordo que a BestMe cobrará automaticamente o valor regular do plano até que eu cancele. Cancele online pela página',
      manageSub: 'Gerenciar assinatura',
      includedTitle: 'O que está incluído no seu plano',
      features: [
        { title: 'Treinos fáceis em casa', desc: 'para ganhar músculos e ficar em forma' },
        { title: 'Exercícios para iniciantes', desc: 'para uma barriga mais lisa e uma forma melhor' },
        { title: 'Rotinas de 10-20 min', desc: 'que se encaixam na sua agenda' },
        { title: 'Sem equipamento', desc: 'tudo que você precisa é nosso plano' },
        { title: 'Plano alimentar personalizado', desc: 'com receitas rápidas e saborosas' },
        { title: 'Dicas e truques de especialistas', desc: 'para melhorar seu estilo de vida e se manter em forma' },
      ],
      progressHeader: 'Seu progresso',
      dayLabel: 'Dia',
      ratingsCount: 'avaliações',
      ratingsFiveStar: 'Avaliações de 5 estrelas',
      appOfDay: 'APP DO DIA',
      appOfDaySub: 'em 160 países · 15 de julho de 2025',
      resultsTitle: 'Resultados que nos deixam orgulhosos',
      resultsCards: [
        { name: 'Vera, -5 kg*', quote: 'Quando comecei, estava com 75 kg. Então, fui aumentando gradualmente a carga e passei a treinar todos os dias com o aplicativo.' },
        { name: 'Mandy, -4 kg*', quote: 'Acabei de terminar meu treino de hoje e a sensação é incrível! Os treinos curtos mudaram minha disciplina.' },
        { name: 'Nina, -3 kg*', quote: 'Estou com 4 meses de pós-parto e estava super desanimada até encontrar treinos fáceis de encaixar no meu dia.' },
      ],
      faqTitle: 'Perguntas Frequentes',
      faqs: [
        { q: 'Como este plano pode me ajudar a ganhar músculos?', a: 'Nosso plano foi desenvolvido para ajudar você a ganhar massa magra combinando treinos passo a passo com um plano de refeições personalizado. Nossas rotinas guiadas em vídeo vão garantir a forma correta e ajudar você a se manter consistente e motivado.' },
        { q: 'Quais são os benefícios da calistenia?', a: 'A calistenia pode ajudar você a ganhar força, melhorar a flexibilidade, queimar gordura e definir o corpo sem equipamentos.' },
        { q: 'E se eu perder a motivação rapidamente?', a: 'Vamos oferecer lembretes amigáveis, orientação de especialistas, ferramentas práticas de acompanhamento e suporte contínuo para ajudar você a ver progresso e manter a consistência.' },
      ],
      trustedTitle: 'Confiado por mais de 10 milhões de pessoas',
      trustCards: [
        { title: 'Sinto-me mais ativa e mais forte', author: 'Natalia P.', body: 'Consegui ganhar massa muscular em menos de um mês de treino e já me sinto mais ativa e forte.' },
        { title: 'Para qualquer pessoa que queira perder peso ou ganhar músculos', author: 'Juan', body: 'Ótimo app de exercícios. Até agora, a primeira semana começou bem e fácil e agora estão ficando gradualmente mais difíceis.' },
        { title: 'Trabalhe todos os músculos do seu corpo', author: 'Mayra', body: 'A rotina de exercícios é maravilhosa, você trabalha todos os músculos do corpo e decide até onde quer ir a cada dia.' },
      ],
      disclaimer: '*Aviso: Seguir o plano de exercícios e de alimentação impacta significativamente os resultados. Em 4 semanas, os usuários geralmente podem esperar perder não mais do que 0.45-0.9 kg por semana. Os resultados individuais podem variar.',
      excellent: 'Excelente',
      visibleResultsTitle: 'Obtenha resultados visíveis em 4 semanas!',
      guaranteeTitle: 'garantia de reembolso de 30 dias',
      guaranteeDesc: 'Acreditamos que nosso plano funcionará para você, e você deverá ver resultados visíveis em apenas 4 semanas! Estamos prontos até mesmo para devolver seu dinheiro se você puder demonstrar que seguiu o plano, mas não viu nenhum resultado.',
      guaranteeLinkPrefix: 'Saiba mais sobre as limitações aplicáveis em nossa',
      guaranteeLink: 'política de reembolso.',
      companyLegal: 'BestMe Well-Being Platform • Atendimento global em 6 idiomas',
    },
    checkout: {
      title: 'Complete seu checkout',
      summaryTitle: 'Resumo da encomenda',
      regularPrice: 'Preço regular',
      initialDiscount: 'Seu desconto inicial de 50%',
      appliedPromo: 'Código promocional aplicado:',
      totalToPay: 'Total a pagar:',
      savingsBanner: 'Você economiza {{saved}} nas primeiras semanas (50% DE DESCONTO)',
      expressCheckout: 'Pagamento rápido',
      buyWithApplePay: 'Pagar com Apple Pay',
      payWithPix: 'Pagar com PIX Instantâneo',
      creditCard: 'Cartão de crédito',
      cardNumber: 'Número do cartão',
      expiry: 'MM/AA',
      cvv: 'CVV',
      cardHolder: 'Nome do titular',
      payNowBtn: 'Pagar Agora',
      approvedMsg: 'Pagamento aprovado! Abrindo seu App BestMe...',
      securePayment: 'Pagamento 100% seguro · Criptografia SSL',
    },
  },
};

const US: TranslationDict = {
  common: {
    brand: 'BestMe',
    continueBtn: 'CONTINUE',
    nextStepBtn: 'NEXT STEP',
    skipStepBtn: 'SKIP THIS STEP',
    back: 'Back',
    login: 'Log in',
    help: 'Help',
    language: 'Language',
    homeLink: 'Home',
    selectAllApply: 'Select all that apply',
    termsPrefix: 'By choosing your age and continuing, you agree to our',
    termsLink: 'Terms of Service',
    privacyLink: 'Privacy Policy',
    termsSuffix: 'Please read before continuing',
    mobileOnlyTitle: 'Mobile Exclusive Access',
    mobileOnlyDesc:
      'The interactive calisthenics challenge and the BestMe member app are optimized for your smartphone.',
    mobileOnlyHow: '📱 How to access right now:',
    mobileOnlyHint:
      'Open this link on your phone browser or enable Mobile Mode (F12 → Device Toolbar) in your desktop browser.',
    mobileOnlyBackHome: 'Back to Home Page',
    asSeenIn: 'As seen in',
    noneOption: 'None of the above',
  },
  home: {
    navApps: 'Apps',
    navCalisthenics: 'Calisthenics',
    navStore: 'BestMe Store',
    navBusiness: 'For Business',
    navReviews: 'Reviews',
    navStartQuiz: 'Start Challenge',
    heroBadge: 'Global well-being ecosystem · 150M+ downloads',
    heroTitle: 'Well-being built for real life, not extremes.',
    heroSubtitle:
      'Guided equipment-free calisthenics workouts, personalized nutrition, mental health support, and daily habit tools tailored to fit your schedule in just 15 minutes a day.',
    heroCta: 'Start My Personalized Plan',
    heroSecondaryCta: 'Explore the Ecosystem',
    heroRating: '4.8 ★ on App Store · App of the Day in 160 countries',
    quickTitle: 'Start Your 4-Week Calisthenics Challenge',
    quickSubtitle: 'Choose below to customize your plan by gender, age, and fitness goals.',
    quickWomanTitle: 'For Women',
    quickWomanSub: 'Toning, functional strength, and fat loss at home',
    quickManTitle: 'For Men',
    quickManSub: 'Lean muscle, core definition, and stamina without gear',
    quickStartTag: 'Start personalized quiz →',
    worldEyebrow: 'Meet the BestMe World',
    worldTitle: 'An all-in-one ecosystem for body and mind',
    worldSubtitle:
      'Everything you need to build lasting habits: video-guided workouts, meal planning, mindfulness tools, and home gym essentials.',
    worldCards: {
      coaching: {
        tag: 'BestMe: Health Coaching',
        title: 'Calisthenics, Pilates & Nutrition',
        desc: 'Over 4,000 equipment-free workouts, quick meal recipes matched to your diet, and daily progress coaching.',
        cta: 'Build my plan',
        bullet1: '10–20 minute home routines',
        bullet2: 'Meal plans for 10+ diet styles',
        bullet3: 'Guidance by certified specialists',
      },
      mental: {
        tag: 'BestMe: Mental Health',
        title: 'Sleep, Focus & Stress Relief',
        desc: 'Guided meditations, breathwork, and practical tools to ease stress and restore steady daily energy.',
        cta: 'Take assessment',
        bullet1: '5-minute stress relief sessions',
        bullet2: 'Evening wind-down sleep stories',
        bullet3: 'Daily mood and energy check-ins',
      },
      store: {
        tag: 'BestMe Store',
        title: 'Activewear & Home Gear',
        desc: 'Inclusive, high-comfort activewear and compact home fitness equipment engineered to pair with our workouts.',
        cta: 'Train at home',
        bullet1: 'Inclusive sizing & breathable fabrics',
        bullet2: 'Resistance bands, mats & bottles',
        bullet3: 'Synced with guided app routines',
      },
      business: {
        tag: 'BestMe for Business',
        title: 'Corporate Wellness & Teams',
        desc: 'Customized team challenges, burnout prevention, and holistic wellness benefits that boost workplace engagement.',
        cta: 'Request challenge',
        bullet1: 'Gamified team challenges',
        bullet2: 'Employee engagement analytics',
        bullet3: 'Available in 6+ languages',
      },
    },
    howEyebrow: 'Simple, guided, sustainable',
    howTitle: 'How your 4-week plan works in 3 steps',
    howSteps: [
      {
        num: '01',
        title: '2-minute smart quiz',
        desc: 'Answer a few questions so we pinpoint your somatotype, current fitness level, daily schedule, and diet preferences.',
      },
      {
        num: '02',
        title: '15-min workouts + Meal plan',
        desc: 'Receive a custom 4-week schedule with step-by-step video coaching and delicious high-protein recipes.',
      },
      {
        num: '03',
        title: 'Visible, lasting transformation',
        desc: 'In week 1 you feel more energized, in week 2 you see tone, and by week 4 you feel unstoppable.',
      },
    ],
    impactTitle: 'Designed for real people everywhere',
    impactDesc:
      'Health is never about perfection — it is about consistency, accessibility, and respecting your body.',
    impactStats: [
      { value: '150M+', label: 'Global downloads' },
      { value: '2.2M+', label: 'User ratings' },
      { value: '160', label: 'Countries App of the Day' },
      { value: '15 min', label: 'A day at home' },
    ],
    reviewsTitle: 'Trusted by over 10 million people',
    reviewsSubtitle: 'Real results from members who completed the BestMe Calisthenics Challenge.',
    reviews: [
      {
        name: 'Vera, -5 kg*',
        result: '4-week challenge',
        quote: 'When I started I could barely do a push-up. Four weeks later I feel strong, leaner, and energized every morning.',
      },
      {
        name: 'Mandy, -4 kg*',
        result: 'Lean muscle definition',
        quote: 'Short daily sessions made it impossible to skip. The meal suggestions saved me hours every week.',
      },
      {
        name: 'Juan P.',
        result: 'Strength & energy',
        quote: 'Week 1 starts super approachable and scales smoothly. Best home workout app I have ever tried.',
      },
    ],
    finalCtaTitle: 'Ready to start this Monday?',
    finalCtaSubtitle: 'Take the quick quiz and unlock your personalized Calisthenics Challenge at 50% OFF.',
    finalCtaBtn: 'Take My Assessment Now',
    footerTagline: 'Global health, calisthenics & well-being ecosystem.',
    footerCols: {
      ecosystem: 'Ecosystem',
      ecosystemLinks: ['Health Coaching', 'Mental Health', 'BestMe Store', 'For Business'],
      company: 'About BestMe',
      companyLinks: ['Our Mission', 'Certified Experts', 'Reviews', 'Wellness Blog'],
      support: 'Support & Legal',
      supportLinks: ['Help Center', 'Terms of Service', 'Privacy Policy', 'Manage Subscription'],
    },
    footerCopy: '© 2026 BestMe Well-Being. All rights reserved.',
  },
  funnel: {
    sections: {
      profile: 'My profile',
      activity: 'Activity',
      lifestyle: 'Lifestyle & habits',
      nutrition: 'Nutrition',
      almostThere: 'Almost there',
    },
    step0: {
      eyebrow: 'PERSONALIZED CHALLENGE',
      title: 'Who are we building this plan for?',
      subtitle: 'Select your profile to tailor workouts, BMI insights, and goals',
      woman: 'Woman',
      womanSub: 'Workouts focused on tone, posture, and definition',
      man: 'Man',
      manSub: 'Workouts focused on strength, lean mass, and definition',
    },
    step1: {
      title: 'CALISTHENICS CHALLENGE',
      subtitle: 'START THIS MONDAY AND BECOME UNRECOGNIZABLE BY JANUARY',
      ageLabel: 'Age:',
    },
    step2: {
      headlineWoman: 'Over 306,000 women',
      headlineMan: 'Over 284,000 men',
      subtext: 'aged {{age}} have already tried our Calisthenics Challenge',
    },
    step3: {
      title: 'Have you tried calisthenics workouts before?',
      yes: 'Yes',
      no: 'No',
    },
    step4: {
      title: 'Calisthenics is a simple and effective way to work out!',
      p1: 'It is a training method that uses your own body weight.',
      p2Woman: 'We will help you get in shape at home with zero equipment needed!',
      p2Man: 'We will help you get in shape at home with zero equipment needed!',
    },
    step5: {
      title: 'What is your main goal?',
      loseWeight: 'Lose weight',
      gainMuscle: 'Build muscle',
      stayFit: 'Maintain weight and stay fit',
    },
    step6: {
      title: 'What else do you hope to achieve with this challenge?',
      options: [
        'Lose body fat',
        'Get sculpted & defined',
        'Improve posture',
        'Reduce stress and worry',
        'Gain flexibility',
      ],
    },
    step7: {
      title: 'How would you describe your physique?',
      options: [
        { id: 'slim', label: 'Slim' },
        { id: 'average', label: 'Average' },
        { id: 'plus', label: 'Plus-size' },
        { id: 'overweight', label: 'Significantly overweight' },
      ],
    },
    step8: {
      title: 'What is your dream body?',
      subtitle: 'Visualize your target to stay motivated and accountable',
      options: [
        { id: 'slim', label: 'Slim' },
        { id: 'toned', label: 'Toned' },
        { id: 'curvy', label: 'Curvy' },
        { id: 'bulk', label: 'Bulked' },
      ],
    },
    step9: {
      title: 'Big victories start with small steps',
      p1Prefix: 'This is not just another "Monday promise". Your challenge was ',
      p1Bold: 'built to help you keep going.',
      p2: 'Every completed session brings you closer to results you can see and feel.',
      weekLabels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      barTexts: ['More energy', 'Less tension', 'Feel stronger', 'Fitter body'],
      monday: 'Monday',
    },
    step10: {
      title: 'How long ago were you in the best shape of your life?',
      options: ['Less than a year ago', '1 to 2 years ago', 'More than 3 years ago', 'Never'],
    },
    step11: {
      title: 'How does your weight typically change?',
      hardLose: 'Hard to lose weight',
      changesEasily: 'Weight changes easily',
      hardGain: 'Hard to gain weight',
    },
    step12: {
      mesomorfoTitle: 'Looks like you have a Mesomorph body type',
      mesomorfoDesc: 'Your body adapts quickly, so it needs the right structure to reach and maintain your physique goal.',
      endomorfoTitle: 'Looks like you have an Endomorph body type',
      endomorfoDesc: 'Your metabolism stores energy easily and responds best to metabolic training plus smart nutrition.',
      ectomorfoTitle: 'Looks like you have an Ectomorph body type',
      ectomorfoDesc: 'Your fast metabolism thrives on progressive strength stimuli and nutrient-dense meals.',
      p2Prefix: 'Our ',
      p2Bold: 'video-guided workouts and nutrition support',
      p2Suffix: ' will ensure you hit your target physique.',
    },
    step13: {
      title: 'How often do you work out?',
      options: ['Almost every day', 'Several times a week', 'Several times a month', 'Never'],
    },
    step14: {
      title: 'What is your focus area?',
      options: [
        { id: 'abs', label: 'Belly' },
        { id: 'glutes', label: 'Glutes' },
        { id: 'legs', label: 'Legs' },
        { id: 'chest', label: 'Chest' },
        { id: 'arms', label: 'Arms' },
        { id: 'back', label: 'Back' },
      ],
    },
    step15: {
      title: 'How often do you go for walks?',
      options: ['Almost every day', '3-4 times a week', '1 to 2 times a week', 'Once a month'],
    },
    step16: {
      title: 'How do you feel after climbing stairs?',
      options: [
        'Very out of breath',
        'I feel muscle soreness over time',
        'Okay after one flight of stairs',
        'Fine after several flights',
      ],
    },
    step17: {
      title: 'How many push-ups can you do in one round?',
      options: ['Cannot do push-ups', '1-10 push-ups', '11-20 push-ups', '20+ push-ups'],
    },
    step18: {
      title: 'How many squats can you do?',
      options: ['Cannot do squats', '11-20 squats', '21-40 squats', '40+ squats'],
    },
    step19: {
      title: 'Do you struggle with any of the following?',
      back: 'Sensitive back',
      knees: 'Sensitive knees',
    },
    step20: {
      title: 'Got it, understood!',
      p1: 'We will include exercises that strengthen your entire body and improve overall conditioning.',
      p2: 'A simple, regular workout routine leads to a healthier, happier life!',
    },
    step21: {
      title: 'What does your work schedule look like?',
      options: [
        '9 AM to 5 PM',
        'My hours are flexible',
        'Night shifts',
        'I am retired / not working at the moment',
      ],
    },
    step22: {
      title: 'How would you describe your typical day?',
      options: ['I spend most of the day sitting', 'I take active breaks', 'I am on my feet all day'],
    },
    step23: {
      title: 'How are your energy levels during the day?',
      lowWoman: 'Low, I feel tired throughout the day',
      lowMan: 'Low, I feel tired throughout the day',
      postLunch: 'Low after lunch',
      drag: 'I drag between meals',
      high: 'High and steady',
    },
    step24: {
      title: 'Put an end to the post-lunch energy slump',
      p1: 'Our workouts help boost stamina and cardiovascular conditioning.',
      p2: 'You will have more energy and strength to power through your daily activities.',
    },
    step25: {
      title: 'How much water do you drink daily?',
      subtitle: '1 average glass of water equals 8 oz (237 ml)',
      options: ['Only coffee or tea', 'About 2 glasses', '2 to 6 glasses', 'More than 6 glasses'],
    },
    step26: {
      title: 'How many hours do you usually sleep?',
      options: ['Less than 5 hours', '5-6 hours', '7-8 hours', 'More than 8 hours'],
    },
    step27: {
      title: 'When do you usually have breakfast?',
      options: ['Between 6 AM and 8 AM', 'Between 8 AM and 10 AM', 'Between 10 AM and noon', 'I usually skip breakfast'],
    },
    step28: {
      title: 'And lunch?',
      options: ['Between 10 AM and noon', 'Between noon and 2 PM', 'Between 2 PM and 4 PM', 'I usually skip lunch'],
    },
    step29: {
      title: 'What time do you usually have dinner?',
      options: ['Between 4 PM and 6 PM', 'Between 6 PM and 8 PM', 'Between 8 PM and 10 PM', 'I usually skip dinner'],
    },
    step30: {
      title: 'What type of diet do you prefer?',
      groups: {
        withMeat: {
          label: 'WITH MEAT',
          items: [
            { id: 'traditional', title: 'Traditional', desc: 'I enjoy everything' },
            { id: 'keto', title: 'Keto', desc: 'High-fat, low-carb meals' },
            { id: 'paleo', title: 'Paleo', desc: 'I avoid processed foods' },
          ],
        },
        noMeat: {
          label: 'MEAT-FREE',
          items: [
            { id: 'vegetarian', title: 'Vegetarian', desc: 'I avoid meat and fish' },
            { id: 'vegan', title: 'Vegan (plant-based)', desc: 'No animal products' },
            { id: 'vegan_keto', title: 'Vegan Keto', desc: 'Plant-based low-carb meals only' },
          ],
        },
        withFish: {
          label: 'WITH FISH',
          items: [
            { id: 'mediterranean', title: 'Mediterranean', desc: 'Plenty of veggies, grains & seafood' },
            { id: 'pescatarian', title: 'Pescatarian', desc: 'I avoid meat but enjoy fish' },
          ],
        },
        noAllergens: {
          label: 'ALLERGEN-FREE',
          items: [
            { id: 'lactose_free', title: 'Lactose-free', desc: 'I avoid dairy lactose' },
            { id: 'gluten_free', title: 'Gluten-free', desc: 'I avoid gluten-containing grains' },
          ],
        },
      },
    },
    step31: {
      title: 'Build lean muscle with a personalized meal plan',
      p1: 'Nutrition is key to building a strong, well-defined body.',
      p2: 'Get quick, delicious recipes and upgrade your eating habits to reach your goal faster.',
      phoneHeader: 'Your meals',
      breakfast: 'Breakfast',
      lunch: 'Lunch',
      dinner: 'Dinner',
    },
    step32: {
      title: 'Do you have any of these habits?',
      options: ['Emotional or boredom eating', 'Overeating', 'Late-night snacking', 'Skipping meals often'],
    },
    step33: {
      title: 'Top-tier certified specialists',
      specialists: [
        { name: 'Lisa Wishmann', role: 'Strength & Conditioning Specialist' },
        { name: 'Sydney Bueckert', role: 'Certified Personal Trainer (NASM)' },
        { name: 'Kelsey Butler', role: 'Registered Dietitian Nutritionist' },
      ],
    },
    step34: {
      title: 'What is your height?',
      placeholder: 'Height',
      rangeHintCm: 'Please enter a value between 90 cm and 243 cm',
      rangeHintFt: 'Please enter a value between 3 ft and 8 ft',
      consentText: 'I agree that BestMe processes the health data provided during onboarding to deliver services and personalize my experience.',
      privacyLink: 'Privacy Policy.',
    },
    step35: {
      title: 'What is your current weight?',
      placeholder: 'Your weight',
      rangeHintKg: 'Please enter a value between 25 kg and 300 kg',
      rangeHintLbs: 'Please enter a value between 55 lbs and 660 lbs',
    },
    step36: {
      title: 'Got it! And what is your target weight goal?',
      placeholder: 'Goal weight',
      moveLabel: 'Get moving:',
      gainLabel: 'gain {{pct}}% of your weight',
      loseLabel: 'lose {{pct}}% of your weight',
      maintainLabel: 'maintain your ideal weight with muscle tone',
      studyNote: 'According to studies, training just 5 minutes a day maintains fitness levels, boosts energy, and improves sleep quality.',
    },
    step37: {
      title: 'How old are you?',
      unit: 'years',
      noteTitle: 'We ask your age to personalize your plan',
      noteDesc: 'Older adults tend to carry more body fat than younger adults at the same BMI',
    },
    step38: {
      title: 'Analyzing your answers',
      bars: ['Your profile', 'Activity', 'Lifestyle & habits', 'Nutrition'],
      awardTitle: 'APP OF THE DAY',
      awardSub: 'in 160 countries | July 15, 2025',
    },
    step39: {
      title: 'Here is your wellness profile',
      bmiTitle: 'Body Mass Index (BMI)',
      scaleLabels: ['Underweight', 'Normal', 'Overweight', 'Obese'],
      bmiHealthyTitle: 'Healthy BMI:',
      bmiHealthyDesc: 'Great starting BMI to tone up and reach your dream physique',
      bmiImproveTitle: 'Room to optimize:',
      bmiImproveDesc: 'Your calisthenics plan will balance body composition and stamina',
      bodyTypeLabel: 'Body type',
      lifestyleLabel: 'Lifestyle',
      lifestyleValue: 'Active',
      fitnessLabel: 'Fitness level',
      fitnessValue: 'Intermediate',
      metabolismLabel: 'Metabolism',
      metabolismValue: 'Moderate, challenging to get lean',
    },
    step40: {
      title: 'Have any events in recent years impacted your muscle growth?',
      options: [
        'Work pressure',
        'Financial challenges',
        'Busy family life',
        'Covid-19 pandemic',
        'Divorce or breakup',
        'Other stressful events',
        'Slower metabolism due to aging',
      ],
    },
    step41: {
      title: 'Do you have an important event coming up?',
      subtitle: 'Having something to look forward to can be a powerful motivator',
      options: ['Vacation', 'Reunion', 'Wedding', 'Birthday', 'Holiday', 'Other', 'Sports event'],
      noneEvent: 'No upcoming event',
    },
    step42: {
      title: 'When is your event?',
      subtitle: 'We will keep this milestone in mind for your fitness goal',
      selectDateLabel: 'Select date',
      privacyNote: 'Your data will be processed in accordance with our Privacy Policy.',
    },
    step43: {
      title: 'The plan that will finally help you get in shape',
      estimatePrefix: 'We estimate you could weigh',
      untilLabel: 'by',
      untilEventTag: '{{diff}} by {{event}}',
      chartObjective: 'Goal',
      disclaimer: '* Based on data from users logging progress in the app. Following both workout and meal plans greatly impacts results. Chart is illustrative and individual results may vary.',
      quote: 'Our Calisthenics Challenge helps you achieve lasting results by combining engaging workouts with healthy nutrition.',
    },
    step44: {
      title: 'What is your main motivation to build muscle?',
      optionsWoman: [
        'Feel more confident in my body',
        'Feel healthier and more energetic',
        'Look better in my clothes',
        'Get back in shape postpartum',
        'Other',
      ],
      optionsMan: [
        'Feel more confident in my body',
        'Feel healthier and more energetic',
        'Look better in my clothes',
        'Increase strength and stamina',
        'Other',
      ],
    },
    step45: {
      title: 'Improve your well-being every single day',
      p1: 'Readiness is not required: simply start and let each session recharge your energy.',
      p2: 'We handle progression; all you need is 15 minutes of movement a day.',
      cardTitle: 'Build Your Core',
      cardDuration: '15 min',
    },
    step46: {
      title: 'How confident are you in hitting your goal by {{date}}?',
      optionsWoman: [
        'I believe I can do this!',
        'Still have doubts, but I want to try!',
        'Still feeling insecure',
      ],
      optionsMan: [
        'I believe I can do this!',
        'Still have doubts, but I want to try!',
        'Still feeling insecure',
      ],
    },
    step47: {
      title: 'What makes BestMe a trusted choice',
      awards: [
        { title: 'The Best Mobile App Awards', desc: 'voted #1 in Health & Fitness', year: '2022' },
        { title: 'Top 3 guided workout apps', desc: 'per Apple third-party app report', year: '2022' },
        { title: 'Best Fitness Apps', desc: 'by Forbes Health', year: '2025' },
      ],
    },
    step48: {
      creating: 'Creating your personalized calisthenics challenge',
      socialCountWoman: '287,465 women',
      socialCountMan: '241,890 men',
      socialSub: 'chose BestMe to build muscle and get fit',
      reviewTitle: 'I love this app',
      reviewAuthor: 'Maria',
      reviewBody: 'I really enjoy the app because it helps manage nutrition while guiding daily workouts to stay in shape.',
    },
    step49: {
      titlePrefix: 'Enter your email to receive your personalized ',
      titleHighlight: 'Calisthenics Challenge',
      titleSuffix: ' and build strength',
      placeholder: 'you@example.com',
      privacyPrefix: 'We respect your privacy and are committed to protecting your personal data under our',
      privacyLink: 'Privacy Policy.',
    },
    step50: {
      title: 'What is your name?',
      placeholder: 'Enter your name',
    },
    step51: {
      titlePrefix: '{{name}}, your 4-week Calisthenics Challenge to ',
      goalLose: 'lose weight',
      goalGain: 'build muscle',
      goalFit: 'get fit',
      titleSuffix: ' is ready!',
      chartTitle: 'Your muscle strength',
      mondayBadge: 'Monday',
      weeks: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      chartNote: 'Chart for illustrative purposes only',
      bullet1: 'Perfect for beginners',
      bullet2: 'Tailored based on your answers',
      bullet3Prefix: 'Goal: {{diff}} by {{date}}',
    },
    step52: {
      slides: [
        'Make this Monday the one that lasts',
        'You will become unrecognizable with just 15 minutes a day and healthy meals',
        'To sculpt your body and flatten your belly',
        'Week 1 – you will feel it\nWeek 2 – you will see it\nWeek 3 – you will be proud',
        "Let's get started!",
      ],
    },
    step53: {
      title: 'Scratch to reveal your special discount!',
      subtitle: 'We want you to start your journey with a great surprise',
      scratchHere: 'Scratch here',
      discountLabel: 'OFF',
      discountSub: 'on your Calisthenics Challenge',
      promoLabel: 'Promo code',
      overlayNote: 'Automatically applied at checkout',
    },
    paywall: {
      timerLabel: 'Your discount is reserved for:',
      timerMinutes: 'minutes',
      timerSeconds: 'seconds',
      topCta: 'GET MY PLAN',
      heroTitle: 'Your Calisthenics Challenge is ready!',
      nowLabel: 'Now',
      goalLabel: 'Your goal',
      muscleStrength: 'Muscle strength',
      strengthNow: 'Medium',
      strengthGoal: 'High',
      calisthenicsLevel: 'Calisthenics level',
      levelNow: 'Intermediate',
      levelGoal: 'Advanced',
      choosePlanTitle: 'Choose your plan',
      promoAppliedTitle: 'Your promo code has been applied!',
      mostPopular: 'MOST POPULAR',
      plan1Title: '1-week trial',
      plan1Sub: '4-WEEK PLAN',
      plan4Title: '4-Week Plan',
      plan12Title: '12-Week Plan',
      perDay: 'per day',
      getMyPlan: 'GET MY PLAN',
      legalSubscription: 'Unless I cancel before the end of the selected plan, I agree BestMe will automatically charge the regular rate until canceled. Cancel online via',
      manageSub: 'Manage subscription',
      includedTitle: 'What is included in your plan',
      features: [
        { title: 'Easy home workouts', desc: 'to build muscle and stay fit' },
        { title: 'Beginner-friendly exercises', desc: 'for a flatter stomach and better posture' },
        { title: '10–20 min routines', desc: 'that fit seamlessly into your schedule' },
        { title: 'Zero equipment', desc: 'everything you need is in the plan' },
        { title: 'Personalized meal plan', desc: 'with quick, tasty recipes' },
        { title: 'Expert tips & tricks', desc: 'to upgrade your lifestyle and stay consistent' },
      ],
      progressHeader: 'Your progress',
      dayLabel: 'Day',
      ratingsCount: 'ratings',
      ratingsFiveStar: '5-star reviews',
      appOfDay: 'APP OF THE DAY',
      appOfDaySub: 'in 160 countries · July 15, 2025',
      resultsTitle: 'Results that make us proud',
      resultsCards: [
        { name: 'Vera, -5 kg*', quote: 'Started at 75 kg and built up my stamina every day with the guided workouts.' },
        { name: 'Mandy, -4 kg*', quote: 'Just wrapped up today’s session and feel amazing! Short routines changed my consistency.' },
        { name: 'Nina, -3 kg*', quote: 'Four months postpartum and finally found routines that actually fit my day.' },
      ],
      faqTitle: 'Frequently Asked Questions',
      faqs: [
        { q: 'How can this plan help me build muscle?', a: 'Our plan combines progressive bodyweight routines with custom meal plans and video coaching to keep your form sharp and your consistency high.' },
        { q: 'What are the benefits of calisthenics?', a: 'Calisthenics improves functional strength, flexibility, fat loss, and full-body muscle definition with zero equipment.' },
        { q: 'What if I lose motivation quickly?', a: 'Friendly reminders, short 15-minute sessions, expert advice, and clear progress tracking keep you moving forward every week.' },
      ],
      trustedTitle: 'Trusted by over 10 million people',
      trustCards: [
        { title: 'I feel more active and stronger', author: 'Natalia P.', body: 'Gained noticeable lean tone in under a month and feel far more energized.' },
        { title: 'Great for losing fat or building muscle', author: 'Juan', body: 'Easy entry in week one and steady progression. Truly feel the difference.' },
        { title: 'Works every muscle in your body', author: 'Mayra', body: 'Awesome daily workout flow where you control your pace every day.' },
      ],
      disclaimer: '*Disclaimer: Following both the workout and nutrition plans significantly impacts results. Users typically expect 0.45–0.9 kg change per week. Individual results may vary.',
      excellent: 'Excellent',
      visibleResultsTitle: 'Get visible results in 4 weeks!',
      guaranteeTitle: '30-day money-back guarantee',
      guaranteeDesc: 'We believe our plan works for you and you will see visible results in just 4 weeks! If you followed the plan and saw no results, we will gladly refund your purchase.',
      guaranteeLinkPrefix: 'Learn more about eligibility in our',
      guaranteeLink: 'refund policy.',
      companyLegal: 'BestMe Well-Being Platform • Global support in 6 languages',
    },
    checkout: {
      title: 'Complete your checkout',
      summaryTitle: 'Order summary',
      regularPrice: 'Regular price',
      initialDiscount: 'Your 50% welcome discount',
      appliedPromo: 'Applied promo code:',
      totalToPay: 'Total due today:',
      savingsBanner: 'You save {{saved}} on your first plan (50% OFF)',
      expressCheckout: 'Express checkout',
      buyWithApplePay: 'Buy with Apple Pay',
      payWithPix: 'Pay with PIX',
      creditCard: 'Credit card',
      cardNumber: 'Card number',
      expiry: 'MM/YY',
      cvv: 'CVV',
      cardHolder: 'Cardholder name',
      payNowBtn: 'Pay Now',
      approvedMsg: 'Payment approved! Opening BestMe App...',
      securePayment: '100% secure checkout · SSL encrypted',
    },
  },
};

const ES: TranslationDict = {
  common: {
    brand: 'BestMe',
    continueBtn: 'CONTINUAR',
    nextStepBtn: 'SIGUIENTE PASO',
    skipStepBtn: 'OMITIR ESTE PASO',
    back: 'Volver',
    login: 'Iniciar sesión',
    help: 'Ayuda',
    language: 'Idioma',
    homeLink: 'Inicio',
    selectAllApply: 'Elige todas las que apliquen',
    termsPrefix: 'Al elegir tu edad y continuar, aceptas nuestros',
    termsLink: 'Términos de Servicio',
    privacyLink: 'Política de Privacidad',
    termsSuffix: 'Léelo antes de continuar',
    mobileOnlyTitle: 'Acceso Exclusivo desde Móvil',
    mobileOnlyDesc:
      'El reto interactivo de calistenia y la app BestMe están optimizados para tu smartphone.',
    mobileOnlyHow: '📱 Cómo acceder ahora:',
    mobileOnlyHint:
      'Abre este enlace en el navegador de tu móvil o activa el Modo Móvil (F12 → Dispositivos) en tu ordenador.',
    mobileOnlyBackHome: 'Volver a la Página Principal',
    asSeenIn: 'Visto en',
    noneOption: 'Ninguna de las opciones',
  },
  home: {
    navApps: 'Aplicaciones',
    navCalisthenics: 'Calistenia',
    navStore: 'BestMe Store',
    navBusiness: 'Empresas',
    navReviews: 'Reseñas',
    navStartQuiz: 'Empezar Reto',
    heroBadge: 'Ecosistema global de bienestar · 150M+ descargas',
    heroTitle: 'Bienestar diseñado para la vida real, no para extremos.',
    heroSubtitle:
      'Entrenamientos guiados de calistenia sin equipo, nutrición personalizada, salud mental y herramientas diarias en solo 15 minutos al día.',
    heroCta: 'Crear Mi Plan Personalizado',
    heroSecondaryCta: 'Explorar el Ecosistema',
    heroRating: '4.8 ★ en App Store · App del Día en 160 países',
    quickTitle: 'Comienza tu Reto de Calistenia de 4 Semanas',
    quickSubtitle: 'Elige abajo para personalizar tu plan según género, edad y objetivos.',
    quickWomanTitle: 'Para Mujeres',
    quickWomanSub: 'Tonificación, fuerza funcional y quema de grasa en casa',
    quickManTitle: 'Para Hombres',
    quickManSub: 'Músculo magro, definición abdominal y resistencia sin aparatos',
    quickStartTag: 'Iniciar cuestionario →',
    worldEyebrow: 'Conoce el Mundo BestMe',
    worldTitle: 'Un ecosistema integral para cuerpo y mente',
    worldSubtitle:
      'Todo lo que necesitas para crear hábitos duraderos: rutinas en video, planes de comidas, calma mental y accesorios.',
    worldCards: {
      coaching: {
        tag: 'BestMe: Health Coaching',
        title: 'Calistenia, Pilates y Nutrición',
        desc: 'Más de 4.000 entrenamientos sin equipo, recetas rápidas adaptadas a tu dieta y guía diaria.',
        cta: 'Armar mi plan',
        bullet1: 'Rutinas en casa de 10 a 20 min',
        bullet2: 'Planes para más de 10 tipos de dieta',
        bullet3: 'Especialistas certificados',
      },
      mental: {
        tag: 'BestMe: Mental Health',
        title: 'Sueño, Enfoque y Anti-Estrés',
        desc: 'Meditaciones guiadas, respiración y herramientas para reducir la ansiedad y mejorar tu energía.',
        cta: 'Hacer evaluación',
        bullet1: 'Sesiones de 5 min contra el estrés',
        bullet2: 'Rutinas nocturnas de descanso',
        bullet3: 'Registro diario de energía',
      },
      store: {
        tag: 'BestMe Store',
        title: 'Ropa Deportiva y Equipo',
        desc: 'Prendas cómodas para todo tipo de cuerpos y accesorios compactos para entrenar en casa.',
        cta: 'Entrenar en casa',
        bullet1: 'Tallas inclusivas y telas transpirables',
        bullet2: 'Bandas, esterillas y botellas',
        bullet3: 'Sincronizado con la app',
      },
      business: {
        tag: 'BestMe para Empresas',
        title: 'Bienestar Corporativo',
        desc: 'Retos saludables, prevención del estrés laboral y programas de actividad física para equipos.',
        cta: 'Solicitar reto',
        bullet1: 'Retos gamificados en equipo',
        bullet2: 'Métricas de participación',
        bullet3: 'Disponible en 6+ idiomas',
      },
    },
    howEyebrow: 'Simple, guiado y sostenible',
    howTitle: 'Cómo funciona tu plan en 3 pasos',
    howSteps: [
      { num: '01', title: 'Diagnóstico en 2 min', desc: 'Identificamos tu biotipo, nivel físico, rutina diaria y preferencias alimentarias.' },
      { num: '02', title: '15 min diarios + Menú', desc: 'Recibe tu programa de 4 semanas con ejercicios en video y recetas fáciles.' },
      { num: '03', title: 'Resultados reales', desc: 'En la semana 1 sientes más energía, en la 2 ves cambios y en la 4 celebras tu avance.' },
    ],
    impactTitle: 'Hecho para personas reales en todo el mundo',
    impactDesc: 'La salud no se trata de perfección, sino de constancia y respeto por tu propio cuerpo.',
    impactStats: [
      { value: '150M+', label: 'Descargas globales' },
      { value: '2.2M+', label: 'Valoraciones' },
      { value: '160', label: 'Países App del Día' },
      { value: '15 min', label: 'Al día en casa' },
    ],
    reviewsTitle: 'Confiado por más de 10 millones de personas',
    reviewsSubtitle: 'Historias reales del Reto de Calistenia BestMe.',
    reviews: [
      { name: 'Vera, -5 kg*', result: 'Reto de 4 semanas', quote: 'Empecé sin poder hacer flexiones. En 4 semanas gané fuerza y hoy entreno feliz en casa.' },
      { name: 'Mandy, -4 kg*', result: 'Más definición', quote: 'Sesiones cortas y efectivas. El menú con recetas rápidas me cambió la rutina.' },
      { name: 'Juan P.', result: 'Fuerza y energía', quote: 'La progresión es ideal para definir el cuerpo sin necesidad de gimnasio.' },
    ],
    finalCtaTitle: '¿Listo(a) para empezar este lunes?',
    finalCtaSubtitle: 'Completa el cuestionario y obtén tu Reto de Calistenia con 50% de descuento.',
    finalCtaBtn: 'Hacer Mi Evaluación Ahora',
    footerTagline: 'Ecosistema global de salud, calistenia y bienestar.',
    footerCols: {
      ecosystem: 'Ecosistema',
      ecosystemLinks: ['Health Coaching', 'Mental Health', 'BestMe Store', 'Empresas'],
      company: 'Sobre BestMe',
      companyLinks: ['Nuestra Misión', 'Especialistas', 'Reseñas', 'Blog'],
      support: 'Soporte y Legal',
      supportLinks: ['Centro de Ayuda', 'Términos de Servicio', 'Privacidad', 'Gestionar Suscripción'],
    },
    footerCopy: '© 2026 BestMe Well-Being. Todos los derechos reservados.',
  },
  funnel: {
    sections: { profile: 'Mi perfil', activity: 'Actividad', lifestyle: 'Estilo de vida', nutrition: 'Nutrición', almostThere: 'Casi listo' },
    step0: { eyebrow: 'RETO PERSONALIZADO', title: '¿Para quién creamos este plan?', subtitle: 'Elige tu perfil para adaptar rutinas, IMC y metas', woman: 'Mujer', womanSub: 'Tonificación, postura y definición', man: 'Hombre', manSub: 'Fuerza, masa magra y definición' },
    step1: { title: 'RETO DE CALISTENIA', subtitle: 'EMPIEZA ESTE LUNES Y VUÉLVETE IRRECONOCIBLE ANTES DE ENERO', ageLabel: 'Edad:' },
    step2: { headlineWoman: 'Más de 306.000 mujeres', headlineMan: 'Más de 284.000 hombres', subtext: 'de {{age}} años ya probaron nuestro Reto de calistenia' },
    step3: { title: '¿Has probado entrenamientos de calistenia?', yes: 'Sí', no: 'No' },
    step4: { title: '¡La calistenia es una forma simple y eficaz de entrenar!', p1: 'Es un entrenamiento que usa el peso de tu propio cuerpo.', p2Woman: '¡Te ayudaremos a ponerte en forma en casa sin ningún equipo!', p2Man: '¡Te ayudaremos a ponerte en forma en casa sin ningún equipo!' },
    step5: { title: '¿Cuál es tu objetivo principal?', loseWeight: 'Perder peso', gainMuscle: 'Ganar músculo', stayFit: 'Mantener el peso y estar en forma' },
    step6: { title: '¿Qué más esperas lograr con este reto?', options: ['Perder grasa', 'Esculpido y definido', 'Mejorar la postura', 'Reducir estrés y preocupación', 'Ganar flexibilidad'] },
    step7: { title: '¿Cómo describirías tu físico?', options: [{ id: 'slim', label: 'Delgado' }, { id: 'average', label: 'Medio' }, { id: 'plus', label: 'Talla grande' }, { id: 'overweight', label: 'Con sobrepeso significativo' }] },
    step8: { title: '¿Cuál es tu cuerpo soñado?', subtitle: 'Visualiza tu meta para mantener la motivación', options: [{ id: 'slim', label: 'Delgado' }, { id: 'toned', label: 'Tonificado' }, { id: 'curvy', label: 'Con curvas' }, { id: 'bulk', label: 'Volumen' }] },
    step9: { title: 'Las grandes victorias comienzan con pequeños pasos', p1Prefix: 'Esta no es otra "promesa de lunes". Tu reto fue ', p1Bold: 'creado para ayudarte a continuar.', p2: 'Cada sesión completada te acerca a resultados visibles.', weekLabels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'], barTexts: ['Más energía', 'Menos tensión', 'Más fuerza', 'Cuerpo en forma'], monday: 'Lunes' },
    step10: { title: '¿Hace cuánto tiempo estuviste en tu mejor forma?', options: ['Hace menos de un año', 'Hace 1 o 2 años', 'Hace más de 3 años', 'Nunca'] },
    step11: { title: '¿Cómo cambia tu peso normalmente?', hardLose: 'Difícil bajar de peso', changesEasily: 'Mi peso cambia fácilmente', hardGain: 'Dificultad para subir de peso' },
    step12: { mesomorfoTitle: 'Parece que tienes el biotipo Mesomorfo', mesomorfoDesc: 'Tu cuerpo responde rápido, por eso necesita el enfoque adecuado para lograr y mantener tu meta.', endomorfoTitle: 'Parece que tienes el biotipo Endomorfo', endomorfoDesc: 'Tu metabolismo responde muy bien a rutinas metabólicas y nutrición equilibrada.', ectomorfoTitle: 'Parece que tienes el biotipo Ectomorfo', ectomorfoDesc: 'Tu metabolismo rápido necesita estímulos de fuerza progresiva y buena nutrición.', p2Prefix: 'Nuestros ', p2Bold: 'entrenamientos en video y apoyo nutricional', p2Suffix: ' garantizarán tu resultado.' },
    step13: { title: '¿Cuántas veces entrenas?', options: ['Casi todos los días', 'Varias veces por semana', 'Varias veces al mes', 'Nunca'] },
    step14: { title: '¿Cuál es tu zona de enfoque?', options: [{ id: 'abs', label: 'Abdomen' }, { id: 'glutes', label: 'Glúteos' }, { id: 'legs', label: 'Piernas' }, { id: 'chest', label: 'Pecho' }, { id: 'arms', label: 'Brazos' }, { id: 'back', label: 'Espalda' }] },
    step15: { title: '¿Con qué frecuencia sales a caminar?', options: ['Casi todos los días', '3-4 veces por semana', '1 a 2 veces por semana', 'Una vez al mes'] },
    step16: { title: '¿Cómo te sientes al subir escaleras?', options: ['Muy sin aliento', 'Siento dolor muscular con el tiempo', 'Bien tras un tramo', 'Bien tras varios tramos'] },
    step17: { title: '¿Cuántas flexiones puedes hacer seguidas?', options: ['No puedo hacer flexiones', '1-10 flexiones', '11-20 flexiones', '20+ flexiones'] },
    step18: { title: '¿Cuántas sentadillas puedes hacer?', options: ['No puedo hacer sentadillas', '11-20 sentadillas', '21-40 sentadillas', '40+ sentadillas'] },
    step19: { title: '¿Tienes molestias en alguna de estas zonas?', back: 'Espalda sensible', knees: 'Rodillas sensibles' },
    step20: { title: '¡Perfecto, entendido!', p1: 'Incluiremos ejercicios que fortalecen todo tu cuerpo y mejoran tu condición física general.', p2: '¡Una rutina simple y constante significa una vida más sana y feliz!' },
    step21: { title: '¿Cómo es tu horario de trabajo?', options: ['De 9h a 17h', 'Horario flexible', 'Turnos nocturnos', 'Jubilado / no trabajo actualmente'] },
    step22: { title: '¿Cómo describirías tu día típico?', options: ['Paso la mayor parte sentado', 'Hago pausas activas', 'Estoy de pie todo el día'] },
    step23: { title: '¿Cómo son tus niveles de energía durante el día?', lowWoman: 'Bajos, me siento cansada', lowMan: 'Bajos, me siento cansado', postLunch: 'Bajón después de comer', drag: 'Me arrastro entre comidas', high: 'Altos y estables' },
    step24: { title: 'Acaba con el bajón después de comer', p1: 'Nuestros entrenamientos mejoran tu resistencia y vitalidad.', p2: 'Tendrás más energía y fuerza todo el día.' },
    step25: { title: '¿Cuánta agua bebes al día?', subtitle: '1 vaso medio equivale a 237 ml', options: ['Solo café o té', 'Cerca de 2 vasos', '2 a 6 vasos', 'Más de 6 vasos'] },
    step26: { title: '¿Cuántas horas sueles dormir?', options: ['Menos de 5 horas', '5-6 horas', '7-8 horas', 'Más de 8 horas'] },
    step27: { title: '¿Cuándo sueles desayunar?', options: ['Entre 6h y 8h', 'Entre 8h y 10h', 'Entre 10h y 12h', 'Suelo saltarme el desayuno'] },
    step28: { title: '¿Y el almuerzo?', options: ['Entre 10h y 12h', 'Entre 12h y 14h', 'Entre 14h y 16h', 'Suelo saltarme el almuerzo'] },
    step29: { title: '¿A qué hora sueles cenar?', options: ['Entre 16h y 18h', 'Entre 18h y 20h', 'Entre 20h y 22h', 'Suelo saltarme la cena'] },
    step30: {
      title: '¿Qué tipo de dieta prefieres?',
      groups: {
        withMeat: { label: 'CON CARNE', items: [{ id: 'traditional', title: 'Tradicional', desc: 'Me gusta de todo' }, { id: 'keto', title: 'Cetogénica', desc: 'Alta en grasas y baja en carbohidratos' }, { id: 'paleo', title: 'Paleo', desc: 'Sin ultraprocesados' }] },
        noMeat: { label: 'SIN CARNE', items: [{ id: 'vegetarian', title: 'Vegetariana', desc: 'Evito carne y pescado' }, { id: 'vegan', title: 'Vegana', desc: 'Sin productos animales' }, { id: 'vegan_keto', title: 'Keto Vegana', desc: 'Solo plantas bajas en carbohidratos' }] },
        withFish: { label: 'CON PESCADO', items: [{ id: 'mediterranean', title: 'Mediterránea', desc: 'Vegetales, granos y mariscos' }, { id: 'pescatarian', title: 'Pescetariana', desc: 'Evito carne pero como pescado' }] },
        noAllergens: { label: 'SIN ALÉRGENOS', items: [{ id: 'lactose_free', title: 'Sin lactosa', desc: 'Sin lácteos con lactosa' }, { id: 'gluten_free', title: 'Sin gluten', desc: 'Evito granos con gluten' }] },
      },
    },
    step31: { title: 'Gana masa muscular con un plan de comidas personalizado', p1: 'La nutrición es clave para un cuerpo fuerte y definido.', p2: 'Recibe recetas rápidas y sabrosas para alcanzar tu meta antes.', phoneHeader: 'Tus comidas', breakfast: 'Desayuno', lunch: 'Almuerzo', dinner: 'Cena' },
    step32: { title: '¿Tienes alguno de estos hábitos?', options: ['Comer por emoción o aburrimiento', 'Comer en exceso', 'Snacks nocturnos', 'Saltarse comidas seguido'] },
    step33: { title: 'Especialistas certificados de alto nivel', specialists: [{ name: 'Lisa Wishmann', role: 'Especialista en Fuerza y Acondicionamiento' }, { name: 'Sydney Bueckert', role: 'Entrenadora certificada (NASM)' }, { name: 'Kelsey Butler', role: 'Nutricionista Dietista Registrada' }] },
    step34: { title: '¿Cuál es tu altura?', placeholder: 'Altura', rangeHintCm: 'Introduce un valor entre 90 cm y 243 cm', rangeHintFt: 'Introduce un valor entre 3 ft y 8 ft', consentText: 'Acepto que BestMe procese mis datos de salud para ofrecer y personalizar mis servicios.', privacyLink: 'Política de Privacidad.' },
    step35: { title: '¿Cuál es tu peso actual?', placeholder: 'Tu peso', rangeHintKg: 'Introduce un valor entre 25 kg y 300 kg', rangeHintLbs: 'Introduce un valor entre 55 lbs y 660 lbs' },
    step36: { title: '¡Entendido! ¿Cuál es tu peso objetivo ideal?', placeholder: 'Peso ideal', moveLabel: 'Muévete:', gainLabel: 'gana {{pct}}% de tu peso', loseLabel: 'pierde {{pct}}% de tu peso', maintainLabel: 'mantén tu peso ideal con definición', studyNote: 'Según estudios, entrenar solo 5 minutos al día mejora la condición física, energía y calidad del sueño.' },
    step37: { title: '¿Cuál es tu edad?', unit: 'años', noteTitle: 'Preguntamos tu edad para personalizar tu plan', noteDesc: 'Las personas mayores tienden a tener más grasa corporal con el mismo IMC' },
    step38: { title: 'Analizando tus respuestas', bars: ['Tu perfil', 'Actividad', 'Estilo de vida', 'Nutrición'], awardTitle: 'APP DEL DÍA', awardSub: 'en 160 países | 15 de julio de 2025' },
    step39: { title: 'Aquí está tu perfil de bienestar', bmiTitle: 'Índice de Masa Corporal (IMC)', scaleLabels: ['Bajo peso', 'Normal', 'Sobrepeso', 'Obesidad'], bmiHealthyTitle: 'IMC saludable:', bmiHealthyDesc: 'Buen IMC inicial para tonificar y lograr tu cuerpo ideal', bmiImproveTitle: 'Potencial de mejora:', bmiImproveDesc: 'Tu plan de calistenia equilibrará tu composición corporal', bodyTypeLabel: 'Tipo de cuerpo', lifestyleLabel: 'Estilo de vida', lifestyleValue: 'Activo', fitnessLabel: 'Nivel fitness', fitnessValue: 'Intermedio', metabolismLabel: 'Metabolismo', metabolismValue: 'Moderado' },
    step40: { title: '¿Hubo algún evento reciente que afectara tu progreso?', options: ['Presión laboral', 'Retos financieros', 'Vida familiar agitada', 'Pandemia Covid-19', 'Divorcio o ruptura', 'Otros eventos estresantes', 'Metabolismo más lento por la edad'] },
    step41: { title: '¿Tienes algún evento importante pronto?', subtitle: 'Tener una fecha motivadora te ayuda a alcanzar tu meta', options: ['Vacaciones', 'Reunión', 'Boda', 'Cumpleaños', 'Feriado', 'Otros', 'Evento deportivo'], noneEvent: 'Ningún evento pronto' },
    step42: { title: '¿Cuándo es tu evento?', subtitle: 'Tendremos esta fecha en cuenta para tu objetivo fitness', selectDateLabel: 'Seleccionar fecha', privacyNote: 'Tus datos serán tratados según nuestra Política de Privacidad.' },
    step43: { title: 'El plan que por fin te ayudará a ponerte en forma', estimatePrefix: 'Estimamos que podrás pesar', untilLabel: 'para el', untilEventTag: '{{diff}} hasta {{event}}', chartObjective: 'Objetivo', disclaimer: '* Basado en usuarios que registran su progreso. Seguir entrenamiento y nutrición tiene gran impacto. Gráfico ilustrativo.', quote: 'Nuestro Reto de calistenia combina entrenamientos dinámicos con nutrición sana para resultados duraderos.' },
    step44: { title: '¿Cuál es tu motivación principal?', optionsWoman: ['Sentirme más segura en mi cuerpo', 'Sentirme más sana y energética', 'Verme mejor en mi ropa', 'Recuperar forma tras el parto', 'Otros'], optionsMan: ['Sentirme más seguro en mi cuerpo', 'Sentirme más sano y energético', 'Verme mejor en mi ropa', 'Ganar fuerza y resistencia', 'Otros'] },
    step45: { title: 'Mejora tu bienestar cada día', p1: 'Solo empieza y deja que cada sesión renueve tu energía.', p2: 'Nosotros cuidamos la progresión; solo necesitas 15 minutos al día.', cardTitle: 'Build Your Core', cardDuration: '15 min' },
    step46: { title: '¿Qué tan seguro estás de lograr tu meta para el {{date}}?', optionsWoman: ['¡Creo que puedo lograrlo!', 'Aún tengo dudas, ¡pero quiero intentarlo!', 'Todavía me siento insegura'], optionsMan: ['¡Creo que puedo lograrlo!', 'Aún tengo dudas, ¡pero quiero intentarlo!', 'Todavía me siento inseguro'] },
    step47: { title: 'Por qué BestMe es una elección confiable', awards: [{ title: 'The Best Mobile App Awards', desc: 'elegida #1 en Salud & Fitness', year: '2022' }, { title: 'Top 3 apps de entreno guiado', desc: 'según informe de Apple', year: '2022' }, { title: 'Mejores apps de fitness', desc: 'por Forbes Health', year: '2025' }] },
    step48: { creating: 'Creando tu reto de calistenia personalizado', socialCountWoman: '287.465 mujeres', socialCountMan: '241.890 hombres', socialSub: 'eligieron BestMe para ganar músculo y ponerse en forma', reviewTitle: 'Me encanta la app', reviewAuthor: 'María', reviewBody: 'Me ayuda a controlar mi alimentación y entrenar cada día para mantenerme en forma.' },
    step49: { titlePrefix: 'Ingresa tu correo para recibir tu ', titleHighlight: 'Reto de calistenia', titleSuffix: ' personalizado', placeholder: 'tu@correo.com', privacyPrefix: 'Respetamos tu privacidad y protegemos tus datos según nuestra', privacyLink: 'Política de Privacidad.' },
    step50: { title: '¿Cuál es tu nombre?', placeholder: 'Tu nombre' },
    step51: { titlePrefix: '{{name}}, tu Reto de calistenia de 4 semanas para ', goalLose: 'perder peso', goalGain: 'ganar músculo', goalFit: 'ponerte en forma', titleSuffix: ' ¡está listo!', chartTitle: 'Tu fuerza muscular', mondayBadge: 'Lunes', weeks: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'], chartNote: 'Gráfico con fines ilustrativos', bullet1: 'Perfecto para principiantes', bullet2: 'Adaptado a tus respuestas', bullet3Prefix: 'Objetivo: {{diff}} para {{date}}' },
    step52: { slides: ['Haz que este lunes sea el definitivo', 'Serás irreconocible con solo 15 minutos al día y comidas sanas', 'Para definir tu cuerpo y aplanar el abdomen', 'Semana 1 – lo sentirás\nSemana 2 – lo verás\nSemana 3 – te sentirás orgulloso', '¡Empecemos!'] },
    step53: { title: '¡Raspa para revelar tu descuento especial!', subtitle: 'Queremos que empieces tu viaje con una gran sorpresa', scratchHere: 'Raspa aquí', discountLabel: 'de descuento', discountSub: 'en tu Reto de calistenia', promoLabel: 'Código promocional', overlayNote: 'Aplicado automáticamente en el pago' },
    paywall: {
      timerLabel: 'Tu descuento está reservado por:', timerMinutes: 'minutos', timerSeconds: 'segundos', topCta: 'OBTENER MI PLAN',
      heroTitle: '¡Tu Reto de calistenia está listo!', nowLabel: 'Ahora', goalLabel: 'Tu objetivo',
      muscleStrength: 'Fuerza muscular', strengthNow: 'Media', strengthGoal: 'Alta', calisthenicsLevel: 'Nivel de calistenia', levelNow: 'Intermedio', levelGoal: 'Avanzado',
      choosePlanTitle: 'Elige tu plan', promoAppliedTitle: '¡Tu código promocional fue aplicado!', mostPopular: 'MÁS POPULAR',
      plan1Title: 'Prueba de 1 semana', plan1Sub: 'PLAN DE 4 SEMANAS', plan4Title: 'Plan de 4 Semanas', plan12Title: 'Plan de 12 Semanas', perDay: 'al día', getMyPlan: 'OBTENER MI PLAN',
      legalSubscription: 'Si no cancelo antes del fin del plan seleccionado, acepto que BestMe cobrará el monto regular automáticamente hasta cancelar desde', manageSub: 'Gestionar suscripción',
      includedTitle: 'Qué incluye tu plan',
      features: [
        { title: 'Entrenos fáciles en casa', desc: 'para ganar músculo y estar en forma' },
        { title: 'Ejercicios para principiantes', desc: 'abdomen plano y mejor postura' },
        { title: 'Rutinas de 10-20 min', desc: 'adaptadas a tu agenda' },
        { title: 'Sin equipo', desc: 'todo lo que necesitas está en el plan' },
        { title: 'Plan de comidas propio', desc: 'con recetas rápidas y ricas' },
        { title: 'Consejos de expertos', desc: 'para mejorar tu estilo de vida' },
      ],
      progressHeader: 'Tu progreso', dayLabel: 'Día', ratingsCount: 'valoraciones', ratingsFiveStar: 'Reseñas de 5 estrellas',
      appOfDay: 'APP DEL DÍA', appOfDaySub: 'en 160 países · 15 julio 2025',
      resultsTitle: 'Resultados que nos enorgullecen',
      resultsCards: [
        { name: 'Vera, -5 kg*', quote: 'Empecé con 75 kg y fui subiendo el ritmo cada día con la app.' },
        { name: 'Mandy, -4 kg*', quote: '¡Acabo de terminar mi entrenamiento y me siento genial!' },
        { name: 'Nina, -3 kg*', quote: '4 meses posparto y encontré rutinas fáciles de encajar.' },
      ],
      faqTitle: 'Preguntas Frecuentes',
      faqs: [
        { q: '¿Cómo me ayuda este plan a ganar músculo?', a: 'Combina entrenos progresivos en video con nutrición personalizada.' },
        { q: '¿Beneficios de la calistenia?', a: 'Ganas fuerza, flexibilidad, quemas grasa y defines tu cuerpo sin aparatos.' },
        { q: '¿Y si pierdo motivación?', a: 'Recordatorios, sesiones de 15 min y guía experta te mantienen constante.' },
      ],
      trustedTitle: 'Confiado por más de 10 millones de personas',
      trustCards: [
        { title: 'Me siento más activa y fuerte', author: 'Natalia P.', body: 'Gané tono muscular en menos de un mes.' },
        { title: 'Ideal para bajar grasa o ganar músculo', author: 'Juan', body: 'Gran progresión semana a semana.' },
        { title: 'Trabaja todo tu cuerpo', author: 'Mayra', body: 'Rutina increíble adaptada a tu ritmo.' },
      ],
      disclaimer: '*Aviso: Seguir ejercicio y dieta impacta los resultados. Resultados individuales pueden variar.', excellent: 'Excelente',
      visibleResultsTitle: '¡Obtén resultados visibles en 4 semanas!',
      guaranteeTitle: 'garantía de reembolso de 30 días', guaranteeDesc: 'Si sigues el plan durante 4 semanas sin resultados, devolvemos tu dinero.',
      guaranteeLinkPrefix: 'Más información en nuestra', guaranteeLink: 'política de reembolso.', companyLegal: 'BestMe Well-Being Platform • Soporte en 6 idiomas',
    },
    checkout: {
      title: 'Completa tu compra', summaryTitle: 'Resumen del pedido', regularPrice: 'Precio regular', initialDiscount: 'Tu descuento del 50%',
      appliedPromo: 'Código aplicado:', totalToPay: 'Total a pagar:', savingsBanner: 'Ahorras {{saved}} (50% DE DESCUENTO)',
      expressCheckout: 'Pago rápido', buyWithApplePay: 'Pagar con Apple Pay', payWithPix: 'Pagar con PIX',
      creditCard: 'Tarjeta de crédito', cardNumber: 'Número de tarjeta', expiry: 'MM/AA', cvv: 'CVV', cardHolder: 'Titular',
      payNowBtn: 'Pagar Ahora', approvedMsg: '¡Pago aprobado! Abriendo App BestMe...', securePayment: 'Pago 100% seguro · Cifrado SSL',
    },
  },
};

const FR: TranslationDict = {
  common: {
    brand: 'BestMe', continueBtn: 'CONTINUER', nextStepBtn: 'ÉTAPE SUIVANTE', skipStepBtn: 'PASSER CETTE ÉTAPE',
    back: 'Retour', login: 'Connexion', help: 'Aide', language: 'Langue', homeLink: 'Accueil',
    selectAllApply: 'Sélectionnez tout ce qui s’applique',
    termsPrefix: 'En choisissant votre âge et en continuant, vous acceptez nos', termsLink: "Conditions d'utilisation", privacyLink: 'Politique de confidentialité', termsSuffix: 'Lire avant de continuer',
    mobileOnlyTitle: 'Accès Exclusif sur Mobile', mobileOnlyDesc: 'Le défi de callisthénie et l’application BestMe sont optimisés pour votre smartphone.',
    mobileOnlyHow: '📱 Comment accéder :', mobileOnlyHint: 'Ouvrez ce lien sur votre téléphone ou activez le Mode Mobile (F12) sur votre navigateur.', mobileOnlyBackHome: 'Retour à l’accueil',
    asSeenIn: 'Vu dans', noneOption: 'Aucune de ces options',
  },
  home: {
    navApps: 'Applications', navCalisthenics: 'Callisthénie', navStore: 'BestMe Store', navBusiness: 'Entreprises', navReviews: 'Avis', navStartQuiz: 'Démarrer le défi',
    heroBadge: 'Écosystème mondial bien-être · 150M+ téléchargements',
    heroTitle: 'Le bien-être conçu pour la vraie vie, sans extrêmes.',
    heroSubtitle: 'Entraînements de callisthénie sans matériel, nutrition sur mesure et soutien mental en seulement 15 minutes par jour.',
    heroCta: 'Créer Mon Plan Personnalisé', heroSecondaryCta: 'Découvrir l’écosystème', heroRating: '4.8 ★ App Store · App du Jour dans 160 pays',
    quickTitle: 'Commencez votre Défi Callisthénie de 4 Semaines',
    quickSubtitle: 'Choisissez ci-dessous pour personnaliser votre programme selon votre profil.',
    quickWomanTitle: 'Pour Femmes', quickWomanSub: 'Tonification, posture et perte de gras à la maison',
    quickManTitle: 'Pour Hommes', quickManSub: 'Masse sèche, force et endurance sans équipement',
    quickStartTag: 'Démarrer le quiz →',
    worldEyebrow: 'Découvrez le Monde BestMe', worldTitle: 'Un écosystème complet pour le corps et l’esprit',
    worldSubtitle: 'Séances vidéo guidées, plans repas personnalisés, gestion du stress et accessoires fitness.',
    worldCards: {
      coaching: { tag: 'BestMe: Health Coaching', title: 'Callisthénie, Pilates & Nutrition', desc: 'Plus de 4 000 entraînements sans matériel et recettes rapides adaptées à votre régime.', cta: 'Créer mon plan', bullet1: 'Séances maison de 10-20 min', bullet2: '10+ régimes alimentaires', bullet3: 'Coachs certifiés' },
      mental: { tag: 'BestMe: Mental Health', title: 'Sommeil, Calme & Énergie', desc: 'Méditations guidées et respiration pour réduire le stress au quotidien.', cta: 'Faire le bilan', bullet1: 'Sessions anti-stress de 5 min', bullet2: 'Routines du soir apaisantes', bullet3: 'Suivi quotidien de l’énergie' },
      store: { tag: 'BestMe Store', title: 'Tenues & Accessoires', desc: 'Vêtements inclusifs et équipements compacts pensés pour s’entraîner chez soi.', cta: 'S’entraîner chez soi', bullet1: 'Coupes inclusives', bullet2: 'Élastiques, tapis & gourdes', bullet3: 'Synchronisé avec l’app' },
      business: { tag: 'BestMe Entreprises', title: 'Bien-être en Entreprise', desc: 'Défis bien-être et prévention du burn-out pour motiver vos équipes.', cta: 'Demander un défi', bullet1: 'Défis en équipe', bullet2: 'Suivi d’engagement', bullet3: 'Multilingue (6+ langues)' },
    },
    howEyebrow: 'Simple, guidé, durable', howTitle: 'Votre programme en 3 étapes',
    howSteps: [
      { num: '01', title: 'Bilan en 2 min', desc: 'Nous identifions votre morphotype, niveau et habitudes alimentaires.' },
      { num: '02', title: '15 min/jour + Nutrition', desc: 'Recevez votre plan vidéo de 4 semaines et des recettes savoureuses.' },
      { num: '03', title: 'Résultats durables', desc: 'Semaine 1 vous le sentez, semaine 2 vous le voyez, semaine 4 vous rayonnez.' },
    ],
    impactTitle: 'Conçu pour de vraies personnes partout', impactDesc: 'La santé repose sur la régularité et le respect de votre corps.',
    impactStats: [{ value: '150M+', label: 'Téléchargements' }, { value: '2.2M+', label: 'Avis utilisateurs' }, { value: '160', label: 'Pays App du Jour' }, { value: '15 min', label: 'Par jour' }],
    reviewsTitle: 'Approuvé par plus de 10 millions de membres', reviewsSubtitle: 'Témoignages réels du Défi Callisthénie BestMe.',
    reviews: [
      { name: 'Vera, -5 kg*', result: 'Défi 4 semaines', quote: 'En 4 semaines j’ai gagné en force et en confiance depuis mon salon.' },
      { name: 'Mandy, -4 kg*', result: 'Silhouette tonifiée', quote: 'Les séances courtes et les recettes rapides ont tout changé.' },
      { name: 'Juan P.', result: 'Force & énergie', quote: 'Progression parfaite pour se muscler sans salle de sport.' },
    ],
    finalCtaTitle: 'Prêt(e) à commencer ce lundi ?', finalCtaSubtitle: 'Répondez au quiz et profitez de 50% de réduction sur votre plan.', finalCtaBtn: 'Faire Mon Bilan Maintenant',
    footerTagline: 'Écosystème mondial de santé, callisthénie et bien-être.',
    footerCols: {
      ecosystem: 'Écosystème', ecosystemLinks: ['Health Coaching', 'Mental Health', 'BestMe Store', 'Entreprises'],
      company: 'À propos', companyLinks: ['Mission', 'Experts', 'Avis', 'Blog'],
      support: 'Support & Légal', supportLinks: ['Aide', 'Conditions', 'Confidentialité', 'Gérer l’abonnement'],
    },
    footerCopy: '© 2026 BestMe Well-Being. Tous droits réservés.',
  },
  funnel: {
    sections: { profile: 'Mon profil', activity: 'Activité', lifestyle: 'Mode de vie', nutrition: 'Nutrition', almostThere: 'Presque fini' },
    step0: { eyebrow: 'DÉFI PERSONNALISÉ', title: 'Pour qui créons-nous ce programme ?', subtitle: 'Sélectionnez votre profil pour adapter séances, IMC et objectifs', woman: 'Femme', womanSub: 'Tonus, posture et silhouette', man: 'Homme', manSub: 'Force, masse sèche et définition' },
    step1: { title: 'DÉFI CALLISTHÉNIE', subtitle: 'COMMENCEZ CE LUNDI ET SOYEZ MÉCONNAISSABLE D’ICI JANVIER', ageLabel: 'Âge :' },
    step2: { headlineWoman: 'Plus de 306 000 femmes', headlineMan: 'Plus de 284 000 hommes', subtext: 'de {{age}} ans ont déjà testé notre Défi Callisthénie' },
    step3: { title: 'Avez-vous déjà testé la callisthénie ?', yes: 'Oui', no: 'Non' },
    step4: { title: 'La callisthénie est simple et ultra-efficace !', p1: 'Un entraînement qui utilise le poids du corps.', p2Woman: 'Nous allons vous aider à retrouver la forme chez vous sans aucun matériel !', p2Man: 'Nous allons vous aider à retrouver la forme chez vous sans aucun matériel !' },
    step5: { title: 'Quel est votre objectif principal ?', loseWeight: 'Perdre du poids', gainMuscle: 'Prendre du muscle', stayFit: 'Garder la forme' },
    step6: { title: 'Que souhaitez-vous accomplir de plus ?', options: ['Perdre du gras', 'Sculpter le corps', 'Améliorer la posture', 'Réduire le stress', 'Gagner en souplesse'] },
    step7: { title: 'Comment décririez-vous votre physique ?', options: [{ id: 'slim', label: 'Mince' }, { id: 'average', label: 'Moyen' }, { id: 'plus', label: 'Forte corpulence' }, { id: 'overweight', label: 'Surpoids important' }] },
    step8: { title: 'Quel est votre corps de rêve ?', subtitle: 'Visualisez votre objectif pour rester motivé(e)', options: [{ id: 'slim', label: 'Mince' }, { id: 'toned', label: 'Tonique' }, { id: 'curvy', label: 'Avec courbes' }, { id: 'bulk', label: 'Musclé' }] },
    step9: { title: 'Les grandes victoires commencent par de petits pas', p1Prefix: 'Votre défi a été ', p1Bold: 'conçu pour vous aider à persévérer.', p2: 'Chaque séance vous rapproche de résultats concrets.', weekLabels: ['Semaine 1', 'Semaine 2', 'Semaine 3', 'Semaine 4'], barTexts: ['Plus d’énergie', 'Moins de tension', 'Plus fort(e)', 'Corps tonique'], monday: 'Lundi' },
    step10: { title: 'À quand remonte votre meilleure forme ?', options: ['Moins d’un an', '1 à 2 ans', 'Plus de 3 ans', 'Jamais'] },
    step11: { title: 'Comment évolue votre poids ?', hardLose: 'Difficile de perdre du poids', changesEasily: 'Varie facilement', hardGain: 'Difficile de prendre du poids' },
    step12: { mesomorfoTitle: 'Votre profil correspond au type Mésomorphe', mesomorfoDesc: 'Votre corps réagit vite et a besoin d’une structure précise pour se définir.', endomorfoTitle: 'Votre profil correspond au type Endomorphe', endomorfoDesc: 'Votre métabolisme réagit très bien aux séances métaboliques et au suivi nutritionnel.', ectomorfoTitle: 'Votre profil correspond au type Ectomorphe', ectomorfoDesc: 'Votre métabolisme rapide demande un travail de force progressif et une nutrition adaptée.', p2Prefix: 'Nos ', p2Bold: 'vidéos guidées et plans repas', p2Suffix: ' vous garantissent d’atteindre votre objectif.' },
    step13: { title: 'À quelle fréquence vous entraînez-vous ?', options: ['Presque chaque jour', 'Plusieurs fois/semaine', 'Plusieurs fois/mois', 'Jamais'] },
    step14: { title: 'Quelles zones voulez-vous cibler ?', options: [{ id: 'abs', label: 'Ventre' }, { id: 'glutes', label: 'Fessiers' }, { id: 'legs', label: 'Jambes' }, { id: 'chest', label: 'Poitrine' }, { id: 'arms', label: 'Bras' }, { id: 'back', label: 'Dos' }] },
    step15: { title: 'À quelle fréquence marchez-vous ?', options: ['Presque chaque jour', '3-4 fois/semaine', '1-2 fois/semaine', '1 fois/mois'] },
    step16: { title: 'Comment vous sentez-vous en montant les escaliers ?', options: ['Très essoufflé(e)', 'Douleurs musculaires', 'Correct après un étage', 'Bien après plusieurs étages'] },
    step17: { title: 'Combien de pompes faites-vous d’affilée ?', options: ['Aucune', '1-10 pompes', '11-20 pompes', '20+ pompes'] },
    step18: { title: 'Combien de squats pouvez-vous faire ?', options: ['Aucun', '11-20 squats', '21-40 squats', '40+ squats'] },
    step19: { title: 'Avez-vous des sensibilités ?', back: 'Dos sensible', knees: 'Genoux sensibles' },
    step20: { title: 'C’est noté !', p1: 'Nous intégrerons des exercices doux et efficaces pour renforcer tout le corps.', p2: 'Une routine régulière garantit santé et vitalité !' },
    step21: { title: 'Quel est votre rythme de travail ?', options: ['9h à 17h', 'Horaires flexibles', 'Travail de nuit', 'Retraité(e) / sans emploi'] },
    step22: { title: 'À quoi ressemble votre journée type ?', options: ['Assis(e) la majeure partie', 'Pauses actives', 'Debout toute la journée'] },
    step23: { title: 'Comment est votre niveau d’énergie ?', lowWoman: 'Bas, souvent fatiguée', lowMan: 'Bas, souvent fatigué', postLunch: 'Baisse après le déjeuner', drag: 'Je fatigue entre les repas', high: 'Élevé et stable' },
    step24: { title: 'Fini le coup de fatigue d’après-midi', p1: 'Nos séances boostent votre endurance et votre tonus.', p2: 'Retrouvez énergie et force au quotidien.' },
    step25: { title: 'Combien d’eau buvez-vous par jour ?', subtitle: '1 verre = 237 ml', options: ['Café ou thé uniquement', 'Environ 2 verres', '2 à 6 verres', 'Plus de 6 verres'] },
    step26: { title: 'Combien d’heures dormez-vous ?', options: ['Moins de 5h', '5-6 heures', '7-8 heures', 'Plus de 8 heures'] },
    step27: { title: 'À quelle heure prenez-vous le petit-déjeuner ?', options: ['6h à 8h', '8h à 10h', '10h à 12h', 'Je saute le petit-déjeuner'] },
    step28: { title: 'Et le déjeuner ?', options: ['10h à 12h', '12h à 14h', '14h à 16h', 'Je saute le déjeuner'] },
    step29: { title: 'Et le dîner ?', options: ['16h à 18h', '18h à 20h', '20h à 22h', 'Je saute le dîner'] },
    step30: {
      title: 'Quel régime préférez-vous ?',
      groups: {
        withMeat: { label: 'AVEC VIANDE', items: [{ id: 'traditional', title: 'Traditionnel', desc: 'J’aime de tout' }, { id: 'keto', title: 'Cétogène', desc: 'Riche en lipides, faible en glucides' }, { id: 'paleo', title: 'Paléo', desc: 'Sans aliments transformés' }] },
        noMeat: { label: 'SANS VIANDE', items: [{ id: 'vegetarian', title: 'Végétarien', desc: 'Sans viande ni poisson' }, { id: 'vegan', title: 'Végan', desc: '100% végétal' }, { id: 'vegan_keto', title: 'Keto Végan', desc: 'Végétal faible en glucides' }] },
        withFish: { label: 'AVEC POISSON', items: [{ id: 'mediterranean', title: 'Méditerranéen', desc: 'Légumes, céréales et fruits de mer' }, { id: 'pescatarian', title: 'Pescétarien', desc: 'Poisson sans viande' }] },
        noAllergens: { label: 'SANS ALLERGÈNES', items: [{ id: 'lactose_free', title: 'Sans lactose', desc: 'Sans produits laitiers' }, { id: 'gluten_free', title: 'Sans gluten', desc: 'Sans céréales au gluten' }] },
      },
    },
    step31: { title: 'Gagnez du muscle avec un plan repas sur mesure', p1: 'La nutrition est essentielle pour sculpter le corps.', p2: 'Recettes rapides et savoureuses adaptées à vos goûts.', phoneHeader: 'Vos repas', breakfast: 'Petit-déjeuner', lunch: 'Déjeuner', dinner: 'Dîner' },
    step32: { title: 'Avez-vous certaines de ces habitudes ?', options: ['Manger par émotion ou ennui', 'Manger en excès', 'Grignotage nocturne', 'Sauter des repas'] },
    step33: { title: 'Des spécialistes certifiés de haut niveau', specialists: [{ name: 'Lisa Wishmann', role: 'Spécialiste Force & Conditionnement' }, { name: 'Sydney Bueckert', role: 'Coach personnelle certifiée (NASM)' }, { name: 'Kelsey Butler', role: 'Diététicienne-Nutritionniste' }] },
    step34: { title: 'Quelle est votre taille ?', placeholder: 'Taille', rangeHintCm: 'Entrez une valeur entre 90 et 243 cm', rangeHintFt: 'Entrez une valeur entre 3 et 8 ft', consentText: 'J’accepte que BestMe traite mes données de santé pour personnaliser mon programme.', privacyLink: 'Politique de confidentialité.' },
    step35: { title: 'Quel est votre poids actuel ?', placeholder: 'Votre poids', rangeHintKg: 'Entrez une valeur entre 25 et 300 kg', rangeHintLbs: 'Entrez une valeur entre 55 et 660 lbs' },
    step36: { title: 'Compris ! Quel est votre objectif de poids ?', placeholder: 'Poids cible', moveLabel: 'Passez à l’action :', gainLabel: 'gagnez {{pct}}% de poids', loseLabel: 'perdez {{pct}}% de poids', maintainLabel: 'stabilisez votre poids avec du tonus', studyNote: '5 minutes d’exercice par jour améliorent déjà énergie, condition physique et sommeil.' },
    step37: { title: 'Quel âge avez-vous ?', unit: 'ans', noteTitle: 'Votre âge aide à ajuster votre bilan', noteDesc: 'Le pourcentage de masse grasse évolue avec l’âge à IMC égal' },
    step38: { title: 'Analyse de vos réponses', bars: ['Profil', 'Activité', 'Mode de vie', 'Nutrition'], awardTitle: 'APP DU JOUR', awardSub: 'dans 160 pays | 15 juillet 2025' },
    step39: { title: 'Voici votre profil bien-être', bmiTitle: 'Indice de Masse Corporelle (IMC)', scaleLabels: ['Insuffisance', 'Normal', 'Surpoids', 'Obésité'], bmiHealthyTitle: 'IMC sain :', bmiHealthyDesc: 'Excellente base pour tonifier et sculpter votre corps', bmiImproveTitle: 'Potentiel d’équilibre :', bmiImproveDesc: 'Le défi optimisera votre composition corporelle', bodyTypeLabel: 'Morphotype', lifestyleLabel: 'Mode de vie', lifestyleValue: 'Actif', fitnessLabel: 'Niveau fitness', fitnessValue: 'Intermédiaire', metabolismLabel: 'Métabolisme', metabolismValue: 'Modéré' },
    step40: { title: 'Un événement récent a-t-il freiné votre progression ?', options: ['Pression au travail', 'Défis financiers', 'Vie familiale intense', 'Pandémie Covid-19', 'Séparation', 'Autres événements stressants', 'Métabolisme ralenti avec l’âge'] },
    step41: { title: 'Avez-vous un événement important à venir ?', subtitle: 'Avoir une date clé renforce votre motivation', options: ['Vacances', 'Réunion', 'Mariage', 'Anniversaire', 'Fête', 'Autres', 'Événement sportif'], noneEvent: 'Aucun événement prévu' },
    step42: { title: 'Quand a lieu votre événement ?', subtitle: 'Nous gardons cette échéance pour votre objectif', selectDateLabel: 'Choisir une date', privacyNote: 'Vos données sont protégées par notre Politique de confidentialité.' },
    step43: { title: 'Le plan qui va enfin vous remettre en forme', estimatePrefix: 'Vous pourriez peser', untilLabel: 'd’ici le', untilEventTag: '{{diff}} d’ici {{event}}', chartObjective: 'Objectif', disclaimer: '* Estimation basée sur les utilisateurs actifs. Le graphique est illustratif et les résultats varient.', quote: 'Notre Défi Callisthénie associe entraînements engageants et nutrition saine.' },
    step44: { title: 'Quelle est votre motivation principale ?', optionsWoman: ['Me sentir plus confiante', 'Me sentir en meilleure santé', 'Me sentir mieux dans mes vêtements', 'Retrouver la forme post-partum', 'Autres'], optionsMan: ['Me sentir plus confiant', 'Me sentir en meilleure santé', 'Me sentir mieux dans mes vêtements', 'Gagner en force', 'Autres'] },
    step45: { title: 'Améliorez votre bien-être chaque jour', p1: 'Commencez simplement et laissez chaque séance recharger vos batteries.', p2: '15 minutes par jour suffisent : nous gérons la progression.', cardTitle: 'Build Your Core', cardDuration: '15 min' },
    step46: { title: 'Êtes-vous confiant(e) d’atteindre votre but d’ici {{date}} ?', optionsWoman: ['Je sais que je peux le faire !', 'Quelques doutes, mais je veux essayer !', 'Je me sens encore peu sûre'], optionsMan: ['Je sais que je peux le faire !', 'Quelques doutes, mais je veux essayer !', 'Je me sens encore peu sûr'] },
    step47: { title: 'Pourquoi BestMe inspire confiance', awards: [{ title: 'Best Mobile App Awards', desc: 'élue meilleure app Santé & Fitness', year: '2022' }, { title: 'Top 3 apps d’entraînement', desc: 'selon le rapport Apple', year: '2022' }, { title: 'Meilleures apps fitness', desc: 'par Forbes Health', year: '2025' }] },
    step48: { creating: 'Création de votre défi personnalisé', socialCountWoman: '287 465 femmes', socialCountMan: '241 890 hommes', socialSub: 'ont choisi BestMe pour se muscler et garder la forme', reviewTitle: "J'adore cette appli", reviewAuthor: 'Maria', reviewBody: 'Elle m’aide à suivre mon alimentation et mes exercices chaque jour.' },
    step49: { titlePrefix: 'Entrez votre e-mail pour recevoir votre ', titleHighlight: 'Défi Callisthénie', titleSuffix: ' personnalisé', placeholder: 'vous@exemple.com', privacyPrefix: 'Nous protégeons vos données conformément à notre', privacyLink: 'Politique de confidentialité.' },
    step50: { title: 'Quel est votre prénom ?', placeholder: 'Votre prénom' },
    step51: { titlePrefix: '{{name}}, votre Défi Callisthénie de 4 semaines pour ', goalLose: 'perdre du poids', goalGain: 'prendre du muscle', goalFit: 'rester en forme', titleSuffix: ' est prêt !', chartTitle: 'Votre force musculaire', mondayBadge: 'Lundi', weeks: ['Sem. 1', 'Sem. 2', 'Sem. 3', 'Sem. 4'], chartNote: 'Graphique à titre illustratif', bullet1: 'Idéal débutants', bullet2: 'Adapté à vos réponses', bullet3Prefix: 'Objectif : {{diff}} d’ici {{date}}' },
    step52: { slides: ['Faites de ce lundi celui qui dure', 'Transformez-vous en 15 minutes par jour avec des repas sains', 'Pour sculpter votre corps et affiner votre taille', 'Semaine 1 – vous le sentirez\nSemaine 2 – vous le verrez\nSemaine 3 – soyez fier(ère)', 'C’est parti !'] },
    step53: { title: 'Grattez pour révéler votre remise spéciale !', subtitle: 'Commencez votre parcours avec une belle surprise', scratchHere: 'Grattez ici', discountLabel: 'de remise', discountSub: 'sur votre Défi Callisthénie', promoLabel: 'Code promo', overlayNote: 'Appliqué automatiquement au paiement' },
    paywall: {
      timerLabel: 'Offre réservée pendant :', timerMinutes: 'minutes', timerSeconds: 'secondes', topCta: 'OBTENIR MON PLAN',
      heroTitle: 'Votre Défi Callisthénie est prêt !', nowLabel: 'Actuel', goalLabel: 'Objectif',
      muscleStrength: 'Force musculaire', strengthNow: 'Moyenne', strengthGoal: 'Élevée', calisthenicsLevel: 'Niveau callisthénie', levelNow: 'Intermédiaire', levelGoal: 'Avancé',
      choosePlanTitle: 'Choisissez votre plan', promoAppliedTitle: 'Votre code promo a été appliqué !', mostPopular: 'LE PLUS POPULAIRE',
      plan1Title: 'Essai 1 semaine', plan1Sub: 'PLAN 4 SEMANES', plan4Title: 'Plan 4 Semaines', plan12Title: 'Plan 12 Semaines', perDay: 'par jour', getMyPlan: 'OBTENIR MON PLAN',
      legalSubscription: 'Sauf annulation avant la fin du plan, BestMe renouvellera automatiquement au tarif standard. Gérez via', manageSub: 'Gérer l’abonnement',
      includedTitle: 'Inclus dans votre plan',
      features: [
        { title: 'Entraînements maison simples', desc: 'pour muscler et tonifier' },
        { title: 'Exercices débutants', desc: 'ventre plat et meilleure posture' },
        { title: 'Routines de 10-20 min', desc: 'adaptées à votre emploi du temps' },
        { title: 'Sans équipement', desc: 'tout est dans le programme' },
        { title: 'Plan repas personnalisé', desc: 'recettes rapides et saines' },
        { title: 'Conseils d’experts', desc: 'pour durer sur le long terme' },
      ],
      progressHeader: 'Votre progrès', dayLabel: 'Jour', ratingsCount: 'évaluations', ratingsFiveStar: 'Avis 5 étoiles',
      appOfDay: 'APP DU JOUR', appOfDaySub: 'dans 160 pays · 15 juil. 2025',
      resultsTitle: 'Des résultats dont nous sommes fiers',
      resultsCards: [
        { name: 'Vera, -5 kg*', quote: 'J’ai commencé à 75 kg et progressé chaque jour grâce aux vidéos.' },
        { name: 'Mandy, -4 kg*', quote: 'Séances courtes mais super efficaces, je me sens en pleine forme.' },
        { name: 'Nina, -3 kg*', quote: '4 mois post-partum, enfin un programme qui rentre dans ma journée.' },
      ],
      faqTitle: 'Questions Fréquentes',
      faqs: [
        { q: 'Comment ce plan m’aide-t-il à prendre du muscle ?', a: 'Il combine séances guidées au poids du corps et nutrition sur mesure.' },
        { q: 'Quels sont les bienfaits de la callisthénie ?', a: 'Force fonctionnelle, souplesse et définition musculaire sans matériel.' },
        { q: 'Et si je perds ma motivation ?', a: 'Rappels doux, séances de 15 min et suivi continu vous gardent actif.' },
      ],
      trustedTitle: 'Approuvé par plus de 10 millions de personnes',
      trustCards: [
        { title: 'Plus active et plus forte', author: 'Natalia P.', body: 'Tonus visible en moins d’un mois !' },
        { title: 'Parfait pour maigrir ou se muscler', author: 'Juan', body: 'Progression douce et motivante.' },
        { title: 'Travaille tout le corps', author: 'Mayra', body: 'Routine claire et efficace.' },
      ],
      disclaimer: '*Avertissement : Les résultats varient selon la régularité et l’alimentation.', excellent: 'Excellent',
      visibleResultsTitle: 'Des résultats visibles en 4 semaines !',
      guaranteeTitle: 'garantie satisfait ou remboursé 30 jours', guaranteeDesc: 'Si vous suivez le plan pendant 4 semaines sans résultat visible, nous vous remboursons.',
      guaranteeLinkPrefix: 'En savoir plus sur notre', guaranteeLink: 'politique de remboursement.', companyLegal: 'BestMe Well-Being Platform • Support en 6 langues',
    },
    checkout: {
      title: 'Finalisez votre commande', summaryTitle: 'Récapitulatif', regularPrice: 'Prix normal', initialDiscount: 'Remise de 50%',
      appliedPromo: 'Code promo appliqué :', totalToPay: 'Total à payer :', savingsBanner: 'Vous économisez {{saved}} (-50%)',
      expressCheckout: 'Paiement express', buyWithApplePay: 'Payer avec Apple Pay', payWithPix: 'Payer via PIX',
      creditCard: 'Carte bancaire', cardNumber: 'Numéro de carte', expiry: 'MM/AA', cvv: 'CVV', cardHolder: 'Titulaire',
      payNowBtn: 'Payer Maintenant', approvedMsg: 'Paiement validé ! Ouverture de l’App BestMe...', securePayment: 'Paiement 100% sécurisé · SSL',
    },
  },
};

const DE: TranslationDict = {
  common: {
    brand: 'BestMe', continueBtn: 'WEITER', nextStepBtn: 'NÄCHSTER SCHRITT', skipStepBtn: 'SCHRITT ÜBERSPRINGEN',
    back: 'Zurück', login: 'Anmelden', help: 'Hilfe', language: 'Sprache', homeLink: 'Startseite',
    selectAllApply: 'Alles Zutreffende auswählen',
    termsPrefix: 'Mit der Auswahl Ihres Alters stimmen Sie unseren', termsLink: 'Nutzungsbedingungen', privacyLink: 'Datenschutzrichtlinien', termsSuffix: 'Bitte vorab lesen',
    mobileOnlyTitle: 'Exklusiver Mobilzugang', mobileOnlyDesc: 'Die interaktive Calisthenics-Challenge und die BestMe-App sind für Smartphones optimiert.',
    mobileOnlyHow: '📱 So greifen Sie jetzt zu:', mobileOnlyHint: 'Öffnen Sie diesen Link auf Ihrem Handy oder aktivieren Sie den Mobilmodus (F12) im Browser.', mobileOnlyBackHome: 'Zurück zur Startseite',
    asSeenIn: 'Bekannt aus', noneOption: 'Keine der Optionen',
  },
  home: {
    navApps: 'Apps', navCalisthenics: 'Calisthenics', navStore: 'BestMe Store', navBusiness: 'Unternehmen', navReviews: 'Bewertungen', navStartQuiz: 'Challenge starten',
    heroBadge: 'Globales Wellness-Ökosystem · 150M+ Downloads',
    heroTitle: 'Wohlbefinden für das echte Leben, nicht für Extreme.',
    heroSubtitle: 'Geführte Calisthenics-Workouts ohne Geräte, personalisierte Ernährung und mentale Gesundheit in nur 15 Minuten am Tag.',
    heroCta: 'Meinen Plan Erstellen', heroSecondaryCta: 'Ökosystem entdecken', heroRating: '4.8 ★ App Store · App des Tages in 160 Ländern',
    quickTitle: 'Starten Sie Ihre 4-Wochen-Calisthenics-Challenge',
    quickSubtitle: 'Wählen Sie unten, um Ihren Plan nach Geschlecht, Alter und Zielen anzupassen.',
    quickWomanTitle: 'Für Frauen', quickWomanSub: 'Straffung, Haltung & Fettverbrennung zu Hause',
    quickManTitle: 'Für Männer', quickManSub: 'Muskelaufbau, Definition & Ausdauer ohne Geräte',
    quickStartTag: 'Quiz starten →',
    worldEyebrow: 'Entdecken Sie die BestMe-Welt', worldTitle: 'Ein komplettes Ökosystem für Körper & Geist',
    worldSubtitle: 'Video-Workouts, Ernährungspläne, Achtsamkeit und kompaktes Home-Gym-Equipment.',
    worldCards: {
      coaching: { tag: 'BestMe: Health Coaching', title: 'Calisthenics, Pilates & Ernährung', desc: 'Über 4.000 Workouts ohne Geräte und schnelle Rezepte passend zu Ihrer Diät.', cta: 'Plan erstellen', bullet1: '10–20 Min. Home-Workouts', bullet2: '10+ Ernährungsformen', bullet3: 'Zertifizierte Experten' },
      mental: { tag: 'BestMe: Mental Health', title: 'Schlaf, Fokus & Stressabbau', desc: 'Geführte Meditationen und Atemübungen für mehr Energie im Alltag.', cta: 'Analyse starten', bullet1: '5-Min. Anti-Stress-Sessions', bullet2: 'Abendroutinen für besseren Schlaf', bullet3: 'Tägliche Energie-Check-ins' },
      store: { tag: 'BestMe Store', title: 'Activewear & Home-Gear', desc: 'Bequeme Sportbekleidung für jeden Körpertyp und kompaktes Equipment.', cta: 'Zu Hause trainieren', bullet1: 'Inklusive Größen', bullet2: 'Bänder, Matten & Flaschen', bullet3: 'Auf App-Workouts abgestimmt' },
      business: { tag: 'BestMe für Unternehmen', title: 'Betriebliches Wohlbefinden', desc: 'Team-Challenges und Burnout-Prävention für gesunde Mitarbeiter.', cta: 'Challenge anfragen', bullet1: 'Gamifizierte Team-Ziele', bullet2: 'Engagement-Analysen', bullet3: 'In 6+ Sprachen verfügbar' },
    },
    howEyebrow: 'Einfach, geführt, nachhaltig', howTitle: 'So funktioniert Ihr Plan in 3 Schritten',
    howSteps: [
      { num: '01', title: '2-Minuten-Analyse', desc: 'Wir bestimmen Körpertyp, Fitnesslevel und Essgewohnheiten.' },
      { num: '02', title: '15 Min/Tag + Menü', desc: 'Erhalten Sie Ihren 4-Wochen-Plan mit Video-Coaching und Rezepten.' },
      { num: '03', title: 'Sichtbare Erfolge', desc: 'Woche 1 mehr Energie, Woche 2 sichtbare Konturen, Woche 4 stolz.' },
    ],
    impactTitle: 'Für echte Menschen weltweit entwickelt', impactDesc: 'Gesundheit bedeutet Beständigkeit, Zugänglichkeit und Respekt vor dem eigenen Körper.',
    impactStats: [{ value: '150M+', label: 'Downloads' }, { value: '2.2M+', label: 'Bewertungen' }, { value: '160', label: 'Länder App des Tages' }, { value: '15 min', label: 'Pro Tag' }],
    reviewsTitle: 'Über 10 Millionen Menschen vertrauen uns', reviewsSubtitle: 'Echte Erfolge der BestMe Calisthenics Challenge.',
    reviews: [
      { name: 'Vera, -5 kg*', result: '4-Wochen-Challenge', quote: 'In 4 Wochen deutlich stärker geworden – ganz ohne Fitnessstudio.' },
      { name: 'Mandy, -4 kg*', result: 'Mehr Definition', quote: 'Kurze Einheiten und schnelle Rezepte passen perfekt in meinen Alltag.' },
      { name: 'Juan P.', result: 'Kraft & Energie', quote: 'Sanfter Einstieg in Woche 1 und motivierende Steigerung.' },
    ],
    finalCtaTitle: 'Bereit, diesen Montag zu starten?', finalCtaSubtitle: 'Machen Sie das Quiz und sichern Sie sich 50% Rabatt.', finalCtaBtn: 'Jetzt Analyse Starten',
    footerTagline: 'Globales Ökosystem für Gesundheit, Calisthenics & Wohlbefinden.',
    footerCols: {
      ecosystem: 'Ökosystem', ecosystemLinks: ['Health Coaching', 'Mental Health', 'BestMe Store', 'Unternehmen'],
      company: 'Über BestMe', companyLinks: ['Mission', 'Experten', 'Bewertungen', 'Blog'],
      support: 'Support & Recht', supportLinks: ['Hilfe-Center', 'AGB', 'Datenschutz', 'Abo verwalten'],
    },
    footerCopy: '© 2026 BestMe Well-Being. Alle Rechte vorbehalten.',
  },
  funnel: {
    sections: { profile: 'Mein Profil', activity: 'Aktivität', lifestyle: 'Lebensstil', nutrition: 'Ernährung', almostThere: 'Fast geschafft' },
    step0: { eyebrow: 'INDIVIDUELLE CHALLENGE', title: 'Für wen erstellen wir diesen Plan?', subtitle: 'Wählen Sie Ihr Profil für Workouts, BMI-Werte und Ziele', woman: 'Frau', womanSub: 'Straffung, Haltung und Definition', man: 'Mann', manSub: 'Kraft, Muskelaufbau und Definition' },
    step1: { title: 'CALISTHENICS CHALLENGE', subtitle: 'STARTEN SIE DIESEN MONTAG UND SEIEN SIE BIS JANUAR NICHT WIEDERZUERKENNEN', ageLabel: 'Alter:' },
    step2: { headlineWoman: 'Über 306.000 Frauen', headlineMan: 'Über 284.000 Männer', subtext: 'im Alter von {{age}} Jahren haben unsere Calisthenics-Challenge getestet' },
    step3: { title: 'Haben Sie schon Calisthenics trainiert?', yes: 'Ja', no: 'Nein' },
    step4: { title: 'Calisthenics ist ein einfacher und effektiver Weg zu trainieren!', p1: 'Training ausschließlich mit dem eigenen Körpergewicht.', p2Woman: 'Wir helfen Ihnen zu Hause ohne Geräte in Form zu kommen!', p2Man: 'Wir helfen Ihnen zu Hause ohne Geräte in Form zu kommen!' },
    step5: { title: 'Was ist Ihr Hauptziel?', loseWeight: 'Abnehmen', gainMuscle: 'Muskeln aufbauen', stayFit: 'Gewicht halten & fit bleiben' },
    step6: { title: 'Was möchten Sie noch erreichen?', options: ['Fett abbauen', 'Definiert & straff werden', 'Haltung verbessern', 'Stress reduzieren', 'Flexibilität gewinnen'] },
    step7: { title: 'Wie beschreiben Sie Ihren Körperbau?', options: [{ id: 'slim', label: 'Schlank' }, { id: 'average', label: 'Mittel' }, { id: 'plus', label: 'Plus Size' }, { id: 'overweight', label: 'Deutliches Übergewicht' }] },
    step8: { title: 'Was ist Ihr Wunschkörper?', subtitle: 'Visualisieren Sie Ihr Ziel für langfristige Motivation', options: [{ id: 'slim', label: 'Schlank' }, { id: 'toned', label: 'Durchtrainiert' }, { id: 'curvy', label: 'Kurvig' }, { id: 'bulk', label: 'Muskulös' }] },
    step9: { title: 'Große Siege beginnen mit kleinen Schritten', p1Prefix: 'Ihre Challenge wurde ', p1Bold: 'für echte Kontinuität entwickelt.', p2: 'Jede Einheit bringt Sie Ihren sichtbaren Zielen näher.', weekLabels: ['Woche 1', 'Woche 2', 'Woche 3', 'Woche 4'], barTexts: ['Mehr Energie', 'Weniger Stress', 'Stärker fühlen', 'Fitter Körper'], monday: 'Montag' },
    step10: { title: 'Wann waren Sie zuletzt in Bestform?', options: ['Vor weniger als 1 Jahr', 'Vor 1–2 Jahren', 'Vor über 3 Jahren', 'Nie'] },
    step11: { title: 'Wie verändert sich Ihr Gewicht meist?', hardLose: 'Schwer abzunehmen', changesEasily: 'Ändert sich leicht', hardGain: 'Schwer zuzunehmen' },
    step12: { mesomorfoTitle: 'Sie haben wahrscheinlich den Körpertyp Mesomorph', mesomorfoDesc: 'Ihr Körper reagiert schnell und braucht gezielte Struktur für nachhaltige Definition.', endomorfoTitle: 'Sie haben wahrscheinlich den Körpertyp Endomorph', endomorfoDesc: 'Ihr Stoffwechsel spricht hervorragend auf Stoffwechsel-Workouts und Ernährung an.', ectomorfoTitle: 'Sie haben wahrscheinlich den Körpertyp Ektomorph', ectomorfoDesc: 'Ihr schneller Stoffwechsel profitiert von progressiven Kraftreizen.', p2Prefix: 'Unsere ', p2Bold: 'Video-Workouts & Ernährungspläne', p2Suffix: ' sichern Ihren Erfolg.' },
    step13: { title: 'Wie oft trainieren Sie?', options: ['Fast jeden Tag', 'Mehrmals pro Woche', 'Mehrmals pro Monat', 'Nie'] },
    step14: { title: 'Welche Fokusbereiche haben Sie?', options: [{ id: 'abs', label: 'Bauch' }, { id: 'glutes', label: 'Gesäß' }, { id: 'legs', label: 'Beine' }, { id: 'chest', label: 'Brust' }, { id: 'arms', label: 'Arme' }, { id: 'back', label: 'Rücken' }] },
    step15: { title: 'Wie oft gehen Sie spazieren?', options: ['Fast täglich', '3–4x pro Woche', '1–2x pro Woche', 'Einmal im Monat'] },
    step16: { title: 'Wie fühlen Sie sich beim Treppensteigen?', options: ['Sehr außer Atem', 'Muskelbrennen mit der Zeit', 'Okay nach einer Treppe', 'Gut nach mehreren Etagen'] },
    step17: { title: 'Wie viele Liegestütze schaffen Sie am Stück?', options: ['Keine', '1–10', '11–20', '20+'] },
    step18: { title: 'Wie viele Kniebeugen schaffen Sie?', options: ['Keine', '11–20', '21–40', '40+'] },
    step19: { title: 'Haben Sie Beschwerden bei:', back: 'Empfindlicher Rücken', knees: 'Empfindliche Knie' },
    step20: { title: 'Alles klar, verstanden!', p1: 'Wir wählen gelenkschonende Übungen für den ganzen Körper.', p2: 'Eine einfache Routine sorgt für ein gesünderes Leben!' },
    step21: { title: 'Wie sieht Ihr Arbeitsalltag aus?', options: ['9 bis 17 Uhr', 'Flexible Zeiten', 'Nachtschichten', 'Rentner / aktuell nicht berufstätig'] },
    step22: { title: 'Wie verbringen Sie Ihren Tag meist?', options: ['Meist sitzend', 'Aktive Pausen', 'Den ganzen Tag stehend'] },
    step23: { title: 'Wie ist Ihr Energielevel tagsüber?', lowWoman: 'Niedrig, oft müde', lowMan: 'Niedrig, oft müde', postLunch: 'Tief nach dem Mittagessen', drag: 'Schlapp zwischen Mahlzeiten', high: 'Hoch und stabil' },
    step24: { title: 'Schluss mit dem Mittagstief', p1: 'Unsere Workouts steigern Ausdauer und Vitalität.', p2: 'Mehr Kraft und Energie für den ganzen Tag.' },
    step25: { title: 'Wie viel Wasser trinken Sie täglich?', subtitle: '1 Glas entspricht 237 ml', options: ['Nur Kaffee oder Tee', 'Ca. 2 Gläser', '2 bis 6 Gläser', 'Über 6 Gläser'] },
    step26: { title: 'Wie viele Stunden schlafen Sie meist?', options: ['Weniger als 5 Std.', '5–6 Std.', '7–8 Std.', 'Über 8 Std.'] },
    step27: { title: 'Wann frühstücken Sie meist?', options: ['6–8 Uhr', '8–10 Uhr', '10–12 Uhr', 'Ich überspringe es meist'] },
    step28: { title: 'Und Mittagessen?', options: ['10–12 Uhr', '12–14 Uhr', '14–16 Uhr', 'Ich überspringe es meist'] },
    step29: { title: 'Wann essen Sie zu Abend?', options: ['16–18 Uhr', '18–20 Uhr', '20–22 Uhr', 'Ich überspringe es meist'] },
    step30: {
      title: 'Welche Ernährungsform bevorzugen Sie?',
      groups: {
        withMeat: { label: 'MIT FLEISCH', items: [{ id: 'traditional', title: 'Traditionell', desc: 'Ich esse alles' }, { id: 'keto', title: 'Keto', desc: 'Viel Fett, wenig Kohlenhydrate' }, { id: 'paleo', title: 'Paleo', desc: 'Keine verarbeiteten Lebensmittel' }] },
        noMeat: { label: 'OHNE FLEISCH', items: [{ id: 'vegetarian', title: 'Vegetarisch', desc: 'Kein Fleisch & Fisch' }, { id: 'vegan', title: 'Vegan', desc: 'Rein pflanzlich' }, { id: 'vegan_keto', title: 'Veganes Keto', desc: 'Pflanzlich & low-carb' }] },
        withFish: { label: 'MIT FISCH', items: [{ id: 'mediterranean', title: 'Mediterran', desc: 'Gemüse, Vollkorn & Fisch' }, { id: 'pescatarian', title: 'Pescetarisch', desc: 'Fisch, aber kein Fleisch' }] },
        noAllergens: { label: 'ALLERGENFREI', items: [{ id: 'lactose_free', title: 'Laktosefrei', desc: 'Ohne Laktose' }, { id: 'gluten_free', title: 'Glutenfrei', desc: 'Ohne Gluten' }] },
      },
    },
    step31: { title: 'Muskeln aufbauen mit individuellem Ernährungsplan', p1: 'Ernährung ist der Schlüssel zu einem definierten Körper.', p2: 'Schnelle, leckere Rezepte für schnellere Ergebnisse.', phoneHeader: 'Ihre Mahlzeiten', breakfast: 'Frühstück', lunch: 'Mittagessen', dinner: 'Abendessen' },
    step32: { title: 'Haben Sie eine dieser Gewohnheiten?', options: ['Essen aus Stress/Langeweile', 'Zu große Portionen', 'Späte Snacks', 'Mahlzeiten oft auslassen'] },
    step33: { title: 'Zertifizierte Top-Spezialisten', specialists: [{ name: 'Lisa Wishmann', role: 'Kraft- & Konditionsexpertin' }, { name: 'Sydney Bueckert', role: 'Zertifizierte Personal Trainerin (NASM)' }, { name: 'Kelsey Butler', role: 'Registrierte Ernährungsberaterin' }] },
    step34: { title: 'Wie groß sind Sie?', placeholder: 'Größe', rangeHintCm: 'Wert zwischen 90 cm und 243 cm eingeben', rangeHintFt: 'Wert zwischen 3 ft und 8 ft eingeben', consentText: 'Ich stimme der Verarbeitung meiner Gesundheitsdaten zur Planerstellung durch BestMe zu.', privacyLink: 'Datenschutzerklärung.' },
    step35: { title: 'Wie viel wiegen Sie aktuell?', placeholder: 'Gewicht', rangeHintKg: 'Wert zwischen 25 kg und 300 kg eingeben', rangeHintLbs: 'Wert zwischen 55 lbs und 660 lbs eingeben' },
    step36: { title: 'Verstanden! Was ist Ihr Wunschgewicht?', placeholder: 'Zielgewicht', moveLabel: 'Los geht’s:', gainLabel: '{{pct}}% zunehmen', loseLabel: '{{pct}}% abnehmen', maintainLabel: 'Idealgewicht straffen und halten', studyNote: 'Schon 5 Minuten Bewegung täglich steigern Energie, Fitness und Schlafqualität.' },
    step37: { title: 'Wie alt sind Sie?', unit: 'Jahre', noteTitle: 'Alter hilft bei der Feinabstimmung', noteDesc: 'Der Körperfettanteil verändert sich im Alter bei gleichem BMI' },
    step38: { title: 'Ihre Antworten werden analysiert', bars: ['Profil', 'Aktivität', 'Lebensstil', 'Ernährung'], awardTitle: 'APP DES TAGES', awardSub: 'in 160 Ländern | 15. Juli 2025' },
    step39: { title: 'Ihr Wellness-Profil', bmiTitle: 'Body-Mass-Index (BMI)', scaleLabels: ['Untergewicht', 'Normal', 'Übergewicht', 'Adipositas'], bmiHealthyTitle: 'Gesunder BMI:', bmiHealthyDesc: 'Gute Ausgangsbasis für Definition', bmiImproveTitle: 'Optimierungspotenzial:', bmiImproveDesc: 'Ihr Plan verbessert Ihre Körperkomposition', bodyTypeLabel: 'Körpertyp', lifestyleLabel: 'Lebensstil', lifestyleValue: 'Aktiv', fitnessLabel: 'Fitnesslevel', fitnessValue: 'Mittel', metabolismLabel: 'Stoffwechsel', metabolismValue: 'Moderat' },
    step40: { title: 'Gab es Ereignisse, die Ihren Muskelaufbau gebremst haben?', options: ['Beruflicher Druck', 'Finanzielle Sorgen', 'Hektisches Familienleben', 'Covid-19 Pandemie', 'Trennung', 'Andere Belastungen', 'Langsamerer Stoffwechsel'] },
    step41: { title: 'Steht bald ein wichtiges Ereignis an?', subtitle: 'Ein konkretes Datum steigert die Motivation enorm', options: ['Urlaub', 'Treffen', 'Hochzeit', 'Geburtstag', 'Feiertag', 'Sonstiges', 'Sport-Event'], noneEvent: 'Kein Ereignis geplant' },
    step42: { title: 'Wann ist Ihr Ereignis?', subtitle: 'Wir berücksichtigen dieses Datum für Ihr Ziel', selectDateLabel: 'Datum wählen', privacyNote: 'Ihre Daten unterliegen unserer Datenschutzerklärung.' },
    step43: { title: 'Der Plan, der Sie endlich in Form bringt', estimatePrefix: 'Geschätztes Zielgewicht', untilLabel: 'bis zum', untilEventTag: '{{diff}} bis {{event}}', chartObjective: 'Ziel', disclaimer: '* Schätzung basiert auf App-Daten aktiver Nutzer. Ergebnisse können variieren.', quote: 'Unsere Calisthenics-Challenge vereint effektive Workouts mit gesunder Ernährung.' },
    step44: { title: 'Was ist Ihre Hauptmotivation?', optionsWoman: ['Selbstbewusster fühlen', 'Gesünder & fitter sein', 'In Kleidung wohler fühlen', 'Nach der Geburt fit werden', 'Sonstiges'], optionsMan: ['Selbstbewusster fühlen', 'Gesünder & fitter sein', 'In Kleidung wohler fühlen', 'Mehr Kraft aufbauen', 'Sonstiges'] },
    step45: { title: 'Verbessern Sie täglich Ihr Wohlbefinden', p1: 'Einfach anfangen und mit jeder Einheit Energie tanken.', p2: 'Nur 15 Minuten am Tag – wir steuern die Steigerung.', cardTitle: 'Build Your Core', cardDuration: '15 min' },
    step46: { title: 'Wie zuversichtlich sind Sie bis zum {{date}}?', optionsWoman: ['Ich schaffe das!', 'Noch unsicher, aber ich will es testen!', 'Noch sehr unsicher'], optionsMan: ['Ich schaffe das!', 'Noch unsicher, aber ich will es testen!', 'Noch sehr unsicher'] },
    step47: { title: 'Warum BestMe vertrauenswürdig ist', awards: [{ title: 'Best Mobile App Awards', desc: 'Platz 1 in Health & Fitness', year: '2022' }, { title: 'Top 3 Workout-Apps', desc: 'laut Apple-Bericht', year: '2022' }, { title: 'Beste Fitness-Apps', desc: 'von Forbes Health', year: '2025' }] },
    step48: { creating: 'Ihre persönliche Challenge wird erstellt', socialCountWoman: '287.465 Frauen', socialCountMan: '241.890 Männer', socialSub: 'wählten BestMe für Muskelaufbau und Fitness', reviewTitle: 'Ich liebe diese App', reviewAuthor: 'Maria', reviewBody: 'Hilft perfekt bei Ernährung und täglichem Training.' },
    step49: { titlePrefix: 'E-Mail eingeben für Ihre persönliche ', titleHighlight: 'Calisthenics Challenge', titleSuffix: '', placeholder: 'name@beispiel.de', privacyPrefix: 'Wir schützen Ihre Daten gemäß unserer', privacyLink: 'Datenschutzerklärung.' },
    step50: { title: 'Wie heißen Sie?', placeholder: 'Ihr Vorname' },
    step51: { titlePrefix: '{{name}}, Ihre 4-Wochen-Challenge für ', goalLose: 'Abnehmen', goalGain: 'Muskelaufbau', goalFit: 'Fitness', titleSuffix: ' ist fertig!', chartTitle: 'Ihre Muskelkraft', mondayBadge: 'Montag', weeks: ['Woche 1', 'Woche 2', 'Woche 3', 'Woche 4'], chartNote: 'Nur zur Veranschaulichung', bullet1: 'Perfekt für Anfänger', bullet2: 'Auf Ihre Antworten abgestimmt', bullet3Prefix: 'Ziel: {{diff}} bis {{date}}' },
    step52: { slides: ['Machen Sie diesen Montag zum Wendepunkt', 'Unverwechselbar mit nur 15 Min/Tag und gesunden Mahlzeiten', 'Für einen definierten Körper & flachen Bauch', 'Woche 1 – spüren\nWoche 2 – sehen\nWoche 3 – stolz sein', 'Los geht’s!'] },
    step53: { title: 'Freirubbeln für Ihren Sonderrabatt!', subtitle: 'Starten Sie Ihre Reise mit einer Überraschung', scratchHere: 'Hier rubbeln', discountLabel: 'Rabatt', discountSub: 'auf Ihre Challenge', promoLabel: 'Gutscheincode', overlayNote: 'Wird automatisch an der Kasse angewendet' },
    paywall: {
      timerLabel: 'Rabatt reserviert für:', timerMinutes: 'Minuten', timerSeconds: 'Sekunden', topCta: 'MEINEN PLAN SICHERN',
      heroTitle: 'Ihre Calisthenics-Challenge ist bereit!', nowLabel: 'Jetzt', goalLabel: 'Ihr Ziel',
      muscleStrength: 'Muskelkraft', strengthNow: 'Mittel', strengthGoal: 'Hoch', calisthenicsLevel: 'Calisthenics-Level', levelNow: 'Mittelstufe', levelGoal: 'Fortgeschritten',
      choosePlanTitle: 'Wählen Sie Ihren Plan', promoAppliedTitle: 'Gutscheincode wurde aktiviert!', mostPopular: 'BELIEBTESTER',
      plan1Title: '1-Woche-Test', plan1Sub: '4-WOCHEN-PLAN', plan4Title: '4-Wochen-Plan', plan12Title: '12-Wochen-Plan', perDay: 'pro Tag', getMyPlan: 'MEINEN PLAN SICHERN',
      legalSubscription: 'Sofern nicht rechtzeitig gekündigt, verlängert BestMe automatisch zum regulären Preis. Kündigung über', manageSub: 'Abo verwalten',
      includedTitle: 'In Ihrem Plan enthalten',
      features: [
        { title: 'Einfache Home-Workouts', desc: 'für Muskelaufbau & Fitness' },
        { title: 'Anfängerfreundlich', desc: 'flacherer Bauch & bessere Haltung' },
        { title: '10–20 Min. Routinen', desc: 'passend für jeden Zeitplan' },
        { title: 'Ohne Geräte', desc: 'alles im Plan enthalten' },
        { title: 'Eigener Ernährungsplan', desc: 'mit schnellen Rezepten' },
        { title: 'Expertentipps', desc: 'für langfristigen Erfolg' },
      ],
      progressHeader: 'Ihr Fortschritt', dayLabel: 'Tag', ratingsCount: 'Bewertungen', ratingsFiveStar: '5-Sterne-Wertungen',
      appOfDay: 'APP DES TAGES', appOfDaySub: 'in 160 Ländern · 15. Juli 2025',
      resultsTitle: 'Ergebnisse, auf die wir stolz sind',
      resultsCards: [
        { name: 'Vera, -5 kg*', quote: 'Mit 75 kg gestartet und täglich gesteigert.' },
        { name: 'Mandy, -4 kg*', quote: 'Kurze Einheiten haben meine Disziplin verändert.' },
        { name: 'Nina, -3 kg*', quote: 'Perfekt für den Alltag nach der Schwangerschaft.' },
      ],
      faqTitle: 'Häufige Fragen',
      faqs: [
        { q: 'Wie hilft der Plan beim Muskelaufbau?', a: 'Video-Workouts + personalisierte Ernährung sorgen für sichtbaren Zuwachs.' },
        { q: 'Vorteile von Calisthenics?', a: 'Kraft, Beweglichkeit und Definition ohne Geräte.' },
        { q: 'Was bei Motivationsverlust?', a: 'Erinnerungen und kurze 15-Min-Sessions halten Sie dran.' },
      ],
      trustedTitle: 'Über 10 Millionen Nutzer vertrauen uns',
      trustCards: [
        { title: 'Aktiver und stärker', author: 'Natalia P.', body: 'Sichtbare Resultate in unter einem Monat.' },
        { title: 'Top für Fettabbau & Muskeln', author: 'Juan', body: 'Angenehme Steigerung Woche für Woche.' },
        { title: 'Ganzkörper-Training', author: 'Mayra', body: 'Tolle tägliche Routine.' },
      ],
      disclaimer: '*Hinweis: Ergebnisse hängen von Konsequenz und Ernährung ab.', excellent: 'Hervorragend',
      visibleResultsTitle: 'Sichtbare Ergebnisse in 4 Wochen!',
      guaranteeTitle: '30-Tage-Geld-zurück-Garantie', guaranteeDesc: 'Bei planmäßiger Nutzung ohne Ergebnis erstatten wir den Betrag.',
      guaranteeLinkPrefix: 'Details in unserer', guaranteeLink: 'Rückerstattungsrichtlinie.', companyLegal: 'BestMe Well-Being Platform • Support in 6 Sprachen',
    },
    checkout: {
      title: 'Bestellung abschließen', summaryTitle: 'Bestellübersicht', regularPrice: 'Regulärer Preis', initialDiscount: '50% Willkommensrabatt',
      appliedPromo: 'Aktiver Code:', totalToPay: 'Gesamtbetrag:', savingsBanner: 'Sie sparen {{saved}} (50% RABATT)',
      expressCheckout: 'Express-Zahlung', buyWithApplePay: 'Mit Apple Pay zahlen', payWithPix: 'Mit PIX zahlen',
      creditCard: 'Kreditkarte', cardNumber: 'Kartennummer', expiry: 'MM/JJ', cvv: 'CVV', cardHolder: 'Karteninhaber',
      payNowBtn: 'Jetzt Bezahlen', approvedMsg: 'Zahlung bestätigt! BestMe App wird geöffnet...', securePayment: '100% sicher · SSL-verschlüsselt',
    },
  },
};

const IT: TranslationDict = {
  common: {
    brand: 'BestMe', continueBtn: 'CONTINUA', nextStepBtn: 'PROSSIMO PASSO', skipStepBtn: 'SALTA QUESTO PASSO',
    back: 'Indietro', login: 'Accedi', help: 'Aiuto', language: 'Lingua', homeLink: 'Home',
    selectAllApply: 'Seleziona tutto ciò che si applica',
    termsPrefix: 'Scegliendo la tua età e continuando, accetti i nostri', termsLink: 'Termini di Servizio', privacyLink: 'Informativa sulla Privacy', termsSuffix: 'Leggi prima di continuare',
    mobileOnlyTitle: 'Accesso Esclusivo Mobile', mobileOnlyDesc: 'La sfida di calisthenics e l’app BestMe sono ottimizzate per il tuo smartphone.',
    mobileOnlyHow: '📱 Come accedere ora:', mobileOnlyHint: 'Apri questo link dal telefono o attiva la Modalità Mobile (F12) sul browser desktop.', mobileOnlyBackHome: 'Torna alla Home Page',
    asSeenIn: 'Come visto su', noneOption: 'Nessuna delle opzioni',
  },
  home: {
    navApps: 'App', navCalisthenics: 'Calisthenics', navStore: 'BestMe Store', navBusiness: 'Aziende', navReviews: 'Recensioni', navStartQuiz: 'Inizia la Sfida',
    heroBadge: 'Ecosistema globale di benessere · 150M+ download',
    heroTitle: 'Benessere creato per la vita reale, non per gli estremi.',
    heroSubtitle: 'Allenamenti guidati di calisthenics senza attrezzatura, nutrizione personalizzata e supporto mentale in soli 15 minuti al giorno.',
    heroCta: 'Crea il Mio Piano Personalizzato', heroSecondaryCta: 'Esplora l’Ecosistema', heroRating: '4.8 ★ App Store · App del Giorno in 160 paesi',
    quickTitle: 'Inizia la tua Sfida di Calisthenics di 4 Settimane',
    quickSubtitle: 'Scegli qui sotto per personalizzare il tuo piano in base a genere, età e obiettivi.',
    quickWomanTitle: 'Per Donne', quickWomanSub: 'Tonificazione, postura e perdita di grasso a casa',
    quickManTitle: 'Per Uomini', quickManSub: 'Massa magra, forza e definizione senza attrezzi',
    quickStartTag: 'Inizia il quiz →',
    worldEyebrow: 'Scopri il Mondo BestMe', worldTitle: 'Un ecosistema completo per corpo e mente',
    worldSubtitle: 'Video guidati, piani alimentari, gestione dello stress e attrezzatura compatta per casa.',
    worldCards: {
      coaching: { tag: 'BestMe: Health Coaching', title: 'Calisthenics, Pilates & Nutrizione', desc: 'Oltre 4.000 allenamenti a corpo libero e ricette veloci adatte alla tua dieta.', cta: 'Crea il mio piano', bullet1: 'Routine da 10–20 min a casa', bullet2: 'Piani per 10+ diete', bullet3: 'Esperti certificati' },
      mental: { tag: 'BestMe: Mental Health', title: 'Sonno, Focus & Anti-Stress', desc: 'Meditazioni guidate e respirazione per migliorare energia e serenità.', cta: 'Fai la valutazione', bullet1: 'Sessioni anti-stress da 5 min', bullet2: 'Routine serali rilassanti', bullet3: 'Check-in quotidiani' },
      store: { tag: 'BestMe Store', title: 'Abbigliamento & Accessori', desc: 'Capi sportivi inclusivi e attrezzatura compatta per allenarti a casa.', cta: 'Allenati a casa', bullet1: 'Taglie inclusive e traspiranti', bullet2: 'Fasce elastiche e tappetini', bullet3: 'Integrato con l’app' },
      business: { tag: 'BestMe per Aziende', title: 'Benessere Aziendale', desc: 'Sfide di benessere e prevenzione del burnout per il tuo team.', cta: 'Richiedi sfida', bullet1: 'Sfide di squadra', bullet2: 'Analisi di coinvolgimento', bullet3: 'Disponibile in 6+ lingue' },
    },
    howEyebrow: 'Semplice, guidato, sostenibile', howTitle: 'Come funziona il tuo piano in 3 passi',
    howSteps: [
      { num: '01', title: 'Quiz rapido in 2 min', desc: 'Identifichiamo biotipo, livello atletico e abitudini alimentari.' },
      { num: '02', title: '15 min/giorno + Dieta', desc: 'Ricevi 4 settimane di video guidati e ricette gustose.' },
      { num: '03', title: 'Risultati visibili', desc: 'Settimana 1 più energia, settimana 2 definizione, settimana 4 svolta.' },
    ],
    impactTitle: 'Pensato per persone reali in tutto il mondo', impactDesc: 'La salute non è perfezione, ma costanza e rispetto del proprio corpo.',
    impactStats: [{ value: '150M+', label: 'Download globali' }, { value: '2.2M+', label: 'Recensioni' }, { value: '160', label: 'Paesi App del Giorno' }, { value: '15 min', label: 'Al giorno' }],
    reviewsTitle: 'Scelto da oltre 10 milioni di persone', reviewsSubtitle: 'Storie reali dalla Sfida Calisthenics BestMe.',
    reviews: [
      { name: 'Vera, -5 kg*', result: 'Sfida 4 settimane', quote: 'In 4 settimane ho acquisito forza e risultati visibili direttamente a casa.' },
      { name: 'Mandy, -4 kg*', result: 'Corpo tonico', quote: 'Sessioni brevi e ricette veloci hanno reso facilissimo restare costante.' },
      { name: 'Juan P.', result: 'Forza ed energia', quote: 'Progressione perfetta per definirsi senza palestra.' },
    ],
    finalCtaTitle: 'Pronto/a a iniziare questo lunedì?', finalCtaSubtitle: 'Completa il quiz e sblocca il 50% di sconto sul tuo piano.', finalCtaBtn: 'Inizia Ora la Valutazione',
    footerTagline: 'Ecosistema globale di salute, calisthenics e benessere.',
    footerCols: {
      ecosystem: 'Ecosistema', ecosystemLinks: ['Health Coaching', 'Mental Health', 'BestMe Store', 'Aziende'],
      company: 'Chi siamo', companyLinks: ['Missione', 'Esperti', 'Recensioni', 'Blog'],
      support: 'Supporto & Legale', supportLinks: ['Centro Assistenza', 'Termini', 'Privacy', 'Gestisci Abbonamento'],
    },
    footerCopy: '© 2026 BestMe Well-Being. Tutti i diritti riservati.',
  },
  funnel: {
    sections: { profile: 'Il mio profilo', activity: 'Attività', lifestyle: 'Stile di vita', nutrition: 'Nutrizione', almostThere: 'Quasi finito' },
    step0: { eyebrow: 'SFIDA PERSONALIZZATA', title: 'Per chi stiamo creando questo piano?', subtitle: 'Scegli il tuo profilo per adattare allenamenti, IMC e obiettivi', woman: 'Donna', womanSub: 'Tonificazione, postura e definizione', man: 'Uomo', manSub: 'Forza, massa magra e definizione' },
    step1: { title: 'SFIDA DI CALISTHENICS', subtitle: 'INIZIA QUESTO LUNEDÌ E DIVENTA IRRICONOSCIBILE ENTRO GENNAIO', ageLabel: 'Età:' },
    step2: { headlineWoman: 'Oltre 306.000 donne', headlineMan: 'Oltre 284.000 uomini', subtext: 'tra i {{age}} anni hanno già provato la nostra Sfida di Calisthenics' },
    step3: { title: 'Hai mai provato allenamenti di calisthenics?', yes: 'Sì', no: 'No' },
    step4: { title: 'Il calisthenics è semplice ed efficace!', p1: 'Utilizza il peso del tuo stesso corpo.', p2Woman: 'Ti aiuteremo a tornare in forma a casa senza attrezzi!', p2Man: 'Ti aiuteremo a tornare in forma a casa senza attrezzi!' },
    step5: { title: 'Qual è il tuo obiettivo principale?', loseWeight: 'Perdere peso', gainMuscle: 'Aumentare massa muscolare', stayFit: 'Restare in forma' },
    step6: { title: 'Cos’altro speri di ottenere?', options: ['Perdere grasso', 'Corpo definito', 'Migliorare la postura', 'Ridurre stress e ansia', 'Aumentare flessibilità'] },
    step7: { title: 'Come descriveresti il tuo fisico?', options: [{ id: 'slim', label: 'Snello' }, { id: 'average', label: 'Medio' }, { id: 'plus', label: 'Taglia comoda' }, { id: 'overweight', label: 'Sovrappeso significativo' }] },
    step8: { title: 'Qual è il tuo corpo ideale?', subtitle: 'Visualizza la meta per restare motivato', options: [{ id: 'slim', label: 'Snello' }, { id: 'toned', label: 'Tonico' }, { id: 'curvy', label: 'Formoso' }, { id: 'bulk', label: 'Muscoloso' }] },
    step9: { title: 'Grandi vittorie iniziano con piccoli passi', p1Prefix: 'La tua sfida è ', p1Bold: 'pensata per farti continuare.', p2: 'Ogni sessione ti avvicina a risultati concreti.', weekLabels: ['Settimana 1', 'Settimana 2', 'Settimana 3', 'Settimana 4'], barTexts: ['Più energia', 'Meno tensione', 'Più forza', 'Corpo in forma'], monday: 'Lunedì' },
    step10: { title: 'Quanto tempo fa eri al top della forma?', options: ['Meno di un anno fa', '1–2 anni fa', 'Oltre 3 anni fa', 'Mai'] },
    step11: { title: 'Come cambia solitamente il tuo peso?', hardLose: 'Difficile perdere peso', changesEasily: 'Cambia facilmente', hardGain: 'Difficile prendere peso' },
    step12: { mesomorfoTitle: 'Sembra che tu abbia il biotipo Mesomorfo', mesomorfoDesc: 'Il tuo corpo cambia rapidamente con la giusta struttura.', endomorfoTitle: 'Sembra che tu abbia il biotipo Endomorfo', endomorfoDesc: 'Rispondi molto bene ad allenamenti metabolici e dieta bilanciata.', ectomorfoTitle: 'Sembra che tu abbia il biotipo Ectomorfo', ectomorfoDesc: 'Il metabolismo veloce richiede stimoli progressivi di forza.', p2Prefix: 'I nostri ', p2Bold: 'video guidati e il supporto nutrizionale', p2Suffix: ' garantiranno il tuo successo.' },
    step13: { title: 'Quanto spesso ti alleni?', options: ['Quasi ogni giorno', 'Più volte a settimana', 'Più volte al mese', 'Mai'] },
    step14: { title: 'Qual è la tua area focus?', options: [{ id: 'abs', label: 'Addome' }, { id: 'glutes', label: 'Glutei' }, { id: 'legs', label: 'Gambe' }, { id: 'chest', label: 'Petto' }, { id: 'arms', label: 'Braccia' }, { id: 'back', label: 'Schiena' }] },
    step15: { title: 'Quanto spesso fai passeggiate?', options: ['Quasi ogni giorno', '3-4 volte a settimana', '1-2 volte a settimana', 'Una volta al mese'] },
    step16: { title: 'Come ti senti salendo le scale?', options: ['Molto senza fiato', 'Sento indolenzimento muscolare', 'Ok dopo una rampa', 'Bene dopo diverse rampe'] },
    step17: { title: 'Quanti piegamenti riesci a fare?', options: ['Nessuno', '1-10', '11-20', '20+'] },
    step18: { title: 'Quanti squat riesci a fare?', options: ['Nessuno', '11-20', '21-40', '40+'] },
    step19: { title: 'Hai sensibilità in qualche zona?', back: 'Schiena sensibile', knees: 'Ginocchia sensibili' },
    step20: { title: 'Ottimo, ricevuto!', p1: 'Aggiungeremo esercizi mirati che rafforzano tutto il corpo.', p2: 'Una routine semplice porta a una vita più sana!' },
    step21: { title: 'Com’è la tua routine lavorativa?', options: ['9:00–17:00', 'Orari flessibili', 'Turni notturni', 'In pensione / non lavoro al momento'] },
    step22: { title: 'Come descriveresti la tua giornata tipica?', options: ['Seduto gran parte del giorno', 'Faccio pause attive', 'In piedi tutto il giorno'] },
    step23: { title: 'Com’è la tua energia durante il giorno?', lowWoman: 'Bassa, spesso stanca', lowMan: 'Bassa, spesso stanco', postLunch: 'Calo dopo pranzo', drag: 'Fatico tra i pasti', high: 'Alta e costante' },
    step24: { title: 'Basta cali di energia dopo pranzo', p1: 'I nostri allenamenti migliorano resistenza e tono.', p2: 'Avrai più energia per tutta la giornata.' },
    step25: { title: 'Quanta acqua bevi al giorno?', subtitle: '1 bicchiere medio = 237 ml', options: ['Solo caffè o tè', 'Circa 2 bicchieri', '2 a 6 bicchieri', 'Più di 6 bicchieri'] },
    step26: { title: 'Quante ore dormi di solito?', options: ['Meno di 5 ore', '5-6 ore', '7-8 ore', 'Più di 8 ore'] },
    step27: { title: 'Quando fai colazione di solito?', options: ['6:00–8:00', '8:00–10:00', '10:00–12:00', 'Salto la colazione'] },
    step28: { title: 'E il pranzo?', options: ['10:00–12:00', '12:00–14:00', '14:00–16:00', 'Salto il pranzo'] },
    step29: { title: 'A che ora ceni?', options: ['16:00–18:00', '18:00–20:00', '20:00–22:00', 'Salto la cena'] },
    step30: {
      title: 'Che tipo di dieta preferisci?',
      groups: {
        withMeat: { label: 'CON CARNE', items: [{ id: 'traditional', title: 'Tradizionale', desc: 'Mangio di tutto' }, { id: 'keto', title: 'Chetogenica', desc: 'Alti grassi, pochi carboidrati' }, { id: 'paleo', title: 'Paleo', desc: 'Niente cibi processati' }] },
        noMeat: { label: 'SENZA CARNE', items: [{ id: 'vegetarian', title: 'Vegetariana', desc: 'Evito carne e pesce' }, { id: 'vegan', title: 'Vegana', desc: 'Solo vegetali' }, { id: 'vegan_keto', title: 'Keto Vegana', desc: 'Vegetale low-carb' }] },
        withFish: { label: 'CON PESCE', items: [{ id: 'mediterranean', title: 'Mediterranea', desc: 'Verdure, cereali e pesce' }, { id: 'pescatarian', title: 'Pescetariana', desc: 'Pesce ma niente carne' }] },
        noAllergens: { label: 'SENZA ALLERGENI', items: [{ id: 'lactose_free', title: 'Senza lattosio', desc: 'Evito il lattosio' }, { id: 'gluten_free', title: 'Senza glutine', desc: 'Evito cereali con glutine' }] },
      },
    },
    step31: { title: 'Costruisci massa con un piano alimentare su misura', p1: 'La nutrizione è fondamentale per un corpo definito.', p2: 'Ricette veloci e gustose per centrare l’obiettivo prima.', phoneHeader: 'I tuoi pasti', breakfast: 'Colazione', lunch: 'Pranzo', dinner: 'Cena' },
    step32: { title: 'Hai qualcuna di queste abitudini?', options: ['Mangiare per noia/emozione', 'Mangiare troppo', 'Spuntini notturni', 'Saltare i pasti spesso'] },
    step33: { title: 'Specialisti certificati di alto livello', specialists: [{ name: 'Lisa Wishmann', role: 'Specialista Forza & Condizionamento' }, { name: 'Sydney Bueckert', role: 'Personal Trainer Certificata (NASM)' }, { name: 'Kelsey Butler', role: 'Nutrizionista Dietista Registrata' }] },
    step34: { title: 'Qual è la tua altezza?', placeholder: 'Altezza', rangeHintCm: 'Inserisci un valore tra 90 e 243 cm', rangeHintFt: 'Inserisci un valore tra 3 e 8 ft', consentText: 'Acconsento al trattamento dei miei dati sanitari da parte di BestMe.', privacyLink: 'Informativa sulla Privacy.' },
    step35: { title: 'Qual è il tuo peso attuale?', placeholder: 'Il tuo peso', rangeHintKg: 'Inserisci un valore tra 25 e 300 kg', rangeHintLbs: 'Inserisci un valore tra 55 e 660 lbs' },
    step36: { title: 'Capito! Qual è il tuo peso obiettivo?', placeholder: 'Peso ideale', moveLabel: 'Muoviti:', gainLabel: 'guadagna {{pct}}% di peso', loseLabel: 'perdi {{pct}}% di peso', maintainLabel: 'mantieni il peso forma', studyNote: 'Anche 5 minuti al giorno migliorano forma fisica, energia e qualità del sonno.' },
    step37: { title: 'Quanti anni hai?', unit: 'anni', noteTitle: 'Chiediamo l’età per personalizzare il piano', noteDesc: 'La composizione corporea varia con l’età a parità di IMC' },
    step38: { title: 'Analisi delle tue risposte', bars: ['Profilo', 'Attività', 'Stile di vita', 'Nutrizione'], awardTitle: 'APP DEL GIORNO', awardSub: 'in 160 paesi | 15 luglio 2025' },
    step39: { title: 'Ecco il tuo profilo benessere', bmiTitle: 'Indice di Massa Corporea (IMC)', scaleLabels: ['Sottopeso', 'Normale', 'Sovrappeso', 'Obeso'], bmiHealthyTitle: 'IMC sano:', bmiHealthyDesc: 'Ottima base per tonificare il corpo', bmiImproveTitle: 'Margine di crescita:', bmiImproveDesc: 'Il piano ottimizzerà la composizione corporea', bodyTypeLabel: 'Biotipo', lifestyleLabel: 'Stile di vita', lifestyleValue: 'Attivo', fitnessLabel: 'Livello fitness', fitnessValue: 'Intermedio', metabolismLabel: 'Metabolismo', metabolismValue: 'Moderato' },
    step40: { title: 'Eventi recenti hanno frenato la crescita muscolare?', options: ['Pressione lavorativa', 'Sfide finanziarie', 'Vita familiare intensa', 'Pandemia Covid-19', 'Separazione', 'Altri eventi stressanti', 'Metabolismo più lento'] },
    step41: { title: 'Hai un evento importante in arrivo?', subtitle: 'Un traguardo chiaro aumenta la motivazione', options: ['Vacanze', 'Riunione', 'Matrimonio', 'Compleanno', 'Festa', 'Altro', 'Evento sportivo'], noneEvent: 'Nessun evento a breve' },
    step42: { title: 'Quando sarà il tuo evento?', subtitle: 'Terremo questa data come riferimento', selectDateLabel: 'Seleziona data', privacyNote: 'Dati protetti dalla nostra Informativa sulla Privacy.' },
    step43: { title: 'Il piano che ti aiuterà finalmente a metterti in forma', estimatePrefix: 'Stimiamo che potrai pesare', untilLabel: 'entro il', untilEventTag: '{{diff}} entro {{event}}', chartObjective: 'Obiettivo', disclaimer: '* Dati basati sugli utenti attivi. I risultati possono variare.', quote: 'La Sfida di Calisthenics unisce allenamenti coinvolgenti e nutrizione sana.' },
    step44: { title: 'Qual è la tua motivazione principale?', optionsWoman: ['Sentirmi più sicura', 'Sentirmi più sana ed energica', 'Stare meglio nei vestiti', 'Tornare in forma post-parto', 'Altro'], optionsMan: ['Sentirmi più sicuro', 'Sentirmi più sano ed energico', 'Stare meglio nei vestiti', 'Aumentare la forza', 'Altro'] },
    step45: { title: 'Migliora il tuo benessere ogni giorno', p1: 'Inizia oggi e lascia che ogni sessione ricarichi le energie.', p2: 'Bastano 15 minuti al giorno: noi gestiamo la progressione.', cardTitle: 'Build Your Core', cardDuration: '15 min' },
    step46: { title: 'Quanto sei fiducioso/a di riuscire entro il {{date}}?', optionsWoman: ['Credo di farcela!', 'Ho qualche dubbio ma ci provo!', 'Mi sento ancora insicura'], optionsMan: ['Credo di farcela!', 'Ho qualche dubbio ma ci provo!', 'Mi sento ancora insicuro'] },
    step47: { title: 'Cosa rende BestMe una scelta affidabile', awards: [{ title: 'Best Mobile App Awards', desc: 'migliore app Salute & Fitness', year: '2022' }, { title: 'Top 3 app allenamento', desc: 'secondo il report Apple', year: '2022' }, { title: 'Migliori app fitness', desc: 'da Forbes Health', year: '2025' }] },
    step48: { creating: 'Creazione della tua sfida personalizzata', socialCountWoman: '287.465 donne', socialCountMan: '241.890 uomini', socialSub: 'hanno scelto BestMe per allenarsi', reviewTitle: 'Adoro questa app', reviewAuthor: 'Maria', reviewBody: 'Aiuta a seguire alimentazione ed esercizi ogni giorno.' },
    step49: { titlePrefix: 'Inserisci la tua email per ricevere ', titleHighlight: 'Sfida di Calisthenics', titleSuffix: ' personalizzata', placeholder: 'tu@esempio.it', privacyPrefix: 'Proteggiamo i tuoi dati secondo la nostra', privacyLink: 'Informativa sulla Privacy.' },
    step50: { title: 'Come ti chiami?', placeholder: 'Il tuo nome' },
    step51: { titlePrefix: '{{name}}, la tua Sfida di 4 settimane per ', goalLose: 'perdere peso', goalGain: 'aumentare i muscoli', goalFit: 'tornare in forma', titleSuffix: ' è pronta!', chartTitle: 'La tua forza muscolare', mondayBadge: 'Lunedì', weeks: ['Sett. 1', 'Sett. 2', 'Sett. 3', 'Sett. 4'], chartNote: 'Grafico a scopo illustrativo', bullet1: 'Perfetto per principianti', bullet2: 'Adattato alle tue risposte', bullet3Prefix: 'Obiettivo: {{diff}} entro {{date}}' },
    step52: { slides: ['Rendi questo lunedì quello che dura', 'Irriconoscibile con soli 15 minuti al giorno e pasti sani', 'Per definire il corpo e appiattire la pancia', 'Settimana 1 – lo sentirai\nSettimana 2 – lo vedrai\nSettimana 3 – ne sarai fiero', 'Iniziamo!'] },
    step53: { title: 'Gratta per svelare il tuo sconto speciale!', subtitle: 'Inizia il tuo percorso con una bella sorpresa', scratchHere: 'Gratta qui', discountLabel: 'di sconto', discountSub: 'sulla tua Sfida', promoLabel: 'Codice promo', overlayNote: 'Applicato automaticamente alla cassa' },
    paywall: {
      timerLabel: 'Sconto riservato per:', timerMinutes: 'minuti', timerSeconds: 'secondi', topCta: 'OTTIENI IL PIANO',
      heroTitle: 'La tua Sfida di Calisthenics è pronta!', nowLabel: 'Ora', goalLabel: 'Obiettivo',
      muscleStrength: 'Forza muscolare', strengthNow: 'Media', strengthGoal: 'Alta', calisthenicsLevel: 'Livello calisthenics', levelNow: 'Intermedio', levelGoal: 'Avanzato',
      choosePlanTitle: 'Scegli il tuo piano', promoAppliedTitle: 'Codice promo applicato!', mostPopular: 'PIÙ POPOLARE',
      plan1Title: 'Prova 1 settimana', plan1Sub: 'PIANO 4 SETTIMANE', plan4Title: 'Piano 4 Settimane', plan12Title: 'Piano 12 Settimane', perDay: 'al giorno', getMyPlan: 'OTTIENI IL PIANO',
      legalSubscription: 'Salvo disdetta prima della scadenza, l’abbonamento si rinnova al prezzo standard. Gestisci su', manageSub: 'Gestisci abbonamento',
      includedTitle: 'Cosa include il tuo piano',
      features: [
        { title: 'Allenamenti facili a casa', desc: 'per muscoli e forma fisica' },
        { title: 'Esercizi per principianti', desc: 'addome piatto e postura' },
        { title: 'Routine da 10-20 min', desc: 'perfette per la tua agenda' },
        { title: 'Senza attrezzatura', desc: 'tutto incluso nel piano' },
        { title: 'Piano pasti su misura', desc: 'ricette veloci e sane' },
        { title: 'Consigli degli esperti', desc: 'per restare costante' },
      ],
      progressHeader: 'I tuoi progressi', dayLabel: 'Giorno', ratingsCount: 'valutazioni', ratingsFiveStar: 'Recensioni 5 stelle',
      appOfDay: 'APP DEL GIORNO', appOfDaySub: 'in 160 paesi · 15 luglio 2025',
      resultsTitle: 'Risultati che ci rendono orgogliosi',
      resultsCards: [
        { name: 'Vera, -5 kg*', quote: 'Partita da 75 kg, migliorata ogni giorno.' },
        { name: 'Mandy, -4 kg*', quote: 'Sessioni brevi ma potentissime!' },
        { name: 'Nina, -3 kg*', quote: 'Perfetto anche dopo la gravidanza.' },
      ],
      faqTitle: 'Domande Frequenti',
      faqs: [
        { q: 'Come aiuta a sviluppare muscoli?', a: 'Combina video progressivi a corpo libero e dieta personalizzata.' },
        { q: 'Benefici del calisthenics?', a: 'Forza, flessibilità e definizione senza attrezzi.' },
        { q: 'E se perdo motivazione?', a: 'Promemoria e sessioni brevi di 15 min ti mantengono attivo.' },
      ],
      trustedTitle: 'Scelto da oltre 10 milioni di persone',
      trustCards: [
        { title: 'Più attiva e più forte', author: 'Natalia P.', body: 'Risultati evidenti in meno di un mese.' },
        { title: 'Ideale per dimagrire o tonificare', author: 'Juan', body: 'Progressione chiara e motivante.' },
        { title: 'Allena tutto il corpo', author: 'Mayra', body: 'Routine quotidiana fantastica.' },
      ],
      disclaimer: '*Avviso: I risultati variano in base a dieta e costanza.', excellent: 'Eccellente',
      visibleResultsTitle: 'Risultati visibili in 4 settimane!',
      guaranteeTitle: 'garanzia soddisfatti o rimborsati 30 giorni', guaranteeDesc: 'Se segui il piano per 4 settimane senza risultati, ti rimborsiamo.',
      guaranteeLinkPrefix: 'Scopri di più sulla nostra', guaranteeLink: 'politica di rimborso.', companyLegal: 'BestMe Well-Being Platform • Supporto in 6 lingue',
    },
    checkout: {
      title: 'Completa il pagamento', summaryTitle: 'Riepilogo ordine', regularPrice: 'Prezzo standard', initialDiscount: 'Sconto iniziale 50%',
      appliedPromo: 'Codice applicato:', totalToPay: 'Totale da pagare:', savingsBanner: 'Risparmi {{saved}} (50% DI SCONTO)',
      expressCheckout: 'Pagamento rapido', buyWithApplePay: 'Paga con Apple Pay', payWithPix: 'Paga con PIX',
      creditCard: 'Carta di credito', cardNumber: 'Numero carta', expiry: 'MM/AA', cvv: 'CVV', cardHolder: 'Intestatario',
      payNowBtn: 'Paga Ora', approvedMsg: 'Pagamento approvato! Apertura App BestMe...', securePayment: 'Pagamento sicuro · SSL',
    },
  },
};

export const TRANSLATIONS: Record<Locale, TranslationDict> = {
  pt: PT,
  us: US,
  es: ES,
  fr: FR,
  de: DE,
  it: IT,
};
