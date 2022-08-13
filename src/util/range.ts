/**
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @returns {number[]} Returns the range of numbers.
 */
export default function range(start: number, end?: number, step = 1): number[] {
  if (end === undefined) {
    end = start;
    start = 0;
  }
  step = start < end ? Math.abs(step) : -Math.abs(step);

  if (end - start === 0 || step === 0) {
    return [];
  }

  return Array.from({ length: Math.ceil((end - start) / step) }, (_, i) => step * i + start);
}
