// src/stringCalculator.ts
export function add(input: string): number {
  if (!input.trim()) return 0;

  const normalized = input.replace(/\n/g, ',');
  const tokens = normalized.split(',');

  const numbers = tokens
    .filter((t) => t.trim() !== '')
    .map((t) => {
      const n = Number(t);
      if (Number.isNaN(n)) throw new Error(`Invalid number: ${t}`);
      return n;
    });

  const negatives = numbers.filter((n) => n < 0);
  if (negatives.length) {
    throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
  }

  return numbers.filter((n) => n <= 1000).reduce((sum, n) => sum + n, 0);
}
