// ============================================================================
// CATÁLOGO CENTRALIZADO DE IMAGENS / AVATARES REALISTAS (HIGH CONVERSION)
// ============================================================================

export const AVATARS = {
  // Etapa 0: Seletor de Sexo (Segurando copo de água com limão e menta)
  gender: {
    mulher: '/assets/gender-woman.png',
    homem: '/assets/gender-man.png',
  },

  // Etapa 1: Faixas Etárias (Mulher e Homem)
  ageRanges: {
    mulher: {
      'Entre 18 e 26': '/assets/age-woman-18-26.png',
      'Entre 27 e 38': '/assets/age-woman-27-38.png',
      'Entre 39 e 50': '/assets/age-woman-39-50.png',
      'Mais de 50': '/assets/age-woman-50-plus.png',
    },
    homem: {
      'Entre 18 e 26': '/assets/age-man-18-26.png',
      'Entre 27 e 38': '/assets/age-man-27-38.png',
      'Entre 39 e 50': '/assets/age-man-39-50.png',
      'Mais de 50': '/assets/age-man-50-plus.png',
    },
  },

  // Etapa 2: Objetivos com fotos em estúdio (Masculino e Feminino)
  objectives: {
    mulher: {
      'Perder peso': '/assets/obj-woman-weight.png',
      'Melhorar minha saúde em geral': '/assets/obj-woman-health.png',
      'Conseguir um corpo firme e tonificado': '/assets/obj-woman-toned.png',
      'Livrar-me do estresse': '/assets/obj-woman-stress.png',
    },
    homem: {
      'Perder peso': '/assets/obj-man-weight.png',
      'Melhorar minha saúde em geral': '/assets/obj-man-health.png',
      'Conseguir um corpo firme e tonificado': '/assets/obj-man-toned.png',
      'Livrar-me do estresse': '/assets/obj-man-stress.png',
    },
  },

  // Etapa 3: Depoimento Reinis R.
  reinis: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',

  // Etapa 9, 10, 11: Refeições (Banners de topo)
  meals: {
    breakfast: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=600&q=80',
    lunch: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
    dinner: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80',
  },

  // Etapa 17: Reforço Positivo
  positiveReinforcement: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=360&q=80',

  // Etapa 23: Caso de Sucesso Janis D. (Antes / Depois)
  janis: {
    before: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=360&q=80',
    after: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=360&q=80',
  },

  // Etapa 31: Agradecimento Empático
  empathy: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=360&q=80',

  // Etapas 35, 36, 37: Micro-compromissos
  microCommitments: {
    35: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=360&q=80',
    36: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=360&q=80',
    37: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=360&q=80',
  },

  // Nutricionistas (Elina, Anna, Simona)
  nutritionists: {
    Elina: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=240&q=80',
    Anna: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=240&q=80',
    Simona: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=240&q=80',
  },

  // Etapa 46: Comparativo no Paywall (Hoje vs Meta) e Provas Sociais
  paywall: {
    todayMulher: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80',
    goalMulher: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=300&q=80',
    todayHomem: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    goalHomem: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=300&q=80',
    ramon: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    juana: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
  },
} as const;
