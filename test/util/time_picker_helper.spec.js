import assert from 'assert';
import { convertTimeToInt,
         convertIntToValue,
         convertIntToLabel } from '../../src/util/time_picker_helper';

describe('convertTimeToInt', () => {
  it('should convert normal time to int', () => {
    const time = '17:10';
    const intConversion = (17 * 60) + 10;
    assert.equal(convertTimeToInt(time), intConversion);
  });

  it('should convert empty time to int', () => {
    const time = '00:00';
    assert.equal(convertTimeToInt(time), 0);
  });
});

describe('convertIntToValue', () => {
  it('should convert int to 24hr time', () => {
    const intTime = 1340;
    assert.equal(convertIntToValue(intTime), '22:20');
  });

  it('should have leading 0s', () => {
    const intTime = 182;
    assert.equal(convertIntToValue(intTime), '03:02');
  });
});

describe('convertIntToLabel', () => {
  it('should convert int to 24hr time', () => {
    const intTime = 1340;
    assert.equal(convertIntToLabel(intTime, 24), '22:20');
  });

  it('should convert int to 12hr time', () => {
    let intTime = 1340;
    assert.equal(convertIntToLabel(intTime, 12), '10:20 PM');

    intTime = 330;
    assert.equal(convertIntToLabel(intTime, 12), '05:30 AM');
  });

  it('should have leading 0s', () => {
    const intTime = 182;
    assert.equal(convertIntToLabel(intTime, 24), '03:02');
  });
});
