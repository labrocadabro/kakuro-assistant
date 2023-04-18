import { calculateSums } from '../calculateSums';
import { describe, it, expect } from 'vitest';

describe('Kakuro sum calculator', () => {
  it('returns an array of array with the input sum if asked for one digit', () => {
    expect(calculateSums(3, 1)).toEqual([[3]]);
    expect(calculateSums(26, 1)).toEqual([[26]]);
  });
  it('returns an array of array with two digits when asked for a sum with 2 digits and only 1 possibility', () => {
    expect(calculateSums(3, 2)).toEqual([[1, 2]]);
    expect(calculateSums(16, 2)).toEqual([[7, 9]]);
  });
  it.skip('returns an array of two arrays with two digits each when asked for a sum with 2 digits and 2 possibilities', () => {
    expect(calculateSums(5, 2)).toEqual([
      [1, 4],
      [2, 3]
    ]);
    // expect(calculateSums(15, 2)).toEqual([
    //   [6, 9],
    //   [7, 8]
    // ]);
  });
});
