import { describe, it, expect } from 'vitest';
import {
  genderTerms, calcBmi, bmiCategory, idealWeight, weeksToGoal, targetDate,
  formatDatePtBr, recommendProtocol, waterGoalMl, projectedWeight, kgToLb, lbToKg,
} from '../src/engine/calculations';

describe('engine', () => {
  it('flexiona gênero', () => {
    expect(genderTerms('mulher').familiarizado).toBe('familiarizada');
    expect(genderTerms('homem').pessoas).toBe('homens');
  });

  it('calcula IMC', () => {
    expect(calcBmi(70, 170)).toBeCloseTo(24.22, 2);
  });

  it('classifica IMC nos limites', () => {
    expect(bmiCategory(18.4)).toBe('abaixo');
    expect(bmiCategory(18.5)).toBe('normal');
    expect(bmiCategory(24.9)).toBe('normal');
    expect(bmiCategory(25)).toBe('sobrepeso');
    expect(bmiCategory(29.9)).toBe('sobrepeso');
    expect(bmiCategory(30)).toBe('obesidade');
  });

  it('calcula peso ideal e faixa', () => {
    expect(idealWeight(170)).toEqual({ ideal: 62, min: 55, max: 71 });
  });

  it('calcula semanas com mínimo de 1 kg', () => {
    expect(weeksToGoal(80, 70, 1)).toBe(10);
    expect(weeksToGoal(80, 70, 0.5)).toBe(20);
    expect(weeksToGoal(70, 70, 1)).toBe(1);
  });

  it('projeta e formata data em PT-BR', () => {
    const d = targetDate(10, new Date(2026, 10, 19));
    expect(formatDatePtBr(d)).toBe('28 jan 2027');
  });

  it('recomenda protocolo', () => {
    expect(recommendProtocol({ experience: 'nao_conheco', goalIntensity: 'maximo', sensitiveConditions: false })).toBe('14:10');
    expect(recommendProtocol({ experience: 'experimentei', goalIntensity: 'tentar', sensitiveConditions: true })).toBe('14:10');
    expect(recommendProtocol({ experience: 'ouvi_falar', goalIntensity: 'tentar', sensitiveConditions: false })).toBe('16:8');
    expect(recommendProtocol({ experience: 'experimentei', goalIntensity: 'maximo', sensitiveConditions: false })).toBe('18:6');
  });

  it('calcula meta de água', () => {
    expect(waterGoalMl(70)).toBe(2450);
  });

  it('projeta peso sem passar da meta', () => {
    expect(projectedWeight(80, 70, 1, 4)).toBe(76);
    expect(projectedWeight(80, 70, 1, 20)).toBe(70);
  });

  it('converte unidades', () => {
    expect(lbToKg(kgToLb(70))).toBeCloseTo(70, 5);
  });
});
