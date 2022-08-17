import assert from 'assert';
import range from './range';

describe('range', () => {
  it('should infer the sign of step when only end is given', () => {
    assert.deepEqual(range(4), [0, 1, 2, 3]);
    assert.deepEqual(range(-4), [0, -1, -2, -3]);
  });

  it('should infer the sign of step when only start and end are given', () => {
    assert.deepEqual(range(1, 5), [1, 2, 3, 4]);
    assert.deepEqual(range(5, 1), [5, 4, 3, 2]);
  });

  it('should work with a start, end, and step', () => {
    assert.deepEqual(range(0, -4, -1), [0, -1, -2, -3]);
    assert.deepEqual(range(5, 1, -1), [5, 4, 3, 2]);
    assert.deepEqual(range(0, 20, 5), [0, 5, 10, 15]);
  });

  it('should support a step of 0', () => {
    assert.deepEqual(range(1, 4, 0), []);
  });

  it('should work with a step larger than end', () => {
    assert.deepEqual(range(1, 5, 20), [1]);
  });

  it('should work with a negative step', () => {
    assert.deepEqual(range(0, -4, -1), [0, -1, -2, -3]);
    assert.deepEqual(range(21, 10, -3), [21, 18, 15, 12]);
  });
});
