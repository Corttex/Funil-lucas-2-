export interface Recipe {
  id: string;
  title: string;
  mealSlot: string;
  timeLabel: string;
  kcal: number;
  category: '< 15 min' | 'Rápidas' | 'Detox' | 'Low Carb';
  ingredients: string[];
  steps: string[];
}

export const DAILY_SUGGESTIONS = [
  { slot: 'Quebra de Jejum (12:00)', title: 'Omelete proteico com espinafre e abacate', kcal: 340 },
  { slot: 'Almoço (14:30)', title: 'Salmão grelhado com legumes salteados no azeite', kcal: 520 },
  { slot: 'Lanche (17:00)', title: 'Iogurte natural com chia e frutas vermelhas', kcal: 180 },
  { slot: 'Jantar (19:30)', title: 'Creme de abóbora cabotiá com frango desfiado', kcal: 390 },
];

export const RECIPES: Recipe[] = [
  {
    id: 'omelete-espinafre',
    title: 'Omelete proteico com espinafre e abacate',
    mealSlot: 'Quebra de Jejum',
    timeLabel: '10 min',
    kcal: 340,
    category: '< 15 min',
    ingredients: ['2 ovos inteiros', '1 punhado de espinafre', '1/4 de abacate fatiado', 'Sal e pimenta'],
    steps: ['Bata os ovos com sal e pimenta.', 'Refogue o espinafre por 1 minuto.', 'Despeje os ovos e sirva com abacate.'],
  },
  {
    id: 'salmao-legumes',
    title: 'Salmão grelhado com legumes no azeite',
    mealSlot: 'Almoço',
    timeLabel: '20 min',
    kcal: 520,
    category: 'Low Carb',
    ingredients: ['150g de filé de salmão', 'Brócolis e abobrinha', '1 col. sopa de azeite', 'Limão e ervas'],
    steps: ['Tempere o salmão com limão.', 'Grelhe por 4 min de cada lado.', 'Salteie os legumes no azeite.'],
  },
  {
    id: 'iogurte-chia',
    title: 'Iogurte natural com chia e frutas vermelhas',
    mealSlot: 'Lanche',
    timeLabel: '5 min',
    kcal: 180,
    category: 'Rápidas',
    ingredients: ['170g de iogurte natural sem açúcar', '1 col. sopa de chia', 'Morangos e mirtilos'],
    steps: ['Misture a chia ao iogurte.', 'Finalize com as frutas vermelhas frescas.'],
  },
  {
    id: 'suco-verde-detox',
    title: 'Suco verde metabólico com gengibre',
    mealSlot: 'Lanche',
    timeLabel: '5 min',
    kcal: 95,
    category: 'Detox',
    ingredients: ['1 folha de couve', '1/2 limão espremido', '1 rodela de gengibre', '200ml de água gelada'],
    steps: ['Bata todos os ingredientes no liquidificador.', 'Sirva sem coar para preservar as fibras.'],
  },
  {
    id: 'creme-abobora-frango',
    title: 'Creme de abóbora cabotiá com frango desfiado',
    mealSlot: 'Jantar',
    timeLabel: '15 min',
    kcal: 390,
    category: '< 15 min',
    ingredients: ['200g de abóbora cozida', '100g de frango desfiado', 'Cebola, alho e cúrcuma'],
    steps: ['Bata a abóbora cozida com água do cozimento.', 'Aqueça com cúrcuma e finalize com o frango.'],
  },
];
