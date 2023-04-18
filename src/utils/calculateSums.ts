export function calculateSums(
  sum: number,
  digits: number,
  min: number = 1,
  max: number = 9
): number[][] {
  let result = [];
  let combos = generateCombinations(digits, min, max);
  for (let combo of combos) {
    const total = combo.reduce((a, b) => a + b, 0);
    if (total === sum) result.push(combo);
  }

  return result;
}

export function generateCombinations(digits: number, min: number = 1, max: number = 9): number[][] {
  let result = [];
  if (digits === 1) {
    for (let i = min; i <= max; i++) {
      result.push([i]);
    }
  } else {
    for (let i = min; i <= max; i++) {
      let combos = generateCombinations(digits - 1, i + 1, max);
      for (let combo of combos) {
        result.push([i].concat(combo));
      }
    }
  }

  return result;
}
