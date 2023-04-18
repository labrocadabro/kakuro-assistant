import { calculateSums, generateCombinations } from '../calculateSums';
import { describe, it, expect } from 'vitest';

describe('Kakuro sum calculator', () => {
  it('returns an array of array with the input sum if asked for one digit', () => {
    expect(calculateSums(3, 1)).toEqual([[3]]);
    expect(calculateSums(26, 1, 15, 30)).toEqual([[26]]);
  });
  it('returns an array of array with two digits when asked for a sum with 2 digits and only 1 possibility', () => {
    expect(calculateSums(3, 2)).toEqual([[1, 2]]);
    expect(calculateSums(16, 2)).toEqual([[7, 9]]);
  });
  it('returns an array of array with three digits when asked for a sum with 3 digits and only 1 possibility', () => {
    expect(calculateSums(7, 3)).toEqual([[1, 2, 4]]);
    expect(calculateSums(24, 3)).toEqual([[7, 8, 9]]);
  });
  it('returns an array of two arrays with two digits each when asked for a sum with 2 digits and 2 possibilities', () => {
    expect(calculateSums(5, 2)).toEqual([
      [1, 4],
      [2, 3]
    ]);
    expect(calculateSums(15, 2)).toEqual([
      [6, 9],
      [7, 8]
    ]);
  });
  it('returns the correct result for a  complex example', () => {
    expect(calculateSums(20, 5)).toEqual([
      [1, 2, 3, 5, 9],
      [1, 2, 3, 6, 8],
      [1, 2, 4, 5, 8],
      [1, 2, 4, 6, 7],
      [1, 3, 4, 5, 7],
      [2, 3, 4, 5, 6]
    ]);
  });
});

describe('generateCombinations', () => {
  // TODO: Error when digits < range
  it('generates one combination when min and max are equal', () => {
    expect(generateCombinations(1, 1, 1)).toEqual([[1]]);
  });
  it('generates several one-number combinations when digits = 1', () => {
    expect(generateCombinations(1, 3, 6)).toEqual([[3], [4], [5], [6]]);
  });
  it('generates a single multi-number combination when digits > 1 and there is only one possibility', () => {
    expect(generateCombinations(2, 1, 2)).toEqual([[1, 2]]);
    expect(generateCombinations(7, 2, 8)).toEqual([[2, 3, 4, 5, 6, 7, 8]]);
  });
  it('generates several multi-number combinations', () => {
    expect(generateCombinations(3, 4, 7)).toEqual([
      [4, 5, 6],
      [4, 5, 7],
      [4, 6, 7],
      [5, 6, 7]
    ]);
  });
});
