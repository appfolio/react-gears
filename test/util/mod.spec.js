import assert from 'assert';
import mod from '../../src/util/mod.js';

describe('mod', () => {
  it('should behave like % when signs match', () => {
    for (let n = 1; n < 10; n++) { // eslint-disable-line no-plusplus
      assert.equal(mod(n, 5), n % 5, 'positive numbers');
    }
    for (let n = -10; n < 0; n++) { // eslint-disable-line no-plusplus
      assert.equal(mod(n, -5), n % -5, 'negative numbers');
    }
  });

  it('result should match the sign of the divisor', () => {
    for (let n = 1; n < 10; n++) { // eslint-disable-line no-plusplus
      assert.equal(mod(n, -5), (n - 10) % 5, 'positive numbers');
    }
    for (let n = -10; n < 0; n++) { // eslint-disable-line no-plusplus
      assert.equal(mod(n, 5), (n + 10) % 5, 'negative numbers');
    }
  });
});

