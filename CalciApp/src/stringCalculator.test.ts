// src/stringCalculator.test.ts
import { add } from './stringCalculator';

describe('stringCalculator - add()', () => {
  test('empty string returns 0', () => {
    expect(add('')).toBe(0);
  });

  test('single number returns that number', () => {
    expect(add('5')).toBe(5);
  });

  test('two numbers comma separated', () => {
    expect(add('1,2')).toBe(3);
  });

  test('multiple numbers with newlines and commas', () => {
    expect(add('1\n2,3')).toBe(6);
  });

  test('ignores numbers greater than 1000', () => {
    expect(add('2,1001')).toBe(2);
  });

  test('throws on negative numbers with list of negatives', () => {
    expect(() => add('1,-2,3,-4')).toThrow('Negatives not allowed: -2, -4');
  });

  test('throws on invalid tokens', () => {
    expect(() => add('1,foo,3')).toThrow('Invalid number: foo');
  });
});
