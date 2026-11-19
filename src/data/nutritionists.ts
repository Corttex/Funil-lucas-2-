export const NUTRITIONISTS = [
  { name: 'Elina', role: 'Especialista em Metabolismo', emoji: '👩🏼‍⚕️' },
  { name: 'Anna', role: 'Nutricionista Clínica', emoji: '👩🏻‍⚕️' },
  { name: 'Simona', role: 'Coach de Hábitos', emoji: '👩🏽‍⚕️' },
];

export const NUTRITION_FAQ = [
  {
    q: 'O que quebra o jejum?',
    a: 'Qualquer alimento ou bebida com calorias, açúcar, leite ou adoçantes calóricos quebra o jejum. Água, café preto puro e chás sem açúcar estão liberados.',
  },
  {
    q: 'Posso tomar café sem açúcar durante o jejum?',
    a: 'Sim! O café preto puro sem açúcar ou leite tem praticamente zero calorias e ainda ajuda a controlar o apetite e aumentar o foco.',
  },
  {
    q: 'Como lidar com a fome à noite?',
    a: 'Priorize proteínas e fibras na última refeição da janela alimentar e beba 300 ml de água ou chá de camomila morno ao sentir vontade de beliscar.',
  },
];

export function hungerTip(hungerTime: string): string {
  switch (hungerTime) {
    case 'manha':
      return 'Como sua fome costuma bater pela manhã, comece o dia com 400 ml de água e café preto ou chá verde para prolongar a saciedade.';
    case 'tarde':
      return 'Para evitar picos de fome à tarde, garanta boas fontes de proteína e gorduras saudáveis no almoço.';
    case 'noite':
      return 'Sua fome aparece mais à noite: feche a janela alimentar com uma refeição rica em proteínas e fibras para dormir saciado(a).';
    default:
      return 'Mantenha a hidratação constante ao longo do dia — muitas vezes o cérebro confunde sede leve com fome.';
  }
}
