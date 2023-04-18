export function calculateSums(
  sum: number,
  digits: number,
  min: number = 1,
  max: number = 9
): number[][] {
  let result = [];
  if (digits == 1) return [[sum]];
  for (let i = min; i <= max; i++) {
    const remainder = sum - i;
    if (remainder >= min && remainder <= max) {
      result.push([i, remainder]);
      break;
    }
  }
  return result;
}
