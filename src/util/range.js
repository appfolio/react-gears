/**
 * Range function
 *
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 */
export default function range(start, end, step) {
  if (end === undefined) {
    end = start;
    start = 0;
  }
  step = step === undefined ? (start < end ? 1 : -1) : step;

  let index = -1;
  let length = Math.max(Math.ceil((end - start) / (step || 1)), 0);
  const result = new Array(length);

  while (length--) {
    result[++index] = start;
    start += step;
  }
  return result;
}
