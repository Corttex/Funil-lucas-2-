// ============================================================================
// CATÁLOGO CENTRALIZADO DE IMAGENS / AVATARES (HOMEM E MULHER)
// ============================================================================

export const AVATARS = {
  // Etapa 0: Seletor de Gênero (Homem / Mulher)
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
      '18-29': '/assets/age-woman-18-26.png',
      '30-39': '/assets/age-woman-27-38.png',
      '40-49': '/assets/age-woman-39-50.png',
      '50+': '/assets/age-woman-50-plus.png',
    },
    homem: {
      'Entre 18 e 26': '/assets/age-man-18-26.png',
      'Entre 27 e 38': '/assets/age-man-27-38.png',
      'Entre 39 e 50': '/assets/age-man-39-50.png',
      'Mais de 50': '/assets/age-man-50-plus.png',
      '18-29': '/assets/age-man-18-26.png',
      '30-39': '/assets/age-man-27-38.png',
      '40-49': '/assets/age-man-39-50.png',
      '50+': '/assets/age-man-50-plus.png',
    },
  },

  // Compatibilidade com MemberApp / LoginScreen
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

  reinis: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',

  meals: {
    breakfast: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=600&q=80',
    lunch: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
    dinner: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80',
  },

  positiveReinforcement: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=360&q=80',

  janis: {
    before: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=360&q=80',
    after: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=360&q=80',
  },

  empathy: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=360&q=80',

  microCommitments: {
    35: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=360&q=80',
    36: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=360&q=80',
    37: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=360&q=80',
  },

  nutritionists: {
    Elina: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=240&q=80',
    Anna: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=240&q=80',
    Simona: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=240&q=80',
  },

  paywall: {
    todayMulher: '/assets/obj-woman-weight.png',
    goalMulher: '/assets/obj-woman-toned.png',
    todayHomem: '/assets/obj-man-weight.png',
    goalHomem: '/assets/obj-man-toned.png',
    ramon: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    juana: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
  },

  calisthenics: {
    physiques: {
      mulher: {
        slim: '/assets/body-woman-triangulo-invertido.png',
        average: '/assets/body-woman-retangulo.png',
        plus: '/assets/body-woman-triangulo.png',
        overweight: '/assets/body-woman-oval.png',
      },
      homem: {
        slim: '/assets/obj-man-stress.png',
        average: '/assets/obj-man-health.png',
        plus: '/assets/obj-man-weight.png',
        overweight: '/assets/age-man-50-plus.png',
      },
    },
    dreamBodies: {
      mulher: {
        slim: '/assets/body-woman-retangulo.png',
        toned: '/assets/obj-woman-toned.png',
        curvy: '/assets/body-woman-ampulheta.png',
        bulk: '/assets/obj-woman-health.png',
      },
      homem: {
        slim: '/assets/obj-man-health.png',
        toned: '/assets/obj-man-toned.png',
        curvy: '/assets/age-man-27-38.png',
        bulk: '/assets/age-man-18-26.png',
      },
    },
    focusAreas: {
      mulher: {
        abs: '/assets/obj-woman-toned.png',
        glutes: '/assets/body-woman-ampulheta.png',
        legs: '/assets/obj-woman-health.png',
        chest: '/assets/age-woman-18-26.png',
        arms: '/assets/obj-woman-stress.png',
        back: '/assets/body-woman-triangulo-invertido.png',
      },
      homem: {
        abs: '/assets/obj-man-toned.png',
        glutes: '/assets/obj-man-weight.png',
        legs: '/assets/obj-man-health.png',
        chest: '/assets/age-man-27-38.png',
        arms: '/assets/obj-man-stress.png',
        back: '/assets/sens-back-man.png',
      },
    },
    sensitivities: {
      mulher: {
        back: '/assets/sens-back-woman.png',
        knees: '/assets/sens-knees-woman.png',
        none: '/assets/sens-none-woman.png',
      },
      homem: {
        back: '/assets/sens-back-man.png',
        knees: '/assets/sens-knees-man.png',
        none: '/assets/sens-none-man.png',
      },
    },
    water: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=480&q=80',
    sleep: 'https://images.unsplash.com/photo-1511295742362-92c96b1cf484?auto=format&fit=crop&w=480&q=80',
    beforeAfter: [
      {
        before: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=260&q=80',
        after: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=260&q=80',
      },
      {
        before: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=260&q=80',
        after: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=260&q=80',
      },
      {
        before: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=260&q=80',
        after: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=260&q=80',
      },
    ],
  },
} as const;
