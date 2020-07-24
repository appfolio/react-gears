import assert from 'assert';
import * as DateUtils from '../../src/util/date.js';

describe('date', () => {
  describe('#format', () => {
    it('uses date-fns format', () => {
      assert.equal(DateUtils.format(new Date(2017, 7, 14), 'MM/dd/yyyy'), '08/14/2017');
    });
  });

  describe('#isValidDate', () => {
    it('returns true when date is valid', () => {
      assert.equal(DateUtils.isValidDate(new Date(2017, 7, 14)), true);
    });

    it('returns false when date is null', () => {
      assert.equal(DateUtils.isValidDate(null), false);
    });

    it('returns false when date is undefined', () => {
      assert.equal(DateUtils.isValidDate(undefined), false);
    });

    it('returns false when date is invalid', () => {
      assert.equal(DateUtils.isValidDate(new Date(undefined)), false);
    });
  });

  describe('#parse', () => {
    it('returns null when date is null', () => {
      assert.equal(DateUtils.parse(null, 'MM/dd/yyyy'), null);
    });

    it('returns null when date is undefined', () => {
      assert.equal(DateUtils.parse(undefined, 'MM/dd/yyyy'), null);
    });

    it('returns null when date is blank', () => {
      assert.equal(DateUtils.parse(undefined, 'MM/dd/yyyy'), null);
    });

    it('returns null when date is unparsable', () => {
      assert.equal(DateUtils.parse('What a date!', 'MM/dd/yyyy'), null);
    });

    it('uses date-fns format', () => {
      assert.equal(DateUtils.parse('08/14/2017', 'MM/dd/yyyy').toString(), new Date(2017, 7, 14).toString());
    });
  });
});
